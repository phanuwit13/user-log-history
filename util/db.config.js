const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//import model
db.user = require('../model/user.js')(sequelize, Sequelize);
db.loglogin = require('../model/loglogin.js')(sequelize, Sequelize);
db.status = require('../model/statuslogin.js')(sequelize, Sequelize);

//Relation
// db.comments.belongsTo(db.posts);
// db.posts.hasMany(db.comments);
// db.posts.belongsTo(db.users);
// db.users.hasMany(db.posts);



// db.status.hasMany(db.loglogin);
// db.loglogin.belongsTo(db.status, {
//   foreignKey: "statusId"
// });

// db.status.hasMany(db.loglogin);
// db.loglogin.belongsTo(db.status);

// db.loglogin.belongsTo(db.user, {foreignKey : 'username'});
db.loglogin.belongsTo(db.status, {foreignKey : 'statusId'})


module.exports = db;