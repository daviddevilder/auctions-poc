"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.ClubSchema = new mongoose_1.Schema({
    clubId: String,
    title: String,
    subtitle: String,
    logoUrl: String,
    websiteUrl: String,
    contactEmail: String,
    contactPhone: String,
    closingDate: Date,
    bannerUrl: String,
    bannerText: String,
    introText: String,
    descriptionHtml: String
});
exports.ClubModel = mongoose_1.model('Club', exports.ClubSchema);
//# sourceMappingURL=Club.js.map