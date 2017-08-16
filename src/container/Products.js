import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import ProductDetail from "../component/ProductDetail";

const data =  [
        {id: 1, name: "Product 1"},
        {id: 2, name: "Product 2"},
        {id: 3, name: "Product 3"},
        {id: 4, name: "Product 4"},
        {id: 5, name: "Product 5"},
    ]


class Products extends Component {
    render() {
        return (
            <div className="listProducts">
                <h1>Hello Products</h1>
                <ul>
                    {
                        data.map((value) => {
                            return <li key={value.id}><NavLink to={`${this.props.match.url}/${value.id}`}>{value.name}</NavLink></li>
                        })
                    }
                </ul>
                < Route path={`this.props.match.url/:proId`} component={ProductDetail} />
                <p><NavLink to="/">Back</NavLink></p>
            </div>
        )
    }
}
export default Products;




// const Products = ({ match }) =>
//   <div>
//     <h1>Hello Products</h1>
//     <ul>
//       <li>
//         <NavLink to={`${match.url}/1`}>Product 1</NavLink>
//       </li>
//       <li>
//         <NavLink to={`${match.url}/2`}>Product 2</NavLink>
//       </li>
//       <li>
//         <NavLink to={`${match.url}/3`}>Product 3</NavLink>
//       </li>
//     </ul>
//     <Route path={`${match.url}/:proId`} component={ProductDetail} />

//     <p>
//       <NavLink to="/">Back</NavLink>
//     </p>
//   </div>;
// const ProductDetail = ({ match }) =>
//   <div>
//     <h3>
//       {match.params.proId}
//     </h3>
//   </div>;