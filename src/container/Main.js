import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Products from './Products';
import Sidebar from './Sidebar';
import ProductDetail from '../component/ProductDetail';


class Main extends Component {
    render() {
        return (
            <main>
                <Sidebar/>
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/products" component={Products} />
                    <Route path="/products/:id" component={ProductDetail} />
                </div>
            </main>
        );
    }
}
export default Main;