import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src={process.env.PUBLIC_URL+'/img/iconfinder_10_avatar_2.svg'}
                            alt="avatar"
                            style={{height:'200px'}}
                            />
                        </div>
                    <h2 style={{paddingTop: '2em'}}>Ashikur Rahman Jholok</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '75%'}} />
                    <p>
                    Hey there! It's me Jholok, Software Engineer with over a year of professional work experience.
                    I am familiar with all stages of the development cycle for dynamic web projects.
                    I have worked with JavaScript, Java, PHP, React, Spring, Laravel, Bootstrap and more.                            
                    </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '75%'}} />
                    <h5>Address</h5>
                    <p>409, Senpara Parbata, Mirpur, Dhaka-1216, Bangladesh</p>
                    <h5>Phone No.</h5>
                    <p>(+880) 167-7280569</p>
                    <h5>Email</h5>
                    <p>jhalak.mazegeek@gamil.com</p>
                    <h5>Website</h5>
                    <p><a href="https://www.linkedin.com/in/ashikur-rahman-0a272ba1/">Link</a> </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '75%'}} />

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                        startYear={2013}
                        endYear={2018}
                        schoolName="BRAC University"
                        schoolDescription="
                        BRAC University is a private University in Bangladesh that provides quality education in Bangladesh to Undergraduate, Post-graduate and Research students. 
                        It was founded as a branch of the BRAC organization by Sir Fazle Hasan Abed in 2001 under the Private University Act.
                        "/>

                        <Education
                        startYear={2010}
                        endYear={2012}
                        schoolName="Bangladesh Navy College, Dhaka"
                        schoolDescription="
                        Bangladesh Navy College Dhaka or BNCD is a primary, lower-secondary, secondary and higher secondary school. Bangladesh Navy College Dhaka is also known as BN College Dhaka.
                        "/>
                        
                        <Education
                        startYear={2003}
                        endYear={2010}
                        schoolName="Monipur High School"
                        schoolDescription="
                        Monipur High School & College is a secondary school & college located in Mirpur, Dhaka, Bangladesh. The school is also known as Monipur Uccha Viddalaya Ebong College.
                        "/>
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <Experience
                        startMonth="September"
                        startYear={2018}
                        endMonth="April"
                        endYear={2019}
                        schoolName="MazeGeek, Inc."
                        schoolDescription="
                        Look no more for a reliable web application development company in US. MazeGeek is the best software & web development company based in Astoria, New York.
                        "/>

                        <Experience
                        startMonth="May"
                        startYear={2019}
                        endMonth="Present"
                        endYear="[7] months"
                        schoolName="Mnb Technology BD"
                        schoolDescription="
                        Mnb Technology provides end-to-end credential management solutions for private firms. It combines state of the art solution design, robust back-end systems with efficient project management in a single turnkey solution for national IT infrastructure undertakings.
                        "/>
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills
                          skill="JavaScript"
                          progress={80}
                        />
                       <Skills
                          skill="Java Lang"
                          progress={75}
                        />
                        <Skills
                          skill="PHP Lang"
                          progress={55}
                        />
                        <Skills
                          skill="React JS"
                          progress={50}
                        />
                        <Skills
                          skill="Vue JS"
                          progress={50}
                        />                        
                        <Skills
                          skill="Laravel"
                          progress={75}
                        />
                        <Skills
                          skill="Python"
                          progress={65}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;