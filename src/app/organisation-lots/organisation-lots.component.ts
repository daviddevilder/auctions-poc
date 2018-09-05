import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrganisationService} from '../services/organisation.service';
import {Organisation} from '../../../common/models/Organisation';
import {LotService} from '../services/lot.service';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-organisation-lots',
  templateUrl: './organisation-lots.component.html',
  styleUrls: ['./organisation-lots.component.css']
})
export class OrganisationLotsComponent {
    @ViewChild('sidenav') sidenav: MatSidenav;

    public organisationId: String = '';
    public Organisation: Organisation = new Organisation('', '', '', '', '', '', '', '', '', new Date(), '', '', '', '', []);

    screenWidth: Number;
    isSideNavHidden: Boolean;

    constructor(private organisationService: OrganisationService, private lotService: LotService, private route: ActivatedRoute) {
        this.screenWidth = window.innerWidth;

        this.route.params.subscribe( params => {
            this.organisationId = params.organisationId;

            organisationService.LoadOrganisationById(params.organisationId)
                .subscribe((organisation: Organisation) => {
                    this.Organisation = organisation;
                });
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.checkShowHideSideNav(event.target.innerWidth);
    }

    private checkShowHideSideNav(innerWidth: Number) {
        if (innerWidth < 600) {
            this.sidenav.close();
            this.sidenav.mode = 'over';
            this.isSideNavHidden = true;
        } else {
            this.sidenav.mode = 'side';
            this.sidenav.open();
            this.isSideNavHidden = false;
        }
    }

    showNav() {
        this.sidenav.open();
        this.isSideNavHidden = false;
    }
}
