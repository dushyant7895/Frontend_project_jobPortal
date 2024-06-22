import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:4000"; // Adjusted URL for clarity

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // State for error messages

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/user/login`, {
        email,
        password,
      });

      // Handle successful login (e.g., redirect, store tokens)
      console.log("Login successful:", response.data); // Log response for debugging purposes
      // TODO: Implement your logic for handling successful login

    } catch (error) {
      // Handle login errors gracefully
      console.error("Login error:", error.response.data);
      setErrorMessage(error.response.data.message || "Login failed."); // Set user-friendly error message
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if present */}

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
