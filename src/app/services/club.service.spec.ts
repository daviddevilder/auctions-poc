import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {ClubService} from './club.service';

describe('ClubService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ClubService]
        });
        this.lotService = TestBed.get(ClubService);
        this.httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        this.httpMock.verify();
    });

    it('should be created', () => {
        expect(this.lotService).toBeTruthy();
    });

    describe('LoadLots', () => {
        beforeEach(() => {
            this.expectedUrl = 'http://localhost:3000/api/lots';
            this.mockResponseBody = {'some': 'thing'};
        });

        it('should call the endpoint with the expected url', () => {
            this.lotService.LoadLots().subscribe();

            const actualRequest = this.httpMock.expectOne(this.expectedUrl);
            actualRequest.flush(this.mockResponseBody);

            expect(actualRequest.request.method).toEqual('GET');
            expect(actualRequest.request.url).toEqual(this.expectedUrl);
        });

        it('should return the response body', () => {
            this.lotService.LoadLots()
                .subscribe(data => {
                    expect(data).toEqual(this.mockResponseBody);
                });

            const actualRequest = this.httpMock.expectOne(this.expectedUrl);
            actualRequest.flush(this.mockResponseBody);
        });
    });
});
