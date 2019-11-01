import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import aboutme from './aboutme';
import contact from './contact';
import project from './project';
import resume from './resume';

const Main=() => (
    <Switch>
        <Route exact path="/myportfolio/" component={Landing} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/aboutme" component={aboutme} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/project" component={project} />
        <Route exact path="/resume" component={resume} />
    </Switch>
)

export default Main;