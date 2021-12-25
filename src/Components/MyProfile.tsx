import React from 'react';
import useAuth from "../Hooks/useAuth";
import MyOrders from "./MyOrders";
import AdminPanel from "./Admin/AdminPanel";
import {Link} from 'react-router-dom'

const MyProfile = () => {
    const user = useAuth()
    return (
        <div>
            {user?.role === 1 ? <AdminPanel/> : <MyOrders/>}
            <Link to='/'>Вернуться на склад</Link>
        </div>
    );
};

export default MyProfile;