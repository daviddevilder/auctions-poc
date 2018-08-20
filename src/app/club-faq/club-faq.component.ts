import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClubService} from '../services/club.service';
import {Club} from '../../../common/models/Club';
import {LotService} from '../services/lot.service';

@Component({
  selector: 'app-club-faq',
  templateUrl: './club-faq.component.html',
  styleUrls: ['./club-faq.component.css']
})
export class ClubFaqComponent {
    public clubId: String = '';

    public club: Club = new Club('', '', '', '', '', '', '', '', new Date(), '', '', '', '');

    constructor(private clubService: ClubService, private lotService: LotService, private route: ActivatedRoute) {
        this.route.params.subscribe( params => {
            this.clubId = params.clubId;

            clubService.LoadClubById(params.clubId)
                .subscribe((club: Club) => {
                    this.club = club;
                });
        });
    }
}
