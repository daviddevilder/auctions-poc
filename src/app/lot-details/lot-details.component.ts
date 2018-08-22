import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrganisationService} from '../services/organisation.service';
import {Organisation} from '../../../common/models/Organisation';
import {LotService} from '../services/lot.service';
import {Lot} from '../../../common/models/Lot';
import {MatDialog} from '@angular/material';
import {BidDialogComponent} from '../bid-dialog/bid-dialog.component';
import {NotificationDialogComponent} from '../notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-lot-details',
  templateUrl: './lot-details.component.html',
  styleUrls: ['./lot-details.component.css']
})
export class LotDetailsComponent {
    public lotId: String = '';
    public organisationId: String = '';

    public lot: Lot = new Lot('', '', '', '', '', '', 0, 0, [], 0, 0, []);
    public Organisation: Organisation = new Organisation('', '', '', '', '', '', '', '', new Date(), '', '', '', '', []);

    public amount: String = '';

    constructor(private organisationService: OrganisationService, private lotService: LotService, private route: ActivatedRoute,
                public dialog: MatDialog) {
        this.route.params.subscribe( params => {
            this.organisationId = params.organisationId;
            this.lotId = params.lotId;

            lotService.LoadLot(params.lotId).subscribe((lot: Lot) => {
                this.lot = lot;
            });

            organisationService.LoadOrganisationById(params.organisationId).subscribe((organisation: Organisation) => {
                this.Organisation = organisation;
            });
        });
    }

    openCheckout() {
        const handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_mPTpczYYMxOv3S3O0Jj9TXQI',
            locale: 'auto',
            token: function (token: any) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
            },
            currency: 'gbp'
        });

        handler.open({
            name: 'Going Gone - ' + this.Organisation.title,
            description: this.lot.title,
            amount: (parseInt(this.amount.toString(), 0) * 100)
        });

    }
}
