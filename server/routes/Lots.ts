import {Request, Response} from 'express';
import {LotManager} from '../modules/LotManager';

const router = require('express').Router();
module.exports = router;

router.get('/', async (request: Request, response: Response) => {
    const result = await LotManager.GetLots();
    response.send(result);
});