import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//icons
import { FaBars } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

import { setLogout } from "../../redux/auth/authSlice";

import classes from "./MainNavigation.module.css";
import AdminNav from "./AdminNav";

const MainNavigation = () => {
    const userInfo = useSelector((state) => state.auth.userInfo);
    const cart = useSelector((state) => state.cart);

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showUserInfoMenu, setShoeUserInfoMenu] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = (e) => {
        dispatch(setLogout());
        navigate("/");
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };
    return (
        <header className={classes.header}>
            <h1>Products App</h1>
            <FaBars onClick={toggleMobileMenu} className={classes["mobile-menu-icon"]} />
            <div className={`${classes.info} ${showMobileMenu ? classes.showMobileMenu : ""}`}>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        {!userInfo && (
                            <div>
                                <NavLink
                                    to="/registration"
                                    className={({ isActive }) =>
                                        isActive ? classes.active : undefined
                                    }
                                >
                                    Registration
                                </NavLink>

                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? classes.active : undefined
                                    }
                                >
                                    Login
                                </NavLink>
                            </div>
                        )}
                    </ul>
                </nav>
                {userInfo !== null && (
                    <div className={classes.userInfo}>
                        <BiUserCircle />
                        <div>
                            <p> {userInfo.email}</p>
                            <button onClick={logoutHandler}>Logout</button>
                        </div>
                        <NavLink to="/cart" className={classes.cart}>
                            <span className={classes.icon}>
                                <BsCart2 />
                            </span>
                            {/* <span>Items: </span> */}

                            <span className={classes.badges}>{cart.totalQuantity}</span>
                        </NavLink>
                    </div>
                )}
            </div>
            {userInfo ? userInfo.isAdmin && <AdminNav /> : ""}
        </header>
    );
};

export default MainNavigation;
