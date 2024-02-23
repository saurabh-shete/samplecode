import React from 'react';
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel, FormGroup, Grid, TextField } from '@mui/material';
import { LeftForm, RightForm } from './LetterOfCreditForms.jsx';
import Button from '@mui/material/Button';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload.jsx';
import { SimpleDatePicker, SimpleSelect, SimpleTextArea } from '../../utils/index.jsx';
import { useParams } from 'react-router-dom';
import { availableByOptions, lcCurrencyOptions, popSelectOptions, sightOptions } from '../../components/letter-of-credit/data.js';

export default function LetterOfCredit () {
    const leftForm = React.useRef(null);
    const rightForm = React.useRef(null);
    const { id } = useParams();

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
                <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'CREATE' : 'EDIT'} LETTER OF CREDIT</h1>
                <h1 className='text-secondary-grey text-lg'>Exports / ECGC</h1>
            </div>
            <div className='flex flex-row justify-end w-full'>
                <div className='flex flex-row gap-x-2'>
                    <button className='bg-indigo-700 text-white py-2 px-6 rounded-md mt-4 hover:bg-indigo-800 active:bg-indigo-900 hover:shadow-lg'>
                        Relationship Map
                    </button>
                </div>
            </div>
            <Grid container className='mt-4 w-full' justifyContent='space-between'>
                <Grid item xs={5}>
                    <LeftForm />
                </Grid>
                <Grid item xs={5}>
                    <RightForm formRef={rightForm} />
                </Grid>
            </Grid>
            <BankDetails />
            <ShipmentDetails />
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

function ShipmentDetails () {
    return (
        <>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-4 border-b'>Shipment Details</h1>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                <TextField name='loadingPort' label='Port of loading/Airport of Dep' />
                <TextField name='dischargePort' label='Port of Discharge' />
                <SimpleDatePicker label='Latest Date of Shipment' name='latestShipmentDate' />
            </div>
            <p className='font-bold text-secondary-grey mt-4 mb-2'>Period of Presentation</p>
            <div className='flex flex-row gap-x-4'>
                <TextField name='days' label='Days' placeholder='Enter days' />
                <SimpleSelect noLabel name='popSelect' options={popSelectOptions} />
            </div>
            <div className='grid grid-cols-2 gap-4 mt-4'>
                <SimpleTextArea name='descGoods' label='Description of Goods/Services' placeholder='Description of Goods/Services' />
                <SimpleTextArea name='requiredDocs' label='Documents Required' placeholder='Documents Required' />
                <SimpleTextArea name='additionalConditions' label='Additional Conditions' placeholder='Additional Conditions' />
                <SimpleTextArea name='charges' label='Charges' placeholder='Charges' />
            </div>
        </>
    );
}

function BankDetails () {
    return (
        <>
            <div className='grid grid-cols-3 gap-4 mt-8 pt-4 border-t'>
                <TextField name='applicantBank' label='Applicant Bank' placeholder='Enter applicant bank' />
                <TextField name='issuingBank' label='Issuing Bank' placeholder='Enter issuing bank' />
                <TextField name='applicant' label='Applicant/Customer' placeholder='Name of the customer' />
                <TextField name='beneficiary' label='Beneficiary' placeholder='Name of this company' />
                <TextField name='lcAmount' label='LC Amount' placeholder='Enter lc amount' />
                <SimpleSelect name='lcCurrency' noLabel options={lcCurrencyOptions} />
                <TextField name='tolerance' label='Tolerance %' placeholder='Enter tolerance %' />
                <SimpleSelect name='availableBy' noLabel options={availableByOptions} />
                <TextField name='negotiatingBank' label='Available with/Negotiating Bank' placeholder='Enter Negotiating Bank' />
                <TextField name='confirmingBank' label='Confirming Bank' placeholder='Enter Confirming Bank' />
                <TextField name='reimbursingBank' label='Reimbursing Bank' placeholder='Enter Reimbursing Bank' />
                <TextField name='advisingBank' label='Advising Bank' placeholder='Enter Advising Bank' />
            </div>
            <p className='font-bold text-secondary-grey mt-4 mb-2'>Draft at</p>
            <div className='flex flex-row gap-x-4'>
                <TextField name='days' label='Days' placeholder='Enter days' />
                <SimpleSelect noLabel name='sight' options={sightOptions} />
            </div>
            <FormGroup>
                <div className='flex flex-row gap-x-4 mt-4'>
                    <FormControlLabel control={<Checkbox defaultChecked />} label='Partial Shipment Allowed' />
                    <FormControlLabel control={<Checkbox defaultChecked />} label='Tans-Shipment Allowed' />
                </div>
            </FormGroup>
        </>
    );
}
