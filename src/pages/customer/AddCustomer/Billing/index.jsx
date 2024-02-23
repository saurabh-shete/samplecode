import React from 'react';
import { Paper } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const index = () => {
    return (
        <div className='grid grid-cols-1 h-40'>
            <Paper
                sx={{
                    textAlign: 'left',
                    padding: 1,
                }}
            >
                <div className='flex flex-col p-3'>
                    <div className='flex flex-row p-1'>
                        <p className='w-40 text-secondary-grey'>Currency</p>
                        <p>Indian Rupee</p>
                    </div>
                    <div className='flex flex-row p-1'>
                        <p className='w-40 text-secondary-grey'>Credit Limit</p>
                        <p>
                            <CurrencyRupeeIcon
                                sx={{
                                    fontSize: 17,
                                }}
                            />
                            450,000.00
                        </p>
                    </div>
                    <div className='flex flex-row p-1'>
                        <p className='w-40 text-secondary-grey'>Credit Hold</p>
                        <p>No</p>
                    </div>
                    <div className='flex flex-row p-1'>
                        <p className='w-40 text-secondary-grey'>Payment Terms</p>
                        <p>---</p>
                    </div>
                </div>
                {/* <p className='font-bold text-secondary-grey p-1'>Comming Soon...</p> */}
            </Paper>
        </div>
    );
};

export default index;
