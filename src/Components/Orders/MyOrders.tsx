import React, {useState} from 'react';
import {useGetOrdersQuery} from "../../Store/services/orderService";
import OrderComponent from "./OrderComponent";
import {Box} from "@mui/material";
import {Order} from "../../Models/Order";
import OrderDetails from "./OrderDetails";

const ordersBoxStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '80vh'
}

const MyOrders = () => {
    const {data: orders} = useGetOrdersQuery()
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
    const HandlerSelectOrderForDetails = (order: Order): void => {
        setSelectedOrder(order)
    }
    return (
        <Box sx={{...ordersBoxStyles}}>
            <Box>
                {
                    orders && orders.map(order => <OrderComponent key={order.id} order={order}
                                                                  selected={order === selectedOrder}
                                                                  selectOrder={HandlerSelectOrderForDetails}/>)
                }
            </Box>
            <Box>
                {selectedOrder && <OrderDetails order={selectedOrder}/>}
            </Box>
        </Box>
    );
};

export default MyOrders;