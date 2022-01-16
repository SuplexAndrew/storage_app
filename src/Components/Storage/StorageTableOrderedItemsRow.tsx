import React, {FC, useEffect, useState} from 'react';
import {TableCell, TableRow, TextField} from "@mui/material";
import {useAppDispatch} from "../../Store";
import {changeOrderItemCount} from "../../Store/slices/orderSlice";
import {OrderItem} from "../../Models/Order";

const StorageTableOrderedItemsRow: FC<{ orderItem: OrderItem, index: number }> = ({orderItem, index}) => {
    const {item, count} = orderItem
    const dispatch = useAppDispatch()
    const [value, setValue] = useState<number>(1)
    useEffect(() => {
        setValue(count)
    }, [count])
    const ChangeCountHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = Number(event.target.value)
        setValue(value)
        dispatch(changeOrderItemCount({changedItem:orderItem, newCount:value}))
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