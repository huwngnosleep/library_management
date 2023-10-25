import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Library Management</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/books" className="nav-link">Books</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Book</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Students</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create-user" className="nav-link">Create Student</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}