import React from 'react';
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel, FormGroup, Grid, Tab, Tabs, TextField } from '@mui/material';
import { LeftForm, RightForm } from '../../components/trade-credit-insurance/Forms.jsx';
import Button from '@mui/material/Button';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload.jsx';
import { SimpleDatePicker, SimpleSelect, SimpleTextArea } from '../../utils/index.jsx';
import { useParams } from 'react-router-dom';
import { availableByOptions, lcCurrencyOptions, popSelectOptions, sightOptions } from '../../components/trade-credit-insurance/data.js';
import Typography from '@mui/material/Typography';
import { CountryTab, CustomerTab, PolicyTab, TransactionTab } from '../../components/trade-credit-insurance/Tabs.jsx';

export default function TradeCreditInsurance () {
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

    return (
        <Box className='p-8 w-full text-left h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold text-secondary-grey'>ECGC TRADE CREDIT INSURANCE</h1>
                <h1 className='text-secondary-grey text-lg'>Exports / ECGC</h1>
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
            <Box className='w-full mt-4'>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                        <Tab label='Transaction' />
                        <Tab label='Customer' />
                        <Tab label='Country' />
                        <Tab label='Policy' />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <TransactionTab />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CustomerTab />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <CountryTab />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <PolicyTab />
                </TabPanel>
            </Box>
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

function TabPanel (props) {
    const { children, value, index } = props;

    return (
        <div role='tabpanel' hidden={value !== index}>
            {value === index && <Box className='p-4'>{children}</Box>}
        </div>
    );
}
