const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize_tutorial', 'root', 'P@55word', {
host: 'localhost',
port: 3306,
dialect: 'mariadb'
});

sequelize.authenticate().then(() => {
  console.log('Conection successful');
}).catch((error) => {
  console.log(error);
});

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;