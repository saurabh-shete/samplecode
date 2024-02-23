import { IconButton, Box, Divider, Stack, Drawer, MenuItem, Popover, TextField, Button } from '@mui/material';
import { Search, Settings } from '@mui/icons-material';
import React, { useState, useRef, useEffect } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { Link, Router, useNavigate, BrowserRouter, Navigate } from 'react-router-dom';
import useStore from '../../../store/store';
const SettingsBar = () => {
    const [open, setOpen] = useState(null);
    const { toggleSideNav, toggleComponent, toggleNav } = useStore();
    const navigate = useNavigate();
    const handleOpen = (event) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <span>
                <span style={{ transform: 'scale(1.1)' }}>
                    <IconButton
                        onClick={handleOpen}
                        color={'default'}
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
                                    bgcolor: (theme) => theme.palette.text.secondary,
                                },
                            }),
                        }}
                    >
                        {/* <Settings fontSize='large' /> */}

                        <AiFillSetting />
                    </IconButton>
                </span>
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
                    <Divider sx={{ borderStyle: 'dashed' }} />

                    <div className="bg-[#F8F8FF]">
                        <MenuItem
                            className="pointer-events-none"
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <Box component={'span'} mr={1}>
                                <IconButton color={'default'}>
                                    <Settings color={'default'} />
                                </IconButton>
                            </Box>
                            <span className="text-black">Settings</span>
                        </MenuItem>
                        <MenuItem
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                placeholder="Search Settings"
                                InputProps={{
                                    startAdornment: (
                                        <IconButton color="default">
                                            <Search />
                                        </IconButton>
                                    ),
                                }}
                            />
                        </MenuItem>
                    </div>

                    <Divider sx={{ borderStyle: 'dashed' }} />
                    <div className="pt-6">
                        <MenuItem
                            onClick={(e) => {
                                navigate('/settings/organization-profile');

                                toggleSideNav('isSettingsOpen');
                                toggleNav();
                                //toggleComponent('isSettingsOpen');
                                handleClose();
                            }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingTop: 1,
                                paddingLeft: 2,
                                paddingBottom: 1,
                                '&:hover': {
                                    backgroundColor: '#66b2ff',
                                    color: 'white',
                                },
                            }}
                        >
                            Organization Profile
                        </MenuItem>

                        <MenuItem
                            onClick={() => {
                                navigate('/settings/user-and-role');
                                toggleSideNav('isSettingsOpen');
                                toggleNav();
                                //toggleComponent('isSettingsOpen');
                                handleClose();
                            }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingTop: 1,
                                paddingLeft: 2,
                                paddingBottom: 1,
                                '&:hover': {
                                    backgroundColor: '#66b2ff',
                                    color: 'white',
                                },
                            }}
                        >
                            Users & Roles
                        </MenuItem>
                        <MenuItem
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingTop: 1,
                                paddingLeft: 2,
                                paddingBottom: 1,
                                '&:hover': {
                                    backgroundColor: '#66b2ff',
                                    color: 'white',
                                },
                            }}
                        >
                            Warehouses
                        </MenuItem>
                        <MenuItem
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingTop: 1,
                                paddingLeft: 2,
                                paddingBottom: 1,
                                '&:hover': {
                                    backgroundColor: '#66b2ff',
                                    color: 'white',
                                },
                            }}
                        >
                            Branches
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                navigate('/settings/global-master');
                                toggleSideNav('isSettingsOpen');
                                toggleNav();
                                //toggleComponent('isSettingsOpen');
                                handleClose();
                            }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingTop: 1,
                                paddingLeft: 2,
                                paddingBottom: 1,
                                '&:hover': {
                                    backgroundColor: '#66b2ff',
                                    color: 'white',
                                },
                            }}
                        >
                            Global Master
                        </MenuItem>
                    </div>
                </Drawer>
            </span>
        </>
    );
};

export default SettingsBar;
