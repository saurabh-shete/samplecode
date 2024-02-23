import Paper from '@mui/material/Paper';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { SimpleDatePicker, SimpleSelect, SimpleTextbox } from '../../utils';
import { lcCurrencyOptions } from '../../components/exports-letter-of-credit/data';
import { Add } from '@mui/icons-material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export function BankDetails ({ formRef }) {
    return (
        <div className='grid grid-cols-2 gap-16'>
            <Paper className='p-4'>
                <form ref={formRef}>
                    <Stack direction='column' rowGap={2}>
                        <TextField name='freeAccount' label='Select Account Number' placeholder='Select Account Number' />
                    </Stack>
                </form>
            </Paper>
            <Paper className='p-4'>
                <form ref={formRef}>
                    <Stack direction='column' rowGap={2}>
                        <TextField name='issuingBranch' label='Select Branch Name' placeholder='Select Branch Name' />
                    </Stack>
                </form>
            </Paper>
        </div>
    );
}

export function RemittanceDetails ({ formRef }) {
    const bankOptions = [
        { label: 'Select Bank', val: 'select' },
        { label: 'Bank 1', val: 'bank1' },
        { label: 'Bank 2', val: 'bank2' },
    ];

    const paymentModes = [
        { label: 'EEFC/Current Account', val: 'select' },
        { label: 'EEFC', val: 'eefc' },
        { label: 'Current Account', val: 'ca' },
    ];
    return (
        <>
            <div className='grid grid-cols-3 gap-4'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker label={'Requested date of transfer'} sx={{ marginTop: '1rem' }} />
                </LocalizationProvider>
                <SimpleSelect name='lcCurrency' label='Currency' options={lcCurrencyOptions} />
                <SimpleTextbox
                    placeholder='Remittance Amount'
                    label='Remittance Amount'
                    className='border border-slate-300 px-6 py-1.5 focus:outline-none w-full rounded-lg'
                />
                <SimpleTextbox
                    placeholder='Enter Exchange Rate'
                    label='Exchange Rate'
                    className='border border-slate-300 px-6 py-1.5 focus:outline-none w-full rounded-lg'
                />
            </div>
            <h1 className='text-xl font-bold text-secondary-grey text-left py-4 w-full border-b-2 border-gray-400'>Account Details</h1>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                <SimpleSelect name='paymentModes' label='Payment Mode' options={paymentModes} />
                <SimpleSelect name='lcCurrency' label='Currency' options={lcCurrencyOptions} />
                <SimpleTextbox
                    placeholder='Enter Remittance Amount'
                    label='Remittance Amount'
                    className='border border-slate-300 px-6 py-1.5 focus:outline-none w-full rounded-lg'
                />
            </div>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                <SimpleSelect name='paymentModes' label='Payment Mode' options={paymentModes} />
                <SimpleSelect name='lcCurrency' label='Currency' options={lcCurrencyOptions} />
                <SimpleTextbox
                    placeholder='Enter Remittance Amount'
                    label='Remittance Amount'
                    className='border border-slate-300 px-6 py-1.5 focus:outline-none w-full rounded-lg'
                />
            </div>

            <div className='w-full text-left mt-4'>
                <Button startIcon={<Add />} variant='contained'>
                    Add Line
                </Button>
            </div>

            <h1 className='text-xl font-bold text-secondary-grey text-left py-4 w-full border-b-2 border-gray-400 mt-4'>Intermediary Bank Details</h1>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                <SimpleSelect name='lcCurrency' label='Select Bank' options={bankOptions} />
                <Paper className='p-4 bg-blue-200' sx={{ backgroundColor: 'rgba(0, 0, 255, 0.1)' }}>
                    <div className='grid grid-cols-1 gap-8 gap-y-4'>
                        {[
                            { label: 'Branch', attr: 'branch', value: 'Charlotte' },
                            { label: 'Address', attr: 'address', value: '301 South Tryson, Charlotte NA' },
                        ].map(item => (
                            <div className='gap-x-4' style={{ display: 'flex' }}>
                                <p className='font-bold text-secondary-grey'>{item.label}</p>
                                <p className='text-black'>{item.value}</p>
                            </div>
                        ))}
                    </div>
                </Paper>
                <div className='gap-x-4' style={{ display: 'flex' }}>
                    <p className='font-bold text-secondary-grey'>BIC Code</p>
                    <p className='text-black'>ABC1234</p>
                </div>
            </div>
            <div className='w-full text-left mt-4'>
                <Button startIcon={<Add />} variant='contained'>
                    Add Line
                </Button>
            </div>

            <h1 className='text-xl font-bold text-secondary-grey text-left py-4 w-full border-b-2 border-gray-400 mt-4'>Intermediary Bank Details</h1>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                <SimpleSelect name='lcCurrency' label='Select Bank' options={bankOptions} />
                <Paper className='p-4 bg-blue-200' sx={{ backgroundColor: 'rgba(0, 0, 255, 0.1)' }}>
                    <div className='grid grid-cols-1 gap-8 gap-y-4'>
                        {[
                            { label: 'Branch', attr: 'branch', value: 'Charlotte' },
                            { label: 'Address', attr: 'address', value: '301 South Tryson, Charlotte NA' },
                        ].map(item => (
                            <div className='gap-x-4' style={{ display: 'flex' }}>
                                <p className='font-bold text-secondary-grey'>{item.label}</p>
                                <p className='text-black'>{item.value}</p>
                            </div>
                        ))}
                    </div>
                </Paper>
                <div className='gap-x-4' style={{ display: 'flex' }}>
                    <p className='font-bold text-secondary-grey'>BIC Code</p>
                    <p className='text-black'>ABC1234</p>
                </div>
                <SimpleTextbox
                    placeholder='Enter Beneficiary Account Number'
                    label='Beneficiary Account Number'
                    className='border border-slate-300 px-6 py-1.5 focus:outline-none w-full rounded-lg'
                />
            </div>
            <div className='w-full text-left mt-4'>
                <Button startIcon={<Add />} variant='contained'>
                    Add Line
                </Button>
            </div>
        </>
    );
}

export function OtherDetails ({ formRef }) {
    const purposeCategory = [
        { label: 'Purpose 1', val: 'purpose1' },
        { label: 'Purpose 2', val: 'purpose2' },
        { label: 'Purpose 3', val: 'purpose3' },
        { label: 'Purpose 4', val: 'purpose4' },
        { label: 'Purpose 5', val: 'purpose5' },
    ];
    return (
        <div className='grid grid-cols-3 gap-4'>
            <SimpleSelect name='lcCurrency' label='Purpose Category' options={purposeCategory} />
            <SimpleSelect name='lcCurrency' label='Purpose Code' options={purposeCategory} />
            <SimpleTextbox
                placeholder='Enter Purpose Description'
                label='Purpose Description'
                className='border border-slate-300 px-6 py-1.5 focus:outline-none w-full rounded-lg'
            />
            <SimpleTextbox
                placeholder='Enter origin of goods'
                label='Origin of goods'
                className='border border-slate-300 px-6 py-1.5 focus:outline-none w-full rounded-lg'
            />
        </div>
    );
}

export function Attachments ({ formRef }) {
    return <></>;
}
