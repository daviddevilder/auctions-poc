import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuctionListComponent} from './auction-list.component';
import {of} from 'rxjs';
import {Auction} from '../../../common/models/Auction';
import {AuctionService} from '../services/auction.service';

describe('AuctionListComponent', () => {
    let component: AuctionListComponent;
    let fixture: ComponentFixture<AuctionListComponent>;

    beforeEach(() => {
        const mockAuctionService = jasmine.createSpyObj('AuctionService', ['LoadAuctions']);
        mockAuctionService.LoadAuctions.and.returnValue(of([new Auction('dummyClubId', 'dummyTitle', 'dummyImageUri',
                                                        'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2'])]));

        TestBed.configureTestingModule({
            declarations: [AuctionListComponent],
            providers: [
                {provide: AuctionService, useValue: mockAuctionService},
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuctionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

describe('AuctionListComponentClass', () => {

    describe('ngOnInit', () => {
        it('should call AuctionService.LoadClubs', () => {
            const mockAuctionService = jasmine.createSpyObj('AuctionService', ['LoadAuctions']);
            const component = new AuctionListComponent(mockAuctionService);
            mockAuctionService.LoadClubs.and.returnValue(of([new Auction('dummyClubId', 'dummyTitle', 'dummyImageUri',
                'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2'])]));

            component.ngOnInit();

            expect(mockAuctionService.LoadAuctions).toHaveBeenCalledTimes(1);
        });

        it('should set Auctions value', () => {
            const mockAuctionService = jasmine.createSpyObj('AuctionService', ['LoadAuctions']);
            const component = new AuctionListComponent(mockAuctionService);
            const mockAuctions = [
                new Auction('dummyClubId1', 'dummyTitle1', 'dummyImageUri',
                    'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2']),
                new Auction('dummyClubId2', 'dummyTitle2', 'dummyImageUri',
                    'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2']),
                new Auction('dummyClubId3', 'dummyTitle3', 'dummyImageUri',
                    'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2']),
                new Auction('dummyClubId4', 'dummyTitle4', 'dummyImageUri',
                    'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2'])
            ];
            mockAuctionService.LoadAuctions.and.returnValue(of(mockAuctions));

            component.ngOnInit();

            expect(component.Auctions).toEqual(mockAuctions);
        });
    });
});
