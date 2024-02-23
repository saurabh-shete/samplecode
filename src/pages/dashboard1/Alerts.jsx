import React from 'react';
import Card from './components/card/Card';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';

const Alerts = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex'>
                <Card extra={'w-[50%] h-full sm:overflow-x-auto border px-3 pb-4 m-1'}>
                    <p className='flex justify-center font-bold p-3'>OPEN ORDERS</p>
                    <div className='flex flex-col pt-2'>
                        <p className='text-sm text-[#4257BE] font-medium'>Partially Open SO</p>
                        <p className='text-3xl font-medium'>9</p>
                    </div>
                    <div className='flex flex-col pt-2'>
                        <p className='text-sm text-[#4257BE] font-medium'>Completely Open SO</p>
                        <p className='text-3xl font-medium'>20</p>
                    </div>
                </Card>
                <Card extra={'w-[50%] h-full sm:overflow-x-auto border px-3 pb-4 m-1'}>
                    <p className='flex justify-center font-bold p-3'>TO BE SHIPPED</p>
                    <div className='flex flex-col pt-2'>
                        <p className='text-sm text-[#4257BE] font-medium'>Dispatched Planned</p>
                        <p className='text-3xl font-medium'>20</p>
                    </div>
                </Card>
            </div>
            <br />
            <Card extra={'w-full h-full sm:overflow-x-auto border m-1'}>
                <div className='px-3 pb-3 border'>
                    <div className='relative flex items-center justify-between pt-4 '>
                        <div className='flex justify-between'>
                            <div className='m-1 w-12 h-12 rounded-full object-cover bg-[#4257BE] flex justify-center items-center text-white text-xl font-bold'>
                                A
                            </div>
                            <div className='m-1 text-navy-700 text-xl flex flex-col dark:text-white'>
                                <p>Alerts</p>
                                <p className='text-sm'>Status</p>
                            </div>
                        </div>
                        <MoreVertSharpIcon />
                    </div>
                </div>
                <div className='bg-[#FAFAFA] h-full'>
                    <div className='flex flex-col p-3'>
                        <p className='text-sm'>Dispatch</p>
                        <p className='text-xs'>23-07-2023 dispatch planned for HUL Corp</p>
                    </div>
                    <div className='border border-black' />
                    <div className='flex flex-col p-3'>
                        <p className='text-sm'>Documents</p>
                        <p className='text-xs'>Document screening pending for DEL-0909</p>
                    </div>
                    <div className='border border-black' />
                    <div className='flex flex-col p-3'>
                        <p className='text-sm'>Invoice Overdue</p>
                        <p className='text-xs'>Invoice INV-0973 overdue by 34 days</p>
                    </div>
                    <div className='border border-black' />
                    <div className='flex flex-col p-3'>
                        <p className='text-sm'>Dispatch</p>
                        <p className='text-xs'>23-07-2023 dispatch planned for HUL Corp</p>
                    </div>
                    <div className='border border-black' />
                    <div className='flex flex-col p-3'>
                        <p className='text-sm'>Documents</p>
                        <p className='text-xs'>Document screening pending for DEL-0909</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Alerts;
