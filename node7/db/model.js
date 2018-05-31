const Sequelize = require('sequelize');
const config = require('../config.json');

const configURL = `mysql://${config.USER}:${config.PASSWORD}@${config.HOST}:3306/${config.DBNAME}`;

const sequelize = new Sequelize(configURL, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

function connectionStart() {
    sequelize.authenticate()
    .then(()=> {
        console.log("Success");
    })
    .catch(err=> {
        console.error('Unable to connect:',err);
    })
}

const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
});

module.exports = {
    connectionStart,
    User
}