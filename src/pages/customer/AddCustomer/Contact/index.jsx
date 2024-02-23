import React from 'react';
import { Close } from '@mui/icons-material';

const index = props => {
    return (
        <div>
            <div>
                <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 '>
                    <div className='bg-white w-[440px] shadow-lg absolute w-[50%]'>
                        <div className='py-2 px-2 w-full'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-lg font-semibold text-gray-800'>Add Contact</h2>
                                <button className='text-gray-600 hover:text-gray-800' onClick={props.onClose}>
                                    <Close sx={{ '&:hover': { color: 'red' } }} />
                                </button>
                            </div>
                        </div>
                        <form>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='px-2'>
                                    <label htmlFor='name' className='block text-sm font-medium text-left'>
                                        Name
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                        required
                                    />
                                </div>
                                <div className='px-2'>
                                    <label htmlFor='jobTitle' className='block text-sm font-medium text-left'>
                                        Job Title
                                    </label>
                                    <input
                                        type='text'
                                        id='jobTitle'
                                        className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                        required
                                    />
                                </div>
                                <div className='px-2'>
                                    <label htmlFor='email' className='block text-sm font-medium text-left'>
                                        Email
                                    </label>
                                    <input
                                        type='text'
                                        id='email'
                                        className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                        required
                                    />
                                </div>
                                <div className='px-2'>
                                    <label htmlFor='phone' className='block text-sm font-medium text-left'>
                                        Phone
                                    </label>
                                    <input
                                        type='text'
                                        id='phone'
                                        className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='flex justify-start p-3'>
                                <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 mr-2'>
                                    Save
                                </button>
                                <button
                                    type='button'
                                    className='bg-white text-gray-600 py-2 px-4 rounded cursor-pointer hover:bg-gray-100'
                                    onClick={props.onClose}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
