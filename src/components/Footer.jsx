import React from 'react';
import "./Footer.css"
import Email from "../Images/mail.png"
import instragram from "../Images/image 5.png"
import linkdin from "../Images/image 4.png"

function Footer() {
    return (
      <footer className="footer">
      
      <div className="footer-links">
          <a href="mailto:connect.zephra@gmail.com" type='mail'><img src={Email} alt="Logo"/>connect.zephra@gmail.com</a>
          <a href="https://www.instagram.com/zephyra_.official/"><img src={instragram} alt="Logo"/>zephyra_.official</a>
          <a href="https://www.linkedin.com/company/zephyra5/posts/?feedView=all"><img src={linkdin} alt="Logo"/>zephyra_.official</a>
      </div>
  </footer>


    );
}

export default Footer;