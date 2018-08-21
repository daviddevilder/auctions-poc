import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Organisation} from '../../../common/models/Organisation';

@Injectable()
export class OrganisationService {

  private readonly host: string = 'http://localhost:3000';
  // private readonly host: string = 'http://ggv2test.eu-west-2.elasticbeanstalk.com';

  constructor(private http: HttpClient) {
  }

  public LoadOrganisations(): Observable<any> {
    const url = this.host + '/api/organisations';
    return this.http.get(url);
  }

  public LoadOrganisationById(slug: String): Observable<any> {
      const url = this.host + '/api/organisations/' + slug;
      return this.http.get(url);
  }
}
