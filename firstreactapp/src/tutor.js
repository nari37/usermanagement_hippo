// import axios from "axios"
// import { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import {  Link, useParams } from "react-router-dom";
// import './tutor.css';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); 

// export default function Tutor() {
   
//     const [courseinfo,setCourse] = useState([])
   
//     const [tutorinfo, setTutor] = useState([])
//     const useParam = useParams();
//     const { id } = useParam;
//     const { course } = useParam;
   

   
   
//     useEffect(() => {
//         axios.get(`http://localhost:5000/tutor/${id}/${course}`).then((res) => {
//             setTutor(res.data);
        
//             if(res.data[0].course === 'Full Stack'){
//                 axios.post('http://localhost:5000/fullstack').then((res)=>{
//                     setCourse(res.data);  
                    
//                 })
//             } else if(res.data[0].course === 'Testing'){
//                 axios.post('http://localhost:5000/testing').then((res)=>{
//                     setCourse(res.data);
        
                    
                    
                    
                    
//                 })
//             }

//         })
//     }, [tutorinfo, id,course])


   

//     const task = () =>{
//         let task1 = document.getElementById('taskdetails');
    
//         if(task1.style.display === 'none'){
//             task1.style.display = 'block'
//         }else{
//             task1.style.display = 'none'
//         }
//        }

    
//     return (
//         <>
//             <section>
               
//                 <div>
//                     <caption align="center" style={{ fontWeight: 'bold', fontSize: '20px', color: 'white', borderRadius: '0 10px 0 10px', background: 'grey', margin: '5px' }} >Trainer</caption>
                   
//                     <table className="table table-bordered" style={{ borderColor: 'white', background: 'rgba(0, 0, 0,0.2)' }} >
//                         <thead>
//                             <tr align="center" >
//                                 <th scope="col">ID</th>
//                                 <th scope="col">Name</th>
                               
//                                 <th scope="col">Email</th>
                               
//                                 <th scope="col">Role</th>
//                                 <th scope="col">Course</th>
//                                 <th scope="col">Start_time</th>
//                                 <th scope="col">End_time</th>
//                                 <th scope="col">Action</th>
                               


//                             </tr>
//                         </thead>
//                         <tbody align="center" style={{ color: 'black', background: 'rgba(255, 255, 255,0.2)',fontSize:'20px',fontFamily:'bahnschrift condensed' }}>

//                             {tutorinfo.map((item) =>
//                                 <>
//                                     <tr >
//                                         <th scope="row">{item.id}</th>
//                                         <td>{item.firstname}</td>
                                        
//                                         <td>{item.email}</td>
                                        
//                                         <td>{item.roletype}</td>
//                                         <td>{item.course}</td>
//                                         <td>{item.start_time}</td>
//                                         <td>{item.end_time}</td>
                                        
//                                         <td><button type="button" className="btn btn-outline-primary" onClick={task} >Task</button></td>
  
//                                     </tr>

//                                 </>
//                             )}
//                         </tbody>

//                     </table>
                
                
//                     <table id="taskdetails" className="table table-bordered" style={{borderColor:'white',background: 'rgba(0, 0, 0,0.2)',borderRadius:'20px',display:'none',width:'827px',margin:'0 0 0 120px'}} >
//                     <thead>
//                         <tr align="center" >
                            
                            
                            
//                             <th scope="col">Content</th>
                           
//                             <th scope="col">date</th>
//                             <th scope="col">Task Status</th>
//                             <th scope="col">Test</th>
//                             <th scope="col">Action</th>
                            
                            
//                         </tr>
//                     </thead>
//                     <tbody className="cour" align="center" style={{color:'black',background: 'rgba(255, 255, 255,0.2)',fontSize:'20px',fontFamily:'bahnschrift condensed' }}>
                    
//                         {courseinfo && courseinfo.map((item) =>
//                             <>
//                               <tr  >
                                    
                                   
                                    
//                                     <td >
//                                     {item.content}
//                                     </td>
                                    
                                    
                                    
//                                    <td>
//                                     {item.date}
//                                    </td>
//                                    <td>
//                                     {item.task_status}
//                                    </td>
//                                    <td>
//                                     {item.test}
//                                    </td>
//                                    <td>
//                                     <button id="upd" name="tbupdate"  style={{borderRadius:'4px'}}><Link to={`/tutor/${item.id}/${item.course}/courseupdate/${item.content}`} style={{textDecoration:'none'}}>Edit</Link></button>
//                                    </td>
//                                 </tr>

//                             </>
//                         )}
//                     </tbody>

//                    </table>
                  
                   

                    
//                 <br />
//                 </div>
                
//             </section>


//         </>
//     )
// }



import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useParams, Link} from "react-router-dom";

export default function Tutor(){
    
    const [tutorinfo,setTutor] = useState([])
    const [courseinfo,setCourse] = useState([])
    const {id} = useParams();
    const {course} = useParams();
   const [getstudentlist,Setgetstudentlist] = useState([])
     
    useEffect(() => {

        axios.get(`http://localhost:5000/tutor/${id}/${course}`).then((res) => {
            setTutor(res.data);
    
            if (res.data[0].course === 'Full Stack') {
                axios.post('http://localhost:5000/fullstack').then((res) => {
                    setCourse(res.data);
                });
            } else if (res.data[0].course === 'Testing') {
                axios.post('http://localhost:5000/testing').then((res) => {
                    setCourse(res.data);
                });
            }
        });
    }, [id, course]);

   


   

    

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
    axios.get(`http://localhost:5000/studentslists/${id}`)
    .then(res =>console.log(res.data))
       
    .catch(err =>console.log(err))
}

    


    return(
        <>
        <section>
        {/* <div id="users" style={{margin:'20px 0 0 5px'}}>
                    <button id="tutor" style={{borderRadius:'10px',backgroundColor:"rgba(37, 117, 252, 1)",fontWeight:'bold'}}><Link to={'/tutor'} style={{color:"white",textDecoration:"none"}}>Tutor</Link></button> &nbsp;
                    <button  id= "student"style={{borderRadius:'10px',backgroundColor:"rgba(37, 117, 252, 1)",color:"white",fontWeight:'bold'}}><Link  to={'/student'} style={{color:"white",textDecoration:"none"}}>Student</Link></button>
                   </div> */}
        <div>
        
        <caption align="center" style={{fontWeight:'bold' ,fontSize:'20px',color:'white',borderRadius:'0 10px 0 10px',background:'grey',margin:'5px'}} >Trainer</caption>
                <table className="table table-bordered" style={{borderColor:'white',background: 'rgba(0, 0, 0,0.2)'}} >
                    <thead>
                        <tr align="center" >
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            {/* <th scope="col">Last Name</th> */}
                            <th scope="col">Email</th>
                            {/* <th scope="col">Password</th> */}
                            <th scope="col">Role</th>
                            <th scope="col">Course</th>
                            <th scope="col">Start_time</th>
                            <th scope="col">End_time</th>
                            <th scope="col">Action</th>
                            {/* <th scope="col">Phone Number</th> */}
                            {/* <th scope="col">Assigned For</th> */}
                           
                           
                        </tr>
                    </thead>
                    <tbody align="center" style={{color:'black',background: 'rgba(255, 255, 255,0.2)',fontSize:'20px',fontFamily:'bahnschrift condensed'}}>
                       
                        {tutorinfo && tutorinfo.map((item,id) =>
                            <>
                              <tr key={id} >
                                    <th scope="row">{item.id}</th>
                                    <td>{item.firstname}</td>
                                    {/* <td>{item.lastname}</td> */}
                                    <td>{item.email}</td>
                                    {/* <td>{item.password}</td> */}
                                    <td>{item.roletype}</td>
                                    <td>{item.course}</td>
                                    <td>{item.start_time}</td>
                                    <td>{item.end_time}</td>
                                    <td>
                                        <button  name="activetask" className="btn btn-outline-primary" onClick={task}  >Task</button>
                                    </td>
                                    {/* <td>{item.phone_number}</td> */}
                                    {/* <td>{studentinfo.filter(item=> val===item.id)}</td> */}
                                    {/* <td><button type="button" className="btn btn-outline-danger" onClick={()=>del(item.id)} >Delete</button></td>  */}
                                    
                                </tr>

                            </>
                        
                        )}
                    </tbody>

                   </table>

                   <table id="taskdetails" className="table table-bordered" style={{borderColor:'white',background: 'rgba(0, 0, 0,0.2)',borderRadius:'5px',display:'none',width:'775px',margin:'0 0 0 120px'}} >
                    <thead>
                        <tr align="center" >
                            
                           
                            
                            <th scope="col">Content</th>
                           
                            <th scope="col">date</th>
                            <th scope="col">Task Status</th>
                            <th scope="col">Test</th>
                            <th scope="col">Action</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody className="cour" align="center" style={{color:'black',background: 'rgba(255, 255, 255,0.2)' }}>
                    
                        {courseinfo.map((item) =>
                            <>
                              <tr  >
                                    
                                   
                                    
                                    <td >
                                    {item.content}
                                    </td>
                                    
                                    
                                    
                                   <td>
                                    {item.date}
                                   </td>
                                   <td>
                                    {item.task_status}
                                   </td>
                                   <td>
                                    {item.test}
                                   </td>
                                   <td>
                                    <button id="upd" name="tbupdate"  style={{borderRadius:'4px'}}><Link to={`/tutor/${item.id}/${item.course}/courseupdate/${item.content}`} style={{textDecoration:'none'}}>Edit</Link></button>
                                   </td>
                                </tr>

                            </>
                        )}
                    </tbody>

                   </table>
                   <center><button className="btn btn-primary" onClick={()=>getstudentlists(id)} >Show list of Students</button></center>
                   <div>{getstudentlist}</div>

                           
    </div>
                 
                  
                   </section>
                  
                   
        </>
    )
}