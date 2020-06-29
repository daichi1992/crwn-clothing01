import React from 'react'; 
import {Switch, Route} from 'react-router-dom'; 

import './App.css'; 

import Homepage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shop/shop.component'; 
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'; 
import Header from './components/header/header.component'; 
import {auth, createUserProfileDocument} from './firebase/firebase.utils'; 

class App extends React.Component{
  constructor(){
    super(); 

    this.state = {
      currentUser: null
    }

    console.log(this.state.currentUser); 
  }

  unsubscribeFromAuth = null; 

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user); 
      // // this.setState({currentUser: user}); 

      if(userAuth){
        const userRe
      }

    })
    console.log(this.unsubscribeFromAuth); 
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
