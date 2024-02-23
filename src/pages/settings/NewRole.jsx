import React, { useState, useRef, useEffect } from 'react';
import { Link, Router, useNavigate, BrowserRouter, Navigate } from 'react-router-dom';
import { Paper, Box, Typography, Divider, MenuItem, IconButton, Button, TextField, Select, FormControlLabel, Checkbox } from '@mui/material';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useForm } from 'react-hook-form';

const NewRole = () => {
    const axiosPrivate = useAxiosPrivate();
    const [data, setData] = useState();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const getPermissions = async () => {
            const response = await axiosPrivate.get('role/permissions/new');
            //const response = await axios.get('http://localhost:5010/role/permissions/');
            // console.log(response.data.data);
            if (response) {
                setData(
                    response.data.data.reduce((acc, currentItem) => {
                        const groupName = currentItem.group;
                        if (!acc[groupName]) {
                            acc[groupName] = [];
                        }
                        acc[groupName].push(currentItem);
                        return acc;
                    }, {}),
                );
            }
        };
        getPermissions();
    }, []);

    const handleCheckboxToggle = (element, dataElementIndex, accessPermission, e) => {
        let temp = JSON.parse(JSON.stringify(data));
        if (accessPermission === 'allowAll') {
            temp[element][dataElementIndex]['allowAll'] = !temp[element][dataElementIndex]['allowAll'];
            temp[element][dataElementIndex]['allowCreate'] = !temp[element][dataElementIndex]['allowCreate'];
            temp[element][dataElementIndex]['allowDelete'] = !temp[element][dataElementIndex]['allowDelete'];
            temp[element][dataElementIndex]['allowEdit'] = !temp[element][dataElementIndex]['allowEdit'];
            temp[element][dataElementIndex]['allowView'] = !temp[element][dataElementIndex]['allowView'];
        } else {
            temp[element][dataElementIndex][accessPermission] = !temp[element][dataElementIndex][accessPermission];
        }
        setData(temp);
    };

    const onSubmit = async formData => {
        const permissionsData = Object.keys(data).reduce((acc, element, elementIndex) => {
            const temp = data[element].map((dataElement, dataElementIndex) => ({
                accessId: dataElement['id'],
                allowAll: dataElement['allowAll'],
                allowView: dataElement['allowView'],
                allowCreate: dataElement['allowCreate'],
                allowEdit: dataElement['allowEdit'],
                allowDelete: dataElement['allowDelete'],
            }));

            return [...acc, ...temp];
        }, []);

        const payload = {
            name: formData.name,
            description: formData.description,
            accessDetails: permissionsData,
        };

        const response = await axiosPrivate.post('role', payload);
        // console.log(response);
    };

    return (
        <>
            <div className='h-screen'>
                <div className='z-10 top-16 flex p-5 items-end bg-white'>
                    <p className='text-3xl font-[500]'>New Role</p>
                </div>
                <div className='border-b-[2px]' />
                <div className='h-[65vh] no-scrollbar !overflow-y-scroll m-1'>
                    <br />

                    <div className='flex items-start justify-start w-full'>
                        <p className='text-red-500 m-1 w-[10%] mr-24'>Role Name*</p>
                        <input
                            className='focus:outline-none border-[2px] rounded-md w-[35%] h-10 m-1 p-2 focus:ring-blue-300 hover:border-blue-300'
                            type='text'
                            {...register('name', { required: 'Role Name is required' })}
                        />
                        <h3 className='text-red-500'>{errors?.name?.message}</h3>
                    </div>
                    <br />
                    <div className='flex items-start justify-start w-full'>
                        <p className='m-1 w-[10%] mr-24'>Description</p>
                        <textarea
                            className='transition-height duration-0 ease-in-out resize-y rounded-md focus:outline-none border-[2px] w-[35%] h-[96px] m-1 p-2 focus:ring-blue-300 hover:border-blue-400'
                            placeholder='Max 500. characters'
                            {...register('description', { required: 'Role Name is required' })}
                        ></textarea>
                        <h3 className='text-red-500'>{errors?.description?.message}</h3>
                    </div>
                    <br />
                    <div className=''>
                        {!data ? (
                            <></>
                        ) : (
                            Object.keys(data).map((element, elementIndex) => (
                                <div key={elementIndex} className='my-10 relative'>
                                    <p className='p-3 ml-5 w-[calc(100vw-150px)] border rounded-t-md  text-left bg-gray-50'>{element}</p>
                                    <table className='ml-5 rounded-md w-[calc(100vw-150px)] text-sm text-left text-gray-500'>
                                        <thead className='border text-md text-gray-700 uppercase'>
                                            <tr>
                                                <th className='border px-3 py-3 w-[190px]'></th>

                                                <th className='border px-3 py-3 text-center w-[80px]'>Full Access</th>
                                                <th className='border px-3 py-3 text-center w-[80px]'>View</th>
                                                <th className='border px-3 py-3 text-center w-[80px]'>Create</th>
                                                <th className='border px-3 py-3 text-center w-[80px]'>Edit</th>
                                                <th className='border px-3 py-3 text-center w-[80px]'>Delete</th>
                                                <th className='border px-3 py-3 w-[390px]'></th>
                                            </tr>
                                        </thead>
                                        <tbody className='border'>
                                            {data[element].map((dataElement, dataElementIndex) => (
                                                <tr key={`dataElement-${dataElementIndex}`}>
                                                    <td className='border px-3 py-3'>{dataElement['name']}</td>
                                                    <td className='border px-3 py-3 text-center'>
                                                        <input
                                                            type='checkbox'
                                                            value={dataElement['allowAll']}
                                                            checked={dataElement['allowAll']}
                                                            onChange={e => {
                                                                handleCheckboxToggle(element, dataElementIndex, 'allowAll', e);
                                                            }}
                                                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
                                                        />
                                                    </td>
                                                    <td className='border px-3 py-3 text-center'>
                                                        <input
                                                            type='checkbox'
                                                            value={dataElement['allowView']}
                                                            checked={dataElement['allowView']}
                                                            onChange={e => {
                                                                handleCheckboxToggle(element, dataElementIndex, 'allowView', e);
                                                            }}
                                                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
                                                        />
                                                    </td>
                                                    <td className='border px-3 py-3 text-center'>
                                                        <input
                                                            type='checkbox'
                                                            value={dataElement['allowCreate']}
                                                            checked={dataElement['allowCreate']}
                                                            onChange={e => {
                                                                handleCheckboxToggle(element, dataElementIndex, 'allowCreate', e);
                                                            }}
                                                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
                                                        />
                                                    </td>
                                                    <td className='border px-3 py-3 text-center'>
                                                        <input
                                                            type='checkbox'
                                                            value={dataElement['allowEdit']}
                                                            checked={dataElement['allowEdit']}
                                                            onChange={e => {
                                                                handleCheckboxToggle(element, dataElementIndex, 'allowEdit', e);
                                                            }}
                                                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
                                                        />
                                                    </td>
                                                    <td className='border px-3 py-3 text-center'>
                                                        <input
                                                            type='checkbox'
                                                            value={dataElement['allowDelete']}
                                                            checked={dataElement['allowDelete']}
                                                            onChange={e => {
                                                                handleCheckboxToggle(element, dataElementIndex, 'allowDelete', e);
                                                            }}
                                                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
                                                        />
                                                    </td>
                                                    <td className='border px-3 py-3'></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className='fixed bottom-0 w-full flex p-4 items-end bg-white border'>
                    <button
                        type='submit'
                        className='bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 mr-2'
                        onClick={handleSubmit(onSubmit)}
                    >
                        Save
                    </button>
                    <button type='button' className='border bg-white text-gray-600 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-100'>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );
};

export default NewRole;
