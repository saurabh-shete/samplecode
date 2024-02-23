import React from 'react';
import { CustomizedTables } from '../../utils';
import { Add } from '@mui/icons-material';

import { Link } from 'react-router-dom';
const products = [
    {
        name: 'Steel T2',
        ordered_by: 'Grade 2, Thickness 1 Steel',
        invoice_quantity: '1342342',
        remaining_qty: '12',
        uom: 'kg',
        price: '234 USD',
        total: '234234',
    },
    {
        name: 'Steel T2',
        ordered_by: 'Grade 2, Thickness 1 Steel',
        invoice_quantity: '1342342',
        remaining_qty: '12',
        uom: 'kg',
        price: '234 USD',
        total: '234234',
    },
];

const cellNames = ['Product Name', 'Ordered Qty', 'Invoice Qty', 'Remaining Qty', 'UOM', 'Price (Currency)', 'Total'];

const GRNProductList = () => {
    //
    return (
        <div className='p-8 w-full h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex items-center'>
                <div className='flex flex-row items-center text-secondary-grey gap-x-4'>
                    <h1 className='text-xl font-bold'>Product Item Details</h1>
                    <Link to='new' className='text-secondary-blue'>
                        <Add />
                    </Link>
                </div>
            </div>

            <CustomizedTables rowsList={products} cellNames={cellNames} />
        </div>
    );
};

export default GRNProductList;
