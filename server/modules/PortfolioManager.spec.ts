import * as chai from 'chai';
import {PortfolioManager} from './PortfolioManager'
import {Portfolio} from "../../common/models/Portfolio";
import {PortfolioModel} from "../../src/app/schemas/Portfolio";

const expect = chai.expect;

after(async () => {
    await PortfolioModel.remove({});
});

describe('GetPortfolios', () => {

    let mockPortfolios = [
        {name: "dummyName1", holdings: [{tokenId: "1", quantity: 1.23}]},
        {name: "dummyName2", holdings: [{tokenId: "2", quantity: 2.34}]},
        {name: "dummyName3", holdings: [{tokenId: "3", quantity: 3.45}]}
    ];

    it('should be a valid function', () => {
        expect(typeof PortfolioManager.GetPortfolios).to.be.equal("function");
    });

    it('should return a all portfolios in the database', async () => {
        await PortfolioModel.remove({});
        await PortfolioModel.create(mockPortfolios);
        PortfolioManager.GetPortfolios().then((portfolios: Portfolio[]) => {
            expect(portfolios.length).to.be.equal(3);
        });
    });

    it('should return a list of Portfolio objects', async () => {
        await PortfolioModel.remove({});
        await PortfolioModel.create(mockPortfolios);
        PortfolioManager.GetPortfolios().then((portfolios: Portfolio[]) => {
            expect(portfolios[0]).to.be.an.instanceof(Portfolio);
        });
    });

    it('should return portfolios with name and holdings properties populated', async () => {
        await PortfolioModel.remove({});
        await PortfolioModel.create(mockPortfolios);
        PortfolioManager.GetPortfolios().then((portfolios: Portfolio[]) => {
            expect(portfolios[0].name.length).to.be.greaterThan(0);
            expect(portfolios[0].holdings[0].tokenId.length).to.be.greaterThan(0);
            expect(portfolios[0].holdings[0].quantity.toString().length).to.be.greaterThan(0);
        });
    });
});

describe('CreatePortfolio', () => {

    it('should be a valid function', () => {
        expect(typeof PortfolioManager.CreatePortfolio).to.be.equal("function");
    });

    it('should create a portfolio in the database', async () => {
        let portfolio = {name: "dummyName1", holdings: [{tokenId: "1", quantity: 1.23}]};

        await PortfolioModel.remove({});
        await PortfolioModel.create(portfolio);
        PortfolioManager.GetPortfolios().then((portfolios: Portfolio[]) => {
            expect(portfolios.length).to.be.equal(1);
            expect(portfolios[0].name).to.be.equal(portfolio.name);
            expect(portfolios[0].holdings.length).to.be.equal(portfolio.holdings.length);
        });
    });
});