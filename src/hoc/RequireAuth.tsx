import {Navigate} from "react-router-dom";
import {FC, ReactElement} from "react";
import {useAppSelector} from "../Hooks/useAppSelector";

const RequireAuth:FC<{element:ReactElement}> = ({element}) => {
    const {user} = useAppSelector(state => state.user)

    if (!user) {
        return <Navigate to='/login' />
    }
    return element
}

export {RequireAuth}