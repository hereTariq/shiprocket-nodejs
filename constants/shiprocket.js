require('dotenv').config();
const BASE_URL = 'https://apiv2.shiprocket.in/v1/external';

const SHIPROCKET = {
    EMAIL: process.env.SHIPROCKET_EMAIL ?? '',
    PASSWORD: process.env.SHIPROCKET_PASSWORD ?? '',
    BASE_URL: BASE_URL,
    LOGIN_URL: `${BASE_URL}/auth/login`,
    CREATE_CUSTOM_ORDER_URL: `${BASE_URL}/orders/create/adhoc`,
    CREATE_ORDER_URL: `${BASE_URL}/orders/create`,
    UPDATE_PICKUP_LOCATION_URL: `${BASE_URL}/orders/address/pickup`,
    UPDATE_CUSTOMER_DELIVERY_ADDRESS: `${BASE_URL}/orders/address/update`,
    CANCEL_ORDER_URL: `${BASE_URL}/orders/cancel`,
    GENERATE_AWB_URL: `${BASE_URL}/courier/assign/awb`,
};

module.exports = SHIPROCKET;
