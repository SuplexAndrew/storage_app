import React, {FC} from 'react';
import {IconButton, TableCell, TableRow} from "@mui/material";
import {Item} from "../../Models/Storage";
import {useDispatch} from "react-redux";

const StorageTableItemsRow:FC<{item: Item, index: number}> = ({item, index}) => {
    const dispatch = useDispatch()
    const AddHandler = () => {
        dispatch({type: 'ADD_ORDER_ITEM', payload: {item, count: 1}})
    }
    return (
        <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.countOnStorage}</TableCell>
            <TableCell><IconButton onClick={AddHandler}>+</IconButton></TableCell>
        </TableRow>
    );
};

export default StorageTableItemsRow;