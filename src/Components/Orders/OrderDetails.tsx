import React, {FC} from 'react';
import {Order} from "../../Models/Order";
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import OrderItem_Details from "./OrderItemDetails";

interface OrderDetailsProps {
    order: Order
}

const OrderDetails: FC<OrderDetailsProps> = ({order}) => {
    const {items, status, createdAt} = order
    return (
        <Box sx={{backgroundColor: 'white', p: 3, mt: 3}}>
            <Box>
                <Typography variant='h6'>
                    {`Заказ от ${new Date(createdAt).toLocaleDateString()}, позиций в заказе ${items.length}, статус заказа - ${status.title}`}
                </Typography>
            </Box>
            <TableContainer sx={{my: 3, border: '2px blue solid', borderRadius: '10px', width: '100%'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Наименование</TableCell>
                            <TableCell>Количество</TableCell>
                            <TableCell>Стоимость</TableCell>
                            <TableCell>Сумма</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            items && items.map((item, i) => <OrderItem_Details key={i} orderItem={item} index={i}/>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default OrderDetails