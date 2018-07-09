import * as chai from 'chai';
import {AuctionManager} from './AuctionManager'
import {Auction} from "../../common/models/Auction";
import {AuctionModel} from "../../src/app/schemas/Auction";

const expect = chai.expect;

after(async () => {
    await AuctionModel.remove({});
});

describe('GetAuctions', () => {

    let mockPortfolios = [
        {name: "dummyName1", holdings: [{tokenId: "1", quantity: 1.23}]},
        {name: "dummyName2", holdings: [{tokenId: "2", quantity: 2.34}]},
        {name: "dummyName3", holdings: [{tokenId: "3", quantity: 3.45}]}
    ];

    it('should be a valid function', () => {
        expect(typeof AuctionManager.GetAuctions).to.be.equal("function");
    });

    it('should return a all auctions in the database', async () => {
        await AuctionModel.remove({});
        await AuctionModel.create(mockPortfolios);
        AuctionManager.GetAuctions().then((auctions: Auction[]) => {
            expect(auctions.length).to.be.equal(3);
        });
    });

    it('should return a list of Auction objects', async () => {
        await AuctionModel.remove({});
        await AuctionModel.create(mockPortfolios);
        AuctionManager.GetAuctions().then((auctions: Auction[]) => {
            expect(auctions[0]).to.be.an.instanceof(Auction);
        });
    });
});