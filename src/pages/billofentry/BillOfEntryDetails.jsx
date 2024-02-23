import { Box, Grid, Stack, TextField } from '@mui/material';
import React from 'react';
import { SimpleDatePicker } from '../../utils';

const BillOfEntryDetails = () => {
    return (
        <div>
            <h1 className="text-xl font-bold text-secondary-grey border-b-2 border-gray-400 py-4 my-6">Bill of Entry Details</h1>
            <Box className="p-8 w-full text-left">
                <Grid container className="mt-4 w-full" justifyContent="space-between">
                    <Grid item xs={5}>
                        <div className="flex justify-between items-center my-2">
                            <h1>BE No.</h1>
                            <TextField sx={{ width: '80%' }} label="Enter BE No" />
                        </div>
                        <div className="flex justify-between items-center my-2">
                            <h1>IGM No.</h1>
                            <TextField sx={{ width: '80%' }} label="Enter IGM No" />
                        </div>
                        <div className="flex justify-between items-center my-2">
                            <h1>Gross Weight</h1>
                            <TextField sx={{ width: '80%' }} label="Enter Gross Weight" />
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <Stack direction="column" rowGap={2}>
                            <div className="flex justify-between items-center my-2">
                                <h1>BE Date</h1>
                                {/* <div> */}
                                <SimpleDatePicker label="Enter BE Date" />
                                {/* </div> */}
                            </div>
                            <div className="flex justify-between items-center my-2">
                                <h1>IGM Date</h1>
                                <div>
                                    <SimpleDatePicker label="Enter IGM Date" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center my-2">
                                <h1>Exchange Rate</h1>
                                <TextField sx={{ width: '80%' }} label="Exchange Rate" />
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default BillOfEntryDetails;
