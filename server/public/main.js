(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./common/models/Club.ts":
/*!*******************************!*\
  !*** ./common/models/Club.ts ***!
  \*******************************/
/*! exports provided: Club */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Club", function() { return Club; });
var Club = /** @class */ (function () {
    function Club(clubId, title, subtitle, logoUrl, websiteUrl, contactEmail, contactPhone, closingDate, bannerUrl, bannerText, introText, descriptionHtml) {
        this.clubId = clubId;
        this.title = title;
        this.subtitle = subtitle;
        this.logoUrl = logoUrl;
        this.websiteUrl = websiteUrl;
        this.contactEmail = contactEmail;
        this.contactPhone = contactPhone;
        this.closingDate = closingDate;
        this.bannerUrl = bannerUrl;
        this.bannerText = bannerText;
        this.introText = introText;
        this.descriptionHtml = descriptionHtml;
    }
    return Club;
}());



/***/ }),

/***/ "./common/models/Lot.ts":
/*!******************************!*\
  !*** ./common/models/Lot.ts ***!
  \******************************/
/*! exports provided: Lot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lot", function() { return Lot; });
var Lot = /** @class */ (function () {
    function Lot(lotId, clubId, title, description, imageUri, providedBy, reservePrice, estimate, tags, orderNumbder, isFeatured, bids) {
        this.lotId = lotId;
        this.clubId = clubId;
        this.title = title;
        this.description = description;
        this.imageUri = imageUri;
        this.providedBy = providedBy;
        this.reservePrice = reservePrice;
        this.estimate = estimate;
        this.tags = tags;
        this.orderNumbder = orderNumbder;
        this.isFeatured = isFeatured;
        this.bids = bids;
    }
    return Lot;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n      <app-header></app-header>\n      <router-outlet></router-outlet>\n      <app-footer></app-footer>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_locales_extra_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/extra/en */ "./node_modules/@angular/common/locales/extra/en.js");
/* harmony import */ var _angular_common_locales_extra_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_en__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _club_list_club_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./club-list/club-list.component */ "./src/app/club-list/club-list.component.ts");
/* harmony import */ var _services_club_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/club.service */ "./src/app/services/club.service.ts");
/* harmony import */ var _club_club_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./club/club.component */ "./src/app/club/club.component.ts");
/* harmony import */ var _lot_list_lot_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lot-list/lot-list.component */ "./src/app/lot-list/lot-list.component.ts");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/lot.service */ "./src/app/services/lot.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _club_lots_club_lots_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./club-lots/club-lots.component */ "./src/app/club-lots/club-lots.component.ts");
/* harmony import */ var _auction_nav_auction_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auction-nav/auction-nav.component */ "./src/app/auction-nav/auction-nav.component.ts");
/* harmony import */ var _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lot-details/lot-details.component */ "./src/app/lot-details/lot-details.component.ts");
/* harmony import */ var _bid_dialog_bid_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bid-dialog/bid-dialog.component */ "./src/app/bid-dialog/bid-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_1___default.a, 'en', _angular_common_locales_extra_en__WEBPACK_IMPORTED_MODULE_2___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _club_list_club_list_component__WEBPACK_IMPORTED_MODULE_11__["ClubListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _club_club_component__WEBPACK_IMPORTED_MODULE_13__["ClubComponent"],
                _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_20__["LotDetailsComponent"],
                _lot_list_lot_list_component__WEBPACK_IMPORTED_MODULE_14__["LotListComponent"],
                _club_lots_club_lots_component__WEBPACK_IMPORTED_MODULE_18__["ClubLotsComponent"],
                _auction_nav_auction_nav_component__WEBPACK_IMPORTED_MODULE_19__["AuctionNavComponent"],
                _bid_dialog_bid_dialog_component__WEBPACK_IMPORTED_MODULE_21__["BidDialogComponent"]
            ],
            entryComponents: [_bid_dialog_bid_dialog_component__WEBPACK_IMPORTED_MODULE_21__["BidDialogComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["CustomMaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [_services_lot_service__WEBPACK_IMPORTED_MODULE_15__["LotService"], _services_club_service__WEBPACK_IMPORTED_MODULE_12__["ClubService"], { provide: _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_1___default.a, useValue: 'en' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auction-nav/auction-nav.component.css":
/*!*******************************************************!*\
  !*** ./src/app/auction-nav/auction-nav.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.auctionNav {\n    width: 200px;\n    background-color: rgb(243, 243, 243);\n    color: white;\n    overflow-x: hidden;\n    position: fixed;\n    top: 50px;\n    left: 0;\n}\n\nul.menuItemList {\n    padding:0;\n    margin:0;\n}\n\nul.menuItemList li {\n    list-style-type: none;\n    border: 1px solid rgb(233, 233, 233);\n    margin-bottom: 1px;\n}\n\nul.menuItemList li a {\n    text-decoration: none;\n    color: #888;\n    padding: 12px;\n    display: block;\n    font-size: 14px;\n    cursor: pointer;\n    transition: all .3s ease!important;\n}\n\nul.menuItemList li a:hover {\n    background: #888;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/auction-nav/auction-nav.component.html":
/*!********************************************************!*\
  !*** ./src/app/auction-nav/auction-nav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auctionNav\">\n\n  <ul class=\"menuItemList\">\n\n    <li>\n      <div>\n        <a routerLink=\"/club/{{clubId}}/lots\">\n          All Items\n        </a>\n      </div>\n    </li>\n\n    <li *ngFor=\"let tag of tags\">\n      <div>\n        <a routerLink=\"/club/{{clubId}}/lots\" [queryParams]=\"{filter: tag}\">\n          {{tag}}\n        </a>\n      </div>\n    </li>\n\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/auction-nav/auction-nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/auction-nav/auction-nav.component.ts ***!
  \******************************************************/
/*! exports provided: AuctionNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionNavComponent", function() { return AuctionNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/lot.service */ "./src/app/services/lot.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuctionNavComponent = /** @class */ (function () {
    function AuctionNavComponent(lotService) {
        this.lotService = lotService;
    }
    AuctionNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lotService.LoadTags(this.clubId)
            .subscribe(function (tags) {
            _this.tags = tags;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AuctionNavComponent.prototype, "clubId", void 0);
    AuctionNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auction-nav',
            template: __webpack_require__(/*! ./auction-nav.component.html */ "./src/app/auction-nav/auction-nav.component.html"),
            styles: [__webpack_require__(/*! ./auction-nav.component.css */ "./src/app/auction-nav/auction-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lot_service__WEBPACK_IMPORTED_MODULE_1__["LotService"]])
    ], AuctionNavComponent);
    return AuctionNavComponent;
}());



/***/ }),

/***/ "./src/app/bid-dialog/bid-dialog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bid-dialog/bid-dialog.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n    margin-top: 40px;\n}\n\ninput#email {\n    display: block;\n    font-size: 26px;\n    padding: 10px;\n    border-radius: 6px;\n    width: 520px;\n    margin: 10px auto;\n}\n\n.validationErrorText {\n    position: absolute;\n    color: red;\n    font-size: 12px;\n    font-style: italic;\n}\n\ninput#amount {\n    display: block;\n    border: none;\n    font-size: 26px;\n    padding: 10px;\n}\n\n.confirmButton {\n    background: #4dcc27;\n    color: #fff;\n}"

/***/ }),

/***/ "./src/app/bid-dialog/bid-dialog.component.html":
/*!******************************************************!*\
  !*** ./src/app/bid-dialog/bid-dialog.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2 mat-dialog-title>Confirm your bid</h2>\n    <hr>\n\n    <form #bidForm=\"ngForm\">\n        <mat-dialog-content>\n            In order to confirm your bid, please enter your details below.\n\n            <div class=\"form-group\">\n                <label for=\"email\">Email Address*</label>\n                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"emailAddress\" id=\"email\" name=\"email\" #email=\"ngModel\" required/>\n            </div>\n\n            <div class=\"validationErrorText\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                <div *ngIf=\"email.errors.required\">\n                    Email Address is required\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"amount\">My Bid</label>\n                <input type=\"text\" class=\"form-control\" id=\"amount\" value=\"£{{data.amount}}\" readonly>\n            </div>\n        </mat-dialog-content>\n        <hr>\n        <mat-dialog-actions>\n            <button mat-raised-button (click)=\"onCloseCancel()\">CANCEL</button>&nbsp;\n            <button mat-raised-button class=\"confirmButton\" type=\"submit\" (click)=\"onCloseConfirm()\" [disabled]=\"!bidForm.valid\">CONFIRM BID</button>\n        </mat-dialog-actions>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/bid-dialog/bid-dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bid-dialog/bid-dialog.component.ts ***!
  \****************************************************/
/*! exports provided: BidDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidDialogComponent", function() { return BidDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lot.service */ "./src/app/services/lot.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var BidDialogComponent = /** @class */ (function () {
    function BidDialogComponent(thisDialogRef, data, lotService) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.lotService = lotService;
    }
    BidDialogComponent.prototype.ngOnInit = function () {
    };
    BidDialogComponent.prototype.onCloseConfirm = function () {
        var _this = this;
        this.lotService.PlaceBid(this.data.lotId, this.emailAddress, this.data.amount)
            .subscribe((function (result) {
            _this.thisDialogRef.close(true);
        }));
    };
    BidDialogComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close(false);
    };
    BidDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bid-dialog',
            template: __webpack_require__(/*! ./bid-dialog.component.html */ "./src/app/bid-dialog/bid-dialog.component.html"),
            styles: [__webpack_require__(/*! ./bid-dialog.component.css */ "./src/app/bid-dialog/bid-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_lot_service__WEBPACK_IMPORTED_MODULE_2__["LotService"]])
    ], BidDialogComponent);
    return BidDialogComponent;
}());



/***/ }),

/***/ "./src/app/club-list/club-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/club-list/club-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    text-align: center;\n    color: white;\n    margin: 10px 30px;\n    padding: 8px;\n    background-color: #333;\n    opacity: 0.9;\n    border-radius: 10px;\n}\n\n.clubContainer {\n    background-color: white;\n    width: 280px;\n    padding: 5px;\n    border-radius: 12px;\n    text-align: center;\n    margin: 20px auto;\n}\n\n.clubContainer .title {\n    font-weight: bold;\n}\n\n.clubContainer .title a {\n    display: block;\n    text-decoration: none;\n    color: black;\n    font-size: 24px;\n}\n\n.clubContainer .clubLogo {\n    height: 120px;\n}"

/***/ }),

/***/ "./src/app/club-list/club-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/club-list/club-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  Our Partners\n</h2>\n\n<div class=\"clubContainer\" *ngFor=\"let club of Clubs\">\n  <div class=\"title\">\n    <a routerLink=\"/club/{{club.clubId}}\">\n      <img class=\"clubLogo\" src=\"{{club.logoUrl}}\"/>\n      <div>{{club.title}}</div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/club-list/club-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/club-list/club-list.component.ts ***!
  \**************************************************/
/*! exports provided: ClubListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubListComponent", function() { return ClubListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_club_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/club.service */ "./src/app/services/club.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClubListComponent = /** @class */ (function () {
    function ClubListComponent(clubService) {
        this.clubService = clubService;
        this.Clubs = [];
    }
    ClubListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clubService.LoadClubs()
            .subscribe(function (clubs) { return _this.Clubs = clubs; });
    };
    ClubListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-club-list',
            template: __webpack_require__(/*! ./club-list.component.html */ "./src/app/club-list/club-list.component.html"),
            styles: [__webpack_require__(/*! ./club-list.component.css */ "./src/app/club-list/club-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_club_service__WEBPACK_IMPORTED_MODULE_1__["ClubService"]])
    ], ClubListComponent);
    return ClubListComponent;
}());



/***/ }),

/***/ "./src/app/club-lots/club-lots.component.css":
/*!***************************************************!*\
  !*** ./src/app/club-lots/club-lots.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n    background-color: rgb(238, 238, 238);\n    background-size: cover;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: -1;\n}\n\nh1 {\n    color: white;\n    margin: 0 0 0 200px;\n    padding: 65px 14px 14px;\n    background-color: rgb(0, 43, 136);\n    opacity: 0.9;\n    width: auto;\n    font-weight: normal;\n    text-align: left;\n    font-size: 20px;\n}\n\n.nav {\n    height: 100%;\n}\n\n.lots {\n    margin-left: 200px;\n    margin-top: 50px;\n    min-height: 350px;\n}"

/***/ }),

/***/ "./src/app/club-lots/club-lots.component.html":
/*!****************************************************!*\
  !*** ./src/app/club-lots/club-lots.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n\n<h1>\n  {{ title }} Auction\n</h1>\n\n<div class=\"nav\">\n  <app-auction-nav clubId=\"{{clubId}}\"></app-auction-nav>\n</div>\n\n<div class=\"lots\">\n  <app-lot-list clubId=\"{{clubId}}\"></app-lot-list>\n</div>"

/***/ }),

/***/ "./src/app/club-lots/club-lots.component.ts":
/*!**************************************************!*\
  !*** ./src/app/club-lots/club-lots.component.ts ***!
  \**************************************************/
/*! exports provided: ClubLotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubLotsComponent", function() { return ClubLotsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_club_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/club.service */ "./src/app/services/club.service.ts");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/lot.service */ "./src/app/services/lot.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClubLotsComponent = /** @class */ (function () {
    function ClubLotsComponent(clubService, lotService, route) {
        var _this = this;
        this.clubService = clubService;
        this.lotService = lotService;
        this.route = route;
        this.title = '';
        this.clubId = '';
        this.route.params.subscribe(function (params) {
            _this.clubId = params.clubId;
            clubService.LoadClubById(params.clubId)
                .subscribe(function (club) {
                _this.title = club.title;
            });
        });
    }
    ClubLotsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-club-lots',
            template: __webpack_require__(/*! ./club-lots.component.html */ "./src/app/club-lots/club-lots.component.html"),
            styles: [__webpack_require__(/*! ./club-lots.component.css */ "./src/app/club-lots/club-lots.component.css")]
        }),
        __metadata("design:paramtypes", [_services_club_service__WEBPACK_IMPORTED_MODULE_2__["ClubService"], _services_lot_service__WEBPACK_IMPORTED_MODULE_3__["LotService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ClubLotsComponent);
    return ClubLotsComponent;
}());



/***/ }),

/***/ "./src/app/club/club.component.css":
/*!*****************************************!*\
  !*** ./src/app/club/club.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n    background-color: rgb(238, 238, 238);\n    background-size: cover;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: -1;\n}\n\nh1 {\n    text-align: center;\n    color: white;\n    font-size: 24px;\n    font-weight: normal;\n}\n\nh2 {\n    text-align: center;\n    color: white;\n    font-size: 16px;\n    font-weight: normal;\n}\n\n.headerSection {\n    height: 350px;\n    background-color: rgb(0, 43, 136);\n    margin-bottom: 40px;\n}\n\n.clubLogo {\n    height: 160px;\n    text-align: center;\n    padding-top: 70px;\n}\n\n.clubLogo img {\n    height: 160px;\n}\n\n.bannerContainer {\n    margin-bottom: 40px;\n}\n\n.banner {\n    padding: 40px 100px;\n    background: center/cover no-repeat #789;\n    min-height: 160px;\n    max-width: 700px;\n    margin: 0 auto;\n}\n\n.bannerText {\n    font-size: 30px;\n    background: rgba(0,0,0,0.38);\n    text-transform: uppercase;\n    color: #fff;\n    padding: 0 10px;\n    -webkit-box-decoration-break: clone;\n    -ms-box-decoration-break: clone;\n    -o-box-decoration-break: clone;\n    box-decoration-break: clone;\n}\n\n.lotsButtonContainer {\n    margin-top: 40px;\n    text-align: center;\n}\n\n.lotsButton {\n    width: 100%;\n    text-transform: uppercase;\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.introductionContainer {\n    max-width: 900px;\n    margin: 35px auto 0;\n}\n\n.introductionText {\n\n}\n\n.clubDetailsContainer {\n    margin: 0 auto;\n    width: 400px;\n}\n\n.clubDetailsCard {\n    background: white;\n    color: black;\n    margin: 25px auto;\n    padding: 15px;\n    text-align: center;\n}\n\n.clubDetailsCard label {\n    color: #6f6f6f;\n    font-size: 12px;\n    margin-bottom: 6px;\n}\n\n.descriptionContainer {\n    max-width: 900px;\n    margin: 35px auto 0;\n}\n\n.descriptionHtml {\n\n}"

/***/ }),

/***/ "./src/app/club/club.component.html":
/*!******************************************!*\
  !*** ./src/app/club/club.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n\n<div class=\"headerSection\">\n    <div class=\"clubLogo\">\n        <img src=\"{{club.logoUrl}}\"/>\n    </div>\n\n    <h1>\n        {{title}}\n    </h1>\n\n    <h2>\n        {{club.subtitle}}\n    </h2>\n</div>\n\n<div class=\"banner\" [ngStyle]=\"{ 'background-image': 'url(' + club.bannerUrl + ')'}\">\n    <div class=\"bannerText\">\n        {{club.bannerText}}\n    </div>\n    <div class=\"lotsButtonContainer\">\n        <button mat-raised-button class=\"lotsButton\" routerLink=\"/club/{{clubId}}/lots\">\n            View the auction lots\n        </button>\n    </div>\n</div>\n\n<div class=\"introductionContainer\">\n    <div class=\"introductionText\">\n        {{club.introText}}\n    </div>\n</div>\n\n<div class=\"clubDetailsContainer\">\n    <div class=\"clubDetailsCard\">\n        <div class=\"whenContainer\">\n            <label>When</label>\n            <div>Ends {{club.closingDate | date:'h:mm a, d LLLL y'}}</div>\n        </div>\n    </div>\n\n    <div class=\"clubDetailsCard\">\n        <div class=\"contactContainer\">\n            <label>Contact</label>\n            <div>{{club.contactEmail}}</div>\n        </div>\n    </div>\n\n    <div class=\"clubDetailsCard\">\n        <div class=\"websiteContainer\">\n            <label>Website</label>\n            <div>\n                <a href=\"{{club.websiteUrl}}\" target=\"_blank\">\n                    {{club.websiteUrl}}\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"descriptionContainer\">\n    <div class=\"descriptionHtml\" [innerHtml]=\"club.descriptionHtml\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/club/club.component.ts":
/*!****************************************!*\
  !*** ./src/app/club/club.component.ts ***!
  \****************************************/
/*! exports provided: ClubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubComponent", function() { return ClubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_club_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/club.service */ "./src/app/services/club.service.ts");
/* harmony import */ var _common_models_Club__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/Club */ "./common/models/Club.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClubComponent = /** @class */ (function () {
    function ClubComponent(clubService, route) {
        var _this = this;
        this.clubService = clubService;
        this.route = route;
        this.title = '';
        this.clubId = '';
        this.club = new _common_models_Club__WEBPACK_IMPORTED_MODULE_3__["Club"]('', '', '', '', '', '', '', new Date(), '', '', '', '');
        this.route.params.subscribe(function (params) {
            _this.clubId = params.clubId;
            clubService.LoadClubById(params.clubId).subscribe(function (club) {
                _this.title = club.title;
                _this.club = club;
            });
        });
    }
    ClubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-club',
            template: __webpack_require__(/*! ./club.component.html */ "./src/app/club/club.component.html"),
            styles: [__webpack_require__(/*! ./club.component.css */ "./src/app/club/club.component.css")]
        }),
        __metadata("design:paramtypes", [_services_club_service__WEBPACK_IMPORTED_MODULE_2__["ClubService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ClubComponent);
    return ClubComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    background-color: #1B1E2B;\n    color: white;\n    padding-top: 100px;\n    padding-bottom: 0px;\n    z-index: 1000;\n    font-weight: 200;\n    margin-top: 30px;\n    clear: both;\n}\n\n.footer-row {\n    margin: 0px auto;\n    width: 80%;\n}\n\n.footer-email {\n    float: left;\n    text-align: center;\n    width: 33%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 85px;\n}\n\n.footer-logo {\n    float: left;\n    text-align: center;\n    width: 34%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 85px;\n}\n\n.footer-logo img {\n    margin: 6px 20px;\n    width: 100%;\n    max-width: 200px;\n}\n\n.footer-social {\n    float: left;\n    text-align: center;\n    width: 33%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 85px;\n}\n\n.footer-social ul {\n    list-style: none;\n}\n\n.footer-social ul li {\n    display: inline-block;\n    width: 50px;\n    font-size: 20px;\n}\n\n.footer-social a {\n    text-decoration: none;\n    color: white;\n}\n\n.footer-address {\n    text-align: center;\n    font-size: 18px;\n    padding: 100px 0;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n\n  <div class=\"footer-row\">\n\n    <div class=\"footer-email\">\n      <p>info@goinggone.io</p>\n    </div>\n\n    <div class=\"footer-logo\">\n      <a routerLink=\"/home\">\n        <img src=\"../../assets/images/gg_footer_logo.png\"/>\n      </a>\n    </div>\n\n    <div class=\"footer-social\">\n      <ul>\n        <li>\n          <a href=\"https://www.facebook.com/goinggonetechnology\">\n            <i class=\"fa fa-facebook\"></i>\n          </a>\n        </li>\n\n        <li>\n          <a href=\"https://www.instagram.com/goinggonetechnology\">\n            <i class=\"fa fa-instagram\"></i>\n          </a>\n        </li>\n\n        <li>\n          <a href=\"https://www.linkedin.com/company-beta/17881204/\">\n            <i class=\"fa fa-linkedin\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class=\"footer-row\">\n    <div class=\"footer-address\">\n      Hayles Bridge Offices, 228 Mulgrave Road, Cheam, Surrey, UK, SM2 6JT\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n    height: 50px;\n    background-color: #0FBAAD;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 1000;\n}\n\n.header img {\n    margin: 6px 20px;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\n  <a routerLink=\"/home\">\n\n    <img src=\"../../assets/images/gg_small_logo.png\"/>\n\n  </a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n    background-color: rgb(238, 238, 238);\n    background-size: cover;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: -1;\n}\n\n.title {\n    margin: 100px auto 50px;\n    text-align: center;\n    font-size: 60px;\n    color: black;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n\n<p class=\"title\">Welcome to Going Gone!</p>\n\n<app-club-list></app-club-list>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lot-details/lot-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lot-details/lot-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n    background-color: rgb(238, 238, 238);\n    background-size: cover;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: -1;\n}\n\n.content {\n    color: black;\n    text-align: center;\n    margin-top: 55px;\n}\n\nh1 {\n    margin: 10px auto;\n    padding: 8px;\n}\n\nh2 {\n    font-size: 14px;\n    font-weight: normal;\n    color: #666;\n    margin: 0 auto 30px;\n}\n\n.titleSection {\n    position: relative;\n}\n\n.backButton {\n    position: absolute;\n    left: 20px;\n    top: 0;\n}\n\n.lotBiddingContainer {\n    width: 820px;\n    height: 160px;\n    margin: 0 auto;\n}\n\n.bidDetailsContainer {\n    background-color: white;\n    border-radius: 12px;\n    text-align: center;\n    float: left;\n    height: 80px;\n    width: 370px;\n    padding: 10px;\n    margin: 10px 10px 42px;\n    box-shadow: 0 15px 33px -1px #999!important;\n}\n\n.bidDetailsContainer .price {\n    font-weight: bold;\n    margin: 14px auto;\n    text-align: left;\n}\n\n.bidDetailsContainer .price div {\n    display: inline-block;\n    width: 100px;\n    font-weight: normal;\n    font-size: 18px;\n}\n\n.bidDetailsContainer label {\n\n}\n\n.bidDetailsContainer .minText {\n    font-size: 12px;\n}\n\n.bidDetailsContainer input {\n    width: 100px;\n    height: 25px;\n    margin-left: 50px;\n}\n\n.bidButton {\n    width: 100%;\n    background: #4dcc27;\n    color: #fff;\n    font-weight: 700;\n    font-size: 18px;\n    padding: 5px 0;\n    margin-top: 4px;\n}\n\n.lotImageContainer {\n    display: inline-block;\n    margin-top:30px;\n    clear: both;\n}\n\n.lotImageContainer img {\n    width: 400px;\n    box-shadow: 0 15px 33px -1px #999!important;\n}\n\n.lotDescriptionContainer {\n    width: 380px;\n    display: inline-block;\n    vertical-align: top;\n    padding: 0 10px;\n    margin-top:30px;\n}"

/***/ }),

/***/ "./src/app/lot-details/lot-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/lot-details/lot-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n\n<div class=\"content\">\n    <div class=\"titleSection\">\n        <button mat-raised-button class=\"backButton\"\n                routerLink=\"/club/{{clubId}}/lots\">\n            << All Lots\n        </button>\n\n        <h1>\n            {{ lot.title }}\n        </h1>\n    </div>\n\n    <h2>\n        provided by {{lot.providedBy}}\n    </h2>\n\n    <div class=\"lotBiddingContainer\">\n        <div class=\"bidDetailsContainer\">\n            <div class=\"price\">\n                <div class=\"label\">\n                    Reserve:\n                </div>\n                <div class=\"amount\">\n                    £{{lot.reservePrice}}\n                </div>\n            </div>\n\n            <div class=\"price\">\n                <div class=\"label\">\n                    Estimate:\n                </div>\n                <div class=\"amount\">\n                    £{{lot.estimate}}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"bidDetailsContainer\">\n            <div>\n                <label>My bid <span class=\"minText\">(minimum £{{lot.reservePrice}})</span>*</label>\n                <input [(ngModel)]=\"amount\" type=\"number\" placeholder=\"{{lot.reservePrice}}\"/>\n                <button mat-raised-button class=\"bidButton\"\n                        (click)=\"openBidPopup()\">\n                    Place Bid\n                </button>\n            </div>\n        </div>\n    </div>\n\n\n    <div>\n        <div class=\"lotImageContainer\">\n            <img src=\"{{lot.imageUri}}\"/>\n        </div>\n\n        <div class=\"lotDescriptionContainer\" [innerHTML]=\"lot.description\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lot-details/lot-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lot-details/lot-details.component.ts ***!
  \******************************************************/
/*! exports provided: LotDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotDetailsComponent", function() { return LotDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_club_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/club.service */ "./src/app/services/club.service.ts");
/* harmony import */ var _common_models_Club__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/Club */ "./common/models/Club.ts");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/lot.service */ "./src/app/services/lot.service.ts");
/* harmony import */ var _common_models_Lot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/models/Lot */ "./common/models/Lot.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bid_dialog_bid_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bid-dialog/bid-dialog.component */ "./src/app/bid-dialog/bid-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LotDetailsComponent = /** @class */ (function () {
    function LotDetailsComponent(clubService, lotService, route, dialog) {
        var _this = this;
        this.clubService = clubService;
        this.lotService = lotService;
        this.route = route;
        this.dialog = dialog;
        this.lotId = '';
        this.clubId = '';
        this.lot = new _common_models_Lot__WEBPACK_IMPORTED_MODULE_5__["Lot"]('', '', '', '', '', '', 0, 0, [], 0, 0, []);
        this.club = new _common_models_Club__WEBPACK_IMPORTED_MODULE_3__["Club"]('', '', '', '', '', '', '', new Date(), '', '', '', '');
        this.amount = '';
        this.route.params.subscribe(function (params) {
            _this.clubId = params.clubId;
            _this.lotId = params.lotId;
            lotService.LoadLot(params.lotId).subscribe(function (lot) {
                _this.lot = lot;
            });
            clubService.LoadClubById(params.clubId).subscribe(function (club) {
                _this.club = club;
            });
        });
    }
    LotDetailsComponent.prototype.openBidPopup = function () {
        var dialogRef = this.dialog.open(_bid_dialog_bid_dialog_component__WEBPACK_IMPORTED_MODULE_7__["BidDialogComponent"], {
            width: '600px',
            disableClose: true,
            data: {
                lotId: this.lotId,
                amount: this.amount
            }
        });
        dialogRef.afterClosed().subscribe(function (success) {
            if (success) {
                alert('Bid placed successfully!');
            }
            else {
                alert('Bid not placed');
            }
        });
    };
    LotDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lot-details',
            template: __webpack_require__(/*! ./lot-details.component.html */ "./src/app/lot-details/lot-details.component.html"),
            styles: [__webpack_require__(/*! ./lot-details.component.css */ "./src/app/lot-details/lot-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_club_service__WEBPACK_IMPORTED_MODULE_2__["ClubService"], _services_lot_service__WEBPACK_IMPORTED_MODULE_4__["LotService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], LotDetailsComponent);
    return LotDetailsComponent;
}());



/***/ }),

/***/ "./src/app/lot-list/lot-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/lot-list/lot-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lotContainer {\n    background-color: white;\n    border-radius: 12px;\n    text-align: center;\n    float: left;\n    height: 400px;\n    width: 275px;\n    padding: 10px;\n    margin: 10px 25px 42px;\n    box-shadow: 0 15px 33px -1px #999!important;\n}\n\n.lotContainer .name {\n    font-weight: bold;\n    font-size: 18px;\n    padding: 25px 0 45px;\n    border-bottom: 1px solid #EEE;\n}\n\n.lotContainer .price {\n    font-weight: bold;\n    margin: 14px auto;\n    text-align: left;\n}\n\n.lotContainer .price div {\n    display: inline-block;\n    width: 100px;\n    font-weight: normal;\n    font-size: 18px;\n}\n\n.lotContainer div.imageContainer {\n    position: relative;\n}\n\n.lotContainer div.providedBy {\n    position: absolute;\n    z-index: 1;\n    bottom: 4px;\n    text-align: center!important;\n    padding: 8px 0;\n    background: rgba(207,207,207,.8);\n    border-radius: 0 0 4px 4px;\n    font-size: 14px;\n    width: 100%;\n}\n\n.lotContainer img {\n    margin: -24px auto 0;\n    height: 200px;\n    width: 100%;\n    background: #cdcecd;\n    border-radius: 5px;\n}\n\n.lotsButtonContainer {\n    margin: 10px auto;\n    text-align: center;\n}\n\n.viewButton {\n    width: 100%;\n    background: #4dcc27;\n    color: #fff;\n    font-weight: 700;\n    font-size: 18px;\n    padding: 5px 0;\n}"

/***/ }),

/***/ "./src/app/lot-list/lot-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/lot-list/lot-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"float_center\">\n        <div class=\"lotContainer child\" *ngFor=\"let lot of Lots\">\n\n            <div class=\"imageContainer\">\n                <div class=\"providedBy\">\n                    Provided by: {{lot.providedBy}}\n                </div>\n                <img src=\"{{lot.imageUri}}\"/>\n            </div>\n\n            <div class=\"name\">{{lot.title}}</div>\n\n            <div class=\"price\">\n                <div class=\"label\">\n                    Reserve:\n                </div>\n                <div class=\"amount\">\n                    £{{lot.reservePrice}}\n                </div>\n            </div>\n\n            <div class=\"price\">\n                <div class=\"label\">\n                    Estimate:\n                </div>\n                <div class=\"amount\">\n                    £{{lot.estimate}}\n                </div>\n            </div>\n\n            <div class=\"lotsButtonContainer\">\n                <button mat-raised-button class=\"viewButton\"\n                        routerLink=\"/club/{{clubId}}/lot/{{lot.lotId}}\">\n                    View\n                </button>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lot-list/lot-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/lot-list/lot-list.component.ts ***!
  \************************************************/
/*! exports provided: LotListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotListComponent", function() { return LotListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/lot.service */ "./src/app/services/lot.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LotListComponent = /** @class */ (function () {
    function LotListComponent(lotService, route) {
        this.lotService = lotService;
        this.route = route;
        this.Lots = [];
    }
    LotListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params.filter) {
                _this.lotService.LoadLotsForTag(_this.clubId, params.filter)
                    .subscribe(function (lots) { return _this.Lots = lots; });
            }
            else {
                _this.lotService.LoadLots(_this.clubId)
                    .subscribe(function (lots) { return _this.Lots = lots; });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LotListComponent.prototype, "clubId", void 0);
    LotListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lot-list',
            template: __webpack_require__(/*! ./lot-list.component.html */ "./src/app/lot-list/lot-list.component.html"),
            styles: [__webpack_require__(/*! ./lot-list.component.css */ "./src/app/lot-list/lot-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lot_service__WEBPACK_IMPORTED_MODULE_1__["LotService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LotListComponent);
    return LotListComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _club_club_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club/club.component */ "./src/app/club/club.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _club_lots_club_lots_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./club-lots/club-lots.component */ "./src/app/club-lots/club-lots.component.ts");
/* harmony import */ var _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lot-details/lot-details.component */ "./src/app/lot-details/lot-details.component.ts");




var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'club/:clubId', component: _club_club_component__WEBPACK_IMPORTED_MODULE_0__["ClubComponent"] },
    { path: 'club/:clubId/lots', component: _club_lots_club_lots_component__WEBPACK_IMPORTED_MODULE_2__["ClubLotsComponent"] },
    { path: 'club/:clubId/lots/:activeTag', component: _club_lots_club_lots_component__WEBPACK_IMPORTED_MODULE_2__["ClubLotsComponent"] },
    { path: 'club/:clubId/lot/:lotId', component: _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_3__["LotDetailsComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];


/***/ }),

/***/ "./src/app/services/club.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/club.service.ts ***!
  \******************************************/
/*! exports provided: ClubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubService", function() { return ClubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClubService = /** @class */ (function () {
    function ClubService(http) {
        this.http = http;
        // private readonly host: string = 'http://localhost:3000';
        this.host = 'http://ggv2test.eu-west-2.elasticbeanstalk.com';
    }
    ClubService.prototype.LoadClubs = function () {
        var url = this.host + '/api/clubs';
        return this.http.get(url);
    };
    ClubService.prototype.LoadClubById = function (slug) {
        var url = this.host + '/api/clubs/' + slug;
        return this.http.get(url);
    };
    ClubService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClubService);
    return ClubService;
}());



/***/ }),

/***/ "./src/app/services/lot.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/lot.service.ts ***!
  \*****************************************/
/*! exports provided: LotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotService", function() { return LotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LotService = /** @class */ (function () {
    function LotService(http) {
        this.http = http;
        // private readonly host: string = 'http://localhost:3000';
        this.host = 'http://ggv2test.eu-west-2.elasticbeanstalk.com';
        this.Lots = [];
    }
    LotService.prototype.LoadTags = function (clubId) {
        var url = this.host + '/api/clubs/' + clubId + '/tags';
        return this.http.get(url);
    };
    LotService.prototype.LoadLots = function (clubId) {
        var url = this.host + '/api/clubs/' + clubId + '/lots';
        return this.http.get(url);
    };
    LotService.prototype.LoadLotsForTag = function (clubId, tag) {
        var url = this.host + '/api/clubs/' + clubId + '/lots/' + tag;
        return this.http.get(url);
    };
    LotService.prototype.LoadLot = function (lotId) {
        var url = this.host + '/api/lots/' + lotId;
        return this.http.get(url);
    };
    LotService.prototype.PlaceBid = function (lotId, bidderId, amount) {
        var url = this.host + '/api/lots/' + lotId + '/bid';
        var body = {
            bidderId: bidderId,
            value: amount
        };
        return this.http.post(url, body);
    };
    LotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LotService);
    return LotService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/david/auctions-poc/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map