import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PortfolioListComponent} from './portfolio-list.component';
import {of} from "rxjs";
import {PortfolioService} from "../services/portfolio.service";
import {Portfolio} from "../../../common/models/Portfolio";
import {Holding} from "../../../common/models/Holding";
import {Token} from "../../../common/models/Token";
import {FormBuilder, ReactiveFormsModule, FormsModule} from "@angular/forms";
import {TokenService} from "../services/token.service";

describe('PortfolioListComponent', () => {
    let component: PortfolioListComponent;
    let fixture: ComponentFixture<PortfolioListComponent>;

    beforeEach(() => {
        const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
        mockTokenService.LoadTokens.and.returnValue(of(
            [new Token("dummyId", "dummyName", 1.23)]
        ));
        const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
        mockPortfolioService.LoadPortfolios.and.returnValue(of(
            [new Portfolio("dummyName", [new Holding("dummyId", 123)])]
        ));

        TestBed.configureTestingModule({
            declarations: [PortfolioListComponent],
            providers: [
                {provide: TokenService, useValue: mockTokenService},
                {provide: PortfolioService, useValue: mockPortfolioService},
                FormBuilder
            ],
            imports: [FormsModule, ReactiveFormsModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PortfolioListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

describe('PortfolioListComponentClass', () => {

    describe('ngOnInit', () => {
        it('should initialise the portfolio form with blank name and holdings', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            mockTokenService.LoadTokens.and.returnValue(of([new Token("dummyId", "dummyName", 1.23)]));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            mockPortfolioService.LoadPortfolios.and.returnValue(of(
                [new Portfolio("dummyName", [new Holding("dummyId", 123)])]
            ));
            const formBuilder = new FormBuilder();
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, formBuilder);

            component.ngOnInit();

            const expectedFormGroupValue = {
                name: '',
                holdings: [{tokenId: '', quantity: 0}]
            };

            expect(component.portfolioForm.value).toEqual(expectedFormGroupValue);
        });

        it('should call TokenService.LoadTokens', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            mockTokenService.LoadTokens.and.returnValue(of([new Token("dummyId", "dummyName", 1.23)]));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            mockPortfolioService.LoadPortfolios.and.returnValue(of(
                [new Portfolio("dummyName", [new Holding("dummyId", 123)])]
            ));
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, new FormBuilder());

            component.ngOnInit();

            expect(mockTokenService.LoadTokens).toHaveBeenCalledTimes(1);
        });

        it('should set Tokens value', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            const mockTokens = [new Token("dummyId", "dummyName", 1.23)];
            mockTokenService.LoadTokens.and.returnValue(of(mockTokens));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            mockPortfolioService.LoadPortfolios.and.returnValue(of(
                [new Portfolio("dummyName", [new Holding("dummyId", 123)])]
            ));
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, new FormBuilder());

            component.ngOnInit();

            expect(component.Tokens).toEqual(mockTokens);
        });

        it('should call PortfolioService.LoadPortfolios', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            const mockTokens = [new Token("dummyId", "dummyName", 1.23)];
            mockTokenService.LoadTokens.and.returnValue(of(mockTokens));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            mockPortfolioService.LoadPortfolios.and.returnValue(of(
                [new Portfolio("dummyName", [new Holding("dummyId", 123)])]
            ));
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, new FormBuilder());

            component.ngOnInit();

            expect(mockPortfolioService.LoadPortfolios).toHaveBeenCalledTimes(1);
        });

        it('should set Portfolios value', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            const mockTokens = [new Token("dummyId", "dummyName", 1.23)];
            mockTokenService.LoadTokens.and.returnValue(of(mockTokens));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            const mockPortfolios = [new Portfolio("dummyName", [new Holding("dummyId", 123)])];
            mockPortfolioService.LoadPortfolios.and.returnValue(of(mockPortfolios));
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, new FormBuilder());

            component.ngOnInit();

            expect(component.Portfolios).toEqual(mockPortfolios);
        });

        it('should derive name and value on each portfolio holding based on token information', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            const mockTokens = [new Token("dummyId", "dummyName", 1.23)];
            mockTokenService.LoadTokens.and.returnValue(of(mockTokens));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            const mockPortfolios = [new Portfolio("dummyName", [new Holding("dummyId", 123)])];
            mockPortfolioService.LoadPortfolios.and.returnValue(of(mockPortfolios));
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, new FormBuilder());

            component.ngOnInit();

            expect(component.Portfolios[0].holdings[0].tokenName).toEqual(mockTokens[0].name);
            expect(component.Portfolios[0].holdings[0].value).toEqual(123 * 1.23);
        });

        it('should calculate total value of each portfolio', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            const mockTokens = [new Token("dummyId", "dummyName", 1.23), new Token("anotherId", "anotherName", 4.56)];
            mockTokenService.LoadTokens.and.returnValue(of(mockTokens));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            const mockPortfolios = [
                new Portfolio("dummyName", [new Holding("dummyId", 123), new Holding("anotherId", 456)])];
            mockPortfolioService.LoadPortfolios.and.returnValue(of(mockPortfolios));
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, new FormBuilder());

            component.ngOnInit();

            expect(component.Portfolios[0].totalValue).toEqual((123 * 1.23) + (456 * 4.56));
        });
    });

    describe("createHolding", () => {
        it('should return a form group representing a portfolio holding', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            mockTokenService.LoadTokens.and.returnValue(of([new Token("dummyId", "dummyName", 1.23)]));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            mockPortfolioService.LoadPortfolios.and.returnValue(of(
                [new Portfolio("dummyName", [new Holding("dummyId", 123)])]
            ));
            const formBuilder = new FormBuilder();
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, formBuilder);

            const expectedFormGroupValue = {tokenId: '', quantity: 0};

            expect(component.createHolding().value).toEqual(expectedFormGroupValue);
        });
    });

    describe("addHolding", () => {
        it('should push a new portfolio holding form group to the holdings list', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            mockTokenService.LoadTokens.and.returnValue(of([new Token("dummyId", "dummyName", 1.23)]));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            mockPortfolioService.LoadPortfolios.and.returnValue(of(
                [new Portfolio("dummyName", [new Holding("dummyId", 123)])]
            ));
            const formBuilder = new FormBuilder();
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, formBuilder);

            component.ngOnInit();
            const expectedInitialFormGroupValue = [{tokenId: '', quantity: 0}];
            expect(component.holdings.value).toEqual(expectedInitialFormGroupValue);

            component.addHolding();
            const expectedFormGroupValue = [{tokenId: '', quantity: 0}, {tokenId: '', quantity: 0}];
            expect(component.holdings.value).toEqual(expectedFormGroupValue);
        });
    });

    describe("createPortfolio", () => {
        it('should call PortfolioService.CreatePortfolio', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            mockTokenService.LoadTokens.and.returnValue(of([new Token("dummyId", "dummyName", 1.23)]));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            mockPortfolioService.LoadPortfolios.and.returnValue(of(
                [new Portfolio("dummyName", [new Holding("dummyId", 123)])]
            ));
            mockPortfolioService.CreatePortfolio.and.returnValue(of([]));
            const formBuilder = new FormBuilder();
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, formBuilder);

            const mockFormValue = {
                name: "dummyName",
                holdings: [
                    {tokenId: 'dummyId', quantity: 1}
                ]
            };

            component.ngOnInit();

            component.createPortfolio(mockFormValue);

            expect(mockPortfolioService.CreatePortfolio).toHaveBeenCalledTimes(1);
        });

        it('should remove empty values from the holdings list before calling PortfolioService.CreatePortfolio', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            mockTokenService.LoadTokens.and.returnValue(of([new Token("dummyId", "dummyName", 1.23)]));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            mockPortfolioService.LoadPortfolios.and.returnValue(of(
                [new Portfolio("dummyName", [new Holding("dummyId", 123)])]
            ));
            mockPortfolioService.CreatePortfolio.and.returnValue(of([]));
            const formBuilder = new FormBuilder();
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, formBuilder);

            const mockFormValue = {
                name: "dummyName",
                holdings: [
                    {tokenId: 'dummyId', quantity: 1},
                    {tokenId: '', quantity: 1},
                    {tokenId: 'invalid', quantity: 0},
                    {tokenId: '', quantity: 0}
                ]
            };

            component.ngOnInit();

            component.createPortfolio(mockFormValue);

            const expectedFormValue = {
                name: "dummyName",
                holdings: [
                    {tokenId: 'dummyId', quantity: 1}
                ]
            };

            expect(mockPortfolioService.CreatePortfolio).toHaveBeenCalledWith(expectedFormValue);
        });

        it('should reset portfolio form and holdings object', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            mockTokenService.LoadTokens.and.returnValue(of([new Token("dummyId", "dummyName", 1.23)]));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            mockPortfolioService.LoadPortfolios.and.returnValue(of(
                [new Portfolio("dummyName", [new Holding("dummyId", 123)])]
            ));
            mockPortfolioService.CreatePortfolio.and.returnValue(of([]));
            const formBuilder = new FormBuilder();
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, formBuilder);

            component.portfolioForm = formBuilder.group({
                name: 'dummyName',
                holdings: formBuilder.array([formBuilder.group({
                    tokenId: 'dummyId',
                    quantity: 123
                })])
            });

            component.ngOnInit();

            component.createPortfolio(component.portfolioForm.value);

            const expectedFormValue = {
                name: '',
                holdings: [{
                    tokenId: '',
                    quantity: 0
                }]
            };

            expect(component.portfolioForm.value).toEqual(expectedFormValue);
        });

        it('should reload the portfolios list after creating the new one', () => {
            const mockTokenService = jasmine.createSpyObj('TokenService', ['LoadTokens']);
            mockTokenService.LoadTokens.and.returnValue(of([new Token("dummyId", "dummyName", 1.23)]));
            const mockPortfolioService = jasmine.createSpyObj('PortfolioService', ['LoadPortfolios', 'CreatePortfolio']);
            mockPortfolioService.LoadPortfolios.and.returnValue(of(
                [new Portfolio("dummyName", [new Holding("dummyId", 123)])]
            ));
            mockPortfolioService.CreatePortfolio.and.returnValue(of([]));
            const formBuilder = new FormBuilder();
            const component = new PortfolioListComponent(mockPortfolioService, mockTokenService, formBuilder);

            const mockFormValue = {
                name: "dummyName",
                holdings: [
                    {tokenId: 'dummyId', quantity: 1}
                ]
            };

            component.ngOnInit();

            expect(mockPortfolioService.LoadPortfolios).toHaveBeenCalledTimes(1);

            component.createPortfolio(mockFormValue);

            expect(mockPortfolioService.LoadPortfolios).toHaveBeenCalledTimes(2);
        });
    });
});
