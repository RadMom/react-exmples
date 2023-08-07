import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsers } from "../../redux/actions/adminActions";

const UsersAdmin = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);
    return <div>UsersAdmin</div>;
};

export default UsersAdmin;
