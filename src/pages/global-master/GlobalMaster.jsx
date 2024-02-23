import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-1/4 p-4">
            <nav className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">SubMenu</h2>
                <ul>
                    <li className="mb-2">
                        <Link
                            to="/settings/global-master/currency"
                            className="block text-gray-600 font-semibold py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-100"
                        >
                            Currency
                        </Link>
                    </li>
                    <li className="mb-2">
                    <Link
                            to="/settings/global-master/country"
                            className="block text-gray-600 font-semibold py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-100"
                        >
                            Country
                        </Link>
                    </li>
                    <li className="mb-2">
                    <Link
                            to="/settings/global-master/dimension-unit"
                            className="block text-gray-600 font-semibold py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-100"
                        >
                            Dimension Unit
                        </Link>
                    </li>
                    <li className="mb-2">
                    <Link
                            to="/settings/global-master/weight-unit"
                            className="block text-gray-600 font-semibold py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-100"
                        >
                            Weight Unit
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const GlobalMaster = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default GlobalMaster;
