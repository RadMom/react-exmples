import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setError, setLogin } from "../../redux/auth/authSlice";
import axios from "axios";
import classes from "./Login.module.css";
import Card from "../../UI/Card";

const Login = () => {
    console.log("Login.jsx");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.auth.error);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [unexpectedError, setUnexpectedError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // error === "Invalid password..." && setPasswordError(true);
    // error === "Invalid email..." && setEmailError(true);

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        try {
            const response = await axios.post("http://localhost:5000/user/login", {
                email,
                password,
            });
            if (response.statusText === "OK") {
                dispatch(setLogin(response.data));
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
                if (error.response.data.message === "Invalid email...") {
                    setEmailError(true);
                } else if (error.response.data.message !== "Invalid email...") {
                    setEmailError(false);
                }
                if (error.response.data.message === "Invalid password...") {
                    setPasswordError(true);
                } else if (error.response.data.message !== "Invalid password...") {
                    setPasswordError(false);
                }
            } else if (error.message) {
                setUnexpectedError(error.message);
            } else {
                setUnexpectedError("An unexpected error ...");
            }
            // dispatch(
            //     setError(
            //         error.response && error.response.data.message
            //             ? error.response.data.message
            //             : error.message
            //             ? error.message
            //             : "An unexpected error ..."
            //     )
            // );
        }
    };
    return (
        <div className={classes["form-container"]}>
            <div className={classes.login}>
                <div>
                    {unexpectedError && unexpectedError}
                    {/* {error !== "Invalid email..." && error !== "Invalid password..." ? (
                        <div>{error}</div>
                    ) : (
                        ""
                    )} */}
                </div>

                <h2>Welcome</h2>

                <form
                    onSubmit={formSubmitHandler}
                    autoComplete="on"
                    className={classes["login-form"]}
                >
                    <div
                        className={
                            emailError
                                ? `${classes["input-group"]} ${classes.error}`
                                : classes["input-group"]
                        }
                    >
                        <label htmlFor="email">Enter email</label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Enter email"
                            ref={emailInputRef}
                            required
                        />
                        <span className={classes.msg}>Invalid email</span>
                    </div>
                    <div
                        className={
                            passwordError
                                ? `${classes["input-group"]} ${classes.error}`
                                : classes["input-group"]
                        }
                    >
                        <label htmlFor="password">Enter password</label>
                        <input
                            id="password"
                            type="text"
                            placeholder="Enter password"
                            ref={passwordInputRef}
                            required
                        />
                        <span className={classes.msg}>Invalid password</span>
                    </div>

                    <button type="submit" className={classes["login-button"]}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
