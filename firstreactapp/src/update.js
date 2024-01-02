import './update.css';
import React from 'react';


import { useParams } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Update() {
    const Nav = useNavigate();
    const useParam = useParams();
    const { id } = useParam;
    const { roletype } = useParam;

    const [data, setData] =useState({
        firstname: '',
        email: '',
        password: '',
        roletype: '',
        course: '',
        content: '',
        start: '',
        end: '',
        assigned_to: '',
        total: '',
        actual: '',
        discount: '',
        paid: '',
        remaining: '',
        project: '',
        status: '',
        fee_detail: '',
      });
    const [tutorname, setName] = useState([]);
//    ......................
const [tutordata, settutorData] = useState('');
const [tutorid,setTouid] = useState('');
const [remain,setremmaning] = useState('');
     
    const handler = (e) => {

        const { name, value } = e.target;

        setData((prevState) =>
            ({ ...prevState, [name]: value }));

    }
   
    
    const discount = () => {
        let actual = document.getElementById('actual').value;
        let total = document.getElementById('total').value;
        let diff =document.getElementById('diff').value;
        let dis =document.getElementById('discount').value;
        

        diff = actual - total;

        document.getElementById('diff').value = diff; 
        
        dis =(diff/actual)*100;
        document.getElementById('discount').value = dis;

    }
     
    const balance = () => {
  const total = parseFloat(data.total) || 0;
  const paid = parseFloat(data.paid) || 0;

  if ( total < 0 || paid < 0) {
    console.error("Total and Paid amounts should be valid positive numbers.");
    return;
  }

  // Calculate remaining balance
  let remainingBalance = total - paid;

  // Ensure remaining balance is not negative
  remainingBalance = Math.max(remainingBalance, 0);

  // Update the 'remainbalance' field using React state
 document.getElementById('remainbalance').value = remainingBalance;
};

    

    
useEffect(() => {
    axios.get(`http://localhost:5000/singleuser/${id}`).then((res) => {
      const userData = res.data[0];
      setData({
        ...userData,
        roletype: userData.roletype || '',
        course: userData.course || '',
        content: userData.content || '',
        start: userData.start || '',
        end: userData.end || '',
        assigned_to: userData.assigned_to || '',
        total: userData.total || '',
        actual: userData.actual || '',
        discount: userData.discount || '',
        paid: userData.paid || '',
        remaining: userData.remaining || '',
        project: userData.project || '',
        status: userData.status || '',
        fee_detail: userData.fee_detail || '',
      });
    });
  }, [id]);

    
  

    const handlertutor = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
      
        const selectedId = e.target.options[e.target.selectedIndex].getAttribute('data-id');
        console.log('Selected ID:', selectedId);
      
        // Update the tutorid state
        setTouid({ selectedId });
      
      };
      


    const update = (id,tutorid) => {
       
        const userdetails = { firstname: data.firstname, email: data.email, password: data.password,course: data.course,content: data.content,actual:data.actual,total: data.total,discount:data.discount,paid: data.paid,remaining: data.remaining,start:data.start,end:data.end,project:data.project, roletype: data.roletype, assigned_to: data.assigned_to, status: data.status, fee_detail: data.fee_detail}
           console.log(userdetails) 
        axios.post(`http://localhost:5000/updateuser/${id}`, userdetails)
        .then((res) => {
            console.log(res.data);
            if (res !== '') {
                alert('details  updated successfully!!!!');
                console.log({ id });
                console.log({tutorid});
        axios.post(`http://localhost:5000/assign-student-tutor/${id}/${tutorid}`) 
        

               
                Nav('/stu')
                
                data.firstname = '';

                data.email = '';
                data.password = '';
                data.roletype = '';

                data.assigned_to = '';
                data.status = '';
            }

        })
        

       

    }

    

    useEffect(() => {
        axios.get(`http://localhost:5000/role/${roletype}`)
        .then((res) => {
            setName(res.data)
           console.log(res.data) 
        })
    }, [roletype])


    return (
        <section>
            <div  >


                <div  style={{ margin:'-25px 0 0 0',background:'rgba(143,211,244,0.5)',height:'120vh' }}>
                    <div className="container h-100" style={{ padding: '6%' }}>
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div  style={{ margin: "-15px 0 0 -255px", width: '1000px', height: '650px',background:'white',borderRadius:'10px' }} >
                                    <div className="card-body p-5" style={{ height: '520px' }} >
                                        <div style={{ marginTop: '-30px', borderRadius: '10px', width: 'auto' }}>
                                            <h3 className="text-uppercase text-center mb-5" style={{ color: 'black',textDecoration:'underline' }}>Update Register Info</h3>
                                        </div>

                                        <div style={{ display: 'flex', gap: '30px' }}>
                                            <div className="form-outline mb-4">

                                                <label className="form-label" for="form3Example1cg" style={{ fontWeight: 'bold',fontSize:'18px' }}>First Name</label>
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={data.firstname} name="firstname" onChange={handler} readOnly />


                                            </div>

                                           

                                            <div>
                                                <label className="form-label" htmlFor="form3Example1cg" style={{ fontWeight: 'bold',fontSize:'18px' }}>Email</label>
                                                <input name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" value={data.email} onChange={handler}  />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg" style={{ fontWeight: 'bold',fontSize:'18px' }}>Password</label>
                                                <input type="password" name="password" id="form3Example4cg" className="form-control form-control-lg" value={data.password} onChange={handler} readOnly />
                                            </div>
                                        </div><br />
                                        

                                        <div className='Assign' style={{ display: 'flex' }}>
                                            <div >
                                                <label style={{ fontWeight: 'bold',margin:'10px 0 0 0',fontSize:'18px' }} id='cours' >Course Catalog</label>&nbsp;
                                                <select name='course' onChange={handler} id='select' style={{  fontSize:'18px'}  } >
                                                    <option >Select</option>
                                                    <option>Full Stack</option>
                                                    <option>Digital_Marketing</option>
                                                    <option>Tally</option>
                                                    <option >Devops</option>
                                                    <option >Testing</option>
                                                    <option >Sales Force</option>
                                                </select>
                                            </div>
                                            <div >&nbsp;

                                                <label style={{ margin: '10px 0 0 50px ', fontWeight: 'bold' ,fontSize:'18px'}} id='subj'>Content</label>&nbsp;
                                               
                                                <select name='content' onChange={handler} id='content' style={{  fontSize:'18px'}  }  >
                                                    <option >Select</option>
                                                    
                                                    <option>Programming language,OS concept ,Linux,Cloud Computing,..</option>
                                                    <option >HTML,CSS,J.S,REACT,NODE,..</option>
                                                    <option>SEO,SMM,Social Miedia Marketing,..</option>
                                                    <option>GST,EWay_bill,Vouchers,..</option>    
                                                    <option >Java oops Concept,Selenium,Cucumber,..</option>
                                                    <option >SalesForce Admin,SalesForce Development,..</option>
                                                </select>
                                            </div>&emsp;
                                            
                                        </div><br />
                                        <div>
                                        <label style={{  fontWeight: 'bold' ,fontSize:'18px' }} >Schedule:</label>&nbsp;
                                            <label style={{ margin:'0 0 0 30px',  fontWeight: 'bold' }}>Start Date</label>&nbsp;
                                            <input name='start' type='date' onChange={handler}/>
                                            <label style={{ margin:'0 0 0 50px', fontWeight: 'bold' }}>End Date</label>&nbsp;
                                            <input name='end' type='date' onChange={handler}/>
                                            
                                                <label style={{ fontWeight: 'bold', margin: '30px 0 0 50px' }}>Assaiged to</label>&nbsp;
                                                <select name='assigned_to' value={data.id} onChange={handlertutor} style={{ borderRadius: '5px', height: '30px' }}>
                                                    <option>Please Select</option>
                                                    {tutorname.map((val) =>
                                                        <option value={val.firstname} key={val.id} data-id={val.id}>{val.firstname}</option>
                                                    )
                                                    }
                                                </select>
                                            
                                        </div><br/>
                                        
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            
                                                <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }} >Fee Structure:</label>&nbsp;
                                                <div>
                                                    <label style={{ margin: '15px 0 0 -35px ', fontWeight: 'bold' }}>Actual</label>
                                                    <input type='text' id='actual' name='actual' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} value={data.Actual} />&nbsp;
                                                </div>
                                                <div>
                                                    <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }} >Total</label>
                                                    <input type='text' id='total' name='total' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} onKeyUp={discount} value={data.total}/>&nbsp;
                                                </div>
                                                <div style={{display:'none'}}>
                                                    <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Difference</label>
                                                    <input type='text' id='diff' name='diff' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} />&nbsp;
                                                </div>
                                                <div >
                                                    <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Discount</label>&#x25;
                                                    <input type='number' id='discount' name='discount' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' ,width:'40px',alignItems:'center'}}  onChange={handler} readOnly />&nbsp;
                                                </div>
                                                <div>
                                                    <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Paid</label>
                                                    <input type='text' id='paid' name='paid' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} value={data.paid} onKeyUp={balance}  />&nbsp;
                                                </div>
                                                <div>
                                                    <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Remaining</label>
                                                    <input type='text' id='remainbalance' name='remaining' style={{ margin: '-40px 0 0 10px', borderRadius: '2%', outline: 'none'  }} size={10}   onChange={handler}   readOnly/>&nbsp;                                    </div>                    

                                        </div><br/>
                                        <div style={{ display: 'flex', gap: "50px" }}>
                                            <div >
                                                <label style={{ fontWeight: 'bold',margin:'20px 0 0 0' }}>Project/Internship</label>
                                                <input type='text' name='project' id='project'  className="form-control form-control-lg" style={{margin: '-30px 0 0 160px' }} onChange={handler}/>
                                            </div>
                                            

                                            <div>
                                                <label style={{ fontWeight: 'bold', margin: '15px 0 0 150px' }}>Status</label>&nbsp;
                                                <select name='status' value={data.status} onChange={handler} style={{ borderRadius: '5px', height: '30px' }}>
                                                    <option>Select</option>
                                                    <option>Active</option>
                                                    <option>Inactive</option>
                                                </select><br /><br />
                                            </div>

                                            

                                        </div>
                                        <div>
                                                <label style={{ fontWeight: 'bold', margin: '15px 0 0 0' }}>Fee_Detail</label>&nbsp;
                                                <select name='fee_detail' value={data.fee_detail} onChange={handler} style={{ borderRadius: '5px', height: '30px' }}>
                                                    <option>Select</option>
                                                    <option>Paid</option>
                                                    <option>Pending</option>
                                                </select><br /><br />
                                            </div>

                                        

                                        <div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={()=>update(id,tutorid.selectedId)} style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'bold',margin:'-30px 0 0 0' }}>Update</button>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};



// ..................

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './update.css';

// export default function Update ()  {
//   const Nav = useNavigate();
//   const { id, roletype } = useParams();
//   const [data, setData] = useState({
//     firstname: '',
//     email: '',
//     password: '',
//     course: '',
//     content: '',
//     start: '',
//     end: '',
//     assigned_to: '',
//     status: '',
//     total: '',
//     actual: '',
//     discount: '',
//     paid: '',
//     remaining: '',
//     project: '',
//     fee_detail: '',
//   });

//   const [tutorname, setTutorName] = useState([]);
//   const [studentId, setStudentId] = useState('');
//   const [tutoreId, setTutorId] = useState('');

//   const handler = (e) => {
//     const { name, value } = e.target;
//     setData((prevState) => ({ ...prevState, [name]: value }));
//   };

  

//   const update = () => {
//     const userdetails = {
//       firstname: data.firstname,
//       email: data.email,
//       password: data.password,
//       course: data.course,
//       content: data.content,
//       start: data.start,
//       end: data.end,
//       assigned_to: data.assigned_to,
//       status: data.status,
//       total: data.total,
//       actual: data.actual,
//       discount: data.discount,
//       paid: data.paid,
//       remaining: data.remaining,
//       project: data.project,
//       fee_detail: data.fee_detail,

//       studentId: studentId,
//       tutoreId: tutoreId,

//       roletype: data.roletype,
//     }
   
//     axios.post(`http://localhost:5000/updateuser/${id}`, userdetails)
//       .then((res) => {
//         console.log(res.data);
//         if (res !== '') {
//           alert('Details updated successfully!!!!');
//           Nav('/stu');

//           // Clear the data
//           setData({
//             firstname: '',
//             email: '',
//             password: '',
//             course: '',
//             content: '',
//             start: '',
//             end: '',
//             assigned_to: '',
//             status: '',
//             total: '',
//             actual: '',
//             discount: '',
//             paid: '',
//             remaining: '',
//             project: '',
//             fee_detail: '',
//           });

//           // Reset IDs
//           setStudentId('');
//           setTutorId('');
//           console.log(studentId)
//           console.log(tutoreId)
//         }
//       })
//       .catch((error) => {
//         console.error('Error updating user details:', error);
//         // Handle errors, display error messages, etc.
//         // You may want to set an error state and display an error message to the user
//       });
//   };

//   useEffect(() => {
//     axios.get(`http://localhost:5000/singleuser/${id}`)
//       .then((res) => {
//         setData({
//           firstname: res.data[0].firstname,
//           email: res.data[0].email,
//           password: res.data[0].password,
//           course: res.data[0].course,
//           content: res.data[0].content,
//           start: res.data[0].start,
//           end: res.data[0].end,
//           assigned_to: res.data[0].assigned_to,
//           status: res.data[0].status,
//           total: res.data[0].total,
//           actual: res.data[0].actual,
//           discount: res.data[0].discount,
//           paid: res.data[0].paid,
//           remaining: res.data[0].remaining,
//           project: res.data[0].project,
//           fee_detail: res.data[0].fee_detail,
//         });
//       })
//       .catch((error) => {
//         console.error('Error fetching user details:', error);
//       });
//   }, [id]);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/role/${roletype}`)
//       .then((res) => {
//         setTutorName(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching tutor details:', error);
//       });
//   }, [roletype]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/studen')
//       .then((res) => setStudentId(res.data[0].id))
//       .catch((error) => console.error('Error fetching student ID:', error));

//     axios.get('http://localhost:5000/tuto')
//       .then((res) => setTutorId(res.data[0].id))
//       .catch((error) => console.error('Error fetching tutor ID:', error));
//   }, []);


//   const discount = () => {
//     let actual = document.getElementById('actual').value;
//     let total = document.getElementById('total').value;
//     let diff =document.getElementById('diff').value;
//     let dis =document.getElementById('discount').value;


//     diff = actual - total;

//    document.getElementById('diff').value = diff;
   
//    dis =(diff/actual)*100;

//    document.getElementById('discount').value = dis;

// }



//   return (
//             <section>
//                  <div  >
    
    
//                  <div  style={{ margin:'-25px 0 0 0',background:'rgba(143,211,244,0.5)',height:'120vh' }}>
//                      <div className="container h-100" style={{ padding: '6%' }}>
//                          <div className="row d-flex justify-content-center align-items-center h-100">
//                              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//                                  <div  style={{ margin: "-15px 0 0 -255px", width: '1000px', height: '650px',background:'white',borderRadius:'10px' }} >
//                                      <div className="card-body p-5" style={{ height: '520px' }} >
//                                          <div style={{ marginTop: '-30px', borderRadius: '10px', width: 'auto' }}>
//                                              <h3 className="text-uppercase text-center mb-5" style={{ color: 'black',textDecoration:'underline' }}>Update Register Info</h3>
//                                          </div>
    
//                                              <div style={{ display: 'flex', gap: '30px' }}>
//                                                  <div className="form-outline mb-4">
    
//                                                      <label className="form-label" htmlFor="form3Example1cg" style={{ fontWeight: 'bold',fontSize:'18px' }}>First Name</label>
//                                                      <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={data.firstname} name="firstname" onChange={handler} readOnly />
    
    
//                                                  </div>
    
                                               
    
//                                                 <div>
//                                                      <label className="form-label" htmlFor="form3Example1cg" style={{ fontWeight: 'bold',fontSize:'18px' }}>Email</label>
//                                                      <input name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" value={data.email} onChange={handler} readOnly />
//                                                  </div>
    
//                                                 <div className="form-outline mb-4">
//                                                     <label className="form-label" htmlFor="form3Example4cg" style={{ fontWeight: 'bold',fontSize:'18px' }}>Password</label>
//                                                     <input type="password" name="password" id="form3Example4cg" className="form-control form-control-lg" value={data.password} onChange={handler} readOnly />
//                                                 </div>
//                                             </div><br />
                                            
    
//                                              <div className='Assign' style={{ display: 'flex' }}>
//                                                  <div >
//                                                      <label style={{ fontWeight: 'bold',margin:'10px 0 0 0',fontSize:'18px' }} id='cours' >Course Catalog</label>&nbsp;
//                                                      <select name='course' onChange={handler} id='select' style={{  fontSize:'18px'}  } >
//                                                          <option >Select</option>
//                                                          <option>Full Stack</option>
//                                                          <option >Devops</option>
//                                                          <option >Testing</option>
//                                                          <option >Sales Force</option>
//                                                      </select>
//                                                  </div>
//                                                  <div >&nbsp;
//                                                     <label style={{ margin: '10px 0 0 50px ', fontWeight: 'bold' ,fontSize:'18px'}} id='subj'>Content</label>&nbsp;
                                                   
//                                                      <select name='content' onChange={handler} id='content' style={{  fontSize:'18px'}  }  >
//                                                          <option >Select</option>
                                                        
//                                                      <option>Programming language,OS concept ,Linux,Cloud Computing</option>
//                                                      <option >HTML,CSS,J.S,REACT,NODE</option>
//                                                      <option >Java oops Concept,Selenium,Cucumber</option>
//                                                      <option >SalesForce Admin,SalesForce Development</option>
//                                                  </select>
//                                              </div>&emsp;
                                                
//                                             </div><br />
//                                             <div>
//                                             <label style={{  fontWeight: 'bold' ,fontSize:'18px' }} >Schedule:</label>&nbsp;
//                                                 <label style={{ margin:'0 0 0 30px',  fontWeight: 'bold' }}>Start Date</label>&nbsp;
//                                                 <input name='start' type='date' onChange={handler}/>
//                                                 <label style={{ margin:'0 0 0 50px', fontWeight: 'bold' }}>End Date</label>&nbsp;
//                                                 <input name='end' type='date' onChange={handler}/>
                                                
//                                                      <label style={{ fontWeight: 'bold', margin: '30px 0 0 50px' }}>Assaiged to</label>&nbsp;
//                                                      <select name='assigned_to' value={data.assigned_to} onChange={handler} style={{ borderRadius: '5px', height: '30px' }}>
//                                                          <option>Please Select</option>
//                                                          {tutorname.map((val) =>
//                                                              <option value={val.firstname}>{val.firstname}</option>
//                                                          )
//                                                          }
//                                                      </select>
                                                
//                                              </div><br/>
                                            
//                                              <div style={{ display: 'flex', gap: '20px' }}>
                                                
//                                                      <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }} >Fee Structure:</label>&nbsp;
//                                                      <div>
//                                                          <label style={{ margin: '15px 0 0 -35px ', fontWeight: 'bold' }}>Actual</label>
//                                                          <input type='text' id='actual' name='actual' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} />&nbsp;
//                                                      </div>
//                                                      <div>
//                                                          <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Total</label>
//                                                          <input type='text' id='total' name='total' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} onKeyUp={discount}/>&nbsp;
//                                                      </div>
//                                                      <div style={{display:'none'}}>
//                                                          <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Difference</label>
//                                                          <input type='text' id='diff' name='diff' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} />&nbsp;
//                                                      </div>
//                                                      <div >
//                                                          <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Discount</label>&#x25;
//                                                          <input type='number' id='discount' name='discount' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' ,width:'40px',alignItems:'center'}}  onChange={handler} readOnly />&nbsp;
//                                                      </div>
//                                                      <div>
//                                                          <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Paid</label>
//                                                          <input type='text' id='paid' name='paid' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} />&nbsp;
//                                                      </div>
//                                                      <div>
//                                                          <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Remaining</label>
//                                                          <input type='text' id='remaining' name='remaining' style={{ margin: '-40px 0 0 10px', borderRadius: '2%', outline: 'none'  }} size={10}   onChange={handler}/>&nbsp;
//                                                      </div>
                                              
                                                
    
    
    
    
//                                              </div><br/>
//                                              <div style={{ display: 'flex', gap: "50px" }}>
//                                                  <div >
//                                                      <label style={{ fontWeight: 'bold',margin:'20px 0 0 0' }}>Project/Internship</label>
//                                                      <input type='text' name='project' id='project'  className="form-control form-control-lg" style={{margin: '-30px 0 0 160px' }} onChange={handler}/>
//                                                  </div>
                                                
    
//                                                  <div>
//                                                      <label style={{ fontWeight: 'bold', margin: '15px 0 0 150px' }}>Status</label>&nbsp;
//                                                      <select name='status' value={data.status} onChange={handler} style={{ borderRadius: '5px', height: '30px' }}>
//                                                          <option>Select</option>
//                                                          <option>Active</option>
//                                                          <option>Inactive</option>
//                                                      </select><br /><br />
//                                                  </div>
    
                                                
    
//                                              </div>
//                                              <div>
//                                                      <label style={{ fontWeight: 'bold', margin: '15px 0 0 0' }}>Fee_Detail</label>&nbsp;
//                                                      <select name='fee_detail' value={data.fee_detail} onChange={handler} style={{ borderRadius: '5px', height: '30px' }}>
//                                                          <option>Select</option>
//                                                          <option>Paid</option>
//                                                          <option>Pending</option>
//                                                      </select><br /><br />
//                                                  </div>
                                            
    
//                                             <div>
//                                                 <div className="d-flex justify-content-center">
//                                                     <button type="button"
//                                                         className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={update} style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'bold',margin:'-30px 0 0 0' }}>Update</button>
//                                                 </div>
    
    
//                                             </div>
    
//                                          </div>
//                                      </div>
//                                  </div>
//                              </div>
//                          </div>
//                      </div>
    
//                 </div>
//             </section>
//         );
//     };