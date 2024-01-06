const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path'); // Add this line

app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

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

    console.log('update..',req.body);

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

app.post('/devopsupdate/:content', (req, res) => {

    console.log(req.body);

    connection.query('update  `devops` set course="' + req.body.course + '",content="' + req.body.content + '",date="' + req.body.date + '",task_status="' + req.body.task_status + '" , test="' + req.body.test + '" where content="' + req.params.content + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/tallyupdate/:content', (req, res) => {

    console.log(req.body);

    connection.query('update  `tally` set course="' + req.body.course + '",content="' + req.body.content + '",date="' + req.body.date + '",task_status="' + req.body.task_status + '" , test="' + req.body.test + '" where content="' + req.params.content + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})
app.post('/marketingupdate/:content', (req, res) => {

    console.log(req.body);

    connection.query('update  `digital_marketing` set course="' + req.body.course + '",content="' + req.body.content + '",date="' + req.body.date + '",task_status="' + req.body.task_status + '" , test="' + req.body.test + '" where content="' + req.params.content + '"', (err, row, fields) => {


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
            // console.log("SQL query executed successfully:", results);
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
app.post('/devops', (req, res) => {

    connection.query('select * from  `devops`  ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})


app.post('/tally', (req, res) => {

    connection.query('select * from  `tally`  ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})
app.post('/marketing', (req, res) => {

    connection.query('select * from  `digital_marketing`  ', (err, rows, fields) => {

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

app.get('/devops/:content', (req, res) => {
    console.log(req.params.content)
    connection.query('select * from  `devops` where course="Devops" and content="' + req.params.content + '" ', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.get('/tally/:content', (req, res) => {
    console.log(req.params.content)
    connection.query('select * from  `tally` where course="Tally" and content="' + req.params.content + '" ', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})
app.get('/marketing/:content', (req, res) => {
    console.log(req.params.content)
    connection.query('select * from  `digital_marketing` where course="Digital_Marketing" and content="' + req.params.content + '" ', (err, row, fields) => {

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

    console.log('coming',req.body);

    connection.query('insert into contact(name,email,subject,phonenumber,comment) values("' + req.body.name + '","' + req.body.email + '","'+ req.body.subject +'","'+ req.body.phonenumber +'","' + req.body.comment + '")', (err, row, fields) => {

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

// app.post('/deltut/:id', (req, res) => {
//     console.log(req.params.id)
//     connection.query('delete  from  `tutor` where id="' + req.params.id + '"', (err, row, fields) => {

//         if (!err) {
//             res.send(row)
//         }
//         else {
//             res.send(err)
//         }


//     })

// })

// delete tutors from tutor table and assign_table.....
app.post('/deltut/:id', (req, res) => {
    const tutorId = req.params.id;

    // Check if there are associated records in student_tutor_assignment
    connection.query('SELECT * FROM student_tutor_assignment WHERE tutor_id = ?', [tutorId], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
            return;
        }

        if (rows.length > 0) {
            // There are associated records, handle accordingly (delete or update them)
            connection.query('DELETE FROM student_tutor_assignment WHERE tutor_id = ?', [tutorId], (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Internal server error');
                } else {
                    // Now, delete the tutor record
                    connection.query('DELETE FROM tutor WHERE id = ?', [tutorId], (err, row) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send('Internal server error');
                        } else {
                            res.send(row);
                        }
                    });
                }
            });
        } else {
            // No associated records, directly delete the tutor record
            connection.query('DELETE FROM tutor WHERE id = ?', [tutorId], (err, row) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Internal server error');
                } else {
                    res.send(row);
                }
            });
        }
    });
});


// delete students from student table and assign_table.....
app.post('/delstu/:id', (req, res) => {
    const studentId = req.params.id;

    // Check if there are associated records in student_tutor_assignment
    connection.query('SELECT * FROM student_tutor_assignment WHERE student_id = ?', [studentId], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
            return;
        }

        if (rows.length > 0) {
            // There are associated records, handle accordingly (delete or update them)
            connection.query('DELETE FROM student_tutor_assignment WHERE student_id = ?', [studentId], (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Internal server error');
                } else {
                    // Now, delete the student record
                    connection.query('DELETE FROM student WHERE id = ?', [studentId], (err, row) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send('Internal server error');
                        } else {
                            res.send(row);
                        }
                    });
                }
            });
        } else {
            // No associated records, directly delete the student record
            connection.query('DELETE FROM student WHERE id = ?', [studentId], (err, row) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Internal server error');
                } else {
                    res.send(row);
                }
            });
        }
    });
});


// get particular student list..

// Get students assigned to a particular tutor..
// app.post('/tutoridpost/:id',(req,res)=>{
//     const id = req.params.id;
   
//     console.log(id)
    
//     const sql = "INSERT INTO student_tutor_assignment (`tutor_id`) VALUES (?)"
//     connection.query(sql,[id],(err,insertIds)=>{
//         if(err){
//             res.json(err)
//         }else{
//             res.send(insertIds)
//         }
//     })
// })

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
// app.post('/assign-student-tutor/:id',(req,res)=>{
//     const id = req.params.id;
//     console.log('student.....',id)
//     const sql = "INSERT INTO `assigntable` (`studentid`) VALUES (?)"
//     connection.query(sql,[id],(err,insertIds)=>{
//         if(err){
//             res.json(err)
//             console.log(err)
//         }else{
//             res.send(insertIds)
//         }
//     })

// })

// post student_tutor_assigntabele, when 'Admin' update happens post all tutor ids...
// app.post('/assign-student-tutor', (req, res) => {
//     const { selectedId } = req.body;
//     console.log('tutorid....', selectedId);
  
//     // Rest of your code handling the selectedId
  
//     res.send('Received selected ID successfully');
//   });
  
  
// ....post two ids...

app.post('/assign-student-tutor/:id/:tutorid', (req, res) => {
   
    const { id, tutorid } = req.params; // Use a single destructuring statement
     console.log(id);
    console.log(tutorid);


    const checkAssignmentSql = 'SELECT * FROM student_tutor_assignment WHERE `student_id` = ?';
    
    connection.query(checkAssignmentSql, [id], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (results.length === 0) {
        // If the student is not assigned, insert a new assignment
        const insertSql = 'INSERT INTO student_tutor_assignment (`student_id`, `tutor_id`) VALUES (?, ?)';
        connection.query(insertSql, [id, tutorid], (insertErr) => {
          if (insertErr) {
            console.error(insertErr);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
  
          res.status(201).json({ message: 'Student assigned to tutor successfully' });
        });
      } else {
        // If the student is already assigned, update the tutor assignment
        const updateSql = 'UPDATE student_tutor_assignment SET `tutor_id` = ? WHERE `student_id` = ?';
        connection.query(updateSql, [tutorid, id], (updateErr) => {
          if (updateErr) {
            console.error(updateErr);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
  
          res.status(200).json({ message: 'Student reassigned to a new tutor successfully' });
        });
      }
    });
  });
  

//   qurey when tutor click the show studentlist btn...Api

app.get('/studentslists/:id', (req, res) => {
    const id = req.params.id;
    // console.log('tutor_id',id);
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


// send(post) time and taskfile to assigntable_table 'whyaa' tutor....
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "./public/files");
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});

// image filter

const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(null,Error("only image is allowed"))
    }
}

const upload = multer({ storage,
   fileFilter:isImage
});

// post the tutor tasks..
app.post('/taskpost/:id', upload.single('file'), (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.file);

    const tutorid = req.params.id;
    const { time,discription } = req.body;
    
    const file = req.file; // No need to destructure req.file here

    const sql = 'UPDATE student_tutor_assignment SET Time = ?, Test = ?, discription = ? WHERE tutor_id = ?';

    connection.query(sql, [time, file.filename, discription, tutorid ], (err, result) => {
        if (err) {
            res.status(500).send('Internal server error');
            console.log(err);
        } else {
            console.log('Task inserted successfully');
            res.status(200).json('Task inserted successfully');
        }
    });
});

// get the students  discription....
app.get('/discription/:id',(req,res)=>{
    const id = req.params.id;
    const sql = 'SELECT * FROM student_tutor_assignment WHERE student_id = ?';
    connection.query(sql,[id], (err,result)=>{
        if(err){
            console.log('Error exicuting sql query:',err);
            return;
        }else{
            res.send(result)
        }
    })
    
})
// get the students file...
// Backend route for file download
app.get('/download/:filePath', (req, res) => {
    const filePath = path.join(__dirname, 'public/files', req.params.filePath);
    console.log(filePath)
    res.sendFile(filePath);
});

// send(post) taskfile to assigntable_table 'whyaa' students by there ids....
const stor = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "./public/files");
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});

// docs filter...

const isdoc = (req,file,callback)=>{
    if(file.mimetype.startsWith("doc")){
        callback(null,true)
    }else{
        callback(null,Error("only allowed docs"))
    }
}
const save = multer({ stor,
    fileFilter:isdoc
 });

//  post students tasks...
 app.post('/studnet_stasks/:id', upload.single('file'), (req, res) => {
    console.log(req.params.id);
    console.log(req.file);

    const studentsid = req.params.id;
    
    
    const file = req.file; 

    const sql = 'UPDATE student_tutor_assignment SET  student_tasks = ? WHERE student_id = ?';

    connection.query(sql, [ file.filename, studentsid  ], (err, result) => {
        if (err) {
            res.status(500).send('Internal server error');
            console.log(err);
        } else {
            console.log('Task inserted successfully');
            res.status(200).json('Task inserted successfully');
        }
    });
});

// get file from assign tutortable...
app.get('/student_tasks/:id',(req,res)=>{
    console.log("studnetid.",req.params.id)
    const id = req.params.id;
    const sql = 'SELECT * FROM student_tutor_assignment WHERE student_id = ?';
    connection.query(sql,[id], (err,result)=>{
        if(err){
            console.log('Error exicuting sql query:',err);
            return;
        }else{
            res.send(result)
            
        }
    })

})

app.get('/download/:filePath', (req, res) => {
    const filePath = path.join(__dirname, 'public/files', req.params.filePath);
    console.log(filePath)
    res.sendFile(filePath);
});

// tutor comment...
app.post('/tutorcomment/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
  
    const studentid = req.params.id;
    const {tutor_review } = req.body; // Use the correct property name
  
    // Use SET keyword in the SQL query and specify the column name
    const sql = 'UPDATE student_tutor_assignment SET tutor_review = ? WHERE student_id = ?';
  
    connection.query(sql, [tutor_review, studentid], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        console.log('Comment inserted successfully');
        res.status(200).send(result);
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

