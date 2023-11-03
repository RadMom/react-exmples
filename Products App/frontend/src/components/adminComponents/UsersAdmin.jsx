import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsers } from "../../redux/admin/adminActions";
import UserInfoAdmin from "./UserInfoAdmin";

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
                users.map((user) => <UserInfoAdmin key={user._id} user={user} />)
            ) : (
                <p>No users</p>
            )}
        </div>
    );
};

export default UsersAdmin;
