var mysql = require('../models/mysql.js');

//code to display all current contacts in db
module.exports.getAll = function(req, res){
  mysql.getConnection(function(err, con){
    list = con.query('Select * from contact', function(err, rows){
        if(err) throw err;
        res.send({ title : 'Express API App', contacts: rows });
    });
  });
};

//get a single contact by id
module.exports.getContact = function(req, res){
  var id = req.params.id;

  mysql.getConnection(function(err, con){
    list = con.query('Select * from contact where id=' + id, function(err, rows){
        if(err) throw err;
        res.json(rows[0]);
    });
  });
};

//code to create a new contact
module.exports.create = function(req, res){
  var content = req.body.content;
  mysql.getConnection(function(err, con){
    con.query('INSERT INTO todos (content) VALUES ("' + content + '")');
  });
  res.redirect('/');
};

//delete contact by id
module.exports.delete = function(req, res){
  var id = req.params.id;
  mysql.getConnection(function(err, con){
    con.query('DELETE from contact WHERE id =' + id);
  });
  res.redirect('/');
};
//
// module.exports.edit = function(req, res){
//   //code to edit an existing todo
//   mysql.getConnection(function(err, con){
//     list = con.query('Select * from todos', function(err, rows){
//         if(err) throw err;
//         res.render( 'edit', {
//               title   : 'Express Todo App',
//               todos   : rows,
//               current : req.params.id
//         });
//     });
//   });
// };
//
// module.exports.update = function(req, res){
//   //update object in db that was edited
//   var id = req.params.id;
//   var content = req.body.content;
//
//   mysql.getConnection(function(err, con){
//     con.query('UPDATE todos SET content="' + content + '" WHERE id=' + id);
//   });
//   res.redirect('/');
// };
