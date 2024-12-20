import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import roboImage from "../Images/robo.img.jpg";
import gameImage from "../Images/game.img.jpg";
import iotImage from "../Images/iot.img.jpg";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import avatar from '../Images/g-removebg-preview 1.jpg'

function Home() {
  return (
    <div className="home">
      <Navbar />
      <section className="Description">
        <h1>ZEPPHYRA</h1>
        <p className="para">One line about the company</p>
      </section>
      <section className="card_container">
        <div>
          <img className="img1" src={roboImage} alt="Robot Icon" />
          <p className="para1">One line about the chat Bot</p>
          <Link to="/" className="gradient-button">
      Try now
    </Link>
        </div>
        <div>
          <img className="img2" src={gameImage} alt="Game Icon" />
          <p className="para2">One line about the Gaming</p>
          <Link to="/" className="gradient-button">
      Try now
    </Link>
        </div>
        <div>
          <img className="img3" src={iotImage} alt="IoT Icon" />
          <p className="para3">One line about the iot</p>
          <Link to="/" className="gradient-button">
      Try now
    </Link>
        </div>
      </section>
      <section className="virtual_fitting">
        <div className="fits">
<h1 className="page_title">Zephyra Virtual Fitting </h1>

<div className="tech">
<div className="content">
  <p>Discover the perfect fit without ever stepping into a fitting room. </p>
  <br></br>
  <p>Where style meets technology!</p>
  <br></br>
</div>

<div className="avatar">
<img src={avatar} alt="avatar" className="avatar_pic"/>
</div>
 
</div>

  <Link to="/signup" className="gradient-button1">
      Try now
    </Link>
   
        </div>
      </section>
      <Footer />
    </div>
   
   
    
  );
}

export default Home;
