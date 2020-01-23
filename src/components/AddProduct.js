import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Sidebar from "./Sidebar.js";
import "./AddProduct.css";
class AddProduct extends Component {
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
    const curr = JSON.parse(localStorage.getItem("currentUser"));
    const currItem = JSON.parse(localStorage.getItem(curr));
    let da = [];
    currItem === null ? (da = [formValues]) : (da = [...currItem, formValues]);
    localStorage.setItem(curr, JSON.stringify(da));
    this.props.reset();
  };
  render() {
    return (
      <div>
        <div>
          <Sidebar />
        </div>
        <div className="content">
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="container"
          >
            <h2 style={{ textAlign: "center" }}>Add New Product</h2>
            <Field
              type="text"
              name="productname"
              component={this.renderInput}
              label="Product Name"
            />
            <Field
              type="text"
              name="productcode"
              component={this.renderInput}
              label="Product Code"
            />
            <Field
              type="number"
              name="quantity"
              component={this.renderInput}
              label="Quantity"
            />

            <div style={{ textAlign: "center" }}>
              <button type="submit" className="btn">
                Add{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: "AddProduct" })(AddProduct);
