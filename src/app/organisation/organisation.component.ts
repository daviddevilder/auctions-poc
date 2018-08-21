import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrganisationService} from '../services/organisation.service';
import {Organisation} from '../../../common/models/Organisation';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent {
    public title: String = '';
    public organisationId: String = '';

    public Organisation: Organisation = new Organisation('', '', '', '', '', '', '', '', new Date(), '', '', '', '');

    constructor(private organisationService: OrganisationService, private route: ActivatedRoute) {
        this.route.params.subscribe( params => {
            this.organisationId = params.organisationId;
            organisationService.LoadOrganisationById(params.organisationId).subscribe((organisation: Organisation) => {
                this.title = organisation.title;
                this.Organisation = organisation;
            });
        });
    }
}
