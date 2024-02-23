import { AddCircle } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

const SQProduct = () => {
    return (
        <>
            <div className="border-b-2 border-gray-400 mt-8 py-2 text-left">
                <h1 className="text-lg">Product Details</h1>
            </div>
            <div className="flex font-bold py-4">
                <h1 className="w-[15%]">Payment Mode</h1>
                <h1 className="w-1/4">Description of Goods</h1>
                <h1 className="w-[15%]">Quantity</h1>
                <h1 className="w-[15%]">Unit Type</h1>
                <h1 className="w-[15%]">Price</h1>
                <h1 className="w-[15%]">Amount</h1>
            </div>
            <div className="flex py-4">
                <h1 className="w-[15%] bg-gray-200 p-2 mx-2">Add Product ...</h1>
                <h1 className="w-1/4 bg-gray-200 p-2 mx-2">...</h1>
                <h1 className="w-[15%] bg-gray-200 p-2 mx-2">1</h1>
                <h1 className="w-[15%] bg-gray-200 p-2 mx-2">kgs</h1>
                <h1 className="w-[15%] bg-gray-200 p-2 mx-2">100</h1>
                <h1 className="w-[15%] bg-gray-200 p-2 mx-2">1000</h1>
            </div>
            <div className="text-left px-2 my-4">
                <Button sx={{ background: 'lightgray' }} variant="outlined">
                    <AddCircle className="mr-2" /> Add Line
                </Button>
            </div>
            <div className="w-full flex py-4 border-b-2 border-t-2 border-gray-400">
                <h1 className="w-1/2">Consignment Total</h1>
                <h1 className="w-1/4">1</h1>
                <h1 className="w-1/4">100</h1>
            </div>
        </>
    );
};

export default SQProduct;
