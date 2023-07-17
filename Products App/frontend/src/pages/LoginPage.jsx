import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmitHandler = () => {};
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
