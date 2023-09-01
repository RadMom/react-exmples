import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";
import axios from "axios";

const LoginPage = () => {
    console.log("LoginPage.jsx");
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
        <div>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Enter email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor="password">Enter password</label>
                    <input
                        type="text"
                        placeholder="Enter password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
