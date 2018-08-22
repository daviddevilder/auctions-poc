import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrganisationService} from '../services/organisation.service';
import {Organisation} from '../../../common/models/Organisation';
import {LotService} from '../services/lot.service';

@Component({
  selector: 'app-organisation-faq',
  templateUrl: './organisation-faq.component.html',
  styleUrls: ['./organisation-faq.component.css']
})
export class OrganisationFaqComponent {
    public organisationId: String = '';

    public Organisation: Organisation = new Organisation('', '', '', '', '', '', '', '', new Date(), '', '', '', '', []);

    constructor(private organisationService: OrganisationService, private lotService: LotService, private route: ActivatedRoute) {
        this.route.params.subscribe( params => {
            this.organisationId = params.organisationId;

            organisationService.LoadOrganisationById(params.organisationId)
                .subscribe((organisation: Organisation) => {
                    this.Organisation = organisation;
                    console.log(organisation.faqs);
                });
        });
    }
}
