import React, { useState, useEffect } from 'react';
import { Button, Stack, Paper } from '@mui/material';
import DeliveryTable from '../../../components/delivery/DeliveryTable';
import { _getAddressTableInfo } from '../../../components/customer/AddCustomer/Address/_getAddressTableData';
import { _getPriceTableInfo } from '../../../components/customer/AddCustomer/PriceList/_getPriceTableInfo.jsx';
import { _getTermsTableInfo } from '../../../components/customer/AddCustomer/TermsList/_getTermsTableInfo.jsx';
import { Add, Close } from '@mui/icons-material';
import AddAddress from './Address/index';
import Price from './PriceList/index';
import TermsList from './TermsList/index';
import BillingInfo from './Billing/index';
import AddContact from './Contact/index';

export function Address ({ formRef }) {
    const [table, setTable] = useState({ rows: [], cols: [] });
    const [addAddress, setAddAddress] = useState(false);

    const toggleAddressModal = () => {
        setAddAddress(!addAddress);
    };

    useEffect(() => {
        _getAddressTableInfo().then(table => setTable(table));
    }, []);

    return (
        <div className='w-full'>
            <DeliveryTable cols={table.cols} rows={table.rows} className='' align='center' />
            <div className='flex mt-3'>
                <Button
                    sx={{
                        backgroundColor: '#d1d5db',
                        color: '#020617',
                        textTransform: 'none',
                        width: '120px',
                        '&:hover': {
                            backgroundColor: '#d1d5db',
                        },
                    }}
                    onClick={toggleAddressModal}
                >
                    <Add />
                    Address
                </Button>
            </div>
            {addAddress && <AddAddress onClose={() => toggleAddressModal()} />}
        </div>
    );
}

export function TradeTerms ({ formRef }) {
    const [table, setTable] = useState({ rows: [], cols: [] });
    const [addTerms, setAddTerms] = useState(false);

    const toggleTermsModal = () => {
        setAddTerms(!addTerms);
    };

    useEffect(() => {
        _getTermsTableInfo().then(table => setTable(table));
    }, []);

    return (
        <div className='w-full'>
            <DeliveryTable cols={table.cols} rows={table.rows} className='' align='center' />
            <div className='flex mt-3'>
                <Button
                    sx={{
                        backgroundColor: '#d1d5db',
                        color: '#020617',
                        textTransform: 'none',
                        width: '120px',
                        '&:hover': {
                            backgroundColor: '#d1d5db',
                        },
                    }}
                    onClick={toggleTermsModal}
                >
                    <Add />
                    Terms
                </Button>
            </div>
            {addTerms && <TermsList onClose={() => toggleTermsModal()} />}
        </div>
    );
}

export function Contact ({}) {
    const [addContact, setAddContact] = useState(false);

    const toggleContactModal = () => {
        setAddContact(!addContact);
    };
    return (
        <>
            <div className='grid grid-cols-1 h-52'>
                <Paper
                    sx={{
                        textAlign: 'left',
                        padding: 1,
                    }}
                >
                    <Stack direction='column'>
                        <p className='font-bold text-secondary-grey p-1'>Contact Details</p>
                        <div className='flex flex-row m-1'>
                            <div className='flex flex-col p-1 w-[60vw] justify-between'>
                                <div className='text-left p-2'>
                                    <span className='font-bold'>Name- </span>
                                    <span className='text-secondary-grey'>Alex Baker</span>
                                </div>
                                <div className='text-left p-2'>
                                    <span className='font-bold'>Email- </span>
                                    <span className='text-secondary-grey'>alex@customer2.com</span>
                                </div>
                            </div>
                            <div className='flex flex-col p-1 w-[60vw] justify-between'>
                                <div className='text-left p-2'>
                                    <span className='font-bold'>Job Title- </span>
                                    <span className='text-secondary-grey'>Head Customer Service</span>
                                </div>
                                <div className='text-left p-2'>
                                    <span className='font-bold'>Phone- </span>
                                    <span className='text-secondary-grey'>alex@customer2.com</span>
                                </div>
                            </div>
                        </div>
                        <Button
                            sx={{
                                margin: 2,
                                backgroundColor: '#d1d5db',
                                color: '#020617',
                                textTransform: 'none',
                                width: '140px',
                                '&:hover': {
                                    backgroundColor: '#d1d5db',
                                },
                            }}
                            onClick={toggleContactModal}
                        >
                            <Add />
                            Add Contact
                        </Button>
                    </Stack>
                </Paper>
            </div>
            {addContact && <AddContact onClose={() => toggleContactModal()} />}
        </>
    );
}

export function Billing ({}) {
    return <BillingInfo />;
}
export function PriceList ({}) {
    const [table, setTable] = useState({ rows: [], cols: [] });
    const [addPriceList, setAddPriceList] = useState(false);

    const togglePriceListModal = () => {
        setAddPriceList(!addPriceList);
    };

    useEffect(() => {
        _getPriceTableInfo().then(table => setTable(table));
    }, []);

    return (
        <div className='w-full'>
            <DeliveryTable cols={table.cols} rows={table.rows} className='' align='center' />
            <div className='flex mt-3'>
                <Button
                    sx={{
                        backgroundColor: '#d1d5db',
                        color: '#020617',
                        textTransform: 'none',
                        width: '120px',
                        '&:hover': {
                            backgroundColor: '#d1d5db',
                        },
                    }}
                    onClick={togglePriceListModal}
                >
                    <Add />
                    Product
                </Button>
            </div>
            {addPriceList && <Price onClose={() => togglePriceListModal()} />}
        </div>
    );
}
