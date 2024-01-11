// import axios from "axios";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import {  useNavigate, useParams } from "react-router-dom";

// export default function Courses(){
   
//     const [tutorinfo, setTutor] = useState([])
//     const useParam= useParams();
//     const {id} = useParam;
//      const {content} = useParam;
//     const {course} = useParam;
//      const Nav = useNavigate();

//     const [data,setData]=useState({ course: '', content: '' });
   

//     useEffect(()=>{
//         axios.get(`http://localhost:5000/tutor/${id}/${course}`).then((res) => {
//             setTutor(res.data);
//            })

//         },[tutorinfo, id,course])

//     const handler = (e) => {

//         const { name, value } = e.target;

//         setData((prevState) =>
//             ({ ...prevState, [name]: value }));

//     }

//     React.useEffect(() => {
//         axios.get(`http://localhost:5000/fullstack/${content}`).then((res) => {
            
//             setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
//         }
//         );
//         axios.get(`http://localhost:5000/devops/${content}`).then((res) => {
            
//         setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
//     }
//     );

//         axios.get(`http://localhost:5000/testing/${content}`).then((res) => {
            
//             setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
//         }
//         )
//         axios.get(`http://localhost:5000/tally/${content}`).then((res) => {
            
//         setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
//     }
//     )
//     axios.get(`http://localhost:5000/marketing/${content}`).then((res) => {
            
//     setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
// }
// )
   
//     }, [content])

//     const Contentupdate=()=>{
        
//         const coursedetails = { course: data.course, content: data.content, date: data.date,task_status: data.task_status,test: data.test}
//         if(data.course === "Full Stack"){
//         axios.post(`http://localhost:5000/fullstackupdate/${content}`, coursedetails).then((res) => {
//             console.log(res.data);
//             if (res !== '') {
//                 alert('Full Stack details  updated successfully!!!!');
//                 console.log({ id });
                
                
//                 data.course = '';

//                 data.content = '';
//                 data.date = '';
//                 data.task_status = '';

//                 data.test = '';

               
//                 Nav(-1);
                
//             }

           

//         })
//     }else if(data.course === "Testing"){

//         axios.post(`http://localhost:5000/testingupdate/${content}`, coursedetails).then((res) => {
//             console.log(res.data);
//             if (res !== '') {
//                 alert('Testing details  updated successfully!!!!');
//                 console.log({ id });
                
              
//                 data.course = '';

//                 data.content = '';
//                 data.date = '';
//                 data.task_status = '';

//                 data.test = '';

//                 Nav(-1);
                
                
//             } else if(data.course === "Devops"){

//                 axios.post(`http://localhost:5000/devopsupdate/${content}`, coursedetails).then((res) => {
//                     console.log(res.data);
//                     if (res !== '') {
//                         alert('Testing details  updated successfully!!!!');
//                         console.log({ id });
                        
                      
//                         data.course = '';
        
//                         data.content = '';
//                         data.date = '';
//                         data.task_status = '';
        
//                         data.test = '';
        
//                         Nav(-1);
                        
                        
//                     }
        
//                 })
        
                
        
//                }else if(data.course === "Tally"){

//                 axios.post(`http://localhost:5000/tallyupdate/${content}`, coursedetails).then((res) => {
//                     console.log(res.data);
//                     if (res !== '') {
//                         alert('Testing details  updated successfully!!!!');
//                         console.log({ id });
                        
                      
//                         data.course = '';
        
//                         data.content = '';
//                         data.date = '';
//                         data.task_status = '';
        
//                         data.test = '';
        
//                         Nav(-1);
                        
                        
//                     }
        
//                 })
        
                
        
//                }else if(data.course === "Digital_Marketing"){

//                 axios.post(`http://localhost:5000/marketingupdate/${content}`, coursedetails).then((res) => {
//                     console.log(res.data);
//                     if (res !== '') {
//                         alert('Testing details  updated successfully!!!!');
//                         console.log({ id });
                        
                      
//                         data.course = '';
        
//                         data.content = '';
//                         data.date = '';
//                         data.task_status = '';
        
//                         data.test = '';
        
//                         Nav(-1);
                        
                        
//                     }
        
//                 })
//                }

//         })
//        }   
//     }
    
//     return(
//         <section>

           
//             <div className="container py-5 h-100" style={{margin:'-40px 0 0 0'}}>
                
//                 <div className="row d-flex justify-content-center align-items-center h-100">
//                     <div className="col-12 col-md-8 col-lg-6 col-xl-5" >
//                         <div className=" bg-white text-black" style={{ borderRadius: "1rem",boxShadow:"1px 1px 1px 1px",width:'700px',margin:'30px 0 0 -100px '}} >
//                             <div className=" p-5 text-center" style={{height:'480px',borderRadius:'10px'}}>
//                             <div style={{ marginTop: '-30px', borderRadius: '10px', width: 'auto' }}>
//                                             <h3 className="text-uppercase text-center mb-5" style={{ color: 'black',textDecoration:'underline' }}>Update Course Info</h3>
//                                         </div>
//                                 <div className="mb-md-5 mt-md-4 pb-5" style={{display:'flex',gap:'30px'}}>
                                    
                                    
//                                     <div className="form-outline form-white mb-4">
                                    
//                                         <label className="form-label" for="typeEmailX" style={{ float: 'left' }}>course</label>
                                        
//                                         <input type="text" id="typeEmailX" name="course" class="form-control form-control-lg" value={data.course}   onChange={handler}/>
                                    
//                                     </div>
                                    

//                                     <div className="form-outline form-white mb-4">
//                                         <label className="form-label" for="typeContent" style={{ float: 'left' }}>content</label>
//                                         <input type="text" id="typeContent" name="content" class="form-control form-control-lg" value={data.content}  onChange={handler} />        
                                           
//                                     </div>
//                                     </div>
//                                     <div style={{display:'flex',gap:"30px"}}>
//                                     <div>
//                                     <label className="form-label" for="typePasswordX" style={{ float: 'left' }}>date</label>
//                                         <input type="date" name="date" onChange={handler}/>
//                                     </div><br/>
//                                     <div>
//                                     <label className="form-label" for="typePasswordX" style={{ float: 'left' }}>task_status</label>
//                                         <select name="task_status" onChange={handler}>
//                                             <option>Select</option>
//                                             <option>complete</option>
//                                             <option>InComplete</option>
//                                         </select>
//                                     </div>
//                                     <div>
//                                     <label className="form-label" for="typePasswordX" style={{ float: 'left' }}>task</label>
//                                         <input type="file" name="test" onChange={handler} />
//                                     </div> 
//                                 </div><br/> <br/> 
//                                 <button  type="submit" style={{padding:"10px 20px 10px 20px",borderRadius:"5px"}} onClick={Contentupdate} >Update</button>
                                
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


// ...............111



import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import './css/CourseUpdate.css'

export default function Courses(){
   
    const [tutorinfo, setTutor] = useState([])
    const useParam= useParams();
    const {id} = useParam;
     const {content} = useParam;
    const {course} = useParam;
     const Nav = useNavigate();
    const [data,setData]=useState({ course: '', content: '',});
    const [file,setFile] = useState(null);
    const [selectedTime,setselectedTime] = useState('');
   
    const [discript,setdiscription] = useState('');

  
  
   
// send(post) time and taskfile to assigntable..
const Timeonchange = (e)=>{
    const selectedTime = e.target.value;
    setselectedTime(selectedTime)
    console.log("selected Time:",selectedTime);
 } 
   
 const handleFileChange = (e)=>{
   const selectedFile = e.target.files[0];
   setFile(selectedFile)
   console.log("selected file:",selectedFile);
 }
 const discription = (e) =>{
    const enterdiscript = e.target.value;
    setdiscription(enterdiscript)
   console.log("tutor discrtpt:",enterdiscript);
    
 }



    useEffect(()=>{
        axios.get(`http://localhost:5000/tutor/${id}/${course}`).then((res) => {
            setTutor(res.data);
           })

        },[tutorinfo, id,course])

    const handler = (e) => {

        const { name, value } = e.target;

        setData((prevState) =>
            ({ ...prevState, [name]: value }));

    }

    React.useEffect(() => {
        axios.get(`http://localhost:5000/fullstack/${content}`).then((res) => {
            
            setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
        }).catch((err)=>{
            console.log(err)
         })
        ;
        axios.get(`http://localhost:5000/devops/${content}`)
        .then((res) => {
            
        setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
    }
    ).catch((err)=>{
       console.log(err)
    });

        axios.get(`http://localhost:5000/testing/${content}`)
        .then((res) => {
            
            setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
        }).catch((err)=>{
            console.log(err)
         })

        axios.get(`http://localhost:5000/tally/${content}`).then((res) => {
            
        setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
    }).catch((err)=>{
        console.log(err)
     })

    axios.get(`http://localhost:5000/marketing/${content}`).then((res) => {
            
    setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
}).catch((err)=>{
       console.log(err)
    })
   
    }, [content])

    const sendtask=()=>{
        //    .....
        const formData = new FormData();
        formData.append('file', file);
        formData.append('time', selectedTime);
        formData.append('discription', discript);
       
        console.log(formData);
        console.log(id);
// ....post contents..
axios.post(`http://localhost:5000/content/${id}`, { contents: data.content, courses: data.course, date: data.date, Status:data.task_status  })
  .then(res => console.log(res))
  .catch(err => console.log(err))
   
        axios.post(`http://localhost:5000/taskpost/${id}`, formData)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
          alert('task updated')
        
        const coursedetails = { course: data.course, content: data.content, date: data.date, task_status: data.task_status,test: data.test}
        console.log(coursedetails)
        if(data.course === "Full Stack"){
        axios.post(`http://localhost:5000/fullstackupdate/${content}`, coursedetails).then((res) => {
            console.log(res.data);
            if (res !== '') {
                alert('Full Stack details  updated successfully!!!!');
                console.log({ id }); 

                data.course = '';
                data.content = '';
                data.date = '';
                data.task_status = '';
                data.test = '';    
                Nav(-1);
                
            }
        })
    }else if(data.course === "Testing"){

        axios.post(`http://localhost:5000/testingupdate/${content}`, coursedetails).then((res) => {
            console.log(res.data);
            if (res !== '') {
                alert('Testing details  updated successfully!!!!');
                console.log({ id });
                
                data.course = '';
                data.content = '';
                data.date = '';
                data.task_status = '';
                data.test = '';
                Nav(-1);          
                
            } else if(data.course === "Devops"){

                axios.post(`http://localhost:5000/devopsupdate/${content}`, coursedetails).then((res) => {
                    console.log(res.data);
                    if (res !== '') {
                        alert('Testing details  updated successfully!!!!');
                        console.log({ id });
                        
                      
                        data.course = '';
        
                        data.content = '';
                        data.date = '';
                        data.task_status = '';
        
                        data.test = '';
        
                        Nav(-1);
                        
                        
                    }
        
                })
        
                
        
               }else if(data.course === "Tally"){

                axios.post(`http://localhost:5000/tallyupdate/${content}`, coursedetails).then((res) => {
                    console.log(res.data);
                    if (res !== '') {
                        alert('Testing details  updated successfully!!!!');
                        console.log({ id });
                        
                      
                        data.course = '';
        
                        data.content = '';
                        data.date = '';
                        data.task_status = '';
        
                        data.test = '';
        
                        Nav(-1);
                        
                        
                    }
        
                })
        
                
        
               }else if(data.course === "Digital_Marketing"){

                axios.post(`http://localhost:5000/marketingupdate/${content}`, coursedetails).then((res) => {
                    console.log(res.data);
                    if (res !== '') {
                        alert('Testing details  updated successfully!!!!');
                        console.log({ id });
                        
                      
                        data.course = '';
        
                        data.content = '';
                        data.date = '';
                        data.task_status = '';
        
                        data.test = '';
        
                        Nav(-1);
                        
                        
                    }
        
                })
               }
           

        })
       }   
       Nav(-1);
    }
    
    return(
        <section style={{ margin: '100px auto', maxWidth: '100%' }}>

  <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border:'1px solid black', boxShadow: '3px 9px 10px  rgba(0, 0, 0, 0.9)',borderRadius:'20px' }}>

              <div>       
                <div>
              <center> <h3 style={{color:'#0a5275',textDecoration:'underline'}}>Task Update</h3> </center>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>

              {/* Row 1: Course, Content, Select Time */}
              <div style={{ display: 'flex', marginBottom: '15px', }} className="row11">
                <div style={{ marginRight: '20px' }}>
                  <label style={{color:'#009933'}}>Course</label>
                  <input type="text" id="typeEmailX" name="course" value={data.course} onChange={handler} />
                </div>
                <div style={{ marginRight: '20px' }}>
                  <label className="form-label" htmlFor="typeContent"  style={{color:'#009933'}}>Content</label>
                  <input type="text" id="typeContent" name="content" value={data.content} onChange={handler} />
                </div>
                <div>
                  <label  style={{color:'#009933'}}>Select Time</label>
                  <select className="timelist"  onChange={Timeonchange} style={{maxWidth:'100%'}}>
                    {/* Options here */}
                    <option>--select--</option>
                    <option>9AM to 10AM</option>
                    <option>10AM to 11AM</option>
                    <option>11AM to 12AM</option>
                    <option>12AM to 1PM</option>
                    <option>1PM to 2PM</option>
                    <option>2PM to 3PM</option>
                    <option>3PM to 4PM</option>
                    <option>4PM to 5PM</option>
                    <option>5PM to 6PM</option>




                  </select>
                </div>
              </div>

              {/* Row 2: Description */}
              <div style={{ marginBottom: '15px' }}>
                <div>
                  <label className="form-label" htmlFor="typePasswordX" style={{color:'#009933'}}>Description</label>
                  <textarea onChange={discription}></textarea>
                </div>
              </div>

              {/* Row 3: Date, Task, Task Status */}
              <div style={{ display: 'flex'}} className="row33">
                <div style={{ marginRight: '20px' }}>
                  <label className="form-label" htmlFor="typePasswordX" style={{color:'#009933'}}>Date</label>
                  <input type="date" name="date" onChange={handler} />
                </div>

                <div style={{ marginRight: '20px' }}>
                  <label className="form-label" htmlFor="typePasswordX" style={{color:'#009933'}}>Task Status</label>
                  <select name="task_status" onChange={handler} style={{ maxWidth: '100%' }} >
                    {/* Options here */}
                    <option>--select--</option>
                    <option>Complete</option>
                    <option>Incomplete</option>
                  </select>
                </div>

                <div>
                  <label className="form-label" htmlFor="typePasswordX" style={{color:'#009933'}}>Task</label>
                  <input type="file" name="test" onChange={handleFileChange} />
                </div>

              </div>

              <center>
                <button type="submit" onClick={sendtask} className="btn btn-primary" style={{marginTop:'20px'}}>Update</button>
              </center>
            </div> 
      </div>
   
  </div>
</section>

    )
}