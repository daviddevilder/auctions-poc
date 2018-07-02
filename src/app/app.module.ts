import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TokenListComponent} from './token-list/token-list.component';
import {TokenService} from "./services/token.service";
import {HttpClientModule} from "@angular/common/http";
import {PortfolioListComponent} from './portfolio-list/portfolio-list.component';
import {PortfolioService} from "./services/portfolio.service";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TokenListComponent,
        PortfolioListComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [TokenService, PortfolioService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
