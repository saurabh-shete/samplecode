import { TextField } from '@mui/material';
import React from 'react';

const SQAuthority = () => {
    return (
        <div>
            <div className="text-left my-4">
                <h1 className="text-lg">Name of Authorized Signatory</h1>
            </div>
            <div className="flex justify-between w-1/2">
                <TextField label="First Name" className="w-1/2" />
                <TextField label="Last Name" sx={{ marginLeft: '10px' }} className="w-1/2" />
            </div>
            <div className="w-1/2 my-4 text-left">
                <h1 className="text-lg my-4">Signatory Company</h1>
                <TextField label="Name of the company" className="w-1/2" />
            </div>
        </div>
    );
};

export default SQAuthority;
