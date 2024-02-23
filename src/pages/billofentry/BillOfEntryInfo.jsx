import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload';
import { useParams } from 'react-router-dom';
import BillOfEntryDetails from './BillOfEntryDetails';
import { SimpleSelect } from '../../utils';
const invoice = [
    { label: 'invoice 1', val: 'invoice1' },
    { label: 'invoice 2', val: 'invoice2' },
    { label: 'invoice 3', val: 'invoice3' },
    { label: 'invoice 4', val: 'invoice4' },
];

const BillOfEntryInfo = () => {
    const { id } = useParams();
    return (
        <Box className='p-8 w-full text-left h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'CREATE ' : 'EDIT '} Bill of Entry</h1>
                <h1 className='text-secondary-grey text-lg'>Imports / Document</h1>
            </div>
            <div className='flex flex-row justify-between w-full'>
                <Box className='flex flex-row items-center mt-4'>
                    <Box className='py-2 px-4 bg-status-pink rounded-l-lg border border-status-pink'>
                        <Typography color='white'>Status</Typography>
                    </Box>
                    <Box className='py-2 px-8 border-t border-r border-b rounded-r-lg border-border-gray'>Open</Box>
                </Box>
                <button className='bg-indigo-700 text-white py-2 px-6 rounded-md mt-4 hover:bg-indigo-800 active:bg-indigo-900 hover:shadow-lg'>
                    Relationship Map
                </button>
            </div>

            <div className='w-[30%] my-8'>
                <SimpleSelect label='BL No.' options={invoice} />
            </div>
            <BillOfEntryDetails />

            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2'>Upload Documents</h1>
            <DragDropFileUpload />
            <div className='flex my-4'>
                <Button sx={{ background: '#8B99DC', margin: '0 10px' }} variant='contained' onClick={() => console.log('handle Confirm')}>
                    Save and confirm
                </Button>
                <Button sx={{ background: '#4257BE', margin: '0 10px' }} variant='contained'>
                    Save as draft
                </Button>
                <Button sx={{ background: '#D84040' }} variant='contained' onClick={() => window.location.reload()}>
                    Cancel
                </Button>
            </div>
        </Box>
    );
};

export default BillOfEntryInfo;
