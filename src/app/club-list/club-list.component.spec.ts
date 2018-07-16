import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ClubListComponent} from '../club-list/club-list.component';
import {of} from 'rxjs';
import {Club} from '../../../common/models/Club';
import {ClubService} from '../services/club.service';

describe('ClubListComponent', () => {
    let component: ClubListComponent;
    let fixture: ComponentFixture<ClubListComponent>;

    beforeEach(() => {
        const mockClubService = jasmine.createSpyObj('ClubService', ['LoadClubs']);
        mockClubService.LoadClubs.and.returnValue(of([new Club('dummyClubId', 'dummyClub')]));

        TestBed.configureTestingModule({
            declarations: [ClubListComponent],
            providers: [
                {provide: ClubService, useValue: mockClubService},
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ClubListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

describe('ClubListComponentClass', () => {

    describe('ngOnInit', () => {
        it('should call ClubService.LoadClubs', () => {
            const mockClubService = jasmine.createSpyObj('ClubService', ['LoadClubs']);
            const component = new ClubListComponent(mockClubService);
            mockClubService.LoadClubs.and.returnValue(of([new Club('dummyClubId', 'dummyClub')]));

            component.ngOnInit();

            expect(mockClubService.LoadClubs).toHaveBeenCalledTimes(1);
        });

        it('should set Clubs value', () => {
            const mockClubService = jasmine.createSpyObj('ClubService', ['LoadClubs']);
            const component = new ClubListComponent(mockClubService);
            const mockClubs = [
                new Club('dummyClubId1', 'dummyClub1'),
                new Club('dummyClubId2', 'dummyClub2'),
                new Club('dummyClubId3', 'dummyClub3'),
                new Club('dummyClubId4', 'dummyClub4')
            ];
            mockClubService.LoadClubs.and.returnValue(of(mockClubs));

            component.ngOnInit();

            expect(component.Clubs).toEqual(mockClubs);
        });
    });
});
