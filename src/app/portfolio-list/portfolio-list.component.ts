import {Component, OnInit} from '@angular/core';
import {PortfolioService} from "../services/portfolio.service";
import {Portfolio} from "../../../common/models/Portfolio";
import {FormGroup, FormBuilder, FormArray} from "@angular/forms";
import {Token} from "../../../common/models/Token";
import {TokenService} from "../services/token.service";
import {Holding} from "../../../common/models/Holding";

@Component({
    selector: 'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

    public portfolioForm: FormGroup;
    public Portfolios: Portfolio[];
    public Tokens: Token[] = [];

    constructor(private portfolioService: PortfolioService,
                private tokenService: TokenService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.resetForm();

        this.tokenService.LoadTokens()
            .subscribe((tokens: Token[]) => {
                this.Tokens = tokens;
                this.loadPortfolios();
            });
    }

    private resetForm = function () {
        this.portfolioForm = this.formBuilder.group({
            name: '',
            holdings: this.formBuilder.array([this.createHolding()])
        });
    };

    private loadPortfolios = function () {
        this.portfolioService.LoadPortfolios()
            .subscribe((portfolios: Portfolio[]) => {
                this.Portfolios = portfolios;
                this.calculatePortfolioValues();
            });
    };

    private calculatePortfolioValues = function () {
        this.Portfolios.forEach((portfolio: Portfolio) => {
            portfolio.totalValue = 0;
            portfolio.holdings.forEach(holding => this.deriveNameAndValue(portfolio, holding));
        });
    };

    private deriveNameAndValue = function (portfolio: Portfolio, holding: Holding) {
        var token: Token = this.Tokens.filter(function (token) {
            return token.id == holding.tokenId;
        })[0];

        holding.tokenName = token.name;
        holding.value = Number(token.price) * Number(holding.quantity);
        portfolio.totalValue += holding.value;
    };

    createHolding(): FormGroup {
        return this.formBuilder.group({
            tokenId: '',
            quantity: 0
        });
    }

    get holdings(): FormArray {
        return this.portfolioForm.get('holdings') as FormArray;
    };

    addHolding(): void {
        this.holdings.push(this.createHolding());
    }

    createPortfolio(formValue: any) {
        formValue.holdings = this.removeEmpties(formValue.holdings);
        this.portfolioService.CreatePortfolio(formValue)
            .subscribe(() => {
                alert("Created successfully!!!");
                this.resetForm();
                this.loadPortfolios();
            });
    }

    private removeEmpties = function (holdings: Holding[]) {
        const results = [];
        holdings.forEach((holding) => {
            if (holding.tokenId.length > 0 && holding.quantity > 0) {
                results.push(holding)
            }
        });
        return results;
    }

}
