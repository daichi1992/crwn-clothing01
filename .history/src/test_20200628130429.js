import React from 'react'; 
import {Switch, Route} from 'react-router-dom'; 

const pageA = () => (
    <div>
        <h1>Page A</h1>
    </div>
); 

const Test = () => (
    <div>
        <Switch>
            <Route exact path='/'/>
        </Switch>
    </div>
); 