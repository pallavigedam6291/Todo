
var Config = require('../config/config.js');
var Config_URL = new Config();
var Task = require('../models/Task');

exports.view = function(req, res){
    try {
        Task.view(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {
                res.render('./viewTask',{page_title:"TodoApp",data:rows});

            }
        });
    }catch (ex){

    }
};
exports.add = function(req, res){
    
        var id = req.params.id;

       Task.findById(id, function(err, rows, fields) {
        if (Config_URL.isDataEmpty(rows)) {
            res.render('./editTask',{data:rows});
        } else {
            res.render('./addTask');
        };
	});
     
};

exports.save = function(req, res){
    try {
        var data = req.body; 
            var datasssss = {
                work: data.work,
                start_date: data.start_date,
                end_date: data.end_date,

            };

            Task.save(datasssss, function (err, info) {

                req.flash('success', 'Data saved Successfully');
                res.redirect('/taskview');
            });
        
    }catch (ex){

    }
};
exports.update = function(req, res){
    try{
        var data = req.body;
        var id = req.params.id;

        var datas = {
            work: data.work,
            start_date: data.start_date,
            end_date: data.end_date,

            id: id
        };
        Task.update(datas, function(err, info) {
            req.flash('success', 'Data updated Successfully');
            res.redirect('/taskview');
        });
    }catch (ex){

    }
};
exports.delete = function(req, res){
    try {
        var id = req.params.id;

        data = {
            id: id
        };
        Task.delete(data, function(err, info) {
            req.flash('success', 'Data deleted successfully');
            res.redirect('/taskview');
        }); 
    }catch (ex){

    }
};
