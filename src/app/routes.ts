import {Routes} from '@angular/router';
import {ClubComponent} from './club/club.component';
import {HomeComponent} from './home/home.component';
import {ClubLotsComponent} from './club-lots/club-lots.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'club/:clubId', component: ClubComponent},
    {path: 'club/:clubId/lots', component: ClubLotsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: HomeComponent}
];
