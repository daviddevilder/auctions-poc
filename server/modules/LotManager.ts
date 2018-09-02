import {LotModel} from '../../src/app/schemas/Lot';
import {Lot} from '../../common/models/Lot';

const stripe = require('stripe')('sk_test_CCQ3GTssWVeH5ReqteFjt6P3');

export namespace LotManager {

    export async function GetLots(): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel.find({}, function (err, lots) {
                try {
                    const results: Lot[] = [];
                    lots.forEach(function (lot) {
                        results.push(new Lot(lot.lotId, lot.organisationId, lot.title, lot.description, lot.imageUri, lot.providedBy,
                            lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber, lot.isFeatured, lot.bids, lot.winningBidId));
                    });

                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function GetAllLotsForOrganisation(organisationId: String): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel.find({organisationId: organisationId}, function (err, lots) {
                try {
                    const results: Lot[] = [];
                    lots.forEach(function (lot) {
                        results.push(new Lot(lot.lotId, lot.organisationId, lot.title, lot.description, lot.imageUri, lot.providedBy,
                            lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber, lot.isFeatured, lot.bids, lot.winningBidId));
                    });

                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function GetLotsForOrganisation(organisationId: String, tag: String): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel.find({organisationId: organisationId, tags: tag}, function (err, lots) {
                try {
                    const results: Lot[] = [];
                    lots.forEach(function (lot) {
                        results.push(new Lot(lot.lotId, lot.organisationId, lot.title, lot.description, lot.imageUri, lot.providedBy,
                            lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber, lot.isFeatured, lot.bids, lot.winningBidId));
                    });

                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function GetTagsForOrganisation(organisationId: String): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel
                .find({organisationId: organisationId})
                .distinct('tags', function (err, tags) {
                    try {
                        resolve(tags);
                    } catch (error) {
                        reject(error);
                    }
                });
        });
    }

    export async function GetLotById(lotId: String): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel.findOne({lotId: lotId}, function (err, lot) {
                try {
                    resolve(new Lot(lot.lotId, lot.organisationId, lot.title, lot.description, lot.imageUri, lot.providedBy,
                        lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber, lot.isFeatured, lot.bids, lot.winningBidId));
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function CreateBid(lotId: String, bidderId: String, value: Number, stripeTokenId: String): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {

            stripe.charges.create({
                amount: (parseInt(value.toString(), 0) * 100),
                currency: 'gbp',
                description: lotId + ' ' + bidderId,
                source: stripeTokenId,
                capture: false
            }).then((charge) => {
                LotModel.findOneAndUpdate(
                    {lotId: lotId},
                    {$push: {bids: {createdAt: new Date().toISOString(), bidderId: bidderId, value: value, chargeId: charge.id}}},
                    function (err, doc) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(doc);
                        }
                    }
                );
            });
        });
    }

    export async function AcceptWinningBid(lotId: String, bidId: String): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {

            LotModel.findOneAndUpdate(
                {lotId: lotId},
                {winningBidId: bidId},
                function (err, lot) {
                    if (err) {
                        reject(err);
                    } else {
                        lot.bids.forEach((bid: any) => {
                            if (bid._id.equals(bidId)) {
                                stripe.charges.capture(bid.chargeId)
                                    .then((settledCharge) => {
                                    });
                            } else {
                                stripe.refunds.create({charge: bid.chargeId})
                                    .then((refund) => {
                                    });
                            }
                        });

                        resolve(lot);
                    }
                }
            );
        });
    }
}
