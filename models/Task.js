
var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var mysql = require("mysql");

module.exports.view = function(callback) {
    var sql = "Select * from ??";
    var table = ["todolist"];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.save = function(data, callback) {
    var sql = "INSERT INTO ?? SET ?";
    var table = ["todolist", data];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.update = function(data,callback) {
    var sql = "Update ?? SET ? where id=?";
    var table = ["todolist", data,data.id];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.delete = function(data,callback) {
    var sql = "Delete From ?? where id=?";
    var table = ["todolist",data.id];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.findById = function(id,callback) {
    var sql = "SELECT * from ?? where id=?";
    var table = ["todolist", id];
    var queries = mysql.format(sql, table);
    conn.query(queries, callback);
}

