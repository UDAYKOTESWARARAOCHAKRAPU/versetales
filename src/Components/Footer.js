    import React from 'react';
    import '../Css/Footer.css';
    import { Link } from 'react-router-dom';
    import FacebookIcon from '@mui/icons-material/Facebook';
    import XIcon from '@mui/icons-material/X';
    import InstagramIcon from '@mui/icons-material/Instagram';

    const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
            <h3>About Us</h3>
            <p>VerseTales is your go-to platform for amazing stories and audiobooks. Discover a world of engaging narratives.</p>
            </div>
            
            <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* <li><Link to="/privacy">Privacy Policy</Link></li> */}
            </ul>
            </div>

            <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon/> </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><XIcon/> </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon/> </a>
            </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 VerseTales. All Rights Reserved.</p>
        </div>
        </footer>
    );
    };

    export default Footer;
