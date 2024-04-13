import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        navigate("/")
      }
    })
  
  }, [])
  

  function handelEmailChange(e) {
    setEmail(e.target.value);
  }

  function handelPassowordChange(e) {
    setPassword(e.target.value);
  }

  function handelConfirmPassowordChange(e) {
    setConfirmPassword(e.target.value);
  }

  function handleKeyPress(e) {
    if(e.key == 'Enter') {
        handleSignUpSumbit();
    }
  }

  function handleSignUpSumbit() {
    if (password != confirmPassword) {
      alert("The passwords does not match");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("signed in sucessfully");
        })
        .catch((e) => {
          if (e.code == AuthErrorCodes.EMAIL_EXISTS) {
            alert("The email is already in use, try logging in!!!");
          } else if (e.code == AuthErrorCodes.WEAK_PASSWORD) {
            alert(
              "The password is too weak try creating password with more than 6 characters"
            );
          } else if (e.code == AuthErrorCodes.INVALID_EMAIL) {
            alert("Enter all creadiontials");
          }
          console.log(e);
        });
    }
  }
  return (
    <div className="signup-page-wrapper" id="signup-page-wrapper">
      <Tilt className="Tilt" options={{ max: 25 }}>
        <div className="card-wrapper" id="card-wrapper">
          <h3>Hello There,</h3>
          <h1>SIGN UP</h1>
          <br />
          <span>My E-Mail ID is</span>
          <input
            type="email"
            name="name"
            id="email"
            required
            onChange={(e) => handelEmailChange(e)}
            value={email}
          />
          <span>My password is</span>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => handelPassowordChange(e)}
            value={password}
          />
          <span>Confim Password</span>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => handelConfirmPassowordChange(e)}
            value={confirmPassword}
            onKeyDown={(e) => {
              handleKeyPress(e)
          }}
          />
          <input
            type="submit"
            className="button"
            value="Sign Up"
            onClick={handleSignUpSumbit}
          />
          <span id="small-txt">
            Already have a account?
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Tilt>
    </div>
  );
}

export default Login;
