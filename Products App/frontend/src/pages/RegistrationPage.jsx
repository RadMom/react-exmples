import { useState } from "react";
import Registration from "../components/Login&Registration/Registration";

const RegistrationPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <>
            <Registration />
        </>
    );
};

export default RegistrationPage;
