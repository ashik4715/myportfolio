import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={process.env.PUBLIC_URL + '/img/Avatar.svg'}
                        alt="avatar" className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p> HTML/CSS | Bootstarp | JavaScript | React | React Native | VueJS | NodeJS | Java | Python | Matlab </p>

                            <div className="social-links">

                                {/* Linkedin */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true"/>
                                </a>

                                {/* freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" rel="noopener noreferrer" aria-hidden="true"/>
                                </a>

                                {/* Youtube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" rel="noopener " aria-hidden="true"/>
                                </a>

                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;