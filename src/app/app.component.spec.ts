import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LotService} from "./services/lot.service";
import {LotListComponent} from "./lot-list/lot-list.component";
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [LotService, HttpClient, HttpHandler],
            declarations: [AppComponent, LotListComponent],
            imports: [FormsModule, ReactiveFormsModule, RouterTestingModule]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});