import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact activeClassName="selected" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" to="/products">Products</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;