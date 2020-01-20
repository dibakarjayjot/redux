import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/profile" component={Profile}/>
                </BrowserRouter>

            </div>
        );
    }
};

export default App;

