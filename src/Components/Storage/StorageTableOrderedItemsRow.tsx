import React, {FC, useRef} from 'react';
import {TableCell, TableRow, TextField} from "@mui/material";
import {OrderItem} from "../../Models/Storage";
import {useDispatch} from "react-redux";
import useDebounce from "../../Hooks/useDebounce";

const StorageTableOrderedItemsRow:FC<{orderItem: OrderItem, index: number}> = ({orderItem, index}) => {
    const {item, count} = orderItem
    const dispatch = useDispatch()
    const value = useRef<HTMLInputElement>(null)
    const ChangeCountHandler = useDebounce((value: number) => {
        dispatch({type: 'CHANGE_ORDER_ITEM_COUNT', payload: {item, count: value}})
    }, 1000)
    return (
        <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell ><TextField variant="standard" defaultValue={count} onChange={ChangeCountHandler} inputRef={value}/></TableCell>
            <TableCell>{count * item.price}</TableCell>
        </TableRow>
    );
};

export default StorageTableOrderedItemsRow;