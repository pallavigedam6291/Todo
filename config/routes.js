

var AdminController = require('../controller/AdminController');
var TaskController = require('../controller/TaskController');



module.exports = function (app, passport) {


    app.get('/login', AdminController.view);
    app.post('/checklogin', AdminController.checklogin);
    app.get('/logout', AdminController.logout); 

    app.get('/taskview', TaskController.view);
    app.get('/taskadd', TaskController.add);
    app.get('/taskedit/:id', TaskController.add);
    app.post('/tasksave', TaskController.save);
    app.post('/taskupdate/:id',TaskController.update);
    app.get('/taskdelete/:id', TaskController.delete);




}
