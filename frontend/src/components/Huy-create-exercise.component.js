import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';

const CreateBook = () => {
  const {bookData, setbookData } = useContext(AppContext);
  const [bookChange, setBookChange] = useState([{
    "key": "",
    "bookname": "",
    "genre": "",
    "author": "",
    "description": ""
    }]);
  const changeBookname = (e) => {
    setBookChange({
      ...bookChange,
      bookname: e.target.value
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

  const onCreateBookname = () => {
    setbookData({
      ...bookData,
      bookChange});
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
          <button type="submit" className="btn btn-primary" onClick={onCreateBookname}>Create</button>
        </div>
      </form>
    </div> 
  )
}

export default CreateBook;
