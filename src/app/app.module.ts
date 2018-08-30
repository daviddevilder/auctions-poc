import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './material.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {OrganisationListComponent} from './organisation-list/organisation-list.component';
import {OrganisationService} from './services/organisation.service';
import {OrganisationComponent} from './organisation/organisation.component';
import {LotListComponent} from './lot-list/lot-list.component';
import {LotService} from './services/lot.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {OrganisationLotsComponent} from './organisation-lots/organisation-lots.component';
import {AuctionNavComponent} from './auction-nav/auction-nav.component';
import {LotDetailsComponent} from './lot-details/lot-details.component';
import {BidDialogComponent} from './bid-dialog/bid-dialog.component';
import {NotificationDialogComponent} from './notification-dialog/notification-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component';
import {OrganisationFaqComponent} from './organisation-faq/organisation-faq.component';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {AdminComponent} from './admin/admin.component';

registerLocaleData(localeEn, 'en', localeEnExtra);

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        OrganisationListComponent,
        HomeComponent,
        OrganisationComponent,
        LotDetailsComponent,
        LotListComponent,
        OrganisationLotsComponent,
        AuctionNavComponent,
        BidDialogComponent,
        NotificationDialogComponent,
        OrganisationFaqComponent,
        TermsAndConditionsComponent,
        AdminComponent
    ],
    entryComponents: [BidDialogComponent, NotificationDialogComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        AppRoutingModule,
        MatCardModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatInputModule,
        MatExpansionModule
    ],
    providers: [LotService, OrganisationService, { provide: localeEn, useValue: 'en' }],
    bootstrap: [AppComponent]
})
export class AppModule {
}