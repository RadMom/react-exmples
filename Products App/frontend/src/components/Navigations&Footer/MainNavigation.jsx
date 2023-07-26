import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/authSlice";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    const {userInfo} = useSelector((state) => state.auth);
    console.log(userInfo);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = (e) => {
        dispatch(logout());
        navigate("/");
    };
    return (
        <header className={classes.header}>
            <h1>Products App</h1>
            <div className={classes.info}>
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
                        <li>
                            <NavLink to="/registration">Registration</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
                {userInfo !== null && (
                    <div className={classes.userInfo}>
                        <button onClick={logoutHandler}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default MainNavigation;
