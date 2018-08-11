import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClubService} from '../services/club.service';
import {Club} from '../../../common/models/Club';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent {
    public title: String = '';
    public clubId: String = '';

    public club: Club = new Club('', '', '', '', '', '', '', new Date(), '', '', '', '');

    constructor(private clubService: ClubService, private route: ActivatedRoute) {
        this.route.params.subscribe( params => {
            this.clubId = params.clubId;
            clubService.LoadClubById(params.clubId).subscribe((club: Club) => {
                this.title = club.title;
                this.club = club;
            });
        });
    }
}
