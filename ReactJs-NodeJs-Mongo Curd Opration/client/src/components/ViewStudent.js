import React from 'react';
import { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import axios from "axios";
import { useEffect } from 'react';

    
const ViewStudent = () => {
    const [student, setStudent] = useState([]);
    
    
   
    useEffect(() => {
        loadStudent();
    },[]);

    const loadStudent = async() =>{
        const result = await axios.get('http://localhost:8080/admin/');
        setStudent(result.data);
    }

    const deleteuser = async(id) =>{
        const result = await axios.delete('http://localhost:8080/admin/del-student/'+id)
        .then((result) => {           
            loadStudent();                      
            
        }).catch((err) => {
            alert('Could Not Deleted the Record');
        });

    }
  return (
    <>
        <div className="container forms">
            <div className="row">
                <div className="col-md-12 text-center"><h2>Edit Student</h2></div>
            </div>           
            <table className="table">
                <thead>
                    <th>S.No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                {student.map((student,index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{student.first_name}</td>
                        <td>{student.last_name}</td>
                        <td>{student.email}</td>
                        <td><Link to={`edit-student/${student._id}`}>Edit</Link></td>
                        <td><Link to='' onClick={()=>deleteuser(student._id)}>Delete</Link></td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        
      </div>         
    </>
  )
}

export default ViewStudent;
