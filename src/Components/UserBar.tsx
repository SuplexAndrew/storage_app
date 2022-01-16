import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";


export const UserBar = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{position: 'relative', right: '0', m:2}}>
            <Box sx={{justifyContent: 'flex-end', display: {xs: 'none', md: 'flex'}}}>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={() => navigate('/orders')}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
            </Box>
        </Box>
    );
}
