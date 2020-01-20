import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import './Login.css';
class Login extends Component{
    renderInput({ input, label }){
        return (
            <div>
        <label><strong>{label}</strong></label>
        <input  {...input} className="inputField"/>   </div>     );
    }
    onSubmit= (formValues) => {
    const dat = JSON.parse(localStorage.getItem("userData"));
    for (var i in dat) {
      var email = dat[i].email;
      var password = dat[i].password;
      if (formValues.email === email) {
        if (formValues.password === password) {
          
          localStorage.setItem("currentUser",JSON.stringify(formValues.email));
          this.props.history.push("/profile");
          
        }
      }}
    }
    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="container" >
                <h2 style={{textAlign:'center'}}>Log In</h2>
                <Field type="email" name="email" component={this.renderInput} label=" E-mail"  />
                <Field type="password" name="password" component={this.renderInput} label="Password" />
                <div style={{textAlign:'center'}}>
                <button type="submit" className="btn">Login</button></div>
            </form>
        );
    }
};

export default withRouter(reduxForm({ form:'Login'})(Login));