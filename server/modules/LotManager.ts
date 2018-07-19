import {LotModel} from '../../src/app/schemas/Lot';
import {Lot} from '../../common/models/Lot';

export namespace LotManager {

    // LotModel.create({
    //     lotId: '45678',
    //     clubId: 'buryfc',
    //     title: 'Neil Danns',
    //     imageUri: '/assets/auctions/neil_danns.jpg',
    //     providedBy: 'Bury FC',
    //     reservePrice: 150,
    //     currentBid: 220,
    //     currentBidderId: 789,
    //     tags: ['Players']
    // }, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    // });

    export async function GetLots(): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel.find({}, function (err, lots) {
                try {
                    const results: Lot[] = [];
                    lots.forEach(function (lot) {
                        results.push(new Lot(lot.lotId, lot.clubId, lot.title, lot.imageUri, lot.providedBy,
                                                    lot.reservePrice, lot.currentBid, lot.currentBidderId,
                                                    lot.tags));
                    });

                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function GetAllLotsForClub(clubId: String): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel.find({clubId: clubId}, function (err, lots) {
                try {
                    const results: Lot[] = [];
                    lots.forEach(function (lot) {
                        results.push(new Lot(lot.lotId, lot.clubId, lot.title, lot.imageUri, lot.providedBy,
                            lot.reservePrice, lot.currentBid, lot.currentBidderId,
                            lot.tags));
                    });

                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function GetLotsForClub(clubId: String, tag: String): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel.find({clubId: clubId, tags: tag}, function (err, lots) {
                try {
                    const results: Lot[] = [];
                    lots.forEach(function (lot) {
                        results.push(new Lot(lot.lotId, lot.clubId, lot.title, lot.imageUri, lot.providedBy,
                            lot.reservePrice, lot.currentBid, lot.currentBidderId,
                            lot.tags));
                    });

                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function GetTagsForClub(clubId: String): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel
                .find({clubId: clubId})
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
                    resolve(new Lot(lot.lotId, lot.clubId, lot.title, lot.imageUri, lot.providedBy,
                        lot.reservePrice, lot.currentBid, lot.currentBidderId,
                        lot.tags));
                } catch (error) {
                    reject(error);
                }
            });
        });
    }
}
