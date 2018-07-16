"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.AuctionSchema = new mongoose_1.Schema({
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
exports.AuctionModel = mongoose_1.model('Auction', exports.AuctionSchema);
//# sourceMappingURL=Auction.js.map