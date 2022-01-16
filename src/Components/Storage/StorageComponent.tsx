import React, {FC} from 'react';
import {Box, Button, TableContainer} from "@mui/material";
import StorageTableItems from "./StorageTableItems";
import StorageTableOrderedItems from "./StorageTableOrderedItems";
import {useAppSelector} from "../../Hooks/useAppSelector";
import {useNavigate} from "react-router-dom";
import {useCreateOrderMutation} from "../../Store/services/orderService";

const StorageComponent:FC = () => {
    const {orderedItems} = useAppSelector(state => state.order)
    const navigate = useNavigate()
    const [createOrder] = useCreateOrderMutation()
    const HandlerCreateOrder = async () => {
        if (orderedItems.length === 0) alert('Коризна пуста')
        await createOrder(orderedItems)
        navigate('/orders')
    }
    return (
        <Box sx={{
            display: 'grid',
            position: 'relative',
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: '1vw',
            textAlign: 'center',
            justifyContent: 'center',
            m: 2
        }}>
            <TableContainer sx={{
                borderRadius: 4,
                backgroundColor: 'white'}}>
                <StorageTableItems />
            </TableContainer>

            <TableContainer sx={{
                borderRadius: 4,
                backgroundColor: 'white'}}>
               <StorageTableOrderedItems/>
            </TableContainer>
            <Box sx={{gridColumn: '1/3', my: 10, display: 'block'}}>
                <Button variant="contained" onClick={HandlerCreateOrder}>Заказать</Button>
                <Button variant="contained" >Очистить</Button>
            </Box>
        </Box>
    );
};

export default StorageComponent;