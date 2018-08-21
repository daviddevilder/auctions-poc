import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OrganisationListComponent} from './/Organisation-list.component';
import {of} from 'rxjs';
import {Organisation} from '../../../common/models/Organisation';
import {OrganisationService} from '../services/organisation.service';

describe('OrganisationListComponent', () => {
    let component: OrganisationListComponent;
    let fixture: ComponentFixture<OrganisationListComponent>;

    beforeEach(() => {
        const mockOrgService = jasmine.createSpyObj('OrganisationService', ['LoadOrganisations']);
        mockOrgService.LoadOrganisations.and.returnValue(of([new Organisation('dummyClubId', 'dummyClub')]));

        TestBed.configureTestingModule({
            declarations: [OrganisationListComponent],
            providers: [
                {provide: OrganisationService, useValue: mockOrgService},
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OrganisationListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

describe('OrganisationListComponentClass', () => {

    describe('ngOnInit', () => {
        it('should call OrganisationService.LoadOrganisations', () => {
            const mockOrgService = jasmine.createSpyObj('OrganisationService', ['LoadOrganisations']);
            const component = new OrganisationListComponent(mockOrgService);
            mockOrgService.LoadOrganisations.and.returnValue(of([new Organisation('dummyClubId', 'dummyClub')]));

            component.ngOnInit();

            expect(mockOrgService.LoadOrganisations).toHaveBeenCalledTimes(1);
        });

        it('should set Organisations value', () => {
            const mockOrgService = jasmine.createSpyObj('OrganisationService', ['LoadOrganisations']);
            const component = new OrganisationListComponent(mockOrgService);
            const mockOrganisations = [
                new Organisation('dummyClubId1', 'dummyClub1'),
                new Organisation('dummyClubId2', 'dummyClub2'),
                new Organisation('dummyClubId3', 'dummyClub3'),
                new Organisation('dummyClubId4', 'dummyClub4')
            ];
            mockOrgService.LoadOrganisations.and.returnValue(of(mockOrganisations));

            component.ngOnInit();

            expect(component.Organisations).toEqual(mockOrganisations);
        });
    });
});
