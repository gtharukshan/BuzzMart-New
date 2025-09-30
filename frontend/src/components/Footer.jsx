import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
    
        <div className="footer-box">
          <div className="logo">
            <ion-icon name="bag"></ion-icon>
            <h1>BuzzMart</h1>
          </div>
          <p>
            BuzzMart is your one-stop online store for quality products 
            at unbeatable prices. Fast delivery, trusted service, and a seamless shopping experience – all in one place!
          </p>
        </div>

        {/* About Us */}
        <div className="footer-box">
          <h2>About Us</h2>
          <ul>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="footer-box">
          <h2>Customer Care</h2>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Corporate & Bulk Purchasing</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h2>Contact Us</h2>
          <ul>
            <li>
              No-56,Maria bazzar,Lindula , NuwaraEliya
            </li>
            <li>Email: gtharukshan@gmail.com</li>
            <li>Phone: +94 760355773</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
