import React from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { LeftForm, RightForm } from './ShipmentForms.jsx';
import Button from '@mui/material/Button';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload.jsx';
import { EditableText, SimpleDatePicker, SimpleSelect, SimpleTextbox } from '../../utils/index.jsx';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import DeliveryTable from '../../components/delivery/DeliveryTable.jsx';
import { exportShipmentPlanTableColumns, exportShipmentPlanTalbeRows } from '../../api/delivery/data.js';

export default function ExportsCreateShipment () {
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
                <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'CREATE ' : 'EDIT '} SHIPMENT PLAN</h1>
                <h1 className='text-secondary-grey text-lg'>Exports / Shipment</h1>
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
            <Grid container className='mt-4 w-full' justifyContent='space-between'>
                <Grid item xs={5}>
                    <LeftForm formRef={leftForm} />
                </Grid>
                <Grid item xs={5}>
                    <RightForm formRef={rightForm} />
                </Grid>
            </Grid>
            <ShipmentDetails />
            <ContainerDetails />
            <ProductLine />
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

function ProductLine () {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p className='text-xl font-bold text-secondary-grey'>Product Line Items</p>
            </AccordionSummary>
            <AccordionDetails className='flex flex-col gap-y-4'>
                <DeliveryTable rows={exportShipmentPlanTalbeRows} cols={exportShipmentPlanTableColumns} />
            </AccordionDetails>
        </Accordion>
    );
}

function ContainerDetails () {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p className='text-xl font-bold text-secondary-grey'>Container Details</p>
            </AccordionSummary>
            <AccordionDetails className='flex flex-col gap-y-4'>
                <div className='grid grid-cols-3 gap-4 items-end'>
                    <SimpleTextbox
                        label='No. of container'
                        placeholder='Cubic meter'
                        className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg'
                    />
                    <SimpleSelect
                        label='Container Type'
                        name='containerType'
                        options={[
                            { label: 'India', val: 'india' },
                            { label: 'China', val: 'china' },
                        ]}
                    />
                    <SimpleTextbox
                        label='Container number'
                        placeholder='container number'
                        className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg'
                    />
                    <SimpleDatePicker label='ETA' name='eta' />
                    <SimpleDatePicker label='ETD' name='etd' />
                    <SimpleTextbox
                        label='Remarks'
                        placeholder='Remarks'
                        className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg'
                    />
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

function ShipmentDetails () {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p className='text-xl font-bold text-secondary-grey'>Shipment Details</p>
            </AccordionSummary>
            <AccordionDetails className='flex flex-col gap-y-4'>
                <div className='grid grid-cols-3 gap-x-4'>
                    <SimpleSelect
                        label='Receiving Port'
                        name='receivingPort'
                        options={[
                            { label: 'port1', val: 'port1' },
                            { label: 'port1', val: 'port1' },
                        ]}
                    />
                    <SimpleTextbox
                        label='Vessel Name'
                        placeholder='Enter name'
                        className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg'
                    />
                    <SimpleSelect
                        label='Country of origin'
                        name='country'
                        options={[
                            { label: 'India', val: 'india' },
                            { label: 'China', val: 'china' },
                        ]}
                    />
                </div>
            </AccordionDetails>
        </Accordion>
    );
}
