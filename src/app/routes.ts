import {Routes} from '@angular/router';
import {ClubComponent} from './club/club.component';
import {HomeComponent} from './home/home.component';
import {ClubLotsComponent} from './club-lots/club-lots.component';
import {LotDetailsComponent} from './lot-details/lot-details.component';
import {TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component';
import {ClubFaqComponent} from './club-faq/club-faq.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
    {path: ':clubId', component: ClubComponent},
    {path: ':clubId/faq', component: ClubFaqComponent},
    {path: ':clubId/lots', component: ClubLotsComponent},
    {path: ':clubId/lots/:activeTag', component: ClubLotsComponent},
    {path: ':clubId/lot/:lotId', component: LotDetailsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: HomeComponent}
];
