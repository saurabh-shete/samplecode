import React from 'react';
import { _getSalesOrderTableInfo } from '../../api/salesOrder';
import DeliveryTable from '../../components/delivery/DeliveryTable';

const InwardRemittance = () => {
    const [table, setTable] = React.useState({ rows: [], cols: [] });

    React.useEffect(() => {
        _getSalesOrderTableInfo().then(table => setTable(table));
    }, []);
    console.log('table', table);
    return (
        <div className='p-8 w-full h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <div className='flex flex-row items-center text-secondary-grey gap-x-4'>
                    <h1 className='text-xl font-bold'>Inward Remittance</h1>
                </div>
                <h1 className='text-secondary-grey text-lg'>Compliance/Inward Remittance</h1>
            </div>
            <DeliveryTable cols={table.cols} rows={table.rows} className='mt-4' align='center' />
        </div>
    );
};

export default InwardRemittance;
