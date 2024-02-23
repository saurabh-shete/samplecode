import React from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { LeftForm, RightForm } from './ShipmentForms.jsx';
import Button from '@mui/material/Button';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload.jsx';
import { EditableText, SimpleDatePicker, SimpleSelect } from '../../utils/index.jsx';

export default function CreateShipment () {
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
            <PostShipmentDetails />
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

function PostShipmentDetails () {
    return (
        <>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-4 border-b'>Post-Shipment Details</h1>
            <div className='grid grid-cols-3 gap-x-4'>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Tentative Freight</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Tentative Freight' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Freight Currency</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='USD' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Tentative Vessel Name</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Tentative Vessel Name' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Tentative Vessel ETA</p>
                    <div className='text-secondary-grey col-span-4'>
                        <SimpleDatePicker label='Tentative vessel eta' name='tentativeVesselETA' />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Tentative Vessel ETD</p>
                    <div className='text-secondary-grey col-span-4'>
                        <SimpleDatePicker label='Tentative vessel etd' name='tentativeVesselETD' />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>BL Received by company</p>
                    <div className='text-secondary-grey col-span-4'>
                        <SimpleDatePicker label='BL Received by company' name='blReceivedByCompany' />
                    </div>
                </div>
            </div>
        </>
    );
}

function ContainerDetails () {
    return (
        <>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-4 border-b'>Container Details</h1>
            <div className='grid grid-cols-3 gap-x-4'>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Cubic Meter</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Cubic Meter' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Container type</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='40ft half height' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>No. of container</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='2' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Container no.</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='1242' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Vehicle No.</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='MP09CV9302' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Mobile No.</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='8393049942' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Stuffing Info</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Stuffing Instructions' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Carting Point</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Carting Point' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Remarks</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Remarks' padding={2} />
                    </div>
                </div>
            </div>
        </>
    );
}

function ShipmentDetails () {
    return (
        <>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-4 border-b'>Shipment Details</h1>
            <div className='grid grid-cols-3 gap-x-4'>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Ship-to-party</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Ship-to-party' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Currency</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Currency' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Partner Name</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Partner Name' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Ship Net Weight</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='1000 kg' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Ship Gross Weight</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='1200 kg' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>No. of Pallet</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='12' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>UOM</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='kg' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Loose Name</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Shipping Seal No.' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Ship Net Weight</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='By Sea' padding={2} />
                    </div>
                </div>
            </div>
        </>
    );
}
