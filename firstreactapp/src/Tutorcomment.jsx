import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

export default function Tutorcomment() {
    const {id}= useParams();
   const [review,setRivew] = useState();



   const comment = (e) =>{
    const tutorcomment = e.target.value;
    setRivew(tutorcomment)
   console.log("tutor comment:",tutorcomment);
    
 }
  
 const navigate = useNavigate();

  const submitComment = () => {

    const confrimation = window.confirm('you want to send')
    if(confrimation){
  // Ensure that you send an object with the correct property name to the server
axios.post(`http://localhost:5000/tutorcomment/${id}`, { tutor_review: review })
.then(res => {
  console.log(res);
  navigate(-1)
})
.catch(error => {
  console.error('Error submitting comment:', error);
  alert('Failed to send comment');
});
    }else{
      console.log('confromation cancelled..')
    }

    

    
   
   


  };

  
  const goBack = () => {
    
    console.log('Going back');
     navigate(-1)
    // history.goBack();
  };
    return (
        <div style={{marginTop:'80px',marginBottom:'20px'}}>
          <h2>Tutor Comment Box</h2>
          <textarea  placeholder="Type your comment here..." onChange={comment} style={{padding:'2rem'}} ></textarea>
          <br />
          <button onClick={submitComment} className='btn btn-success'>Send</button>&emsp;
          <button onClick={goBack} style={{background:'blue'}} className='btn btn-primary'>Back</button>
        </div>
      );
}
