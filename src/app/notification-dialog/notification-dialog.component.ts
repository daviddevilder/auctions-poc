import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {LotService} from '../services/lot.service';
import {Lot} from '../../../common/models/Lot';

@Component({
    selector: 'app-notification-dialog',
    templateUrl: 'notification-dialog.component.html',
    styleUrls: ['notification-dialog.component.css']
})
export class NotificationDialogComponent implements OnInit {

    constructor(public thisDialogRef: MatDialogRef<NotificationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
    }

    onCloseOk() {
        this.thisDialogRef.close();
    }

}
