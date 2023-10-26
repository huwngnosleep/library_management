import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateBook from "./components/Huy-create-exercise.component";
import CreateUser from "./components/create-user.component";
import ListBook from "./components/Huy-list-book.component";
import ListUser from "./components/list-user.component";

const App = ()  =>{
  
  return (
    <Router>
      <div className="container"> 
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/create-user" component={CreateUser} />
      <Route path="/create" component={CreateBook} />
      <Route path="/user" component={ListUser} />
      <Route path="/books" component={ListBook} />
      </div>
    </Router>
  );
}

export default App;
