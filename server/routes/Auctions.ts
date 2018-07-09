import {Request, Response} from 'express';
import {AuctionManager} from '../modules/AuctionManager'

const router = require('express').Router();
module.exports = router;

router.get('/', async (request: Request, response: Response) => {
    const result = await AuctionManager.GetAuctions();
    response.send(result);
});