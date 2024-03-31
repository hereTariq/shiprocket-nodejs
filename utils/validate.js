const validate = (validator) => {
    return async function (req, res, next) {
        try {
            req.body = await validator.validateAsync(req.body);
            next();
        } catch (error) {
            message = error.message.replace(/\"/g, '');
            return res.status(422).json({
                status: 'FAILURE',
                message,
            });
        }
    };
};
module.exports = validate;
