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
import { Address, TradeTerms, Contact, Billing, PriceList } from './Tabs.jsx';

const Customer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [openAddProductBox, setOpenAddProductBox] = useState(false);
    const [productList, setProductList] = useState([]);
    const [customer, setCustomer] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [value, setValue] = useState(0);
    const handleCheckboxChange = event => {
        setIsChecked(event.target.checked);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // const [type, setType] = useState('');
    // const leftForm = React.useRef(null);
    const rightForm = React.useRef(null);
    const type = [
        { label: 'type 1', val: 'type1' },
        { label: 'type 2', val: 'type2' },
        { label: 'type 3', val: 'type3' },
        { label: 'type 4', val: 'type4' },
    ];
    const customers = [
        { label: 'customer 1', val: 'customer1' },
        { label: 'customer 2', val: 'customer2' },
        { label: 'customer 3', val: 'customer3' },
        { label: 'customer 4', val: 'customer4' },
    ];

    function handleConfirm (e) {
        const rightFormData = new FormData(rightForm.current);

        for (const [key, value] of leftFormData.entries()) {
            console.log(`${key}: ${value}`);
        }

        for (const [key, value] of rightFormData.entries()) {
            console.log(`${key}: ${value}`);
        }
    }
    return (
        <div className='h-screen !overflow-y-scroll no-scrollbar'>
            <div className='p-8 w-full'>
                <div className='flex justify-between  my-6'>
                    <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'Create' : 'Edit '} New Customer</h1>
                    <h1 className='text-secondary-grey text-lg'>Customer</h1>
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
                            <p className='font-bold text-secondary-grey'>Customer Name</p>
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
                            <p className='font-bold text-secondary-grey'>Customer Display Name</p>
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
                            <p className='font-bold text-secondary-grey my-1'>Business Type</p>
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
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={5.5}>
                        <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                            <p className='font-bold text-secondary-grey'>Customer Code</p>
                            <TextField
                                variant='outlined'
                                size='normal'
                                InputProps={{
                                    style: {
                                        borderRadius: '12px',
                                        height: '50px',
                                    },
                                    endAdornment: (
                                        <IconButton edge='start'>
                                            <SettingsIcon />
                                        </IconButton>
                                    ),
                                }}
                                sx={{
                                    width: '100%',
                                    padding: '5px 0',
                                }}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                            <p className='font-bold text-secondary-grey'>Currency</p>
                            <FormControl fullWidth variant='outlined'>
                                <InputLabel id='dropdown-label'>Rs.</InputLabel>
                                <Select
                                    labelId='dropdown-label'
                                    label='Rs.'
                                    sx={{
                                        textAlign: 'left',
                                        width: '100%',
                                        borderRadius: '12px',
                                        height: '50px',
                                    }}
                                >
                                    <MenuItem value=''>Select an option</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ textAlign: 'left', margin: '10px 10px' }}>
                            <p className='font-bold text-secondary-grey my-1'>Parent Account</p>
                            <FormControl fullWidth variant='outlined'>
                                <InputLabel id='dropdown-label'></InputLabel>
                                <Select
                                    labelId='dropdown-label'
                                    label=''
                                    sx={{
                                        textAlign: 'left',
                                        width: '100%',
                                        borderRadius: '12px',
                                        height: '50px',
                                    }}
                                >
                                    <MenuItem value=''>Select an option</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
                {/*<h1 className='p-2 w-full border-b-2 border-gray-400' />
                 <Grid container className='w-full'>
                    <Grid
                        item
                        xs={8}
                        sx={{
                            padding: 1,
                            textAlign: 'left',
                        }}
                    >
                        <p className='font-bold text-secondary-grey my-1'>Parent Account</p>
                        <Grid container>
                            <Grid item xs={6}>
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
                                        padding: '5px 5px 5px 0',
                                    }}
                                />
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
                                        padding: '5px 5px 5px 0',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
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
                                        padding: '5px 0 5px 5px',
                                    }}
                                />
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
                                        padding: '5px 0 5px 5px',
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> */}
                {/**
                 * Product Section
                 */}
                <h1 className='p-2 w-full border-b-2 border-gray-400' />
                <Box className='w-full mt-4'>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                            <Tab label='Address' />
                            <Tab label='Contact' />
                            <Tab label='Trade Terms' />
                            <Tab label='Price List' />
                            <Tab label='Billing' />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Address />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Contact />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <TradeTerms />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <PriceList />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Billing />
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

export default Customer;
