import React, {FC} from 'react';
import {IconButton, TableCell, TableRow} from "@mui/material";
import {Item} from "../../Models/Item";
import {addToOrder} from "../../Store/slices/orderSlice";
import {useAppDispatch} from "../../Store";

const StorageTableItemsRow:FC<{item: Item, index: number}> = ({item, index}) => {
    const dispatch = useAppDispatch()
    return (
        <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.countInStorage}</TableCell>
            <TableCell><IconButton sx={{height: '3.25vh'}} onClick={() => dispatch(addToOrder(item))}>+</IconButton></TableCell>
        </TableRow>
    );
};

export default StorageTableItemsRow;