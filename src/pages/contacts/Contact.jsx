import React from 'react';
import AccountDropdown from '../../components/contacts/AccountDropdown';

const Contact = () => {
    return (
        <>
            <div className='p-6'>
                <div className='mt-5 text-left font-bold text-gray-500'>NEW CONTACT</div>
                <div className='flex mt-4'>
                    <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-l border border-red-600'>Status</button>
                    <button className='bg-white hover:bg-gray-200 text-black font-semibold py-2 px-8 rounded-r border border-gray-300'>Draft</button>
                </div>
                <div className='mt-12 grid grid-cols-2 gap-10'>
                    <div className=''>
                        <div className='text-left'>
                            <label className='block mb-1 font-semibold'>First Name</label>
                        </div>
                        <div className=''>
                            <div className='flex items-center'>
                                <input className='w-full border border-gray-300 rounded p-2' type='text' placeholder='' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-left'>
                            <label className='block mb-1 font-semibold'>Email</label>
                        </div>
                        <div className=''>
                            <div className='flex items-center'>
                                <input className='w-full border border-gray-300 rounded p-2' type='text' placeholder='Email' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-left'>
                            <label className='block mb-1 font-semibold'>Last Name</label>
                        </div>
                        <div className=''>
                            <div className='flex items-center'>
                                <input className='w-full border border-gray-300 rounded p-2' type='text' placeholder='' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-left'>
                            <label className='block mb-1 font-semibold'>Mobile Phone</label>
                        </div>
                        <div className=''>
                            <div className='flex items-center'>
                                <input className='w-full border border-gray-300 rounded p-2' type='text' placeholder='Enter Mobile phone number' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-left'>
                            <label className='block mb-1 font-semibold'>Job Title</label>
                        </div>
                        <div className=''>
                            <div className='flex items-center'>
                                <input className='w-full border border-gray-300 rounded p-2' type='text' placeholder='' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-left'>
                            <label className='block mb-1 font-semibold'>Business Phone</label>
                        </div>
                        <div className=''>
                            <div className='flex items-center'>
                                <input className='w-full border border-gray-300 rounded p-2' type='text' placeholder='Enter Business phone number' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-left'>
                            <label className='block mb-1 font-semibold'>Account Number</label>
                        </div>
                        <div className=''>
                            <div className='flex items-center'>
                                {/* <input
                className='w-full border border-gray-300 rounded p-2'
                type='text'
                placeholder='Select account name'
              /> */}
                                <AccountDropdown />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-left'>
                            <label className='block mb-1 font-semibold'>Description</label>
                        </div>
                        <div className=''>
                            <div className='flex items-center'>
                                <input className='w-full border border-gray-300 rounded p-2' type='text' placeholder='Enter Description' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-2 flex items-left '>
                <button className='bg-blue-500 hover:bg-blue-600 m-3 rounded p-3'>Save as draft</button>
                <button className='bg-blue-200 hover:bg-blue-300 m-3 rounded p-3'>Save and confirm</button>
                <button className='bg-gray-500 m-3 hover:bg-gray-600 text-white  rounded p-3 w-20'>Cancel</button>
            </div>
        </>
    );
};

export default Contact;
