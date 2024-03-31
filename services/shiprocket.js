const axiosInstance = require('../utils/axiosInstance');
const SHIPROCKET = require('../constants/shiprocket');
const validate = require('../utils/validate');
const { loginSchema } = require('../utils/validation/shiprocket');

const login = async () => {
    try {
        const data = { email: SHIPROCKET.EMAIL, password: SHIPROCKET.PASSWORD };
        validate(loginSchema);
        const result = await axiosInstance.post(SHIPROCKET.LOGIN_URL, data);
        return result.data;
        // can store token in session or db
    } catch (error) {
        console.error('Error - shiprocketAuth error');
        throw new Error(error);
    }
};
const createCustomOrder = async (data) => {
    try {
        // can get token from db or session
        const result = await axiosInstance.post(
            SHIPROCKET.CREATE_CUSTOM_ORDER_URL,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return result.data;
    } catch (error) {
        console.error('Error - customOrderCreation error');
        throw new Error(error);
    }
};
const createChannelSpecificOrder = async (data) => {
    try {
        // can get token from db or session
        const result = await axiosInstance.post(
            SHIPROCKET.CREATE_ORDER_URL,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return result.data;
    } catch (error) {
        console.error('Error in createChannelSpecificOrder');
        throw new Error(error);
    }
};
const updatePickupLocation = async (data) => {
    try {
        // can get token from db or session
        const result = await axiosInstance.patch(
            SHIPROCKET.UPDATE_PICKUP_LOCATION_URL,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return result.data;
    } catch (error) {
        console.error('Error - in updatePickupLocation');
        throw new Error(error);
    }
};
const updateCustomerDeliveryAddress = async (data) => {
    try {
        // can get token from db or session
        const result = await axiosInstance.post(
            SHIPROCKET.UPDATE_CUSTOMER_DELIVERY_ADDRESS,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return result.data;
    } catch (error) {
        console.error('Error - in updateCustomerDeliveryAddress');
        throw new Error(error);
    }
};
const cancelOrder = async (data) => {
    try {
        // can get token from db or session
        const result = await axiosInstance.post(
            SHIPROCKET.CANCEL_ORDER_URL,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return result.data;
    } catch (error) {
        console.error('Error - in cancelOrder');
        throw new Error(error);
    }
};

module.exports = {
    login,
    createCustomOrder,
    createChannelSpecificOrder,
    updatePickupLocation,
    updateCustomerDeliveryAddress,
    cancelOrder,
};
