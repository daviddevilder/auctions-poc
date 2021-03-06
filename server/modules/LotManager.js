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
var Lot_1 = require("../../src/app/schemas/Lot");
var Lot_2 = require("../../common/models/Lot");
var stripe = require('stripe')('sk_test_CCQ3GTssWVeH5ReqteFjt6P3');
var LotManager;
(function (LotManager) {
    function GetLots() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        Lot_1.LotModel.find({}, function (err, lots) {
                            try {
                                var results_1 = [];
                                lots.forEach(function (lot) {
                                    results_1.push(new Lot_2.Lot(lot.lotId, lot.organisationId, lot.title, lot.description, lot.imageUri, lot.providedBy, lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber, lot.isFeatured, lot.bids, lot.winningBidId));
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
    LotManager.GetLots = GetLots;
    function GetAllLotsForOrganisation(organisationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        Lot_1.LotModel.find({ organisationId: organisationId }, function (err, lots) {
                            try {
                                var results_2 = [];
                                lots.forEach(function (lot) {
                                    results_2.push(new Lot_2.Lot(lot.lotId, lot.organisationId, lot.title, lot.description, lot.imageUri, lot.providedBy, lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber, lot.isFeatured, lot.bids, lot.winningBidId));
                                });
                                resolve(results_2);
                            }
                            catch (error) {
                                reject(error);
                            }
                        });
                    })];
            });
        });
    }
    LotManager.GetAllLotsForOrganisation = GetAllLotsForOrganisation;
    function GetLotsForOrganisation(organisationId, tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        Lot_1.LotModel.find({ organisationId: organisationId, tags: tag }, function (err, lots) {
                            try {
                                var results_3 = [];
                                lots.forEach(function (lot) {
                                    results_3.push(new Lot_2.Lot(lot.lotId, lot.organisationId, lot.title, lot.description, lot.imageUri, lot.providedBy, lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber, lot.isFeatured, lot.bids, lot.winningBidId));
                                });
                                resolve(results_3);
                            }
                            catch (error) {
                                reject(error);
                            }
                        });
                    })];
            });
        });
    }
    LotManager.GetLotsForOrganisation = GetLotsForOrganisation;
    function GetTagsForOrganisation(organisationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        Lot_1.LotModel
                            .find({ organisationId: organisationId })
                            .distinct('tags', function (err, tags) {
                            try {
                                resolve(tags);
                            }
                            catch (error) {
                                reject(error);
                            }
                        });
                    })];
            });
        });
    }
    LotManager.GetTagsForOrganisation = GetTagsForOrganisation;
    function GetLotById(lotId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        Lot_1.LotModel.findOne({ lotId: lotId }, function (err, lot) {
                            try {
                                resolve(new Lot_2.Lot(lot.lotId, lot.organisationId, lot.title, lot.description, lot.imageUri, lot.providedBy, lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber, lot.isFeatured, lot.bids, lot.winningBidId));
                            }
                            catch (error) {
                                reject(error);
                            }
                        });
                    })];
            });
        });
    }
    LotManager.GetLotById = GetLotById;
    function CreateBid(lotId, name, bidderId, phone, value, stripeTokenId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        if (stripeTokenId) {
                            stripe.charges.create({
                                amount: (parseInt(value.toString(), 0) * 100),
                                currency: 'gbp',
                                description: lotId + ' ' + bidderId,
                                source: stripeTokenId,
                                capture: false
                            }).then(function (charge) {
                                Lot_1.LotModel.findOneAndUpdate({ lotId: lotId }, { $push: { bids: { createdAt: new Date().toISOString(), name: name, bidderId: bidderId,
                                            phone: phone, value: value, chargeId: charge.id } } }, function (err, doc) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else {
                                        resolve(doc);
                                    }
                                });
                            });
                        }
                        else {
                            Lot_1.LotModel.findOneAndUpdate({ lotId: lotId }, { $push: { bids: { createdAt: new Date().toISOString(), name: name, bidderId: bidderId,
                                        phone: phone, value: value } } }, function (err, doc) {
                                if (err) {
                                    reject(err);
                                }
                                else {
                                    resolve(doc);
                                }
                            });
                        }
                    })];
            });
        });
    }
    LotManager.CreateBid = CreateBid;
    function AcceptWinningBid(lotId, bidId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        Lot_1.LotModel.findOneAndUpdate({ lotId: lotId }, { winningBidId: bidId }, function (err, lot) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                lot.bids.forEach(function (bid) {
                                    if (bid._id.equals(bidId)) {
                                        stripe.charges.capture(bid.chargeId)
                                            .then(function (settledCharge) {
                                        });
                                    }
                                    else {
                                        stripe.refunds.create({ charge: bid.chargeId })
                                            .then(function (refund) {
                                        });
                                    }
                                });
                                resolve(lot);
                            }
                        });
                    })];
            });
        });
    }
    LotManager.AcceptWinningBid = AcceptWinningBid;
})(LotManager = exports.LotManager || (exports.LotManager = {}));
//# sourceMappingURL=LotManager.js.map