import React from 'react';
import { SimpleDatePicker, SimpleSelect } from '../../utils';
import { Box, Grid, Paper, Stack, TextField } from '@mui/material';

const SalesQuotationTopSection = () => {
    const invoice = [
        { label: 'invoice 1', val: 'invoice1' },
        { label: 'invoice 2', val: 'invoice2' },
        { label: 'invoice 3', val: 'invoice3' },
        { label: 'invoice 4', val: 'invoice4' },
    ];
    return (
        <>
            <Grid container sx={12} justifyContent={'space-between'}>
                <Grid item xs={4} className="text-left">
                    <Stack direction="column" rowGap={2}>
                        <SimpleSelect name="customerName" label="Customer Name" options={invoice} />
                        <TextField label="MOT" />
                        <SimpleSelect name="customerName" label="Port of Loading" options={invoice} />
                        <SimpleSelect name="customerName" label="Port of Discharge" options={invoice} />
                    </Stack>
                </Grid>

                <Grid item xs={4}>
                    <div className="mt-4">
                        <Paper className="p-4">
                            <Stack direction="column" rowGap={4}>
                                <TextField required name="deliveryId" label="Quote No" />
                                <SimpleDatePicker label="Quotation Date" name="plannedMovementDate" />
                                <TextField required name="deliveryId" label="Customer Reference" />
                                <SimpleDatePicker label="Valid Till" name="plannedMovementDate" />
                            </Stack>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default SalesQuotationTopSection;
