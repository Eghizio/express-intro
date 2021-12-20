const loggerMiddleware = async (req, res, next) => {
    console.log(`[${req.method}] ${new Date().toISOString()} "${req.originalUrl}"`);
    next();
};

module.exports = loggerMiddleware;