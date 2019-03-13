



var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var Config = require('../config/config.js');
var Config_URL = new Config();


var mysql = require("mysql");
exports.view = function(req, res){
    res.render('./login');
};
exports.checklogin = function(req,res){

    username = req.body.username;
    password = req.body.password;

    console.log(username);

    var query1 = "SELECT * FROM ?? where username=? and password=?" ;

    var table1 = ["users",username,password];
    query1 = mysql.format(query1,table1);

    conn.query(query1, function(err1, rows1)
    {
        if(rows1.length==""){
            req.flash('error', 'Sorry Username and Password does not match..');
            res.redirect('/login'); 
        } else{

            // sess = req.session;
            // sess.email=rows1[0].role;
            // sess.image=rows1[0].image;
            // console.log(sess.email);
            req.flash('success', 'You are login successfully.');
            //res.redirect('student-view'); 
			
			//res.render('./viewTask');
            res.redirect('/taskview');
        }
    });
};

exports.logout = function(req, res){
  req.flash('success', 'You are logout successfully.');
  res.redirect('/login');
};  