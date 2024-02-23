import React, { useState, useEffect } from 'react';
import { Button, Stack, Paper } from '@mui/material';
import DeliveryTable from '../../../components/delivery/DeliveryTable';
import { _getAddressTableInfo } from '../../../components/partner/AddPartner/Address/_getAddressTableData';
import { _getBankAccountTableInfo } from '../../../components/partner/AddPartner/Bank-Account/_getBankAccountTableInfo';
import { Add, Close } from '@mui/icons-material';
import AddBankAccount from './Bank-Account/index';
import AddAddress from './Address/index';

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
