import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        navigate("/")
      }
    })
  
  }, [])

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    
  }

  function handleKeyPress(e) {
    if(e.key == 'Enter') {
        handleLoginSubmit();
    }
  }

  function handleLoginSubmit() {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Login sucessfull");
        navigate("/");
      })
      .catch((e) => {
        if (e.code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
          alert("The password does not match");
        } else if (e.code == AuthErrorCodes.INVALID_EMAIL) {
          alert("Enter all creadiontials");
        }
      });
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="login-page-wrapper" id="login-page-wrapper">
      <Tilt className="Tilt" options={{ max: 25 }}>
        <div className="card-wrapper" id="card-wrapper">
          <h3>Welcome back,</h3>
          <h1>LOGIN</h1>
          <br />
          <span>My E-Mail ID is</span>
          <input
            type="email"
            name="name"
            id="email"
            required
            onChange={(e) => handleEmailChange(e)}
            value={email}
          />
          <span>My password is</span>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => handlePasswordChange(e)}
            value={password}
            onKeyDown={(e) => {
                handleKeyPress(e)
            }}
          />
          <span id="small-txt">
            Do you forgot your password?
            <a href="">Click Here</a>
          </span>
          <input
            type="submit"
            className="button"
            value="Login"
            onClick={handleLoginSubmit}
          />
          <span id="small-txt">
            Don't have an account?
            <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </Tilt>
    </div>
  );
}

export default Login;
