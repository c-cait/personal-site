import React from 'react';
import coverImg from './coverphoto.png'; 
import './Home.css';
import Grid from '@material-ui/core/Grid';

function Home() {

    return(
        <Grid container direction='row' justify='center'>
            <Grid item xs={12} md={6} style={{paddingTop: '40px'}}>
                <div className='info-container'>
                    <span className='cover-title'>Caitlin Ciaramella</span>
                <div className='cover-info'>
                    I'm a Software Engineer who focuses on writing clean efficient code.
                </div>
                </div>
                
            </Grid>
            <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                <img className='cover-image' src={coverImg} alt='computer image'/>
            </Grid>
        </Grid>
    )
}

export default Home;