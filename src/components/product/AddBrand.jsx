import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

import { useEffect } from 'react';
import { element } from 'prop-types';

const AddBrand = ({ onClose, setBrand, setBrandDetailsFromProduct }) => {
    localStorage.setItem('name', 'Saurabh Shete');

    const [name, setName] = useState('');
    const [isAddBrand, setIsAddBrand] = useState(false);
    const [editBrand, setEditBrand] = useState(false);
    const [prevBrand, setPrevBrand] = useState('');
    const [brandDetails, setBrandDetails] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [editIndex, setEditIndex] = useState(-1);
    const axiosPrivate = useAxiosPrivate();

    const handleBrand = async brandName => {
        const payLoad = {
            name: brandName,
            createdBy: JSON.parse(JSON.stringify(localStorage.getItem('name'))),
        };
        const response = await axiosPrivate.post('brand', payLoad);
        brandDetails.push(response.data.data);

        setBrandDetailsFromProduct(brandDetails);
        setBrand(brandName, response.data.data.id);
        onClose();
    };

    const handleEditBrand = async brandName => {
        const payLoad = {
            name: brandName,
            createdBy: JSON.parse(JSON.stringify(localStorage.getItem('name'))),
        };
        await axiosPrivate.put(`brand/${prevBrand}`, payLoad);
        let updatedDetails = brandDetails;
        // const response = await axiosPrivate.get('brand');
        updatedDetails[editIndex].name = brandName;
        //setBrandDetails(updatedDetails);
        setBrandDetailsFromProduct(updatedDetails);
        setBrand(brandName, updatedDetails[editIndex].id);
        closeEditBrand();
    };

    const openBrand = () => {
        setIsAddBrand(true);
    };

    const closeBrand = () => {
        setIsAddBrand(false);
    };
    const closeEditBrand = () => {
        setEditBrand(false);
    };

    const handleMouseEnter = index => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleEditClick = index => {
        setEditIndex(index);
        setEditBrand(true);
        setName(brandDetails[index].name);
        setPrevBrand(brandDetails[index].id);
    };

    // const handleDeleteClick = async index => {
    //     let updatedBrand = [...brandDetails];
    //     const tobeDeleted = updatedBrand[index].id;
    //     updatedBrand.splice(index, 1);
    //     setBrandDetailsFromProduct(updatedBrand);
    //     setBrandDetails(updatedBrand);
    //     await axiosPrivate.delete(`brand/${tobeDeleted}`);
    // };
    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosPrivate.get('brand');
            setBrandDetails(response.data.data);
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
                        <h2 className='text-lg font-semibold text-gray-800'>Manage Brand</h2>
                        <button className='text-gray-600 hover:text-gray-800' onClick={onClose}>
                            <CloseIcon sx={{ '&:hover': { color: 'red' } }} />
                        </button>
                    </div>
                </div>
                <div className='p-3'>
                    {isAddBrand == true ? (
                        <div className='p-4 h-[150px] bg-[#f0f0f0]'>
                            <div className='text-red-500 p-1'>Brand Name*</div>
                            <div>
                                <input className='p-1 w-[50%] h-[40px] rounded-md' type='text' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className='mt-3'>
                                <button
                                    type='submit'
                                    className='w-[20%] bg-blue-500 text-white p-1 text-sm rounded cursor-pointer hover:bg-blue-600 mr-2'
                                    onClick={() => {
                                        handleBrand(name);
                                    }}
                                >
                                    Save and Select
                                </button>
                                <button
                                    type='button'
                                    className='w-[10%] bg-white text-gray-600 p-1 text-sm rounded cursor-pointer hover:bg-gray-100'
                                    onClick={() => closeBrand()}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : editBrand == true ? (
                        <div className='p-4 h-[150px] bg-[#f0f0f0]'>
                            <div className='text-red-500 p-1'>Brand Name*</div>
                            <div>
                                <input className='p-1 w-[50%] h-[40px] rounded-md' type='text' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className='mt-3'>
                                <button
                                    type='submit'
                                    className='w-[20%] bg-blue-500 text-white p-1 text-sm rounded cursor-pointer hover:bg-blue-600 mr-2'
                                    onClick={() => {
                                        handleEditBrand(name);
                                    }}
                                >
                                    Save
                                </button>
                                <button
                                    type='button'
                                    className='w-[10%] bg-white text-gray-600 p-1 text-sm rounded cursor-pointer hover:bg-gray-100'
                                    onClick={() => closeEditBrand()}
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
                                openBrand();
                            }}
                        >
                            + New Brand
                        </button>
                    )}
                </div>
                <div className='transition-all max-h-screen max-h-0x duration-0'>
                    {brandDetails && (
                        <div className='w-full'>
                            <div className='text-[#21263c] text-sm p-4 border w-full'>Brands</div>
                            {brandDetails.map((element, elementIndex) => (
                                <div
                                    key={elementIndex}
                                    className='flex w-full text-sm p-4 h-[40px] border-b items-center cursor-pointer'
                                    onMouseEnter={() => handleMouseEnter(elementIndex)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div>{element.name}</div>
                                    {hoveredIndex === elementIndex && (
                                        <div className='ml-auto flex space-x-2'>
                                            <button className='text-blue-500 hover:underline' onClick={() => handleEditClick(elementIndex)}>
                                                Edit
                                            </button>
                                            {/* <button className='text-red-500 hover:underline' onClick={() => handleDeleteClick(elementIndex)}>
                                                Delete
                                            </button> */}
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

export default AddBrand;
