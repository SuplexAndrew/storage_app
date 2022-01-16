import StorageTableOrderedItemsRow from "./StorageTableOrderedItemsRow";
import {Table, TableBody} from "@mui/material";
import React from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import {OrderItem} from "../../Models/Order";

const StorageTableOrderedItems = () => {
    const {orderedItems} = useAppSelector(state => state.order)

    return (
        <Table>
            <TableBody>
                {orderedItems?.map((item: OrderItem, index: number) =>
                    <StorageTableOrderedItemsRow key={index} orderItem={item} index={index + 1}/>)
                }
            </TableBody>
        </Table>
    );
};

export default StorageTableOrderedItems;