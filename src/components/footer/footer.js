import React from 'react';
import './footer.css'; // Import your custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p style={{fontWeight:'bold'}}>Email: muralireshma2002@gmail.com</p><br></br>
          <p style={{fontWeight:'bold'}}>Phone: +1 (123) 789-4567</p><br></br>
          <p style={{fontWeight:'bold'}}>Address: 31, Abc street, Annanagar, Chennai-600015</p><br></br>
          
        </div>
        
    
    
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-github"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            
          </div>
          <br></br>
          <div class="copyright">
      &copy; Copyright <strong>Shoppingtime<br></br></strong>.All Rights reserved<br></br>
   
      Designed By <a href="#">ReshmaGarments</a>
    </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 
