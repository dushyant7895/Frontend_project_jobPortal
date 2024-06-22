import React, { useState } from "react";

import { Register } from "../api/User";


const RegisterPage = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile,setMobile] = useState("");
  const [name, setName] = useState("");
  

  const handleRegister = async () => {
      const response = await Register( name,
        email,
        mobile,
        password,);
       
      // Handle successful login (e.g., redirect, store tokens)
      console.log("Login successful:", response.data); // Log response for debugging purposes
      // TODO: Implement your logic for handling successful login

  };
  return (
    <div>
      <h1>Register</h1>
      

      <input
        type="text"
        placeholder="Name"    
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"    
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Mobile"    
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Login</button>
    </div>
  )
}

export default RegisterPage