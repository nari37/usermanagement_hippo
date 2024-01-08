import React from 'react';
import './css/Fullstack.css';

export default function Fullstack() {
  return (
    <div className="fullstack-container">
      <center>
        <h1>MERN Stack Course Content</h1>
      </center>

      <section>
        <h2>Module 1: Introduction to MERN Stack</h2>
        <div className="content-block">
          <h3>1.1 Overview</h3>
          <p>Understanding the MERN stack</p>
          <p>Advantages and use cases</p>
          <p>Setting up the development environment</p>
        </div>

        <div className="content-block">
          <h3>1.2 MongoDB</h3>
          <p>Introduction to MongoDB</p>
          <p>CRUD operations (Create, Read, Update, Delete)</p>
          <p>MongoDB Atlas - Cloud database setup</p>
        </div>
      </section>

      <section>
        <h2>Module 2: Express.js</h2>
        <div className="content-block">
          <h3>2.1 Introduction</h3>
          <p>Basics of Express.js</p>
          <p>Middleware and routing</p>
        </div>

        <div className="content-block">
          <h3>2.2 Building RESTful APIs</h3>
          <p>Designing RESTful APIs</p>
          <p>Handling HTTP requests and responses</p>
          <p>Express Router</p>
        </div>
      </section>

      <section>
        <h2>Module 3: Node.js</h2>
        <div className="content-block">
          <h3>3.1 Getting Started with Node.js</h3>
          <p>Basics of Node.js</p>
          <p>Node.js modules and NPM</p>
        </div>

        <div className="content-block">
          <h3>3.2 Building a Server</h3>
          <p>Creating a simple HTTP server</p>
          <p>Handling server-side logic with Node.js</p>
        </div>
      </section>

      <section>
        <h2>Module 4: React Basics</h2>
        <div className="content-block">
          <h3>4.1 Introduction to React</h3>
          <p>Understanding React components</p>
          <p>JSX syntax and rendering</p>
        </div>

        <div className="content-block">
          <h3>4.2 State and Props</h3>
          <p>Managing state in React components</p>
          <p>Passing data through props</p>
        </div>
      </section>

      {/* ... Repeat similar structures for other modules */}
    </div>
  );
}
