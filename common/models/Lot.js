"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lot = (function () {
    function Lot(clubId, title, imageUri, providedBy, reservePrice, currentBid, currentBidderId, tags) {
        this.clubId = clubId;
        this.title = title;
        this.imageUri = imageUri;
        this.providedBy = providedBy;
        this.reservePrice = reservePrice;
        this.currentBid = currentBid;
        this.currentBidderId = currentBidderId;
        this.tags = tags;
    }
    return Lot;
}());
exports.Lot = Lot;
//# sourceMappingURL=Lot.js.map