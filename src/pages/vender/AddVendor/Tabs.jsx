import React, { useState, useEffect } from 'react';
import { Button, Stack, Paper } from '@mui/material';
import DeliveryTable from '../../../components/delivery/DeliveryTable';
import { _getAddressTableInfo } from '../../../components/vender/AddVendor/Address/_getAddressTableData';
import { _getBankAccountTableInfo } from '../../../components/vender/AddVendor/Bank-Account/_getBankAccountTableInfo';
import { _getGroupTableInfo } from '../../../components/vender/AddVendor/Group/_getGroupTableInfo';
import { _getPriceListTableInfo } from '../../../components/vender/AddVendor/PriceList/_getPriceListTableInfo';
import { _getLegalIdentifierTableInfo } from '../../../components/vender/AddVendor/LegalIdentifier/_getLegalIdentifierTableInfo';
import { Add, Close } from '@mui/icons-material';
import AddBankAccount from './Bank-Account/index';
import AddAddress from './Address/index';
import AddGroup from './Group/index';
import AddPriceList from './PriceList/index';
import AddLegalIdentifier from './LegalIdentifier/index';

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

export function BankAccount ({ formRef }) {
    const [table, setTable] = useState({ rows: [], cols: [] });
    const [addBankAccount, setAddBankAccount] = useState(false);

    const toggleTermsModal = () => {
        setAddBankAccount(!addBankAccount);
    };

    useEffect(() => {
        _getBankAccountTableInfo().then(table => setTable(table));
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
                        width: '170px',
                        '&:hover': {
                            backgroundColor: '#d1d5db',
                        },
                    }}
                    onClick={toggleTermsModal}
                >
                    <Add />
                    Add Bank Account
                </Button>
            </div>
            {addBankAccount && <AddBankAccount onClose={() => toggleTermsModal()} />}
        </div>
    );
}

export function Group ({ formRef }) {
    const [table, setTable] = useState({ rows: [], cols: [] });
    const [addGroup, setAddGroup] = useState(false);

    const toggleGroupModal = () => {
        setAddGroup(!addGroup);
    };

    useEffect(() => {
        _getGroupTableInfo().then(table => setTable(table));
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
                    onClick={toggleGroupModal}
                >
                    <Add />
                    Groups
                </Button>
            </div>
            {addGroup && <AddGroup onClose={() => toggleGroupModal()} />}
        </div>
    );
}

export function PriceList ({ formRef }) {
    const [table, setTable] = useState({ rows: [], cols: [] });
    const [addPriceList, setAddPriceList] = useState(false);

    const togglePriceListModal = () => {
        setAddPriceList(!addPriceList);
    };

    useEffect(() => {
        _getPriceListTableInfo().then(table => setTable(table));
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
                    Price List
                </Button>
            </div>
            {addPriceList && <AddPriceList onClose={() => togglePriceListModal()} />}
        </div>
    );
}
export function LegalIdentifier ({ formRef }) {
    const [table, setTable] = useState({ rows: [], cols: [] });
    const [addLegalIdentifier, setAddLegalIdentifier] = useState(false);

    const toggleLegalIdentifierModal = () => {
        setAddLegalIdentifier(!addLegalIdentifier);
    };

    useEffect(() => {
        _getLegalIdentifierTableInfo().then(table => setTable(table));
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
                        width: '140px',
                        '&:hover': {
                            backgroundColor: '#d1d5db',
                        },
                    }}
                    onClick={toggleLegalIdentifierModal}
                >
                    <Add />
                    Legal Identifier
                </Button>
            </div>
            {addLegalIdentifier && <AddLegalIdentifier onClose={() => toggleLegalIdentifierModal()} />}
        </div>
    );
}
