import {Component, OnInit} from '@angular/core';
import {Token} from "../../../common/models/Token";
import {TokenService} from "../services/token.service";

@Component({
    selector: 'app-token-list',
    templateUrl: './token-list.component.html',
    styleUrls: ['./token-list.component.css']
})
export class TokenListComponent implements OnInit {

    public Tokens: Token[] = [];

    constructor(private tokenService: TokenService) {}

    ngOnInit() {
        this.tokenService.LoadTokens()
            .subscribe((tokens: Token[]) => this.Tokens = tokens);
    }

}
