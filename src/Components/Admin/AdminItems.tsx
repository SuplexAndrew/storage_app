import React, {FC} from 'react';
import {useGetItemsQuery} from "../../Store/services/itemService";
import {Table, TableBody} from "@mui/material";
import AdminItemsRow from "./AdminItemsRow";
import {Item} from "../../Models/Item";

interface AdminItemsProps {
    edit: (item: Item) => void
}

const AdminItems:FC<AdminItemsProps> = ({edit}) => {
    const {data: items} = useGetItemsQuery()
    return (
        <Table>
            <TableBody>
                {items?.map((item, index) =>
                    <AdminItemsRow key={item.id} item={item} index={index + 1} edit={edit}/>)
                }
            </TableBody>
        </Table>
    );
};

export default AdminItems;