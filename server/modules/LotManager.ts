import {LotModel} from '../../src/app/schemas/Lot';
import {Lot} from '../../common/models/Lot';

export namespace LotManager {

    // LotModel.create({
    //     lotId: '12345',
    //     clubId: 'buryfc',
    //     title: 'Harry Bunn',
    //     description: 'Description...',
    //     imageUri: '/assets/auctions/harry_bunn.png',
    //     providedBy: 'Bury FC',
    //     reservePrice: 150,
    //     estimate: 500,
    //     tags: ['Players', 'Defenders'],
    //     orderNumber: 1,
    //     isFeatured: 0,
    //     bids: [{createdAt: new Date().toISOString(), bidderId: 'John Smith', value: 220}, {}]
    // }, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    // });
    //
    // LotModel.create({
    //     lotId: '23456',
    //     clubId: 'buryfc',
    //     title: 'Neil Danns',
    //     description: 'Description...',
    //     imageUri: '/assets/auctions/neil_danns.jpg',
    //     providedBy: 'Bury FC',
    //     reservePrice: 150,
    //     estimate: 500,
    //     tags: ['Players', 'Midfielders'],
    //     orderNumber: 1,
    //     isFeatured: 0,
    //     bids: [{createdAt: new Date().toISOString(), bidderId: 'John Smith', value: 220}, {}]
    // }, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    // });
    //
    // LotModel.create({
    //     lotId: '34567',
    //     clubId: 'buryfc',
    //     title: 'Nicky Adams',
    //     description: 'Description...',
    //     imageUri: '/assets/auctions/nicky_adams.jpg',
    //     providedBy: 'Bury FC',
    //     reservePrice: 150,
    //     estimate: 500,
    //     tags: ['Players', 'Forwards'],
    //     orderNumber: 1,
    //     isFeatured: 0,
    //     bids: [{createdAt: new Date().toISOString(), bidderId: 'John Smith', value: 220}, {}]
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
                        results.push(new Lot(lot.lotId, lot.clubId, lot.title, lot.description, lot.imageUri, lot.providedBy,
                                                    lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber,
                                                    lot.isFeatured, lot.bids));
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
                        results.push(new Lot(lot.lotId, lot.clubId, lot.title, lot.description, lot.imageUri, lot.providedBy,
                            lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber, lot.isFeatured, lot.bids));
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
                        results.push(new Lot(lot.lotId, lot.clubId, lot.title, lot.description, lot.imageUri, lot.providedBy,
                            lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber, lot.isFeatured, lot.bids));
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
                    resolve(new Lot(lot.lotId, lot.clubId, lot.title, lot.description, lot.imageUri, lot.providedBy,
                        lot.reservePrice, lot.estimate, lot.tags, lot.orderNumber, lot.isFeatured, lot.bids));
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function CreateBid(lotId: String, bidderId: String, value: Number): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel.findOneAndUpdate(
                {lotId: lotId},
                {$push: { bids: { createdAt: new Date().toISOString(), bidderId: bidderId, value: value }}},
                function (err, doc) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(doc);
                    }
                }
            );
        });
    }
}
