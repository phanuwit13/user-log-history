// import lib
const express = require('express');

const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('../config')
const tokenList = {}
const app = express()

const db = require('../util/db.config');
// define variable
const sequelize = db.sequelize;
const User = db.user;
const Log = db.loglogin;
const Status = db.status;
const route = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

function getTimeDate(params) {
  let date = new Date();
  return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
}

//login
route.post('/login', async (req, res, next) => {
  console.log('body::==', req.body);
  console.log('params::==', req.params);
  const username = req.body.username;
  const password = req.body.password;
  const user = {
    "username": username
  }
  let data = {};
  let log = {}
  if (username && password) {
    data['data'] = await User.findByPk(username);
    if (data['data'] != null) {
      if (bcrypt.compareSync(req.body.password, data['data'].password)) {
        data['success'] = true
        data['message'] = "เข้าสู่ระบบสำเร็จ"
        log['loginId'] = 0
        log['username'] = data['data'].username
        log['date_stamp'] = getTimeDate()
        log['statusId'] = 1
        // data['data'] = log
        let newLog = await sequelize.transaction(function (t) {
          // chain all your queries here. make sure you return them.
          return Log.create(log, { transaction: t });
        });

        const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife })
        const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife })
        User.update({
          token: token,
          refreshToken: refreshToken
        }, {
          where: { username: username },
        }).then((result) => {
          console.log(result);
        })
        data['data'].token = token
        data['data'].refreshToken = refreshToken
        // const response = {
        //   "status": "Logged in",
        //   "token": token,
        //   "refreshToken": refreshToken,
        // }
        data['token'] = token
        data['refreshToken'] = refreshToken
        // tokenList[refreshToken] = data
        // res.status(200).json(response);
        res.send(data);
      }
      else {

        log['loginId'] = 0
        log['username'] = data['data'].username
        log['date_stamp'] = getTimeDate()
        log['statusId'] = 2
        data['data'] = null
        data['success'] = false
        data['message'] = "รหัสผ่านไม่ถูกต้อง"
        let newLog = await sequelize.transaction(function (t) {
          // chain all your queries here. make sure you return them.
          return Log.create(log, { transaction: t });
        });
        res.send(data);
      }
    }
    else {
      data['success'] = false
      data['message'] = "ไม่พบข้อมูลผู้ใช้"
      res.send(data);
    }
  }
  else {
    data['success'] = false
    data['message'] = "กรุณากรอกข้อมูลให้ครบ"
    res.send(data);
  }


});

//Register
route.post('/register', async (req, res, next) => {
  console.log('body::==', req.body);
  console.log('params::==', req.params);
  const username = req.body.username;
  const register = req.body;
  const hashPassword = req.body.password;
  let data = {}
  if (username) {
    data['data'] = await User.findByPk(username);
    if (data['data'] == null) {
      const hash = await bcrypt.hashSync(hashPassword, saltRounds);
      register.password = hash
      let newUser = await sequelize.transaction(function (t) {
        // chain all your queries here. make sure you return them.
        return User.create(register, { transaction: t });
      });
      if (newUser) {
        data['data'] = newUser
        data['success'] = true
        data['message'] = "สมัครสมาชิกสำเร็จ"
        res.send(data);
      }
      else {
        data['data'] = null
        data['success'] = false
        data['message'] = "กรุณาตรวจสอบข้อมูล"
        res.send(data);
      }

    }
    else {
      data['data'] = null
      data['success'] = false
      data['message'] = "Usernameนี้มีผู้ใช้แล้ว"
      res.send(data);
    }
  } else {
    data['data'] = null
    data['success'] = false
    data['message'] = "กรุณากรอกข้อมูลให้ครบถ้วน"
    res.send(data);
  }

});

route.post('/token', async (req, res) => {
  // refresh the damn token
  const postData = req.body
  const username = req.body.username;
  const user = {
    "username": username
  }
  let data = {};
  refreshToken = await User.findOne({
    where: { refreshToken: postData.refreshToken },
  });

  if ((postData.refreshToken && (refreshToken) && postData.refreshToken === refreshToken.refreshToken)) {

    jwt.verify(postData.refreshToken, config.refreshTokenSecret, function (err, decoded) {

      console.log(err);
      console.log(":");
      console.log(decoded);
      if (err) {
        data = {
          success: false,
          message: "refreshToken หมดอายุ กรุณา Login ใหม่",
          status: "401"
        }
        return res.send(data);
      }
      const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife })
      const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife })
      User.update({
        token: token,
        refreshToken: refreshToken
      }, {
        where: { username: username },
      }).then((result) => {
        console.log(result);
      })
      data['token'] = token
      data['refreshToken'] = refreshToken
      data['success'] = true
      data['message'] = "พบ Token"
      // update the token in the list
      // tokenList[postData.refreshToken].token = token
      return res.send(data);
    });


  } else {
    data = {
      success: false,
      message: "ไม่พบ refreshToken กรุณา Login ใหม่",
      status: "404"
    }
    return res.send(data);
  }
})

route.use(require('../auth/tokenChecker'))

//update
route.post('/update', async (req, res, next) => {
  console.log('body::==', req.body);
  console.log('params::==', req.params);
  const username = req.body.username;
  const dataUpdate = req.body
  let data = {};
  if (username && dataUpdate) {
    let response = await sequelize.transaction(function (t) {
      return User.update(
        dataUpdate,
        { where: { username: username } },
        { transaction: t }
      );
    });

    if (response) {
      data['data'] = await User.findByPk(username);
      data['success'] = true
      data['message'] = "แก้ไขข้อมูลสำเร็จ"
      res.send(data);
    }
    else {
      data['data'] = response
      data['success'] = false
      data['message'] = "อัพเดทไม่สำเร็จ"
      res.send(data);

    }
  }
  else {
    data['data'] = null
    data['success'] = false
    data['message'] = "กรุณากรอกข้อมูลให้ครบถ้วน"
    res.send(data);
  }
});


route.post('/getlog', async (req, res, next) => {
  console.log('body::==', req.body);
  console.log('params::==', req.params);
  const username = req.body.username;
  let data = {};
  if (username) {
    data['data'] = await Log.findAll({
      where: { username: username },
      include: [
        {
          model: Status,
        }
      ]
    });
    data['success'] = true
    data['message'] = "สำเร็จ"
    res.send(data);
  }
  else {
    data['data'] = null
    data['success'] = false
    data['message'] = "ไม่สำเร็จ"
    res.send(data);
  }
});

// route.get("/checkLogin/:user", (req, res) => {
//   // return res.redirect('http://localhost:3005/login')
//   const username = req.params.user;
//   User.findByPk(username).then((data) => {
//     if (data) {
//       res.send('')
//     } else {
//       res.send('/login')
//     }

//   })

//   // return res.send("/login")
// });
// // get blogs all
// route.get('/find/all', async (req, res, next) => {
//   console.log('body::==', req.body);
//   console.log('params::==', req.params);
//   const blogs = await User.findAll();
//   res.json(blogs);
// });

// route.post('/Log', async (req, res, next) => {
//   console.log('body::==', req.body);
//   console.log('params::==', req.params);
//   const blogs = await Log.findAll();
//   res.json(blogs);
// });

//create blog
// route.post('/create', async (req, res, next) => {
//   console.log('body::==', req.body);
//   console.log('params::==', req.params);
//   const blog = req.body;
//   let newBlog = null;
//   if (blog) {
//     newBlog = await sequelize.transaction(function (t) {
//       // chain all your queries here. make sure you return them.
//       return User.create(blog, { transaction: t });
//     });
//   }
//   res.json(newBlog);
// });

// update blog
// route.put('/update/:id', async (req, res, next) => {
//   console.log('body::==', req.body);
//   console.log('params::==', req.params);
//   const blog = req.body;
//   const postId = req.params.id;
//   let updateBlog = null;
//   if (blog && postId) {
//     updateBlog = await sequelize.transaction(function (t) {
//       return User.update(
//         blog,
//         { where: { postId: postId } },
//         { transaction: t }
//       );
//     });
//   }
//   res.json(updateBlog);
// });

//delete blog with id
// route.delete('/delete/:id', async (req, res, next) => {
//   console.log('body::==', req.body);
//   console.log('params::==', req.params);
//   const blogId = req.params.id;
//   let blogDestroy = null;
//   if (blogId) {
//     const blog = await User.findById(blogId);
//     if (blog) {
//       blogDestroy = await blog.destroy();
//     }
//   }
//   res.json(blogDestroy);
// });

module.exports = route;