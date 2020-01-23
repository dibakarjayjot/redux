import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Topnav.css";
class TopNav extends Component {
  maincontent = () => {
    const dat = JSON.parse(localStorage.getItem("userData"));
    const curr = JSON.parse(localStorage.getItem("currentUser"));
    var upper = "";
    for (var i in dat) {
      const email = dat[i].email;
      if (curr === email) {
        if (dat[i].firstname !== "") {
          upper = dat[i].firstname;
        }
        if (dat[i].lastname !== "") {
          upper += " " + dat[i].lastname;
        }
      }
    }
    return upper || curr;
  };
  render() {
    return (
      <div className="navbar">
        <Link to="#" className="elem">
          {" "}
          Happle{" "}
        </Link>
        <div className="dropdown">
          <button className="dropbtn">
            {this.maincontent()}
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/profile" className="elem-1">
              Profile
            </Link>
            <Link to="/logout" className="elem-1">
              Logout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
