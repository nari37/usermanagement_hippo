
import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useParams } from "react-router-dom";

export default function Student() {
    const useParam = useParams();
    const { id } = useParam;
    const [data, setData] = useState({ firstname: '', email: '', feedback: '' });
    const [val, setVal] = useState(0);
    const [tutorinfo, setTutor] = useState([])
    const [studentinfo, setStudent] = useState([]);
   

    useEffect(() => {
        axios.get(`http://localhost:5000/student/${id}`).then((res) => {
            setStudent(res.data)
        })
    }, [studentinfo, id])

    useEffect(() => {
        axios.get('http://localhost:5000/tuto').then((res) => {

            setTutor(res.data)
        })
    }, [tutorinfo])

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

    const Feedback = () => {
        let response = document.getElementById('feed');

        if (response.style.display === "none") {
            response.style.display = "block";
        } else {
            response.style.display = "none";
        }

    }

    return (
        <>
            <section>
               
                <div style={{margin:'40px 0 0 0'}}>
                    <caption align="center" style={{ fontWeight: 'bold', fontSize: '20px', color: 'white', borderRadius: '0 10px 0 10px', background: 'grey', margin: '10px 0 0 10px ' }} >Student</caption>
                    <button className="btn btn-outline-dark  btn-lg px-2" type="submit" onClick={Feedback}style={{float:'right'}}>Feed Back</button><br /><br />
                    <table className="table table-bordered" style={{ borderColor: 'white', background: 'rgba(0, 0, 0,0.2)', width: '500px', margin: '-85px 0 0 150px', borderRadius: '20px 20px 20px 20px' }} >

                        

                        <tbody style={{fontSize:'20px',fontFamily:'bahnschrift condensed'}} >
                            {studentinfo.map(item =>
                                <>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <td align="center">{item.id}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <td align="center">{item.firstname}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Email</th>
                                        <td align="center">{item.email}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Course_Type</th>
                                        <td align="center">{item.course}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Content</th>
                                        <td >{item.content}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">StartingDate</th>
                                        <td align="center">{item.start}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">EndingDate</th>
                                        <td align="center">{item.end}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Total_Fee</th>
                                        <td align="center">{item.total}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Paid_Fee</th>
                                        <td align="center">{item.paid}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Remaining_Fee</th>
                                        <td align="center">{item.remaining}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Project/Internship</th>
                                        <td align="center">{item.project}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Role</th>
                                        <td align="center">{item.roletype}</td>
                                    </tr>
                                    
                                    <tr>
                                        <th scope="col">Assigned To</th>
                                        <td align="center" value={tutorinfo.firstname}>{item.assigned_to}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Status</th>
                                        <td align="center">{item.status}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Fee</th>
                                        <td align="center"><button type="button" className="btn btn-outline-warning"><Link to={`/payment/${id}`} style={{ textDecoration: 'none' }}>Pay</Link></button>&nbsp;
                                           
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table><br />
                    <div id="feed" style={{ display: 'none' }}>
                        <form className="table table-bordered" key={val} style={{ width: '400px', height: '300px', margin: '-500px 0 0 700px', borderColor: 'white', background: 'rgba(0, 0, 255,0.2)', borderRadius: '10px 10px 10px 10px',fontSize:'18px',fontFamily:'bahnschrift condensed' }}>

                            
                            <div style={{margin:'-10px 0 0 20px'}}><br/>
                            <label>Name</label><br/>
                            <input type="text" name="name" onChange={handler} value={data.firstname}   style={{borderRadius:'5px'}} readOnly/><br/>

                            <label>Email</label><br/>
                            <input type="text" name="email" onChange={handler} value={data.email}  style={{borderRadius:'5px'}} readOnly/><br/>

                            <label>Feedback</label><br/>
                            <textarea rows="3" cols="40" name="feedback" onChange={handler} style={{borderRadius:'5px'}}></textarea><br/>
                            <button className="btn btn-outline-dark  btn-lg " style={{height:'35px',padding:'2px 5px 8px 10px',margin:'0 0 0 300px' ,boxShadow:'1px 2px 3px 3px'}} onClick={feeddetails}>Submit</button>
                            </div>

                        </form>

                    </div>

                </div>

            </section>

        </>
    )
}




// // .........
// import React from 'react';
// import './Student.css';

// export default function Student() {
    
//   return (
//     <div className="student-table">
//       <table className="vertical-table">
        
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Course Type</th>
//             <th>Content</th>
//             <th>Starting Date</th>
//             <th>Ending Date</th>
//             <th>Total Fee</th>
//             <th>Pending Fee</th>
//             <th>Remaining Fee</th>
//             <th>Project/Internship</th>
//             <th>Role</th>
//             <th>Assigned To</th>
//             <th>Status</th>
//             <th>Fee Payment</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>John Doe</td>
//             <td>john.doe@example.com</td>
//             <td>Web Development</td>
//             <td>HTML, CSS, JavaScript</td>
//             <td>2023-01-01</td>
//             <td>2023-06-30</td>
//             <td>$1000</td>
//             <td>$500</td>
//             <td>$500</td>
//             <td>Portfolio Project</td>
//             <td>Developer</td>
//             <td>AssignedName</td>
//             <td>In Progress</td>
//             <td><a href="#">Pay Now</a></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
