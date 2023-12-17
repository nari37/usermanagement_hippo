
// import React from 'react';
// import './register.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate ,Link } from 'react-router-dom';

// export default function Register() {
//   const Nav = useNavigate();
//   const [data, setData] = useState({firstname: '',  email: '', password: '', roletype: '' });
//   const [val, setVal] = useState(0);

//   const handler = (e) => {
//     const { name, value } = e.target;

//     setData((prevState) =>
//       ({ ...prevState, [name]: value }));

//   }


//   const register = () => {
//     const userdetails = { firstname: data.firstname,  email: data.email, password: data.password, roletype: data.roletype, }
   

//     if(data.roletype === "Tutor"){
//       axios.post('http://localhost:5000/tut', userdetails).then((res) => {
//       console.log(res.data);
//       if (res !== '') {
//         alert('registration successfully completed');
//         Nav('/register')
//         setVal(val + 1)
//         data.firstname = '';
//         data.email = '';
//         data.password = '';
//         data.roletype = '';
        
//       }

//     })
//     }else if(data.roletype === "Student"){
//       axios.post('http://localhost:5000/stud', userdetails).then((res) => {
//       console.log(res.data);
//       if (res !== '') {
//         alert('registration successfully completed');
//         Nav('/register')
//         setVal(val + 1)
//         data.firstname = '';
//         data.email = '';
//         data.password = '';
//         data.roletype = '';
        
//       }

//     })
//     }else{
//       alert("Select Role")
//     }
    



//   }
//   return (
//     <section>
//     <div key={val} >
      
//         <div style={{background:'rgba(143,211,244,0.5)',height:'120vh'}}>
//           <div className="container " style={{ padding: '8%' }}>
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//                 <div  style={{margin:"-80px 0 0 0",borderRadius:"5px",background:'white'}} >
//                   <div  style={{ height: '550px',padding:'10%'}} >
//                     <div style={{ background: 'grey', marginTop: '-30px', borderRadius: '10px', width: '100%' }}>
//                       <h2 className="text-uppercase text-center mb-5" style={{ color: 'white' }}>Registration Form</h2>
//                     </div>
//                     <form style={{ height: '600px' }}>

//                       <div className="form-outline mb-4">

//                         <label className="form-label" htmlFor="form3Example1cg" style={{fontWeight:'bold'}}>Name</label>
//                         <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="firstname" onChange={handler} />


//                       </div>

                     

//                       <div>
//                         <label className="form-label" htmlFor="form3Example1cg" style={{fontWeight:'bold'}}>Email</label>
//                         <input name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={handler} />
//                       </div>

//                       <div className="form-outline mb-4">
//                         <label className="form-label" htmlFor="form3Example4cg" style={{fontWeight:'bold'}}>Password</label>
//                         <input type="password" name="password" id="form3Example4cg" className="form-control form-control-lg" onChange={handler} />
//                       </div>

                     
//                       <div style={{margin:"-15px 0 0 0"}}>
//                         <span><label style={{fontWeight:'bold'}}>ROLE:</label><br /></span>
//                         <span style={{fontWeight:'bold'}}><input type='radio' name='roletype' onChange={handler} value={'Tutor'} />Tutor</span>
//                         <span style={{fontWeight:'bold'}}><input type='radio' name='roletype' onChange={handler} value={'Student'} />Student</span>
//                       </div><br />

//                       <div className="d-flex justify-content-center" style={{margin:"-15px 0 0 0"}}>
//                         <button type="button"
//                           className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={register} style={{fontFamily:"'Times New Roman', Times, serif",fontWeight:'bold'}}>Register</button><br/>
                        
//                       </div><br/>
//                       <h6 className="text-center m-0" >
//                           Already have an account?{' '}
//                           <Link to={'/login'} style={{fontWeight:'bold'}}>
//                             Log In
//                             </Link>
//                         </h6>

//                     </form>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
      
//     </div>
//     </section>
//   );
// };

// ... (other imports)

import React from 'react';
import './register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [data, setData] = useState({ firstname: '', email: '', password: '', roletype: '' });

  const handler = (e) => {
      const { name, value } = e.target;
      setData((prevState) => ({ ...prevState, [name]: value }));
  };


  const Nav = useNavigate();
  const register = () => {
      // Check if any required field is empty
    if (!data.firstname || !data.email || !data.password || !data.roletype) {
      alert('Please fill in all the fields.');
      return;
    }

    // Use the new check-email endpoint to validate email existence
    axios.post('http://localhost:5000/check-email', { email: data.email })
      .then(response => {
        const { exists } = response.data;
        if (exists) {
          alert('Email already exists!');
        } else {
          // Send registration request based on the role
          const registrationEndpoint = data.roletype === 'Tutor' ? 'http://localhost:5000/tut' : 'http://localhost:5000/stud';

          axios.post(registrationEndpoint, data)
            .then(res => {
              alert('Registration successful....');
              console.log(res);
              Nav('/login');
            })
            .catch(err => {
              console.error(err);
              alert('Registration failed. Please try again.');
            });
        }
      })
      .catch(error => {
        console.error('Error checking email existence:', error);
        alert('An error occurred. Please try again.');
      });
          
  }

  return (
    <section>
      <div  className="registration-form registration-container p-2">
        <div style={{ background: 'rgba(143,211,244,0.5)' }}>
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="registration-form-container ">
                  <div className="header-background">
                    <h2 className="text-uppercase text-center mt-20">Registration Form</h2>
                  </div>
                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example1cg">
                        Name:
                      </label>
                      <input type="text" id="form3Example1cg" placeholder="Name..." className="form-control form-control-lg" name="firstname" onChange={handler} />
                    </div>

                    <div>
                      <label className="form-label" htmlFor="form3Example1cg">
                        Email:
                      </label>
                      <input name="email" type="email" placeholder="Email..." id="form3Example3cg" className="form-control form-control-lg" onChange={handler} />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password:
                      </label>
                      <input type="password" name="password" placeholder="Password..." id="form3Example4cg" className="form-control form-control-lg" onChange={handler}/>
                    </div>

                    <div className="role-radio">
                      <span>
                        <label>ROLE:</label>
                        <br />
                      </span>
                      <span>
                        <input type="radio" name="roletype"onChange={handler} value="Tutor" />Tutor
                      </span>
                      <span>
                        <input type="radio" name="roletype" onChange={handler} value="Student" />Student
                      </span>
                    </div>
                    <br />

                    <div className="d-flex-justify">
                      <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body btn-register" onClick={register}>
                        Register
                      </button>
                      <br />
                    </div>
                    <br />
                    <h6 className="text-center m-0">
                      Already have an account?{' '}
                      <Link to={'/login'} className="link-text">
                        Log In
                      </Link>
                    </h6>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
