const addFullUrl = (req, res, next) => {
    req.fullUrl = process.env.NODE_ENV !== 'production' ? "http://localhost:9000" : process.env.SERVER_API_URL
    next();
};

module.exports = addFullUrl;