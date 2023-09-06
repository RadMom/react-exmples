import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsers } from "../../redux/actions/adminActions";

const UsersAdmin = () => {
    const { users } = useSelector((state) => state.admin);
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);
    return (
        <div>
            {users && users.length > 0 ? (
                users.map((user) => <p key={user._id}>{user.name}</p>)
            ) : (
                <p>No users</p>
            )}
        </div>
    );
};

export default UsersAdmin;
