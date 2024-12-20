import React from 'react'
import './Signup.css'
import Navbar from '../components/Navbar'
function Signup() {
  return (
    <div>
    <Navbar />
    <div className='signup'>
   
 <div className='signup_container'>
 <h2>Sign Up</h2>
  <label>Username</label>
<input className='name' id='name' type='name' />
<label>Email</label>
<input className='email' id='email' type='email' />
<label>Date Of Birth</label>
<input className='date' id='date' type='date'/>
<label>Password</label>
<input className='password' id='password' type='password'/>
<label>Confirm Password</label>
<input className='Cpassword' id='Cpassword' type='password'/>
<button>Signup</button>
<p>Aleady a member? <h4>Login</h4></p>
</div>
    </div>
    </div>
  )
}

export default Signup