var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/getTodos', ctrlMain.index);

/*Add a new todo item*/
router.post('/createTodo', ctrlMain.create);

/*Delete an existing todo item*/
router.get('/deleteTodo/:id', ctrlMain.delete);

/*edit an existing todo item*/
router.get('/editTodo/:id', ctrlMain.edit);

/*update an existing todo item*/
router.post('/updateTodo/:id', ctrlMain.update);

module.exports = router;
