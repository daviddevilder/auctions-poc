import {Request, Response} from 'express';
import {LotManager} from '../modules/LotManager';

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
    const result = await LotManager.CreateBid(request.params.lotId, request.body.name, request.body.bidderId,
                                                request.body.phone, request.body.value, request.body.stripeTokenId);
    response.send(result);
});

router.post('/:lotId/bids/:bidId', async (request: Request, response: Response) => {
    const result = await LotManager.AcceptWinningBid(request.params.lotId, request.params.bidId);
    response.send(result);
});

