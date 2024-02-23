import React from 'react';
import useStore from '../store/store';
import { decodeToken } from 'react-jwt';

export default pageRefresh = () => {
    const userState = useStore(state => state.user);
    const login = useStore(state => state.login);
    useEffect(() => {
        const handlePageRefresh = event => {
            if (window.performance.getEntriesByType('navigation') === 'reload') {
                const fetchUser = async () => {
                    const myDecodedToken = decodeToken(localstorage.getItem('refreshToken'));
                    const userResponse = await axiosPrivate.get(`users/${myDecodedToken.id}`);

                    login({
                        accessToken: newAccessToken,
                        id: myDecodedToken.id,
                        username: userResponse.data.data.username,
                        email: userResponse.data.data.email,
                        language: userResponse.data.data.language,
                        primaryOrganizationId: userResponse.data.data.primaryOrganizationId,
                    });
                };
                fetchUser();
                event.preventDefault();
            }
        };
        handlePageRefresh();
    }, []);
};
