/**
 * Category Controller
 * @module controllers/Category
 * @author Ruben Barseghyan
 */

 const User = require('../models/Users');

exports.getAllUsers = (req, res, next) => {
  User.find({}, {name: 1, surname: 1, age: 1, email: 1, id: 1}, (err, data) => {
    console.log(data)
    res.json(data);
  });
} ;

exports.getCurrentUser = (req, res, next) =>{
  User.findById(req.params.id, (err, data) =>{
    console.log(data);
    res.json(data);
  });
};


exports.addUser = (req, res, next) => {
  const user = new User(req.body);
  user.save((err, data) =>{
    if(err){
      return res.json({ error: err});
    } else {
      return res.json({ data: data });
    }
  });
};



exports.deleteUser = (req, res, next) => {
  User.deleteOne({_id: req.params.id}, (err) =>{
    if(err){
      console.log(err);
      res.json({removed: true});
    } else {
      res.json({ok: 'it was deleted'});
    }
  });
}


exports.updateUser = (req, res, next) =>{
  User.update(
    {_id: req.params.id},
    {name: req.body.name, surname: req.body.surname, age: req.body.age, email: req.body.email},
    (err) => {
      if(err){
        console.log(err);
      } else {
        res.json({ok: 'ok'});
      }
    });
};
