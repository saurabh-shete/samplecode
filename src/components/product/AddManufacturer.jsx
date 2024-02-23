import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

import { useEffect } from 'react';
import { element } from 'prop-types';

const AddManufacturer = ({ onClose, setManufacturer, setManufacturerDetailsFromProduct }) => {
    localStorage.setItem('name', 'Saurabh Shete');

    const [name, setName] = useState('');
    const [isAddManufacturer, setIsAddManufacturer] = useState(false);
    const [editManufacturer, setEditManufacturer] = useState(false);
    const [prevManufacturer, setPrevManufacturer] = useState('');
    const [manufacturerDetails, setManufacturerDetails] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [editIndex, setEditIndex] = useState(-1);
    const axiosPrivate = useAxiosPrivate();

    const handleManufacturer = async manufacturerName => {
        const payLoad = {
            name: manufacturerName,
            createdBy: JSON.parse(JSON.stringify(localStorage.getItem('name'))),
        };
        const response = await axiosPrivate.post('manufacturer', payLoad);
        manufacturerDetails.push(response.data.data);
        setManufacturerDetailsFromProduct(manufacturerDetails);
        setManufacturer(manufacturerName, response.data.data.id);

        onClose();
    };

    const handleEditManufacturer = async manufacturerName => {
        const payLoad = {
            name: manufacturerName,
            createdBy: JSON.parse(JSON.stringify(localStorage.getItem('name'))),
        };
        await axiosPrivate.put(`manufacturer/${prevManufacturer}`, payLoad);
        //console.log(response);
        //const response = await axiosPrivate.get('manufacturer');
        let updatedDetails = manufacturerDetails;
        updatedDetails[editIndex].name = manufacturerName;
        //setManufacturerDetails(updatedDetails);
        setManufacturerDetailsFromProduct(updatedDetails);
        setManufacturer(manufacturerName, updatedDetails[editIndex].id);
        closeEditManufacturer();
    };

    const openManufacturer = () => {
        setIsAddManufacturer(true);
    };

    const closeManufacturer = () => {
        setIsAddManufacturer(false);
    };
    const closeEditManufacturer = () => {
        setEditManufacturer(false);
    };

    const handleMouseEnter = index => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleEditClick = index => {
        setEditIndex(index);
        setEditManufacturer(true);
        setName(manufacturerDetails[index].name);
        setPrevManufacturer(manufacturerDetails[index].id);
    };

    const handleDeleteClick = async index => {
        let updatedManufacturer = [...manufacturerDetails];
        const tobeDeleted = updatedManufacturer[index].id;
        updatedManufacturer.splice(index, 1);
        setManufacturerDetailsFromProduct(updatedManufacturer);
        setManufacturerDetails(updatedManufacturer);
        await axiosPrivate.delete(`manufacturer/${tobeDeleted}`);
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosPrivate.get('manufacturer');
            setManufacturerDetails(response.data.data);
        };
        fetchData();
    }, []);

    // console.log(manufacturerDetails);

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50'>
            <div className='bg-white w-[600px] shadow-lg absolute top-0 rounded transition-all max-h-screen max-h-0 duration-300'>
                {/* Modal header */}
                <div className='bg-gray-300 py-2 px-4 mb-4 w-full'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-lg font-semibold text-gray-800'>Manage Manufacturers</h2>
                        <button className='text-gray-600 hover:text-gray-800' onClick={onClose}>
                            <CloseIcon sx={{ '&:hover': { color: 'red' } }} />
                        </button>
                    </div>
                </div>
                <div className='p-3'>
                    {isAddManufacturer == true ? (
                        <div className='p-4 h-[150px] bg-[#f0f0f0]'>
                            <div className='text-red-500 p-1'>Manufacturer Name*</div>
                            <div>
                                <input className='p-1 w-[50%] h-[40px] rounded-md' type='text' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className='mt-3'>
                                <button
                                    type='submit'
                                    className='w-[20%] bg-blue-500 text-white p-1 text-sm rounded cursor-pointer hover:bg-blue-600 mr-2'
                                    onClick={() => {
                                        handleManufacturer(name);
                                    }}
                                >
                                    Save and Select
                                </button>
                                <button
                                    type='button'
                                    className='w-[10%] bg-white text-gray-600 p-1 text-sm rounded cursor-pointer hover:bg-gray-100'
                                    onClick={() => closeManufacturer()}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : editManufacturer == true ? (
                        <div className='p-4 h-[150px] bg-[#f0f0f0]'>
                            <div className='text-red-500 p-1'>Manufacturer Name*</div>
                            <div>
                                <input className='p-1 w-[50%] h-[40px] rounded-md' type='text' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className='mt-3'>
                                <button
                                    type='submit'
                                    className='w-[20%] bg-blue-500 text-white p-1 text-sm rounded cursor-pointer hover:bg-blue-600 mr-2'
                                    onClick={() => {
                                        handleEditManufacturer(name);
                                    }}
                                >
                                    Save
                                </button>
                                <button
                                    type='button'
                                    className='w-[10%] bg-white text-gray-600 p-1 text-sm rounded cursor-pointer hover:bg-gray-100'
                                    onClick={() => closeEditManufacturer()}
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
                                openManufacturer();
                            }}
                        >
                            + New Manufacturer
                        </button>
                    )}
                </div>
                <div className='transition-all max-h-screen max-h-0x duration-0'>
                    {manufacturerDetails && (
                        <div className='w-full'>
                            <div className='text-[#21263c] text-sm p-4 border w-full'>MANUFACTURERS</div>
                            {manufacturerDetails.map((element, elementIndex) => (
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

export default AddManufacturer;
