import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrganisationService} from '../services/organisation.service';
import {Organisation} from '../../../common/models/Organisation';
import {GoogleMapsAPIWrapper, MapsAPILoader, LazyMapsAPILoaderConfigLiteral} from '@agm/core';
import { } from '@types/googlemaps';
import {Observable} from 'rxjs';

declare var google: any;

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent extends GoogleMapsAPIWrapper {
    public title: String = '';
    public organisationId: String = '';

    public Organisation: Organisation = new Organisation('', '', '', '', '', '', '', '', '', new Date(), '', '', '', '', [], false);

    public latitude: Number;
    public longitude: Number;

    constructor(private __loader: MapsAPILoader, private __zone: NgZone, private organisationService: OrganisationService,
                private route: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) {
        super(__loader, __zone);

        this.route.params.subscribe( params => {
            this.organisationId = params.organisationId;
            organisationService.LoadOrganisationById(params.organisationId).subscribe((organisation: Organisation) => {
                this.title = organisation.title;
                this.Organisation = organisation;

                this.getLatLong(this.Organisation.address).subscribe((location) => {
                    this.latitude = location.lat();
                    this.longitude = location.lng();
                    this.changeDetectorRef.detectChanges();
                });
            });
        });
    }

    getLatLong(address: String) {
        const geocoder = new google.maps.Geocoder();
        return Observable.create(observer => {
            geocoder.geocode( { 'address': address}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results[0].geometry.location);
                    observer.complete();
                } else {
                    console.log('Error - ', results, ' & Status - ', status);
                    observer.next({});
                    observer.complete();
                }
            });
        });
    }
}
