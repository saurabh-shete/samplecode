import React from 'react';
import { Link } from 'react-router-dom';
import DeliveryTable from '../../components/delivery/DeliveryTable.jsx';
import { _getVendorTableData } from '../../components/vender/_getVendorTableData.jsx';
import { Add } from '@mui/icons-material';

const index = () => {
    const [table, setTable] = React.useState({ rows: [], cols: [] });

    React.useEffect(() => {
        _getVendorTableData().then(table => setTable(table));
    }, []);
    return (
        <div className='p-8 w-full h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <div className='flex flex-row items-center text-secondary-grey gap-x-4'>
                    <h1 className='text-xl font-bold'>VENDOR LIST</h1>
                    <Link to='/vendor/new' className='text-secondary-blue'>
                        <Add />
                    </Link>
                </div>
                <h1 className='text-secondary-grey text-lg'>VENDOR</h1>
            </div>
            <DeliveryTable cols={table.cols} rows={table.rows} className='mt-4' align='center' />
        </div>
    );
};
export default index;
