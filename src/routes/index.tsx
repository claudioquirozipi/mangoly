import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Components 

import Home from '../view/home';

function Routes() {
    return(
        <Router>
            <Switch>
                
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}
export default Routes;

