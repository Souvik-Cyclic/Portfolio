import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaBars, FaTimes, FaTools } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <Link to="/" className='nav-logo'><FaHome className="icon"/> Home</Link>
                <div className='nav-toggle' onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className='nav-item'><Link to="/About"><FaInfoCircle className="icon"/>About</Link></li>
                    <li className='nav-item'><Link to="/Education"><FaGraduationCap className='icon'/>Education</Link></li>
                    <li className='nav-item'><Link to="/Skills"><FaTools className='icon'/>Skills</Link></li>
                    <li className='nav-item'><Link to="/Projects"><FaProjectDiagram className='icon'/>Projects</Link></li>
                    <li className='nav-item'><Link to="/Contact"><FaEnvelope className='icon'/>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
