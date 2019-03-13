var mysql = require("mysql");



module.exports = function () {

    this.con=function () {
        var conn= mysql.createConnection({ 
            host: 'us-cdbr-iron-east-03.cleardb.net',
            user: 'b7cb37188ad41c',
            password : '42133918',
           // port : 3306,
            database:'heroku_040d6767a44553f'

        });
        return conn;
    }
}
