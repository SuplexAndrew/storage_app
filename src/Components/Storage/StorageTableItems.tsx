import React, {useCallback, useEffect} from 'react';
import {Table, TableBody} from "@mui/material";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {StorageState} from "../../Models/Item";
import {fetchItems} from "../../Store/actions/items/fetchItems";
import {useDispatch} from "react-redux";
import StorageTableItemsRow from "./StorageTableItemsRow";

const StorageTableItems = () => {
    const dispatch = useDispatch()

    const {items} = useTypedSelector<StorageState>(state => state.items)
    const loadItems = useCallback(() => dispatch(fetchItems()), [dispatch, fetchItems])
    useEffect(() => {
        loadItems()
        console.log(items)
    }, [dispatch, loadItems])
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