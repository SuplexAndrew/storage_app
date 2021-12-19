import React, {useRef} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {Login} from "../Store/actions/user";
import {LoginDto} from "../Models/User";
import {useLocation, useNavigate} from "react-router-dom";

const boxStyle = {
    display: 'grid',
    alignItems: 'center',
    justifySelf: 'center',
    height: '40vh',
    width: '20vw',
    padding: 2,
    border: '2px black solid',
    borderRadius: '10px',
    backgroundColor: '#6092be'
}

const LoginComponent = () => {
    const login = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const handlerLogin = async() => {
        if (login.current?.value && password.current?.value) {
            const user:LoginDto = {login: login.current?.value, password: password.current?.value}
            await dispatch(Login(user))
            const loc = location?.state?.from?.value || '/'
            navigate(loc, {replace: true})
        }
    }
    return (
        <Box sx={{...boxStyle}}>
            <TextField variant='outlined' inputRef={login}/>
            <TextField variant='outlined' inputRef={password}/>
            <Button onClick={handlerLogin}>login</Button>
        </Box>
    );
};

export default LoginComponent;