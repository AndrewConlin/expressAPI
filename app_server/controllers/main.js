module.exports.index = function(req, res){
  //code to display all current todos in db
  res.render('index', { title : 'Express API App'});
};
