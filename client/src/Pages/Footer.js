import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#e9ecef', padding: '20px', marginTop: '50px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Contact Information */}
          <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
            <h4>Contact Us</h4>
            <p> Mobile St, Thika,</p>
            <p>Phone: (+254) 714760756 </p>
            <p>Email: support@mobileinsight.com</p>
            <p>Business Hours: Mon-Fri, 9 AM - 6 PM</p>
          </div>

          {/* Quick Links */}
          <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
            <h4>Quick Links</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="/about" style={{ textDecoration: 'none', color: '#000' }}>About Us</a></li>
              <li><a href="/privacy" style={{ textDecoration: 'none', color: '#000' }}>Privacy Policy</a></li>
              <li><a href="/terms" style={{ textDecoration: 'none', color: '#000' }}>Terms & Conditions</a></li>
              <li><a href="/returns" style={{ textDecoration: 'none', color: '#000' }}>Return Policy</a></li>
              <li><a href="/faqs" style={{ textDecoration: 'none', color: '#000' }}>FAQs</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
            <h4>Customer Service</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="/help" style={{ textDecoration: 'none', color: '#000' }}>Help Center</a></li>
              <li><a href="/track-order" style={{ textDecoration: 'none', color: '#000' }}>Track Order</a></li>
              <li><a href="/warranty" style={{ textDecoration: 'none', color: '#000' }}>Warranty Information</a></li>
              <li><a href="/contact-support" style={{ textDecoration: 'none', color: '#000' }}>Contact Support</a></li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
            <h4>Stay Connected</h4>
            <p>
              <a href="#" style={{ margin: '0 10px' }}>Facebook</a>
              <a href="#" style={{ margin: '0 10px' }}>X</a>
              <a href="#" style={{ margin: '0 10px' }}>Instagram</a>
            </p>
            <h4>Subscribe to Our Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter your email" style={{ padding: '5px', width: '80%', maxWidth: '300px' }} />
              <button  style={{ padding: '5px 10px', marginLeft: '10px' }}>Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright Information */}
        <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px', marginTop: '20px' }}>
          <p>&copy; 2024 MobileInsight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;