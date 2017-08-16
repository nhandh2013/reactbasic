import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ProductDetail extends Component {
    render() {
        return (
            <div className="productDetail">
                {console.log(this.props.match.params)}
                <h3>{this.props.match.params.id}</h3>
                <p><NavLink to='../products'>Back</NavLink></p>
            </div>
        )
    }
}
export default ProductDetail;