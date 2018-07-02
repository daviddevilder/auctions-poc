import {Injectable} from '@angular/core';
import {Token} from "../../../common/models/Token";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class TokenService {

    private readonly host: string = "http://localhost:3000";
    public Tokens: Token[] = [];

    constructor(private http: HttpClient) {
    }

    public LoadTokens(): Observable<any> {
        const url = this.host + "/api/tokens";
        return this.http.get(url);
    }
}
