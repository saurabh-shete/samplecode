import React from 'react';
import DeliveryTable from '../../components/delivery/DeliveryTable.jsx';
import { _getInvoiceTableInfo } from '../../api/invoice/index.js';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function ShipmentList () {
    const [table, setTable] = React.useState({ rows: [], cols: [] });

    React.useEffect(() => {
        _getInvoiceTableInfo().then(table => setTable(table));
    }, []);
    return (
        <div className='p-8 w-full h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <div className='flex flex-row justify-start items-center gap-x-4'>
                    <h1 className='text-secondary-grey text-xl font-bold'>BILL OF ENTRY LIST</h1>
                    <Link to='new' className='text-secondary-blue'>
                        <Add />
                    </Link>
                </div>
                <h1 className='text-secondary-grey text-lg'>Exports / Shipment</h1>
            </div>
            <DeliveryTable cols={table.cols} rows={table.rows} className='mt-4' align='center' />
        </div>
    );
}
