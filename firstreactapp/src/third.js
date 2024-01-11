// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// export default function Third() {

//     return (
//         <>
//         <section style={{padding:'2rem'}}>
//             <h3 style={{fontWeight:'bold',color:'orange'}}>About Us</h3>
//             <h3 align="center" style={{fontWeight:'bold',color:'blue'}} >Welcome To <span id="W_Name1">My website</span></h3>
           
//             <p style={{fontWeight:'bold'}}><span id="W_Name2">My website</span> is a Professional <span id="W_Type1">Educational</span>Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of<span id="W_Type2">Educational</span>, with a focus on dependability and <span id="W_Spec">tutorial</span>. We're working to turn our passion for <span id="W_Type3">Educational</span> into a booming online website. We hope you enjoy our <span id="W_Type4">Educational</span> as much as we enjoy offering them to you.</p>
//             <p style={{fontWeight:'bold'}}>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
//             <h4 align="center" style={{fontWeight:'bold',color:'maroonx x   x'}}>Thanks For Visiting Our Site</h4><br></br>
//             <p style={{fontWeight:'bold',textAlign:'center',fontSize:'20px'}}><span style={{ color: "green"}}>Have a nice day!</span></p>
            
//             <div class="video-container">
//                                         <img src="about.png" alt="tutor" style={{width:'100%',opacity:'0.3'}}/>
//                                     </div>
                                  


//                                     </section>
//         </>
//     )
// }
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Third() {

    return (
        <>
            <section style={{ padding: '2rem',background:'url(about.png)',objectFit:'cover', marginTop:'60px' }}>
                <h3 style={{ fontWeight: 'bold', color: 'maroon',textDecoration:'underline' }}>About HippoCloud Technologies</h3>
                <h3 align="center" style={{ fontWeight: 'bold', color: '#0a5275' }}>Welcome To <span id="W_Name1">HippoCloud Technologies</span></h3>

                <p style={{ fontWeight: 'bold',color:'#009933' }}><span id="W_Name2">HippoCloud Technologies</span> is a leading institute committed to providing top-notch training to thousands of students. We specialize in offering a diverse range of courses with a strong focus on quality education and hands-on tutorials. Our passion for education drives us to transform it into a thriving online platform, ensuring our users receive the best learning experience.</p>
                
                <p style={{ fontWeight: 'bold',color:'#009933' }}>At HippoCloud Technologies, we take pride in being the best institute for training and providing valuable internships to our students. Our expertise extends to software development, and we have a team of dedicated Tally consultants. We offer comprehensive courses in digital marketing, photo editing, and video editing to empower individuals with valuable skills in the ever-evolving tech landscape.</p>
                
                <h4 align="center" style={{ fontWeight: 'bold', color: 'maroon' }}>Empowering Minds, Transforming Futures</h4><br></br>
                
                <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px' }}><span style={{ color: "green" }}>Join HippoCloud Technologies for a brighter future!</span></p>

                <div class="video-container">
                   
                </div>
            </section>
        </>
    );
}

