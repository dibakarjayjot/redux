import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Topnav.css';
class TopNav extends Component{
    render(){
        return(
            <div className="navbar">
                <Link to="#" className="elem">CompanyName</Link>
                <div className="dropdown">
                    <button className="dropbtn">Button<i className="fa fa-caret-down"
                    ></i></button>
                    <div className="dropdown-content">
                        <Link to="/profile" className="elem-1">Profile</Link>
                        <Link to="/logout" className="elem-1">Logout</Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default TopNav;