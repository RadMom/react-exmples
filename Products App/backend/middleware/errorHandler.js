const errorHandler = (err, req, res, next) => {
    const stack = process.env.NODE_ENV === "production" ? null : err.stack;

    console.log("RES.STATUS" + err);
    const status = err.status ? err.status : 500;
    console.log("errorHandler STATUS:" + status);

    res.status(status).json({ error: { message: err.message, stack } });
};

module.exports = errorHandler;
