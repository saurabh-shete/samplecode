import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { SimpleSelect, SimpleTextArea, SimpleTextbox } from '../../utils/index.jsx';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import DeliveryTable from '../../components/delivery/DeliveryTable.jsx';
import { Button } from '@mui/material';

const cols = [
    { label: 'BOE No', property: 'boeNo' },
    { label: 'BOE Date', property: 'boeDate' },
    { label: 'Currency', property: 'currency' },
    { label: 'Amount', property: 'amount' },
    { label: 'Outstanding Amount', property: 'outstandingAmount' },
    { label: 'No of Vendor Bills', property: 'vendorBillsNo' },
    { label: 'Vendor Bill Details', property: 'vendorBillDetails' },
];

const rows = [
    {
        boeNo: 98294,
        boeDate: '20-05-2023',
        currency: 'USD',
        amount: 15000,
        outstandingAmount: 12000,
        vendorBillsNo: 3,
        vendorBillDetails: '...',
    },
];

const invoiceTableHeader = [
    { label: 'Vendor Invoice Number', val: 'Vendor Invoice Number' },
    { label: 'Invoice Date', val: 'Invoice Date' },
    { label: 'Invoice Currency', val: 'Invoice Currency' },
    { label: 'Invoice Amount', val: 'Invoice Amount' },
    { label: 'Regularized Amount', val: 'Regularized Amount' },
    { label: 'Outstanding Amount', val: 'Outstanding Amount' },
];

const headerData = ['INV-FY23-0002', '23/06/23', 'USD', '7000', '2400', '2500'];

const childCols = [
    { label: 'Remittance No', property: 'Remittance No' },
    { label: 'Remittance Currency', property: 'Remittance Currency' },
    { label: 'Amount', property: 'Amount' },
    { label: 'Remittance Date', property: 'Remittance Date' },
    { label: 'Outstanding Amount', property: 'outstandingAmount' },
    { label: 'Amount to be utilized', property: 'Amount to be utilized' },
    { label: 'Remitter Name', property: 'Remitter Name' },
    { label: 'Remittance Bank', property: 'Remittance Bank' },
];

const childRows = [
    {
        'Remittance No': 'ZD81062ZD92072771',
        'Remittance Currency': 'USD',
        Amount: 1000,
        'Remittance Date': '24-DEC-2023',
        outstandingAmount: 12334,
        'Amount to be utilized': 300,
        'Remitter Name': 'Customer 1',
        'Remittance Bank': 'ICICI Bank',
    },
    {
        'Remittance No': 'ZD81062ZD92072771',
        'Remittance Currency': 'USD',
        Amount: 1000,
        'Remittance Date': '24-DEC-2023',
        outstandingAmount: 12334,
        'Amount to be utilized': 300,
        'Remitter Name': 'Customer 1',
        'Remittance Bank': 'ICICI Bank',
    },
    {
        'Remittance No': 'ZD81062ZD92072771',
        'Remittance Currency': 'USD',
        Amount: 1000,
        'Remittance Date': '24-DEC-2023',
        outstandingAmount: 12334,
        'Amount to be utilized': 300,
        'Remitter Name': 'Customer 1',
        'Remittance Bank': 'ICICI Bank',
    },
    {
        'Remittance No': 'ZD81062ZD92072771',
        'Remittance Currency': 'USD',
        Amount: 1000,
        'Remittance Date': '24-DEC-2023',
        outstandingAmount: 12334,
        'Amount to be utilized': 300,
        'Remitter Name': 'Customer 1',
        'Remittance Bank': 'ICICI Bank',
    },
];

export default function MapBoe () {
    return (
        <Box className='p-8 w-full text-left h-screen !overflow-y-scroll no-scrollbar'>
            <h1 className='text-xl font-bold text-secondary-grey'>MAP BOE AGAINST REMITTANCE</h1>
            <Box className='flex flex-row items-center mt-4'>
                <Box className='py-2 px-4 bg-status-pink rounded-l-lg border border-status-pink'>
                    <Typography color='white'>Status</Typography>
                </Box>
                <Box className='py-2 px-8 border-t border-r border-b rounded-r-lg border-border-gray'>Open</Box>
            </Box>
            <div className='grid grid-cols-4 gap-4 my-4'>
                <SimpleSelect name='vendor' label='Vendor Name' options={[{ label: 'vendor 1', val: 'vendor1' }]} />
                <SimpleSelect name='boeNo' label='BOE No.' options={[{ label: '1', val: '1' }]} />
            </div>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <p className='text-xl font-bold text-secondary-grey'>BOE Details</p>
                </AccordionSummary>
                <AccordionDetails>
                    <DeliveryTable rows={rows} cols={cols} />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <p className='text-xl font-bold text-secondary-grey'>Vendor Invoice Details</p>
                </AccordionSummary>
                <AccordionDetails>
                    <DeliveryTable cols={invoiceTableHeader} />
                    {[1, 2, 3, 4, 5].map(k => (
                        <Accordion key={k}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <div className='grid grid-cols-6 gap-4 justify-evenly w-full'>
                                    {headerData.map(data => (
                                        <p key={data} className='font-bold text-md text-secondary-grey'>
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <DeliveryTable rows={childRows} cols={childCols} />
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </AccordionDetails>
            </Accordion>
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
}
