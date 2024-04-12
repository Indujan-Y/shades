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
                    Hello There,
                </h3>
                <h1>
                    SIGN UP
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
                <span>
                    Confim Password
                </span>
                <input type="password" name="password" id="password"/>
                <input type="submit" className="button" value="Sign Up" />
                <span id="small-txt">
                    Already have a account?
                    <Link to="/login">
                        Login
                    </Link>
                </span>
            </div>
        </Tilt>
    </div>
  )
}

export default Login