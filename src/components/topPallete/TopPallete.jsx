import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TextField } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import PaginationOnPages from './Pagination';

const TopPallete = () => {
    return (
        <div>
            <div className='h-[52px] border-b-[2px] border-gray-500 flex items-center'>
                <button className='h-full w-16 p-1 flex items-center justify-center'>
                    <svg viewBox='-5 0 40 26' fill='none' stroke='#4257BE' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M20 12H5M12 19l-7-7 7-7' />
                    </svg>
                </button>
                <span className='h-full border-r-[2px] border-gray-500' />

                <button className='h-full w-18 ml-2 p-1 flex items-center justify-center'>
                    <svg className='h-full w-7 p-0' fill='none' stroke='currentColor' viewBox='2 2 22 23'>
                        <path strokeLinecap='round' stroke='#4257BE' strokeLinejoin='round' strokeWidth='3' d='M11 5v16m-6-8h12' />
                    </svg>
                    New
                </button>

                <span className='h-[calc(100%-14px)] p-1 border-r-[2px] border-gray-500' />
                <button className='h-full w-19 p-1 ml-1 flex items-center justify-center'>
                    <DeleteIcon
                        sx={{
                            color: '#4257BE',
                        }}
                    />
                    Delete
                </button>
                <span className='h-[calc(100%-14px)] p-1 border-r-[2px] border-gray-500' />
                <button className='h-full w-25 p-1 ml-2 flex items-center justify-center'>
                    <FormatAlignJustifyIcon
                        sx={{
                            color: '#4257BE',
                        }}
                    />
                    Export to Excel
                </button>
                <span className='h-[calc(100%-14px)] p-1 border-r-[2px] border-gray-500' />
                <button className='h-full w-25 p-1 flex items-center justify-center'>
                    <MoreVertIcon
                        sx={{
                            color: '#4257BE',
                        }}
                    />
                    Focused View
                </button>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start p-1'>
                    <button className='h-full w-25 p-1 flex items-center justify-center'>
                        My Active Contacts
                        <KeyboardArrowDownIcon
                            sx={{
                                color: '#4257BE',
                            }}
                        />
                    </button>
                </div>
                <div className='flex items-center justify-start p-1'>
                    <button className='h-full w-25 flex items-center justify-center'>
                        <ViewColumnIcon
                            sx={{
                                color: '#4257BE',
                            }}
                        />
                        Edit Columns
                    </button>
                    <span className='p-1' />
                    <button className='h-full w-25 flex items-center justify-center'>
                        <FilterAltIcon
                            sx={{
                                color: '#4257BE',
                            }}
                        />
                        Edit Filter
                    </button>
                    <span className='p-1' />
                    <TextField variant='outlined' size='small' placeholder='Search Keyword' sx={{ padding: '3px' }} />
                    <span className='mr-5' />
                </div>
            </div>
        </div>
    );
};

export default TopPallete;
