import {Request, Response} from 'express';
import {ClubManager} from '../modules/ClubManager';
import {LotManager} from '../modules/LotManager';

const router = require('express').Router();
module.exports = router;

router.get('/', async (request: Request, response: Response) => {
    const result = await ClubManager.GetClubs();
    response.send(result);
});

router.get('/:clubId', async (request: Request, response: Response) => {
    const result = await ClubManager.GetClubById(request.params.clubId);
    response.send(result);
});

router.get('/:clubId/lots', async (request: Request, response: Response) => {
    const result = await LotManager.GetAllLotsForClub(request.params.clubId);
    response.send(result);
});

router.get('/:clubId/lots/:tag', async (request: Request, response: Response) => {
    const result = await LotManager.GetLotsForClub(request.params.clubId, request.params.tag);
    response.send(result);
});

router.get('/:clubId/tags', async (request: Request, response: Response) => {
    const result = await LotManager.GetTagsForClub(request.params.clubId);
    response.send(result);
});