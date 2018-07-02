import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {PortfolioService} from './portfolio.service';

describe('PortfolioService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PortfolioService]
        });
        this.portfolioService = TestBed.get(PortfolioService);
        this.httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        this.httpMock.verify();
    });

    it('should be created', () => {
        expect(this.portfolioService).toBeTruthy();
    });

    describe('LoadPortfolios', () => {
        beforeEach(() => {
            this.expectedUrl = 'http://localhost:3000/api/portfolios';
            this.mockResponseBody = {"some": "thing"};
        });

        it('should call the endpoint with the expected url', () => {
            this.portfolioService.LoadPortfolios().subscribe();

            const actualRequest = this.httpMock.expectOne(this.expectedUrl);
            actualRequest.flush(this.mockResponseBody);

            expect(actualRequest.request.method).toEqual('GET');
            expect(actualRequest.request.url).toEqual(this.expectedUrl);
        });

        it('should return the response body', () => {
            this.portfolioService.LoadPortfolios()
                .subscribe(data => {
                    expect(data).toEqual(this.mockResponseBody);
                });

            const actualRequest = this.httpMock.expectOne(this.expectedUrl);
            actualRequest.flush(this.mockResponseBody);
        });
    });

    describe('CreatePortfolio', () => {
        beforeEach(() => {
            this.expectedUrl = 'http://localhost:3000/api/portfolios';
            this.mockPayload = {some: "thing"};
            this.mockResponseBody = {};
        });

        it('should call the endpoint with the expected url', () => {
            this.portfolioService.CreatePortfolio(this.mockPayload).subscribe();

            const actualRequest = this.httpMock.expectOne(this.expectedUrl);
            actualRequest.flush(this.mockResponseBody);

            expect(actualRequest.request.method).toEqual('PUT');
            expect(actualRequest.request.url).toEqual(this.expectedUrl);
        });

        it('should pass the payload with the request', () => {
            this.portfolioService.CreatePortfolio(this.mockPayload).subscribe();

            const actualRequest = this.httpMock.expectOne(this.expectedUrl);
            actualRequest.flush(this.mockResponseBody);

            expect(actualRequest.request.body).toEqual(this.mockPayload);
        });
    });
});
