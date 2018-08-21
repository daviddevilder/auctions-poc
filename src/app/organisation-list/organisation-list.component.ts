import {Component, OnInit} from '@angular/core';
import {Organisation} from '../../../common/models/Organisation';
import {OrganisationService} from '../services/organisation.service';

@Component({
    selector: 'app-organisation-list',
    templateUrl: 'organisation-list.component.html',
    styleUrls: ['organisation-list.component.css']
})
export class OrganisationListComponent implements OnInit {

    public Organisations: Organisation[] = [];

    constructor(private organisationService: OrganisationService) {}

    ngOnInit() {
        this.organisationService.LoadOrganisations()
            .subscribe((organisations: Organisation[]) => this.Organisations = organisations);
    }

}
