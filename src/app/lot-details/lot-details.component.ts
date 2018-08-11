import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClubService} from '../services/club.service';
import {Club} from '../../../common/models/Club';
import {LotService} from '../services/lot.service';
import {Lot} from '../../../common/models/Lot';
import {MatDialog} from '@angular/material';
import {BidDialogComponent} from '../bid-dialog/bid-dialog.component';

@Component({
  selector: 'app-lot-details',
  templateUrl: './lot-details.component.html',
  styleUrls: ['./lot-details.component.css']
})
export class LotDetailsComponent {
    public lotId: String = '';
    public clubId: String = '';

    public lot: Lot = new Lot('', '', '', '', '', '', 0, 0, [], 0, 0, []);
    public club: Club = new Club('', '', '', '', '', '', '', new Date(), '', '', '', '');

    public amount: String = '';

    constructor(private clubService: ClubService, private lotService: LotService, private route: ActivatedRoute, public dialog: MatDialog) {
        this.route.params.subscribe( params => {
            this.clubId = params.clubId;
            this.lotId = params.lotId;

            lotService.LoadLot(params.lotId).subscribe((lot: Lot) => {
                this.lot = lot;
            });

            clubService.LoadClubById(params.clubId).subscribe((club: Club) => {
                this.club = club;
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
                alert('Bid placed successfully!');
            } else {
                alert('Bid not placed');
            }
        });
    }
}
