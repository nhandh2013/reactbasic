import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
// import ProductDetail from "../component/ProductDetail";

const data =  [
        {id: 11, name: "Product 1"},
        {id: 22, name: "Product 2"},
        {id: 33, name: "Product 3"},
        {id: 44, name: "Product 4"},
        {id: 55, name: "Product 5"},
    ]

const prod = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
class ProductShow extends Component {
    render () {
        return (
            <div className="showPro">
                {
                    this.props.product.map((value, index) => {

                        return <div className="proItem" key={index}>
                                    <div className="category">{value.category}</div>
                                    <div className="name">{value.stocked ? value.name : <span style={{color: "red"}}>{value.name}</span>}</div>
                                    <div className="price">{value.price}</div>
                                </div>
                    })
                }
            </div>
        )
    }
}
class Products extends Component {
    render() {
        return (
            <div className="listProducts">
                <h1>Hello Products</h1>
                <ul>
                    {
                        data.map((value) => {
                            return <li key={value.id}><NavLink to={`${this.props.match.url}/${value.name}`}>{value.name}</NavLink></li>
                        })
                    }
                </ul>
                {/*< Route path={`this.props.match.url/:proId`} component={ProductDetail} />*/}
                <ProductShow product={prod}/>
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