import React, { useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Login } from "../api/User";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  useEffect(()=>{
    const storeEmail = localStorage.getItem("email");
    const storePassword = localStorage.getItem("password");
    console.log("The email is",storeEmail);
    console.log("The password is", storePassword);
    if(storeEmail){
      setEmail(storeEmail);
    }
    if(storePassword){
      setPassword(storePassword);
    }
  },[]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await Login(email,password);
      if(response.status===200)
        {
          // Log response for debugging purposes
          localStorage.setItem("token",response.data.token);
          setRedirectToHome(true);
          console.log("Login successful:", response.data); 
          // Handle successful login (e.g., redirect, store tokens)
          console.log("status is",response.status);       
        }

    } catch (error) {
      // Handle login errors gracefully
      console.error("Login error:", error.response.data);
    }
  };

  return (
    <div>
      <h1>Login</h1>
     <form onSubmit={handleLogin}>

      <input
        type="email"
        placeholder="Email"    
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
     </form>
      {redirectToHome && <Navigate to="/" />}
    </div>
  );
};

export default LoginPage;
