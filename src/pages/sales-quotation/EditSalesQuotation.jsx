import React from 'react';
import SalesQuotationTopSection from '../../components/sales-quotation/SalesQuotationTopSection';
import SQProduct from '../../components/sales-quotation/SQProduct';
import SQPrice from '../../components/sales-quotation/SQPrice';
import SQAuthority from '../../components/sales-quotation/SQAuthority';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload';
import { Box, Button, Typography } from '@mui/material';

const EditSalesQuotation = () => {
    return (
        <div className='w-full p-8 h-screen !overflow-y-scroll no-scrollbar'>
            <div className='my-4'>
                <div className='flex justify-between  my-6'>
                    <h1 className='text-xl font-bold text-secondary-grey'> QUOTATION</h1>
                    <h1 className='text-secondary-grey text-lg'>Export / Advance</h1>
                </div>
                <div className='flex justify-between'>
                    <Box className='flex flex-row items-center mt-4'>
                        <Box className='py-2 px-4 bg-status-pink rounded-l-lg border border-status-pink'>
                            <Typography color='white'>Status</Typography>
                        </Box>
                        <Box className='py-2 px-8 border-t border-r border-b rounded-r-lg border-border-gray'>Open</Box>
                    </Box>
                    <div className='flex'>
                        <div className='p-4 flex justify-center cursor-pointer bg-blue-800 rounded-md mr-4 text-white'>Link to SO</div>
                        <div className='p-4 flex justify-center cursor-pointer bg-blue-800 rounded-md text-white'>Relationship Map</div>
                    </div>
                </div>
            </div>
            <SalesQuotationTopSection />
            <SQProduct />
            <SQPrice />
            <SQAuthority />
            <DragDropFileUpload />
            <div className='flex my-4'>
                <Button sx={{ background: '#8B99DC', margin: '0 10px' }} variant='contained' onClick={() => console.log('Save')}>
                    Save and confirm
                </Button>
                <Button sx={{ background: '#4257BE', margin: '0 10px' }} variant='contained'>
                    Save as draft
                </Button>
                <Button sx={{ background: '#D84040' }} variant='contained' onClick={() => window.location.reload()}>
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default EditSalesQuotation;
