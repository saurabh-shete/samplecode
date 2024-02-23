import { useEffect, useState, createContext, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import AutoForm from '../../components/forms/AutoForm';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import AddManufacturer from '../../components/product/AddManufacturer';
import { IconButton, InputAdornment } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EditIcon from '@mui/icons-material/Edit';
import FieldArray from './FieldArray';
import AttachReference from './AttachReference';
export const salesOrderContext = createContext();

export default function EditSalesOrderPoc () {
    const [searchParams, setSearchParams] = useSearchParams();
    const axiosPrivate = useAxiosPrivate();
    const [isAddManufacturerOpen, setIsAddManufacturerOpen] = useState(false);
    const [isActive, setIsActive] = useState();
    const [formState, setFormState] = useState({});
    const [customerName, setCustomerName] = useState([]);
    const [manufacturerDetails, setManufacturerDetails] = useState([]);
    const [currencyDetails, setCurrencyDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const customerResponse = await axiosPrivate.get('customer');
            setCustomerName(customerResponse.data.data);
            const manufacturerResponse = await axiosPrivate.get('manufacturer');
            setManufacturerDetails(manufacturerResponse.data.data);
            const currencyResponse = await axiosPrivate.get('currency');
            setCurrencyDetails(currencyResponse.data.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const activeState = searchParams.get('isActive');
        console.log(activeState);
        if (activeState !== null) {
            setIsActive(parseInt(activeState));
        } else {
            setIsActive(0);
        }
    }, []);

    const tabChange = data => {
        setIsActive(data);
        setSearchParams({ isActive: data });
    };

    // const handleManufacturer = () => {
    //     setIsAddManufacturerOpen(!isAddManufacturerOpen);
    // };
    const salesOrderDetailsForm = {
        formStyle: 'col-span-8 p-6 bg-white rounded-xl',
        header: [],
        sections: [
            {
                name: 'So Details',
                sectionNameStyle: 'text-lg text-purple-700 mb-4 border-b-2 border-[border-gray]',
                fields: [
                    {
                        id: 'customerName',
                        type: 'select',
                        label: 'Customer name',
                        validations: [{ pass: value => !!value, message: 'Customer name should be selected' }],
                        source: [...customerName.map(customer => ({ id: customer.id, name: customer.customerName }))],
                    },
                    {
                        id: 'salesOrderDate',
                        type: 'date',
                        label: 'SO Date',
                        format: 'dd-MM-yyyy',
                        validations: [{ pass: value => !!value, message: 'Sales order date is required' }],
                    },
                    {
                        id: 'salesOrderId',
                        type: 'text',
                        label: 'Sales order ID',
                        defaultValue: 'SO-2023-349869',
                        disabled: true,
                        validations: [
                            { pass: value => !!value, message: 'Sales order ID is required' },
                            { pass: value => value.length >= 6, message: 'Order ID must be at least 6 digits' },
                        ],
                        rightEndIcon: {
                            endAdornment: (
                                <IconButton edge='end'>
                                    <SettingsIcon />
                                </IconButton>
                            ),
                        },
                    },
                    {
                        id: 'purchaseOrderDate',
                        type: 'date',
                        label: 'PO Date',
                        format: 'dd-MM-yyyy',
                        validations: [{ pass: value => !!value, message: 'Purchase order date is required' }],
                    },
                    {
                        id: 'referencePurchaseOrder',
                        type: 'text',
                        label: 'Reference PO',
                        validations: [{ pass: value => !!value, message: 'Reference PO should be selected' }],
                    },
                    {
                        id: 'terms',
                        type: 'select',
                        label: 'Terms',
                        validations: [],
                        source: [
                            { id: 1, name: 'Term 1' },
                            { id: 2, name: 'Term 2' },
                        ],
                        // @TODO: Hint to show when the input is selected
                        liveSelectionHint: {
                            type: 'link',
                            to: '/terms/:id',
                        },
                    },
                    {
                        id: 'currency',
                        type: 'select',
                        label: 'Currency',
                        source: [...currencyDetails.map(currency => ({ id: currency.id, name: `${currency.code} | ${currency.name}` }))],
                        sub_label: 'Payment received in currency',
                    },
                    {
                        id: 'exchangeRate',
                        type: 'text',
                        label: 'Exchange rate',
                        leftEndIcon: {
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <CurrencyExchangeIcon />
                                </InputAdornment>
                            ),
                        },
                        rightEndIcon: {
                            endAdornment: (
                                <IconButton edge='end'>
                                    <EditIcon />
                                </IconButton>
                            ),
                        },
                        sub_label: 'Base Currency: USD',
                        validations: [],
                    },
                    // {
                    //     id: 'salesOrderExpiryDate',
                    //     type: 'date',
                    //     label: 'Sales order expiry date',
                    //     format: 'dd-MM-yyyy',
                    //     validations: [],
                    // },
                    {
                        id: 'manufacturerName',
                        type: 'customizedSelect',
                        label: 'Manufacturer',
                        validations: [{ pass: value => !!value, message: 'Manufacturer name should be selected' }],
                        source: [manufacturerDetails, setManufacturerDetails],
                        onClickEvent: [setIsAddManufacturerOpen],
                    },
                ],
                layout: {
                    on: 'className',
                    className: 'grid grid-cols-3 gap-4',
                    fieldClass: 'col-span-1',
                },
            },
            {
                name: 'So Terms',
                sectionNameStyle: 'pt-4 text-lg text-purple-700 mb-4 border-b-2 border-[border-gray]',
                fields: [
                    {
                        id: 'language',
                        type: 'select',
                        label: 'Language',
                        validations: [{ pass: value => !!value, message: 'Language should be selected' }],
                        source: [{ id: 0, name: 'english' }],
                    },
                    {
                        id: 'paymentTerms',
                        type: 'select',
                        label: 'Payment Terms',
                        validations: [{ pass: value => !!value, message: 'Payment Terms be selected' }],
                        source: [{ id: 0, name: 'Net 45' }],
                    },
                    {
                        id: 'incoTerm',
                        type: 'select',
                        label: 'Inco Term',
                        validations: [{ pass: value => !!value, message: 'Inco Termbe selected' }],
                        source: [{ id: 0, name: 'english' }],
                    },
                    {
                        id: 'incoTermPrice',
                        type: 'text',
                        label: 'Inco Term Price',
                        validations: [{ pass: value => !!value, message: 'Inco Term Price should be selected' }],
                    },
                ],
                layout: {
                    on: 'className',
                    className: 'grid grid-cols-3 gap-4',
                    fieldClass: 'col-span-1',
                },
            },
        ],

        footer: [],
    };

    const partnersForm = {
        sections: [],
    };

    return (
        <salesOrderContext.Provider value={{ formState, setFormState }}>
            <div className='p-12 w-full bg-gray-100 h-screen !overflow-y-scroll no-scrollbar'>
                <div className='grid grid-cols-12 gap-12'>
                    <div className='col-span-4 p-6 bg-white rounded-xl'>
                        <h1 className='text-2xl'>Add sales order</h1>
                        <div className='grid gap-3 mt-8'>
                            <div className='flex flex-row-reverse'>
                                <div
                                    className={`h-10 flex justify-center items-center w-[80%] rounded-3xl ${
                                        isActive === 0 ? 'bg-lavender-dark text-white' : 'bg-lavender-light text-black'
                                    }`}
                                    onClick={() => tabChange(0)}
                                >
                                    SO Details
                                </div>
                            </div>
                            <div className='flex flex-row-reverse'>
                                <div
                                    className={`h-10 flex justify-center items-center w-[80%] rounded-3xl ${
                                        isActive === 1 ? 'bg-lavender-dark text-white' : 'bg-lavender-light text-black'
                                    }`}
                                    onClick={() => tabChange(1)}
                                >
                                    Partners
                                </div>
                            </div>
                            <div className='flex flex-row-reverse'>
                                <div
                                    className={`h-10 flex justify-center items-center w-[80%] rounded-3xl ${
                                        isActive === 2 ? 'bg-lavender-dark text-white' : 'bg-lavender-light text-black'
                                    }`}
                                    onClick={() => tabChange(2)}
                                >
                                    Product Details
                                </div>
                            </div>
                            <div className='flex flex-row-reverse'>
                                <div
                                    className={`h-10 flex justify-center items-center w-[80%] rounded-3xl ${
                                        isActive === 3 ? 'bg-lavender-dark text-white' : 'bg-lavender-light text-black'
                                    }`}
                                    onClick={() => tabChange(3)}
                                >
                                    Attach Reference
                                </div>
                            </div>
                            <div className='flex flex-row-reverse'>
                                <div
                                    className={`h-10 flex justify-center items-center w-[80%] rounded-3xl ${
                                        isActive === 4 ? 'bg-lavender-dark text-white' : 'bg-lavender-light text-black'
                                    }`}
                                    onClick={() => tabChange(4)}
                                >
                                    Review and send
                                </div>
                            </div>
                        </div>
                    </div>
                    {isActive === 0 && <AutoForm form={salesOrderDetailsForm} />}
                    {isActive === 1 && <FieldArray />}
                    {isActive === 2 && <AutoForm form={partnersForm} />}
                    {isActive === 3 && <AttachReference />}
                    {isActive === 4 && <AutoForm form={partnersForm} />}
                </div>
            </div>

            {isAddManufacturerOpen && (
                <AddManufacturer onClose={() => setIsAddManufacturerOpen(false)} setManufacturerDetailsFromProduct={setManufacturerDetails} />
            )}
        </salesOrderContext.Provider>
    );
}
