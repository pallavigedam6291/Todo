
var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var mysql = require("mysql");

module.exports.view = function(callback) {
    var sql = "Select * from ??";
    var table = ["users"];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.save = function(data, callback) {
    var sql = "INSERT INTO ?? SET ?";
    var table = ["users", data];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.update = function(data,callback) {
    var sql = "Update ?? SET ? where id=?";
    var table = ["users", data,data.id];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.delete = function(data,callback) {
    var sql = "Delete From ?? where id=?";
    var table = ["users",data.id];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.findById = function(id,callback) {
    var sql = "SELECT * from ?? where id=?";
    var table = ["users", id];
    var queries = mysql.format(sql, table);
    conn.query(queries, callback);
}

