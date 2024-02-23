import React from 'react';
import { Close } from '@mui/icons-material';

const index = props => {
    return (
        <div>
            <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 '>
                <div className='bg-white w-[440px] shadow-lg absolute w-[50%]'>
                    <div className='py-2 px-2 w-full'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-lg font-semibold text-gray-800'>Terms of Order</h2>
                            <button className='text-gray-600 hover:text-gray-800' onClick={props.onClose}>
                                <Close sx={{ '&:hover': { color: 'red' } }} />
                            </button>
                        </div>
                    </div>
                    <form>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='px-2'>
                                <label htmlFor='language' className='block text-sm font-medium text-left'>
                                    Language
                                </label>
                                <select
                                    id='language'
                                    className='p-1 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                >
                                    <option value=''>Select an option</option>

                                    <option value='english'>English</option>
                                </select>
                            </div>
                            <div className='px-2'>
                                <label htmlFor='portOfLoading' className='block text-sm font-medium text-left'>
                                    Port of Loading
                                </label>
                                <select
                                    id='portOfLoading'
                                    className='p-1 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                >
                                    <option value=''>Select an option</option>
                                    <option value='NS'>Nhava Sheva</option>
                                </select>
                            </div>
                            <div className='px-2'>
                                <label htmlFor='paymentTerms' className='block text-sm font-medium text-left'>
                                    Payment Terms
                                </label>
                                <select
                                    id='paymentTerms'
                                    className='p-1 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                >
                                    <option value=''>Select an option</option>
                                    <option value='90days'>Within 90 days</option>
                                </select>
                            </div>
                            <div className='px-2'>
                                <label htmlFor='countryOfShipment' className='block text-sm font-medium text-left'>
                                    Country of Shipment
                                </label>
                                <label id='countryOfShipment' className='block text-sm text-left'>
                                    India
                                </label>
                            </div>
                            <div className='px-2'>
                                <label htmlFor='incoTerms1' className='block text-sm font-medium text-left'>
                                    Incoterms1
                                </label>
                                <select
                                    id='incoTerms1'
                                    className='p-1 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                >
                                    <option value=''>Select an option</option>
                                    <option value='CIF'>CIF</option>
                                </select>
                            </div>
                            <div className='px-2'>
                                <label htmlFor='portOfDischarge' className='block text-sm font-medium text-left'>
                                    Port of Discharge
                                </label>
                                <label id='portOfDischarge' className='block text-sm text-left'>
                                    FRANKFURT
                                </label>
                            </div>
                            <div className='px-2'>
                                <label htmlFor='place' className='block text-sm font-medium text-left'>
                                    Place
                                </label>
                                <label id='place' className='block text-sm text-left'>
                                    FRANKFURT, Germany
                                </label>
                            </div>
                            <div className='px-2'>
                                <label htmlFor='finalDestination' className='block text-sm font-medium text-left'>
                                    Final Destination
                                </label>
                                <label id='finalDestination' className='block text-sm text-left'>
                                    HAMBURG
                                </label>
                            </div>
                            <div className='px-2'>
                                <label htmlFor='preCarriageBy' className='block text-sm font-medium text-left'>
                                    Pre carriage by
                                </label>
                                <label id='preCarriageBy' className='block text-sm text-left'>
                                    By Transport
                                </label>
                            </div>
                            <div className='px-2'>
                                <label htmlFor='countryFinalDestination' className='block text-sm font-medium text-left'>
                                    Country Final Destination
                                </label>
                                <select
                                    id='countryFinalDestination'
                                    className='p-1 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left'
                                    required
                                >
                                    <option value=''>Select an option</option>

                                    <option value='english'>Germany</option>
                                </select>
                            </div>
                            <div className='px-2'>
                                <label htmlFor='placeOfReceipt' className='block text-sm font-medium text-left'>
                                    Place of Receipt
                                </label>
                                <label id='placeOfReceipt' className='block text-sm text-left'>
                                    JNPT Port
                                </label>
                            </div>
                            <div className='px-2'>
                                <label htmlFor='termsValidTill' className='block text-sm font-medium text-left'>
                                    Terms Valid Till
                                </label>
                                <input
                                    type='date'
                                    id='termsValidTill'
                                    className='p-1 w-full border rounded
                                    bg-gray-300 
                                    focus:ring-blue-500 focus:border-blue-500 text-left'
                                />
                            </div>
                            <div className='px-2'>
                                <label htmlFor='placeOfDelivery' className='block text-sm font-medium text-left'>
                                    Place of Delivery
                                </label>
                                <label id='placeOfDelivery' className='block text-sm text-left'>
                                    FRANKFURT
                                </label>
                            </div>
                            <div></div>
                            <div className='px-2'>
                                <label htmlFor='modeOfTransport' className='block text-sm font-medium text-left'>
                                    Mode of Transport
                                </label>
                                <label id='modeOfTransport' className='block text-sm text-left'>
                                    BY SEA
                                </label>
                            </div>
                            <div></div>
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
