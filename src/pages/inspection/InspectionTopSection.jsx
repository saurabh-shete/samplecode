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

const InspectionTopSection = () => {
    return (
        <Box>
            <Grid container className="mt-4 w-full" justifyContent="space-between">
                <Grid item xs={5}>
                    <SimpleSelect label="Select Vendor" name="selectVendor" options={invoice} placeholder={'Select Customer...'} />
                    <SimpleSelect label="Select PO" name="selectPO" options={invoice} />
                    <SimpleSelect label="Vendor Bill No" name="vendorBillNo" options={invoice} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default InspectionTopSection;
