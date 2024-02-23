import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Button, Grid, IconButton, Stack, TextField } from '@mui/material';
import { LeftForm, RightForm } from '../../components/invoice/DeliveryForms';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload';
import { EditSharp } from '@mui/icons-material';
import { _createInvoiceTableInfo, _getPackingDetails, _getStandardTerms } from '../../api/invoice/index.js';
import EditableTable, { EditableText, SimpleDatePicker, SimpleSelect } from '../../utils/index.jsx';

const EditInvoice = () => {
    const { id } = useParams();
    const leftForm = React.useRef(null);
    const rightForm = React.useRef(null);
    const [table, setTable] = React.useState({ rows: [], cols: [] });

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

    React.useEffect(() => {
        _createInvoiceTableInfo().then(table => setTable(table));
    }, []);

    return (
        <Box className='p-8 w-full text-left h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'CREATE ' : 'EDIT '} INVOICE</h1>
                <h1 className='text-secondary-grey text-lg'>Exports / Invoice</h1>
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
            <InvoiceDetails />
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-4'>Product Details</h1>
            <EditableTable cols={table.cols} rows={table.rows} />
            <div className='flex flex-row justify-end'>
                <div className='mt-4 bg-indigo-100 grid grid-flow-col justify-end grid-rows-2 gap-4 gap-y-2 auto-cols-auto w-fit p-4 w-fit rounded-lg'>
                    <p className='text-xl font-bold text-primary-blue'>Total Value</p>
                    <p className='text-sm text-primary-grey'>Exchange Rate:</p>
                    <p className='text-lg font-bold text-secondary-grey'>USD</p>
                    <p className='text-sm text-primary-grey'>
                        <EditableText initialValue='81.20' noPadding />
                    </p>
                    <p className='text-lg font-bold text-secondary-grey'>12,000</p>
                    <p className='text-sm text-highlight-purple'>Edit</p>
                </div>
            </div>
            <PackingDetails />
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-4 border-b'>Invoice Remarks</h1>
            <div className='grid grid-cols-2 gap-x-4'>
                {['Header Remark', 'Detail Area Remark', 'Footer Remark', 'Packing List Remark', 'Shipping Remark'].map(remark => (
                    <div className='grid grid-cols-5 gap-x-4 items-center' key={remark}>
                        <p className='font-bold text-primary-grey'>{remark}</p>
                        <div className='text-secondary-grey col-span-4'>
                            <EditableText initialValue={remark} padding={2} />
                        </div>
                    </div>
                ))}
            </div>
            <button className='bg-indigo-700 text-white py-2 px-6 rounded-md mt-4 hover:bg-indigo-800 active:bg-indigo-900 hover:shadow-lg'>
                Preview Invoice
            </button>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-4 border-b'>Additional Details</h1>
            <div className='grid grid-cols-3 gap-x-4'>
                {[
                    'Container No.',
                    'Submission Place',
                    'Submission Date',
                    'RFID Seal',
                    'E Seal',
                    'Customer Seal',
                    'Mfg. Seal No.',
                    'Shipping Seal No.',
                    'Shipment Route',
                ].map(remark => (
                    <div className='grid grid-cols-4 gap-x-4 items-center' key={remark}>
                        <p className='font-bold text-primary-grey'>{remark}</p>
                        <div className='text-secondary-grey col-span-3'>
                            {remark.includes('Date') ? (
                                <SimpleDatePicker label={remark} name={remark} />
                            ) : (
                                <EditableText initialValue={remark} padding={2} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-4 border-b'>Incentive Schemes</h1>
            <div className='grid grid-cols-4 gap-x-16 my-8'>
                {[1, 2, 3, 4].map(category => (
                    <Stack rowGap={2}>
                        <div className='flex flex-row justify-center items-center gap-x-2'>
                            <input type='checkbox' />
                            <p className='text-md text-blue-700 font-bold text-lg'>Category {category}</p>
                        </div>
                        <SimpleSelect
                            name='selectScheme'
                            label='Select Scheme'
                            options={[
                                { label: 'scheme1', value: 'scheme1' },
                                {
                                    label: 'scheme2',
                                    value: 'scheme2',
                                },
                                { label: 'scheme3', value: 'scheme3' },
                            ]}
                        />
                        <TextField label='License Number' />
                    </Stack>
                ))}
            </div>
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
};

function PackingDetails () {
    const [packingDetails, setPackingDetails] = React.useState({
        palletDetails: {},
        weightDetails: {},
        loosePackDetails: {},
    });

    React.useEffect(() => {
        _getPackingDetails().then(details => setPackingDetails(details));
    }, []);

    return (
        <>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 pb-2 border-b'>Packing Details</h1>
            <div className='grid grid-cols-3 gap-x-4 justify-between'>
                <div>
                    <p className='text-md text-blue-700 font-bold'>Pallet Details</p>
                    {Object.entries(packingDetails.palletDetails).map(entry => (
                        <div className='grid grid-cols-2 justify-between' key={entry[0]}>
                            <p className='font-bold text-primary-grey'>{entry[0]}</p>
                            <p className='text-primary-grey text-sm'>{entry[1]}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <p className='text-md text-blue-700 font-bold'>Weight Details</p>
                    {Object.entries(packingDetails.weightDetails).map(entry => (
                        <div className='grid grid-cols-2 justify-between' key={entry[0]}>
                            <p className='font-bold text-primary-grey'>{entry[0]}</p>
                            <p className='text-primary-grey text-sm'>{entry[1]}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <p className='text-md text-blue-700 font-bold'>Loose Pack Details</p>
                    {Object.entries(packingDetails.loosePackDetails).map(entry => (
                        <div className='grid grid-cols-2 justify-between' key={entry[0]}>
                            <p className='font-bold text-primary-grey'>{entry[0]}</p>
                            <p className='text-primary-grey text-sm'>{entry[1]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function InvoiceDetails () {
    const [stdTerms, setStdTerms] = React.useState({});

    React.useEffect(() => {
        _getStandardTerms().then(terms => setStdTerms(terms));
    }, []);

    return (
        <div>
            <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2 border-b border-border-gray pb-4'>Invoice Details</h1>
            <div className='grid grid-cols-2 gap-x-4'>
                <Stack>
                    <div className='flex flex-row gap-x-2 items-center justify-center'>
                        <p className='text-center text-md text-blue-700 font-bold'>Standard Terms</p>
                        <IconButton>
                            <EditSharp className='text-md' />
                        </IconButton>
                    </div>
                    <div className='bg-indigo-100 rounded-lg p-4'>
                        {Object.entries(stdTerms).map(entry => (
                            <div className='grid grid-cols-2 justify-between' key={entry[0]}>
                                <p className='font-bold text-primary-grey'>{entry[0]}</p>
                                <p className='text-primary-grey text-sm text-center'>{entry[1]}</p>
                            </div>
                        ))}
                    </div>
                </Stack>
                <Stack className='border rounded-lg p-4' rowGap={3}>
                    <div className='grid grid-cols-2 gap-x-4'>
                        <p className='text-md text-blue-700 font-bold'>SO Numbers</p>
                        <div className='grid grid-cols-2 gap-2'>
                            {['SO-FY23-0001', 'SO-FY23-0002', 'SO-FY23-0003', 'SO-FY23-0004'].map(item => (
                                <p key={item} className='font-bold text-primary-grey'>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-x-4'>
                        <p className='text-md text-blue-700 font-bold'>Reference PO</p>
                        <p className='text-md text-primary-grey font-bold'>PO-FY23-0001</p>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-md text-blue-700 font-bold'>Shipping Details</p>
                        <div className='grid grid-cols-2 gap-x-4 mt-2'>
                            <p className='text-md text-primary-grey font-bold'>Ship to Country</p>
                            <p className='text-md text-primary-grey'>Germany</p>
                        </div>
                        <div className='grid grid-cols-2 gap-x-4 mt-2'>
                            <p className='text-md text-primary-grey font-bold'>Sold to Country</p>
                            <p className='text-md text-primary-grey'>Germany</p>
                        </div>
                        <div className='grid grid-cols-2 gap-x-4 mt-2'>
                            <p className='text-md text-primary-grey font-bold'>Country of Origin</p>
                            <p className='text-md text-primary-grey'>India</p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-md text-blue-700 font-bold'>LC Reference</p>
                        <div className='grid grid-cols-2 gap-x-4 mt-2'>
                            <p className='text-md text-primary-grey font-bold'>Reference LC No.</p>
                            <p className='text-md text-primary-grey'>LC8588434</p>
                        </div>
                        <div className='grid grid-cols-2 gap-x-4 mt-2'>
                            <p className='text-md text-primary-grey font-bold'>Reference LC Date</p>
                            <p className='text-md text-primary-grey'>23/04/2025</p>
                        </div>
                    </div>
                </Stack>
            </div>
        </div>
    );
}

export default EditInvoice;
