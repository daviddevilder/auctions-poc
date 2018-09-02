import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lot} from '../../../common/models/Lot';

@Injectable()
export class LotService {

    // private readonly host: string = 'http://localhost:3000';
    private readonly host: string = 'http://ggv2test.eu-west-2.elasticbeanstalk.com';
    public Lots: Lot[] = [];

    constructor(private http: HttpClient) {
    }

    public LoadTags(organisationId: String): Observable<any> {
        const url = this.host + '/api/organisations/' + organisationId + '/tags';
        return this.http.get(url);
    }

    public LoadLots(organisationId: String): Observable<any> {
        const url = this.host + '/api/organisations/' + organisationId + '/lots';
        return this.http.get(url);
    }

    public LoadLotsForTag(organisationId: String, tag: String): Observable<any> {
        const url = this.host + '/api/organisations/' + organisationId + '/lots/' + tag;
        return this.http.get(url);
    }

    public LoadLot(lotId: String): Observable<any> {
        const url = this.host + '/api/lots/' + lotId;
        return this.http.get(url);
    }

    public PlaceBid(lotId: String, bidderId: String, amount: Number, stripeTokenId: String): Observable<any> {
        const url = this.host + '/api/lots/' + lotId + '/bid';
        const body = {
            bidderId: bidderId,
            value: amount,
            stripeTokenId: stripeTokenId
        };
        return this.http.post(url, body);
    }

    public AcceptWinningBid(lotId: String, bidId: String): Observable<any> {
        const url = this.host + '/api/lots/' + lotId + '/bids/' + bidId;
        const body = {};
        return this.http.post(url, body);
    }
}
