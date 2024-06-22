import React, { useState } from "react";
import { Register } from "../api/User";
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [showLoginRedirect, setShowLoginRedirect] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const response = await Register(name, email, mobile, password);

    // Handle successful login (e.g., redirect, store tokens)
    console.log("Login successful:", response.data); // Log response for debugging purposes
    console.log("Status is", response.status);

    if (response.status === 201) {
      localStorage.setItem("password", password);
      localStorage.setItem("email", email);
      setShowLoginRedirect(true);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register user</button>
      </form>
      {showLoginRedirect && <Navigate to='/login' />}
    </div>
  );
};

export default RegisterPage;
