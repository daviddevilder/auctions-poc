import {LotModel} from '../../src/app/schemas/Lot';
import {Lot} from '../../common/models/Lot';

export namespace LotManager {
    export async function GetLots(): Promise<Lot[]> {

        // LotModel.create({
        //     clubId: 'buryfc',
        //     title: '5* Florence spa break for 2',
        //     imageUri: '/assets/auctions/test.jpg',
        //     providedBy: 'Signature Fundraising',
        //     reservePrice: 1000,
        //     currentBid: 1200,
        //     currentBidderId: 456,
        //     tags: ['Holidays', 'Special']
        // }, function (err) {
        //     if (err) {
        //         console.log(err);
        //     }
        // });

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel.find({}, function (err, lots) {
                try {
                    const results: Lot[] = [];
                    lots.forEach(function (lot) {
                        results.push(new Lot(lot.clubId, lot.title, lot.imageUri, lot.providedBy,
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

    export async function GetLotsForClub(clubId: String): Promise<Lot[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            LotModel.find({clubId: clubId}, function (err, lots) {
                try {
                    const results: Lot[] = [];
                    lots.forEach(function (lot) {
                        results.push(new Lot(lot.clubId, lot.title, lot.imageUri, lot.providedBy,
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
}
