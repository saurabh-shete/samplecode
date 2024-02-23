import React, { useEffect } from 'react';
import SideNav from '../components/SideNav/SideNav';
import { Outlet, useNavigate } from 'react-router-dom';
import HeaderMenu from '../components/header/Header';
import useStore from '../store/store';
import Loader from '../components/Loader/Loader';
const Dashborad = () => {
    const isUserLoggedIn = JSON.parse(localStorage.getItem('isUserLogged'));
    const navigate = useNavigate();
    useEffect(() => {
        if (!isUserLoggedIn) {
            navigate('login');
        }
    }, []);
    return (
        <>
            {isUserLoggedIn ? (
                <div className='flex w-screen'>
                    <SideNav />
                    <div className='w-screen'>
                        <HeaderMenu />
                        <div className='mt-14'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Dashborad;
