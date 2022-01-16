import React from 'react';
import {Table, TableBody} from "@mui/material";
import StorageTableItemsRow from "./StorageTableItemsRow";
import {useGetItemsQuery} from "../../Store/services/itemService";

const StorageTableItems = () => {
    const {data: items} = useGetItemsQuery()
    return (
        <Table>
            <TableBody>
                {items?.map((item, index) =>
                    <StorageTableItemsRow key={item.id} item={item} index={index + 1}/>)
                }
            </TableBody>
        </Table>
    );
};

export default StorageTableItems;