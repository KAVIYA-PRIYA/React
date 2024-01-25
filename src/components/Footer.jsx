import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <ul id="footer1ul">
            <a href="https://github.com/KAVIYA-PRIYA" target="_blank"><li>Github</li></a>
                <a href="https://www.linkedin.com/in/kaviya-priya-k-5a5960224/" target="_blank"><li>Linkedin</li></a>
                <a href="mailto:kavyapriya2702@gmail.com"><li>Mailid</li></a>
            </ul>
            <ul id="footer2ul">
                
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                <li><Link to="/copyright-notice">Copyright</Link></li>
            </ul>
        </div>
    );
};

export default Footer;
