import React from 'react';
import Box from '@mui/material/Box';
import { Grid, TextField } from '@mui/material';
import { cols, LeftForm, RightForm, rows } from './ErForms.jsx';
import Button from '@mui/material/Button';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload.jsx';
import DeliveryTable from '../../components/delivery/DeliveryTable.jsx';

export default function ExportRegularization () {
    const leftForm = React.useRef(null);
    const rightForm = React.useRef(null);

    function handleConfirm (e) {
        const leftFormData = new FormData(leftForm.current);

        const rightFormData = new FormData(rightForm.current);
        for (const [key, value] of leftFormData.entries()) {
            console.log(`${key}: ${value}`);
        }
        for (const [key, value] of rightFormData.entries()) {
            console.log(`${key}: ${value}`);
        }
    }

    return (
        <Box className='p-8 w-full text-left'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold text-secondary-grey'>EXPORT REGULARIZATION</h1>
                <h1 className='text-secondary-grey text-lg'>Exports / Regularization</h1>
            </div>
            <div className='flex flex-row justify-end w-full'>
                <button className='bg-indigo-700 text-white py-2 px-6 rounded-md mt-4 hover:bg-indigo-800 active:bg-indigo-900 hover:shadow-lg'>
                    Relationship Map
                </button>
            </div>
            <Grid container className='mt-4 w-full' justifyContent='space-between'>
                <Grid item xs={5}>
                    <LeftForm formRef={leftForm} />
                </Grid>
                <Grid item xs={5}>
                    <RightForm formRef={rightForm} />
                </Grid>
            </Grid>
            <BrcDetails />
            <div className='grid grid-cols-3 gap-x-4 mt-8 mb-4'>
                <TextField placeholder='Bank Charges' name='senderBankCharges' label='Sender Bank Charges' />
                <TextField placeholder='Bank Charges' name='receiverBankCharges' label='Receiving Bank Charges' />
                <TextField placeholder='Short Value' name='shortPay' label='Short Payment' />
            </div>
            <div className='flex flex-row justify-end'>
                <div className='mt-4 bg-indigo-100 grid grid-cols-4 justify-end grid-rows-3 gap-4 gap-y-2 auto-cols-auto w-fit p-4 w-fit rounded-lg'>
                    <p className='text-xl font-bold text-primary-blue col-span-2'>Invoice Value</p>
                    <p className='text-lg font-bold text-secondary-grey col-span-1'>INR</p>
                    <p className='text-lg font-bold text-secondary-grey col-span-1'>12,000</p>
                    <p className='text-xl font-bold text-primary-blue col-span-2'>BRC Value</p>
                    <p className='text-lg font-bold text-secondary-grey col-span-1'>INR</p>
                    <p className='text-lg font-bold text-secondary-grey col-span-1'>12,000</p>
                    <p className='text-xl font-bold text-primary-blue col-span-2'>Gain/Loss</p>
                    <p className='text-lg font-bold text-secondary-grey col-span-1'>INR</p>
                    <p className='text-lg font-bold text-secondary-grey col-span-1'>12,000</p>
                </div>
            </div>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2'>Upload Documents</h1>
            <DragDropFileUpload />
            <div className='flex my-4'>
                <Button sx={{ background: '#8B99DC', margin: '0 10px' }} variant='contained' onClick={handleConfirm}>
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
}

function BrcDetails () {
    return (
        <>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-4'>BRC Details</h1>
            <DeliveryTable rows={rows} cols={cols} />
        </>
    );
}
