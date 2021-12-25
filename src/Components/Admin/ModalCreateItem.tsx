import React, {FC, useRef} from 'react';
import {Box, Button, Modal, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {createItem} from "../../Store/actions/items/createItem";
import {ItemDto} from "../../Models/Item";

interface IModalProps {
    opened: boolean
    close: () => void
}

const ModalCreateItem: FC<IModalProps> = ({opened, close}) => {
    const dispatch = useDispatch()
    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const countOnStorageRef = useRef<HTMLInputElement>(null)
    const handleCreate = () => {
        const name = nameRef.current?.value
        const price = Number(priceRef.current?.value)
        const countOnStorage = Number(countOnStorageRef.current?.value)
        if (name && price && countOnStorage) {
            const user: ItemDto = {name, price, countOnStorage}
            dispatch(createItem(user))
        }
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
                <TextField variant="standard" label='Count on storage' inputRef={countOnStorageRef}/>
                <Button onClick={handleCreate}>Create</Button>
            </Box>
        </Modal>
    );
};

export default ModalCreateItem;