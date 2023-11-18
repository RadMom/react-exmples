import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsers } from "../../redux/admin/adminActions";
import UserInfoAdmin from "./UserInfoAdmin";
import UsersFilters from "../Navigations&Footer/UsersFilters";

const UsersAdmin = () => {
    const { users } = useSelector((state) => state.admin);
    const usersPagination = useSelector((state) => state.paginationAndFilters.pagination.users);
    const usersFilters = useSelector((state) => state.paginationAndFilters.filters.users);

    //TO DO LIST
    //1. Pagination
    //2. Filters -by userId . Can add byCreatedAt

    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);
    return (
        <div>
            <UsersFilters />
            {users && users.length > 0 ? (
                users.map((user) => <UserInfoAdmin key={user._id} user={user} />)
            ) : (
                <p>No users</p>
            )}
        </div>
    );
};

export default UsersAdmin;
