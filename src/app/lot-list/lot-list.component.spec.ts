import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LotListComponent} from './lot-list.component';
import {of} from 'rxjs';
import {Lot} from '../../../common/models/Lot';
import {LotService} from '../services/lot.service';

describe('LotListComponent', () => {
    let component: LotListComponent;
    let fixture: ComponentFixture<LotListComponent>;

    beforeEach(() => {
        const mockLotService = jasmine.createSpyObj('LotService', ['LoadLots']);
        mockLotService.LoadLots.and.returnValue(of([new Lot('dummyClubId', 'dummyTitle', 'dummyImageUri',
                                                        'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2'])]));

        TestBed.configureTestingModule({
            declarations: [LotListComponent],
            providers: [
                {provide: LotService, useValue: mockLotService},
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LotListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

describe('LotListComponentClass', () => {

    describe('ngOnInit', () => {
        it('should call LotService.LoadLots', () => {
            const mockLotService = jasmine.createSpyObj('LotService', ['LoadLots']);
            const component = new LotListComponent(mockLotService);
            mockLotService.LoadLots.and.returnValue(of([new Lot('dummyClubId', 'dummyTitle', 'dummyImageUri',
                'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2'])]));

            component.ngOnInit();

            expect(mockLotService.LoadLots).toHaveBeenCalledTimes(1);
        });

        it('should set Lots value', () => {
            const mockLotService = jasmine.createSpyObj('LotService', ['LoadLots']);
            const component = new LotListComponent(mockLotService);
            const mockLots = [
                new Lot('dummyClubId1', 'dummyTitle1', 'dummyImageUri',
                    'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2']),
                new Lot('dummyClubId2', 'dummyTitle2', 'dummyImageUri',
                    'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2']),
                new Lot('dummyClubId3', 'dummyTitle3', 'dummyImageUri',
                    'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2']),
                new Lot('dummyClubId4', 'dummyTitle4', 'dummyImageUri',
                    'dummyProvidedBy', 10000, 12000, 456, ['tag1', 'tag2'])
            ];
            mockLotService.LoadLots.and.returnValue(of(mockLots));

            component.ngOnInit();

            expect(component.Lots).toEqual(mockLots);
        });
    });
});
