import { Box, Grid, InputAdornment, Paper, Stack, TextField } from '@mui/material';
import React from 'react';
import { SimpleDatePicker, SimpleSelect } from '../../utils';
import SettingsIcon from '@mui/icons-material/Settings';
const invoice = [
    { label: 'invoice 1', val: 'invoice1' },
    { label: 'invoice 2', val: 'invoice2' },
    { label: 'invoice 3', val: 'invoice3' },
    { label: 'invoice 4', val: 'invoice4' },
];

const GRNTopSection = () => {
    return (
        <Box>
            <Grid container className="mt-4 w-full" justifyContent="space-between">
                <Grid item xs={5}>
                    <SimpleSelect label="Select Vendor" name="selectVendor" options={invoice} placeholder={'Select Customer...'} />
                    <SimpleSelect label="Select PO" name="selectPO" options={invoice} />
                    <SimpleSelect label="Vendor Bill No" name="vendorBillNo" options={invoice} />
                </Grid>
                <Grid item xs={5}>
                    <Paper className="p-4 mt-4">
                        <Stack direction="column" rowGap={4}>
                            <TextField
                                label="GRN ID   "
                                value={'PMT-FY20XX-0000001'}
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SettingsIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField label="GRN Reference" fullWidth placeholder="Enter Bill No" />
                            <SimpleDatePicker label="GRN Date" name="invoiceDueDate" />
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GRNTopSection;
