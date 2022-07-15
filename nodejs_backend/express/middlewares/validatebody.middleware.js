"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = exports.loginValidation = void 0;
const user_validation_1 = __importDefault(require("../module/User/validations/user.validation"));
const userValidation = new user_validation_1.default();
async function loginValidation(req, res, next) {
    try {
        const validated = await userValidation.loginSchema.validateAsync(req.body);
        req.body = validated;
        next();
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Không đúng định dạng, vui lòng kiểm tra lại!'
        });
    }
}
exports.loginValidation = loginValidation;
async function registerValidation(req, res, next) {
    try {
        const validated = await userValidation.registerSchema.validateAsync(req.body);
        req.body = validated;
        next();
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Không đúng định dạng, vui lòng kiểm tra lại!'
        });
    }
}
exports.registerValidation = registerValidation;
//# sourceMappingURL=validatebody.middleware.js.map