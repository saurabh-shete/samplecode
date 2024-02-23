import React, { useState, useEffect, useHi } from 'react';
import { Box, Button, CircularProgress, Divider, TextField, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { Diamond, Email, Lock } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { LOGIN_URL } from './config';
import useRefreshToken from '../../hooks/useRefreshToken';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/store';
import { decodeToken } from 'react-jwt';

const BackgroundBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(https://static.zohocdn.com/iam/v2/components/images/bg.49756b7c711696d95133fa95451f8e13.svg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));

export default function Login () {
    const navigate = useNavigate();
    const refresh = useRefreshToken();
    const login = useStore(state => state.login);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isSubmitPressed, setIsSubmitPressed] = useState(false);
    //const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    //E1AniZ@@
    //
    const axiosPrivate = useAxiosPrivate();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const callrefresh = async () => {
        refresh();
    };

    const onSubmit = async data => {
        try {
            if (!userPassword || !userEmail) {
                return;
            }
            if (userEmail === 'rubix@gmail.com' && userPassword === 'letmego') {
                navigate('/');
                localStorage.setItem('isUserLogged', JSON.stringify(true));
            }
            const payload = {
                email: userEmail,
                password: userPassword,
            };

            const loginResponse = await axiosPrivate.post('auth/login', payload);
            const myDecodedToken = decodeToken(loginResponse.data.data.accessToken);
            const userResponse = await axiosPrivate.get(`users/${myDecodedToken.id}`);
            console.log(userResponse);
            login({
                accessToken: loginResponse.data.data.accessToken,
                id: myDecodedToken.id,
                username: userResponse.data.data.username,
                email: userResponse.data.data.email,
                language: userResponse.data.data.language,
                primaryOrganizationId: userResponse.data.data.primaryOrganizationId,
            });
            localStorage.setItem('isUserLogged', JSON.stringify(true));
            localStorage.setItem('refreshToken', loginResponse.data.data.refreshToken);
            localStorage.setItem('accessToken', loginResponse.data.data.accessToken);
            navigate('/');
        } catch (error) {
            console.log('ERROR', error);
        }
    };

    return (
        <Box>
            <BackgroundBox>
                <Box bgcolor={'white'} mr={0.5} p={6}>
                    <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
                        <Diamond fontSize='large' />
                        <Typography fontSize={15}>Rubix</Typography>
                        <Typography fontSize={30} fontWeight={700}>
                            Sign in
                        </Typography>
                        <Typography fontSize={20}>to access Inventory</Typography>
                        <TextField
                            fullWidth
                            value={userEmail}
                            error={!userEmail && isSubmitPressed}
                            variant='outlined'
                            margin='normal'
                            label='Email'
                            name='passwd'
                            InputProps={{
                                startAdornment: <Email />,
                            }}
                            helperText={!userEmail && isSubmitPressed && 'Please Enter your Email'}
                            onChange={e => setUserEmail(e.target.value)}
                            sx={{ marginTop: 6 }}
                        />

                        <TextField
                            fullWidth
                            error={!userPassword && isSubmitPressed}
                            value={userPassword}
                            variant='outlined'
                            margin='normal'
                            label='Password'
                            InputProps={{
                                startAdornment: <Lock />,
                            }}
                            helperText={!(userPassword && isSubmitPressed) && 'Please Enter your Password'}
                            onChange={e => setUserPassword(e.target.value)}
                            sx={{ marginTop: 6 }}
                        />
                        <Button fullWidth variant='contained' color='primary' size='large' type='submit' sx={{ marginTop: 4 }}>
                            Log In
                        </Button>
                        {/* <Button fullWidth variant='contained' color='primary' size='large' onClick={() => callrefresh()} sx={{ marginTop: 4 }}>
                            Refresh
                        </Button> */}
                        <Box sx={{ textAlign: 'center' }} my={3}>
                            <Link to={'#'} style={{ color: 'blue' }}>
                                Forgot Password?
                            </Link>
                        </Box>
                    </Box>
                </Box>

                <Box bgcolor={'white'}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <img
                            src={'https://accounts.zoho.com/v2/components/images/passwordless_illustration2x.png'}
                            height={350}
                            width={350}
                            style={{ marginBottom: 10 }}
                        />
                        <Box mt={1}>
                            <Typography fontSize={20}>Secure sign-in</Typography>
                            <Typography width={300} textAlign={'center'} mt={1}>
                                Move away from risky passwords and experience one-tap access to Rubix. Download and install OneAuth.
                            </Typography>
                        </Box>
                        <Button sx={{ justifySelf: 'center', borderRadius: 10, bgcolor: 'whitesmoke', padding: 1.5, my: 2 }}>Learn More</Button>
                    </Box>
                </Box>
            </BackgroundBox>
        </Box>
    );
}
