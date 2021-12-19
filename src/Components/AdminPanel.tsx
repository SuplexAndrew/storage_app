import React, {FC} from 'react';
import {Box} from "@mui/material";
import {useTypedSelector} from "../Hooks/useTypedSelector";
import {StorageState} from "../Models/Storage";

const AdminPanel:FC = () => {
    const {items} = useTypedSelector<StorageState>(state => state.storage)

    return (
        <Box>
            <h3>{items ? items.length : '1234'}</h3>
        </Box>
    );
};

export default AdminPanel;