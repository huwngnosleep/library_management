import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/Huy-create-exercise.component";
import CreateUser from "./components/create-user.component";
import ListBook from "./components/Huy-list-book.component";
import { AppProvider } from './Context/AppContext';

const App = ()  =>{
  
  return (
    <Router>
      <div className="container"> 
      <Navbar />
      <br/>
      <AppProvider>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/books" component={ListBook} />
      </AppProvider>
      
      </div>
    </Router>
  );
}

export default App;
