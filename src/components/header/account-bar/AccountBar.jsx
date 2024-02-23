import { useState, useRef, useEffect } from 'react';
// @mui
import { Box, Divider, Typography, Stack, Drawer, MenuItem, Button, IconButton, Popover } from '@mui/material';
import { BsFillPersonFill } from 'react-icons/bs';
import useStore from '../../../store/store';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

const account = {
    displayName: 'Jaydon Frankie',
    email: 'demo@rubix.cc',
    photoURL: 'src/assets/icons/Person.svg',
};

const MENU_OPTIONS = [
    {
        label: 'Help Documents',
        icon: 'eva:home-fill',
    },
    {
        label: 'FAQs',
        icon: 'eva:person-fill',
    },
    {
        label: 'Forum',
        icon: 'eva:settings-2-fill',
    },
    {
        label: 'Video Tutorials',
        icon: 'eva:settings-2-fill',
    },
    {
        label: 'Explore Features',
        icon: 'eva:settings-2-fill',
    },
    {
        label: 'Migration Guide',
        icon: 'eva:settings-2-fill',
    },
];

// ----------------------------------------------------------------------

export default function AccountBar () {
    const logout = useStore(state => state.logout);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleOpen = event => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        logout();
        localStorage.removeItem('isUserLogged');
        localStorage.removeItem('refreshToken');
        navigate('/login');
    };

    return (
        <span>
            <span style={{ transform: 'scale(1.1)' }}>
                <IconButton
                    onClick={handleOpen}
                    sx={{
                        width: 40,
                        height: 40,

                        ...(open && {
                            '&:before': {
                                zIndex: 1,
                                content: "''",
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                position: 'absolute',
                                alignSelf: 'center',
                                bgcolor: theme => theme.palette.text.secondary,
                            },
                        }),
                    }}
                >
                    <BsFillPersonFill style={{ transform: 'scale(1.1)' }} />
                </IconButton>
            </span>
            <Drawer
                anchor='right'
                open={open}
                onClose={handleClose}
                sx={{
                    '& .MuiDrawer-paper': {
                        borderRadius: 0,
                        width: '28vw',
                        height: '100%',
                        backgroundColor: 'white',
                        boxShadow: 'none',
                    },
                }}
            >
                <Box sx={{ my: 1.5, px: 2.5 }}>
                    <div className='flex flex-row'>
                        <div className='h-16 w-16'>
                            <img className='rounded-md' src='src\assets\user-thumbnail.png' alt='Profile Image' />
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2'>
                            <Typography variant='body2' noWrap>
                                <span className='text-black'>{account.displayName}</span>
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
                                {account.email}
                            </Typography>
                        </div>
                    </div>
                </Box>
                <div className='px-4'>
                    <Divider sx={{ borderStyle: 'dashed' }} />
                </div>
                <div className='px-4 pt-3 flex flex-start items-center'>
                    <Button
                        sx={{
                            color: '#66b2ff',
                        }}
                    >
                        My Account
                    </Button>
                    <Button
                        onClick={() => handleLogout()}
                        sx={{
                            position: 'fixed',
                            color: '#66b2ff',
                            right: 8,
                        }}
                    >
                        Sign Out
                    </Button>
                </div>
                <Divider sx={{ borderStyle: 'dashed' }} />
                <div className='flex flex-start p-2 ml-4 text-black'>You are currently in the free plan.</div>
                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack sx={{ p: 1 }}>
                    {MENU_OPTIONS.map(option => (
                        <MenuItem key={option.label} onClick={handleClose}>
                            <span className='text-black'>{option.label}</span>
                        </MenuItem>
                    ))}
                </Stack>
                <Divider sx={{ borderStyle: 'dashed' }} />
            </Drawer>
        </span>
    );
}
