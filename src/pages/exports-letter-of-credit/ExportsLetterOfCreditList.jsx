import React from 'react';
import DeliveryTable from '../../components/delivery/DeliveryTable.jsx';
import { _getInvoiceTableInfo } from '../../api/invoice/index.js';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';

export default function ExportsLetterOfCreditList () {
    const [table, setTable] = React.useState({ rows: [], cols: [] });

    React.useEffect(() => {
        _getInvoiceTableInfo().then(table => setTable(table));
    }, []);

    return (
        <div className='p-8 w-full h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <div className='flex flex-row justify-start items-center gap-x-4'>
                    <h1 className='text-secondary-grey text-xl font-bold'>LETTER OF CREDIT LIST</h1>
                    <Link to='new' className='text-secondary-blue'>
                        <Add />
                    </Link>
                </div>
                <h1 className='text-secondary-grey text-lg'>Exports / Delivery</h1>
            </div>
            <DeliveryTable cols={table.cols} rows={table.rows} className='mt-4' />
        </div>
    );
}
