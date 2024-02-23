import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Add, Close, Edit, Email, Print, Description } from '@mui/icons-material'; // Import Material-UI icons
import DeliveryTable from '../../components/delivery/DeliveryTable';
import { _getSalesOrderTableInfo } from '../../api/salesOrder/index.js';
import AttachmentsIcon from '@mui/icons-material/AttachFile';
import CommentsIcon from '@mui/icons-material/Comment';
import HistoryIcon from '@mui/icons-material/History';

const SalesOrders = () => {
    const [table, setTable] = useState({ rows: [], cols: [] });
    const [selectedSalesOrder, setSelectedSalesOrder] = useState('');

    useEffect(() => {
        _getSalesOrderTableInfo().then(table => setTable(table));
    }, []);
    const handleSalesOrderClick = salesOrderData => {
        setSelectedSalesOrder(salesOrderData['soId']);
        console.log(salesOrderData);
    };

    const handleClosePanel = () => {
        setSelectedSalesOrder('');
    };

    return (
        <div className='p-8 w-full flex'>
            {/* Main Content */}
            <div className='w-full'>
                <div className='flex justify-between'>
                    <div className='flex flex-row items-center text-secondary-grey gap-x-4'>
                        <h1 className='text-xl font-bold'>SALES ORDER LIST</h1>
                        <Link to='new' className='text-secondary-blue'>
                            <Add />
                        </Link>
                    </div>
                    <h1 className='text-secondary-grey text-lg'>Exports / Sales Order</h1>
                </div>

                {/* Display the table */}
                <div className='flex'>
                    <div className={`w-${selectedSalesOrder ? '3/4' : 'full'} transition-all duration-300 ease-in-out`}>
                        <DeliveryTable cols={table.cols} rows={table.rows} align='center' onRowClick={handleSalesOrderClick} />
                    </div>
                    {selectedSalesOrder && (
                        <div className='w-full bg-white p-4 shadow-md transform translate-x-0 transition-all duration-300 ease-in-out'>
                            <button onClick={handleClosePanel} className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'>
                                <Close />
                            </button>
                            <div className='flex justify-between items-center mb-4 border-b-2 border-gray-200'>
                                {/* Header with SO ID on top left */}
                                <div className='text-lg font-bold'>SO ID: {selectedSalesOrder}</div>
                                {/* Icons for Attachments, Comments, and History on top right */}
                                <div className='text-lg flex gap-x-2'>
                                    <AttachmentsIcon />
                                    <CommentsIcon />
                                    <HistoryIcon />
                                </div>
                            </div>
                            {/* Header for Edit, Email, PDF/Print, and Create Invoice */}
                            <div className='flex gap-x-4 border-b-2 border-gray-200 '>
                                <button className='flex gap-x-2 items-center hover:text-blue-500 border-r-2 pr-4'>
                                    <Edit />
                                    <span>Edit</span>
                                </button>
                                <button className='flex gap-x-2 items-center hover:text-blue-500 border-r-2 pr-4'>
                                    <Email />
                                    <span>Email</span>
                                </button>
                                <button className='flex gap-x-2 items-center hover:text-blue-500 border-r-2 pr-4'>
                                    <Print />
                                    <span>PDF/Print</span>
                                </button>
                                <button className='flex gap-x-2 items-center hover:text-blue-500'>
                                    <Description />
                                    <span>Create Invoice</span>
                                </button>
                            </div>
                            {/* Add more details as needed */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SalesOrders;
