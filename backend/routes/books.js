const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const Book = require('../models/book.model');

// Cấu hình Multer để xử lý tải ảnh
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.route('/').get((req, res) => {
  Book.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/remove').post((req, res) => {
  const id = req.body.id;
  Book.deleteOne({_id: id})
    .then(() => res.json('Book deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint để thêm sách với hình ảnh
router.route('/add').post(upload.single('image'), (req, res) => {
  const { name, description, genre, author } = req.body;
  const imagePath = req.file.path; // Lấy đường dẫn ảnh từ Multer

  const newBook = new Book({
    name,
    description,
    genre,
    author,
    image: imagePath, // Lưu đường dẫn ảnh vào trường 'image'
  });

  newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
