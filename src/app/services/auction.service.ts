import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Auction} from "../../../common/models/Auction";

@Injectable()
export class AuctionService {

  private readonly host: string = "http://localhost:3000";
  public Auctions: Auction[] = [];

  constructor(private http: HttpClient) {
  }

  public LoadAuctions(): Observable<any> {
    const url = this.host + "/api/auctions";
    return this.http.get(url);
  }
}
