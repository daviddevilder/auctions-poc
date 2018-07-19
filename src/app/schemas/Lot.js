"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.LotSchema = new mongoose_1.Schema({
    lotId: String,
    clubId: String,
    title: String,
    imageUri: String,
    providedBy: String,
    reservePrice: Number,
    currentBid: Number,
    currentBidderId: Number,
    tags: [{
            type: String
        }]
});
exports.LotModel = mongoose_1.model('Lot', exports.LotSchema);
//# sourceMappingURL=Lot.js.map