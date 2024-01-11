
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { Link, useParams } from "react-router-dom";

// export default function Student() {
//     const useParam = useParams();
//     const { id } = useParam;
//     const [data, setData] = useState({ firstname: '', email: '', feedback: '' });
//     const [val, setVal] = useState(0);   
//     const [tutorinfo, setTutor] = useState([])
//     const [studentinfo, setStudent] = useState([]);
   

//     useEffect(() => {
//         axios.get(`http://localhost:5000/student/${id}`).then((res) => {
//             setStudent(res.data)
//         })
//     }, [studentinfo, id])

//     useEffect(() => {
//         axios.get('http://localhost:5000/tuto').then((res) => {

//             setTutor(res.data)
//         })
//     }, [tutorinfo])

//     const feeddetails = () => {
//         const feedbackinfo = { firstname: data.firstname, email: data.email, feedback: data.feedback }
//         alert('Feed Submitted sucessfully');
//         axios.post('http://localhost:5000/feedbackinfo', feedbackinfo).then((res) => {
//             console.log(res.data);
           
//             if (res !== '') {
               
//                 setVal(val + 1);
//                 data.firstname = '';
//                 data.email = '';
//                 data.feedback = '';
//             }


//         })
//     }

//     React.useEffect(() => {
//         axios.get(`http://localhost:5000/singleuser/${id}`).then((res) => {
            
//             setData({ firstname: res.data[0].firstname, email: res.data[0].email})
//         }
//         )
//     }, [id])
//     const handler = (e) => {
//         const { name, value } = e.target;

//         setData((prevState) =>
//             ({ ...prevState, [name]: value }))
//     }

//     const Feedback = () => {
//         let response = document.getElementById('feed');

//         if (response.style.display === "none") {
//             response.style.display = "block";
//         } else {
//             response.style.display = "none";
//         }

//     }

//     return (
//         <>
//             <section>
               
//                 <div style={{margin:'40px 0 0 0'}}>
//                     <caption align="center" style={{ fontWeight: 'bold', fontSize: '20px', color: 'white', borderRadius: '0 10px 0 10px', background: 'grey', margin: '10px 0 0 10px ' }} >Student</caption>
//                     <button className="btn btn-outline-dark  btn-lg px-2" type="submit" onClick={Feedback}style={{float:'right'}}>Feed Back</button><br /><br />
//                     <table className="table table-bordered" style={{ borderColor: 'white', background: 'rgba(0, 0, 0,0.2)', width: '500px', margin: '-85px 0 0 150px', borderRadius: '20px 20px 20px 20px' }} >

                        

//                         <tbody style={{fontSize:'20px',fontFamily:'bahnschrift condensed'}} >
//                             {studentinfo.map(item =>
//                                 <>
//                                     <tr>
//                                         <th scope="col">ID</th>
//                                         <td align="center">{item.id}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">Name</th>
//                                         <td align="center">{item.firstname}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">Email</th>
//                                         <td align="center">{item.email}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">Course_Type</th>
//                                         <td align="center">{item.course}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">Content</th>
//                                         <td >{item.content}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">StartingDate</th>
//                                         <td align="center">{item.start}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">EndingDate</th>
//                                         <td align="center">{item.end}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">Total_Fee</th>
//                                         <td align="center">{item.total}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">Paid_Fee</th>
//                                         <td align="center">{item.paid}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">Remaining_Fee</th>
//                                         <td align="center">{item.remaining}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">Project/Internship</th>
//                                         <td align="center">{item.project}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">Role</th>
//                                         <td align="center">{item.roletype}</td>
//                                     </tr>
                                    
//                                     <tr>
//                                         <th scope="col">Assigned To</th>
//                                         <td align="center" value={tutorinfo.firstname}>{item.assigned_to}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">Status</th>
//                                         <td align="center">{item.status}</td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="col">Fee</th>
//                                         <td align="center"><button type="button" className="btn btn-outline-warning"><Link to={`/payment/${id}`} style={{ textDecoration: 'none' }}>Pay</Link></button>&nbsp;
                                           
//                                         </td>
//                                     </tr>
//                                 </>
//                             )}
//                         </tbody>
//                     </table><br />
//                     <div id="feed" style={{ display: 'none' }}>
//                         <form className="table table-bordered" key={val} style={{ width: '400px', height: '300px', margin: '-500px 0 0 700px', borderColor: 'white', background: 'rgba(0, 0, 255,0.2)', borderRadius: '10px 10px 10px 10px',fontSize:'18px',fontFamily:'bahnschrift condensed' }}>

                            
//                             <div style={{margin:'-10px 0 0 20px'}}><br/>
//                             <label>Name</label><br/>
//                             <input type="text" name="name" onChange={handler} value={data.firstname}   style={{borderRadius:'5px'}} readOnly/><br/>

//                             <label>Email</label><br/>
//                             <input type="text" name="email" onChange={handler} value={data.email}  style={{borderRadius:'5px'}} readOnly/><br/>

//                             <label>Feedback</label><br/>
//                             <textarea rows="3" cols="40" name="feedback" onChange={handler} style={{borderRadius:'5px'}}></textarea><br/>
//                             <button className="btn btn-outline-dark  btn-lg " style={{height:'35px',padding:'2px 5px 8px 10px',margin:'0 0 0 300px' ,boxShadow:'1px 2px 3px 3px'}} onClick={feeddetails}>Submit</button>
//                             </div>

//                         </form>

//                     </div>

//                 </div>

//             </section>

//         </>
//     )
// }




// .........
 import axios from "axios";
 import React, { useState, useEffect } from "react";
 import 'bootstrap/dist/js/bootstrap.bundle.min';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Link, useParams } from "react-router-dom";
import './css/feedback.css';
import { FaDownload } from "react-icons/fa";
import Modal from "react-modal";



export default function Student() {
        const useParam = useParams();
     const { id } = useParam;
     const [data, setData] = useState({ firstname: '', email: '', feedback: '' });
     const [val, setVal] = useState(0);   
     const [tutorinfo, setTutor] = useState([])
     const [studentinfo, setStudent] = useState([]);
//    .....
    const [taskfiles, setTaskfiles] = useState(null);
    const [description, setDescription] = useState('');
    const [Timeshedule,setTimeshedule] = useState('');
     const [progress, setProgress] = useState(0);
     const [file,setFile] = useState(null);
     const [tutorreview,settutorreview] = useState('');
     const [isModalOpen, setIsModalOpen] = useState(false);  // State to control modal visibility
    //  ....
    const [course,setCourse] = useState('')
    const [content,setcontent] = useState('')
    const [Date,setDate] = useState('')





     useEffect(() => {
         axios.get(`http://localhost:5000/student/${id}`).then((res) => {
             setStudent(res.data)
         })
     }, [studentinfo, id])




  

    const feeddetails = () => {
        const feedbackinfo = { firstname: data.firstname, email: data.email, feedback: data.feedback }
        alert('Feed Submitted sucessfully');
        axios.post('http://localhost:5000/feedbackinfo', feedbackinfo).then((res) => {
            console.log(res.data);
           
           if (res !== '') {
            
                setVal(val + 1);
                data.firstname = '';
               data.email = '';
               data.feedback = '';
           }


         })
     }

     React.useEffect(() => {
         axios.get(`http://localhost:5000/singleuser/${id}`).then((res) => {
            
             setData({ firstname: res.data[0].firstname, email: res.data[0].email})
         }
         )
     }, [id])
     const handler = (e) => {
         const { name, value } = e.target;

        setData((prevState) =>
            ({ ...prevState, [name]: value }))
    }
// ...
const Feedback = () => {
  setIsModalOpen(true);  // Open the modal
}
const closeModal = () => {
  setIsModalOpen(false);  // Close the modal
}



    //  const Feedback = () => {
    //     let response = document.getElementById('feed');

    //       // Set initial state to 'none'
     
    //     if (response.style.display === "none") {
    //         response.style.display = "block";
    //     } else {
    //         response.style.display = "none";
    //     }

    //  }
  
// ....get data 'task' from the tutor_student_assignment table...
const mytasaks = ()=>{
    const myt = document.getElementById('toggle')
    // //set intially none..
    //    myt.style.display = "none"; 
    if(myt.style.display === 'none'){
        myt.style.display = 'block';
    }else{
        myt.style.display = 'none';
    }

}
// .....get discription and file from tutor_student_assignment...
useEffect(() => {
    axios.get(`http://localhost:5000/discription/${id}`)
        .then(res => {
            console.log(res.data);
            const disc = res.data[0];
            setDescription(disc.discription);
            setTaskfiles(disc.Test);
            setTimeshedule(disc.Time);
            settutorreview(disc.tutor_review);
            setCourse(disc.course);
            setcontent(disc.content);
            setDate(disc.Date);
        })
        .catch(err => console.log(err));
}, [id]);

 
// download file function.....

const downloadFile = async () => {
    try {
        // Trigger the file download by opening a new window with the file URL
        window.open(`http://localhost:5000/download/${encodeURIComponent(taskfiles)}`, '_blank');
    } catch (error) {
        console.error('Error downloading file:', error);
        alert('please choose file')
    }
};


// send (post) `students task` to...assign_students table..
const handleFileChange = (e)=>{
    const selectedFile = e.target.files[0];
    setFile(selectedFile)
    console.log("selected file:",selectedFile);
  }
// ....
     const handileTask = ()=>{
        const formData = new FormData();
        formData.append('file',file)
       
        axios.post(`http://localhost:5000/studnet_stasks/${id}`,formData)
        .then(res=>{
            console.log(res)
            alert('task uploaded successfully')
            setFile('')
            return
        })
        .catch(err=>console.log(err))
        
     }
    //  get tutor review..

   

  return (
    <div className="student-table" style={{marginTop:'50px'}}>
         <button className="btn btn-outline-dark  btn-lg px-2" type="submit" onClick={Feedback}style={{float:'right',marginTop:'30px'}}>Feed Back</button>
         <table className="horizontal-table">
      <tbody>
        {studentinfo.map((item, index) => (
          < >
            <tr >
              <th>ID</th>
              <td>{item.id}</td>
            </tr>

            <tr>
              <th>Name</th>
              <td>{item.firstname}</td>
            </tr>

            <tr>
              <th>Email</th>
              <td>{item.email}</td>
            </tr>

            <tr>
              <th>Course Type</th>
              <td>{item.course}</td>
            </tr>

            <tr>
              <th>Content</th>
              <td>{item.content}</td>
            </tr>

            <tr>
              <th>Starting Date</th>
              <td>{item.start}</td>
            </tr>

            <tr>
              <th>Ending Date</th>
              <td>{item.end}</td>
            </tr>

            <tr>
              <th>Total Fee</th>
              <td>{item.total}</td>
            </tr>

            <tr>
              <th>Pending Fee</th>
              <td>{item.paid}</td>
            </tr>

            <tr>
              <th>Remaining Fee</th>
              <td>{item.remaining}</td>
            </tr>

            <tr>
              <th>Project/Internship</th>
              <td>{item.project}</td>
            </tr>

            <tr>
              <th>Role</th>
              <td>{item.roletype}</td>
            </tr>

            <tr>
              <th>Assigned To</th>
              <td value={tutorinfo.firstname}>{item.assigned_to}</td>
            </tr>

            <tr>
              <th>Status</th>
              <td>{item.status}</td>
            </tr>

            <tr>
              <th>Fee Details</th>
              <td>{item.fee_detail}</td>
            </tr>

            <tr>
              <th>Fee Payment</th>
              <td>
                <Link to={`/payment/${id}`} style={{ textDecoration: 'none' }}>
                  Pay
                </Link>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
      <div id="feed" style={{ display: 'none' }}>
     
         <form className="table table-bordered" key={val} style={{margin:'2rem auto'}} >

                            <div className="feedbackfrom">
                          
                            <label>Name</label><br/>
                            <input type="text" name="name" onChange={handler} value={data.firstname}   style={{borderRadius:'5px'}} readOnly/><br/>

                            <label>Email</label><br/>
                             <input type="text" name="email" onChange={handler} value={data.email}  style={{borderRadius:'5px'}} readOnly/><br/>

                            <label>Feedback</label><br/>
                            <textarea rows="3" cols="40" name="feedback" onChange={handler} style={{borderRadius:'5px'}}></textarea><br/>
                           <center> <button   onClick={feeddetails}>Submit</button></center>
                           </div>
                         </form>
      
      </div>
      {/* ............ */}
      <div className="student-dashboard" style={{ marginTop: '50px' }}>
            <div className="dashboard-header">
                <h3 style={{color:'#0a5275',fontWeight:'600'}}>Welcome, {data.firstname}!</h3>
            </div>

            {/* Progress Bar */}
            <div className="progress-container">
                <h4>Course Progress</h4>
                <div className="progress">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
       {/* Display schedule or "no schedules yet..." */}
           <center style={{marginTop:'15px'}}>
           <h3 style={{color:'#0a5275'}}>---My Schedule---</h3>
           </center>
           <div style={{display:'flex',justifyContent:'space-around'}} >
            <div >
            {Timeshedule ? <p style={{fontWeight:'bold'}}><b style={{color:'#009933'}}>Time :</b> {Timeshedule}</p> : <p>No schedules yet...</p>}
            {Date ? <p style={{fontWeight:'bold'}}><b style={{color:'#009933'}}>Date :</b> {Date}</p> : <p>No schedules yet...</p>}
            </div>
            <div>
            {course ? <p style={{fontWeight:'bold'}}><b style={{color:'#009933'}}>Course :</b> {course}</p> : <p>No schedules yet...</p>}
            {content ? <p style={{fontWeight:'bold'}}><b style={{color:'#009933'}}>Concept:</b> {content}</p> : <p>No schedules yet...</p>}
   
            </div>

           </div>
           
            
            {/* Tasks Section */}
            <div className="tasks-container">
                <center><button className="btn btn-primary"  onClick={mytasaks}> My Task</button></center>
                <div style={{maxWidth:'500px', maxHeight:'300px',margin:'20px auto',border:'2px solid black', textAlign:'center', padding:'2rem',display:'none'}} id="toggle" >

                 <div><p style={{maxWidth:'100%' ,wordWrap: 'break-word',}}><span style={{color:'#009933',fontWeight:'bold'}}>Task Description :</span> <b>{description}</b></p></div>
                 <div>  <center><button onClick={downloadFile} style={{marginTop:'30px',padding:'0.4rem'}}><FaDownload  style={{cursor:'pointer',}}/>Download Task</button></center></div>  
                </div>


                
                <center style={{marginTop:'15px',color:'#0a5275'}}> <h3>---Submit Task---</h3></center>
                <center><input type="file" onChange={handleFileChange} /></center>
                <center><button onClick={handileTask} style={{marginTop:'30px',padding:'0.4rem'}}><FaDownload  style={{cursor:'pointer'}}/>Upload Task</button></center>
            </div>
              <center style={{marginTop:'15px',color:'#0a5275'}}><h3>---Tutor Review---</h3>
              <textarea style={{border:'1px solid black'}} readOnly value={tutorreview}>
             
                
                </textarea></center>
           

            {/* Your existing table and feedback form... */}
{/* ... */}

          <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        zIndex: 1000,
                        
                    },
                    content: {
                        maxWidth: '30%',
                        margin: '30px auto',
                        borderRadius: '8px',
                        padding: '12px',
                        
                       
                       
                    }
                }}
            >
                <form className="table table-bordered">
                    <div className="feedbackfrom">
                        <label>Name</label><br />
                        <input type="text" name="name" onChange={handler} value={data.firstname} style={{ borderRadius: '5px' }} readOnly /><br />

                        <label>Email</label><br />
                        <input type="text" name="email" onChange={handler} value={data.email} style={{ borderRadius: '5px' }} readOnly /><br />

                        <label>Feedback</label><br />
                        <textarea rows="3" cols="40" name="feedback" onChange={handler} style={{ borderRadius: '5px' }}></textarea><br />
                        <center> <button onClick={feeddetails}>Submit</button></center>
                    </div>
                </form>
                <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', padding:'0.5rem', fontSize:'1.6rem',color:'black',background:'white',border:'none',cursor:'pointer' }}><i class="bi bi-x-circle"></i></button>
            </Modal>


            {/* <div className="student-table">  
                <div id="feed" style={{ display: 'none' }}>

                    <form className="table table-bordered" key={val} style={{ margin: '2rem auto' }}>
                        <div className="feedbackfrom">
                            <label>Name</label><br />
                            <input type="text" name="name" onChange={handler} value={data.firstname} style={{ borderRadius: '5px' }} readOnly /><br />

                            <label>Email</label><br />
                            <input type="text" name="email" onChange={handler} value={data.email} style={{ borderRadius: '5px' }} readOnly /><br />

                            <label>Feedback</label><br />
                            <textarea rows="3" cols="40" name="feedback" onChange={handler} style={{ borderRadius: '5px' }}></textarea><br />
                            <center> <button onClick={feeddetails}>Submit</button></center>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
       
    </div>
  

  );
  
  
}
