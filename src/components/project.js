import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab:0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(

                <Grid className="projects-grid">

                <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '175px',
                    background: 'url(https://facebook.github.io/react/logo-og.png) center / cover'}}>
                    React Project #1
                </CardTitle>
                <CardText>
                    <ul>
                        <li>Calculator Implementation of the iOS calculator built in React.</li>
                        <li>Emoji Search Simple React app for searching emoji.</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '175px',
                    background: 'url(https://facebook.github.io/react/logo-og.png) center / cover'}}>
                    React Project #2
                </CardTitle>
                <CardText>
                    <ul>
                        <li>Pokedex The list of Pokémon with live search.</li>
                        <li>Shopping Cart Simple ecommerce cart application built using React.</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>    

                <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '175px',
                    background: 'url(https://facebook.github.io/react/logo-og.png) center / cover'}}>
                    React Project #3
                </CardTitle>
                <CardText>
                    <ul>
                        <li>Course Learn Page Open Source LMS script in Laravel 5.8 and ReactJS 16.9</li>
                        <li>BMI Calculator A React Hooks app for calculating BMI</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                </Grid>

            )
        }else if(this.state.activeTab === 1){
            return(
                <Grid className="projects-grid">

                <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '175px',
                    background: 'url(https://facebook.github.io/react/logo-og.png) center / cover'}}>
                    React Project #1
                </CardTitle>
                <CardText>
                    <ul>
                        <li>Calculator Implementation of the iOS calculator built in React.</li>
                        <li>Emoji Search Simple React app for searching emoji.</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                </Grid>
            )
        }else if(this.state.activeTab === 2){
            return(
                <Grid className="projects-grid">

                <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '175px',
                    background: 'url(https://facebook.github.io/react/logo-og.png) center / cover'}}>
                    React Project #1
                </CardTitle>
                <CardText>
                    <ul>
                        <li>Calculator Implementation of the iOS calculator built in React.</li>
                        <li>Emoji Search Simple React app for searching emoji.</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '175px',
                    background: 'url(https://facebook.github.io/react/logo-og.png) center / cover'}}>
                    React Project #2
                </CardTitle>
                <CardText>
                    <ul>
                        <li>Pokedex The list of Pokémon with live search.</li>
                        <li>Shopping Cart Simple ecommerce cart application built using React.</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>    

                </Grid>
            )
        }else if(this.state.activeTab === 3){
            return(
                <Grid className="projects-grid">

                <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '175px',
                    background: 'url(https://facebook.github.io/react/logo-og.png) center / cover'}}>
                    React Project #1
                </CardTitle>
                <CardText>
                    <ul>
                        <li>Calculator Implementation of the iOS calculator built in React.</li>
                        <li>Emoji Search Simple React app for searching emoji.</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                </Grid>
            )
        }

    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab : tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Java</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>

            </div>
        )
    }
}

export default Project;