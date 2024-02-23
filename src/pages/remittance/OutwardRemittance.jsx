import { Box, Button, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { SimpleSelect } from '../../utils';
import { BankDetails, RemittanceDetails, OtherDetails, Attachments } from './Tabs';

export default function OutwardRemittance () {
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

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    const vendorName = [
        { label: 'vendor 1', val: 'vendor1' },
        { label: 'vendor 2', val: 'vendor2' },
        { label: 'vendor 3', val: 'vendor3' },
        { label: 'vendor 4', val: 'vendor4' },
    ];
    const outwardRemittanceId = [
        { label: 'Outward RemittanceId 1', val: 'outRemId1' },
        { label: 'Outward RemittanceId 2', val: 'outRemId2' },
        { label: 'Outward RemittanceId 3', val: 'outRemId3' },
        { label: 'Outward RemittanceId 4', val: 'outRemId4' },
    ];

    return (
        <Box className='p-8 w-full text-left h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'CREATE ' : 'EDIT '} LETTER OF CREDIT</h1>
                <h1 className='text-secondary-grey text-lg'>Exports / Shipment</h1>
            </div>
            <div className='flex flex-row justify-between w-full'>
                <Box className='flex flex-row items-center mt-4'>
                    <Box className='py-2 px-4 bg-status-pink rounded-l-lg border border-status-pink'>
                        <Typography color='white'>Status</Typography>
                    </Box>
                    <Box className='py-2 px-8 border-t border-r border-b rounded-r-lg border-border-gray'>Open</Box>
                </Box>
            </div>
            <Grid container className='mt-4 w-full' justifyContent='space-between'>
                <Grid item xs={5}>
                    <SimpleSelect name='vendorName' label='Vendor Name' options={vendorName} />
                </Grid>
                <Grid item xs={5}>
                    <Paper className='p-4'>
                        <SimpleSelect name='outwardRemittanceId' label='Outward Remittance Id' options={outwardRemittanceId} />
                    </Paper>
                </Grid>
            </Grid>
            <Box className='w-full mt-4'>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                        <Tab label='Bank Details' />
                        <Tab label='Remittance Details' />
                        <Tab label='Other Details' />
                        <Tab label='Attachments' />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <BankDetails />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RemittanceDetails />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <OtherDetails />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Attachments />
                </TabPanel>
            </Box>
            <div className='flex my-4'>
                <Button sx={{ background: '#8B99DC', margin: '0 10px' }} variant='contained' onClick={handleConfirm}>
                    Save and confirm
                </Button>
                <Button sx={{ background: '#4257BE', margin: '0 10px' }} variant='contained'>
                    Save as draft
                </Button>
                <Button sx={{ background: '#D84040' }} variant='contained'>
                    Cancel
                </Button>
            </div>
        </Box>
    );
}

function TabPanel (props) {
    const { children, value, index } = props;

    return (
        <div role='tabpanel' hidden={value !== index}>
            {value === index && <Box className='p-4'>{children}</Box>}
        </div>
    );
}
