import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useStore from '../../store/store';

const SwipeableTemporaryDrawer = () => {
    const state = useStore();

    return (
        <div>
            <IconButton
                color='white'
                onClick={() => {
                    // const activeStateKey = Object.keys(state.componentInFocus).find(key => state.componentInFocus[key]);
                    // const activeStateKeyOrDefault = activeStateKey || 'isSideNavOpen';
                    state.toggleSideNav('isSideNavOpen');
                }}
            >
                <MenuIcon />
            </IconButton>
        </div>
    );
};

export default SwipeableTemporaryDrawer;
