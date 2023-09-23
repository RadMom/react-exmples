import React from "react";

import classes from "./UserInfoAdmin.module.css";

function UserInfoAdmin(props) {
    const user = props.user;
    console.log(user);

    const updateUserHandler = () => {};
    const deleteUserHandler = () => {};
    return (
        <div className={classes["user-container"]}>
            <form className={classes["user-form"]}>
                <label htmlFor="user-id">User ID :</label>
                <input type="text" id="user-id" value={user._id} />
                <br />
                <label htmlFor="user-name">User name :</label>
                <input type="text" id="user-name" value={user.name} />
                <br />
                <label htmlFor="user-email">User email :</label>
                <input type="text" id="user-email" value={user.email} />
                <br />
                <label htmlFor="user-createdAt">User createdAt :</label>
                <input
                    type="text"
                    id="user-createdAt"
                    value={new Date(`${user.createdAt}`).toDateString()}
                />
                <br />
                <label htmlFor="user-updatedAt">User updatedAt :</label>
                <input
                    type="text"
                    id="user-updatedAt"
                    value={new Date(`${user.updatedAt}`).toDateString()}
                />
                <button onClick={updateUserHandler}> Update User</button>
                <button onClick={deleteUserHandler}>Delete User</button>
            </form>

            <div>User Orders</div>
        </div>
    );
}

export default UserInfoAdmin;
