



var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var Config = require('../config/config.js');
var Config_URL = new Config();
var Admin = require('../models/Admin');


var mysql = require("mysql");
exports.view = function(req, res){
    res.render('./login');
};
exports.viewr = function(req, res){
    res.render('./register');
};

exports.register = function (req, res) {
    try{
        var data = req.body;
        var data1={
            username:data.username,
            password:data.password,
            email:data.email,
        };
        Admin.register(data1,function (err,info) {
            req.flash('success','Registered successfully')
            res.redirect('/login');
        });

    }
    catch(ex){

    }
    // username = req.body.username;
    // password = req.body.password;
    // email = req.body.email;
    //
    // var query="INSERT INTO ?? SET ?";
    // var table=["users",username,password,email];
    // query=mysql.format(query,table);
    // conn.query(query,function(err1,rows1){
    //     if (err1) {
    //         console.log("error ocurred",err1);
    //         res.send({
    //             "code":400,
    //             "failed":"error ocurred"
    //         })
    //     }else{
    //
    //         res.send({
    //             "code":200,
    //             "success":"user registered sucessfully"
    //         });
    //     }
    // });
};

exports.checklogin = function(req,res){

    // try{
    //     var data = req.body;
    //     var data1={
    //         username:data.username,
    //         password:data.password,
    //
    //     };
    //     Admin.checklogin(data1,function (err,info) {
    //         req.flash('success','Login successfully');
    //         res.redirect('/taskview');
    //     });
    //
    // }
    // catch(ex){
    //
    // }

    username = req.body.username;
    password = req.body.password;



    var query1 = "SELECT * FROM ?? where username=? and password=?" ;

    var table1 = ["users",username,password];
    query1 = mysql.format(query1,table1);

    conn.query(query1, function(err1, rows1)
    {
        if(rows1.length==""){
            req.flash('error', 'Sorry Username and Password does not match..');
            res.redirect('/login');
        } else{
            req.flash('success', 'You are login successfully.');
            res.redirect('/taskview');
        }
    });
};

exports.logout = function(req, res){
  req.flash('success', 'You are logout successfully.');
  res.redirect('/login');
};  