import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeliveryTable from '../delivery/DeliveryTable.jsx';
import { _getCustomerTableData } from './_getCustomerTableData.jsx';
import { Add, Close, Edit, AttachFile, ExpandMore } from '@mui/icons-material'; // Import necessary icons

const Index = () => {
    const [table, setTable] = useState({ rows: [], cols: [] });
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showNewTransactionDropdown, setShowNewTransactionDropdown] = useState(false);

    useEffect(() => {
        _getCustomerTableData().then((table) => setTable(table));
    }, []);

    const customerDetails = (customerName) => {
        setSelectedCustomer(customerName);
    };

    const closeCustomerDetails = () => {
        setSelectedCustomer(null);
    };

    const toggleNewTransactionDropdown = () => {
        setShowNewTransactionDropdown(!showNewTransactionDropdown);
    };

    return (
        <div className="p-8 w-full">
            <div className="flex justify-between">
                <div className="flex flex-row items-center text-secondary-grey gap-x-4">
                    <h1 className="text-xl font-bold">CUSTOMER LIST</h1>
                    <Link to="/customer/new" className="text-secondary-blue">
                        <Add />
                    </Link>
                </div>
                {selectedCustomer && (
                    <div className="flex items-center space-x-4">
                        <button className="text-blue-500 cursor-pointer flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                            <Edit />
                            Edit
                        </button>
                        <button className="text-blue-500 cursor-pointer flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                            <AttachFile />
                            Attachment
                        </button>
                        <div className="relative inline-block text-left">
                            <button className="text-blue-500 cursor-pointer flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                                <div onClick={toggleNewTransactionDropdown}>
                                    <span className="cursor-pointer">New Transaction</span>
                                    <ExpandMore className={`ml-2 ${showNewTransactionDropdown ? 'transform rotate-180' : ''}`} />
                                </div>
                                {showNewTransactionDropdown && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                                Option 1
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                                Option 2
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                                Option 3
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </button>
                        </div>
                        <button className="text-blue-500 cursor-pointer flex items-center bg-gray-100 px-4 py-2 rounded-lg" onClick={closeCustomerDetails}>
                            <Close />
                            Close
                        </button>
                    </div>
                )}
            </div>
            <div className="flex">
                <div className={`w-${selectedCustomer ? '1/3' : 'full'}`}> {/* Adjusted width to 1/3 */}
                    {selectedCustomer ? (
                        <DeliveryTable
                            cols={[
                                {
                                    label: 'Customer Name',
                                    property: 'customerName',
                                },
                            ]}
                            rows={table.rows.map((customer) => ({
                                ...customer,
                                display_name: customer.customerName,
                            }))}
                            onRowClick={(customer) => customerDetails(customer.customerName)}
                            className="w-full"
                            align="center"
                        />
                    ) : (
                        <DeliveryTable
                            cols={table.cols}
                            rows={table.rows.map((customer) => ({
                                ...customer,
                                display_name: customer.name,
                            }))}
                            onRowClick={(customer) => customerDetails(customer.customerName)}
                            className="w-full"
                            align="center"
                        />
                    )}
                </div>
                {selectedCustomer && (
                    <div className="w-2/3 bg-gray-100"> {/* Adjusted width to 2/3 */}
                        <div className="p-4">
                            <h2>{selectedCustomer}</h2>
                            {/* Add more customer details as needed */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Index;
