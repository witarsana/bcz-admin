import React,{useState,useEffect,Component} from 'react';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';

//storage
import {UsersProvider} from './storage/UserContext';
import {UsersLoginProvider} from './storage/UserLoginContext';

//css
import './styles/App.css';
import './styles/tailwind.min.css';

//view
import Login from './view/login/Login';
import Admin from './view/admin/Admin';

import PrivateRoute from './component/PrivateRoute'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userlogin: JSON.parse(localStorage.getItem("bczadmin.userlogin")),
      auth : false,
    };
  }

  componentWillMount() { 
    if (this.state.userlogin){
      if (Object.keys(this.state.userlogin).length === 0 && this.state.userlogin.constructor === Object) {
        this.state.auth = false;
      }else{
        this.state.auth = true
      }
    }else{
      this.state.auth = false;
    }
  }

  
  render(){
    return (
      <UsersLoginProvider>
        <UsersProvider>
          <Router>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/admin" component={Admin} auth={this.state.auth}/>
              </Switch>
            </div>
          </Router>
        </UsersProvider>
      </UsersLoginProvider>
    )
  }
  
    
  
}

export default App;
