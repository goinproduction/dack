"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({
            success: false,
            message: 'Not Authorized',
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.userId = decoded;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(403).json({ success: false, message: 'Forbidden' });
    }
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=author.middleware.js.map