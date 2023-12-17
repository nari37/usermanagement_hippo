

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
       <div className='imagehippo'> <img data-aos="fade-up" src='https://pbs.twimg.com/media/ECeQfWWVUAAKRl8?format=png&name=small' /></div> 
    </div>
{/*  */}
    <div   className='whychoose'>
       <center>
        <h2  data-aos="fade-up">Why choose <span>Us</span></h2>
       </center>
       <div className='whyflex'>
       <div className='wyimg'><img data-aos="fade-up" src='https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?w=740&t=st=1702279211~exp=1702279811~hmac=3976e9dd1c8291676b8a451334af706148b8f4df7ef34283fe69daaf792e4c43'/></div>
        <div className='pera' data-aos="fade-up"><center><span data-aos="fade-up">Why choose <span id='hip' data-aos="fade-up">HippoCloud?</span></span></center><p data-aos="fade-up">HippoCloud is first software develepment IT company at Vishakhapatnam.Over develepment team's  </p></div> 
       </div>
    </div>
    {/*  */}
     <div className='overservices'>
        <center>
          <h2 data-aos="fade-up">Our <span>Services</span></h2>  
        </center>
        <div data-aos="fade-up" className='cards'>
          <div className='card'  data-aos="fade-up">
            <img src='https://sp.yimg.com/ib/th?id=OADD2.9964422754724_1TESFU1I2QPW0SPHJ9&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=442&h=231'/>
            <center><h3 className='serv'>Digital Marketing</h3></center>
            <p> Digital Marketing is the best career option for grow your careers in to the web would.We provide you the best Digital marketing skills like SEO,Contact marketing,Web degsign,Social media marketing ect..,</p>
          </div>
          <div className='card'  data-aos="fade-up">
            <img src='https://licreativetechnologies.com/wp-content/uploads/2020/04/Graphic-Design-Companies.jpg'/>
            <center><h3 className='serv'>Graphic Designing</h3></center>
            <p>Graphic Designing is a best career option in now a days.We provide a best Graphic Designing Courses with a best industrial experts feel free to contact us.</p>
          </div>
          <div className='card'  data-aos="fade-up">
            <img src='https://www.flexsin.com/blog/wp-content/uploads/2019/12/Custom-Software-Development.jpg'/>
            <center><h3 className='serv'>Software Develepment</h3></center>
            <p>We are One of the best institute and develepment team in Software develepment.We provide courses and interships for Deops,fullstack,python,Could Computing like..,</p>
          </div>
          <div className='card'  data-aos="fade-up">
            <img src='https://sp.yimg.com/ib/th?id=OADD2.9964422754724_1TESFU1I2QPW0SPHJ9&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=442&h=231'/>
            <center><h3 className='serv'>Tally</h3></center>
            <p>Tally is the most popular and simplicity Software.We have a best Tally customer support team with a 2000 clients to help their query's.Contact us for the best tally course. </p>
          </div>
          <div className='card'  data-aos="fade-up">
            <img src='https://sp.yimg.com/ib/th?id=OADD2.9964422754724_1TESFU1I2QPW0SPHJ9&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=442&h=231'/>
            <center><h3 className='serv'>Digital Marketing</h3></center>
            <p>The best Digital Marketing team will be the stay in copitation in the web would.The best Digital Marketing team will be the stay in copitation in the web would.</p>
          </div>
          <div className='card'  data-aos="fade-up">
            <img src='https://sp.yimg.com/ib/th?id=OADD2.9964422754724_1TESFU1I2QPW0SPHJ9&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=442&h=231'/>
            <center><h3 className='serv'>Digital Marketing</h3></center>
            <p>The best Digital Marketing team will be the stay in copitation in the web would.The best Digital Marketing team will be the stay in copitation in the web would.</p>
          </div>
          
        </div>
        
     </div>
     {/*  */}
     <div className='studentrivews'>
        <center><h2 data-aos="fade-up">Students's <span>Reviwes</span></h2></center>
        <Swiper data-aos="fade-up" pagination={true} modules={[Pagination]} className="mySwiper" >
        <SwiperSlide data-aos="fade-up">
          <div  className='card'>
        <center><img src='https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=180' className='profile'/></center>
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
        <center><img src='https://www.lense.fr/wp-content/uploads/2019/09/100k-ai-faces-6.jpg' className='profile'/></center>
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
        <center><img src='http://petapixel.com/assets/uploads/2019/02/download-2-800x800.jpeg' className='profile'/></center>
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
        <center><img src='https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=180' className='profile'/></center>
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





