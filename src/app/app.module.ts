import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AuctionListComponent} from './auction-list/auction-list.component';
import {HttpClientModule} from "@angular/common/http";
import {AuctionService} from "./services/auction.service";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AuctionListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [AuctionService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
