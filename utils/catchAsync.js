const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
        console.error(err.message);
        res.status(422).json({
            status: 'FAILURE',
            message: err.message,
        });
    });
};

module.exports = catchAsync;
