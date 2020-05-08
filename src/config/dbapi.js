// api para conectar com a database MariaDb já estou fazendoo
const Sequelize = require("sequelize");
const sequelize = new Sequelize('api','api','123456', { 
    host: "localhost",
    dialect: 'mysql',
  });
  
  sequelize.authenticate()
  .then(() => console.log("DataBase[connected]"))
  .catch(error => console.log(`DataBase[Error]${error}`));
  
  module.exports = sequelize;
  