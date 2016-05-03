var mysql = require('../models/mysql.js');

module.exports.index = function(req, res){
  //code to display all current todos in db
  mysql.getConnection(function(err, con){
    list = con.query('Select * from todos', function(err, rows){
        if(err) throw err;
        res.send({ title : 'Express Todo App', todos: rows });
    });
  });
};

module.exports.create = function(req, res){
  //code to create a new todo
  var content = req.body.content;
  mysql.getConnection(function(err, con){
    con.query('INSERT INTO todos (content) VALUES ("' + content + '")');
  });
  res.redirect('/');
};

module.exports.delete = function(req, res){
  //delete code from by id
  var id = req.params.id;
  mysql.getConnection(function(err, con){
    con.query('DELETE from todos WHERE id =' + id);
  });
  res.redirect('/');
};

module.exports.edit = function(req, res){
  //code to edit an existing todo
  mysql.getConnection(function(err, con){
    list = con.query('Select * from todos', function(err, rows){
        if(err) throw err;
        res.render( 'edit', {
              title   : 'Express Todo App',
              todos   : rows,
              current : req.params.id
        });
    });
  });
};

module.exports.update = function(req, res){
  //update object in db that was edited
  var id = req.params.id;
  var content = req.body.content;

  mysql.getConnection(function(err, con){
    con.query('UPDATE todos SET content="' + content + '" WHERE id=' + id);
  });
  res.redirect('/');
};
