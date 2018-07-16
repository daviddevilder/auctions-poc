import * as chai from 'chai';
import {Club} from '../../common/models/Club';
import {ClubModel} from '../../src/app/schemas/Club';
import {ClubManager} from './ClubManager';

const expect = chai.expect;

after(async () => {
    await ClubModel.remove({});
});

describe('GetClubs', () => {

    const mockClubs = [
        {clubId: 'dummyClub1', title: 'dummyClub1'},
        {clubId: 'dummyClub2', title: 'dummyClub2'},
        {clubId: 'dummyClub3', title: 'dummyClub3'}
    ];

    it('should be a valid function', () => {
        expect(typeof ClubManager.GetClubs).to.be.equal('function');
    });

    it('should return all clubs in the database', async () => {
        await ClubModel.remove({});
        await ClubModel.create(mockClubs);
        ClubManager.GetClubs().then((clubs: Club[]) => {
            expect(clubs.length).to.be.equal(3);
        });
    });

    it('should return a list of Club objects', async () => {
        await ClubModel.remove({});
        await ClubModel.create(mockClubs);
        ClubManager.GetClubs().then((clubs: Club[]) => {
            expect(clubs[0]).to.be.an.instanceof(Club);
        });
    });
});
