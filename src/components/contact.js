import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}> 
                        <h2>Ashikur Rahman Jholok</h2>
                        <img 
                        src={process.env.PUBLIC_URL+'/img/Fred_man-512.png'}
                        alt="avatar" 
                        style={{height:'250px'}}
                        />
                        <p style={{ width:'75%', margin:'auto', paddingTop: '1em'}}>
                        I am Computer engineer from Bangladesh, and my research interest in Image processing, Web & mobile application development. 
                        I often hangout with my friends & I code for fun.                            
                        </p>
                    </Cell>
                    <Cell col={6}> 
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (+880) 167-7280569
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    Skype ID : ashikur.jholok
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    ashikurjhalak@gmail.com
                                </ListItemContent>
                            </ListItem>
                            </List>
                        </div>
                            
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;