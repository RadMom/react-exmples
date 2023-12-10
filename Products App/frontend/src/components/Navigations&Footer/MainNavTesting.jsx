import React, { useState } from "react";
import { NavLink, useNavigation } from "react-router-dom";
import classes from "./MainNavTesting.module.css";

import AdminNav from "./AdminNav";

//icons
import { FaBars } from "react-icons/fa6";
import { FaAlignLeft } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../redux/auth/authSlice";

function MainNavTesting() {
    const dispatch = useDispatch();
    const navigate = useNavigation();
    const userInfo = useSelector((state) => state.auth.userInfo);
    const cart = useSelector((state) => state.cart);

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const logoutHandler = (e) => {
        dispatch(setLogout());
        navigate("/");
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu((oldState) => !showMobileMenu);
    };
    return (
        <header className={classes["main-header"]}>
            <h1>Products App</h1>
            <nav>
                <div className={classes["nav-container"]}>
                    <div className={classes.mobile}>
                        {showMobileMenu ? (
                            <FaAlignLeft
                                className={classes["nav-menu-icon"]}
                                onClick={toggleMobileMenu}
                            />
                        ) : (
                            <FaBars
                                className={classes["nav-menu-icon"]}
                                onClick={toggleMobileMenu}
                            />
                        )}

                        <div
                            className={`${classes["main-menu"]} ${
                                showMobileMenu ? classes["show-mobile-main-menu"] : ""
                            }`}
                        >
                            <ul>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? classes.active : undefined
                                        }
                                        end
                                        onClick={toggleMobileMenu}
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
                                        onClick={toggleMobileMenu}
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="about"
                                        className={({ isActive }) =>
                                            isActive ? classes.active : undefined
                                        }
                                        onClick={toggleMobileMenu}
                                    >
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {!userInfo ? (
                        <div className={classes["login-and-registration"]}>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            isActive ? classes.active : undefined
                                        }
                                        onClick={() => setShowMobileMenu(false)}
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/registration"
                                        className={({ isActive }) =>
                                            isActive ? classes.active : undefined
                                        }
                                        onClick={() => setShowMobileMenu(false)}
                                    >
                                        Registration
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className={classes["user-info"]}>
                            <BiUserCircle className={classes["nav-user-icon"]} />

                            <p className={classes["user-email"]}> {userInfo.email}</p>
                            <button onClick={logoutHandler}>Logout</button>
                        </div>
                    )}
                </div>
                <div className={classes.cart}>
                    <NavLink to="/cart" className={classes.cart}>
                        <span className={classes.icon}>
                            <BsCart2 className={classes["nav-menu-icon"]} />
                        </span>
                        {/* <span>Items: </span> */}

                        <span className={classes.badges}>{cart.totalQuantity}</span>
                    </NavLink>
                </div>
            </nav>
            {userInfo ? userInfo.isAdmin && <AdminNav /> : ""}
        </header>
    );
}

export default MainNavTesting;
