import {Component, Input, OnInit} from '@angular/core';
import {LotService} from '../services/lot.service';

@Component({
    selector: 'app-auction-nav',
    templateUrl: 'auction-nav.component.html',
    styleUrls: ['auction-nav.component.css']
})
export class AuctionNavComponent implements OnInit {
    @Input() clubId: String;
    public tags: String[];

    constructor(private lotService: LotService) {
    }

    ngOnInit() {
        this.lotService.LoadTags(this.clubId)
            .subscribe((tags: String[]) => {
                this.tags = tags;
            });
    }

}
