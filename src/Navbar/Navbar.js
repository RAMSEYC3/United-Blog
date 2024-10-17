import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <h1>The united  blog </h1>
            <div className="links">
                <Link to='/'>home</Link>
                <Link to='/create' >New blog</Link>
            </div>
        </nav>
    )
}

export default Navbar
