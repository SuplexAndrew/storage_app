import React from 'react';
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {StorageState} from "../../Models/Storage";
import {Table, TableBody} from "@mui/material";
import StorageTableOrderedItemsRow from "./StorageTableOrderedItemsRow";

const StorageTableOrderedItems = () => {
    const {ordered} = useTypedSelector<StorageState>(state => state.storage)

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