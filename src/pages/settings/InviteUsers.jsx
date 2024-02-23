import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';

const InviteUsers = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [userTestField, setUserTestField] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="  fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 ">
            <div className="bg-white w-[440px]  shadow-lg absolute  top-0">
                {/* Modal header */}
                <div className="bg-gray-300 py-2 px-4 mb-4 w-full">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">Invite User</h2>
                        <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
                            <CloseIcon sx={{"&:hover":{color:'red'}}}/>
                        </button>
                    </div>
                </div>
                {/* Invite User form */}
                <form onSubmit={handleSubmit}>
                    <div className="p-3">
                        <label htmlFor="name" className="block text-sm font-medium text-red-500 text-left">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="p-3">
                        <label htmlFor="email" className="block text-sm font-medium text-red-500 text-left">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="p-3">
                        <label htmlFor="role" className="block text-sm font-medium text-red-500 text-left">
                            Role
                        </label>
                        <select
                            id="role"
                            className="mt-1 p-2 w-full border rounded focus:ring-blue-500 focus:border-blue-500 text-left"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="">Select a role</option>
                            {/* Add role options dynamically */}
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    {/* <div className="p-3">
                        <label htmlFor="userTestField" className="block text-sm font-medium text-gray-700 text-left">
                            User Test Field
                        </label>
                        <input
                            type="text"
                            id="userTestField"
                            className="mt-1 p-2 w-full border rounded bg-gray-100 focus:ring-blue-500 focus:border-blue-500 text-left"
                            value={userTestField}
                            onChange={(e) => setUserTestField(e.target.value)}
                            required
                        />
                    </div> */}
                    <div className="flex justify-start p-3">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 mr-2">
                            Send
                        </button>
                        <button type="button" className="bg-white text-gray-600 py-2 px-4 rounded cursor-pointer hover:bg-gray-100" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InviteUsers;
