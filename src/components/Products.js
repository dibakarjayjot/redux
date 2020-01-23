import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "./Products.css";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currItems: []
    };
  }
  componentDidMount() {
    const curr = JSON.parse(localStorage.getItem("currentUser"));
    this.setState({ currItems: JSON.parse(localStorage.getItem(curr)) });
  }
  render() {
    return (
      <div>
        <div>
          <Sidebar />
        </div>
        <div className="content">
          {this.state.currItems ? (
            <div>
              <h2 style={{ textAlign: "center" }}>All Products</h2>
              <table id="products">
                <tr>
                  <th>Product Name</th>
                  <th>Product Code</th>
                  <th> Quantity</th>
                </tr>

                {this.state.currItems.map(cu => (
                  <tr>
                    <td>{cu.productname}</td>
                    <td>{cu.productcode}</td>
                    <td>{cu.quantity}</td>{" "}
                  </tr>
                ))}
              </table>{" "}
            </div>
          ) : (
            <h2>No product added yet</h2>
          )}
        </div>
      </div>
    );
  }
}

export default Products;
