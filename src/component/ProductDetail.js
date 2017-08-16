import React, { Component } from "react";

class ProductDetail extends Component {
    render() {
        return (
            <div className="productDetail">
                <h3>{this.props.match.params.id}</h3>
            </div>
        )
    }
}
export default ProductDetail;