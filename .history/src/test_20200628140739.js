import React from 'react'; 
import {Switch, Route, Link} from 'react-router-dom'; 

const root = (a) => {
    console.log(a) 
    return (
        <div>
            <button onClick={() => a.history.push('/a')}>button to page a</button>
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
        
            <Route path='/root/:daichiI' component={root} />
            <Route path='/root/a' component={pageA} />
            <Route path='/root/b' component={pageB} />
    
    </div>
); 

export default Test; 