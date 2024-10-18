import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5555/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage(data.message);
      setIsLoggedIn(true);  // Set logged-in state to true
      navigate("/");        // Redirect to home page
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (  // Conditionally render form if not logged in
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <p>You are logged in!</p>  // Show this message after login
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
