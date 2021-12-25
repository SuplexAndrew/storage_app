import React, {FC, useState} from 'react';
import {TableCell, TableRow, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {OrderItem} from "../../Models/Order";

const StorageTableOrderedItemsRow: FC<{ orderItem: OrderItem, index: number }> = ({orderItem, index}) => {
    const [{item, count}] = useState<OrderItem>(orderItem)
    // console.log(count)
    const dispatch = useDispatch()
    const [value, setValue] = useState<number>(count)
    const ChangeCountHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = Number(event.target.value)
        setValue(value)
        dispatch({type: 'CHANGE_ORDER_ITEM_COUNT', payload: {item, count: value}})
    }
    return (
        <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
                <TextField variant="standard" defaultValue={value}
                                  onChange={ChangeCountHandler}/>
            </TableCell>
            <TableCell>{count * item.price}</TableCell>
        </TableRow>
    );
};

export default StorageTableOrderedItemsRow;