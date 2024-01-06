// import './first.css'
// import axios from 'axios';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { useState } from 'react';

// export default function First(props) {

     
    
//     const [data,setData] =useState({name:'',email:'',comment:''});
//     const [val,setVal] = useState(0);

    
    

   

    
//     const handler = (e) => {
//         const {name,value} = e.target;

//         setData((prevState)=>
//         ({...prevState,[name]:value}))
//     }

//     const contactdetails= ()=>{
//         const contactinfo={name:data.name, email:data.email,comment:data.comment}
//         axios.post('http://localhost:5000/contactreg',contactinfo).then((res)=>
//         {
//             console.log(res.data);
//             if(res !== '')
//             {
//             alert('Details Submitted sucessfully');
//             setVal(val + 1);
//             data.name='';
//             data.email='';
//             data.comment='';
//             }


//         })
//     }

//     return (
//         <>
        

//             <section>
//             &nbsp;
//             <a href='https://www.facebook.com/hippocloud/' target='blank' style={{fontSize:'22px'}}><i class="bi bi-facebook"></i></a>&emsp;
//             <a href='https://www.instagram.com/hippocloud.vizag/' target='blank' style={{fontSize:'22px',color:'rgb(228, 64, 95) '}}><i class="bi bi-instagram"></i></a>&emsp;
//             <a href='https://www.twitter.com/hippocloud1/' target='blank' style={{fontSize:'22px'}}><i class="bi bi-twitter"></i></a>&nbsp;
          
//             <form action="#" className="form" key={val}>
//             <div className="contact-details" >
//                 <div className="contact-left">

//                     <p><i class="bi bi-envelope-fill"></i>
//                         <a href="contact.js">Contact@gmail.com</a></p>

//                     <p><i class="bi bi-telephone-fill"></i>
//                         <span>Ph:888888888</span></p>

//                     <p><i class="bi bi-geo-alt-fill"></i>
//                         <span>Address:VISAKHAPATNAM</span></p>
//                 </div>
//                 <div className="details">
//                     <label for="name" >Name:</label>
//                     <div className="field">
//                         <input type="text" name="name" required onChange={handler} />
//                     </div>

//                     <label for="email">Email:</label>
//                     <div className="field">
//                         <input type="email" name="email" required onChange={handler} />
//                     </div><br/>

//                     <label for="comment">Comment:</label>
//                         <div className="field">
//                             <textarea rows="5" colspan="20" name="comment" onChange={handler} required></textarea>
//                         </div><br/>

//                     <div >
//                         <button className="btnn" onClick={contactdetails} >submit</button>
//                     </div>
//                 </div>
//                 <div>
//                     <img id="cont" src="contact.jpg" alt="contact" height={'400px'} />
//                 </div>
//             </div>
            
//             </form>

//             </section>
            

//         </>
//     )



// } 



import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import './first.css';

export default function First(props) {

     
    //const [data1, setData1] = useState(localStorage.getItem('name'));
    const [data,setData] =useState({name:'',email:'',comment:'',subject:'',phonenumber:''});
    const [val,setVal] = useState(0);

    console.log(data)
    

   

    //localStorage.clear();
    const handler = (e) => {
        const {name,value} = e.target;

        setData((prevState)=>
        ({...prevState,[name]:value}))
    }

    const contactdetails= (e)=>{
        e.preventDefault();
        // const contactinfo={name:data.name, email:data.email,subject:data.subject,phonenumber:data.phonenumber,comment:data.comment,}
        axios.post('http://localhost:5000/contactreg',data).then((res)=>
        {
            console.log(res.data);
            if(res !== '')
            {
            alert('Details Submitted sucessfully');
            setVal(val + 1);
            data.name='';
            data.email='';
            data.comment='';
            data.subject = '';
            data.phonenumber = '';
            }


        })
    }

    // const addVal = () => {

    //     const dd = [...disp, data1];
    //     setDisp(dd);
    //     setData1('');


    // }
    

    

    // const deleteVal = (i) => {

    //     alert(i)
    //     const ss = [...disp];

    //     ss.splice(i, 1);

    //     setDisp(ss);


    // }
    

    return (
        <>
        
            {/* {data1} */}

            {/* {props.example}
            <h3>ADDING and DELETE Values in Array</h3>
            <input type="text" name="ggg" value={data1} onChange={handler} />

            <input type="button" value="add" onClick={addVal} />

            {disp.map((item, index) =>
                <h1 onClick={() => deleteVal(index)}>{item}</h1>
            )} */}
            <section style={{background:'#e1f7f6'}}>
            &nbsp;
        
            <form action="#" className="form" key={val}>
            <div className="contact-details" >
                {/* <div className="contact-left">

                    <p><i class="bi bi-envelope-fill"></i>
                        <a href="contact.js">Contact@gmail.com</a></p>

                    <p><i class="bi bi-telephone-fill"></i>
                        <span>Ph:888888888</span></p>

                    <p><i class="bi bi-geo-alt-fill"></i>
                        <span>Address:VISAKHAPATNAM</span></p>
                </div> */}
                {/* <div className="details">
                    <label for="name" >Name:</label>
                    <div className="field">
                        <input type="text" name="name" required onChange={handler} />
                    </div>

                    <label for="email">Email:</label>
                    <div className="field">
                        <input type="email" name="email" required onChange={handler} />
                    </div><br/>

                    <label for="comment">Comment:</label>
                        <div className="field">
                            <textarea rows="5" cols="25" name="comment" onChange={handler} required></textarea>
                        </div><br/>

                    <div >
                        <button className="btnn" onClick={contactdetails} >submit</button>
                    </div>
                </div> */}
                {/* <div>
                    <img id="cont" src="contact.jpg" alt="contact" height={'350px'} style={{margin:" 0 0 0 40px",position:'fixed'}} />
    
    </div> */}
    
<div id="conta">
<div id="demo1" style={{margin:"50px 0 0 0px"}}> 

<b >Address</b><br/>

<span>9-16-23/1/1,Block-1,2nd&nbsp;Floor,</span>
<p>CBM Compound,Visakhapatnam-530003 <i class="bi bi-geo-alt-fill" style={{color:'red',fontSize:'25px'}}></i></p> 

<hr/>

<b >Email</b><br/>
<span>info@hippoclouds.com<i class="bi bi-envelope-at" style={{color:'green',fontSize:'25px',marginLeft:'130px'}}></i></span>
<hr/>

<b >Phone</b><br/>
<span>+91 9876345687<i class="bi bi-telephone-fill" style={{color:'',fontSize:'25px',marginLeft:'180px'}}></i></span>
<hr/>

<b >Find Us On </b><br/>
<a href='https://www.facebook.com/hippocloud/' target='blank' style={{fontSize:'22px'}}><i class="bi bi-facebook"></i></a>&emsp;
            <a href='https://www.instagram.com/hippocloud.vizag/' target='blank' style={{fontSize:'22px',color:'rgb(228, 64, 95) '}}><i class="bi bi-instagram"></i></a>&emsp;
            <a href='https://www.twitter.com/hippocloud1/' target='blank' style={{fontSize:'22px'}}><i class="bi bi-twitter"></i></a>&nbsp;
          
</div>


<div  className='myin'>
<h3 style={{margin:'40px 0 0 0px',fontSize:'40px'}}>Contact With Us</h3>
<div style={{display:"flex"}}>
<input type="text" placeholder="Name*" id="name" name="name" required onChange={handler}/>&emsp;
<input type="email" placeholder="Email*" id="email"  name="email" required onChange={handler}/><br/><br/>
</div><br/>
<div  style={{display:"flex"}}>
<input type="text" placeholder="Subject*" id="subject" name='subject'  onChange={handler}/>&emsp;
<input type="number" placeholder="Phone*" id="phone" name='phonenumber' onChange={handler}/><br/><br/>
</div><br/>
<textarea rows="5" cols="54" placeholder="Message" name="comment" onChange={handler}></textarea>
<div >
                        <button className="btnn" onClick={contactdetails} style={{width:'120px', background:'#09183b',color:'white',padding:'5px',fontWeight:'bold'}} >SUBMIT</button>
                    </div>
</div>

</div>

<br/><br/>


            </div>
           
            </form>
           
            </section>
            

        </>
    )



}