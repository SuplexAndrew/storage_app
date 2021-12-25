import React, {FC, useState} from 'react';
import {Box, Button, Modal, TextField} from "@mui/material";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {StorageState} from "../../Models/Item";
import ModalCreateItem from "./ModalCreateItem";

const AdminPanel: FC = () => {
    const {items} = useTypedSelector<StorageState>(state => state.items)
    const [openModal, setOpenModal] = useState(false)
    const handleCloseModal = () => setOpenModal(false)
    return (
        <>
            <Box>
                <h3>{items ? items.length : '1234'}</h3>
                <Button onClick={() => setOpenModal(true)}>Modal</Button>
            </Box>
            <ModalCreateItem opened={openModal} close={handleCloseModal}/>
        </>

    );
};

export default AdminPanel;