import React, { useState, useRef } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import UserTile from './UserTile';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import InviteUsers from './InviteUsers';
import { Link } from 'react-router-dom';

const UsersandRoles = () => {
    const [activeContent, setActiveContent] = useState('allUsers');
    const [exportDropdownOpen, setExportDropdownOpen] = useState(false);
    const [allUsersDropdownOpen, setAllUsersDropdownOpen] = useState(false);

    const [isInviteUsers, setIsInviteUsers] = useState(false);
    const [batchIndex, setBatchIndex] = useState(0);
    const allUsersAnchorRef = useRef(null);

    const batchSize = 5; // Number of users to display per batch

    const toggleInviteModal = () => {
        setIsInviteUsers(!isInviteUsers);
    };

    const toggleAllUsersDropdown = () => {
        setAllUsersDropdownOpen(!allUsersDropdownOpen);
    };

    const handleTabChange = (event, newValue) => {
        setActiveContent(newValue);
    };

    const toggleExportDropdown = () => {
        setExportDropdownOpen(!exportDropdownOpen);
    };

    const userDetailsAnchorRef = useRef(null);

    const scrollDown = () => {
        setBatchIndex(prevIndex => Math.min(prevIndex + 1, Math.ceil(users.length / batchSize) - 1));
    };

    const scrollUp = () => {
        setBatchIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const users = [
        {
            name: 'John Doe',
            email: 'john@example.com',
            title: 'Software Engineer',
            role: 'Admin',
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            title: 'Designer',
            role: 'User',
        },
        {
            name: 'Robert Johnson',
            email: 'robert@example.com',
            title: 'Product Manager',
            role: 'Admin',
        },
        {
            name: 'Lisa Anderson',
            email: 'lisa@example.com',
            title: 'Frontend Developer',
            role: 'User',
        },
        {
            name: 'Michael Brown',
            email: 'michael@example.com',
            title: 'Backend Developer',
            role: 'User',
        },
        {
            name: 'Emily Davis',
            email: 'emily@example.com',
            title: 'UX Designer',
            role: 'User',
        },
        {
            name: 'David Miller',
            email: 'david@example.com',
            title: 'Product Designer',
            role: 'User',
        },
        {
            name: 'Amit Patel',
            email: 'amit@example.com',
            title: 'Software Engineer',
            role: 'User',
        },
        {
            name: 'Sneha Gupta',
            email: 'sneha@example.com',
            title: 'QA Engineer',
            role: 'User',
        },
        {
            name: 'Rajesh Kumar',
            email: 'rajesh@example.com',
            title: 'Product Manager',
            role: 'Admin',
        },
        {
            name: 'Priya Sharma',
            email: 'priya@example.com',
            title: 'Frontend Developer',
            role: 'User',
        },
        {
            name: 'Vikram Singh',
            email: 'vikram@example.com',
            title: 'Backend Developer',
            role: 'User',
        },
        // Add more user objects here
    ];

    const roles = [
        {
            roleName: 'Admin',
            description: 'Administrator with full access',
        },
        {
            roleName: 'User',
            description: 'Regular user with limited access',
        },
        // Add more role objects here
    ];

    const visibleUsers = users.slice(batchIndex * batchSize, (batchIndex + 1) * batchSize);

    const handleDropdownMenuItemClick = () => {
        // Handle menu item click here
    };

    return (
        <div>
            <div className='subheader h-20 w-full border-b border-gray-300 flex justify-between items-end px-4 sticky top-16 z-10'>
                {/* Left side */}
                <div className='flex items-center space-x-4'>
                    {/* Inside the return statement of the component */}
                    <Tabs value={activeContent} onChange={handleTabChange} textColor='primary' indicatorColor='primary'>
                        <Tab
                            label={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>All Users</span>
                                    <ArrowDropDownIcon onClick={toggleAllUsersDropdown} />
                                </div>
                            }
                            value='allUsers'
                            ref={allUsersAnchorRef}
                        />
                        <Tab
                            label={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Roles</span>
                                </div>
                            }
                            value='roles'
                        />
                    </Tabs>
                    {/* ... */}
                    <Popover
                        open={allUsersDropdownOpen}
                        anchorEl={allUsersAnchorRef.current}
                        onClose={toggleAllUsersDropdown}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left', // Align the menu with the left side of the tab
                        }}
                        // transformOrigin={{
                        //   vertical: 'top',
                        //   horizontal: 'left', // Align the menu with the left side of the tab
                        // }}
                        // style={{
                        //   top: 'calc(100% + 8px)', // Adjust this value as needed
                        //   left: '50%', // Align the menu with the center of the arrow horizontally
                        //   transform: 'translateX(-50%)', // Center the menu horizontally
                        // }}
                    >
                        <MenuItem onClick={handleDropdownMenuItemClick}>All</MenuItem>
                        <MenuItem onClick={handleDropdownMenuItemClick}>Inactive</MenuItem>
                        <MenuItem onClick={handleDropdownMenuItemClick}>Active</MenuItem>
                        {/* Add more menu items here */}
                    </Popover>
                </div>
                {/* Right side */}
                {activeContent === 'allUsers' && (
                    <>
                        <div className='flex items-center space-x-4 space-y-5'>
                            <div
                                className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer text-sm hover:bg-blue-600'
                                onClick={toggleInviteModal}
                            >
                                Invite User
                            </div>

                            <div className={`relative inline-block dropdown ${exportDropdownOpen ? 'open' : ''}`}>
                                <div
                                    className='bg-white text-gray-800 py-2 px-4 rounded focus:outline-none cursor-pointer'
                                    onClick={toggleExportDropdown}
                                >
                                    <MoreHorizIcon />
                                </div>
                                <ul
                                    className={`dropdown-content absolute bg-white border border-gray-300 ${exportDropdownOpen ? '' : 'hidden'}`}
                                    style={{ right: 0 }}
                                >
                                    <li className='px-4 py-2 hover:bg-gray-100'>Export</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}

                {activeContent === 'roles' && (
                    <div className='flex items-center space-x-4 ' style={{ marginBottom: '10px', marginRight: '15px' }}>
                        <Link to='new-role'>
                            <div className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer space-y-5'>New Role</div>
                        </Link>
                    </div>
                )}
            </div>

            <div className='sticky top-16 z-5'>
                {/* Additional Header */}
                {activeContent === 'allUsers' && (
                    <div className='bg-white border  bottom-1 h-15 px-4 items-center sticky top-15 z-5 grid grid-cols-3 gap-4'>
                        <div className='col-span-1 flex justify-center items-center'>
                            <h2 className='text-lg font-semibold ml-2'>User Details</h2>
                            <div className='m-1'>
                                <div className='text-blue-500 hover:text-blue-600' onClick={scrollUp}>
                                    <ArrowUpwardIcon fontSize='small' />
                                </div>
                                <div className='text-blue-500 hover:text-blue-600 ' onClick={scrollDown}>
                                    <ArrowDownwardIcon fontSize='small' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 flex justify-center items-center'>
                            <h2 className='text-lg font-semibold'>Role</h2>
                        </div>
                        <div className='col-span-1'>{/* You can add a third column here if needed */}</div>
                    </div>
                )}
            </div>
            {isInviteUsers && <InviteUsers onClose={() => setIsInviteUsers(false)} />}
            <div className='sticky top-16 z-5'>
                {/* Additional Header for Roles */}
                {activeContent === 'roles' && (
                    <div className='bg-white border-b-2 h-15 px-4 items-center sticky top-15 z-5 grid grid-cols-3 gap-4'>
                        <div className='col-span-1 flex justify-center items-center'>
                            <h2 className='text-lg font-semibold ml-2'>Role Name</h2>
                            <div className='m-1'>
                                <div className='text-blue-500 hover:text-blue-600' onClick={scrollUp}>
                                    <ArrowUpwardIcon fontSize='small' />
                                </div>
                                <div className='text-blue-500 hover:text-blue-600 ' onClick={scrollDown}>
                                    <ArrowDownwardIcon fontSize='small' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <h2 className='text-lg font-semibold'>Description</h2>
                        </div>
                        <div className='col-span-1'>{/* You can add a third column here if needed */}</div>
                    </div>
                )}
            </div>

            <div className='overflow-y-auto h-screen' id='userDetailsSection'>
                <div className=''>
                    {activeContent === 'roles' && (
                        <div className='grid grid-cols-1 h-10'>
                            {/* Grid for roles */}
                            {/* Each role row */}
                            {roles.map((role, index) => (
                                <div key={index} className='grid grid-cols-3  border-b h-20 w-full  hover:bg-gray-100 '>
                                    {/* Role name column */}
                                    <div className='flex items-center justify-center'>
                                        <p className='text-lg font-semibold text-blue-500'>{role.roleName}</p>
                                    </div>
                                    {/* Description column */}
                                    <div className='flex items-center justify-center'>
                                        <p>{role.description}</p>
                                    </div>
                                    {/* Actions column */}
                                    <div className='flex items-center  justify-center '>
                                        <button className='bg-gray-100  py-1 px-2 text-black hover:bg-gray-200 rounded-l-md'>Edit</button>
                                        <button className='bg-gray-100 border-x-2 py-1 px-2 text-black hover:bg-gray-200'>Clone</button>
                                        <button className='bg-gray-100  py-1 px-2 text-black hover:bg-gray-200 rounded-r-md'>
                                            <DeleteOutlineRoundedIcon />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {/* You can add more rows here */}
                        </div>
                    )}

                    {activeContent === 'allUsers' && (
                        <div className='grid grid-cols-1 '>
                            {/* Grid for user details */}
                            {visibleUsers.map((user, index) => (
                                <div key={index} className='grid grid-cols-3 gap-4 border-b hover:bg-gray-100 h-full w-full'>
                                    {/* User details column */}
                                    <div className='items-center justify-center'>
                                        <UserTile user={user} className='items-center justify-center' />
                                    </div>
                                    {/* Role column */}
                                    <div className='flex items-center justify-center'>
                                        <p className='text-lg font-semibold'>{user.role}</p>
                                    </div>
                                    {/* Settings icon column */}
                                    <div className='flex items-center justify-center'>
                                        <IconButton color='gray' aria-label='settings'>
                                            <SettingsIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UsersandRoles;
