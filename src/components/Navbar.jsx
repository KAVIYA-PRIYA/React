import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ol>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Experience">Experience</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ol>
    );
};

export default Navbar;
