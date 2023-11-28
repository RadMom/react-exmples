import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//icons
import { BsCart2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

import { setLogout } from "../../redux/auth/authSlice";

import classes from "./MainNavigation.module.css";
import AdminNav from "./AdminNav";

const MainNavigation = () => {
    const { userInfo } = useSelector((state) => state.auth);

    const cart = useSelector((state) => state.cart);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = (e) => {
        dispatch(setLogout());
        navigate("/");
    };
    return (
        <header className={classes.header}>
            <h1>Products App</h1>
            <div className={classes.info}>
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
                            <>
                                <li>
                                    <NavLink
                                        to="/registration"
                                        className={({ isActive }) =>
                                            isActive ? classes.active : undefined
                                        }
                                    >
                                        Registration
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            isActive ? classes.active : undefined
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                {userInfo !== null && (
                    <div className={classes.userInfo}>
                        <BiUserCircle /> <p> {userInfo.email}</p>
                        <button onClick={logoutHandler}>Logout</button>
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
            {userInfo ? userInfo.idAdmin && <AdminNav /> : ""}
        </header>
    );
};

export default MainNavigation;
