import React, {FC} from 'react';
import {IconButton, TableCell, TableRow} from "@mui/material";
import {Item} from "../../Models/Item";
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDeleteItemMutation} from "../../Store/services/itemService";

const AdminItemsRow: FC<{ item: Item, index: number, edit: (item:Item) => void }> = ({item, index, edit}) => {
    const [deleteItem] = useDeleteItemMutation()
    return (
        <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.countInStorage}</TableCell>
            <TableCell>
                <IconButton sx={{height: '3.25vh'}}
                            onClick={() => edit(item)}><UpdateIcon/></IconButton>
            </TableCell>
            <TableCell>
                <IconButton sx={{height: '3.25vh'}}
                                   onClick={() => deleteItem(item.id)}><DeleteIcon/></IconButton>
            </TableCell>
        </TableRow>
    );
};

export default AdminItemsRow;