const Book = require('../models/Book');

exports.getAllBook = (req, res, next) => {
  Book.find({}, {title: 1, image: 1, price: 1, publisher: 1, review: 1, description: 1, published: 1, author: 1 }, (err, data) => {
    console.log(data)
    res.json(data);
  });
} ;

exports.getCurrentBook = (req, res, next) =>{
  Book.findById(req.params.id, (err, data) =>{
    console.log(data);
    res.json(data);
  });
};

exports.addBook = (req, res, next) => {
  const book = new Book(req.body);
  book.save((err, data) =>{
    if(err){
      return res.json({ error: err});
    } else {
      return res.json({ data: data });
    }
  });
};

exports.deleteBook = (req, res, next) => {
  Book.deleteOne({_id: req.params.id}, (err) =>{
    if(err){
      console.log(err);
      res.json({removed: true});
    } else {
      res.json({ok: 'it was deleted'});
    }
  });
};

exports.updateBook = (req, res, next) =>{
  Book.update(
    {_id: req.params.id},
    {title: req.body.title, image: req.body.image, price: req.body.price, publisher: req.body.publisher, review: req.body.review,
       description: req.body.description, published: req.body.published, author: req.body.author},
    (err) => {
      if(err){
        console.log(err);
      } else {
        res.json({ok: 'ok'});
      }
    });
};
