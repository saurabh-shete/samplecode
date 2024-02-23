import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

// //Import Scrollbar
//import SimpleBar from 'simplebar-react';

// MetisMenu
//import MetisMenu from 'metismenujs';
import { Link } from 'react-router-dom';

//i18n
//import { withTranslation } from 'react-i18next';

import { RiArrowDropDownLine } from 'react-icons/ri';
import { id } from 'date-fns/locale';
import { json } from 'd3';

const SidebarContent = () => {
    const ref = useRef();

    const [stateMaintain, setStateMaintain] = useState({
        dashboard: false,
        accounts: false,
        export: false,
        import: false,
        serviceExport: false,
        products: false,
        compliance: false,
        banking: false,
        treasury: false,
        product: false,
    });

    const [isPaymentReceived, setPaymentReceived] = useState(false);
    const [isPayment, setPayment] = useState(false);
    const [isRemittance, setRemittance] = useState(false);

    const handleSubMenuToggle = menuName => {
        var updatedState = JSON.parse(JSON.stringify(stateMaintain));

        Object.keys(stateMaintain).forEach(key => {
            if (key === menuName) {
                updatedState[key] = !updatedState[key]; // Toggle the value
            } else {
                updatedState[key] = false; // Set other keys to false
            }
            console.log(updatedState);
            console.log(updatedState[key]);
            console.log(key);
            console.log(menuName);
        });

        setStateMaintain(updatedState);
    };

    const handlePaymentReceivedToggle = () => {
        setPaymentReceived(!isPaymentReceived);
    };
    const handlePaymentToggle = () => {
        setPayment(!isPayment);
    };
    const handleRemittanceToggle = () => {
        setRemittance(!isRemittance);
    };

    return (
        <div className='h-100vh h-screen !overflow-y-scroll no-scrollbar'>
            <div className='h-100vh text-left pl-2'>
                <ul className='p-1' id='side-menu'>
                    {/*Dashboard*/}
                    <li className='pb-1'>{'Menu'} </li>
                    <li className='relative p-3'>
                        <button onClick={() => handleSubMenuToggle('dashboard')} className='flex items-center w-full focus:outline-none menu-button'>
                            <div className='flex justify-align items-center'>
                                <span className='p-1'>Dashboard</span>
                                <div
                                    className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                        stateMaintain['dashboard'] ? 'rotate-180 origin-center duration-500' : 'rotate-0 origin-center duration-500'
                                    }`}
                                >
                                    <RiArrowDropDownLine className='w-7 h-7' />
                                </div>
                            </div>
                        </button>
                        <ul className={`sub-menu ${stateMaintain['dashboard'] ? 'block' : 'hidden'}`} id='dashboardSubMenu'>
                            <li className='p-2 focus:outline-none'>
                                <Link to='dashboard'>{'Export'}</Link>
                            </li>
                            <li className='p-2 focus:outline-none'>
                                <Link to='dashboard'>{'Import'}</Link>
                            </li>
                        </ul>
                    </li>

                    {/*Accounts*/}
                    <li className='relative p-3'>
                        <button onClick={() => handleSubMenuToggle('accounts')} className='flex items-center w-full focus:outline-none menu-button'>
                            <div className='flex justify-align items-center'>
                                <span className='p-1'>Accounts</span>
                                <div
                                    className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                        stateMaintain['accounts'] ? 'rotate-180 origin-center duration-500' : 'rotate-0 origin-center duration-500'
                                    }`}
                                >
                                    <RiArrowDropDownLine className='w-7 h-7' />
                                </div>
                            </div>
                        </button>
                        <ul className={`sub-menu ${stateMaintain['accounts'] ? 'block' : 'hidden'} focus:outline-none menu-button`}>
                            <li className='p-2'>
                                <Link to='customer'>{'Customer'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='vendor'>{'Vendor'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='partner'>{'Partner'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='contacts'>{'Contacts'}</Link>
                            </li>
                        </ul>
                    </li>

                    {/*Export*/}
                    <li className='relative p-3'>
                        <button onClick={() => handleSubMenuToggle('export')} className='flex items-center w-full'>
                            <div className='flex justify-align items-center'>
                                <span className='p-1'>Export</span>
                                <div
                                    className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                        stateMaintain['export'] ? 'rotate-180 origin-center duration-500' : 'rotate-0 origin-center duration-500'
                                    }`}
                                >
                                    <RiArrowDropDownLine className='w-7 h-7' />
                                </div>
                            </div>
                        </button>
                        <ul className={`sub-menu ${stateMaintain['export'] ? 'block' : 'hidden'}`}>
                            <li className='p-2'>
                                <Link to='export/sales-quotation'>{'Quotation'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='export/sales-order'>{'Sales Order'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='export/delivery'>{'Delivery'}</Link>
                            </li>

                            <li className='p-2'>
                                <Link to='export/shipment'>{'Shipment'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='export/invoice'>{'Invoice'}</Link>
                            </li>
                            <li className='p-2'>
                                <button onClick={() => handlePaymentReceivedToggle()} className='flex items-center w-full'>
                                    <div className='flex justify-align items-center'>
                                        <span>Payment Received</span>
                                        <div
                                            className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                                isPaymentReceived ? 'rotate-180 origin-center duration-500' : 'rotate-0 origin-center duration-500'
                                            }`}
                                        >
                                            <RiArrowDropDownLine className='w-7 h-7' />
                                        </div>
                                    </div>
                                </button>
                                <ul className={`sub-menu ${isPaymentReceived ? 'block' : 'hidden'} focus:outline-none`}>
                                    <li className='p-1'>
                                        <Link to='export/payment-receipt'>{'Advance'}</Link>
                                    </li>
                                    <li className='p-1'>
                                        <Link to='export/payment-recieved'>{'Payment Agaisnt Invoice'}</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='p-2'>
                                <Link to='export/brc'>{'Export Regularization (BRC)'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='export/scheme'>{'Scheme'}</Link>
                            </li>

                            <li className='p-2'>
                                <Link to='export/insurance-policy'>{'Insurance Policy'}</Link>
                            </li>

                            <li className='p-2'>
                                <Link to='export/insurance-certificate'>{'Insurance Certificate/Utilization'}</Link>
                            </li>

                            <li className='p-2'>
                                <Link to='export/trade-credit-insurance'>{'ECGC/Trade Credit Insurance'}</Link>
                            </li>

                            <li className='p-2'>
                                <Link to='export/letter-of-credit'>{'Letter of Credit'}</Link>
                            </li>
                        </ul>
                    </li>

                    {/*Import*/}
                    <li className='relative p-3'>
                        <button onClick={() => handleSubMenuToggle('import')} className='flex items-center w-full'>
                            <div className='flex justify-align items-center'>
                                <span className='p-1'>Import</span>
                                <div
                                    className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                        stateMaintain['import'] ? 'rotate-180 origin-center duration-500' : 'rotate-0 origin-center duration-500'
                                    }`}
                                >
                                    <RiArrowDropDownLine className='w-7 h-7' />
                                </div>
                            </div>
                        </button>
                        <ul className={`sub-menu ${stateMaintain['import'] ? 'block' : 'hidden'}`}>
                            <li className='p-2'>
                                <Link to='import/purchase-order/'>{'Purchase Order'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='import/lc-issuance'>{'LC Issuance'}</Link>
                            </li>
                            <li className='p-2'>
                                <button onClick={() => handlePaymentToggle()} className='flex items-center w-full'>
                                    <div className='flex justify-align items-center'>
                                        <span>Payments</span>
                                        <div
                                            className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                                isPayment ? 'rotate-180 origin-center duration-500' : 'rotate-0 origin-center duration-500'
                                            }`}
                                        >
                                            <RiArrowDropDownLine className='w-7 h-7' />
                                        </div>
                                    </div>
                                </button>
                                <ul className={`sub-menu ${isPayment ? 'block' : 'hidden'}`}>
                                    <li className='p-1'>
                                        <Link to='import/payment'>{'Advance'}</Link>
                                    </li>
                                    <li className='p-1'>
                                        <Link to='import/payment'>{'Payment against invoice'}</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='p-2'>
                                <Link to='import/shipment-plan'>{'Shipment Plan'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='import/documents'>{'Document'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='import/bill-of-entry'>{'Bill of Entry'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='import/grn/'>{'GRN'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='import/inspection/'>{'Inspection'}</Link>
                            </li>
                        </ul>
                    </li>

                    {/*Product*/}
                    <li className='relative p-3'>
                        <button onClick={() => handleSubMenuToggle('product')} className='flex items-center w-full'>
                            <div className='flex justify-align items-center'>
                                <span className='p-1'>Product</span>
                                <div
                                    className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                        stateMaintain['import'] ? 'rotate-180 origin-center duration-500' : 'rotate-0 origin-center duration-500'
                                    }`}
                                >
                                    <RiArrowDropDownLine className='w-7 h-7' />
                                </div>
                            </div>
                        </button>
                        <ul className={`sub-menu ${stateMaintain['product'] ? 'block' : 'hidden'}`}>
                            <li className='p-2'>
                                <Link to='products'>{'Inventory'}</Link>
                            </li>
                        </ul>
                    </li>

                    {/*Services Export*/}
                    <li className='relative p-3'>
                        <button onClick={() => handleSubMenuToggle('servicesExport')} className='flex items-center w-full'>
                            <div className='flex justify-align items-center'>
                                <span className='p-1'>Services Export</span>
                                <div
                                    className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                        stateMaintain['servicesExport']
                                            ? 'rotate-180 origin-center duration-500'
                                            : 'rotate-0 origin-center duration-500'
                                    }`}
                                >
                                    <RiArrowDropDownLine className='w-7 h-7' />
                                </div>
                            </div>
                        </button>
                        <ul className={`sub-menu ${stateMaintain['servicesExport'] ? 'block' : 'hidden'}`}>
                            <li className='p-2'>
                                <Link to='coming-soon'>{'Nothing to show'}</Link>
                            </li>
                        </ul>
                    </li>

                    {/*Compliance*/}
                    <li className='relative p-3'>
                        <button onClick={() => handleSubMenuToggle('compliance')} className='flex items-center w-full'>
                            <div className='flex justify-align items-center'>
                                <span className='p-1'>Compliance</span>
                                <div
                                    className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                        stateMaintain['compliance'] ? 'rotate-180 origin-center duration-500' : 'rotate-0 origin-center duration-500'
                                    }`}
                                >
                                    <RiArrowDropDownLine className='w-7 h-7' />
                                </div>
                            </div>
                        </button>
                        <ul className={`sub-menu ${stateMaintain['compliance'] ? 'block' : 'hidden'}`}>
                            <li className='p-2'>
                                <button onClick={() => handleRemittanceToggle()} className='flex items-center w-full'>
                                    <div className='flex justify-align items-center'>
                                        <span>Remittance</span>

                                        <div
                                            className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                                isRemittance ? 'rotate-180 origin-center duration-500' : 'rotate-0 origin-center duration-500'
                                            }`}
                                        >
                                            <RiArrowDropDownLine className='w-7 h-7' />
                                        </div>
                                    </div>
                                </button>
                                <ul className={`sub-menu ${isRemittance ? 'block' : 'hidden'}`}>
                                    <li className='p-1'>
                                        <Link to='/compliance/inward'>{'Inward'}</Link>
                                    </li>
                                    <li className='p-1'>
                                        <Link to='/compliance/outward'>{'Outward'}</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='p-2'>
                                <Link to='compliance/export-regularization'>{'Export Regularization'}</Link>
                            </li>
                            <li className='p-2'>
                                <Link to='compliance/import-regularization'>{'Import Regularizaiton'}</Link>
                            </li>
                        </ul>
                    </li>

                    {/*banking*/}
                    <li className='relative p-3'>
                        <button onClick={() => handleSubMenuToggle('banking')} className='flex items-center w-full'>
                            <div className='flex justify-align items-center'>
                                <span className='p-1'>Banking</span>
                                <div
                                    className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                        stateMaintain['banking'] ? 'rotate-180 origin-center duration-500' : 'rotate-0 origin-center duration-500'
                                    }`}
                                >
                                    <RiArrowDropDownLine className='w-7 h-7' />
                                </div>
                            </div>
                        </button>
                        <ul className={`sub-menu ${stateMaintain['banking'] ? 'block' : 'hidden'}`}>
                            <li className='p-2'>
                                <Link to='coming-soon'>{'Credit Limits'}</Link>
                            </li>
                        </ul>
                    </li>

                    {/*Treasury*/}
                    <li className='relative p-3'>
                        <button onClick={() => handleSubMenuToggle('treasury')} className='flex items-center w-full'>
                            <div className='flex justify-align items-center'>
                                <span className='p-1'>Treasury</span>
                                <div
                                    className={`pointer-events-none absolute right-2 flex items-center text-gray-700 transform ${
                                        stateMaintain['treasury'] ? 'rotate-180 origin-center duration-500' : 'rotate-0 origin-center duration-500'
                                    }`}
                                >
                                    <RiArrowDropDownLine className='w-7 h-7' />
                                </div>
                            </div>
                        </button>
                        <ul className={`sub-menu ${stateMaintain['treasury'] ? 'block' : 'hidden'}`}>
                            <li className='p-2'>
                                <Link to='coming-soon'>{'Nothing to show'}</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

SidebarContent.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
};

export default SidebarContent;
