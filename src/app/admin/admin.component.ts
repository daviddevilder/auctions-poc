import { Component, OnInit } from '@angular/core';
import {OrganisationService} from '../services/organisation.service';
import {Organisation} from '../../../common/models/Organisation';
import {Lot} from '../../../common/models/Lot';
import {LotService} from '../services/lot.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    public Organisations: Organisation[] = [];
    public Lots = {};

    constructor(private organisationService: OrganisationService, private lotService: LotService) {}

    ngOnInit() {
        this.organisationService.LoadOrganisations()
            .subscribe((organisations: Organisation[]) => {
                this.Organisations = organisations;
                this.Organisations.forEach((organisation) => {
                    this.lotService.LoadLots(organisation.organisationId)
                        .subscribe((lots: Lot[]) => this.Lots[organisation.organisationId] = lots);
                });
            });
    }

}
