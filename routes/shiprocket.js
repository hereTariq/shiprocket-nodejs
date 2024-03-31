const router = require('express').Router();
const validate = require('../utils/validate');
const { createCustomOrderSchema } = require('../utils/validation/shiprocket');
const shiprocketController = require('../controllers/shiprocket');

router.post('/auth', shiprocketController.login);

module.exports = router;
