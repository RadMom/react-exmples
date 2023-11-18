import React from "react";
import AdminNav from "../components/Navigations&Footer/AdminNav";
import Pagination from "../components/Pagination";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminDushboard = () => {
    return (
        <div>
            <AdminNav />
            <Outlet />
        </div>
    );
};

export default AdminDushboard;
