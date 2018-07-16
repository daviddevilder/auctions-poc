import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

describe('auctions route', () => {
    it('should respond with HTTP 200 status and non-empty payload', () => {
        return chai.request('http://localhost:3000')
            .get('/api/auctions')
            .then(res => {
                expect(res.status).to.be.equal(200);
                expect(res.text).not.to.be.empty;
            });
    });
});
