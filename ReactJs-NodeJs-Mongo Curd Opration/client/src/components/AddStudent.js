import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const AddStudent = () => {
    const [student, setStudent] = useState((
        {
            'first_name':'',
            'last_name':'',
            'email':'',
        }
    ));
    const [message, setMessage] = useState();
    const {first_name,last_name,email} = student;
    const HandleChange = ((e) =>{
        setStudent({...student,[e.target.name]:e.target.value});
    })
    const submitForm = async(e) => {
        e.preventDefault(); // 👈️ prevent page refresh
        await axios.post('http://localhost:8080/admin/add-student',student)
        .then((result) => {
            setMessage("Record Added Successfully");
            setStudent({
                first_name: "", // clear first_name field after submission
                last_name:"", // clear last_name field after submission
                email:"", // clear email field after submission
              });
             
            
        }).catch((err) => {
            alert('SomeThing went Wrong!');
        });
    };
    
    
  return (
    <div>        
        <div className="container forms">
            <form onSubmit={submitForm} >
                <div className="row">
                    <div className="col-md-12 text-center"><h2>Add Student</h2></div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center"><h3>{message}</h3></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">First Name</div>
                    <div className="col-md-6"><input type="text" name="first_name" className="form-control" value={first_name} onChange={e=>HandleChange(e)}/></div>
                    <div className="col-md-2"></div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">Last Name</div>
                    <div className="col-md-6"><input type="text" name="last_name" className="form-control" value={last_name} onChange={e=>HandleChange(e)}/></div>
                    <div className="col-md-2"></div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">email</div>
                    <div className="col-md-6"><input type="text" name="email" className="form-control" value={email} onChange={e=>HandleChange(e)}/></div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-warning ">Add Student</button>
                </div>
                </div>

            </form>  
        </div>
    </div>
  )
}

export default AddStudent;
