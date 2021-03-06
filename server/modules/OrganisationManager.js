"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Organisation_1 = require("../../common/models/Organisation");
var Organisation_2 = require("../../src/app/schemas/Organisation");
var OrganisationManager;
(function (OrganisationManager) {
    function GetOrganisations() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        Organisation_2.OrganisationModel.find({}, function (err, organisations) {
                            try {
                                var results_1 = [];
                                organisations.forEach(function (organisation) {
                                    results_1.push(new Organisation_1.Organisation(organisation.organisationId, organisation.title, organisation.subtitle, organisation.primaryColour, organisation.logoUrl, organisation.address, organisation.websiteUrl, organisation.contactEmail, organisation.contactPhone, organisation.closingDate, organisation.bannerUrl, organisation.bannerText, organisation.introText, organisation.descriptionHtml, organisation.faqs, organisation.stripeIntegration));
                                });
                                resolve(results_1);
                            }
                            catch (error) {
                                reject(error);
                            }
                        });
                    })];
            });
        });
    }
    OrganisationManager.GetOrganisations = GetOrganisations;
    function GetOrganisationById(organisationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        Organisation_2.OrganisationModel.findOne({ organisationId: organisationId }, function (err, organisation) {
                            resolve(new Organisation_1.Organisation(organisation.organisationId, organisation.title, organisation.subtitle, organisation.primaryColour, organisation.logoUrl, organisation.address, organisation.websiteUrl, organisation.contactEmail, organisation.contactPhone, organisation.closingDate, organisation.bannerUrl, organisation.bannerText, organisation.introText, organisation.descriptionHtml, organisation.faqs, organisation.stripeIntegration));
                        });
                    })];
            });
        });
    }
    OrganisationManager.GetOrganisationById = GetOrganisationById;
})(OrganisationManager = exports.OrganisationManager || (exports.OrganisationManager = {}));
//# sourceMappingURL=OrganisationManager.js.map