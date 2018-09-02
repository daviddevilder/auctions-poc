"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lot = (function () {
    function Lot(lotId, organisationId, title, description, imageUri, providedBy, reservePrice, estimate, tags, orderNumbder, isFeatured, bids, winningBidId) {
        this.lotId = lotId;
        this.organisationId = organisationId;
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
        this.winningBidId = winningBidId;
    }
    return Lot;
}());
exports.Lot = Lot;
//# sourceMappingURL=Lot.js.map