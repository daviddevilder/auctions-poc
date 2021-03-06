import {Component, Input, OnInit} from '@angular/core';
import {Lot} from '../../../common/models/Lot';
import {LotService} from '../services/lot.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-lot-list',
    templateUrl: 'lot-list.component.html',
    styleUrls: ['lot-list.component.css']
})
export class LotListComponent implements OnInit {
    @Input() organisationId: string;
    public Lots: Lot[] = [];

    constructor(private lotService: LotService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params.filter) {
                this.lotService.LoadLotsForTag(this.organisationId, params.filter)
                    .subscribe((lots: Lot[]) => this.Lots = lots);
            } else {
                this.lotService.LoadLots(this.organisationId)
                    .subscribe((lots: Lot[]) => this.Lots = lots);
            }
        });
    }

}
