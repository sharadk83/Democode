import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  // initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:8010/register",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (    
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center"><h2>Register</h2></div>          
        </div>
       
        <div class="col-md-12">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" 
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>Register</button>
        </form>
      </div>    
    </div>
      
    
  );
}
