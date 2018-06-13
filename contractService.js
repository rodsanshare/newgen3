
var mysql = require('mysql');
require('dotenv/config');

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});


exports.get = function () {
    return new Promise((resolve, reject) => {
        con.connect(function (err) {
            if (err) {
                reject(new Error('Connection error.'))
            };
            con.query("SELECT * FROM " + process.env.DATABASE + ".Contracts", function (err, result, fields) {
                if (err) {
                    reject(new Error('MySQL error.'));
                } else
                    resolve(result);
            });
            con.end();
        });
    });
}