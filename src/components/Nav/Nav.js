import React from 'react';
import './Nav.css'
import Grid from '@material-ui/core/Grid';

function Nav() {

    return(
        <Grid item className='navbar' xs={5}>
            <ul className='nav-info'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </Grid>
    )
}

export default Nav;