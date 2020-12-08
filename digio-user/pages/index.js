import Layout from '../components/Layout'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import service from '../services/services'
import Swal from "sweetalert2";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';
import withPrivateRoute from '../components/withPrivateRoute';
import { render } from 'react-dom';
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";
const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    float: 'left',
    marginRight: '20px',
    marginTop: '10px',
  },
});
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
// const setUserData = (props) => {
//   let userData = JSON.parse(this.getUser(this))
//   console.log(userData)
// }

function Index() {
  const [data, setData] = useState({
    username: '',
    firstname: '',
    lastname: ''
  });
  const [form, setForm] = useState({
    username: '',
    firstname: '',
    lastname: ''
  });
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [logStatus, setLog] = React.useState([]);

  const setUserData = (e) => {
    let userData = []
    userData = JSON.parse(localStorage.getItem("userLogin"))

    setData({
      ...data, ['username']: userData.username, ['firstname']: userData.firstname,
      ['lastname']: userData.lastname, ['password']: userData.password
    })
    setForm({
      ...form, ['username']: userData.username, ['firstname']: userData.firstname,
      ['lastname']: userData.lastname, ['password']: userData.password, ['passwordCon']: userData.password,
      ['token']: userData.token, ['refreshToken']: userData.refreshToken
    })
    // console.log(userData)
    getLog(userData)
  }

  const setToken = () => {
    // console.log("เซ็ตไม่ได้สักทีวะ")
    let dataToken = []
    dataToken = JSON.parse(localStorage.getItem('userLogin'))
    setForm({
      ...form, token: dataToken.token, refreshToken: dataToken.refreshToken,
    })
  }

  const setValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    // console.log(form)
  }

  const classes = useStyles();


  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userLogin"))
    if (data == null) {
      service.toPath('/login')
    }
    else {
      setUserData()

    }
    // console.log("useEffect");
    // console.log(form)
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editData = async () => {
    service.showConfirm("", "ยืนยันการแก้ไขข้อมูล ?", "warning").then(async (res) => {
      if (res) {
        // console.log(" form ก่อนส่งไปขอ อัพเดท")
        // console.log(form)
        service.httpPost("update", form).then((value) => {
          // console.log(value)
          if (value.success) {
            localStorage.setItem('userLogin', JSON.stringify(value.data));
            Swal.fire({
              title: "",
              text: value.message,
              icon: 'success',
            }).then(() => {
              setUserData()
              setOpen(false);
            })
          }
          else {
            if (value.status == 401) {
              service.showConfirm('', value.message + ' ต้องการดำเนินการต่อหรือไม่ !', 'warning').then(async (res) => {
                if (res) {
                  let userData = await JSON.parse(localStorage.getItem('userLogin'));
                  let token = await service.httpPost('token', userData)
                  // console.log("token ใหม่")
                  // console.log(token)
                  if (token.success) {
                    userData.token = token.token
                    userData.refreshToken = token.refreshToken
                    localStorage.setItem('userLogin', JSON.stringify(userData))
                    setToken()
                    // console.log(userData)
                    // console.log("ฟอร์ม")
                    // console.log(form)
                    // editData()
                  }
                  else {
                    Swal.fire({
                      title: "",
                      text: token.message,
                      icon: 'error',
                    }).then(() => {
                      service.toPath('/login')
                      localStorage.clear()
                    })
                  }
                }
                else {
                  Swal.fire({
                    title: "",
                    text: value.message,
                    icon: 'error',
                  }).then(() => {
                    service.toPath('/login')
                    localStorage.clear()
                  })


                }
              })
            }
            else {
              Swal.fire({
                title: "",
                text: value.message,
                icon: 'error',
              }).then(() => {
                service.toPath('/login')
                localStorage.clear()
              })

            }


          }
        })


      } else {

      }

    })

  }
  const getLog = async (userData) => {
    // let log = []
    var log = await service.httpPost("getlog", userData)
    if (log.success) {
      setLoading(false)
      // console.log(log['data'])
      log['data'].map((value, key) => {

        value['id'] = key + 1;
        value['status'] = value['statuslogin'].statusName

      })
      setLog(log['data'])
      // console.log(logStatus)
    }
    else {
      if (log.status == 401) {
        service.showConfirm('', log.message + ' ต้องการดำเนินการต่อหรือไม่ !', 'warning').then(async (res) => {
          if (res) {
            let userData = await JSON.parse(localStorage.getItem('userLogin'));
            let token = await service.httpPost('token', userData)
            // console.log(token)
            if (token.success) {
              userData.token = token.token
              userData.refreshToken = token.refreshToken
              localStorage.setItem('userLogin', JSON.stringify(userData))
              // let userData = await JSON.parse(localStorage.getItem('userLogin'));
              // console.log(userData)
              getLog(userData)
            }
            else {
              Swal.fire({
                title: "",
                text: token.message,
                icon: 'error',
              }).then(() => {
                service.toPath('/login')
                localStorage.clear()
              })
            }
          }
          else {
            Swal.fire({
              title: "",
              text: log.message,
              icon: 'error',
            }).then(() => {
              service.toPath('/login')
              localStorage.clear()
            })


          }
        })
      }
      else {
        Swal.fire({
          title: "",
          text: log.message,
          icon: 'error',
        }).then(() => {
          service.toPath('/login')
          localStorage.clear()
        })

      }

    }

  }

  const columns = [
    { field: 'date_stamp', headerName: 'วันที่และเวลา', width: 150 },
    { field: 'status', headerName: 'สถานะ', width: 170 },
  ];

  return (

    <Layout>
      
      <div className="sweet-loading">
        <HashLoader
          css={override}
          size={100}
          color={"#123abc"}
          loading={loading}
        />
      </div>
      <Dialog maxWidth="xs" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">แก้ไขข้อมูล</DialogTitle>
        <DialogContent>
          <TextField size="small" fullWidth margin="normal" value={form.username || ''} onChange={setValue} label="Username" name="username" disabled variant="outlined" />
          {/* <TextField size="small" fullWidth margin="normal" onChange={setValue} type="password" name="password" label="Password" variant="outlined" />
          <TextField size="small" fullWidth margin="normal" onChange={setValue} type="password" name="passwordCon" label="Password Confirm" variant="outlined" /> */}
          <TextField size="small" fullWidth margin="normal" value={form.firstname || ''} onChange={setValue} label="Firstname" name="firstname" variant="outlined" />
          <TextField size="small" fullWidth margin="normal" value={form.lastname || ''} onChange={setValue} label="Lastname" name="lastname" variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={editData} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Card hidden={loading} className={classes.root}>
        <CardContent>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="320"
            image="https://www.w3schools.com/w3css/img_avatar3.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <TextField size="small" margin="normal" value={data.username} label="Username" disabled variant="outlined" />
            <TextField size="small" margin="normal" value={data.firstname} label="Firstname" disabled variant="outlined" />
            <TextField size="small" margin="normal" value={data.lastname} label="Lastname" disabled variant="outlined" />
          </CardContent>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => { handleClickOpen(); }}>
            Edit
        </Button>
        </CardActions>
      </Card>
      <Card hidden={loading} className={classes.root}>
        <CardContent>
          {/* <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">วันและเวลา</TableCell>
                  <TableCell align="center">สถานะ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {logStatus.map((value, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {value.date_stamp}
                    </TableCell>
                    <TableCell >{value.statuslogin.statusName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
          <div style={{ height: 500, width: '330px' }}>
            <DataGrid rows={logStatus} columns={columns} pageSize={7} />
          </div>
        </CardContent>
      </Card>
    </Layout >

  )

}

export default Index