import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {LotService} from '../services/lot.service';
import {Lot} from '../../../common/models/Lot';

@Component({
    selector: 'app-bid-dialog',
    templateUrl: 'bid-dialog.component.html',
    styleUrls: ['bid-dialog.component.css']
})
export class BidDialogComponent implements OnInit {

    public emailAddress: String;

    constructor(public thisDialogRef: MatDialogRef<BidDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
                private lotService: LotService) { }

    ngOnInit() {
    }

    onCloseConfirm() {
        this.lotService.PlaceBid(this.data.lotId, this.emailAddress, this.data.amount)
            .subscribe((result => {
                this.thisDialogRef.close(true);
            }));
    }

    onCloseCancel() {
        this.thisDialogRef.close(false);
    }

}
