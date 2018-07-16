import {Request, Response} from 'express';
import {ClubManager} from '../modules/ClubManager';
import {AuctionManager} from '../modules/AuctionManager';

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

router.get('/:clubId/auctions', async (request: Request, response: Response) => {
    const result = await AuctionManager.GetAuctionsForClub(request.params.clubId);
    response.send(result);
});
