import React from 'react';
import './Nav.css'

function Nav() {

    return(
        <div className='navbar'>
            <ul className='nav-info'>
                <li className='mar'>Home</li>
                <li className='mar'>About</li>
                <li className='mar'>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Nav;