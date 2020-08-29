import React, {useEffect} from 'react';
import coverImg from './coverphoto.png'; 
import './Home.css';
import Grid from '@material-ui/core/Grid';
import {TiHtml5} from 'react-icons/ti';
import {SiCsswizardry} from 'react-icons/si';
import {SiPostgresql} from 'react-icons/si';
import {IoLogoJavascript} from 'react-icons/io';
import {FaReact} from 'react-icons/fa';
import {FaNode} from 'react-icons/fa';
import {SiMaterialUi} from 'react-icons/si';
import {SiRedux} from 'react-icons/si';
import {FaSass} from 'react-icons/fa';
import {FiFigma} from 'react-icons/fi';
import {SiPostman} from 'react-icons/si';
import {GrHeroku} from 'react-icons/gr';

function Home() {

    return(
        <Grid container direction='row' justify='center'>
            <Grid item xs={12} md={6} style={{paddingTop: '40px'}}>
                <div className='info-container'>
                    <span className='cover-title'>
                        Caitlin Ciaramella
                    </span>
                    <div className='cover-info'>
                        I'm a Software Engineer who 
                        focuses on writing clean efficient code.
                    </div>
                </div>
                
            </Grid>
            <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                <img className='cover-image' src={coverImg} alt='computer image'/>
            </Grid>

            <Grid container direction='row' justify='center'>
                <Grid item xs={12}>
                    <div className='skills-info'>
                    <div className='skills'>
                        <FaReact/>
                        <TiHtml5/>
                        <SiCsswizardry/>
                        <IoLogoJavascript/>
                        <FaNode/>
                        <SiMaterialUi/>
                    </div>
                    <div className='skills two'>
                        <SiRedux/>
                        <SiPostgresql/>
                        <FaSass/>
                        <FiFigma/>
                        <SiPostman/>
                        <GrHeroku/>
                    </div>
                    </div>
                </Grid>
            </Grid>


        </Grid>



    )
}

export default Home;