import React from 'react';
import './css/Tally.css';

export default function Tally() {
  return (
    <div className="tally-course-container">
    <center>
      <h1>Tally Course Content</h1>
    </center>

    <section>
      <h2>Module 1: Introduction to Tally</h2>
      <div className="content-block">
        <h3>1.1 Overview</h3>
        <p>Introduction to Tally</p>
        <p>Installation and setup</p>
        <p>Understanding Tally interface</p>
      </div>

      <div className="content-block">
        <h2>Module 2: Tally Basics</h2>
        <h3>2.1 Creating and Managing Ledgers</h3>
        <p>Setting up company and ledger</p>
        <p>Recording transactions in Tally</p>
      </div>
    </section>

    <section>
      <div className="content-block">
        <h2>Module 3: Advanced Tally Features</h2>
        <h3>3.1 Tally Customization</h3>
        <p>Customizing reports and invoices</p>
        <p>Advanced features and shortcuts</p>
      </div>

      <div className="content-block">
        <h2>Module 4: Tally in Business Management</h2>
        <h3>4.1 Inventory Management</h3>
        <p>Managing stock and inventory</p>
        <p>Generating reports for business analysis</p>
      </div>
    </section>

    {/* ... Repeat similar structures for other modules */}
  </div>
);
  
}
