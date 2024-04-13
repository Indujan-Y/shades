import { signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if(!user) {
          navigate("/login")
        }
      })
    }, [])
 function handleSignout() {
    signOut(auth).then(() => {
        console.log("Logged Out");
        alert("Logged Out Successfully");
        navigate("/login");
    })
 }
  return (
    <div>Home
        <button onClick={handleSignout}>Sign out</button>
    </div>
  )
}

export default Home