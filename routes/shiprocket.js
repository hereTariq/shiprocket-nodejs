const router = require('express').Router();
const validate = require('../utils/validate');
const {
    createCustomOrderSchema,
    updatePickupLocationSchema,
    updateCustomerDeliveryAddressSchema,
    addPickupLocationSchema,
    assignAWBSchema,
    orderIdsSchema,
    shipmentIdsSchema,
    shipmentPickupSchema,
} = require('../utils/validation/shiprocket');
const shiprocketController = require('../controllers/shiprocket');

// router.post('/auth', shiprocketController.login);
router
    .route('/create-order')
    .post(validate(createCustomOrderSchema), shiprocketController.createCustomOrder);
router
    .route('/update-pickup-location')
    .patch(
        validate(updatePickupLocationSchema),
        shiprocketController.updatePickupLocation
    );
router
    .route('/update-address')
    .post(
        validate(updateCustomerDeliveryAddressSchema),
        shiprocketController.updateCustomerDeliveryAddress
    );
router
    .route('/add-pickup-location')
    .post(validate(addPickupLocationSchema), shiprocketController.addpickupLocation);
router
    .route('/assign-awb')
    .post(validate(assignAWBSchema), shiprocketController.assignAWB);
router
    .route('/cancel-order')
    .delete(validate(orderIdsSchema), shiprocketController.cancelOrder);
router
    .route('/generate-label')
    .post(validate(shipmentIdsSchema), shiprocketController.generateLabel);
router.route('/generate-invoice').post(validate(orderIdsSchema), shiprocketController.generateInvoice);
router.route('/generate-manifest').post(validate(shipmentIdsSchema), shiprocketController.generateManifest);
router
    .route('/shipment-pickup')
    .post(validate(shipmentPickupSchema), shiprocketController.shipmentPickup);

module.exports = router;
