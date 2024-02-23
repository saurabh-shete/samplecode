import { BsFillBoxFill, BsTerminalFill, BsBuildingFillGear } from 'react-icons/bs';
import { SiHandshake } from 'react-icons/si';
import { RiSettings5Fill } from 'react-icons/ri';
import { MdFlightTakeoff, MdFlightLand, MdAssuredWorkload, MdDashboard } from 'react-icons/md';

export const navList = [
    {
        id: 1,
        path: '/#',
        icon: <MdDashboard className='cursor-pointer my-2 mx-3 h-8 w-10 text-[#4257BE]' sx={{ fontSize: 40 }} />,
        name: 'Dashboard',
        childrens: [
            {
                id: 1,
                path: '/dashboard',
                text: 'Import',
            },
            {
                id: 2,
                path: '/dashboard',
                text: 'Export',
            },
        ],
    },
    {
        id: 2,
        path: '/export',
        icon: <MdFlightTakeoff className='cursor-pointer my-2 mx-3 h-8 w-10 text-[#4257BE]' sx={{ fontSize: 40 }} />,
        name: 'Export',
        childrens: [
            // {
            // 	id: 0,
            // 	path: '/',
            // 	text: 'Customer',
            // },
            {
                id: 1,
                path: 'export/sales-order',
                text: 'Sales order',
            },
            {
                id: 2,
                path: 'export/delivery',
                text: 'Delivery',
            },
            // {
            // 	id: 3,
            // 	path: '/packaging',
            // 	text: 'Packaging',
            // },
            {
                id: 4,
                path: 'export/shipment',
                text: 'Shipment',
            },
            {
                id: 5,
                path: 'export/invoice',
                text: 'Invoice',
            },
            // {
            // 	id: 6,
            // 	path: '/tracking',
            // 	text: 'Tracking',
            // },
            {
                id: 7,
                path: 'export/payment-receipt',
                text: 'Payment Received',
            },
            {
                id: 8,
                path: 'export/brc',
                text: 'Export Regularization (BRC)',
            },
            {
                id: 9,
                path: 'export/scheme/',
                text: 'Scheme',
            },
            {
                id: 10,
                path: 'export/insurance-policy/',
                text: 'Insurance Policy',
            },
            {
                id: 11,
                path: 'export/insurance-certificate',
                text: 'Insurance Certificate / Utilization',
            },
            {
                id: 12,
                path: 'export/sales-quotation',
                text: 'Quotation',
            },
            {
                id: 13,
                path: 'export/trade-credit-insurance',
                text: 'ECGC / Trade Credit Insurance',
            },
            {
                id: 14,
                path: 'export/letter-of-credit',
                text: 'Letter of Credit',
            },
        ],
    },
    {
        id: 3,
        path: '/import',
        icon: <MdFlightLand className='cursor-pointer my-2 mx-3 h-8 w-10 text-[#4257BE]' sx={{ fontSize: 40 }} />,
        name: 'Import',
        childrens: [
            {
                id: 0,
                path: 'import/purchase-order',
                text: 'Purchase Orders',
            },
            {
                id: 1,
                path: '/',
                text: 'Export',
            },
        ],
    },
    {
        id: 4,
        path: '/product',
        icon: <BsFillBoxFill className='cursor-pointer my-2 mx-3 h-8 w-10 text-[#4257BE]' sx={{ fontSize: 40 }} />,
        name: 'Products',
        childrens: [
            {
                id: 0,
                path: '/',
                text: 'Products',
            },
            {
                id: 1,
                path: '/',
                text: 'Product Groups',
            },
            {
                id: 2,
                path: '/',
                text: 'Stock',
            },
            {
                id: 3,
                path: '/',
                text: 'Wherehouse',
            },
        ],
    },
    {
        id: 5,
        path: '/partner',
        icon: <SiHandshake className='cursor-pointer my-2 mx-3 h-8 w-10 text-[#4257BE]' sx={{ fontSize: 40 }} />,
        name: 'Products',
        childrens: [
            {
                id: 0,
                path: '/',
                text: 'Partner',
            },
        ],
    },
    {
        id: 6,
        path: '/software/services',
        icon: <BsTerminalFill className='cursor-pointer my-2 mx-3 h-8 w-10 text-[#4257BE]' sx={{ fontSize: 40 }} />,
        name: 'Services',
        childrens: [
            {
                id: 1,
                path: '/',
                text: 'Import',
            },
            {
                id: 2,
                path: '/',
                text: 'Export',
            },
        ],
    },
    {
        id: 7,
        path: '/',
        icon: <MdAssuredWorkload className='cursor-pointer my-2 mx-3 h-8 w-10 text-[#4257BE]' sx={{ fontSize: 40 }} />,
        name: 'Complience',
        childrens: [
            {
                id: 1,
                path: '/',
                text: 'Import',
            },
            {
                id: 2,
                path: '/',
                text: 'Export',
            },
        ],
    },
    {
        id: 8,
        path: '/banking',
        icon: <BsBuildingFillGear className='cursor-pointer my-2 mx-3 h-8 w-10 text-[#4257BE]' sx={{ fontSize: 40 }} />,
        name: 'Banking',
        childrens: [
            {
                id: 1,
                path: '/',
                text: 'Import',
            },
            {
                id: 2,
                path: '/',
                text: 'Export',
            },
        ],
    },
    {
        id: 9,
        path: '/settings',
        icon: <RiSettings5Fill className='cursor-pointer my-2 mx-3 h-8 w-10 text-[#4257BE]' sx={{ fontSize: 40 }} />,
        name: 'Setting',
        childrens: [
            {
                id: 1,
                path: '/',
                text: 'Import',
            },
            {
                id: 2,
                path: '/',
                text: 'Export',
            },
        ],
    },
];
