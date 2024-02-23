import { Box, Button, Grid, Paper, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SoProductItem from '../../components/sales-order/SoProductItem.jsx';
import AddSoProductItem from '../../components/sales-order/AddSoProductItem.jsx';
import SoTopSection from '../../components/sales-order/SoTopSection.jsx';
import { SimpleDatePicker, SimpleSelect } from '../../utils/index.jsx';
import AddIcon from '@mui/icons-material/Add';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload.jsx';
import PricingBox from '../../components/sales-order/PricingBox.jsx';

const soProductList = [
    {
        name: 'Steel T1',
        id: '001',
        taxRate: '12%',
        packingType: 'HCV',
        onePackQuantity: '10',
        grossWeight: '1,00,000',
        quantity: '10',
        quantityIn: 'bags',
        rate: '1000',
        discount: '12%',
        tax: '1200',
        amount: '1000',
    },
    {
        name: 'Steel T2',
        id: '002',
        taxRate: '15%',
        packingType: 'HHV',
        onePackQuantity: '10',
        grossWeight: '1,00,000',
        quantity: '10',
        quantityIn: 'bags',
        rate: '1000',
        discount: '12%',
        tax: '1200',
        amount: '1000',
    },
];

const EditSalesOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [openAddProductBox, setOpenAddProductBox] = useState(false);
    const [productList, setProductList] = useState([]);
    const [customer, setCustomer] = useState('');
    // const [type, setType] = useState('');
    // const leftForm = React.useRef(null);
    const rightForm = React.useRef(null);
    const type = [
        { label: 'type 1', val: 'type1' },
        { label: 'type 2', val: 'type2' },
        { label: 'type 3', val: 'type3' },
        { label: 'type 4', val: 'type4' },
    ];
    const customers = [
        { label: 'customer 1', val: 'customer1' },
        { label: 'customer 2', val: 'customer2' },
        { label: 'customer 3', val: 'customer3' },
        { label: 'customer 4', val: 'customer4' },
    ];

    function handleConfirm (e) {
        const rightFormData = new FormData(rightForm.current);

        for (const [key, value] of leftFormData.entries()) {
            console.log(`${key}: ${value}`);
        }

        for (const [key, value] of rightFormData.entries()) {
            console.log(`${key}: ${value}`);
        }
    }
    return (
        <div className='p-8 w-full h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between  my-6'>
                <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'Create' : 'Edit '} Sales Order</h1>
                <h1 className='text-secondary-grey text-lg'>Exports / Sales Order</h1>
            </div>
            <Box className='flex flex-row items-center mt-4'>
                <Box className='py-2 px-4 bg-status-pink rounded-l-lg border border-status-pink'>
                    <Typography color='white'>Status</Typography>
                </Box>
                <Box className='py-2 px-8 border-t border-r border-b rounded-r-lg border-border-gray'>Open</Box>
            </Box>

            <Grid container className='mt-4 w-full' justifyContent='space-between'>
                <Grid item xs={5}>
                    <SoTopSection />
                </Grid>
                <Grid item xs={5}>
                    <div className='mt-8'>
                        <Paper className='p-4'>
                            <Stack direction='column' rowGap={2}>
                                <TextField required name='deliveryId' label='Sales Order ID' />
                                <SimpleDatePicker label='Sales Order Date' name='plannedMovementDate' />
                                <TextField required name='deliveryId' label='Document Currency' />
                                <TextField required name='deliveryId' label='Exchange Rate' />
                            </Stack>
                        </Paper>
                    </div>
                </Grid>
            </Grid>

            <Grid container className='mt-4 w-full '>
                <h1 className='text-xl font-bold text-secondary-grey text-left py-4 w-full border-b-2 border-gray-400'>Business Partners</h1>
                <div className='flex flex-col my-4 text-left'>
                    <div className='flex m-4'>
                        <div className='w-32'>
                            <SimpleSelect placeholder={'Select Type'} options={type} noLabel={true} name='type' />
                        </div>

                        <div className=' w-64 mx-4'>
                            <SimpleSelect options={customers} noLabel={true} placeholder={'Select Partner'} name='customer' />
                        </div>
                    </div>
                    <div className='flex m-4'>
                        <div className='w-32'>
                            <SimpleSelect placeholder={'Select Type'} options={type} noLabel={true} name='type' />
                        </div>

                        <div className='w-64 mx-4'>
                            <SimpleSelect options={customers} noLabel={true} placeholder={'Select Partner'} name='customer' />
                        </div>
                    </div>
                </div>

                <div className='w-full text-left'>
                    <Button startIcon={<AddIcon />} variant='contained'>
                        Add Partner
                    </Button>
                </div>
            </Grid>
            {/**
             * Product Section
             */}
            <div>
                <div className='flex justify-between items-center my-4'>
                    <h1 className='text-xl font-bold text-secondary-grey text-left py-4  '>Product Details</h1>
                    <AddSoProductItem />
                </div>
                <div className='flex w-full border-t-2 border-secondary-grey border-b-2 py-2 '>
                    <h1 className='text-secondary-grey font-bold text-md w-[30%]'>Product Details</h1>
                    <h1 className='text-secondary-grey font-bold text-md w-1/5'>Packing Details</h1>
                    <h1 className='text-secondary-grey font-bold text-md w-1/5'>Quantity</h1>
                    <h1 className='text-secondary-grey font-bold text-md w-[12%]'>Price</h1>
                    <h1 className='text-secondary-grey font-bold text-md w-[18%]'>Amount</h1>
                </div>
                {soProductList.map(product => (
                    <SoProductItem product={product} />
                ))}

                {openAddProductBox && <AddSoProductItem />}
            </div>

            <h1 className='text-xl text-left border-b-2 border-gray-400 font-bold text-secondary-grey mt-8 mb-2'>Pricing</h1>

            <PricingBox />

            <h1 className='text-xl text-left font-bold text-secondary-grey mt-8 mb-2'>Upload Documents</h1>
            <DragDropFileUpload />

            <div className='flex my-4'>
                <Button sx={{ background: '#8B99DC', margin: '0 10px' }} variant='contained'>
                    Save and confirm
                </Button>
                <Button sx={{ background: '#4257BE', margin: '0 10px' }} variant='contained'>
                    Save as draft
                </Button>
                <Button sx={{ background: '#D84040' }} variant='contained'>
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default EditSalesOrder;
