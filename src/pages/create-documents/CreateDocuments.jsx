import React from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload.jsx';
import { EditableText, SimpleDatePicker, SimpleSelect, SimpleTextbox } from '../../utils/index.jsx';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import DeliveryTable from '../../components/delivery/DeliveryTable.jsx';
import { exportShipmentPlanTableColumns, exportShipmentPlanTalbeRows } from '../../api/delivery/data.js';

export default function ExportsCreateDocuments () {
    const { id } = useParams();

    return (
        <Box className='p-8 w-full text-left h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'CREATE ' : 'EDIT '} DOCUMENTS</h1>
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
            <div className='grid grid-cols-4 my-8'>
                <SimpleSelect
                    label='Received At'
                    options={[
                        { label: 'Bank', val: 'bank' },
                        { label: 'Company', val: 'company' },
                    ]}
                />
            </div>
            <BankDetails />
            <DocumentDetails />
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2'>Upload Documents</h1>
            <DragDropFileUpload />
            <div className='flex my-4'>
                <Button sx={{ background: '#8B99DC', margin: '0 10px' }} variant='contained'>
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

function BankDetails () {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p className='text-xl font-bold text-secondary-grey'>Bank Details</p>
            </AccordionSummary>
            <AccordionDetails className='flex flex-col gap-y-4'>
                <div className='grid grid-cols-3 gap-4 items-end'>
                    <SimpleSelect
                        label='Receiving Bank'
                        name='receivingPort'
                        options={[
                            { label: 'bank1', val: 'port1' },
                            { label: 'port1', val: 'port1' },
                        ]}
                    />
                    <SimpleTextbox
                        label='Bank Intimation No.'
                        placeholder='enter number'
                        className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg'
                    />
                    <SimpleDatePicker label='Intimation Date' name='intimationDate' />
                    <SimpleDatePicker label='Document Clearing Date' name='clearingDate' />
                    <div></div>
                    <div></div>
                    <SimpleSelect label='Document Charge' options={[{ label: 'charge1', val: 'charge1' }]} />
                    <SimpleTextbox
                        label='Bank Clearing Charge'
                        placeholder='Enter bank clearing charge'
                        className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg'
                    />
                    <SimpleTextbox
                        label='Other charge'
                        placeholder='other charge'
                        className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg'
                    />
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

function DocumentDetails () {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p className='text-xl font-bold text-secondary-grey'>Document Details</p>
            </AccordionSummary>
            <AccordionDetails className='flex flex-col gap-y-4'>
                <div className='grid grid-cols-3 gap-4 items-end'>
                    <SimpleSelect
                        label='BL Number'
                        name='receivingPort'
                        options={[
                            { label: 'BL1', val: 'port1' },
                            { label: 'BL2', val: 'port1' },
                        ]}
                    />
                    <SimpleTextbox
                        label='Value'
                        placeholder='enter value'
                        className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg'
                    />
                    <SimpleSelect
                        label='Select Currency'
                        name='receivingPort'
                        options={[
                            { label: 'rupee', val: 'port1' },
                            { label: 'dollar', val: 'port1' },
                        ]}
                    />
                    <SimpleTextbox
                        label='Conversion Rate'
                        placeholder='Enter conversion Rate'
                        className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg'
                    />
                </div>
            </AccordionDetails>
        </Accordion>
    );
}
