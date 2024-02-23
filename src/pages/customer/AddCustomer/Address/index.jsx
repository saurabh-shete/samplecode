import React from 'react';
import { Close } from '@mui/icons-material';

const index = props => {
    return (
        <div>
            <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 '>
                <div className='bg-white w-[440px] shadow-lg absolute w-[50%]'>
                    <div className='py-2 px-2 w-full'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-lg font-semibold text-gray-800'>Add Address</h2>
                            <button className='text-gray-600 hover:text-gray-800' onClick={props.onClose}>
                                <Close sx={{ '&:hover': { color: 'red' } }} />
                            </button>
                        </div>
                    </div>
                    <form>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='px-2'>
                                <label htmlFor='street1' className='block text-sm font-medium text-left'>
                                    Street 1
                                </label>
                                <input
                                    type='text'
                                    id='street1'
                                    className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                />
                            </div>
                            <div className='px-2'>
                                <label htmlFor='street2' className='block text-sm font-medium text-left'>
                                    Street 2
                                </label>
                                <input
                                    type='text'
                                    id='street2'
                                    className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                />
                            </div>
                            <div className='px-2'>
                                <label htmlFor='city' className='block text-sm font-medium text-left'>
                                    City
                                </label>
                                <input
                                    type='text'
                                    id='city'
                                    className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                />
                            </div>
                            <div className='px-2'>
                                <label htmlFor='state' className='block text-sm font-medium text-left'>
                                    State
                                </label>
                                <input
                                    type='text'
                                    id='state'
                                    className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                />
                            </div>
                            <div className='px-2'>
                                <label htmlFor='postalCode' className='block text-sm font-medium text-left'>
                                    Postal Code
                                </label>
                                <input
                                    type='text'
                                    id='postalCode'
                                    className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                />
                            </div>
                            <div className='px-2'>
                                <label htmlFor='country' className='block text-sm font-medium text-left'>
                                    Country
                                </label>
                                <input
                                    type='text'
                                    id='country'
                                    className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex justify-start p-3'>
                            <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 mr-2'>
                                Send
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
    );
};

export default index;
