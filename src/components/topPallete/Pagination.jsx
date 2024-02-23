import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationOnPages = () => {
    return (
        <div>
            <Stack spacing={2} direction='row'>
                <Pagination count={10} />
            </Stack>
        </div>
    );
};

export default PaginationOnPages;
