import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TokenListComponent} from './token-list.component';
import {of} from "rxjs";
import {Token} from "../../../common/models/Token";
import {TokenService} from "../services/token.service";

describe('TokenListComponent', () => {
    let component: TokenListComponent;
    let fixture: ComponentFixture<TokenListComponent>;

    beforeEach(() => {
        const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
        mockTokenService.LoadTokens.and.returnValue(of([new Token("dummyId", "dummyName", 1.23)]));

        TestBed.configureTestingModule({
            declarations: [TokenListComponent],
            providers: [
                {provide: TokenService, useValue: mockTokenService},
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TokenListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

describe('TokenListComponentClass', () => {

    describe('ngOnInit', () => {
        it('should call TokenService.LoadTokens', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            const component = new TokenListComponent(mockTokenService);
            mockTokenService.LoadTokens.and.returnValue(of([new Token("dummyId", "dummyName", 1.23)]));

            component.ngOnInit();

            expect(mockTokenService.LoadTokens).toHaveBeenCalledTimes(1);
        });

        it('should set Tokens value', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            const component = new TokenListComponent(mockTokenService);
            const mockTokens = [
                new Token('dummyId1', 'dummyName1', 1.23),
                new Token('dummyId2', 'dummyName2', 2.34),
                new Token('dummyId3', 'dummyName3', 3.45),
                new Token('dummyId4', 'dummyName4', 4.56)
            ];
            mockTokenService.LoadTokens.and.returnValue(of(mockTokens));

            component.ngOnInit();

            expect(component.Tokens).toEqual(mockTokens);
        });
    });
});
