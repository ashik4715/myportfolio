import React, { Component } from 'react';
import { Grid, Cell, Button} from 'react-mdl';

class About extends Component{
    render(){
        return(
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={12}> 
                        <h2>About Me</h2>
                    </Cell>
                </Grid>
                <Grid className="info-grid">
                    <Cell col={6}> 
                        <div class="short-info" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                            <h3>Personal Statement</h3>
                            <p >
                            I am an energetic, ambitious and adventure loving person who has
                            developed a mature sense of self-reliance and work efficiency. I
                            am excellent in working both individually and with others to
                            achieve a certain objective on time and with excellence.
                            </p>
                        </div>
                        <div class="short-info" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                            <h3>What I Do ?</h3>
                            <ul class="list-check">
                                <li>Frontend Development</li>
                                <li>Backend Development</li>
                                <li>Responsiveness and Accessibility</li>
                                <li>Database Design</li>
                                <li>Cross Browser Compatibility</li>
                                <li>Testing and Documentation</li>
                            </ul>
                        </div>
                        <div class="short-info" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <h3>Interests</h3>
                        <p>
                            I am very much interested in keeping up with the trends in
                            Software Industry. These days, I'm learning NodeJS.<br></br>When I'm
                            not sitting in front of my computer, I love to read books, watch
                            movies, play cricket, hangout with friends and travel across the
                            country.
                        </p>
                        </div>
                        <div class="download-button">
                        <Button raised accent ripple style={{marginRight:'15px'}} href="https://drive.google.com/file/d/1_jx9TyMmbcsDEwYSptIU_BvExBdMmk56/view?usp=sharing" 
                        target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-download">View CV</i> 
                        </Button> 
                        <Button raised colored ripple style={{marginRight:'15px'}} href="/assets/mycv.pdf" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-download">Download CV</i> 
                        </Button>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;