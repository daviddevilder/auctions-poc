import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lot} from '../../../common/models/Lot';

@Injectable()
export class LotService {

    private readonly host: string = 'http://localhost:3000';
    public Lots: Lot[] = [];

    constructor(private http: HttpClient) {
    }

    public LoadTags(clubId: String): Observable<any> {
        const url = this.host + '/api/clubs/' + clubId + '/tags';
        return this.http.get(url);
    }

    public LoadLots(clubId: String): Observable<any> {
        const url = this.host + '/api/clubs/' + clubId + '/lots';
        return this.http.get(url);
    }

    public LoadLotsForTag(clubId: String, tag: String): Observable<any> {
        const url = this.host + '/api/clubs/' + clubId + '/lots/' + tag;
        return this.http.get(url);
    }

    public LoadLot(lotId: String): Observable<any> {
        const url = this.host + '/api/lots/' + lotId;
        return this.http.get(url);
    }
}
