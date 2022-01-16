import React, {FC} from 'react';
import {Order} from "../../Models/Order";
import {Box, Typography} from "@mui/material";

interface OrderComponentProps {
    order: Order
    selected: boolean
    selectOrder: (order: Order) => void
}

const ordersBoxStyles = {
    borderRadius: '8px',
    m: 3,
    p: 2,
}

const OrderComponent: FC<OrderComponentProps> = ({order, selected, selectOrder}) => {
    const {items, status, createdAt} = order

    return (
        <Box sx={{backgroundColor: selected ? '#ff6a76' : '#e7cdab', ...ordersBoxStyles}} onClick={() => selectOrder(order)}>
            <Typography variant='h6'>
                {`Заказ от ${new Date(createdAt).toLocaleDateString()}, позиций в заказе ${items.length}, статус заказа - ${status.title}`}
            </Typography>
        </Box>
    );
};

export default OrderComponent;