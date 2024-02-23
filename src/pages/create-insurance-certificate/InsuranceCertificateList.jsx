import React from 'react';
import { Link } from 'react-router-dom';
import DeliveryTable from '../../components/delivery/DeliveryTable.jsx';
import { _getSalesOrderTableInfo } from '../../api/salesOrder/index.js';
import { Add } from '@mui/icons-material';

const InsuranceCertificateList = () => {
    const [table, setTable] = React.useState({ rows: [], cols: [] });

    React.useEffect(() => {
        _getSalesOrderTableInfo().then(table => setTable(table));
    }, []);

    return (
        <div className='p-8 w-full h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <div className='flex flex-row items-center text-secondary-grey gap-x-4'>
                    <h1 className='text-xl font-bold'>INSURANCE CERTIFICATE LIST</h1>
                    <Link to='new' className='text-secondary-blue'>
                        <Add />
                    </Link>
                </div>
                <h1 className='text-secondary-grey text-lg'>Insurance</h1>
            </div>
            <DeliveryTable cols={table.cols} rows={table.rows} className='mt-4' align='center' />
        </div>
    );
};

export default InsuranceCertificateList;
