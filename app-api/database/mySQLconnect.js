var mysql = require('mysql');

var connection = mysql.createConnection({
    debug: true,

    host: 'sql9.freemysqlhosting.net',
    port: 3306,
    user: 'sql9612955',
    password: 'rdtXFs97uG',
    database: 'sql9612955'
});

connection.on('error', function(err) {
    console.log('MySQL connection error:', err);
});

module.exports = connection;
