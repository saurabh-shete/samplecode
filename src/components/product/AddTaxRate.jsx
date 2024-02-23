import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useEffect } from 'react';
import { element } from 'prop-types';

const AddTaxRate = ({ onClose, setTaxRate, setTaxRateDetailsFromProduct }) => {
    localStorage.setItem('name', 'Saurabh Shete');

    const [gstCategory, setGstCategory] = useState('');
    const [gstTaxRate, setGstTaxRate] = useState('');
    const [isTaxRate, setIsTaxRate] = useState(false);
    const [editTaxRate, setEditTaxRate] = useState(false);
    const [prevTaxRate, setPrevTaxRate] = useState('');
    const [taxtRateDetails, setTaxRateDetails] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [editIndex, setEditIndex] = useState(-1);
    const axiosPrivate = useAxiosPrivate();

    const handleTaxRate = async (gstCategory, gstTaxRate) => {
        const payLoad = {
            gstCategory: gstCategory,
            gstTaxRate: gstTaxRate,
            createdBy: JSON.parse(JSON.stringify(localStorage.getItem('name'))),
        };
        const response = await axiosPrivate.post('tax-category-rate', payLoad);
        taxtRateDetails.push(response.data.data);
        setTaxRateDetailsFromProduct(taxtRateDetails);
        setTaxRate(gstCategory, response.data.data.id);
        onClose();
    };

    const handleEditTaxRate = async (gstCategory, gstTaxRate) => {
        const payLoad = {
            // gstCategory: gstCategory,
            gstTaxRate: gstTaxRate,
            // createdBy: JSON.parse(JSON.stringify(localStorage.getItem('name'))),
        };
        await axiosPrivate.put(`tax-category-rate/${prevTaxRate}`, payLoad);

        let updatedDetails = taxtRateDetails;
        updatedDetails[editIndex].gstTaxRate = gstTaxRate;
        //setTaxRateDetails(response.data.data);
        setTaxRateDetailsFromProduct(updatedDetails);
        setTaxRate(gstCategory, updatedDetails[editIndex].id);
        closeEditTaxRate();
    };

    const openTaxRate = () => {
        setIsTaxRate(true);
    };

    const closeTaxRate = () => {
        setIsTaxRate(false);
    };
    const closeEditTaxRate = () => {
        setEditTaxRate(false);
    };

    const handleMouseEnter = index => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleEditClick = index => {
        setEditIndex(index);
        setEditTaxRate(true);
        setGstCategory(taxtRateDetails[index].gstCategory);
        setGstTaxRate(taxtRateDetails[index].gstTaxRate);
        setPrevTaxRate(taxtRateDetails[index].id);
    };

    const handleDeleteClick = async index => {
        let updatedTaxRate = [...taxtRateDetails];
        const tobeDeleted = updatedTaxRate[index].id;
        updatedTaxRate.splice(index, 1);
        setTaxRateDetailsFromProduct(updatedTaxRate);
        setTaxRateDetails(updatedTaxRate);
        await axiosPrivate.delete(`tax-category-rate/${tobeDeleted}`);
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosPrivate.get('tax-category-rate');
            setTaxRateDetails(response.data.data);
        };
        fetchData();
    }, []);

    // console.log(manufacturerDetails);

    const handleSubmit = event => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50'>
            <div className='bg-white w-[600px] shadow-lg absolute top-0 rounded transition-all max-h-screen max-h-0 duration-300'>
                {/* Modal header */}
                <div className='bg-gray-300 py-2 px-4 mb-4 w-full'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-lg font-semibold text-gray-800'>Manage Tax Rate</h2>
                        <button className='text-gray-600 hover:text-gray-800' onClick={onClose}>
                            <CloseIcon sx={{ '&:hover': { color: 'red' } }} />
                        </button>
                    </div>
                </div>
                <div className='p-3'>
                    {isTaxRate == true ? (
                        <div className='p-4 h-[220px] bg-[#f0f0f0]'>
                            <div className='text-red-500 p-1'>Tax Rate Category*</div>
                            <div>
                                <input
                                    className='p-1 w-[50%] h-[40px] rounded-md'
                                    type='text'
                                    value={gstCategory}
                                    onChange={e => setGstCategory(e.target.value)}
                                />
                            </div>
                            <div className='text-red-500 p-1'>Tax Rate*</div>
                            <div>
                                <input
                                    className='p-1 w-[50%] h-[40px] rounded-md'
                                    type='text'
                                    value={gstTaxRate}
                                    onChange={e => setGstTaxRate(e.target.value)}
                                />
                            </div>

                            <div className='mt-3'>
                                <button
                                    type='submit'
                                    className='w-[20%] bg-blue-500 text-white p-1 text-sm rounded cursor-pointer hover:bg-blue-600 mr-2'
                                    onClick={() => {
                                        handleTaxRate(gstCategory, gstTaxRate);
                                    }}
                                >
                                    Save and Select
                                </button>
                                <button
                                    type='button'
                                    className='w-[10%] bg-white text-gray-600 p-1 text-sm rounded cursor-pointer hover:bg-gray-100'
                                    onClick={() => closeTaxRate()}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : editTaxRate == true ? (
                        <div className='p-4 h-[220px] bg-[#f0f0f0]'>
                            {/* <div className='text-red-500 p-1'>Tax Rate Category*</div>
                             <div>
                                <input
                                    className='p-1 w-[50%] h-[40px] rounded-md'
                                    type='text'
                                    value={gstCategory}
                                    onChange={e => setGstCategory(e.target.value)}
                                />
                            </div> */}
                            <div className='text-red-500 p-1'>Tax Rate*</div>
                            <div>
                                <input
                                    className='p-1 w-[50%] h-[40px] rounded-md'
                                    type='text'
                                    value={gstTaxRate}
                                    onChange={e => setGstTaxRate(e.target.value)}
                                />
                            </div>

                            <div className='mt-3'>
                                <button
                                    type='submit'
                                    className='w-[20%] bg-blue-500 text-white p-1 text-sm rounded cursor-pointer hover:bg-blue-600 mr-2'
                                    onClick={() => {
                                        handleEditTaxRate(gstCategory, gstTaxRate);
                                    }}
                                >
                                    Save
                                </button>
                                <button
                                    type='button'
                                    className='w-[10%] bg-white text-gray-600 p-1 text-sm rounded cursor-pointer hover:bg-gray-100'
                                    onClick={() => closeEditTaxRate()}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button
                            type='submit'
                            className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 mr-2'
                            onClick={() => {
                                openTaxRate();
                            }}
                        >
                            + New Tax Rate
                        </button>
                    )}
                </div>
                <div className='transition-all max-h-screen max-h-0x duration-0'>
                    {taxtRateDetails && (
                        <div className='w-full'>
                            <div className='text-[#21263c] text-sm p-4 border w-full'>Tax Rate</div>
                            {taxtRateDetails.map((element, elementIndex) => (
                                <div
                                    key={elementIndex}
                                    className='flex w-full text-sm p-4 h-[40px] border-b items-center cursor-pointer'
                                    onMouseEnter={() => handleMouseEnter(elementIndex)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div>{element.gstCategory}</div>
                                    &nbsp; | &nbsp;
                                    <div>{element.gstTaxRate}</div>
                                    {hoveredIndex === elementIndex && (
                                        <div className='ml-auto flex space-x-2'>
                                            <button className='text-blue-500 hover:underline' onClick={() => handleEditClick(elementIndex)}>
                                                Edit
                                            </button>
                                            <button className='text-red-500 hover:underline' onClick={() => handleDeleteClick(elementIndex)}>
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className='p-4'></div>
            </div>
        </div>
    );
};

export default AddTaxRate;
