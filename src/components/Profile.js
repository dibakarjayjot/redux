import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

class Profile extends Component {
  renderInput({ input, label }) {
    return (
      <div>
        <label>
          <strong>{label}</strong>
        </label>
        <input {...input} className="inputField" />{" "}
      </div>
    );
  }
  onSubmit = formValues => {
    const dat = JSON.parse(localStorage.getItem("userData"));
    const current = JSON.parse(localStorage.getItem("currentUser"));
    for (var i in dat) {
      var email = dat[i].email;
      if (current === email) {
        dat[i].firstname = formValues.firstname;
        dat[i].lastname = formValues.lastname;
        localStorage.setItem("userData", JSON.stringify(dat));
        this.props.history.push("/products/add");
        break;
      }
    }
  };

  render() {
    return (
      <div>
        <Sidebar />
        <div>
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="container"
          >
            <Field
              type="text"
              name="firstname"
              component={this.renderInput}
              label="First Name"
            />
            <Field
              type="text "
              name="lastname"
              component={this.renderInput}
              label="Last Name"
            />
            <div style={{ textAlign: "center" }}>
              <button type="submit" className="btn">
                {" "}
                Add{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(reduxForm({ form: "Profile" })(Profile));
