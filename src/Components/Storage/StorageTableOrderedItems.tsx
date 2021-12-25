import StorageTableOrderedItemsRow from "./StorageTableOrderedItemsRow";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {Table, TableBody} from "@mui/material";
import {OrderState} from "../../Models/Order";
import React from 'react';

const StorageTableOrderedItems = () => {
    const {ordered} = useTypedSelector<OrderState>(state => state.orders)
    return (
        <Table>
            <TableBody>
                {ordered?.map((item, index )=>
                    <StorageTableOrderedItemsRow key={index} orderItem={item} index={index + 1}/>)
                }
            </TableBody>
        </Table>
    );
};

export default StorageTableOrderedItems;