import React from 'react';
import PricingBox from '../sales-order/PricingBox';
import { TextField } from '@mui/material';
import { SimpleTextArea } from '../../utils';

const SQPrice = () => {
    return (
        <div className="flex w-full my-4 border-b-2 border-gray-400 py-4">
            <div className="w-1/2 flex-col flex justify-between mr-4">
                <div className="flex justify-between">
                    <TextField label="Term" className="w-1/2" />
                    <TextField label="Place" sx={{ marginLeft: '10px' }} className="w-1/2" />
                </div>
                <div className="text-left mt-4">
                    <SimpleTextArea rows="8" name="specialInstruction" label="Additional Instruction" placeholder="Term" />
                </div>
            </div>
            <PricingBox />
        </div>
    );
};

export default SQPrice;
