import React, { useState } from "react";

import { Login } from "../api/User";


const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await Login(
        email,
        password,
      );

      // Handle successful login (e.g., redirect, store tokens)
      console.log("Login successful:", response.data); // Log response for debugging purposes
      console.log("status is",response.status);
      // TODO: Implement your logic for handling successful login

    } catch (error) {
      // Handle login errors gracefully
      console.error("Login error:", error.response.data);
    }
  };

  return (
    <div>
      <h1>Login</h1>
     
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AuthPage;
