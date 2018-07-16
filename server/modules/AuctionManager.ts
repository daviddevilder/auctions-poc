import {AuctionModel} from '../../src/app/schemas/Auction';
import {Auction} from '../../common/models/Auction';

export namespace AuctionManager {
    export async function GetAuctions(): Promise<Auction[]> {

        // AuctionModel.create({
        //     clubId: "buryfc",
        //     title: "5* Florence spa break for 2",
        //     imageUri: "/assets/auctions/test.jpg",
        //     providedBy: "Signature Fundraising",
        //     reservePrice: 1000,
        //     currentBid: 1200,
        //     currentBidderId: 456,
        //     tags: ["Holidays", "Special"]
        // }, function (err) {
        //     if (err) {
        //         console.log(err);
        //     }
        // });

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            AuctionModel.find({}, function (err, auctions) {
                try {
                    const results: Auction[] = [];
                    auctions.forEach(function (auction) {
                        results.push(new Auction(auction.clubId, auction.title, auction.imageUri, auction.providedBy,
                                                    auction.reservePrice, auction.currentBid, auction.currentBidderId,
                                                    auction.tags));
                    });

                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function GetAuctionsForClub(clubId: String): Promise<Auction[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            AuctionModel.find({clubId: clubId}, function (err, auctions) {
                try {
                    const results: Auction[] = [];
                    auctions.forEach(function (auction) {
                        results.push(new Auction(auction.clubId, auction.title, auction.imageUri, auction.providedBy,
                            auction.reservePrice, auction.currentBid, auction.currentBidderId,
                            auction.tags));
                    });

                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }
}