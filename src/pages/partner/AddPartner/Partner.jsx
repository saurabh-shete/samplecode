import {
    Box,
    Button,
    Grid,
    Paper,
    Select,
    Stack,
    MenuItem,
    InputLabel,
    FormControl,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    IconButton,
    Tabs,
    Tab,
} from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import { Address, BankAccount } from './Tabs';

const Partner = () => {
    const { id } = useParams();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='h-screen !overflow-y-scroll no-scrollbar'>
            <div className='p-8 w-full'>
                <div className='flex justify-between  my-6'>
                    <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'Create' : 'Edit '} New Partner</h1>
                    <h1 className='text-secondary-grey text-lg'>Partner</h1>
                </div>
                <Box className='flex flex-row items-center mt-4'>
                    <Box className='py-2 px-4 bg-status-pink rounded-l-lg border border-status-pink'>
                        <Typography color='white'>Status</Typography>
                    </Box>
                    <Box className='py-2 px-8 border-t border-r border-b rounded-r-lg border-border-gray'>Draft</Box>
                </Box>
                <br />
                <Grid container className='mt-4 w-full' justifyContent='space-between'>
                    <Grid item xs={5.5}>
                        <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                            <p className='font-bold text-secondary-grey'>Partner Code</p>
                            <TextField
                                variant='outlined'
                                size='normal'
                                InputProps={{
                                    style: {
                                        borderRadius: '12px',
                                        height: '50px',
                                    },
                                }}
                                sx={{
                                    width: '100%',
                                    padding: '5px 0',
                                }}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                            <p className='font-bold text-secondary-grey'>Company Name</p>
                            <TextField
                                variant='outlined'
                                size='normal'
                                InputProps={{
                                    style: {
                                        borderRadius: '12px',
                                        height: '50px',
                                    },
                                }}
                                sx={{
                                    width: '100%',
                                    padding: '5px 0',
                                }}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'left', margin: '10px 10px' }}>
                            <p className='font-bold text-secondary-grey my-1'>Contact</p>
                            <FormControl fullWidth variant='outlined'>
                                <InputLabel id='dropdown-label'>xyz</InputLabel>
                                <Select
                                    labelId='dropdown-label'
                                    label='xyz'
                                    sx={{
                                        textAlign: 'left',
                                        width: '100%',
                                        borderRadius: '12px',
                                        height: '50px',
                                    }}
                                >
                                    <MenuItem value=''>Select an option</MenuItem>
                                    <MenuItem value='primary'>Primary</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={5.5}>
                        <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                            <p className='font-bold text-secondary-grey'>Address</p>
                            <TextField
                                variant='outlined'
                                size='normal'
                                InputProps={{
                                    style: {
                                        borderRadius: '12px',
                                        height: '50px',
                                    },
                                }}
                                sx={{
                                    width: '100%',
                                    padding: '5px 0',
                                }}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                            <p className='font-bold text-secondary-grey'>Email</p>
                            <TextField
                                variant='outlined'
                                size='normal'
                                InputProps={{
                                    style: {
                                        borderRadius: '12px',
                                        height: '50px',
                                    },
                                }}
                                sx={{
                                    width: '100%',
                                    padding: '5px 0',
                                }}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                            <p className='font-bold text-secondary-grey'>Phone</p>
                            <TextField
                                variant='outlined'
                                size='normal'
                                InputProps={{
                                    style: {
                                        borderRadius: '12px',
                                        height: '50px',
                                    },
                                }}
                                sx={{
                                    width: '100%',
                                    padding: '5px 0',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <h1 className='p-2 w-full border-b-2 border-gray-400' />
                <Box className='w-full mt-4'>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                            <Tab label='Bank Account' />
                            <Tab label='Address' />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <BankAccount />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Address />
                    </TabPanel>
                </Box>
                <br />
                <div className='flex my-3'>
                    <Button sx={{ background: '#8B99DC', margin: '0 10px' }} variant='contained'>
                        Save and confirm
                    </Button>
                    <Button sx={{ background: '#4257BE', margin: '0 10px' }} variant='contained'>
                        Save as draft
                    </Button>
                    <Button sx={{ background: '#D84040' }} variant='contained'>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

function TabPanel (props) {
    const { children, value, index } = props;

    return (
        <div role='tabpanel' hidden={value !== index}>
            {value === index && <Box className='p-4'>{children}</Box>}
        </div>
    );
}

export default Partner;
