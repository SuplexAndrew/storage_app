import {useTypedSelector} from "./useTypedSelector";
import {UserState} from "../Models/User";

export default function useAuth() {
    const {user} = useTypedSelector<UserState>(state => state.user)
    return user
}