import React from 'react';
import'./css/footer.css';
import  { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
      
useEffect(()=>{
  Aos.init({duration:1000});
},[])
  return (
    <div>
      <footer className='footer container' data-aos="fade-up">
          <div className='flex'>
            <div className='social' data-aos="fade-up">
              <h2 data-aos="fade-up">Our Socialmedia links :</h2>
              <img src='http://localhost:3000/logo-removebg-preview.png' alt="img"  />
              <ul>
              <li>
          <a href="https://www.facebook.com/" className='icon'>
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" className='icon'> 
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" className='icon'>
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
              </ul>
            </div>
            <div className='about' data-aos="fade-up">
              <h2>About :</h2>
              <ul>
                <a className='tran'>Home</a>
                <a className='tran'>About us</a>
                <a className='tran'>Services</a>

              </ul>
            </div>
            <div className='conect' data-aos="fade-up">
              <h2>Contact :</h2>
              <div class="contact-icons">
           <a href="tel:+123456789" class="icon">
          <i class="fas fa-phone"></i> +91 6303897654
       </a>
      <a href="mailto:info@example.com" class="icon">
      <i class="fas fa-envelope"></i> info@example.com
      </a>
      <a href="mailto:info@example.com" class="icon">
      <i class="fas fa-globe"></i> www.hippo_cloud.com
      </a>
        </div>
          </div>
          </div>  
      </footer>
      </div>
  )
}
