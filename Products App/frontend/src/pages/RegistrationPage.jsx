import { useState } from "react";

const RegistrationPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const formSubmitHandler = () => {};
    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={email}
                    />
                </div>
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
                <div>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input
                        type="text"
                        placeholder="Confirm password"
                        id="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default RegistrationPage;
