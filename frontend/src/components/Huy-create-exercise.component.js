import React, { Component } from 'react';
import axios from 'axios';
export default class CreateBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeBookname = this.onChangeBookname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      bookname: '',
      description: '',
      author: '',
      genre: '',
      books: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/books/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            books: response.data.map(book => book.bookname),
            bookname: response.data[0].bookname
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeBookname(e) {
    this.setState({
      bookname: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const book = {
      bookname: this.state.bookname,
      description: this.state.description,
      author: this.state.author,
      genre: this.state.genre
    };

    console.log(book);

    axios.post('http://localhost:5000/books/add', book)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Book</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Bookname: </label>
            <input
              required
              className="form-control"
              value={this.state.bookname}
              onChange={this.onChangeBookname}
            />
          </div>
          <div className="form-group">
            <label>Genre: </label>
            <input
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
            />
          </div>

          <div className="form-group">
            <label>Author: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}