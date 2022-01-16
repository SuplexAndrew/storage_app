import React, {useRef} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useLoginMutation, useRegisterMutation} from "../Store/services/authService";
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
    backgroundColor: '#e7cdab'
}

const LoginComponent = () => {
    const login = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [loginUser, {isLoading: loginLoading}] = useLoginMutation()
    const [registrationUser, {isLoading: registrationLoading}] = useRegisterMutation()
    const location = useLocation()
    const navigate = useNavigate()
    const handlerLogin = async () => {
        if (login.current?.value && password.current?.value) {
            const user: LoginDto = {login: login.current?.value, password: password.current?.value}
            await loginUser(user)
            const loc = location?.state?.from?.value || '/'
            navigate(loc, {replace: true})
        }
    }
    const handlerRegistration = async () => {
        if (login.current?.value && password.current?.value) {
            const user: LoginDto = {login: login.current?.value, password: password.current?.value}
            await registrationUser(user)
            const loc = location?.state?.from?.value || '/'
            navigate(loc, {replace: true})
        }
    }
    return (
        <Box sx={{...boxStyle}}>
            {(loginLoading && registrationLoading) ?
                <h1>'Loading...'</h1> :
                <>
                    <TextField sx={{backgroundColor: 'white'}} id='standard-basic' label='Login' inputRef={login}/>
                    <TextField sx={{backgroundColor: 'white'}} id='standard-password-input' label='Password'
                               inputRef={password}/>
                    <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                        <Button sx={{width: '8vw'}} variant="contained" onClick={handlerLogin}>Login</Button>
                        <Button sx={{width: '8vw'}} variant="contained" onClick={handlerRegistration}>Registration</Button>
                    </Box>
                </>}
        </Box>
    );
};

export default LoginComponent;