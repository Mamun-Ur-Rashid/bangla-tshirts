import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' nav-bar text-3xl flex justify-center items-center bg-gray-300 mx-10'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/review'>Order Review</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    );
};

export default Header;