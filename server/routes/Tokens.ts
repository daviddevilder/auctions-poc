import {Request, Response} from 'express';
import {TokenManager} from '../modules/TokenManager'

const router = require('express').Router();
module.exports = router;

router.get('/', async (request: Request, response: Response) => {
    const result = await TokenManager.GetTokens();
    response.send(result);
});