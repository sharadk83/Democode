import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const EditStudent = () => {
  const {id}=useParams();
  const history = useNavigate();
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
useEffect(() => {
  loadStudent();
},[]);

const loadStudent = async() =>{
  const result = await axios.get('http://localhost:8080/admin/student/'+id);
  setStudent(result.data);
}

const submitForm = async(e) => {
  e.preventDefault(); // 👈️ prevent page refresh
  await axios.put('http://localhost:8080/admin/update-student/'+id,student)
  .then((result) => {
      setMessage("Record Update Successfully");
      history('/');
       
      
  }).catch((err) => {
      alert('SomeThing went Wrong!');
  });
};

  return (
    <>
        <div className="container forms">

        <form onSubmit={submitForm} >
          <div className="row">
              <div className="col-md-12 text-center"><h2>Edit Student</h2></div>
          </div>
          <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-2">First Name</div>
              <div className="col-md-6"><input type="text" name="first_name" value={first_name} className="form-control" onChange={e=>HandleChange(e)} /></div>
              <div className="col-md-2"></div>
          </div>

          <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-2">Last Name</div>
              <div className="col-md-6"><input type="text" name="last_name" value={last_name} className="form-control" onChange={e=>HandleChange(e)}/></div>
              <div className="col-md-2"></div>
          </div>

          <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-2">email</div>
              <div className="col-md-6"><input type="text" name="email" value={email} className="form-control" onChange={e=>HandleChange(e)}/></div>
              <div className="col-md-2"></div>
          </div>

          <div className="row">
              <div className="col-md-2"></div>           
              <div className="col-md-8">
                <button  className="btn btn-warning">Edit student</button>
              </div>
              <div className="col-md-2"></div>
          </div>
        </form>
      </div>         
    </>
  )
}

export default EditStudent;
