import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import './Sidebar.css';
import TopNav from './TopNav';
class Sidebar extends Component{
    render(){
        return(
            <div>
            <div className="sidebar">
                <Link to="/profile"className="elem">Profile</Link>
                <Link to="/products" className="elem">Products</Link>
                <Link to="/products/add" className="elem">Add</Link>
                <Link to="/products/list" className="elem">List</Link>
            </div>
            <TopNav/>
            </div>
        );
    }
};

export default Sidebar;