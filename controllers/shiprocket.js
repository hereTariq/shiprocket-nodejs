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

const assignAWB = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.assignAWB(req.body);
    res.status(200).json({ status: 'SUCCESS', data: result });
});

const addpickupLocation = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.addpickupLocation(req.body);
    res.status(200).json({ status: 'SUCCESS', data: result });
});

const generateLabel = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.generateLabel(req.body);
    res.status(200).json({ status: 'SUCCESS', data: result });
});

const generateInvoice = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.generateInvoice(req.body);
    res.status(200).json({ status: 'SUCCESS', data: result });
});

const generateManifest = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.generateManifest(req.body);
    res.status(200).json({ status: 'SUCCESS', data: result });
});

const shipmentPickup = catchAsync(async (req, res, next) => {
    const result = await shiprocketServices.shipmentPickup(req.body);
    res.status(200).json({ status: 'SUCCESS', data: result });
});

module.exports = {
    login,
    addpickupLocation,
    createCustomOrder,
    createChannelSpecificOrder,
    updatePickupLocation,
    updateCustomerDeliveryAddress,
    cancelOrder,
    assignAWB,
    generateLabel,
    generateInvoice,
    generateManifest,
    shipmentPickup,
};
