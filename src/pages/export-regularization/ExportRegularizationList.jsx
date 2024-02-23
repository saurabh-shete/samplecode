import React from 'react';
import { Link } from 'react-router-dom';
import DeliveryTable from '../../components/delivery/DeliveryTable.jsx';
import { cols, LeftForm, RightForm, rows } from './ErForms.jsx';
import { Add } from '@mui/icons-material';

const Quotation = () => {
    // const [table, setTable] = React.useState({ rows: [], cols: [] });

    // React.useEffect(() => {
    //     _getSalesOrderTableInfo().then(table => setTable(table));
    // }, []);

    return (
        <div className='p-8 w-full h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between'>
                <div className='flex flex-row items-center text-secondary-grey gap-x-4'>
                    <h1 className='text-xl font-bold'>BRC Details</h1>
                    <Link to='new' className='text-secondary-blue'>
                        <Add />
                    </Link>
                </div>
            </div>
            <DeliveryTable rows={rows} cols={cols} />
        </div>
    );
};

export default Quotation;
