/**
 * Category Controller
 * @module controllers/Category
 * @author Ruben Barseghyan
 */
const Cat = require('../models/Category');



exports.getAll = (req, res, next)=> {
  Cat.find({}, {name: 1, position: 1, id: 1}, (err, data) =>{
    console.log(data)
    res.json(data);
  });
};

exports.getById = (req, res, next) => {
  Cat.findById(req.params.id, (err, data) =>{
    console.log(data);
    res.json(data);
  });
};

  exports.update = (req, res, next) => {
    Cat.update(
      { _id: req.params.id },
      { name: req.body.name, position: req.body.position},
    (err) => {
      if(err) console.log(err);

      res.json({ok: 'ok'});
    });
  };

  exports.create = (req, res, next) => {
    const cat = new Cat(req.body);

    cat.save((err, data) => {
      if(err) return res.json({ error: err });

      return res.json({ data: data });
    });

  }

  exports.remove = (req, res, next) => {
    Cat.deleteOne({_id: req.params.id}, (err)=>{
      if(err){
        console.log(err);
        res.json({removed:true});
      }else{
          res.json({ok: 'it was deleted'});
      }
    })
  }
