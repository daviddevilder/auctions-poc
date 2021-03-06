import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {LotService} from '../services/lot.service';
import {
    Component,
    Inject,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ElementRef,
    ChangeDetectorRef
} from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-bid-dialog',
    templateUrl: 'bid-dialog.component.html',
    styleUrls: ['bid-dialog.component.css']
})
export class BidDialogComponent implements AfterViewInit, OnDestroy {
    @ViewChild('cardInfo') cardInfo: ElementRef;

    card: any;
    cardHandler = this.onChange.bind(this);
    error: string;

    isBidInProgress = false;
    fullName: String;
    emailAddress: String;
    phone: String;

    constructor(public thisDialogRef: MatDialogRef<BidDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
                private lotService: LotService, private cd: ChangeDetectorRef) { }

    ngOnDestroy() {
        if (this.data.stripeIntegration) {
            this.card.removeEventListener('change', this.cardHandler);
            this.card.destroy();
        }
    }

    onChange({ error }) {
        if (error) {
            this.error = error.message;
        } else {
            this.error = null;
        }
        this.cd.detectChanges();
    }

    ngAfterViewInit() {
        if (this.data.stripeIntegration) {
            this.card = elements.create('card');
            this.card.mount(this.cardInfo.nativeElement);

            this.card.addEventListener('change', this.cardHandler);
        }
    }

    async onSubmit(form: NgForm) {
        this.isBidInProgress = true;

        if (this.data.stripeIntegration) {
            const { token, error } = await stripe.createToken(this.card);

            if (error) {
                console.log('Something is wrong:', error);
                this.isBidInProgress = false;
            } else {
                console.log('Success!', token);

                this.lotService.PlaceBid(this.data.lotId, this.fullName, this.emailAddress, this.phone, this.data.amount, token.id)
                    .subscribe((result => {
                        this.isBidInProgress = false;
                        this.thisDialogRef.close(true);
                    }));
            }
        } else {
            this.lotService.PlaceBid(this.data.lotId, this.fullName, this.emailAddress, this.phone, this.data.amount, null)
                .subscribe((result => {
                    this.isBidInProgress = false;
                    this.thisDialogRef.close(true);
                }));
        }
    }

    onCloseCancel() {
        this.thisDialogRef.close();
    }

}
