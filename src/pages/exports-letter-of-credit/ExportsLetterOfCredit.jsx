import React from 'react';
import Box from '@mui/material/Box';
import { Tab, Tabs } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { AdditionalInfo, ApplicantInfo, Attachments, DocsInfo, GoodsInfo, LcInfo } from '../../components/exports-letter-of-credit/Tabs';

export default function ExportsLetterOfCredit () {
    const [value, setValue] = React.useState(0);
    const { id } = useParams();

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
        <Box className='p-8 w-full text-left'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'CREATE' : 'EDIT'} LETTER OF CREDIT</h1>
                <h1 className='text-secondary-grey text-lg'>Exports / LC Issuance</h1>
            </div>
            <Box className='flex flex-row items-center mt-4'>
                <Box className='py-2 px-4 bg-status-pink rounded-l-lg border border-status-pink'>
                    <Typography color='white'>Status</Typography>
                </Box>
                <Box className='py-2 px-8 border-t border-r border-b rounded-r-lg border-border-gray'>Open</Box>
            </Box>
            <Box className='w-full mt-4'>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label='Applicant Info' />
                        <Tab label='LC Info' />
                        <Tab label='Goods Info' />
                        <Tab label='Document Info 46A' />
                        <Tab label='Additional Info' />
                        <Tab label='Attachments' />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <ApplicantInfo />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <LcInfo />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <GoodsInfo />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <DocsInfo />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <AdditionalInfo />
                </TabPanel>
                <TabPanel value={value} index={5}>
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
            {value === index && <Box className='p-0'>{children}</Box>}
        </div>
    );
}
