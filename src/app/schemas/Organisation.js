"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.OrganisationSchema = new mongoose_1.Schema({
    organisationId: String,
    title: String,
    subtitle: String,
    primaryColour: String,
    logoUrl: String,
    address: String,
    websiteUrl: String,
    contactEmail: String,
    contactPhone: String,
    closingDate: Date,
    bannerUrl: String,
    bannerText: String,
    introText: String,
    descriptionHtml: String,
    faqs: [{
            question: String,
            answer: String,
        }],
    stripeIntegration: Boolean
});
exports.OrganisationModel = mongoose_1.model('Organisation', exports.OrganisationSchema);
//# sourceMappingURL=Organisation.js.map