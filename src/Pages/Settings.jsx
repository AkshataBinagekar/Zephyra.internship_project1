import React from 'react'
import './Settings.css'
import Navbar from '../components/Navbar'
import userImg from '../Images/User Octagon (1).jpg'
import { Link } from 'react-router-dom';
import user from '../Images/user.jpg'
function Settings() {
  return (
    <div>
    <Navbar />
    <div className='settings'>
     <section className='setting_page'>
    <div className='title'>
     <img src={userImg} alt='userImg' />
     <h2>Settings</h2>
    </div>
    <div className='sidebar'>
    <ul>
     <li><Link to="/Account_Preference" className='setting_nav'>Account Preference</Link></li>
     <li><Link to="/Security_and_Password" className='setting_nav'>Security and Password</Link></li>
     <li><Link to="/Notification" className='setting_nav'>Notification</Link></li>
     <li><Link to="/Basic_info" className='setting_nav'>Basic info</Link></li>
     <li><Link to="/Authentication" className='setting_nav'>Authentication</Link></li>
     <li><Link to="/Account_Settings" className='setting_nav'>Account Settings</Link></li>
     <li><Link to="/Edit" className='setting_nav'>Edit</Link></li>
     <li><Link to="/Advance_Settings" className='setting_nav'>Advance Settings</Link></li>
     <br></br>
     <li >Energy Efficient mode </li>
     
     </ul>
    </div>
     </section>
     <section className='details'>
    <div className='display'>
     <div className='profile'>
     <img src={user} alt='user' className='user'/>
     </div>
    <div className='basic_info'>
    <p className='info'>Basic info</p>
    </div>
    </div>
    <div className='user_detail'>
    <div className='label'>
      <label className='label_name'>Display name</label>
      <label className='label_name'>Username</label>
      <label className='label_name'>Email</label>
      <label className='label_name'>Number</label>
    </div>
    <div className='input'>
<input className='text' type="text" placeholder="abcdeg"/>
<input  className='text'type="text" placeholder="1231231__12"/>
<input className='text' type="email" placeholder="@.com"/>
<input  className='text' type="text" placeholder="123456789"/>
    </div>
    </div>
     </section>

     </div>
    </div>
  )
}

export default Settings
