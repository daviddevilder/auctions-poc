import { Component, OnInit } from '@angular/core';
import {OrganisationService} from '../../services/organisation.service';
import {Organisation} from '../../../../common/models/Organisation';
import {Lot} from '../../../../common/models/Lot';
import {LotService} from '../../services/lot.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-admin-lot',
  templateUrl: './admin-lot.component.html',
  styleUrls: ['./admin-lot.component.css']
})
export class AdminLotComponent {

    public lotId: String = '';
    public organisationId: String = '';

    public lot: Lot = new Lot('', '', '', '', '', '', 0, 0, [], 0, 0, [], '');
    public Organisation: Organisation = new Organisation('', '', '', '', '', '', '', '', '', new Date(), '', '', '', '', [], false);

    isAcceptInProgress = false;
    winningBid = null;

    constructor(private organisationService: OrganisationService, private lotService: LotService, private route: ActivatedRoute) {
        this.route.params.subscribe( params => {
            this.lotId = params.lotId;

            lotService.LoadLot(params.lotId).subscribe((lot: Lot) => {
                this.lot = lot;

                if(lot.winningBidId) {
                    console.log(lot.winningBidId);
                    this.winningBid = lot.bids.filter((bid: any) => {
                        console.log(bid._id);
                        return bid._id === lot.winningBidId;
                    })[0];
                    console.log(this.winningBid);
                }

                organisationService.LoadOrganisationById(lot.organisationId).subscribe((organisation: Organisation) => {
                    this.Organisation = organisation;
                });
            });
        });
    }

    acceptBid(bidId: String) {
        this.isAcceptInProgress = true;
        this.lotService.AcceptWinningBid(this.lotId, bidId)
            .subscribe((lot => {
                this.lot.winningBidId = bidId.toString();
                this.winningBid = lot.bids.filter((bid: any) => {
                    return bid._id === bidId.toString();
                })[0];
                this.isAcceptInProgress = false;
            }));
    }
}
