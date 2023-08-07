import React from "react";
import AdminNav from "../../components/Navigations&Footer/AdminNav";
import { Outlet } from "react-router-dom";

const AdminDushboard = () => {
    return (
        <div>
            <AdminNav />
            <Outlet />
        </div>
    );
};

export default AdminDushboard;
