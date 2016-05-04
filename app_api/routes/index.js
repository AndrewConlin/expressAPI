var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/getContacts', ctrlMain.getAll);

/* GET home page. */
router.get('/getContact/:id', ctrlMain.getContact);

/*Add a new todo item*/
router.post('/createContact', ctrlMain.create);

/*Delete an existing todo item*/
router.get('/deleteContact/:id', ctrlMain.delete);
//
// /*edit an existing todo item*/
// router.get('/editContact/:id', ctrlMain.edit);
//
// /*update an existing todo item*/
// router.post('/updateContact/:id', ctrlMain.update);

module.exports = router;
