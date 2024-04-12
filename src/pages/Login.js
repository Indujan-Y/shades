import React from 'react'
import { Tilt } from 'react-tilt';
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-page-wrapper" id="login-page-wrapper">
        <Tilt className="Tilt" options={{ max : 25 }}>
            <div className="card-wrapper" id="card-wrapper">
                <h3>
                    Welcome back,
                </h3>
                <h1>
                    LOGIN
                </h1>
                <br />
                <span>
                    My E-Mail ID is
                </span>
                <input type="email" name="name" id="email" required/>
                <span>
                    My password is
                </span>
                <input type="password" name="password" id="password" />
                <span id="small-txt">
                    Do you forgot your password?
                    <a href="">
                        Click Here
                    </a>
                </span>
                <input type="submit" className="button" value="Login" />
                <span id="small-txt">
                    Don't have an account?
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </span>
            </div>
        </Tilt>
    </div>
  )
}

export default Login