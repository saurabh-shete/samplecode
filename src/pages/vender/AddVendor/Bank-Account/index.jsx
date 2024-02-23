import React from 'react';
import { Close } from '@mui/icons-material';

const index = props => {
    return (
        <div>
            <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 '>
                <div className='bg-white w-[440px] shadow-lg absolute w-[50%]'>
                    <div className='py-2 px-2 w-full'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-lg font-semibold text-gray-800'>Add Bank Account</h2>
                            <button className='text-gray-600 hover:text-gray-800' onClick={props.onClose}>
                                <Close sx={{ '&:hover': { color: 'red' } }} />
                            </button>
                        </div>
                    </div>
                    <form>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='px-2'>
                                <label htmlFor='bankName' className='block text-sm font-medium text-left'>
                                    Bank Name
                                </label>
                                <input
                                    type='text'
                                    id='bankName'
                                    className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                />
                            </div>
                            <div className='px-2'>
                                <label htmlFor='accountType' className='block text-sm font-medium text-left'>
                                    Account Type
                                </label>
                                <input
                                    type='text'
                                    id='accountType'
                                    className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                />
                            </div>
                            <div className='px-2'>
                                <label htmlFor='accountNumber' className='block text-sm font-medium text-left'>
                                    Account Number
                                </label>
                                <input
                                    type='text'
                                    id='accountNumber'
                                    className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                />
                            </div>
                            <div className='px-2'>
                                <label htmlFor='branchName' className='block text-sm font-medium text-left'>
                                    Branch Name
                                </label>
                                <input
                                    type='text'
                                    id='branchName'
                                    className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                />
                            </div>
                            <div className='px-2'>
                                <label htmlFor='ifsc' className='block text-sm font-medium text-left'>
                                    IFSC
                                </label>
                                <input
                                    type='text'
                                    id='ifsc'
                                    className='mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                />
                            </div>
                            <div className='px-2'>
                                <label htmlFor='adCode' className='block text-sm font-medium text-left'>
                                    adCode
                                </label>
                                <input
                                    type='text'
                                    id='adCode'
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
