import React, {FC} from 'react';
import {Box, TableContainer} from "@mui/material";
import StorageTableItems from "./StorageTableItems";
import StorageTableOrderedItems from "./StorageTableOrderedItems";

const StorageComponent:FC = () => {

    return (
        <Box sx={{
            display: 'grid',
            position: 'relative',
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: '1vw',
            textAlign: 'center',
            justifyContent: 'center',
            m: 2
        }}>
            <TableContainer sx={{
                borderRadius: 4,
                backgroundColor: 'white'}}>
                <StorageTableItems />
            </TableContainer>

            <TableContainer sx={{
                borderRadius: 4,
                backgroundColor: 'white'}}>
               <StorageTableOrderedItems/>
            </TableContainer>
        </Box>
    );
};

export default StorageComponent;