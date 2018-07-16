import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Club} from '../../../common/models/Club';

@Injectable()
export class ClubService {

  private readonly host: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  public LoadClubs(): Observable<any> {
    const url = this.host + '/api/clubs';
    return this.http.get(url);
  }

  public LoadClubById(slug: String): Observable<any> {
      const url = this.host + '/api/clubs/' + slug;
      return this.http.get(url);
  }
}
