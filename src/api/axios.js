import axios from 'axios';
const BASE_URL = 'http://localhost:5010/';

// export default axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         Accept: 'application/json, text/plain, */*',
//         'Accept-Encoding': 'gzip, deflate, br',
//         'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
//         Connection: 'keep-alive',
//         'Content-Type': 'application/json',
//         Host: 'localhost:5010',
//         Origin: 'http://127.0.0.1:5173',
//         Referer: 'http://127.0.0.1:5173/',
//         'Sec-Fetch-Dest': 'empty',
//         'Sec-Fetch-Mode': 'cors',
//         'Sec-Fetch-Site': 'cross-site',
//     },
// });

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});
