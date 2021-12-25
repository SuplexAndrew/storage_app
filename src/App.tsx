import React from 'react';
import useAuth from "./Hooks/useAuth";
import LoginComponent from "./Components/LoginComponent";
import StorageComponent from "./Components/Storage/StorageComponent";
import useLoading from "./Hooks/useLoading";
import {Container} from "@mui/material";
import UserBar from './Components/UserBar';
import {useRoutes} from "react-router-dom";
import {RequireAuth} from "./hoc/RequireAuth";
import MyProfile from "./Components/MyProfile";

function App() {
    const user = useAuth()
    const loading: boolean = useLoading()
    const routing = useRoutes([
        {path: '/my', element: <RequireAuth element={<MyProfile/>}/>},
        {path: '/login', element: <LoginComponent/>},
        {path: '/', element: <RequireAuth element={<StorageComponent/>}/>}
    ])
    if (loading) {
        return <h1>loading</h1>
    }
    return (
        <Container sx={{
            position: 'fixed',
            height: '100vh',
            minWidth: '100vw',
            m: 0,
            backgroundColor: '#75b089'
        }}>
            {user && <UserBar/>}
            {routing}
        </Container>
    );
}

export default App;
