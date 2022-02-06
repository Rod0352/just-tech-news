// import sequalize sequalize constructor from library
const Sequelize = require('sequelize');

require('dotenv').config();
// All we're doing here is importing the base Sequelize class and using it to create a new connection to the database. The new Sequelize() function accepts the database name, MySQL username, and MySQL password (respectively) as parameters, then we also pass configuration settings. Once we're done, we simply export the connection.
// create connection to our database, passing in mysql information
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;