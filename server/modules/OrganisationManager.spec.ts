import * as chai from 'chai';
import {Organisation} from '../../common/models/Organisation';
import {OrganisationModel} from '../../src/app/schemas/Organisation';
import {OrganisationManager} from './OrganisationManager';

const expect = chai.expect;

after(async () => {
    await OrganisationModel.remove({});
});

describe('GetOrganisations', () => {

    const mockOrganisations = [
        {organisationId: 'dummyClub1', title: 'dummyClub1'},
        {organisationId: 'dummyClub2', title: 'dummyClub2'},
        {organisationId: 'dummyClub3', title: 'dummyClub3'}
    ];

    it('should be a valid function', () => {
        expect(typeof OrganisationManager.GetOrganisations).to.be.equal('function');
    });

    it('should return all organisations in the database', async () => {
        await OrganisationModel.remove({});
        await OrganisationModel.create(mockOrganisations);
        OrganisationManager.GetOrganisations().then((organisations: Organisation[]) => {
            expect(organisations.length).to.be.equal(3);
        });
    });

    it('should return a list of Organisation objects', async () => {
        await OrganisationModel.remove({});
        await OrganisationModel.create(mockOrganisations);
        OrganisationManager.GetOrganisations().then((organisations: Organisation[]) => {
            expect(organisations[0]).to.be.an.instanceof(Organisation);
        });
    });
});
