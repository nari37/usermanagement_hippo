const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors= require('cors');
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'register'
    })

connection.connect((err) => {
    if (!err) {
        console.log('database connected successfully')
    }
    else {
        console.log('connection failed pls check');
        console.log(err)
    }
}
)



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


//   Registration Page post api

// app.post('/registration', (req, res) => {

//     const values =[req.body.email,req.body.firstname,req.body.password,req.body.roletype];
//     const sql = "INSERT INTO  student(`firstname`,`email`,`password`,`roletype`) values (?)"

//     connection.query(sql,[values], (err, row, fields) => {

//         if (!err) {
//             res.send(row)
//         }
//         else {
//             res.send(err)
//         }


//     })

// })
// ............
// Add a new API endpoint for checking email existence

app.post('/check-email', (req, res) => {
    const { email } = req.body;

    // Initialize a variable to store the role where the email is found
    let roleFound = null;

    // Check if the email exists in the tutor table
    connection.query('SELECT * FROM tutor WHERE email = ?', [email], (err, tutorRows) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (tutorRows.length > 0) {
                roleFound = 'Tutor';
            }

            // Check if the email exists in the student table
            connection.query('SELECT * FROM student WHERE email = ?', [email], (err, studentRows) => {
                if (err) {
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    if (studentRows.length > 0) {
                        roleFound = 'Student';
                    }

                    // If the email exists in either table, respond with exists: true and the role found
                    const exists = tutorRows.length > 0 || studentRows.length > 0;
                    res.json({ exists, roleFound });
                }
            });
        }
    });
});


// inserting data into tutor table
app.post('/tut', (req, res) => {

    console.log(req.body);

    connection.query('insert into tutor(`firstname`,`email`,`password`,`roletype`) values("' + req.body.firstname + '","' + req.body.email + '","' + req.body.password + '","' + req.body.roletype + '") ', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

// inserting data into student table
app.post('/stud', (req, res) => {

    console.log(req.body);

    connection.query('insert into student(`firstname`,`email`,`password`,`roletype`) values("' + req.body.firstname + '","' + req.body.email + '","' + req.body.password + '","' + req.body.roletype + '")', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})




// Login post api
app.post('/login', (req, res) => {

    console.log(req.body);

    connection.query('select * from user where email="' + req.body.email + '" and password="' + req.body.password + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
            alert('login faild')
        }


    })



})

// Tutor Login post api    
app.post('/tutorlogin', (req, res) => {

    console.log(req.body);

    connection.query('select * from tutor where email="' + req.body.email + '" and password="' + req.body.password + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })



})

// Student Login post api        
app.post('/studentlogin', (req, res) => {

    console.log(req.body);

    connection.query('select * from student where email="' + req.body.email + '" and password="' + req.body.password + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })



})

// Update post api

app.post('/updateuser/:id', (req, res) => {

    console.log(req.body);

    connection.query('update  `student` set firstname="' + req.body.firstname + '",email="' + req.body.email + '",password="' + req.body.password + '",course="' + req.body.course + '",content="' + req.body.content + '",start="' + req.body.start + '",end="' + req.body.end + '",project="' + req.body.project + '",actual="' + req.body.actual + '",total="' + req.body.total + '",discount="' + req.body.discount + '",paid="' + req.body.paid + '",remaining="' + req.body.remaining + '", roletype="' + req.body.roletype + '", assigned_to="' + req.body.assigned_to + '",status="' + req.body.status + '",fee_detail="' + req.body.fee_detail + '",paymode="' + req.body.paymode + '" where id="' + req.params.id + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/updateuserpay/:id', (req, res) => {

    console.log(req.body);

    connection.query('update  `student` set paymode="' + req.body.paymode + '" where id="' + req.params.id + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/tutorupdateuser/:id', (req, res) => {

    console.log(req.body);

    connection.query('update  `tutor` set firstname="' + req.body.firstname + '",email="' + req.body.email + '",password="' + req.body.password + '",course="' + req.body.course + '",start_time="' + req.body.start_time + '",end_time="' + req.body.end_time + '", roletype="' + req.body.roletype + '", assigned_to="' + req.body.assigned_to + '",status="' + req.body.status + '" where id="' + req.params.id + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/fullstackupdate/:content', (req, res) => {

    console.log(req.body);

    connection.query('update  `courses` set course="' + req.body.course + '",content="' + req.body.content + '",date="' + req.body.date + '",task_status="' + req.body.task_status + '" , test="' + req.body.test + '" where content="' + req.params.content + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})
app.post('/testingupdate/:content', (req, res) => {

    console.log(req.body);

    connection.query('update  `testing` set course="' + req.body.course + '",content="' + req.body.content + '",date="' + req.body.date + '",task_status="' + req.body.task_status + '" , test="' + req.body.test + '" where content="' + req.params.content + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

// user data get api

app.get('/userinfo', (req, res) => {
    connection.query('select * from  user', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})

// Tutor data get api
app.get('/tutor', (req, res) => {

    connection.query('select * from  `tutor` ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})

app.get('/tuto', (req, res) => {

    connection.query('select * from  `tutor` ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})


app.get('/tutor/:id/:course', (req, res) => {
    const sql = "SELECT * FROM `tutor` WHERE id = ?";
    const id =  req.params.id;
    connection.query(sql,[id],(err,results)=>{
        if (err) {
            console.error("Error executing SQL query:", err);
            res.status(500).json({ Message: 'Internal Server Error' });
        } else {
            console.log("SQL query executed successfully:", results);
            res.send(results);
        }
    })

    // connection.query('select * from  `tutor` where id = "' + req.params.id + '" ', (err, rows, fields) => {

    //     if (!err) {
    //         res.send(rows)
    //     }
    //     else {
    //         res.send(err)
    //     }


    // })

})

app.post('/fullstack', (req, res) => {

    connection.query('select * from  `courses`  ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/testing', (req, res) => {

    connection.query('select * from  `testing`  ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})




// to get student details in dropdown select options.
app.get('/role/:id', (req, res) => {

    connection.query('select * from  tutor ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})


// Student data get api
app.get('/student/:id', (req, res) => {

    connection.query('select * from  `student` where id ="' + req.params.id + '"', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})

app.get('/studen', (req, res) => {

    connection.query('select * from  `student`', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})



// api to get tutor id into student table for assigned students.
app.get('/tutorname/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('select * from  tutor where id = "' + req.params.id + '" ', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})


// app.get('/student/:id',(req,res)=>{ 
//     console.log(req.params.id)
//     connection.query('select * from  student ',(err,row,fields)=>{

//     if(!err)

//     {
//         res.send(row)
//     }
//     else{
//         res.send(err)
//     }


//     })

//     })      

// experiment 
app.get('/assigned/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('select `firstname` from tutor where tutor.id = student.assigned_to in student', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})


// getting data of single user to update page using id 

app.get('/singleuser/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('select * from  `student` where id="' + req.params.id + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.get('/fullstack/:content', (req, res) => {
    console.log(req.params.content)
    connection.query('select * from  `courses` where course="Full Stack" and content="' + req.params.content + '" ', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.get('/testing/:content', (req, res) => {
    console.log(req.params.content)
    connection.query('select * from  `testing` where course="Testing" and content="' + req.params.content + '" ', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})


app.get('/tutorsingleuser/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('select * from  `tutor` where id="' + req.params.id + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

server.listen(5000, () => {

    console.log('server running innnnnnn in port 5000 ');


})

// Contact page post api

app.post('/contactreg', (req, res) => {

    console.log(req.body);

    connection.query('insert into contact(name,email,comment) values("' + req.body.name + '","' + req.body.email + '","' + req.body.comment + '")', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/feedbackinfo', (req, res) => {

    console.log(req.body);

    connection.query('insert into feedback(firstname,email,feedback) values("' + req.body.firstname + '","' + req.body.email + '","' + req.body.feedback + '")', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

// Contact data get api
app.get('/contactinfo', (req, res) => {
    connection.query('select * from  contact', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})

app.get('/feedinfo', (req, res) => {
    connection.query('select * from  feedback', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})
// Deleting the record using id value with post api

app.post('/delrec/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('delete  from  `user` where id="' + req.params.id + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/deltut/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('delete  from  `tutor` where id="' + req.params.id + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/delstu/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('delete  from  `student` where id="' + req.params.id + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

// get particular student list..
// Get students assigned to a particular tutor..
app.post('/tutoridpost/:id',(req,res)=>{
    const id = req.params.id;
   
    console.log(id)
    
    const sql = "INSERT INTO student_tutor_assignment (`tutor_id`) VALUES (?)"
    connection.query(sql,[id],(err,insertIds)=>{
        if(err){
            res.json(err)
        }else{
            res.send(insertIds)
        }
    })
})

// app.post('/studentslists/:id',(req,res)=>{
//     const id = req.params.id;
   
//     console.log(id)
    
//     const sql = "INSERT INTO student_tutor_assignment (`student_id`) VALUES (?)"
//     connection.query(sql,[id],(err,insertIds)=>{
//         if(err){
//             res.json(err)
//         }else{
//             res.send(insertIds)
//         }
//     })
// })


// post student_tutor_assigntabele, when 'Admin' update happens post all student ids...
// app.post('/allstudentids/:id',(req,res)=>{
//     const id = req.params.id;
//     console.log('student',id)
//     const sql = "INSERT INTO `student_tutor_assignment` (`student_id`) VALUES (?)"
//     connection.query(sql,[id],(err,insertIds)=>{
//         if(err){
//             res.json(err)
//             console.log(err)
//         }else{
//             res.send(insertIds)
//         }
//     })

// })

// // post student_tutor_assigntabele, when 'Admin' update happens post all tutor ids...

// app.post('/alltutorids/:id',(req,res)=>{
//     const id = req.params.id;
//     console.log('tutorid',id)
//     const sql = "INSERT INTO `student_tutor_assignment` (`tutor_id`) VALUES (?)"
//     connection.query(sql,[id],(err,insertIds)=>{
//         if(err){
//             res.json(err)
//         }else{
//             res.send(insertIds)
//         }
//     })

// })
// post at a time...trail
app.post('/allstudentids/:studentId/:tutorId', (req, res) => {
    const { studentId, tutorId } = req.params;
    const sql = "INSERT INTO `student_tutor_assignment` (`student_id`, `tutor_id`) VALUES (?, ?) ON DUPLICATE KEY UPDATE tutor_id = VALUES(tutor_id)";
    connection.query(sql, [studentId, tutorId], (err, insertIds) => {
        if (err) {
            res.json(err);
        } else {
            res.send(insertIds);
        }
    });
});


//   qurey when tutor click the show studentlist btn...Api

app.get('/studentslists/:id', (req, res) => {
    const id = req.params.id;
    console.log('tutor_id',id);
    const sql = "SELECT student.id,student.firstname FROM student JOIN  student_tutor_assignment ON student.id = student_tutor_assignment.student_id WHERE student_tutor_assignment.tutor_id = ?";
    console.log("Students:",sql);
    connection.query(sql, [id], (err, students) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.send(students);
        }
    });
});

const registeredEmails = new Set();
// Endpoint to check if an email exists..
app.post('/check-email/:data.email', (req, res) => {
    const { email } = req.params.data.email;
  
    if (registeredEmails.has(email)) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  });





// app.post('/assignTutor/:studentId/:tutorId', (req, res) => {
//     const studentId = req.params.studentId;
//     const tutorId = req.params.tutorId;
    
//     const sql = "UPDATE `student` SET `assigned_to` = ? WHERE `id` = ?";
//     connection.query(sql, [tutorId, studentId], (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         } else {
//             res.send(result);
//         }
//     });
// });

