import React, {useEffect} from 'react';
import LoginComponent from "./Components/LoginComponent";
import StorageComponent from "./Components/Storage/StorageComponent";
import {Container} from "@mui/material";
import {useNavigate, useRoutes} from "react-router-dom";
import {RequireAuth} from "./hoc/RequireAuth";
import MyOrders from "./Components/Orders/MyOrders";
import {NavigationBar} from "./Components/NavigationBar";
import AdminPanel from "./Components/Admin/AdminPanel";
import {RequireAdminRole} from "./hoc/RequireAdminRole";
import {useAppDispatch} from "./Store";
import {hydrateUser} from "./Store/slices/userSlice";

function App() {
    const dispatch = useAppDispatch()
    const routing = useRoutes([
        {path: '/orders', element: <RequireAuth element={<MyOrders/>}/>},
        {path: '/admin', element: <RequireAdminRole element={<AdminPanel/>}/>},
        {path: '/login', element: <LoginComponent/>},
        {path: '/', element: <RequireAuth element={<StorageComponent/>}/>}
    ])
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(hydrateUser())
        navigate('/')
    }, [])

    return (
        <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            height: '100vh',
            minWidth: '100vw',
            m: 0,
            backgroundColor: '#001433'
        }}>
            <NavigationBar/>
            {routing}
        </Container>
    );
}

export default App;
