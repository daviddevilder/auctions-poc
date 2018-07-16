import * as chai from 'chai';
import {AuctionManager} from './AuctionManager';
import {Auction} from '../../common/models/Auction';
import {AuctionModel} from '../../src/app/schemas/Auction';

const expect = chai.expect;

after(async () => {
    await AuctionModel.remove({});
});

describe('GetClubs', () => {

    const mockAuctions = [
        {
            clubId: 1,
            title: 'dummyTitle1',
            imageUri: 'dummyImageUri1',
            providedBy: 'dummyProvidedBy1',
            reservePrice: 500,
            currentBid: 1000,
            currentBidderId: 123,
            tags: ['some', 'thing']
        },
        {
            clubId: 2,
            title: 'dummyTitle2',
            imageUri: 'dummyImageUri2',
            providedBy: 'dummyProvidedBy2',
            reservePrice: 500,
            currentBid: 1000,
            currentBidderId: 456,
            tags: ['some', 'thing']
        },
        {
            clubId: 3,
            title: 'dummyTitle3',
            imageUri: 'dummyImageUri3',
            providedBy: 'dummyProvidedBy3',
            reservePrice: 500,
            currentBid: 1000,
            currentBidderId: 789,
            tags: ['some', 'thing']
        }
    ];

    it('should be a valid function', () => {
        expect(typeof AuctionManager.GetAuctions).to.be.equal('function');
    });

    it('should return all auctions in the database', async () => {
        await AuctionModel.remove({});
        await AuctionModel.create(mockAuctions);
        AuctionManager.GetAuctions().then((auctions: Auction[]) => {
            expect(auctions.length).to.be.equal(3);
        });
    });

    it('should return a list of Auction objects', async () => {
        await AuctionModel.remove({});
        await AuctionModel.create(mockAuctions);
        AuctionManager.GetAuctions().then((auctions: Auction[]) => {
            expect(auctions[0]).to.be.an.instanceof(Auction);
        });
    });
});
