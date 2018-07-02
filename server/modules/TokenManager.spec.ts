import * as chai from 'chai';
import {TokenManager} from './TokenManager'
import {Token} from "../../common/models/Token";

const expect = chai.expect;

describe('GetTokens', () => {
    it('should be a valid function', () => {
        expect(typeof TokenManager.GetTokens).to.be.equal("function");
    });

    it('should return a list of top 10 tokens from the coinmarketcap API', () => {
        TokenManager.GetTokens().then((tokens: Token[]) => {
            expect(tokens.length).to.be.equal(10);
        });
    });

    it('should return a list of Token objects', () => {
        TokenManager.GetTokens().then((tokens: Token[]) => {
            expect(tokens[0]).to.be.an.instanceof(Token);
        });
    });

    it('should return tokens with id, name nad price properties populated', () => {
        TokenManager.GetTokens().then((tokens: Token[]) => {
            expect(tokens[0].id).to.be.greaterThan(0);
            expect(tokens[0].name.length).to.be.greaterThan(0);
            expect(tokens[0].price).to.be.greaterThan(0);
        });
    });
});