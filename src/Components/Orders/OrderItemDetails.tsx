import React, {FC} from 'react';
import {TableCell, TableRow} from "@mui/material";
import {OrderItem} from "../../Models/Order";

const OrderItemDetails: FC<{ orderItem: OrderItem, index: number }> = ({orderItem, index}) => {
    const {item, count} = orderItem

    return (
        <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{count}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{count * item.price}</TableCell>
        </TableRow>
    );
};

export default OrderItemDetails;