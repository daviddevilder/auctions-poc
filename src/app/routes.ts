import {Routes} from '@angular/router';
import {OrganisationComponent} from './organisation/organisation.component';
import {HomeComponent} from './home/home.component';
import {OrganisationLotsComponent} from './organisation-lots/organisation-lots.component';
import {LotDetailsComponent} from './lot-details/lot-details.component';
import {TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component';
import {OrganisationFaqComponent} from './organisation-faq/organisation-faq.component';
import {AdminComponent} from './admin/admin.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
    {path: ':organisationId', component: OrganisationComponent},
    {path: ':organisationId/faq', component: OrganisationFaqComponent},
    {path: ':organisationId/lots', component: OrganisationLotsComponent},
    {path: ':organisationId/lots/:activeTag', component: OrganisationLotsComponent},
    {path: ':organisationId/lot/:lotId', component: LotDetailsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: HomeComponent}
];
