import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {TokenService} from './token.service';

describe('TokenService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TokenService]
        });
        this.tokenService = TestBed.get(TokenService);
        this.httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        this.httpMock.verify();
    });

    it('should be created', () => {
        expect(this.tokenService).toBeTruthy();
    });

    describe('LoadTokens', () => {
        beforeEach(() => {
            this.expectedUrl = 'http://localhost:3000/api/tokens';
            this.mockResponseBody = {"some": "thing"};
        });

        it('should call the endpoint with the expected url', () => {
            this.tokenService.LoadTokens().subscribe();

            const actualRequest = this.httpMock.expectOne(this.expectedUrl);
            actualRequest.flush(this.mockResponseBody);

            expect(actualRequest.request.method).toEqual('GET');
            expect(actualRequest.request.url).toEqual(this.expectedUrl);
        });

        it('should return the response body', () => {
            this.tokenService.LoadTokens()
                .subscribe(data => {
                    expect(data).toEqual(this.mockResponseBody);
                });

            const actualRequest = this.httpMock.expectOne(this.expectedUrl);
            actualRequest.flush(this.mockResponseBody);
        });
    });
});
