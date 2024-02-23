import React from 'react';
import Card from './components/card/Card';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';

const Invoice = () => {
    return (
        <div className='flex flex-col'>
            <Card extra={'w-full sm:overflow-x-auto border px-3 pb-4 m-1'}>
                <p className='flex justify-center font-bold p-3'>OPEN INVOICES</p>
                <div className='flex'>
                    <div className='flex flex-col pt-2'>
                        <p className='text-sm text-[#4257BE] font-medium'>Invoice Raised</p>
                        <p className='text-3xl font-medium'>34</p>

                        <span className='pt-2' />
                        <p className='text-sm text-[#4257BE] font-medium'>Overdue</p>
                        <p className='text-3xl font-medium'>20</p>
                    </div>
                    <div className='flex flex-col pt-2'>
                        <p className='text-sm text-[#4257BE] font-medium'>Partial Payment Pending</p>
                        <p className='text-3xl font-medium'>23</p>
                    </div>
                </div>
            </Card>
            <br />
            <Card extra={'w-full sm:overflow-x-auto'}>
                <div className='px-3 border'>
                    <div className='relative flex items-center justify-between pt-4 pb-4 '>
                        <div className='flex justify-between'>
                            <div className='m-1 w-12 h-12 rounded-full object-cover bg-[#4257BE] flex justify-center items-center text-white text-xl font-bold'>
                                P
                            </div>
                            <div className='m-1 text-navy-700 text-xl flex flex-col dark:text-white'>
                                <p>Pending for Compliance</p>
                                <p className='text-sm'>Status</p>
                            </div>
                        </div>
                        <MoreVertSharpIcon />
                    </div>
                </div>
                <div className='bg-[#FAFAFA] p-2'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <div className='m-1 w-10 h-10 rounded-full object-cover bg-[#4257BE] flex justify-center items-center text-white text-xl font-bold'>
                                A
                            </div>
                            <div className='text-sm'>REM-FY23-987569</div>
                        </div>
                        <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <div className='m-1 w-10 h-10 rounded-full object-cover bg-[#4257BE] flex justify-center items-center text-white text-xl font-bold'>
                                A
                            </div>
                            <div className='text-sm'>REM-FY2023-97645</div>
                        </div>
                        <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <div className='m-1 w-10 h-10 rounded-full object-cover bg-[#4257BE] flex justify-center items-center text-white text-xl font-bold'>
                                A
                            </div>
                            <div className='text-sm'>REM-97645435</div>
                        </div>
                        <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <div className='m-1 w-10 h-10 rounded-full object-cover bg-[#4257BE] flex justify-center items-center text-white text-xl font-bold'>
                                A
                            </div>
                            <div className='text-sm'>REM-202397645</div>
                        </div>
                        <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Invoice;
