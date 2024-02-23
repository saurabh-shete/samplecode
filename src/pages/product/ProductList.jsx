import React from 'react';
import { CustomizedTables } from '../../utils';
import { Add } from '@mui/icons-material';

import { Link } from 'react-router-dom';
const products = [
    {
        name: 'Product 1',
        sku: 'SKU1',
        stoksOnHand: '100',
        recorderLevel: '30',
    },
    {
        name: 'Product 2',
        sku: 'SKU2',
        stoksOnHand: '50',
        recorderLevel: '40',
    },
];

const cellNames = ['Name', 'SKU', 'Stock on Hand', 'Recorder Level'];

const ProductList = () => {
    return (
        <div className='p-8 w-full h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <div className='flex flex-row items-center text-secondary-grey gap-x-4'>
                    <h1 className='text-xl font-bold'>Product List</h1>
                    <Link to='new' className='text-secondary-blue'>
                        <Add />
                    </Link>
                </div>
            </div>
            <div className='mt-4 items-center'>
                <CustomizedTables rowsList={products} cellNames={cellNames} />
            </div>
        </div>
    );
};

export default ProductList;
