import React from 'react';
import { Avatar, Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import OrganizationTile from './settings/OrganizationTile';

const OrganizationsPage = () => {
    const organizations = [
        {
            logoSrc: 'org1-logo.png',
            name: 'Sample Org 1',
            isFree: true,
            creationDate: '2023-08-26',
            organizationId: 'ORG123',
            edition: 'Standard',
            isAdmin: true,
        },
        // Add more organization objects as needed
    ];
    return (
        <div className=''>
            <div className='header flex items-center justify-between p-2'>
                <div className='title mr-4'>Rubix</div>
                <div className='avatar pr-5 mt-1'>
                    <Avatar />
                </div>
            </div>
            <div className='flex justify-center'>
                <div className=' flex-col items-center w-[calc(100vw-30%)] h-screen text-left'>
                    <div className='flex  rounded p-6 items-center'>
                        <Button
                            variant='outlined'
                            color='primary'
                            className='text-blue-500 border border-gray-300 hover:bg-white hover:text-blue-500'
                            startIcon={<KeyboardBackspaceIcon className='text-blue-500' />}
                        >
                            Back
                        </Button>
                    </div>

                    <div className='ml-6'>
                        <div className='mb-4'>
                            <div className='flex-col items-start'>
                                {' '}
                                {/* Wrap Hi Contact and New Organization */}
                                <div className=''>
                                    <p className='text-2xl font-bold'>Hi Contact!</p>
                                </div>
                                <div className=' flex  justify-between'>
                                    <p className='pt-2 w-90'>
                                        You are a part of the following organizations. Go to the organization which you wish to access now.
                                    </p>
                                    <div className=''>
                                        <button className='bg-blue-500 text-white px-3 py-2 rounded-md'>New Organization</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Organization Tiles */}
                        <div className=''>
                            {organizations.map((org, index) => (
                                <OrganizationTile key={index} {...org} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizationsPage;
