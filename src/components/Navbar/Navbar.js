import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaTools } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='nav-bar'>
                <li className='nav-item'><Link to="/"><FaHome className="icon"/> Home</Link></li>
                <li className='nav-item'><Link to="/About"><FaInfoCircle className="icon"/>About</Link></li>
                <li className='nav-item'><Link to="/Education"><FaGraduationCap className='icon'/>Education</Link></li>
                <li className='nav-item'><Link to="/Skills"><FaTools className='icon'/>Skills</Link></li>
                <li className='nav-item'><Link to="/Projects"><FaProjectDiagram className='icon'/>Projects</Link></li>
                <li className='nav-item'><Link to="/Contact"><FaEnvelope className='icon'/>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;