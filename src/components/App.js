import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Products from './Products';
import AddProduct from './AddProduct';
import ListProduct from './ListProduct';
import Sidebar from './Sidebar';
import Logout from './Logout';
class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route exact path="/login" component={Login}/>
                <Sidebar/>
                <Route exact path="/logout" component={Logout}/>

                <Route exact path="/profile" component={Profile}/>

                <Route exact path="/products" component={Products}/>

                <Route exact path="/products/add" component={AddProduct}/>

                <Route exact path="/products/list" component={ListProduct}/>

                </BrowserRouter>

            </div>
        );
    }
};

export default App;

