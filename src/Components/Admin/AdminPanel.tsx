import React, {FC, useState} from 'react';
import {Box, Button} from "@mui/material";
import ModalCreateItem from "./ModalCreateItem";
import AdminItems from "./AdminItems";
import ModalUpdateItem from "./ModalUpdateitem";
import {Item} from "../../Models/Item";

const AdminPanel: FC = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    const [editedItem, setEditedItem] = useState<Item | null>(null)
    const handleCloseModal = () => {
        setOpenUpdateModal(false)
        setEditedItem(null)
        setOpenModal(false)
    }
    const HandleEditItem = (item: Item) => {
        setEditedItem(item)
        setOpenUpdateModal(true)
    }
    return (
        <>
            <Box sx={{backgroundColor: '#fff', p: 1, m: 1}}>
                <AdminItems edit={HandleEditItem}/>
                <Button onClick={() => setOpenModal(true)}>Создать</Button>
            </Box>
            <ModalCreateItem opened={openModal} close={handleCloseModal}/>
            {editedItem && <ModalUpdateItem item={editedItem} opened={openUpdateModal} close={handleCloseModal}/>}
        </>

    );
};

export default AdminPanel;