import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Portfolio} from "../../../common/models/Portfolio";

@Injectable()
export class PortfolioService {

  private readonly host: string = "http://localhost:3000";
  public Portfolios: Portfolio[] = [];

  constructor(private http: HttpClient) {
  }

  public CreatePortfolio(payload: string): Observable<any> {
    const url = this.host + "/api/portfolios";
    return this.http.put(url, payload);
  }

  public LoadPortfolios(): Observable<any> {
    const url = this.host + "/api/portfolios";
    return this.http.get(url);
  }
}
