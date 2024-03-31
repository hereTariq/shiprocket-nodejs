const axios = require('axios');

const axiosInstance = axios.create({
    baseUrl: process.env.SHIPROCKET_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

module.exports = axiosInstance;
