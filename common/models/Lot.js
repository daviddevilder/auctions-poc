"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lot = (function () {
    function Lot(lotId, clubId, title, description, imageUri, providedBy, reservePrice, estimate, tags, orderNumbder, isFeatured, bids) {
        this.lotId = lotId;
        this.clubId = clubId;
        this.title = title;
        this.description = description;
        this.imageUri = imageUri;
        this.providedBy = providedBy;
        this.reservePrice = reservePrice;
        this.estimate = estimate;
        this.tags = tags;
        this.orderNumbder = orderNumbder;
        this.isFeatured = isFeatured;
        this.bids = bids;
    }
    return Lot;
}());
exports.Lot = Lot;
//# sourceMappingURL=Lot.js.map