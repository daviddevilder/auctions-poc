import {Component, Input, OnInit} from '@angular/core';
import {Lot} from '../../../common/models/Lot';
import {LotService} from '../services/lot.service';

@Component({
    selector: 'app-lot-list',
    templateUrl: 'lot-list.component.html',
    styleUrls: ['lot-list.component.css']
})
export class LotListComponent implements OnInit {
    @Input() clubId: string;
    public Lots: Lot[] = [];

    constructor(private lotService: LotService) {}

    ngOnInit() {
        this.lotService.LoadLots(this.clubId)
            .subscribe((lots: Lot[]) => this.Lots = lots);
    }

}
