import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
     e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:8010/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/";
        setLogin(true);
      })
      .catch((response) => {
         setMessage("Email not found");
      });
  };

  return (
    <>
    <div class="container">
        <div class="row">
          <div class="col-md-12 text-center"><h2>Login</h2></div>          
        </div>
       
        <div class="col-md-12">
          <span class="text-danger">{message}</span>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
              value={email} onChange={(e) => setEmail(e.target.value)} />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" 
              value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>Login</button>
          </form>
        </div>
      </div>
      <div class="row">
          <div class="col-md-12 text-center">        
            {/* display success message */}
            {login ? (
              <p className="text-success">You Are Logged in Successfully</p>
            ) : (
              <p className="text-danger"></p>
            )}
          </div>
      </div>
      
    </>
  );
}
