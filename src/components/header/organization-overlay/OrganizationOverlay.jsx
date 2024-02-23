import React, { useState, useRef, useEffect } from 'react';
import { IconButton, Box, Divider, Backdrop, Drawer, Typography, Button } from '@mui/material';
import { CheckCircle, CorporateFare, OpenInNew, Person, Search, Settings } from '@mui/icons-material';

const OrganizationOverlay = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <span>
            {/* <span className={open ? `fixed top-16 left-0 w-full h-full z-10 bg-black opacity-20` : ''} onClick={handleClose}></span> */}

            <Button
                onClick={handleOpen}
                sx={{
                    width: 120,
                    height: 40,
                    background: '#4257BE',
                    color: '#FFFFFF',
                    marginLeft: 1,
                    borderRadius: 3,
                    position: 'relative',
                    fontSize: 'small',
                    '&:hover': {
                        background: '#4257BE',
                    },
                }}
            >
                Org name
            </Button>

            <Drawer
                anchor="right"
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
                <Box
                    sx={{
                        height: 500,
                    }}
                >
                    <Box
                        sx={{
                            height: 200,
                            backgroundColor: '#D9D9D9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: '50%',
                                border: '30px solid white',
                                width: 100,
                                height: 100,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Person fontSize="large" />
                        </Box>
                    </Box>
                    <Box sx={{ margin: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography fontSize={14} fontWeight={700} color={'grey'}>
                                User ID:
                            </Typography>
                            <Typography fontSize={12} color={'#7B7B7B'} alignSelf={'center'} ml={1}>
                                User 001
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography fontSize={14} fontWeight={700} color={'grey'}>
                                User ID:
                            </Typography>
                            <Typography fontSize={12} color={'#7B7B7B'} alignSelf={'center'} ml={1}>
                                User 002
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="space-between" ml={3} mr={3} mb={1}>
                        <Typography fontWeight={500} style={{ alignSelf: 'flex-start' }}>
                            Organizations
                        </Typography>
                        <Settings color="primary" sx={{ alignSelf: 'center' }} />
                    </Box>
                    <Divider sx={{ width: '85%', marginLeft: 'auto', marginRight: 'auto' }} />
                    <Box display="flex" ml={3} mr={3} mb={1} mt={1} p={2} sx={{ borderWidth: 2 }} justifyContent={'space-between'}>
                        <CorporateFare fontSize="large" />
                        <Divider orientation="vertical" />
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography fontSize={14} fontWeight={700} color={'grey'}>
                                Org Name 1
                            </Typography>
                            <Typography fontSize={12} color={'#7B7B7B'}>
                                Org ID: ORG001
                            </Typography>
                        </Box>
                        <IconButton>
                            <OpenInNew sx={{ alignSelf: 'center' }} />
                        </IconButton>
                    </Box>
                    <Box display="flex" ml={3} mr={3} mb={1} mt={1} p={2} sx={{ borderWidth: 2 }} justifyContent={'space-between'}>
                        <CorporateFare fontSize="large" />
                        <Divider orientation="vertical" />
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography fontSize={14} fontWeight={700} color={'grey'}>
                                Org Name 2
                            </Typography>
                            <Typography fontSize={12} color={'#7B7B7B'}>
                                Org ID: ORG002
                            </Typography>
                        </Box>
                        <IconButton>
                            <CheckCircle color="primary" sx={{ alignSelf: 'center' }} />
                        </IconButton>
                    </Box>
                </Box>
            </Drawer>
        </span>
    );
};

export default OrganizationOverlay;
