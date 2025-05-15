import React from 'react';
import '../Components/Footer.css'; // Import a CSS file for styling (optional)

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Steps Website AI. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;