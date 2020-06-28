import React from 'react'; 
import {Switch, Route, Link} from 'react-router-dom'; 

const root = (a) => {
    console.log(a) 
    return (
        <div>
            <button onClick={a.history.push('')}>button</button>
            <Link to='/a'>page A</Link>
            <h1>Page root: {a.match.params.daichiI}</h1>
        </div>
        
    ); 
}; 

const pageA = () => (
    <div>
        <Link to='/root/20'>root</Link>
        <h1>Page A</h1>
    </div>
); 

const pageB = () => (
    <div>
        <h1>Page A</h1>
    </div>
); 

const Test = () => (
    <div>
        <Switch>
            <Route exact path='/root/:daichiI' component={root} />
            <Route exact path='/a' component={pageA} />
            <Route exact path='/b' component={pageB} />
        </Switch>
    </div>
); 

export default Test; 