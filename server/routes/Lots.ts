import {Request, Response} from 'express';
import {LotManager} from '../modules/LotManager';
import {ClubManager} from '../modules/ClubManager';

const router = require('express').Router();
module.exports = router;

router.get('/', async (request: Request, response: Response) => {
    const result = await LotManager.GetLots();
    response.send(result);
});

router.get('/:lotId', async (request: Request, response: Response) => {
    const result = await LotManager.GetLotById(request.params.lotId);
    response.send(result);
});

router.post('/:lotId/bid', async (request: Request, response: Response) => {
    const result = await LotManager.CreateBid(request.params.lotId, request.body.bidderId, request.body.value);
    response.send(result);
});

