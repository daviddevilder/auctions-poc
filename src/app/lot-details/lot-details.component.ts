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

    public lot: Lot = new Lot('', '', '', '', '', '', 0, 0, [], 0, 0, [], '');
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

    openBidPopup() {
        const dialogRef = this.dialog.open(BidDialogComponent, {
            width: '600px',
            disableClose: true,
            data: {
                lotId: this.lotId,
                amount: this.amount
            }
        });

        dialogRef.afterClosed().subscribe(success => {
            if (success) {
                this.openBidConfirmedDialog();
            }
        });
    }

    private openBidConfirmedDialog() {
        this.dialog.open(NotificationDialogComponent, {
            width: '400px',
            disableClose: true,
            data: {
                title: 'Bid placed',
                body: 'Your bid has been placed. Thank you for your contribution!'
            }
        });
    }
}
