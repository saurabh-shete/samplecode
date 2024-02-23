import axios from '../api/axios';
import useStore from '../store/store';
const REFRESH_TOKEN_URL = '/auth/refresh';

const useRefreshToken = () => {
    const userState = useStore(state => state.user);
    const setUser = useStore(state => state.setUser);

    const refresh = async () => {
        const response = await axios.put(REFRESH_TOKEN_URL);
        await setUser({ ...userState, accessToken: response.data.data.accessToken });
        //localStorage.setItem('token', JSON.stringify(response.data.data.accessToken));
        return response.data.data.accessToken;
    };
    return refresh;
};

export default useRefreshToken;
