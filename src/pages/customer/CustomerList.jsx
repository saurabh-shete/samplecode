import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeliveryTable from '../../components/delivery/DeliveryTable.jsx';
import { _getCustomerTableData } from '../../components/customer/_getCustomerTableData.jsx';
import { Add } from '@mui/icons-material';

const Index = () => {
    const [table, setTable] = useState({ rows: [], cols: [] });
    const [selectedCustomer, setSelectedCustomer] = useState(false);

    useEffect(() => {
        _getCustomerTableData().then(table => setTable(table));
    }, []);

    const [selectCustomer, setSelectCustomer] = useState(false);

    const customerDetails = () => {
        setSelectedCustomer(!selectedCustomer);
        setSelectCustomer(true);
    };

    const closeCustomerDetails = () => {
        setSelectedCustomer(null);
        setSelectCustomer(false);
    };

    return (
        <div className='p-8 w-full'>
            <div className='flex justify-between'>
                <div className='flex flex-row items-center text-secondary-grey gap-x-4'>
                    <h1 className='text-xl font-bold'>CUSTOMER LIST</h1>
                    <Link to='/customer/new' className='text-secondary-blue'>
                        <Add />
                    </Link>
                </div>
                <h1 className='text-secondary-grey text-lg'>Customer</h1>
            </div>
            <div className='flex'>
                <div className={`w-${selectedCustomer ? '1/4' : 'full'}`}>
                    {selectedCustomer ? (
                        <>
                            <DeliveryTable
                                cols={[
                                    {
                                        label: 'Customer Name',
                                        property: 'customerName',
                                    },
                                ]}
                                rows={table.rows.map(customer => ({
                                    ...customer,
                                    display_name: (
                                        <span className='customer-name cursor-pointer' onClick={() => customerDetails()}>
                                            {customer.customerName}
                                        </span>
                                    ),
                                }))}
                                onRowClick={customerDetails}
                                className='w-full'
                                align='center'
                            />
                        </>
                    ) : (
                        <DeliveryTable
                            cols={table.cols}
                            rows={table.rows.map(customer => ({
                                ...customer,
                                display_name: (
                                    <span className='customer-name cursor-pointer' onClick={() => customerDetails(customer)}>
                                        {customer.name}
                                    </span>
                                ),
                            }))}
                            onRowClick={customerDetails}
                            className='w-full'
                            align='center'
                        />
                    )}
                </div>
                {selectedCustomer && (
                    <div className='w-3/4 bg-gray-100'>
                        <div className='p-4'>
                            <h2>{selectedCustomer.name}</h2>
                            <p>Address: {selectedCustomer.address}</p>
                            <p>City: {selectedCustomer.city}</p>
                            <button className='text-blue-500 cursor-pointer' onClick={customerDetails}>
                                Close
                            </button>
                            {/* Add more customer details as needed */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Index;
