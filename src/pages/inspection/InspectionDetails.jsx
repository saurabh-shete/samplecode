import React from 'react';
import { SimpleDatePicker, SimpleSelect } from '../../utils';
import { Box, Stack, TextField } from '@mui/material';
const invoice = [
    { label: 'invoice 1', val: 'invoice1' },
    { label: 'invoice 2', val: 'invoice2' },
    { label: 'invoice 3', val: 'invoice3' },
    { label: 'invoice 4', val: 'invoice4' },
];
const InspectionDetails = () => {
    return (
        <div>
            <h1 className="text-xl font-bold text-secondary-grey border-b-2 border-gray-400 py-4 my-6">Inspection Details</h1>
            <div className="border border-gray-400 p-4 rounded-lg bg-background-grey">
                <Stack direction="row" sx={{ flexWrap: 'wrap' }} spacing={2}>
                    <Box sx={{ width: '20%', flex: '0 0 18%', margin: '8px 0' }}>
                        <SimpleSelect noLabel name="selectPO" options={invoice} />
                    </Box>
                    <Box sx={{ width: '20%', flex: '0 0 18%', margin: '8px 0' }}>
                        <SimpleSelect noLabel name="selectPO" options={invoice} />
                    </Box>
                    <Box sx={{ width: '20%', flex: '0 0 20%', margin: '8px 0' }}>
                        <SimpleSelect noLabel name="selectPO" options={invoice} />
                    </Box>
                    <Box sx={{ width: '20%', flex: '0 0 18%', margin: '8px 0' }}>
                        <SimpleDatePicker label="Inspection Date" name="selectPO" />
                    </Box>
                    <Box sx={{ width: '20%', flex: '0 0 18%', margin: '8px 0' }}>
                        <TextField label="Certification No" name="selectPO" />
                    </Box>
                    <Box sx={{ width: '20%', flex: '0 0 18%', margin: '8px 0' }}>
                        <TextField label="Remarks" name="selectPO" />
                    </Box>
                    <Box sx={{ width: '20%', flex: '0 0 18%', margin: '8px 0' }}>
                        <TextField label="Attachments" name="selectPO" />
                    </Box>
                    <Box sx={{ width: '20%', flex: '0 0 18%', margin: '8px 0' }}>
                        <SimpleSelect noLabel name="selectPO" options={invoice} />
                    </Box>
                </Stack>
            </div>
        </div>
    );
};

export default InspectionDetails;
