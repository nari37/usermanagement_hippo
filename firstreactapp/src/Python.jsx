import React from 'react';
import './css/Python.css';

export default function Python() {
  return (
    <div className="python-course-container">
       <center>
        <h1 style={{color:'#0a5275'}}>Python Course Content</h1>
      </center>

      <section>
        <h2>Module 1: Introduction to Python</h2>
        <div className="content-block">
          <h3>1.1 Overview</h3>
          <p>Overview of Python</p>
          <p>Setting up the Python environment</p>
          <p>Basic syntax and data types</p>
        </div>

        <div className="content-block">
        <h2>Module 2: Advanced Python Concepts</h2>
          <h3>2.1 Functions and modules</h3>
          <p>Error handling and exceptions</p>
          <p>Object-oriented programming (OOP)</p>
        </div>
      </section>

      
      <section>
        
        <div className="content-block">
        <h2>Module 3: Web Development with Flask</h2>
          <h3>3.1 Introduction to Flask</h3>
          <p>Routing and templates</p>
          <p>Working with databases in Flask</p>
        </div>

        <div className="content-block">
          <h2>Module 4: Data Analysis with Pandas</h2>
          <h3>4.1 Introduction to Pandas</h3>
          <p>Data manipulation and analysis</p>
          <p>Handling missing data</p>
        </div>
      </section>
      

      

      {/* ... Repeat similar structures for other modules */}
    </div>
  );
}
