import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';
import Courses from './components/Courses/Courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <div className={Container}>
      <Header></Header>
      <div class = "navigation">
      <nav>
        <a href = "/Courses" >Courses</a>
        <a href= "/Course" >Course </a>
        <a href="/Cart" > Cart</a>
        
.      </nav>
      </div>  

      <Courses></Courses>
    </div>
  );
}

export default App;
