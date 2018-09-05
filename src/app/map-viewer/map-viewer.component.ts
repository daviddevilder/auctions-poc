import {Component, Input, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';

@Component({
    selector: 'app-map-viewer',
    templateUrl: 'map-viewer.component.html',
    styleUrls: ['map-viewer.component.css']
})
export class MapViewerComponent extends GoogleMapsAPIWrapper {
    @Input() latitude: Number;
    @Input() longitude: Number;

    constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
        super(__loader, __zone);
    }
}
