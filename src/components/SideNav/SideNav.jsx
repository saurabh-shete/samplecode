import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navList } from './sideNavRoutesShrink';
import PopupState, { bindTrigger, bindPopover, bindHover } from 'material-ui-popup-state';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import DiamondIcon from '@mui/icons-material/Diamond';
import useStore from '../../store/store';
import SidebarContent from '../../components/SideNav/sideNavRoutesExpand';
import { Paper, Box, Typography, MenuItem, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

import MenuDrawer from '../header/MenuDrawer';

const SideNav = () => {
    const state = useStore();

    const navigate = useNavigate();

    const contentMap = {
        isSideNavOpen: (
            <div className='min-h-screen bg-[#D4DAF9] transition duration-0'>
                <div className='flex justify-center items-center h-16'>
                    <MenuDrawer />
                </div>
                <div id='sidebar-menu' className='transition duration-0 w-60 flex-col justify-center items-center'>
                    <SidebarContent />
                </div>
            </div>
        ),
        isSettingsOpen: (
            <div className='h-[100%]'>
                <Box
                    sx={{
                        height: '100vh',
                    }}
                >
                    <Box
                        sx={{
                            width: '12rem',
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            bgcolor='#D4DAF9'
                            sx={{
                                height: '4rem',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant='h6'>Inventory</Typography>
                        </Box>
                        <Box
                            sx={{
                                paddingTop: 1,
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#F5F5F5',
                            }}
                        >
                            <IconButton
                                color='primary'
                                aria-label='Back'
                                sx={{
                                    display: 'flex',
                                }}
                                onClick={() => {
                                    navigate(-1);
                                    state.toggleSideNav('shrinkSideNav');
                                }}
                            >
                                <ArrowBackIcon />
                                <Typography variant='body1' sx={{ marginLeft: 1 }}>
                                    Back
                                </Typography>
                            </IconButton>
                            <Typography
                                variant='h5'
                                sx={{
                                    display: 'flex',
                                    paddingY: 2,
                                    paddingLeft: 2,
                                }}
                            >
                                Settings
                            </Typography>
                            <MenuItem
                                onClick={e => {
                                    navigate('/settings/organization-profile');
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
                        </Box>
                    </Box>
                </Box>
            </div>
        ),
        shrinkSideNav: (
            <div className='min-h-screen bg-[#D4DAF9] transition duration-0'>
                <div className='flex justify-center items-center h-16'>
                    <MenuDrawer />
                </div>
                <div id='sidebar-menu' className='transition duration-0 w-16 flex-col justify-center items-center '>
                    <ul className='metismenu list-unstyled' id='side-menu'>
                        <div className='h-100vh'>
                            {navList.map(item => (
                                <div className='list-item-wrapper' key={item.id}>
                                    <PopupState variant='popover' popupId='demo-popup-popover'>
                                        {popupState => (
                                            <li className='relative mb-6 mt-3'>
                                                <Link {...bindHover(popupState)} to={item.path}>
                                                    {item.icon}
                                                </Link>
                                                <HoverPopover
                                                    {...bindPopover(popupState)}
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'left',
                                                    }}
                                                    PaperProps={{ sx: { borderRadius: 0, width: '280px', backgroundColor: '#D4DAF9' } }}
                                                >
                                                    <ul className='p-3 bg-[#D4DAF9] list-unstyled'>
                                                        {item?.childrens?.map(subItem => (
                                                            <li className='py-1' key={subItem.id}>
                                                                <Link to={subItem.path}>{subItem.text}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </HoverPopover>
                                            </li>
                                        )}
                                    </PopupState>
                                </div>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
        ),
    };

    const activeStateKey = Object.keys(state.whichSideNav).find(key => state.whichSideNav[key]);

    // If no state is true, assign the default state
    const activeStateKeyOrDefault = activeStateKey || 'shrinkSideNav';
    // Inline styles to set the width dynamically

    const sideNavContent = contentMap[activeStateKeyOrDefault];
    // const invisibleStyle = {
    //     // Add the CSS styles to hide the scrollbar
    //     // Note that you might need to add vendor prefixes for cross-browser compatibility
    //     scrollbarWidth: 'none',
    //     msOverflowStyle: 'none',
    //     '&::-webkit-scrollbar': {
    //         width: '0.4em',
    //     },
    //     '&::-webkit-scrollbar-track': {
    //         background: 'transparent',
    //     },
    //     '&::-webkit-scrollbar-thumb': {
    //         background: 'transparent',
    //     },
    // };

    return <div className=''>{sideNavContent}</div>;
};

export default SideNav;
