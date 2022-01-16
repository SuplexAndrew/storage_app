import React, {FC, useRef} from 'react';
import {Box, Button, Modal, TextField} from "@mui/material";
import {ItemDto} from "../../Models/Item";
import {useCreateItemMutation} from "../../Store/services/itemService";

interface IModalProps {
    opened: boolean
    close: () => void
}

const ModalCreateItem: FC<IModalProps> = ({opened, close}) => {
    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const countOnStorageRef = useRef<HTMLInputElement>(null)
    const [createItem] = useCreateItemMutation()
    const handleCreate = () => {
        const name = nameRef.current?.value
        const price = Number(priceRef.current?.value)
        const countInStorage = Number(countOnStorageRef.current?.value)
        if (name && price && countInStorage) {
            const item: ItemDto = {name, price, countInStorage}
            createItem(item)
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
                <TextField variant="standard" label='Name' inputRef={nameRef}/>
                <TextField variant="standard" label='Price' inputRef={priceRef}/>
                <TextField variant="standard" label='Count in storage' inputRef={countOnStorageRef}/>
                <Button onClick={handleCreate}>Create</Button>
            </Box>
        </Modal>
    );
};

export default ModalCreateItem;