import {Navigate} from "react-router-dom";
import {FC, ReactElement} from "react";
import {useAppSelector} from "../Hooks/useAppSelector";

const RequireAdminRole:FC<{element:ReactElement}> = ({element}) => {
    const {user} = useAppSelector(state => state.user)

    if (!user && user?.role?.value !== 1) {
        return <Navigate to='/login' />
    }
    return element
}

export {RequireAdminRole}