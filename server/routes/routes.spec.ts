import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

describe('tokens route', () => {
    it('should respond with HTTP 200 status and non-empty payload', () => {
        return chai.request("http://localhost:3000")
            .get('/api/tokens')
            .then(res => {
                expect(res.status).to.be.equal(200);
                expect(res.text).not.to.be.empty;
            });
    });
});

describe('portfolios route', () => {
    it('should respond with HTTP 200 status and non-empty payload to a GET', () => {
        return chai.request("http://localhost:3000")
            .get('/api/portfolios')
            .then(res => {
                expect(res.status).to.be.equal(200);
                expect(res.text).not.to.be.empty;
            });
    });

    it('should respond with HTTP 200 status and non-empty payload to a PUT', () => {
        let portfolio = {
            name: "dummyName",
            holdings: [{
                tokenId: "dummyId",
                quantity: 1.23
            }]
        };

        return chai.request("http://localhost:3000")
            .put('/api/portfolios')
            .send(portfolio)
            .then(res => {
                expect(res.status).to.be.equal(200);
                expect(res.body).to.be.a('object');
            });
    });
});