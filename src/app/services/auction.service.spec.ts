import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {AuctionService} from './auction.service';

describe('AuctionService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuctionService]
        });
        this.auctionService = TestBed.get(AuctionService);
        this.httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        this.httpMock.verify();
    });

    it('should be created', () => {
        expect(this.auctionService).toBeTruthy();
    });

    describe('LoadAuctions', () => {
        beforeEach(() => {
            this.expectedUrl = 'http://localhost:3000/api/auctions';
            this.mockResponseBody = {"some": "thing"};
        });

        it('should call the endpoint with the expected url', () => {
            this.auctionService.LoadAuctions().subscribe();

            const actualRequest = this.httpMock.expectOne(this.expectedUrl);
            actualRequest.flush(this.mockResponseBody);

            expect(actualRequest.request.method).toEqual('GET');
            expect(actualRequest.request.url).toEqual(this.expectedUrl);
        });

        it('should return the response body', () => {
            this.auctionService.LoadAuctions()
                .subscribe(data => {
                    expect(data).toEqual(this.mockResponseBody);
                });

            const actualRequest = this.httpMock.expectOne(this.expectedUrl);
            actualRequest.flush(this.mockResponseBody);
        });
    });
});
