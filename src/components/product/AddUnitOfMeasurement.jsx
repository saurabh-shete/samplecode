import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

import { useEffect } from 'react';
import { element } from 'prop-types';

const AddUnitOfMeasurement = ({ onClose, setMeasurement, setMeasurementDetailsFromProduct }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [code, setCode] = useState('');
    const [isAddMeasurement, setIsAddMeasurement] = useState(false);
    const [editMeasurement, setEditMeasurement] = useState(false);
    const [prevMeasurement, setPrevMeasurement] = useState('');
    const [measurementDetails, setMeasurementDetails] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [editIndex, setEditIndex] = useState(-1);
    const axiosPrivate = useAxiosPrivate();

    const handleMeasurement = async (MeasurementName, MeasurementDescription, MeasurementCode) => {
        const payLoad = {
            unitName: MeasurementName,
            unitDescription: MeasurementDescription,
            unitCode: MeasurementCode,
        };
        const response = await axiosPrivate.post('/unit-of-measurement', payLoad);
        measurementDetails.push(response.data.data);
        setMeasurementDetailsFromProduct(measurementDetails);
        setMeasurement(MeasurementCode, response.data.data.id);
        onClose();
    };

    const handleEditMeasurement = async (measurementName, measurementDescription, measurementCode) => {
        const payLoad = {
            unitName: measurementName,
            unitDescription: measurementDescription,
            unitCode: measurementCode,
        };
        const response = await axiosPrivate.put(`unit-of-measurement/${prevMeasurement}`, payLoad);
        let updatedDetails = measurementDetails;
        updatedDetails[editIndex].unitName = measurementName;
        updatedDetails[editIndex].unitDescription = measurementDescription;
        updatedDetails[editIndex].unitCode = measurementCode;
        setMeasurementDetailsFromProduct(updatedDetails);
        //setMeasurementDetails(response.data.data);
        setMeasurement(measurementCode, updatedDetails[editIndex].id);
        closeEditMeasurement();
    };

    const openMeasurement = () => {
        setIsAddMeasurement(true);
    };

    const closeMeasurement = () => {
        setIsAddMeasurement(false);
    };
    const closeEditMeasurement = () => {
        setEditMeasurement(false);
    };

    const handleMouseEnter = index => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleEditClick = index => {
        setEditIndex(index);
        setName(measurementDetails[index].unitName);
        setDescription(measurementDetails[index].unitDescription);
        setCode(measurementDetails[index].unitCode);
        setEditMeasurement(true);
        setPrevMeasurement(measurementDetails[index].id);
    };

    const handleDeleteClick = async index => {
        let updatedMeasurement = [...measurementDetails];
        const tobeDeleted = updatedMeasurement[index].id;
        updatedMeasurement.splice(index, 1);
        setMeasurementDetailsFromProduct(updatedMeasurement);
        setMeasurementDetails(updatedMeasurement);
        await axiosPrivate.delete(`/unit-of-measurement/${tobeDeleted}`);
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosPrivate.get('/unit-of-measurement');
            setMeasurementDetails(response.data.data);
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
                        <h2 className='text-lg font-semibold text-gray-800'>Manage Measurement</h2>
                        <button className='text-gray-600 hover:text-gray-800' onClick={onClose}>
                            <CloseIcon sx={{ '&:hover': { color: 'red' } }} />
                        </button>
                    </div>
                </div>
                <div className='p-3'>
                    {isAddMeasurement == true ? (
                        <div className='p-4 h-[280px] bg-[#f0f0f0]'>
                            <div className='text-red-500 p-1'>Measurement Name*</div>
                            <div>
                                <input className='p-1 w-[50%] h-[40px] rounded-md' type='text' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className='text-red-500 p-1'>Measurement Description*</div>
                            <div>
                                <input
                                    className='p-1 w-full h-[40px] rounded-md'
                                    type='text'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <div className='text-red-500 p-1'>Measurement Code*</div>
                            <div>
                                <input className='p-1 w-[50%] h-[40px] rounded-md' type='text' value={code} onChange={e => setCode(e.target.value)} />
                            </div>
                            <div className='mt-3'>
                                <button
                                    type='submit'
                                    className='w-[20%] bg-blue-500 text-white p-1 text-sm rounded cursor-pointer hover:bg-blue-600 mr-2'
                                    onClick={() => {
                                        handleMeasurement(name, description, code);
                                    }}
                                >
                                    Save and Select
                                </button>
                                <button
                                    type='button'
                                    className='w-[10%] bg-white text-gray-600 p-1 text-sm rounded cursor-pointer hover:bg-gray-100'
                                    onClick={() => closeMeasurement()}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : editMeasurement == true ? (
                        <div className='p-4 h-[280px] bg-[#f0f0f0]'>
                            <div className='text-red-500 p-1'>Measurement Name*</div>
                            <div>
                                <input className='p-1 w-[50%] h-[40px] rounded-md' type='text' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className='text-red-500 p-1'>Measurement Description*</div>
                            <div>
                                <input
                                    className='p-1 w-[50%] h-[40px] rounded-md'
                                    type='text'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <div className='text-red-500 p-1'>Measurement Code*</div>
                            <div>
                                <input className='p-1 w-[50%] h-[40px] rounded-md' type='text' value={code} onChange={e => setCode(e.target.value)} />
                            </div>
                            <div className='mt-3'>
                                <button
                                    type='submit'
                                    className='w-[20%] bg-blue-500 text-white p-1 text-sm rounded cursor-pointer hover:bg-blue-600 mr-2'
                                    onClick={() => {
                                        handleEditMeasurement(name, description, code);
                                    }}
                                >
                                    Save
                                </button>
                                <button
                                    type='button'
                                    className='w-[10%] bg-white text-gray-600 p-1 text-sm rounded cursor-pointer hover:bg-gray-100'
                                    onClick={() => closeEditMeasurement()}
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
                                openMeasurement();
                            }}
                        >
                            + New Measurement
                        </button>
                    )}
                </div>
                <div className='transition-all max-h-screen max-h-0x duration-0'>
                    {measurementDetails && (
                        <div className='w-full'>
                            <div className='text-[#21263c] text-sm p-4 border w-full'>MEASUREMENT</div>
                            {measurementDetails.map((element, elementIndex) => (
                                <div
                                    key={elementIndex}
                                    className='flex w-full text-sm p-4 h-[40px] border-b items-center cursor-pointer'
                                    onMouseEnter={() => handleMouseEnter(elementIndex)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div>{element.unitName}</div>&nbsp;|&nbsp;<div>{element.unitCode}</div>
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

export default AddUnitOfMeasurement;
