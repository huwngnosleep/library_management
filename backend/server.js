const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path'); // Thêm path module

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);

// Middleware để phục vụ các tệp từ thư mục 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Default route để phục vụ index.html hoặc các trang web tĩnh khác
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
