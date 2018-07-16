import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {ClubListComponent} from './club-list/club-list.component';
import {ClubService} from './services/club.service';
import {ClubComponent} from './club/club.component';
import {AuctionListComponent} from './auction-list/auction-list.component';
import {AuctionService} from './services/auction.service';

@NgModule({
    declarations: [
        AppComponent,
        ClubListComponent,
        HomeComponent,
        ClubComponent,
        AuctionListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [AuctionService, ClubService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
