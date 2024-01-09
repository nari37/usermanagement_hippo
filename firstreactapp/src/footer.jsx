// import React from 'react';
// import'./css/footer.css';
// import  { useEffect } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';

// export default function Footer() {
      
// useEffect(()=>{
//   Aos.init({duration:1000});
// },[])
//   return (
//     <div>
//       <footer className='footer container' data-aos="fade-up">
//           <div className='flex'>
//             <div className='social' data-aos="fade-up">
//               <h2 data-aos="fade-up">Our Socialmedia links :</h2>
//               <img src='logo-removebg-preview.png' alt="img"  />
//               <ul>
//               <li>
//           <a href="https://www.facebook.com/">
//             <i className="fab fa-facebook"></i>
//           </a>
//         </li>
//         <li>
//           <a href="https://www.instagram.com/"> 
//             <i className="fab fa-instagram"></i>
//           </a>
//         </li>
//         <li>
//           <a href="https://www.linkedin.com/" >
//             <i className="fab fa-linkedin"></i>
//           </a>
//         </li>
//               </ul>
//             </div>
//             <div className='about' data-aos="fade-up">
//               <h2>About :</h2>
//               <ul>
//                 <a href='./' >Home</a>
//               <a href='./third' >About us</a>
//                 <a href='#our'>Services</a>

//               </ul>
//             </div>
//             <div className='conect' data-aos="fade-up">
//               <h2>Contact :</h2>
//               <div class="contact-icons">
//            <a href="tel:+123456789" class="icon">
//           <i class="fas fa-phone"></i> +91 6303897654
//        </a>
//       <a href="mailto:info@example.com" class="icon">
//       <i class="fas fa-envelope"></i> info@example.com
//       </a>
//       <a href="mailto:info@example.com" class="icon">
//       <i class="fas fa-globe"></i> www.hippo_cloud.com
//       </a>
//         </div>
//           </div>
//           </div>  
//       </footer>
//       </div>
//   )
// }



import React from 'react';
import { Link} from "react-router-dom";
import'./css/footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';

export default function Footer() {
     
 useEffect(()=>{
   Aos.init({duration:1000});
 },[])
  return (
  <>
 <section className='container footer' style={{background:'black',maxWidth:'100%',padding:'1.4rem'}}>
<div id="demo" style={{maxWidth:'100%'}} >

<div style={{color:"white"}} className='gri'>

<div  className='fin'>
<h1>Find us :</h1>
<img src="logo-removebg-preview.png" alt="#"  style={{maxWidth:'300px',marginLeft:"-35px"}}/>
<br></br>
<i class="bi bi-geo-alt-fill" style={{color:"red",fontSize:"20px"}}></i>
<span>  9-16-23/1/1,Block-1,2nd&nbsp;Floor,</span>
<p>CBM Compound,Visakhapatnam-530003 </p>
<i class="bi bi-envelope-at" style={{color:'white',fontSize:'20px',marginLeft:'8px'}}></i> &emsp; <span>info@hippoclouds.com</span><br/>
<i class="bi bi-telephone-fill" style={{color:'white',fontSize:'20px',marginLeft:'8px'}}></i> &emsp;<span>+91 7601046792</span>
</div>

<div className='ser' >
<h1>Services :</h1>
<Link to="/fullstack"  >Full Stack</Link><br/>
<Link to="/python" >Python Programming</Link><br/> 
<Link to="/digitalmarketing" >DigitalMarketing</Link><br/>
<Link to="/tally" >Tally</Link>
</div>

<div >
<h1>Follow Us On :</h1>

<div style={{display:'flex',gap:'1rem',marginTop:'10px'}} className='socail'>
            <a href='https://www.facebook.com/hippocloud/'target='blank' style={{fontSize:'25px',color:'whitesmoke'}}><i class="bi bi-facebook"></i></a>&emsp;
            <a href='https://www.instagram.com/hippocloud.vizag/' target='blank' style={{fontSize:'25px',color:'whitesmoke',}}><i class="bi bi-instagram"></i></a>&emsp;
            <a href='https://www.twitter.com/hippocloud1/' target='blank' style={{fontSize:'25px',color:'whitesmoke'}}><i class="bi bi-twitter"></i></a>&nbsp;      
   </div>   
</div>
</div>
{/*  */}
<hr  style={{color:"white"}}/>
<div  className='hac' >
  
<ul >
<Link to='./' style={{textDecoration:'none',color:'whitesmoke', cursor:'pointer'}}><li>Home</li></Link>
<Link to='/third' style={{textDecoration:'none',color:'whitesmoke',cursor:'pointer'}}><li>About Us</li></Link>
<Link to='/first' style={{textDecoration:'none',color:'whitesmoke',cursor:'pointer'}}><li>Contact Us</li></Link>
</ul>
</div>




   
</div>
    </section> 
    </>
  )
}