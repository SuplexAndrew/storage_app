import React, {FC, useRef} from 'react';
import {Box, Button, Modal, TextField} from "@mui/material";
import {Item} from "../../Models/Item";
import {useUpdateItemMutation} from "../../Store/services/itemService";

interface IModalProps {
    item: Item
    opened: boolean
    close: () => void
}

const ModalUpdateItem: FC<IModalProps> = ({item, opened, close}) => {
    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const countInStorageRef = useRef<HTMLInputElement>(null)
    const [updateItem] = useUpdateItemMutation()
    const handleUpdate = () => {
        const name = nameRef.current?.value
        const price = Number(priceRef.current?.value)
        const countInStorage = Number(countInStorageRef.current?.value)
        if (name && price && countInStorage) {
            const edited: Item = {id: item.id, name, price, countInStorage}
            updateItem(edited)
        }
        close()
    }
    return (
        <Modal open={opened} onClose={close}>
            <Box sx={{
                display: 'grid',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '35vw',
                p: 3,
                borderRadius: '1vh',
                backgroundColor: 'white'
            }}>
                <TextField variant="standard" label='Name' inputRef={nameRef} defaultValue={item.name}/>
                <TextField variant="standard" label='Price' inputRef={priceRef} defaultValue={item.price}/>
                <TextField variant="standard" label='Count in storage' inputRef={countInStorageRef}
                           defaultValue={item.countInStorage}/>
                <Button onClick={handleUpdate}>Update</Button>
            </Box>
        </Modal>
    );
};

export default ModalUpdateItem;