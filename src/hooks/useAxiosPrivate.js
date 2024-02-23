import axiosPrivate from '../api/axios';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';
import useStore from '../store/store';
import { decodeToken } from 'react-jwt';

const IGNORE_PATHS = ['users', 'auth/login'];

const useAxiosPrivate = () => {
    const userState = useStore(state => state.user);
    const login = useStore(state => state.login);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                //console.log('xxxxxxxx', config);
                if (!config.headers['jwt-token'] && !IGNORE_PATHS.includes(config?.url)) {
                    config.headers['jwt-token'] = `${userState?.accessToken}`;
                    const refreshToken = JSON.parse(JSON.stringify(localStorage.getItem('refreshToken'))) || '';
                    config.headers['refresh-token'] = `${refreshToken}`;
                }
                return config;
            },
            error => Promise.reject(error),
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async error => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['jwt-token'] = `${newAccessToken}`;
                    const fetchUser = async () => {
                        const myDecodedToken = decodeToken(newAccessToken);
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
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            },
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };
    }, []);
    return axiosPrivate;
};

export default useAxiosPrivate;
