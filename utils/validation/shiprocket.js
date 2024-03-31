const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const createCustomOrderSchema = Joi.object({
    order_id: Joi.string().max(50).required(),
    order_date: Joi.string().isoDate().required(),
    pickup_location: Joi.string().required(),
    channel_id: Joi.number().integer().allow('').optional(),
    comment: Joi.string().allow('').optional(),
    reseller_name: Joi.string().allow('').optional(),
    company_name: Joi.string().allow('').optional(),
    billing_customer_name: Joi.string().required(),
    billing_last_name: Joi.string().allow('').optional(),
    billing_address: Joi.string().required(),
    billing_address_2: Joi.string().allow('').optional(),
    billing_city: Joi.string().max(30).required(),
    billing_pincode: Joi.number().integer().required(),
    billing_state: Joi.string().required(),
    billing_country: Joi.string().required(),
    billing_email: Joi.string().email().required(),
    billing_phone: Joi.string().required(),
    billing_alternate_phone: Joi.string().optional(),
    shipping_is_billing: Joi.boolean().required(),
    shipping_customer_name: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    shipping_last_name: Joi.string().allow('').optional(),
    shipping_address: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    shipping_address_2: Joi.string().allow('').optional(),
    billing_isd_code: Joi.string().allow('').optional(),
    shipping_city: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    shipping_pincode: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.number().integer().required(),
        otherwise: Joi.number().integer().allow('').optional(),
    }),
    shipping_country: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    shipping_state: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    shipping_email: Joi.string().email().allow('').optional(),
    shipping_phone: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    longitude: Joi.number().optional(),
    latitude: Joi.number().optional(),
    order_items: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required(),
                sku: Joi.string().required(),
                units: Joi.number().integer().required(),
                selling_price: Joi.number().required(),
                discount: Joi.number().optional(),
                tax: Joi.number().optional(),
                hsn: Joi.number().integer().optional(),
            })
        )
        .required(),
    payment_method: Joi.string().required(),
    shipping_charges: Joi.number().integer().allow('').optional(),
    giftwrap_charges: Joi.number().integer().allow('').optional(),
    transaction_charges: Joi.number().integer().allow('').optional(),
    total_discount: Joi.number().integer().allow('').optional(),
    sub_total: Joi.number().required(),
    length: Joi.number().greater(0.5).required(),
    breadth: Joi.number().greater(0.5).required(),
    height: Joi.number().greater(0.5).required(),
    weight: Joi.number().greater(0).required(),
    ewaybill_no: Joi.string().allow('').optional(),
    customer_gstin: Joi.string().allow('').optional(),
    invoice_number: Joi.string().allow('').optional(),
    order_type: Joi.string()
        .valid('ESSENTIALS', 'NON ESSENTIALS')
        .allow('')
        .optional(),
    checkout_shipping_method: Joi.string().allow('').optional(),
    what3words_address: Joi.string().allow('').optional(),
    is_insurance_opt: Joi.boolean().optional(),
});

const createChannelSpecificOrderSchema = Joi.object({
    order_id: Joi.string().max(20).required(),
    order_date: Joi.string().isoDate().required(),
    pickup_location: Joi.string().allow('').optional(),
    channel_id: Joi.number().integer().required(),
    comment: Joi.string().allow('').optional(),
    billing_customer_name: Joi.string().required(),
    billing_last_name: Joi.string().allow('').optional(),
    billing_address: Joi.string().min(3).required(),
    billing_address_2: Joi.string().allow('').optional(),
    billing_city: Joi.string().max(30).required(),
    billing_pincode: Joi.number().integer().required(),
    billing_state: Joi.string().required(),
    billing_country: Joi.string().required(),
    billing_email: Joi.string().email().required(),
    billing_phone: Joi.string().required(),
    shipping_is_billing: Joi.boolean().required(),
    shipping_customer_name: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    shipping_last_name: Joi.string().allow('').optional(),
    shipping_address: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    shipping_address_2: Joi.string().allow('').optional(),
    shipping_city: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    shipping_pincode: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.number().integer().required(),
        otherwise: Joi.number().integer().allow('').optional(),
    }),
    shipping_country: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    shipping_state: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    shipping_email: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().email().required(),
        otherwise: Joi.string().email().allow('').optional(),
    }),
    shipping_phone: Joi.when('shipping_is_billing', {
        is: false,
        then: Joi.string().required(),
        otherwise: Joi.string().allow('').optional(),
    }),
    order_items: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required(),
                sku: Joi.string().required(),
                units: Joi.number().integer().required(),
                selling_price: Joi.number().required(),
                discount: Joi.number().optional(),
                tax: Joi.number().optional(),
                hsn: Joi.number().integer().optional(),
            })
        )
        .required(),
    payment_method: Joi.string().valid('COD', 'Prepaid').required(),
    shipping_charges: Joi.number().optional(),
    giftwrap_charges: Joi.number().optional(),
    transaction_charges: Joi.number().optional(),
    total_discount: Joi.number().optional(),
    sub_total: Joi.number().required(),
    length: Joi.number().greater(0.5).integer().required(),
    breadth: Joi.number().greater(0.5).integer().required(),
    height: Joi.number().greater(0.5).integer().required(),
    weight: Joi.number().greater(0).required(),
});

const updatePickupLocationSchema = Joi.object({
    order_id: Joi.array().items(Joi.number().integer()).min(1).required(),
    pickup_location: Joi.string().required(),
});

const updateCustomerDeliveryAddressSchema = Joi.object({
    order_id: Joi.number().integer().required(),
    shipping_customer_name: Joi.string().required(),
    shipping_phone: Joi.string().required(),
    shipping_address: Joi.string().required(),
    shipping_address_2: Joi.string().allow('').optional(),
    shipping_city: Joi.string().required(),
    shipping_state: Joi.string().required(),
    shipping_country: Joi.string().required(),
    shipping_pincode: Joi.number().integer().required(),
    shipping_email: Joi.string().email().allow('').optional(),
    billing_alternate_phone: Joi.string().allow('').optional(),
});

const cancelOrderSchema = Joi.object({
    ids: Joi.array().items(Joi.number().integer().required()).required(),
});

module.exports = {
    loginSchema,
    createCustomOrderSchema,
    createChannelSpecificOrderSchema,
    updatePickupLocationSchema,
    updateCustomerDeliveryAddressSchema,
    cancelOrderSchema,
};
