import React, {useEffect} from 'react';
import {Table, TableBody} from "@mui/material";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {StorageState} from "../../Models/Storage";
import {fetchItems} from "../../Store/actions/storage/fetchItems";
import {useDispatch} from "react-redux";
import StorageTableItemsRow from "./StorageTableItemsRow";

const StorageTableItems = () => {
    const dispatch = useDispatch()

    const {items} = useTypedSelector<StorageState>(state => state.storage)
    useEffect(() => {
        if (!items) {
            dispatch(fetchItems())
        }
    }, [items])
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