import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Sidebar from "./Sidebar";
import "./ListProduct.css";
class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null
    };
  }
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
    const da = currItem.filter(dat => {
      return dat.productname === formValues.productname;
    });
    this.setState({
      searchResults: da
    });
  };
  render() {
    return (
      <div>
        <div>
          <Sidebar />
        </div>
        <div className="content">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <h2 style={{ textAlign: "center" }}>Search Product By name</h2>
            <Field
              type="text"
              name="productname"
              component={this.renderInput}
              label="Product Name"
            />

            <div style={{ textAlign: "center" }}>
              <button type="submit" className="btn">
                {" "}
                Search{" "}
              </button>
            </div>
          </form>

          <div className="content1">
            {this.state.searchResults ? (
              <div>
                <h2 style={{ textAlign: "center" }}>Search Results </h2>
                <table id="products">
                  <tr>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th> Quantity</th>
                  </tr>

                  {this.state.searchResults.map(cu => (
                    <tr>
                      <td>{cu.productname}</td>
                      <td>{cu.productcode}</td>
                      <td>{cu.quantity}</td>{" "}
                    </tr>
                  ))}
                </table>{" "}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: "ListProduct" })(ListProduct);
