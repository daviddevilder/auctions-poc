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
import {ClubListComponent} from './club-list/club-list.component';
import {ClubService} from './services/club.service';
import {ClubComponent} from './club/club.component';
import {LotListComponent} from './lot-list/lot-list.component';
import {LotService} from './services/lot.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ClubLotsComponent} from './club-lots/club-lots.component';
import {AuctionNavComponent} from './auction-nav/auction-nav.component';
import {LotDetailsComponent} from './lot-details/lot-details.component';
import {BidDialogComponent} from './bid-dialog/bid-dialog.component';
import {NotificationDialogComponent} from './notification-dialog/notification-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

registerLocaleData(localeEn, 'en', localeEnExtra);

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ClubListComponent,
        HomeComponent,
        ClubComponent,
        LotDetailsComponent,
        LotListComponent,
        ClubLotsComponent,
        AuctionNavComponent,
        BidDialogComponent,
        NotificationDialogComponent
    ],
    entryComponents: [BidDialogComponent, NotificationDialogComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        AppRoutingModule
    ],
    providers: [LotService, ClubService, { provide: localeEn, useValue: 'en' }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
