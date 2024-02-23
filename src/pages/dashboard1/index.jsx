import React from 'react';
import Shipment from './Shipment';
import ShipmentData from './data/shipmentData.json';
import Alerts from './Alerts';
import Invoice from './Invoice';
const index = () => {
    return (
        <div className='h-screen !overflow-y-scroll no-scrollbar bg-[#F4F7FE]'>
            <div className='p-5 text-navy-700 shrink text-[33px] capitalize'>DASHBOARD</div>
            <div className='ml-5 mr-5 grid gap-5 grid-cols-3'>
                <Shipment shipmentData={ShipmentData} />
                <Alerts />
                <Invoice />
            </div>
            <div className='mb-14' />
        </div>
    );
};

export default index;
