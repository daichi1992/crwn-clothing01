import React from 'react'; 
import {Switch, Route} from 'react-router-dom'; 

const root = (a) => {
    console.log(a) 
    return (
        <div>
            <h1>Page root</h1>
        </div>
    ); 
}; 

const pageA = () => (
    <div>
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
        
            <Route exact path='/' component={root} />
            <Route path='/a' component={pageA} />
            <Route exact path='/b' component={pageB} />
        
    </div>
); 

export default Test; 