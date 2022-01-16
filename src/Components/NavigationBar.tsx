import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../Store";
import {logout} from "../Store/slices/userSlice";
import {useAppSelector} from "../Hooks/useAppSelector";

export const NavigationBar = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.user)
    if (!user) return null
    let barLinks = [
        {name: "Заказы", link: '/orders', role: 'All'},
        {name: "Товары", link: '/', role: 'All'},
        {name: "Админ", link: '/admin', role: 'Admin'},
    ]

    if (user?.role?.value === 1) {
        barLinks = barLinks.filter(({role}) => role !== 'Admin')
    }

    const HandlerLogout = () => {
        dispatch(logout())
    }
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Box sx={{flexGrow: 1, display: 'flex'}}>
                    {
                        barLinks
                            .map(({name, link}) =>
                                <Typography key={link} sx={{mx: 2}} variant="h6" component="div" onClick={() => navigate(link)}>
                                    {name}
                                </Typography>)
                    }
                </Box>
                <Button color="inherit" onClick={HandlerLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};