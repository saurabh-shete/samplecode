import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuDrawer from './MenuDrawer.jsx';
import SearchBar from './SearchBar.jsx';
import QuickAccess from './QuickAccess.jsx';
import NotificationBar from './notification-bar/NotificationBar.jsx';
import AccountBar from './account-bar/AccountBar.jsx';
import SettingsBar from './settings-bar/SettingsBar.jsx';
import OrganizationOverlay from './organization-overlay/OrganizationOverlay.jsx';
import useStore from '../../store/store';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

const HeaderMenu = () => {
    const state = useStore();

    // useEffect(() => {
    //     if (isDockOpen) {
    //         console.log('OPENED');
    //         document.body.classList.add('overflow-hidden');
    //     } else {
    //         console.log('CLOSED');
    //         document.body.classList.remove('overflow-hidden');
    //     }
    // }, [isDockOpen]);

    return (
        <div className='bg-[#FFFFFF] relative'>
            <div className='absolute w-full backdrop-blur-xl'>
                <Box
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <AppBar position='relative' sx={{ background: '#fff', borderRadius: 0 }}>
                        <Toolbar>
                            <SearchBar />
                            <QuickAccess />
                            <Box sx={{ flexGrow: 1 }}></Box>
                            <OrganizationOverlay />
                            <Box sx={{ flexGrow: 1 }}></Box>
                            <Box sx={{ display: 'flex', backgroundColor: '#F8F8F8', borderRadius: 10, padding: '6px' }}>
                                <Box sx={{ width: '100%', justifyContent: 'center', alignItems: 'flex-end' }} pr={1}>
                                    <span className='px-2'>
                                        <NotificationBar />
                                    </span>
                                    <span className='px-2'>
                                        <SettingsBar />
                                    </span>

                                    <span className='px-2'>
                                        <AccountBar />
                                    </span>
                                </Box>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </div>
    );
};

export default HeaderMenu;
