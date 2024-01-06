

import React, { useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';
import { Pagination } from 'swiper/modules';
import Aos from 'aos';
import 'aos/dist/aos.css';


const divStyle = {
  display: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: '1550px 400px',
  backgroundrepeat: 'no-repeat',
  height: '400px'
}

const slideImages = [
  {
    url: 'jpeg7.jpg',
    
  },
  {
    url: 'jpeg8.jpg',
    
  },
  {
    url: 'jpeg9.jpg',
  
  },
 
];  
function App() {
    
    
useEffect(()=>{
  Aos.init({duration:1000});
},[])
  console.log('hiiii');
  
return (
<>
  <section>
    <div >
      <br/><br/>
  
      <img src="jpeg10.jpg" alt="home img" width="100px" style={{margin:'0 0 0 15px'}} />
      
    <center><h3  align={"center"} className='qutation'>“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” </h3>
    <h5 align="center" className='athor'>--- Albert Einstein --- </h5>  </center>  

<div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index} style={{zIndex:'-1'}} >
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,zIndex:'-1' }}>    
              </div>
            </div>
          ))}  
        </Slide>
      </div>

    </div>
{/*  */}
    <div    className='homepage ' >
       <div data-aos="fade-up" className='heading'><h2  >HippoCloud <br></br> <span ><q>Best place to learn</q></span></h2></div>
       <div className='imagehippo'> <img data-aos="fade-up" src='hippo_img.png' alt='' style={{borderRadius:"20px 0 20px 0"}}/></div> 
    </div>
{/*  */}
<section id='wh'>
    <div   className='whychoose'>
       <center>
        <h2  data-aos="fade-up">Why choose <span>Us</span></h2>
       </center>
       <div className='whyflex'>
       <div className='wyimg'><img data-aos="fade-up" alt="#" src='why_choose.avif'/></div>
        <div className='pera' data-aos="fade-up"><center><span data-aos="fade-up">Why choose <span id='hip' data-aos="fade-up">HippoCloud?</span></span></center><p data-aos="fade-up">HippoCloud is the first software develepment IT company at <b>Vishakhapatnam</b> location. Over develepment team deals multy a   </p></div> 
       </div>
    </div>
    </section>
    {/*  */}
    <section id='our'>
     <div className='overservices' data-aos="fade-up">
        <center>
          <h2 data-aos="fade-up">Our <span>Services</span></h2>  
        </center>
        <div data-aos="fade-up" className='cards'>
          <div className='card'  data-aos="fade-up">
            <img  alt="#" src='digital-marketing.avif'/>
            <center><h3 className='serv'>Digital Marketing</h3></center>
            <p> Digital Marketing is the best career option for grow your careers in to the web would.We provide you the best Digital marketing skills like SEO,Contact marketing,Web degsign,Social media marketing ect..,</p>
          </div>
          <div className='card'  data-aos="fade-up">
            <img  alt="#" src='graphic_design.avif'/>
            <center><h3 className='serv'>Graphic Designing</h3></center>
            <p>Graphic Designing is a best career option in now a days.We provide a best Graphic Designing Courses with a best industrial experts feel free to contact us.</p>
          </div>
          <div className='card'  data-aos="fade-up">
            <img  alt="#" src='software_development.avif'/>
            <center><h3 className='serv'>Software Develepment</h3></center>
            <p>We are One of the best institute and develepment team in Software develepment.We provide courses and interships for Deops,fullstack,python,Could Computing like..,</p>
          </div>
          <div className='card'  data-aos="fade-up">
            <img  alt="#" src='tally.avif'/>
            <center><h3 className='serv'>Tally</h3></center>
            <p>Tally is the most popular and simplicity Software.We have a best Tally customer support team with a 2000 clients to help their query's.Contact us for the best tally course. </p>
          </div>
          <div className='card'  data-aos="fade-up">
            <img  alt="#" src='pythone.avif'/>
            <center><h3 className='serv'>Python Programming</h3></center>
            <p> python is one of the most popular and widely used programming languages in the would.In this Python course, we will look at some of the benefits of choosing Python to write code and create softwares and Projects.Industrial level mentors will help you to learn. </p>
          </div>
          <div className='card'  data-aos="fade-up">
            <img  alt="#" src='testing.avif'/>
            <center><h3 className='serv'>Manual & Automation Testing</h3></center>
            <p>Manual testing is conducted to discover bugs in the developed software application.We have the best mentors to help you in this course, built your skills in functionalities,User Interface,Web Behavior,User Acceptance ect..,right now. </p>
          </div>
          
        </div>
        
     </div>
     </section>
     {/*  */}
     <div className='studentrivews'>
        <center><h2 data-aos="fade-up">Students's <span>Reviwes</span></h2></center>
        <Swiper data-aos="fade-up" pagination={true} modules={[Pagination]} className="mySwiper" >
        <SwiperSlide data-aos="fade-up">
          <div  className='card'>
        <center><img src='profile.1.jpg' className='profile'/></center>
        <p><q>This is the best please to learn fullstack develepment.I was really wander abount the courses,they teach i am very happy to say thank you Hippocloud</q></p>
            {/* Star icons for rating */}
      <div className="rating">
        {[...Array(5)].map((star, index) => (
          <FaStar key={index} color="#ffc107" />
        ))}
      </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card'>
        <center><img  alt="#" src='profile.2.avif' className='profile'/></center>
        <p><q>I was taken a course related to Tally,i learn about GST,calculation,inventory management,i was really woundered. Any way thanks for the best one.</q></p>
            {/* Star icons for rating */}
      <div className="rating">
        {[...Array(5)].map((star, index) => (
          <FaStar key={index} color="#ffc107" />
        ))}
      </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card'>
        <center><img  alt="#" src='profile.3.avif' className='profile'/></center>
        <p><q>With the help of good mentors in this institute,i was learn the python very acquire and i was move into Machine learning,DataScience..,ect Thank you HippoCloud's </q></p>
            {/* Star icons for rating */}
      <div className="rating">
        {[...Array(5)].map((star, index) => (
          <FaStar key={index} color="#ffc107" />
        ))}
      </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card'>
        <center><img  alt="#" src='profile.4.avif' className='profile'/></center>
        <p><q>This is the best please to learn fullstack develepment.I was really wander abount the courses,they teach i am very happy to say thank you Hippocloud</q></p>
            {/* Star icons for rating */}
      <div className="rating">
        {[...Array(5)].map((star, index) => (
          <FaStar key={index} color="#ffc107" />
        ))}
      </div>
        </div>
        </SwiperSlide>
       
      </Swiper>
     </div>
         
</section>

</>);
}

export default App;





