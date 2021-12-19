import {useTypedSelector} from "./useTypedSelector";

export default function useLoading():boolean {
    const {loading: loadingUser} = useTypedSelector(state => state.user)
    const {loading: loadingStorage} = useTypedSelector(state => state.storage)
    return loadingUser || loadingStorage
}