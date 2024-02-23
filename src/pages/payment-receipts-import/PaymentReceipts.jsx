import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Grid } from '@mui/material';
import { AdvanceLeftForm, DepositLeftForm, RightForm } from './PaymentReceiptForms.jsx';
import Button from '@mui/material/Button';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload.jsx';
import { EditableText } from '../../utils/index.jsx';
import DeliveryTable from '../../components/delivery/DeliveryTable.jsx';

export default function PaymentReceiptsImport () {
    const leftForm = React.useRef(null);
    const rightForm = React.useRef(null);
    const [isAdvance, setIsAdvance] = React.useState(true);

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
                <h1 className='text-xl font-bold text-secondary-grey'>{isAdvance ? 'ADVANCE PAYMENT MADE' : 'DEPOSIT AGAINST SALES'}</h1>
                <h1 className='text-secondary-grey text-lg'>Imports / {isAdvance ? 'Advance' : 'Payment Received'}</h1>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <ButtonGroup>
                    <Button variant={isAdvance ? 'contained' : 'outlined'} onClick={() => setIsAdvance(true)}>
                        Advance
                    </Button>
                    <Button variant={!isAdvance ? 'contained' : 'outlined'} onClick={() => setIsAdvance(false)}>
                        Payment Against Invoices
                    </Button>
                </ButtonGroup>
            </div>
            <div className='flex flex-row justify-between w-full'>
                <Box className='flex flex-row items-center mt-4'>
                    <Box className='py-2 px-4 bg-status-pink rounded-l-lg border border-status-pink'>
                        <Typography color='white'>Status</Typography>
                    </Box>
                    <Box className='py-2 px-8 border-t border-r border-b rounded-r-lg border-border-gray'>Open</Box>
                </Box>
                <div className='flex flex-row gap-x-2'>
                    {isAdvance && (
                        <button className='bg-indigo-700 text-white py-2 px-6 rounded-md mt-4 hover:bg-indigo-800 active:bg-indigo-900 hover:shadow-lg'>
                            Link to PO
                        </button>
                    )}
                    <button className='bg-indigo-700 text-white py-2 px-6 rounded-md mt-4 hover:bg-indigo-800 active:bg-indigo-900 hover:shadow-lg'>
                        Relationship Map
                    </button>
                </div>
            </div>
            <Grid container className='mt-4 w-full' justifyContent='space-between'>
                <Grid item xs={5}>
                    {isAdvance ? <AdvanceLeftForm formRef={leftForm} /> : <DepositLeftForm formRef={leftForm} />}
                </Grid>
                <Grid item xs={5}>
                    <RightForm isAdvance={isAdvance} formRef={rightForm} />
                </Grid>
            </Grid>
            <BankDetails isAdvance={isAdvance} />
            <BankCharges />
            {!isAdvance && <PaymentAgainstUnpaidInvoices />}
            {!isAdvance && (
                <div className='flex flex-row justify-end'>
                    <div className='mt-4 bg-indigo-100 grid grid-cols-4 justify-end grid-rows-4 gap-4 gap-y-2 auto-cols-auto w-fit p-4 w-fit rounded-lg'>
                        <p className='text-xl font-bold text-primary-blue col-span-2'>Amount Paid</p>
                        <p className='text-lg font-bold text-secondary-grey col-span-1'>USD</p>
                        <p className='text-lg font-bold text-secondary-grey col-span-1'>12,000</p>
                        <p className='text-xl font-bold text-primary-blue col-span-2'>Amount Billed</p>
                        <p className='text-lg font-bold text-secondary-grey col-span-1'>USD</p>
                        <p className='text-lg font-bold text-secondary-grey col-span-1'>12,000</p>
                        <p className='text-xl font-bold text-primary-blue col-span-2'>Excess Amount</p>
                        <p className='text-lg font-bold text-secondary-grey col-span-1'>USD</p>
                        <p className='text-lg font-bold text-secondary-grey col-span-1'>12,000</p>
                        <p className='text-sm text-primary-grey'>Exchange Rate:</p>
                        <p className='text-sm text-primary-grey'>
                            <EditableText initialValue='81.20' noPadding />
                        </p>
                        <p className='text-sm text-highlight-purple'>Edit</p>
                    </div>
                </div>
            )}
            {!isAdvance && (
                <div className='grid grid-cols-8 items-center'>
                    <p className='col-span-1 font-bold text-md text-primary-grey'>Notes for internal use</p>
                    <div className='col-span-7'>
                        <EditableText initialValue='notes for internal use (click to edit)' />
                    </div>
                </div>
            )}
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

function PaymentAgainstUnpaidInvoices () {
    const cols = [
        { label: 'Invoice Date', property: 'invoiceDate' },
        { label: 'Invoice Number', property: 'invoiceNumber' },
        { label: 'Invoice Amount', property: 'invoiceAmount' },
        { label: 'Amount Due', property: 'amountDue' },
        { label: 'Payment', property: 'payment' },
    ];

    const rows = [
        {
            invoiceDate: '19-05-2023 <br/>Due Date: 20-05-2023',
            dueDate: '20-05-2023',
            invoiceNumber: 'INV-FY23-00002',
            invoiceAmount: 2500,
            amountDue: 2200,
            payment: '2000 <br/> balance: 200',
        },
        {
            invoiceDate: '19-05-2023 <br/>Due Date: 20-05-2023',
            dueDate: '20-05-2023',
            invoiceNumber: 'INV-FY23-00002',
            invoiceAmount: 2500,
            amountDue: 2200,
            payment: '2000 <br/> balance: 200',
        },
        {
            invoiceDate: '19-05-2023 <br/>Due Date: 20-05-2023',
            dueDate: '20-05-2023',
            invoiceNumber: 'INV-FY23-00002',
            invoiceAmount: 2500,
            amountDue: 2200,
            payment: '2000 <br/> balance: 200',
        },
        {
            invoiceDate: '19-05-2023 <br/>Due Date: 20-05-2023',
            dueDate: '20-05-2023',
            invoiceNumber: 'INV-FY23-00002',
            invoiceAmount: 2500,
            amountDue: 2200,
            payment: '2000 <br/> balance: 200',
        },
    ];

    return (
        <>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-4'>Payment Against Unpaid Invoices</h1>
            <DeliveryTable rows={rows} cols={cols} />
        </>
    );
}

function BankCharges () {
    return (
        <>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-4 border-b'>Bank Charges</h1>
            <div className='grid grid-cols-2 gap-x-4'>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Sender Bank Charges</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Rs.23444' padding={2} />
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Receiver Bank Charges</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Rs.2930' padding={2} />
                    </div>
                </div>
            </div>
        </>
    );
}

function BankDetails ({ isAdvance }) {
    return (
        <>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-4 border-b'>Bank Details</h1>
            <div className='grid grid-cols-3 gap-x-4'>
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Payment Mode</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Wire Transfer / TT' padding={2} />
                    </div>
                </div>
                {isAdvance && (
                    <div className='grid grid-cols-6 gap-x-4 items-center'>
                        <p className='font-bold text-primary-grey col-span-2'>Receiving Bank</p>
                        <div className='text-secondary-grey col-span-4'>
                            <EditableText initialValue='Receiving Bank Name' padding={2} />
                        </div>
                    </div>
                )}
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Sender Bank</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Sender Bank Name' padding={2} />
                    </div>
                </div>
                {isAdvance && (
                    <div className='grid grid-cols-6 gap-x-4 items-center'>
                        <p className='font-bold text-primary-grey col-span-2'>Purpose Code</p>
                        <div className='text-secondary-grey col-span-4'>
                            <EditableText initialValue='P0102' padding={2} />
                        </div>
                    </div>
                )}
                <div className='grid grid-cols-6 gap-x-4 items-center'>
                    <p className='font-bold text-primary-grey col-span-2'>Bank Ref Number</p>
                    <div className='text-secondary-grey col-span-4'>
                        <EditableText initialValue='Bank Reference Number' padding={2} />
                    </div>
                </div>
            </div>
        </>
    );
}
