"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.PortfolioSchema = new mongoose_1.Schema({
    id: String,
    name: String,
    holdings: [{
            tokenId: String,
            quantity: String
        }]
});
exports.PortfolioModel = mongoose_1.model("Portfolio", exports.PortfolioSchema);
//# sourceMappingURL=Portfolio.js.map