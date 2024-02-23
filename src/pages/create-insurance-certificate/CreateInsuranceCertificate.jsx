import React from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload.jsx';
import { SimpleDatePicker } from '../../utils/index.jsx';

export default function CreateInsuranceCertificate () {
    const { id } = useParams();
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
        <Box className='p-8 w-full text-left h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'CREATE ' : 'EDIT '} INSURANCE CERTIFICATE / UTILIZATION</h1>
                <h1 className='text-secondary-grey text-lg'>Exports / Add Insurance Certificate</h1>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-4'>
                <TextField label='Transaction Type' />
                <TextField label='Insurance Policy Number' placeholder='policy no.' />
                <TextField label='Insurance Certificate Number' placeholder='cert no.' />
                <SimpleDatePicker label='Insurance Certificate Date' name='certDate' />
                <TextField label='Invoice Number' placeholder='invoice no.' />
                <TextField label='Insured Amount' placeholder='insured no.' />
                <TextField label='Insured Value %' placeholder='insured value %' />
                <TextField label='Premium Amount' placeholder='amt' />
                <TextField label='Premium Value %' placeholder='premium value %' />
                <TextField label='BL/AWB Number' placeholder='enter number' />
                <TextField label='Shipping Bill Number' placeholder='enter number' />
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
