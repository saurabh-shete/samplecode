import './App.css';
import { createBrowserRouter, Navigate, Router, RouterProvider, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import SalesOrders from './pages/sales-order/SalesOrders.jsx';
import Delivery from './components/delivery/EditDelivery.jsx';
import EditSalesOrder from './pages/sales-order/EditSalesOrder.jsx';
import { theme } from './theme.js';
import { ThemeProvider } from '@mui/material';
import EditInvoice from './pages/invoice/EditInvoice.jsx';
import InvoiceList from './pages/invoice/InvoiceList.jsx';
import CreateShipment from './pages/shipment-export/CreateShipment.jsx';
import PaymentReceiptsExportCreate from './pages/payment-receipts-export/PaymentReceipts.jsx';
import ExportRegularization from './pages/export-regularization/ExportRegularization.jsx';
import CreateScheme from './pages/create-scheme/CreateScheme.jsx';
import SchemeList from './pages/create-scheme/SchemeList';
import CreateInsurancePolicy from './pages/create-insurance-policy/CreateInsurancePolicy.jsx';
import InsuranceList from './pages/create-insurance-policy/InsuranceList';
import CreateInsuranceCertificate from './pages/create-insurance-certificate/CreateInsuranceCertificate.jsx';
import InsuranceCertificateList from './pages/create-insurance-certificate/InsuranceCertificateList';

import LetterOfCredit from './pages/letter-of-credit/LetterOfCredit.jsx';
import TradeCreditInsurance from './pages/trade-credit-insurance/TradeCreditInsurance.jsx';
import TradeCreditInsuranceList from './pages/trade-credit-insurance/TradeCreditInsuranceList.jsx';
import DeliveryList from './components/delivery/DeliveryList.jsx';
import ShipmentList from './pages/shipment-export/ShipmentList.jsx';
import PaymentReceiptExportList from './pages/payment-receipts-export/PaymentReceiptList.jsx';
import Login from './pages/login/Login.jsx';
import { isAuthenticated, whichOrg } from './utils/index.jsx';
import EditPurchaseOrder from './pages/purchase-order/EditPurchaseOrder';
import PurchaseOrders from './pages/purchase-order/PurchaseOrders';
import EditSalesQuotation from './pages/sales-quotation/EditSalesQuotation';
import CreateVendorBill from './pages/create-vendor-bill/CreateVendorBill.jsx';
import PaymentReceiptsImport from './pages/payment-receipts-import/PaymentReceipts.jsx';
import ExportsLetterOfCredit from './pages/exports-letter-of-credit/ExportsLetterOfCredit.jsx';
import CreateDocuments from './pages/create-documents/CreateDocuments.jsx';
import GRNInfo from './pages/grninfo/GRNInfo';
import InspectionInfo from './pages/inspection/InspectionInfo';
import BillOfEntryInfo from './pages/billofentry/BillOfEntryInfo';
import MapBoe from './pages/map-boe/MapBoe.jsx';
import MapShippingBill from './pages/map-shipping-bill/MapShippingBill.jsx';
import OutwardRemittance from './pages/remittance/OutwardRemittance';
import InwardRemittance from './pages/remittance/InwardRemittance';
import ComingSoon from './components/comingsoon/ComingSoon';
import Quotation from './pages/sales-quotation/Quotation';
import ExportRegularizationList from './pages/export-regularization/ExportRegularizationList';
import ExportsLetterOfCreditList from './pages/exports-letter-of-credit/ExportsLetterOfCreditList';
import PaymentReceiptImportList from './pages/payment-receipts-import/PaymentReceiptList.jsx';
import PaymentReceiptImport from './pages/payment-receipts-import/PaymentReceipts.jsx';
import LCInsuranceList from './pages/imports-lc-insurance/InsuranceList';
import LCInsurance from './pages/imports-lc-insurance/CreateInsurancePolicy';
import ImportsShipmentList from './pages/shipment-plan-import/ShipmentList';
import ImportsShipment from './pages/shipment-plan-import/ImportsCreateShipment';
import BillOfEntryList from './pages/billofentry/BillOfEnterList';
import GRNProductList from './pages/grninfo/GRNProductList';
import InspectionList from './pages/inspection/InspectionList';
import DocumentList from './pages/create-documents/DocumentList';
import DashboardSaas from './pages/dashboard/scenes/dashboard/index';
import Register from './pages/register/Register.jsx';
import { AuthProvider } from './context/AuthProvider';
import OrganizationProfile from './pages/settings/OrganizationProfile.jsx';
import { element } from 'prop-types';
import UsersandRoles from './pages/settings/UsersandRoles';
import SettingsBar from './components/header/settings-bar/SettingsBar';
import MainDashboard from './pages/Dashboard';
import ProductList from './pages/product/ProductList';
import ProductCreate from './pages/product/ProductCreate';
import CustomerList from './pages/customer/CustomerList';
import AddCustomer from './pages/customer/AddCustomer/Customer';
import AddPartner from './pages/partner/AddPartner/Partner';
import AddVendor from './pages/vender/AddVendor/Vendor';
import TopPallete from './components/topPallete/TopPallete';
import NewRole from './pages/settings/NewRole';
import OrganizationsPage from './pages/OrganizationsPage';
import Contact from './pages/contacts/Contact';
import ContactList from './pages/contacts/ContactList';
import PartnerList from './pages/partner/PartnerList';
import VendorList from './pages/vender/VendorList';
import OrganizationTile from './pages/settings/OrganizationTile';
import useStore from './store/store';
import HomeScreen from './pages/HomeScreen';
import Dashborad from './pages/Dashboard.jsx';
import Index from './pages/dashboard1/index';
import GlobalMaster from './pages/global-master/GlobalMaster';
import Currency from './pages/global-master/Currency';
import Country from './pages/global-master/Country';
import DimensionUnit from './pages/global-master/DimensionUnit';
import WeightUnit from './pages/global-master/WeightUnit';
import EditSalesOrderPoc from './pages/sales-order/EditSalesOrderPoc';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Dashborad />,
        children: [
            {
                path: '/',
                element: <Index />,
            },
            {
                path: '/dashboard',
                element: <Index />,
            },
            {
                path: 'export/sales-order/',
                element: <SalesOrders />,
                children: [],
            },
            {
                path: 'export/sales-order/:id',
                element: <EditSalesOrderPoc />,
            },
            {
                path: 'export/invoice/',
                element: <InvoiceList />,
                children: [],
            },
            {
                path: 'export/invoice/:id',
                element: <EditInvoice />,
            },
            {
                path: 'export/delivery',
                element: <DeliveryList />,
            },
            {
                path: 'export/delivery/:id',
                element: <Delivery />,
            },
            {
                path: 'export/shipment',
                element: <ShipmentList />,
            },
            {
                path: 'export/shipment/:id',
                element: <CreateShipment />,
            },
            {
                path: 'export/scheme/:id',
                element: <CreateScheme />,
            },
            {
                path: 'export/scheme/',
                element: <SchemeList />,
            },
            {
                path: 'export/insurance-policy/:id',
                element: <CreateInsurancePolicy />,
            },
            {
                path: 'export/insurance-policy/',
                element: <InsuranceList />,
            },
            {
                path: 'export/insurance-certificate/:id',
                element: <CreateInsuranceCertificate />,
            },
            {
                path: 'export/insurance-certificate',
                element: <InsuranceCertificateList />,
            },
            {
                path: 'export/payment-receipt',
                element: <PaymentReceiptExportList />,
            },
            {
                path: 'export/payment-receipt/:id',
                element: <PaymentReceiptsExportCreate />,
            },
            {
                path: 'export/payment-recieved',
                element: <PaymentReceiptExportList />,
            },
            {
                path: 'export/payment-recieved/:id',
                element: <PaymentReceiptsExportCreate />,
            },
            {
                path: 'export/brc',
                element: <ExportRegularizationList />,
            },
            {
                path: 'export/brc/:id',
                element: <ExportRegularization />,
            },
            {
                path: 'export/letter-of-credit/:id',
                element: <LetterOfCredit />,
            },

            {
                path: 'import/purchase-order/',
                element: <PurchaseOrders />,
                children: [],
            },
            {
                path: 'import/purchase-order/:id',
                element: <EditPurchaseOrder />,
            },
            {
                path: 'imports/payment-receipts',
                element: <PaymentReceiptsImport />,
            },
            {
                path: 'exports/letter-of-credit/:id',
                element: <ExportsLetterOfCredit />,
            },
            {
                path: 'import/shipment-plan',
                element: <ImportsShipmentList />,
            },
            {
                path: 'import/shipment-plan/:id',
                element: <ImportsShipment />,
            },
            {
                path: 'import/documents/:id',
                element: <CreateDocuments />,
            },
            {
                path: 'import/documents',
                element: <DocumentList />,
            },
            {
                path: 'import/grn/:id',
                element: <GRNInfo />,
            },
            {
                path: 'import/grn/',
                element: <GRNProductList />,
            },
            {
                path: 'import/inspection/:id',
                element: <InspectionInfo />,
            },
            {
                path: 'import/inspection/',
                element: <InspectionList />,
            },
            {
                path: 'import/bill-of-entry/:id',
                element: <BillOfEntryInfo />,
            },
            {
                path: 'import/bill-of-entry',
                element: <BillOfEntryList />,
            },
            //Not showing on frontend
            {
                path: 'vendor-bill/:id',
                element: <CreateVendorBill />,
            },
            {
                path: 'compliance/inward',
                element: <InwardRemittance />,
            },
            {
                path: 'compliance/outward',
                element: <OutwardRemittance />,
            },
            {
                path: 'compliance/export-regularization',
                element: <MapBoe />,
            },
            {
                path: 'compliance/import-regularization',
                element: <MapShippingBill />,
            },
            {
                path: 'customer',
                element: <CustomerList />,
            },
            {
                path: 'customer/:id',
                element: <AddCustomer />,
            },

            {
                path: 'vendor',
                element: <VendorList />,
            },
            {
                path: 'vendor/:id',
                element: <AddVendor />,
            },
            {
                path: 'partner',
                element: <PartnerList />,
            },
            {
                path: 'partner/:id',
                element: <AddPartner />,
            },
            {
                path: 'contacts',
                // element: <Contact />,
                children: [
                    {
                        path: 'contacts',
                        element: <Contact />,
                    },
                    {
                        path: 'contact-list',
                        element: <ContactList />,
                    },
                ],
            },

            {
                path: 'coming-soon',
                element: <ComingSoon />,
            },

            {
                path: 'export/sales-quotation',
                element: <Quotation />,
            },
            {
                path: 'export/sales-quotation/:id',
                element: <EditSalesQuotation />,
            },
            {
                path: 'export/trade-credit-insurance/:id',
                element: <TradeCreditInsurance />,
            },
            {
                path: 'export/trade-credit-insurance',
                element: <TradeCreditInsuranceList />,
            },
            {
                path: 'export/letter-of-credit',
                element: <ExportsLetterOfCreditList />,
            },
            {
                path: 'import/payment',
                element: <PaymentReceiptImportList />,
            },
            {
                path: 'import/payment/:id',
                element: <PaymentReceiptImport />,
            },
            {
                path: 'import/lc-issuance',
                element: <LCInsuranceList />,
            },
            {
                path: 'import/lc-issuance/:id',
                element: <LCInsurance />,
            },

            {
                path: 'settings',
                children: [
                    {
                        path: 'user-and-role',
                        element: <UsersandRoles />,
                    },
                    {
                        path: 'organization-profile',
                        element: <OrganizationProfile />,
                    },
                    {
                        path: 'user-and-role/new-role',
                        element: <NewRole />,
                    },
                    {
                        path: 'organizations-page',
                        element: <OrganizationsPage />,
                    },
                    {
                        path: 'global-master',
                        element: <GlobalMaster />,
                        children: [
                            {
                                path: '/settings/global-master/currency',
                                element: <Currency />,
                            },
                            {
                                path: '/settings/global-master/country',
                                element: <Country />,
                            },
                            {
                                path: '/settings/global-master/dimension-unit',
                                element: <DimensionUnit />,
                            },
                            {
                                path: '/settings/global-master/weight-unit',
                                element: <WeightUnit />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'products',
                element: <ProductList />,
            },
            {
                path: 'products/:id',
                element: <ProductCreate />,
            },

            {
                path: 'top-pallete',
                element: <TopPallete />,
            },
            {
                path: 'new-role',
                element: <NewRole />,
            },
        ],
    },

    {
        path: '/login',
        element: <Login />,
        children: [],
    },
    {
        path: '/switch-organization',
        element: <OrganizationTile />,
        children: [],
    },
    {
        path: '/register',
        element: <Register />,
        children: [],
    },
]);

function App () {
    return (
        <div className='App'>
            <div className='overflow-hidden'>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <RouterProvider router={appRouter} />
                    </ThemeProvider>
                </AuthProvider>
            </div>
        </div>
    );
}

export default App;
