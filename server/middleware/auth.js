const jwt = require("jsonwebtoken");
const blacklist = require('./blacklist');

module.exports = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                error: new Error("Authorization header missing")
            });
        }
        const token = req.headers.authorization.split(" ")[1];
        if (blacklist.isBlacklisted(token)) {
            return res.status(401).json({
                error: new Error("Token has been blacklisted")
            });
        }
        const decodedToken = jwt.verify(token, "RANDOM-TOKEN");
        const user = decodedToken;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({
            error: new Error("Invalid token")
        });
    }
};

module.exports.logoutMiddleware = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                error: new Error("Authorization header missing")
            });
        }
        const token = req.headers.authorization.split(" ")[1];
        blacklist.add(token);
        res.json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
