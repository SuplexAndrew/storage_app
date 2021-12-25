import {useTypedSelector} from "./useTypedSelector";

export default function useLoading():boolean {
    const {loading: loadingUser} = useTypedSelector(state => state.user)
    const {loading: loadingItems} = useTypedSelector(state => state.items)
    const {loading: loadingOrders} = useTypedSelector(state => state.orders)
    return loadingUser || loadingItems || loadingOrders
}