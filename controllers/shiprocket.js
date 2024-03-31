const shiprocketServices = require('../services/shiprocket');
const catchAsync = require('../utils/catchAsync');

const login = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.login();
    res.status(200).json({ status: 'SUCCESS', data: result });
});

const createCustomOrder = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.createCustomOrder(req.body);
    res.status(200).json({ status: 'SUCCESS', data: result });
});
const createChannelSpecificOrder = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.createChannelSpecificOrder(
        req.body
    );
    res.status(200).json({ status: 'SUCCESS', data: result });
});
const updatePickupLocation = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.updatePickupLocation(req.body);
    res.status(200).json({ status: 'SUCCESS', data: result });
});
const updateCustomerDeliveryAddress = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.updateCustomerDeliveryAddress(
        req.body
    );
    res.status(202).json({ status: 'SUCCESS', data: result });
});
const cancelOrder = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.cancelOrder(req.body);
    res.status(204).json({ status: 'SUCCESS', data: result });
});

module.exports = {
    login,
    createCustomOrder,
    createChannelSpecificOrder,
    updatePickupLocation,
    updateCustomerDeliveryAddress,
    cancelOrder,
};
