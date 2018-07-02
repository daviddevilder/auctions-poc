import {Request, Response} from 'express';
import {PortfolioManager} from '../modules/PortfolioManager'

const router = require('express').Router();
module.exports = router;

router.get('/', async (request: Request, response: Response) => {
    const result = await PortfolioManager.GetPortfolios();
    response.send(result);
});

router.put('/', async (request: Request, response: Response) => {
    const name = request.body.name;
    const holdings = request.body.holdings;
    await PortfolioManager.CreatePortfolio(name, holdings);
    response.send();
});