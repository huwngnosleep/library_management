import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import axios from 'axios'

const CreateBook = () => {
  const [bookChange, setBookChange] = useState({
    "name": "",
    "genre": "",
    "author": "",
    "description": ""
    });
  const changeBookname = (e) => {
    setBookChange({
      ...bookChange,
      name: e.target.value
    });
  }

  const changeGenre = (e) => {
    setBookChange({
      ...bookChange,
      genre: e.target.value
    });
  }

  const changeAuthor = (e) => {
    setBookChange({
      ...bookChange,
      author: e.target.value
    });
  }

  const changeDescription = (e) => {
    setBookChange({
      ...bookChange,
      description: e.target.value
    });
  }

  const onSubmitBook = async () => {
    const res = await axios.post("http://localhost:5000/books/add", bookChange)
    if (res.status === 200) {
      alert("Success")
    }
  }

  return (
    <div>
      <h3>Create New Book</h3>
      <form>
        <div className="form-group">
          <label>Book name: </label>
          <input
            required
            className="form-control"
            onChange={changeBookname}
          />
        </div>
        <div className="form-group">
          <label>Genre: </label>
          <input
            onChange={changeGenre}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Author: </label>
          <input
            onChange={changeAuthor}
            required
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
            onChange={changeDescription}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-primary" onClick={onSubmitBook}>Create</button>
        </div>
      </form>
    </div> 
  )
}

export default CreateBook;
