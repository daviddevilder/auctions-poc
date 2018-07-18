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
import {ClubLotsComponent} from './club-lots/club-lots.component';
import {AuctionNavComponent} from './auction-nav/auction-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ClubListComponent,
        HomeComponent,
        ClubComponent,
        LotListComponent,
        ClubLotsComponent,
        AuctionNavComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        AppRoutingModule
    ],
    providers: [LotService, ClubService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
