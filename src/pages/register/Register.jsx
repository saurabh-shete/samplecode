import React, { useState } from 'react';
import { TextField, Container, Typography, Divider, Box, InputAdornment, MenuItem, Checkbox, Button, IconButton, styled } from '@mui/material';
import {
    Business,
    Email,
    Lock,
    Phone,
    LocationOn,
    Inventory,
    FormatQuote,
    ShoppingBag,
    ShoppingCart,
    Diamond,
    PhoneAndroid,
    Language,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import axios from 'axios';
import { useForm } from 'react-hook-form';
const WhiteTypography = styled('Typography')({
    color: 'white',
});

const Register = () => {
    const axiosPrivate = useAxiosPrivate();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = async data => {
        const payload = {
            ...data,
            isAdmin: true,
        };
        const response = await axiosPrivate.post('users', payload);
        localStorage.setItem('token', JSON.stringify(response.data.data.accessToken));
        console.log(response);
    };
    const imageURL =
        'https://pixabay.com/get/g73f712bd4410fc34f0f975caa8444f23f0b14bc5ec11f229802bcb138ca245322bbc49d899f81b76db247377975354df_640.jpg';
    return (
        <Box display='flex' height={'100vh'}>
            <Box
                p={3}
                width='40%'
                sx={{
                    backgroundImage: `url(${imageURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Box display='flex'>
                    <ShoppingCart sx={{ fontSize: 60 }} />
                    <Typography fontSize={30}>Rubix Inventory</Typography>
                </Box>
                <Box mx={3}>
                    <Box display='flex' alignItems='center'>
                        <Divider style={{ backgroundColor: '#ccc', flex: 1 }} />
                        <FormatQuote />
                        <Divider style={{ backgroundColor: '#ccc', flex: 1 }} />
                    </Box>
                    <Typography fontSize={25} p={5}>
                        Thanks to the Rubix Inventory team for this wonderful system. I had been using a traditional software system before, which
                        felt very limited. But Rubix is like a fresh breath of air for my business and choosing it was a very satisfying decision. It
                        has made automation so much simpler.
                    </Typography>
                    <Divider style={{ backgroundColor: '#ccc' }} />
                    <Box display={'flex'} justifyContent={'center'} my={2}>
                        <Diamond sx={{ fontSize: 80, borderRadius: 20, padding: 1, bgcolor: 'whitesmoke', marginRight: 3 }} />
                        <Box>
                            <Typography fontSize={30} fontWeight={700}>
                                Suyash Pandey
                            </Typography>
                            <Typography fontSize={20}>SPC Healthcare Pvt Ltd., India</Typography>
                        </Box>
                    </Box>
                    <Divider style={{ backgroundColor: '#ccc' }} />
                    <Typography textAlign={'center'}>OTHER FINANCE PRODUCTS</Typography>
                    <Box display={'flex'} justifyContent={'space-between'} mt={4}>
                        <Typography>Rubix Books</Typography>|<Typography align='center'>Rubix Expense</Typography>|
                        <Typography align='right'>Rubix Subscription</Typography>
                    </Box>
                </Box>
            </Box>
            <Box width='60%' mx={2}>
                <Box display='flex' justifyContent='flex-end' my={2} mr={2}>
                    <Typography>
                        Already have a Rubix account?{' '}
                        <Link to='/login' style={{ color: 'blue' }}>
                            Sign In
                        </Link>
                    </Typography>
                </Box>
                <Divider style={{ backgroundColor: '#ccc' }} />
                <Container component='main' maxWidth='sm'>
                    <Box mt={4}>
                        <Typography variant='h5' fontWeight={700}>
                            Start your full-featured Trial for 14 days
                        </Typography>
                        <Box component='form' mt={2}>
                            <TextField
                                fullWidth
                                id='outlined-company-name'
                                {...register('username', { required: 'User name is required' })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Business />
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder='Company Name'
                            />
                            <h3 className='text-red-500'>{errors?.username?.message}</h3>
                            <TextField
                                fullWidth
                                id='outlined-company-name'
                                {...register('password', { required: 'Password is required' })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Business />
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder='Password'
                            />
                            <h3 className='text-red-500'>{errors?.password?.message}</h3>
                            <TextField
                                sx={{ mt: 1.5 }}
                                fullWidth
                                {...register('email', { required: 'User email is required' })}
                                id='outlined-email'
                                type='email'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Email />
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder='Email'
                            />
                            <h3 className='text-red-500'>{errors?.email?.message}</h3>
                            <TextField
                                sx={{ mt: 1.5 }}
                                fullWidth
                                {...register('mobileNumber', { required: 'User mobile number is required' })}
                                id='outlined-country'
                                label='Mobile'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <PhoneAndroid />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <h3 className='text-red-500'>{errors?.mobileNumber?.message}</h3>
                            <TextField
                                sx={{ mt: 1.5 }}
                                fullWidth
                                id='outlined-state'
                                {...register('language', { required: 'Language is required' })}
                                label='Language'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Language />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <h3 className='text-red-500'>{errors?.language?.message}</h3>
                            <Typography variant='subtitle2' mt={2}>
                                Your data will be in the INDIA data center.
                            </Typography>
                            <Checkbox />{' '}
                            <Box component='span'>
                                I agree to the{' '}
                                <Link to='#' style={{ color: 'blue' }}>
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link to='#' style={{ color: 'blue' }}>
                                    Privacy Policy
                                </Link>
                            </Box>
                            <Button fullWidth variant='contained' color='primary' onClick={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
                                CREATE YOUR FREE ACCOUNT
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Register;
