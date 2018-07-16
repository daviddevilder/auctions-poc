import {Component, OnInit} from '@angular/core';
import {Club} from '../../../common/models/Club';
import {ClubService} from '../services/club.service';

@Component({
    selector: 'app-club-list',
    templateUrl: 'club-list.component.html',
    styleUrls: ['club-list.component.css']
})
export class ClubListComponent implements OnInit {

    public Clubs: Club[] = [];

    constructor(private clubService: ClubService) {}

    ngOnInit() {
        this.clubService.LoadClubs()
            .subscribe((clubs: Club[]) => this.Clubs = clubs);
    }

}
