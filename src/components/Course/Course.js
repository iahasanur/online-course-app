import React from 'react';
import "./Course.css";
import {  Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Course = (props) => {
    
    
    
    return (
        
        <div class = "course">
            <h4> {props.course.name}</h4>
            <h5>Price: ${props.course.price}</h5>
            <h6>Made by: {props.course.lecturer}</h6>
            <Button onClick = {()=>props.purchaseCourse(props.course)} type = "Submit" variant= "success">Enroll Now</Button>{" "}
        </div>
    );
};

export default Course;