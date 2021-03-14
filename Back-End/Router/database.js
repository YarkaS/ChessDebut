const { Sequelize } = require('sequelize');

module.exports = new Sequelize('Data', 'root', 'andrew', {
    host: '35.225.168.170',
    dialect: 'mysql',
    define: {
        timestamps: false
    },

});