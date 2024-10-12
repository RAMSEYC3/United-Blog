import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function Layout() {
    return (
        <div>
            <Navbar />
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
