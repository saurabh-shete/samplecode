import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Button, Grid, Stack } from '@mui/material';
import { LeftForm, RightForm } from './DeliveryForms.jsx';
import DeliveryTable from './DeliveryTable.jsx';
import DragDropFileUpload from './DragDropFileUpload.jsx';
import { _getDeliveryProducts, _getDeliveryTableInfo } from '../../api/delivery';
import ProductListItem from './ProductListItem.jsx';

const EditDelivery = () => {
    const { id } = useParams();
    const leftForm = React.useRef(null);
    const rightForm = React.useRef(null);
    const [table, setTable] = React.useState({ rows: [], cols: [] });
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        _getDeliveryTableInfo().then(table => setTable(table));
    }, []);

    React.useEffect(() => {
        _getDeliveryProducts().then(prods => setProducts(prods));
    }, []);

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
        <div className='h-screen !overflow-y-scroll no-scrollbar'>
            <Box className='p-8 w-full text-left'>
                <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'CREATE' : 'EDIT'} DELIVERY</h1>
                <Box className='flex flex-row items-center mt-4'>
                    <Box className='py-2 px-4 bg-status-pink rounded-l-lg border border-status-pink'>
                        <Typography color='white'>Status</Typography>
                    </Box>
                    <Box className='py-2 px-8 border-t border-r border-b rounded-r-lg border-border-gray'>Open</Box>
                </Box>
                <Grid container className='mt-4 w-full' justifyContent='space-between'>
                    <Grid item xs={5}>
                        <LeftForm formRef={leftForm} />
                    </Grid>
                    <Grid item xs={5}>
                        <RightForm formRef={rightForm} />
                    </Grid>
                </Grid>
                <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2'>Select Sales Orders</h1>
                <DeliveryTable rows={table.rows} cols={table.cols} />
                <h1 className='text-xl font-bold text-secondary-grey mt-8 mb-2'>Product List</h1>
                <Stack rowGap={2} width='100%'>
                    {products.map(product => (
                        <ProductListItem product={product} />
                    ))}
                </Stack>
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
        </div>
    );
};
export default EditDelivery;
