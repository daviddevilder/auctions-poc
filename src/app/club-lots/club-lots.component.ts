import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClubService} from '../services/club.service';
import {Club} from '../../../common/models/Club';

@Component({
  selector: 'app-club-lots',
  templateUrl: './club-lots.component.html',
  styleUrls: ['./club-lots.component.css']
})
export class ClubLotsComponent {
    public title: String = '';
    public clubId: String = '';

    constructor(private clubService: ClubService, private route: ActivatedRoute) {
        this.route.params.subscribe( params => {
            this.clubId = params.clubId;
            clubService.LoadClubById(params.clubId).subscribe((club: Club) => {
                this.title = club.title;
            });
        });
    }
}
