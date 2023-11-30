const errorHandler = (err, req, res, next) => {
    const stack = process.env.NODE_ENV === "production" ? null : err.stack;

    const status = res.status ? res.status : 500;

    res.status(status).json({ error: { message: err, stack } });
};

module.exports = errorHandler;
