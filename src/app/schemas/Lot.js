"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.LotSchema = new mongoose_1.Schema({
    lotId: String,
    organisationId: String,
    title: String,
    description: String,
    imageUri: String,
    providedBy: String,
    reservePrice: Number,
    estimate: Number,
    tags: [String],
    orderNumber: Number,
    isFeatured: Number,
    bids: [{
            createdAt: String,
            name: String,
            bidderId: String,
            phone: String,
            value: Number,
            chargeId: String
        }],
    winningBidId: String
});
exports.LotModel = mongoose_1.model('Lot', exports.LotSchema);
//# sourceMappingURL=Lot.js.map