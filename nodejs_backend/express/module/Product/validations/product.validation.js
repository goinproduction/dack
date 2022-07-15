"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class UserValidation {
    constructor() {
        this.checkoutSchema = joi_1.default.object({
            details: joi_1.default.object().required(),
            total_price: joi_1.default.number().required(),
            delivery_fee: joi_1.default.number().required()
        });
    }
}
exports.default = UserValidation;
//# sourceMappingURL=product.validation.js.map