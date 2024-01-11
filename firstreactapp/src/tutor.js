
// import axios from "axios";
// import { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { useParams, Link} from "react-router-dom";
// import '../src/tutor.css';
// import Tutorcomment from "./Tutorcomment";


// export default function Tutor(){
    
//     const [tutorinfo,setTutor] = useState([])
//     const [courseinfo,setCourse] = useState([])
//     const {id} = useParams();
//     const {course} = useParams();
//     const [getstudentlist,setgetstudentlist] = useState([]);
//     const [file,setFile] = useState(null);
//     const [selectedTime,setselectedTime] = useState('');
//     const [discript,setdiscription] = useState('');
//     const [studenttasks,setstudenttasks] = useState(null);

     
//     useEffect(() => {

//         axios.get(`http://localhost:5000/tutor/${id}/${course}`).then((res) => {
//             setTutor(res.data);
    
//             if (res.data[0].course === 'Full Stack') {
//                 axios.post('http://localhost:5000/fullstack').then((res) => {
//                     setCourse(res.data);
//                 });
//             } else if (res.data[0].course === 'Testing') {
//                 axios.post('http://localhost:5000/testing').then((res) => {
//                     setCourse(res.data);
//                 });
//             }else if(res.data[0].course==='Devops'){
//                 axios.post('http://localhost:5000/devops').then((res)=>{
//                     setCourse(res.data);
//                 })
//             }else if (res.data[0].course === 'Tally') {
//                 axios.post('http://localhost:5000/tally').then((res) => {
//                     setCourse(res.data);
//                 })}
//                 else if(res.data[0].course === 'Digital_Marketing') {
//                     axios.post('http://localhost:5000/marketing').then((res) => {
//                         setCourse(res.data);
//                     })}

//         });
//     }, [id, course]);

   


   

    

//     const task = () =>{
//         let task1 = document.getElementById('taskdetails');
       
    
//         if(task1.style.display === 'none'){
//             task1.style.display = 'block'
//         }else{
//             task1.style.display = 'none'
//         }
//        }

// // send(post) time and taskfile to assigntable..
//        const Timeonchange = (e)=>{
//           const selectedTime = e.target.value;
//           setselectedTime(selectedTime)
//           console.log("selected Time:",selectedTime);
//        } 
         
//        const handleFileChange = (e)=>{
//          const selectedFile = e.target.files[0];
//          setFile(selectedFile)
//          console.log("selected file:",selectedFile);
//        }
//        const discription = (e) =>{
//           const enterdiscript = e.target.value;
//           setdiscription(enterdiscript)
//          console.log("tutor discrtpt:",enterdiscript);
          
//        }
//     // .......
//        const sendtask = (id) => {
//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('time', selectedTime);
//         formData.append('discription', discript);
       
//         console.log(formData)
         
//         axios.post(`http://localhost:5000/taskpost/${id}`, formData)
//           .then((res) => console.log(res))
//           .catch((err) => console.log(err));
//           alert('task updated')
               
//       };



// //    get student list..

// const getstudentlists = (id)=>{

//     let togglestudnts = document.getElementById('toggled')

//     if(togglestudnts.style.display === 'block'){
//         togglestudnts.style.display ='none';
       
//     }else{
//         togglestudnts.style.display ='block';
//     } 

//     axios.get(`http://localhost:5000/studentslists/${id}`)
//     .then(res =>setgetstudentlist(res.data))   
//     .catch(err =>console.log(err))
// }

// // view students task..
// const viewtask = async (studentid) => {
//     console.log('student id', studentid);

//     try {
//         const response = await axios.get(`http://localhost:5000/student_tasks/${studentid}`);
        
//         if (response.data.length === 0) {
//             // Show alert that no data is available
//             alert("No files uploaded by the student.");
//             return;
//         }

//         const stdata = response.data[0];
//         setstudenttasks(stdata.student_tasks);

//         if (stdata.student_tasks.length === 0) {
//             // Show alert that no files are available to open
//             alert("No files uploaded by the student.");
//             return
//         } else{
//             window.open(`http://localhost:5000/download/${encodeURIComponent(stdata.student_tasks)}`, '_blank');
//         }
        
//     } catch (err) {
//         console.log('error in view', err);
        
//         // Handle error as needed
//     }
// };


    


//     return(
//         <>
//         <section>
       
//         <div>
        
//         <caption align="center" style={{fontWeight:'bold' ,fontSize:'20px',color:'white',borderRadius:'0 10px 0 10px',background:'grey',margin:'5px',marginTop:'40px'}} >Trainer</caption>
               
//         <table className="horizontal-table" style={{marginLeft:'10px'}}>
//       <tbody>
//         {tutorinfo.map((item, index) => (
//           <>
//             <tr>
//               <th>ID</th>
//               <td>{item.id}</td>
//             </tr>

//             <tr>
//               <th>Name</th>
//               <td>{item.firstname}</td>
//             </tr>

//             <tr>
//               <th>Email</th>
//               <td>{item.email}</td>
//             </tr>
//             <tr>
//               <th>Role</th>
//               <td>{item.roletype}</td>
//             </tr>

//             <tr>
//               <th>Course </th>
//               <td>{item.course}</td>
//             </tr>

            
//             <tr>
//               <th>Action</th>
//               <td>
//                  <button  name="activetask" className="btn btn-outline-primary" onClick={task}>Task</button>
//              </td>
//             </tr>
            
           
//           </>
//         ))}
//       </tbody>
//     </table>
                 
//                    <table id="taskdetails" className="horizontal-table" style={{borderColor:'white',background: 'rgba(0, 0, 0,0.2)',borderRadius:'5px',display:'none',maxWidth:'70%', margin:'10px auto'}} >
//                     <thead>
//                         <tr >
                            
                           
                            
//                             <th>Content</th>
//                             <th>date</th>
//                             <th>Time</th>
//                             <th>Task Status</th>
//                             <th>Test</th>
//                             <th>Discription</th>
//                             <th>Action</th>
                            
                            
//                         </tr>
//                     </thead>
//                     <tbody className="cour" align="center" style={{color:'black',background: 'rgba(255, 255, 255,0.2)' }}>
                    
//                         {courseinfo.map((item) =>
//                             <>
//                               <tr  >              
//                                     <td >
//                                     {item.content}
//                                     </td>    
//                                    <td>
//                                     {item.date}
//                                    </td>
//                                    <td>
//                                     <select className="timelist" onChange={Timeonchange}>
//                                         <option value="#">--Select Time--</option>
//                                         <option value="9AM to 10AM">9AM to 10AM</option>
//                                         <option value="10AM to 11AM">10AM to 11AM</option>
//                                         <option value="11AM to 12AM">11AM to 12AM</option>
//                                         <option value="12AM to 1PM">12AM to 1PM</option>
//                                         <option value="1PM to 2PM">1PM to 2PM</option>
//                                         <option value="2PM to 3PM">2PM to 3PM</option>
//                                         <option value="3PM to 4PM">3PM to 4PM</option>
//                                         <option value="4PM to 5PM">4PM to 5PM</option>
//                                         <option value="5PM to 5PM">5PM to 6PM</option>
//                                         <option value="6PM to 7PM">6PM to 7PM</option>

//                                     </select>
//                                    </td>
//                                    <td>
//                                     {item.task_status}
//                                    </td>
//                                    <td>
//                                     {/* {item.test} */}
//                                     <input type="file" onChange={handleFileChange}/>
//                                    </td>
//                                    <td>
//                                     <textarea onChange={discription}></textarea>
//                                    </td>
//                                    <td>
//                                     <button id="upd" className="btn btn-danger" name="tbupdate"  style={{borderRadius:'7px', width:'90px'}}><Link to={`/tutor/${item.id}/${item.course}/courseupdate/${item.content}`} style={{textDecoration:'none',color:'white'}}>Edit</Link></button>
//                                     <button className="btn btn-success" style={{borderRadius:'7px', width:'90px', marginTop:'5px'}} onClick={()=>sendtask(id)}>Submit</button>
//                                    </td>
//                                 </tr>
//                             </>
//                         )}
//                     </tbody>

//                    </table>
                 
//                    <center><button className="btn btn-primary " id="getlist" style={{marginBottom:'20px'}} onClick={()=>getstudentlists(id)} >Show list of Students</button></center>
                                         
//     </div> 
//       {/* student list...table  */}
//          <div className="studentlist" id="toggled" style={{display:'none',margin:'10px auto', }} >
//                 <table  style={{maxWidth:'70%',marginLeft:'10px'}} className="horizontal-table" >
                   
//                         <tr style={{ background:'green', color:'white',}} id='tb'>
//                             <th colSpan='25'>ID</th>
//                             <th colSpan='25'>Name</th>
//                             <th colSpan='25' style={{textAlign:'center'}}>Students Task</th>
//                             <th colSpan='25' style={{textAlign:'center'}}>Review</th>
//                         </tr>
                    
                
//                    {getstudentlist && getstudentlist.map((item,index,id)=>{
//                     return(
//                     <tr key={id}>
//                         <td colSpan='25'>{index+1}</td>
//                         <td colSpan='25'>{item.firstname}</td>
                   
//                         <td colSpan='25'>
//                             <center><button className="btn btn-primary" onClick={()=>viewtask(item.id)}>View</button>
                           
//                         </center></td>
//                     <Link to={`/tutorcomment/${item.id}`} style={{textAlign:'center'}} element={<Tutorcomment/>} >Review</Link>
//                     </tr>)
//                    })}
//           </table>
//             </div>
//                    </section>
                  
                   
//         </>
//     )
// }

// ..........11


import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useParams, Link} from "react-router-dom";
import '../src/tutor.css';
import Tutorcomment from "./Tutorcomment";


export default function Tutor(){
    
    const [tutorinfo,setTutor] = useState([])
    const [getall,setall] = useState([])
    const {id} = useParams();
    const {course} = useParams();
    const [getstudentlist,setgetstudentlist] = useState([]);
    const [courseinfo,setCourse] = useState([])
    const [studenttasks,setstudenttasks] = useState(null);
    const [Timeshedule,setTimeshedule] = useState('');

        // console.log(getall.status)
        // console.log(getall.Time)
        // console.log(getall.Date)


    useEffect(() => {

        axios.get(`http://localhost:5000/tutor/${id}/${course}`).then((res) => {
            setTutor(res.data);
            console.log(res.data);
            // ...
         axios.get(`http://localhost:5000/getall/${id}`)
            .then((res) => {
            setall(res.data);
            console.log(res.data);
            })
            if (res.data[0].course === 'Full Stack') {
                axios.get('http://localhost:5000/fullstack').then((res) => {
                    setCourse(res.data);
                });
            } else if (res.data[0].course === 'Testing') {
                axios.get('http://localhost:5000/testing').then((res) => {
                    setCourse(res.data);
                });
            }else if(res.data[0].course==='Devops'){
                axios.get('http://localhost:5000/devops').then((res)=>{
                    setCourse(res.data);
                })
            }else if (res.data[0].course === 'Tally') {
                axios.get('http://localhost:5000/tally').then((res) => {
                    setCourse(res.data);
                })}
                else if(res.data[0].course === 'Digital_Marketing') {
                    axios.get('http://localhost:5000/marketing').then((res) => {
                        setCourse(res.data);
                    })}

        });
    }, [id, course]);

   // .....get time from tutor_student_assignment...
    useEffect(() => {
        axios.get(`http://localhost:5000/time/${id}`)
            .then(res => {
                console.log(res.data);
                const disc = res.data[0];

               
                setTimeshedule(disc.Time);
               
            })
            .catch(err => console.log(err));
    }, [id]);

   

    

    const task = () =>{
        let task1 = document.getElementById('taskdetails');
       
    
        if(task1.style.display === 'none'){
            task1.style.display = 'block'
        }else{
            task1.style.display = 'none'
        }
       }


      



//    get student list..

const getstudentlists = (id)=>{

    let togglestudnts = document.getElementById('toggled')

    if(togglestudnts.style.display === 'block'){
        togglestudnts.style.display ='none';
       
    }else{
        togglestudnts.style.display ='block';
    } 

    axios.get(`http://localhost:5000/studentslists/${id}`)
    .then(res =>setgetstudentlist(res.data))   
    .catch(err =>console.log(err))
}

// view students task..
const viewtask = async (studentid) => {
    console.log('student id', studentid);

    try {
        const response = await axios.get(`http://localhost:5000/student_tasks/${studentid}`);
        
        if (response.data.length === 0) {
            // Show alert that no data is available
            alert("No files uploaded by the student.");
            return;
        }

        const stdata = response.data[0];
        setstudenttasks(stdata.student_tasks);

        if (stdata.student_tasks.length === 0) {
            // Show alert that no files are available to open
            alert("No files uploaded by the student.");
            return
        } else{
            window.open(`http://localhost:5000/download/${encodeURIComponent(stdata.student_tasks)}`, '_blank');
        }
        
    } catch (err) {
        console.log('error in view', err);
        
        // Handle error as needed
    }
};


    


    return(
        <>
        <section>
           
       
        <div>
        
        <caption align="center" style={{fontWeight:'bold' ,fontSize:'20px',color:'white',borderRadius:'0 10px 0 10px',background:'grey',margin:'5px',marginTop:'40px'}} >Trainer</caption>
               
        <table className="horizontal-table" style={{marginLeft:'10px'}}>
      <tbody>
        {tutorinfo.map((item, index) => (
          <>
            <tr>
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
              <th>Role</th>
              <td>{item.roletype}</td>
            </tr>

            <tr>
              <th>Course </th>
              <td>{item.course}</td>
            </tr>

            
            <tr>
              <th>Action</th>
              <td>
                 <button  name="activetask" className="btn btn-outline-primary" onClick={task}>Task</button>
             </td>
            </tr>
            
           
          </>
        ))}
      </tbody>
    </table>
                 
                   <table id="taskdetails" className="horizontal-table" style={{borderColor:'white',background: 'rgba(0, 0, 0,0.2)',borderRadius:'5px',display:'none',maxWidth:'70%', margin:'10px auto'}} >
                    <thead>
                        <tr >
                            
                           
                            
                            <th>Content</th>
                            <th>date</th>                        
                            <th>Task Status</th>
                            <th>Time</th>
                            <th>Action</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody className="cour" align="center" style={{color:'black',background: 'rgba(255, 255, 255,0.2)' }}>
                    
                        {courseinfo.map((item,index) =>
                            <>
                              <tr key={index} >              
                              <td>{item.content}</td>
                              
                              <td>
                                   <button id="upd" className="btn btn-danger" name="tbupdate"  style={{borderRadius:'7px', width:'90px'}}><Link to={`/tutor/${id}/${item.course}/courseupdate/${item.content}`} style={{textDecoration:'none',color:'white'}}>Edit</Link></button>
                                  </td>
                              </tr>
                              </>
                              )}
                             
                              
                               
                        
                    </tbody>

                   </table>
                 
                   <center><button className="btn btn-primary " id="getlist" style={{marginBottom:'20px'}} onClick={()=>getstudentlists(id)} >Show list of Students</button></center>
                                         
    </div> 
      {/* student list...table  */}
         <div className="studentlist" id="toggled" style={{display:'none',margin:'10px auto', }} >
                <table  style={{maxWidth:'70%',marginLeft:'10px'}} className="horizontal-table" >
                   
                        <tr style={{ background:'green', color:'white',}} id='tb'>
                            <th colSpan='25'>ID</th>
                            <th colSpan='25'>Name</th>
                            <th colSpan='25' style={{textAlign:'center'}}>Students Task</th>
                            <th colSpan='25' style={{textAlign:'center'}}>Review</th>
                        </tr>
                    
                
                   {getstudentlist && getstudentlist.map((item,index,id)=>{
                    return(
                    <tr key={id}>
                        <td colSpan='25'>{index+1}</td>
                        <td colSpan='25'>{item.firstname}</td>
                   
                        <td colSpan='25'>
                            <center><button className="btn btn-primary" onClick={()=>viewtask(item.id)}>View</button>
                           
                        </center></td>
                    <Link to={`/tutorcomment/${item.id}`} style={{textAlign:'center'}} element={<Tutorcomment/>} >Review</Link>
                    </tr>)
                   })}
          </table>
            </div>
                   </section>
                  
                   
        </>
    )
}
