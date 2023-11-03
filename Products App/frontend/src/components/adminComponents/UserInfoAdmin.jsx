import React from "react";

import classes from "./UserInfoAdmin.module.css";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/admin/adminActions";

function UserInfoAdmin(props) {
    const dispatch = useDispatch();
    const user = props.user;
    console.log(user);

    const updateUserHandler = () => {};
    const deleteUserHandler = (e) => {
        e.preventDefault();
        if (
            window.confirm(
                `Are you sure that you want to DELETE ${user.name} with id ${user._id} ?`
            )
        ) {
            dispatch(deleteUser(user._id));
        }
    };

    return (
        <div className={classes["user-container"]}>
            <form className={classes["user-form"]}>
                <label htmlFor="user-id">User ID :</label>
                <input type="text" id="user-id" defaultValue={user._id} />
                <br />
                <label htmlFor="user-name">User name :</label>
                <input type="text" id="user-name" defaultValue={user.name} />
                <br />
                <label htmlFor="user-email">User email :</label>
                <input type="text" id="user-email" defaultValue={user.email} />
                <br />
                <label htmlFor="user-createdAt">User createdAt :</label>
                <input
                    type="text"
                    id="user-createdAt"
                    defaultValue={new Date(`${user.createdAt}`).toDateString()}
                />
                <br />
                <label htmlFor="user-updatedAt">User updatedAt :</label>
                <input
                    type="text"
                    id="user-updatedAt"
                    defaultValue={new Date(`${user.updatedAt}`).toDateString()}
                />
                <br />
                <div>
                    <button onClick={updateUserHandler}> Update User</button>
                    <button onClick={deleteUserHandler}>Delete User</button>
                </div>
            </form>

            <div className={classes["user-orders"]}>User Orders</div>
        </div>
    );
}

export default UserInfoAdmin;
