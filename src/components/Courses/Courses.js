import React, { useState } from 'react';
import fakedata from '../../fakedata/fakedata';
import Course from "../Course/Course";
import './Courses.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button, Card } from 'react-bootstrap';
import Cart from '../Cart/Cart';
const Courses = () => {
    const [ courses , setCourses ] = useState(fakedata);
    const[enrolled, setEnrolled] = useState([]);


    const purchaseCourse = (items)=>{
        console.log(items, " items");
        const newCourse = [ items, ...enrolled];
        
        setEnrolled(newCourse); 
        console.log(enrolled);  
    }
    return (
        <div class = "courses-container1">
            <div class = "courses-list">
                {
                courses.map( crs => <Course course = {crs} purchaseCourse= {purchaseCourse}></Course>)
                }
            </div>
            <div class = "courses-cart">
               {
                   <Cart cart = {enrolled}></Cart>
               }
            </div>
           
        </div>
    );
};

export default Courses;