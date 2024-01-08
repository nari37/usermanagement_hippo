import React from 'react';
import './css/Digital.css';

export default function Digital() {
  return (
    <div className="digital-marketing">
      <center>
        <h1>Digital Marketing Course Content</h1>
      </center>

      <section>
        <h2>Module 1: Introduction to Digital Marketing</h2>
        <div className="content-block">
          <h3>1.1 Overview</h3>
          <p>Introduction to digital marketing</p>
          <p>Importance of digital presence</p>
          <p>Key concepts and terminology</p>
        </div>
      </section>

      <section>
        <h2>Module 2: Website and Content Strategy</h2>
        <div className="content-block">
          <h3>2.1 Website Planning</h3>
          <p>Understanding user experience (UX)</p>
          <p>Website structure and design</p>
          <p>Content creation and optimization</p>
        </div>
      </section>

      <section>
        <h2>Module 3: Social Media Marketing</h2>
        <div className="content-block">
          <h3>3.1 Social Media Platforms</h3>
          <p>Creating and managing social media profiles</p>
          <p>Content creation and posting strategies</p>
          <p>Social media advertising</p>
        </div>
      </section>

      <section>
        <h2>Module 4: Search Engine Optimization (SEO)</h2>
        <div className="content-block">
          <h3>4.1 Basics of SEO</h3>
          <p>Keyword research and analysis</p>
          <p>On-page and off-page optimization</p>
          <p>SEO tools and analytics</p>
        </div>
      </section>

      {/* ... Repeat similar structures for other modules */}
    </div>
  );
}
