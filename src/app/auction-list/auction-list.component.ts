import {Component, Input, OnInit} from '@angular/core';
import {Auction} from '../../../common/models/Auction';
import {AuctionService} from '../services/auction.service';

@Component({
    selector: 'app-auction-list',
    templateUrl: 'auction-list.component.html',
    styleUrls: ['auction-list.component.css']
})
export class AuctionListComponent implements OnInit {
    @Input() clubId: string;
    public Auctions: Auction[] = [];

    constructor(private auctionService: AuctionService) {}

    ngOnInit() {
        this.auctionService.LoadAuctions(this.clubId)
            .subscribe((auctions: Auction[]) => this.Auctions = auctions);
    }

}
