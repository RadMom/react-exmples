import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <div>
            <h1>Products App</h1>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/">Home Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About Page</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MainNavigation;
