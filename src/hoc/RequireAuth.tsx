import {Navigate} from "react-router-dom";
import {FC, ReactElement} from "react";
import useAuth from "../Hooks/useAuth";

const RequireAuth:FC<{element:ReactElement}> = ({element}) => {
    const user = useAuth()
    console.log(element)
    if (!user) {
        return <Navigate to='/login' />
    }
    return element
}

export {RequireAuth}