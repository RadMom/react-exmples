import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/authSlice";
import axios from "axios";
import classes from "./Login.module.css";
import Card from "../../UI/Card";

const Login = () => {
    console.log("Login.jsx");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/user/login", {
                email,
                password,
            });

            if (response.statusText === "OK") {
                dispatch(login(response.data));

                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={classes.login}>
            <Card>
                <h2>Welcome</h2>
                <br />
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Enter email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <br />
                    <label htmlFor="password">Enter password</label>
                    <input
                        type="text"
                        placeholder="Enter password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </Card>
        </div>
    );
};

export default Login;
