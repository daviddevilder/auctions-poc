import {Request, Response} from 'express';
import {OrganisationManager} from '../modules/OrganisationManager';
import {LotManager} from '../modules/LotManager';

const router = require('express').Router();
module.exports = router;

router.get('/', async (request: Request, response: Response) => {
    const result = await OrganisationManager.GetOrganisations();
    response.send(result);
});

router.get('/:organisationId', async (request: Request, response: Response) => {
    const result = await OrganisationManager.GetOrganisationById(request.params.organisationId);
    response.send(result);
});

router.get('/:organisationId/lots', async (request: Request, response: Response) => {
    const result = await LotManager.GetAllLotsForOrganisation(request.params.organisationId);
    response.send(result);
});

router.get('/:organisationId/lots/:tag', async (request: Request, response: Response) => {
    const result = await LotManager.GetLotsForOrganisation(request.params.organisationId, request.params.tag);
    response.send(result);
});

router.get('/:organisationId/tags', async (request: Request, response: Response) => {
    const result = await LotManager.GetTagsForOrganisation(request.params.organisationId);
    response.send(result);
});