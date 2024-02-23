import React from 'react';
import Card from './components/card/Card';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';

const Shipment = props => {
    const ShipmentData = props.shipmentData;
    return (
        <Card extra={'w-full h-full sm:overflow-x-auto border'}>
            <div className='px-3 pb-4'>
                <div className='relative flex items-center justify-between pt-4 '>
                    <div className='flex justify-between'>
                        <div className='m-1 w-12 h-12 rounded-full object-cover bg-[#4257BE] flex justify-center items-center text-white text-xl font-bold'>
                            O
                        </div>
                        <div className='m-1 text-navy-700 text-xl flex flex-col dark:text-white'>
                            <p>Orders In Transist</p>
                            <p className='text-sm'>Status</p>
                        </div>
                    </div>
                    <MoreVertSharpIcon />
                </div>
            </div>
            {ShipmentData.map((element, elementKey) => (
                <div key={elementKey} className='border-t border-black w-full '>
                    <div className='px-3 pb-4'>
                        <div className='flex flex-col m-1'>
                            <p className='text-sm'>{element.name}</p>
                            <p className='text-xs'>{element.deliveryNo}</p>
                        </div>
                        <div className='flex justify-between w-full mr-1'>
                            <div className='flex flex-col p-1'>
                                <p className='text-xs font-bold'>Cargo Details</p>
                                <p className='text-xs'>{element.cargoDetails[0]}</p>
                                <p className='text-xs'>{element.cargoDetails[1]}</p>
                            </div>
                            <div className='flex flex-col p-1'>
                                <p className='text-xs font-bold'>Trade Lane</p>
                                <p className='text-xs'>{element.tradeLane[0]}</p>
                                <p className='text-xs'>{element.tradeLane[1]}</p>
                            </div>
                            <div className='flex flex-col p-1'>
                                <p className='text-xs font-bold'>Vessel Info</p>
                                <p className='text-xs'>{element.vesselInfo}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <span className='border-2 border-[#4257BE] w-[30%]'></span>
                            <span className='border-2 border-[#808080] w-[70%]'></span>
                        </div>
                        <div className='flex flex-row-reverse text-xs'>Details - Departed from Shanghai</div>
                    </div>
                </div>
            ))}
        </Card>
    );
};

export default Shipment;
