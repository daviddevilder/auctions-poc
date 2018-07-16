import * as chai from 'chai';
import {LotManager} from './LotManager';
import {Lot} from '../../common/models/Lot';
import {LotModel} from '../../src/app/schemas/Lot';

const expect = chai.expect;

after(async () => {
    await LotModel.remove({});
});

describe('GetLots', () => {

    const mockLots = [
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
        expect(typeof LotManager.GetLots).to.be.equal('function');
    });

    it('should return all lots in the database', async () => {
        await LotModel.remove({});
        await LotModel.create(mockLots);
        LotManager.GetLots().then((lots: Lot[]) => {
            expect(lots.length).to.be.equal(3);
        });
    });

    it('should return a list of Lot objects', async () => {
        await LotModel.remove({});
        await LotModel.create(mockLots);
        LotManager.GetLots().then((lots: Lot[]) => {
            expect(lots[0]).to.be.an.instanceof(Lot);
        });
    });
});
