(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
    function Lot(lotId, organisationId, title, description, imageUri, providedBy, reservePrice, estimate, tags, orderNumbder, isFeatured, bids, winningBidId) {
        this.lotId = lotId;
        this.organisationId = organisationId;
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
        this.winningBidId = winningBidId;
    }
    return Lot;
}());



/***/ }),

/***/ "./common/models/Organisation.ts":
/*!***************************************!*\
  !*** ./common/models/Organisation.ts ***!
  \***************************************/
/*! exports provided: Organisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organisation", function() { return Organisation; });
var Organisation = /** @class */ (function () {
    function Organisation(organisationId, title, subtitle, primaryColour, logoUrl, address, websiteUrl, contactEmail, contactPhone, closingDate, bannerUrl, bannerText, introText, descriptionHtml, faqs, stripeIntegration) {
        this.organisationId = organisationId;
        this.title = title;
        this.subtitle = subtitle;
        this.primaryColour = primaryColour;
        this.logoUrl = logoUrl;
        this.address = address;
        this.websiteUrl = websiteUrl;
        this.contactEmail = contactEmail;
        this.contactPhone = contactPhone;
        this.closingDate = closingDate;
        this.bannerUrl = bannerUrl;
        this.bannerText = bannerText;
        this.introText = introText;
        this.descriptionHtml = descriptionHtml;
        this.faqs = faqs;
        this.stripeIntegration = stripeIntegration;
    }
    return Organisation;
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

/***/ "./src/app/admin/admin-lot/admin-lot.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/admin-lot/admin-lot.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n    background-color: rgb(238, 238, 238);\n    background-size: cover;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: -1;\n}\n\n.app-toolbar {\n    background-color: #002B88;\n    position: sticky;\n    position: -webkit-sticky;\n    top: 0;\n    z-index: 1000;\n    height:56px;\n}\n\n.app-toolbar img{\n    padding-top: 7px;\n}\n\nh2 {\n    text-align: center;\n    color: white;\n    margin: 10px auto;\n    padding: 8px;\n    background-color: #333;\n    opacity: 0.9;\n    border-radius: 10px;\n    max-width: 400px;\n}\n\n.pageHeader {\n    color: white;\n    margin: 0 0 0 0px;\n    padding: 20px;\n    background-color: rgb(0, 43, 136);\n    opacity: 0.9;\n    width: auto;\n    font-weight: normal;\n    text-align: left;\n    font-size: 20px;\n    margin-bottom: 60px;\n\n}\n\n.pageHeader a {\n    color: white;\n}\n\n.pageHeader mat-icon {\n    padding-right: 10px;\n    position: relative;\n    top: 5px;\n\n}\n\n.lotImageContainer {\n    margin: 0 auto;\n    padding: 20px;\n}\n\n.lotImageContainer img {\n    width: 300px;\n}\n\ntable.bids {\n    margin: 10px auto;\n    width: 80%;\n}\n\ntable.bids td {\n    border-bottom: 1px solid #CCC;\n    padding: 10px;\n}\n\nbutton.acceptBidButton {\n    background: #4dcc27;\n    color: #fff;\n}\n\n.winningBidContainer {\n    margin: 0 auto;\n}"

/***/ }),

/***/ "./src/app/admin/admin-lot/admin-lot.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-lot/admin-lot.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class='app-toolbar mat-elevation-z4'>\n    <div class=\"logo-container\">\n        <a href=\"http://goinggone.io\">\n            <img src=\"../../../assets/images/gg_small_logo.png\"/>\n        </a>\n    </div>\n</mat-toolbar>\n\n<div class=\"background\"></div>\n\n<h2>\n    Admin Panel\n</h2>\n\n<div class=\"pageHeader\" [ngStyle]=\"{ 'background-color': Organisation.primaryColour}\">\n    <a routerLink=\"/admin\">\n        <mat-icon>arrow_back</mat-icon>\n    </a>\n    <span>{{ lot.title }}</span>\n</div>\n\n<div fxLayout=\"row\" class=\"containerRow secondRow\" fxLayoutGap=\"20px grid\">\n    <div class=\"lotImageContainer\">\n        <img src=\"../{{lot.imageUri}}\"/>\n    </div>\n</div>\n\n<table class=\"bids\" *ngIf=\"!lot.winningBidId\">\n    <tr class=\"bidContainer\" *ngFor=\"let bid of lot.bids\">\n        <td>\n            {{bid.createdAt | date:'d LLLL y h:mm a'}}\n        </td>\n        <td>\n            {{bid.name}}\n        </td>\n        <td>\n            {{bid.bidderId}}\n        </td>\n        <td>\n            {{bid.phone}}\n        </td>\n        <td>\n            £{{bid.value}}\n        </td>\n        <td>\n            <button mat-raised-button class=\"acceptBidButton\"\n                    [disabled]=\"isAcceptInProgress\" (click)=\"acceptBid(bid._id)\">\n                Accept Bid\n            </button>\n        </td>\n    </tr>\n</table>\n\n<div *ngIf=\"lot.winningBidId && winningBid\" class=\"winningBidContainer\">\n    <h2>Winning Bid</h2>\n    <table class=\"bids\">\n        <tr class=\"bidContainer\">\n            <td>\n                {{winningBid.createdAt | date:'d LLLL y h:mm a'}}\n            </td>\n            <td>\n                {{winningBid.name}}\n            </td>\n            <td>\n                {{winningBid.bidderId}}\n            </td>\n            <td>\n                {{winningBid.phone}}\n            </td>\n            <td>\n                £{{winningBid.value}}\n            </td>\n        </tr>\n    </table>\n</div>\n\n<app-footer [colour]=\"'#002B88'\"></app-footer>"

/***/ }),

/***/ "./src/app/admin/admin-lot/admin-lot.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/admin-lot/admin-lot.component.ts ***!
  \********************************************************/
/*! exports provided: AdminLotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLotComponent", function() { return AdminLotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_organisation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/organisation.service */ "./src/app/services/organisation.service.ts");
/* harmony import */ var _common_models_Organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/models/Organisation */ "./common/models/Organisation.ts");
/* harmony import */ var _common_models_Lot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/Lot */ "./common/models/Lot.ts");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/lot.service */ "./src/app/services/lot.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminLotComponent = /** @class */ (function () {
    function AdminLotComponent(organisationService, lotService, route) {
        var _this = this;
        this.organisationService = organisationService;
        this.lotService = lotService;
        this.route = route;
        this.lotId = '';
        this.organisationId = '';
        this.lot = new _common_models_Lot__WEBPACK_IMPORTED_MODULE_3__["Lot"]('', '', '', '', '', '', 0, 0, [], 0, 0, [], '');
        this.Organisation = new _common_models_Organisation__WEBPACK_IMPORTED_MODULE_2__["Organisation"]('', '', '', '', '', '', '', '', '', new Date(), '', '', '', '', [], false);
        this.isAcceptInProgress = false;
        this.winningBid = null;
        this.route.params.subscribe(function (params) {
            _this.lotId = params.lotId;
            lotService.LoadLot(params.lotId).subscribe(function (lot) {
                _this.lot = lot;
                if (lot.winningBidId) {
                    console.log(lot.winningBidId);
                    _this.winningBid = lot.bids.filter(function (bid) {
                        console.log(bid._id);
                        return bid._id === lot.winningBidId;
                    })[0];
                    console.log(_this.winningBid);
                }
                organisationService.LoadOrganisationById(lot.organisationId).subscribe(function (organisation) {
                    _this.Organisation = organisation;
                });
            });
        });
    }
    AdminLotComponent.prototype.acceptBid = function (bidId) {
        var _this = this;
        this.isAcceptInProgress = true;
        this.lotService.AcceptWinningBid(this.lotId, bidId)
            .subscribe((function (lot) {
            _this.lot.winningBidId = bidId.toString();
            _this.winningBid = lot.bids.filter(function (bid) {
                return bid._id === bidId.toString();
            })[0];
            _this.isAcceptInProgress = false;
        }));
    };
    AdminLotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-lot',
            template: __webpack_require__(/*! ./admin-lot.component.html */ "./src/app/admin/admin-lot/admin-lot.component.html"),
            styles: [__webpack_require__(/*! ./admin-lot.component.css */ "./src/app/admin/admin-lot/admin-lot.component.css")]
        }),
        __metadata("design:paramtypes", [_services_organisation_service__WEBPACK_IMPORTED_MODULE_1__["OrganisationService"], _services_lot_service__WEBPACK_IMPORTED_MODULE_4__["LotService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AdminLotComponent);
    return AdminLotComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n    background-color: rgb(238, 238, 238);\n    background-size: cover;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: -1;\n}\n\n.app-toolbar {\n    background-color: #002B88;\n    position: sticky;\n    position: -webkit-sticky;\n    top: 0;\n    z-index: 1000;\n    height:56px;\n}\n\n.app-toolbar img{\n    padding-top: 7px;\n}\n\nh2 {\n    text-align: center;\n    color: white;\n    margin: 10px auto;\n    padding: 8px;\n    background-color: #333;\n    opacity: 0.9;\n    border-radius: 10px;\n    max-width: 400px;\n}\n\n.orgContainer {\n    background-color: white;\n    width: 80%;\n    padding: 5px;\n    border-radius: 12px;\n    text-align: center;\n    margin: 6px auto;\n}\n\n.orgContainer .title {\n    font-weight: normal;\n}\n\n.orgContainer .orgLogo {\n    height: 50px;\n}\n\n.orgContainer .orgName {\n    vertical-align: middle;\n    padding: 6px;\n    font-size: 24px;\n}\n\n.orgContainer .orgLots {\n    margin-top: 25px;\n}\n\n.lotContainer {\n    margin: 12px auto;\n}\n\n.lotContainer a {\n    text-decoration: none;\n    color: black;\n    font-size: 16px;\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class='app-toolbar mat-elevation-z4'>\n    <div class=\"logo-container\">\n        <a href=\"http://goinggone.io\">\n            <img src=\"../../assets/images/gg_small_logo.png\"/>\n        </a>\n    </div>\n</mat-toolbar>\n\n<div class=\"background\"></div>\n\n<h2>\n    Admin Panel\n</h2>\n\n<div class=\"orgContainer\" *ngFor=\"let org of Organisations\">\n    <div class=\"title\">\n        <img class=\"orgLogo\" src=\"{{org.logoUrl}}\"/>\n        <div class=\"orgName\">{{org.title}}</div>\n    </div>\n    <div class=\"orgLots\">\n        <div class=\"lotContainer\" *ngFor=\"let lot of Lots[org.organisationId]\">\n            <a routerLink=\"/admin/{{lot.lotId}}\">\n                {{lot.title}}\n                <span *ngIf=\"lot.winningBidId\"> (Sold)</span>\n                <span *ngIf=\"!lot.winningBidId\"> (Live)</span>\n            </a>\n        </div>\n    </div>\n</div>\n\n<app-footer [colour]=\"'#002B88'\"></app-footer>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_organisation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/organisation.service */ "./src/app/services/organisation.service.ts");
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



var AdminComponent = /** @class */ (function () {
    function AdminComponent(organisationService, lotService) {
        this.organisationService = organisationService;
        this.lotService = lotService;
        this.Organisations = [];
        this.Lots = {};
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.organisationService.LoadOrganisations()
            .subscribe(function (organisations) {
            _this.Organisations = organisations;
            _this.Organisations.forEach(function (organisation) {
                _this.lotService.LoadLots(organisation.organisationId)
                    .subscribe(function (lots) { return _this.Lots[organisation.organisationId] = lots; });
            });
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_organisation_service__WEBPACK_IMPORTED_MODULE_1__["OrganisationService"], _services_lot_service__WEBPACK_IMPORTED_MODULE_2__["LotService"]])
    ], AdminComponent);
    return AdminComponent;
}());



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
            template: "<router-outlet></router-outlet>"
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
/* harmony import */ var _organisation_list_organisation_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organisation-list/organisation-list.component */ "./src/app/organisation-list/organisation-list.component.ts");
/* harmony import */ var _services_organisation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/organisation.service */ "./src/app/services/organisation.service.ts");
/* harmony import */ var _organisation_organisation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./organisation/organisation.component */ "./src/app/organisation/organisation.component.ts");
/* harmony import */ var _lot_list_lot_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lot-list/lot-list.component */ "./src/app/lot-list/lot-list.component.ts");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/lot.service */ "./src/app/services/lot.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _organisation_lots_organisation_lots_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./organisation-lots/organisation-lots.component */ "./src/app/organisation-lots/organisation-lots.component.ts");
/* harmony import */ var _auction_nav_auction_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auction-nav/auction-nav.component */ "./src/app/auction-nav/auction-nav.component.ts");
/* harmony import */ var _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lot-details/lot-details.component */ "./src/app/lot-details/lot-details.component.ts");
/* harmony import */ var _bid_dialog_bid_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bid-dialog/bid-dialog.component */ "./src/app/bid-dialog/bid-dialog.component.ts");
/* harmony import */ var _notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notification-dialog/notification-dialog.component */ "./src/app/notification-dialog/notification-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./terms-and-conditions/terms-and-conditions.component */ "./src/app/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _organisation_faq_organisation_faq_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./organisation-faq/organisation-faq.component */ "./src/app/organisation-faq/organisation-faq.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_lot_admin_lot_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/admin-lot/admin-lot.component */ "./src/app/admin/admin-lot/admin-lot.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _map_viewer_map_viewer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./map-viewer/map-viewer.component */ "./src/app/map-viewer/map-viewer.component.ts");
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
                _organisation_list_organisation_list_component__WEBPACK_IMPORTED_MODULE_11__["OrganisationListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _organisation_organisation_component__WEBPACK_IMPORTED_MODULE_13__["OrganisationComponent"],
                _map_viewer_map_viewer_component__WEBPACK_IMPORTED_MODULE_37__["MapViewerComponent"],
                _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_20__["LotDetailsComponent"],
                _lot_list_lot_list_component__WEBPACK_IMPORTED_MODULE_14__["LotListComponent"],
                _organisation_lots_organisation_lots_component__WEBPACK_IMPORTED_MODULE_18__["OrganisationLotsComponent"],
                _auction_nav_auction_nav_component__WEBPACK_IMPORTED_MODULE_19__["AuctionNavComponent"],
                _bid_dialog_bid_dialog_component__WEBPACK_IMPORTED_MODULE_21__["BidDialogComponent"],
                _notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_22__["NotificationDialogComponent"],
                _organisation_faq_organisation_faq_component__WEBPACK_IMPORTED_MODULE_30__["OrganisationFaqComponent"],
                _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_29__["TermsAndConditionsComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_33__["AdminComponent"],
                _admin_admin_lot_admin_lot_component__WEBPACK_IMPORTED_MODULE_34__["AdminLotComponent"]
            ],
            entryComponents: [_bid_dialog_bid_dialog_component__WEBPACK_IMPORTED_MODULE_21__["BidDialogComponent"], _notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_22__["NotificationDialogComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["CustomMaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__["FlexLayoutModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatExpansionModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_35__["MatMenuModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_36__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAJRYSde0Y5_YiQrUhUzHtWvrODL0Zv2jQ'
                })
            ],
            providers: [_services_lot_service__WEBPACK_IMPORTED_MODULE_15__["LotService"], _services_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"], { provide: _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_1___default.a, useValue: 'en' }],
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

module.exports = "div.auctionNav {\r\n    width: 200px;\r\n}\r\n\r\nul.menuItemList {\r\n    padding:0;\r\n    margin:0;\r\n}\r\n\r\nul.menuItemList li {\r\n    list-style-type: none;\r\n    border: solid rgb(233, 233, 233);\r\n    border-width: 0px 0px 1px 0px;\r\n}\r\n\r\nul.menuItemList li a {\r\n    text-decoration: none;\r\n    color: #888;\r\n    padding: 12px;\r\n    display: block;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    transition: all .3s ease!important;\r\n}\r\n\r\nul.menuItemList li a:hover {\r\n    background: #888;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/auction-nav/auction-nav.component.html":
/*!********************************************************!*\
  !*** ./src/app/auction-nav/auction-nav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auctionNav\">\r\n\r\n  <ul class=\"menuItemList\">\r\n\r\n    <li>\r\n      <div>\r\n        <a routerLink=\"/{{organisationId}}/lots\">\r\n          All Items\r\n        </a>\r\n      </div>\r\n    </li>\r\n\r\n    <li *ngFor=\"let tag of tags\">\r\n      <div>\r\n        <a routerLink=\"/{{organisationId}}/lots\" [queryParams]=\"{filter: tag}\">\r\n          {{tag}}\r\n        </a>\r\n      </div>\r\n    </li>\r\n\r\n  </ul>\r\n\r\n</div>\r\n"

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
        this.lotService.LoadTags(this.organisationId)
            .subscribe(function (tags) {
            _this.tags = tags;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AuctionNavComponent.prototype, "organisationId", void 0);
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

module.exports = ".checkout mat-form-field {\r\n    font-size: 18px;\r\n    width: 100%;\r\n}\r\n\r\n.checkout .introduction{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-group {\r\n    margin-top: 16px;\r\n}\r\n\r\n.confirmButton {\r\n    background: #4dcc27;\r\n    color: #fff;\r\n}\r\n\r\n.StripeElement {\r\n    margin: 1rem 0 1rem;\r\n    background-color: white;\r\n    padding: 8px 12px;\r\n    border-radius: 4px;\r\n    border: 1px solid transparent;\r\n    box-shadow: 0 1px 3px 0 #e6ebf1;\r\n    transition: box-shadow 150ms ease;\r\n}\r\n\r\n.StripeElement--focus {\r\n    box-shadow: 0 1px 3px 0 #cfd7df;\r\n}\r\n\r\n.StripeElement--invalid {\r\n    border-color: #fa755a;\r\n}\r\n\r\n.StripeElement--webkit-autofill {\r\n    background-color: #fefde5 !important;\r\n}"

/***/ }),

/***/ "./src/app/bid-dialog/bid-dialog.component.html":
/*!******************************************************!*\
  !*** ./src/app/bid-dialog/bid-dialog.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2 mat-dialog-title>Confirm your bid</h2>\r\n\r\n    <form #checkout=\"ngForm\" (ngSubmit)=\"onSubmit(checkout)\" class=\"checkout\">\r\n\r\n        <mat-dialog-content>\r\n            <div class='introduction'>\r\n                <span>In order to confirm your bid, please enter your details below.</span>\r\n                <span *ngIf=\"data.stripeIntegration\">Your card will be pre-authorised and will ONLY be charged if you win the auction.</span>\r\n            </div>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"My Bid\" value=\"£{{data.amount}}\" readonly>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Full Name\" required [(ngModel)]=\"fullName\" name=\"fullName\" #name=\"ngModel\"\r\n                       maxlength=\"40\">\r\n                <mat-error *ngIf=\"name.invalid && (name.dirty || name.touched)\">\r\n                    Please enter your full name\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Email\" [(ngModel)]=\"emailAddress\" id=\"email\" name=\"email\" #email=\"ngModel\"\r\n                       required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" maxlength=\"50\">\r\n                 <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n                    Please enter a valid email address\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Phone\" type=\"tel\" [(ngModel)]=\"phone\" name=\"phone\" #phoneNum=\"ngModel\"\r\n                       pattern=\"^[0-9-+s()]*$\" required maxlength=\"20\">\r\n                <mat-error *ngIf=\"phoneNum.invalid && (phoneNum.dirty || phoneNum.touched)\">\r\n                    Please enter a valid phone number\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <div class=\"form-group\" *ngIf=\"data.stripeIntegration\">\r\n                <label for=\"card-info\">Card Details</label>\r\n                <div id=\"card-info\" #cardInfo></div>\r\n\r\n                <div id=\"card-errors\" class=\"validationErrorText\" role=\"alert\" *ngIf=\"error\">{{ error }}</div>\r\n            </div>\r\n        </mat-dialog-content>\r\n\r\n        <mat-dialog-actions align=\"end\">\r\n            <button mat-raised-button type=\"button\" (click)=\"onCloseCancel()\">CANCEL</button>\r\n            <button mat-raised-button class=\"confirmButton\" type=\"submit\"\r\n                    [disabled]=\"!checkout.valid || isBidInProgress\">CONFIRM BID\r\n            </button>\r\n        </mat-dialog-actions>\r\n\r\n    </form>\r\n\r\n\r\n</div>"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/lot.service */ "./src/app/services/lot.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var BidDialogComponent = /** @class */ (function () {
    function BidDialogComponent(thisDialogRef, data, lotService, cd) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.lotService = lotService;
        this.cd = cd;
        this.cardHandler = this.onChange.bind(this);
        this.isBidInProgress = false;
    }
    BidDialogComponent.prototype.ngOnDestroy = function () {
        if (this.data.stripeIntegration) {
            this.card.removeEventListener('change', this.cardHandler);
            this.card.destroy();
        }
    };
    BidDialogComponent.prototype.onChange = function (_a) {
        var error = _a.error;
        if (error) {
            this.error = error.message;
        }
        else {
            this.error = null;
        }
        this.cd.detectChanges();
    };
    BidDialogComponent.prototype.ngAfterViewInit = function () {
        if (this.data.stripeIntegration) {
            this.card = elements.create('card');
            this.card.mount(this.cardInfo.nativeElement);
            this.card.addEventListener('change', this.cardHandler);
        }
    };
    BidDialogComponent.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, token, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isBidInProgress = true;
                        if (!this.data.stripeIntegration) return [3 /*break*/, 2];
                        return [4 /*yield*/, stripe.createToken(this.card)];
                    case 1:
                        _a = _b.sent(), token = _a.token, error = _a.error;
                        if (error) {
                            console.log('Something is wrong:', error);
                            this.isBidInProgress = false;
                        }
                        else {
                            console.log('Success!', token);
                            this.lotService.PlaceBid(this.data.lotId, this.fullName, this.emailAddress, this.phone, this.data.amount, token.id)
                                .subscribe((function (result) {
                                _this.isBidInProgress = false;
                                _this.thisDialogRef.close(true);
                            }));
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.lotService.PlaceBid(this.data.lotId, this.fullName, this.emailAddress, this.phone, this.data.amount, null)
                            .subscribe((function (result) {
                            _this.isBidInProgress = false;
                            _this.thisDialogRef.close(true);
                        }));
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BidDialogComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('cardInfo'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], BidDialogComponent.prototype, "cardInfo", void 0);
    BidDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-bid-dialog',
            template: __webpack_require__(/*! ./bid-dialog.component.html */ "./src/app/bid-dialog/bid-dialog.component.html"),
            styles: [__webpack_require__(/*! ./bid-dialog.component.css */ "./src/app/bid-dialog/bid-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object, _services_lot_service__WEBPACK_IMPORTED_MODULE_1__["LotService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], BidDialogComponent);
    return BidDialogComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    color: white;\r\n    padding: 0 16px 0 16px;\r\n    z-index: 1000;\r\n    font-weight: 200;\r\n    margin-top: 60px;\r\n}\r\n\r\n.footerRow1{\r\n    border-bottom: 1px white solid;      \r\n}\r\n\r\n.contactDetails{\r\n    min-width: 150px; \r\n    padding: 16px 0 16px 0;\r\n}\r\n\r\n.contactDetails a{\r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 14px;\r\n    display: block;\r\n    text-align: center;  \r\n}\r\n\r\n.contactDetails .email{\r\n    padding-bottom:10px\r\n}\r\n\r\n.contactDetails span{\r\n    position: relative;\r\n    top: -6px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.logo{\r\n    float: left;\r\n    text-align: center;\r\n    width: 300px;\r\n    padding: 16px 0 16px 0;\r\n}\r\n\r\n.logo label{\r\n    position: relative;\r\n    top: -13px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.social{\r\n    min-width: 150px;\r\n    text-align: center; \r\n    padding: 16px 0 16px 0;\r\n}\r\n\r\n.social ul {\r\n    list-style: none;\r\n    padding-left: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.social ul li {\r\n    display: inline-block;\r\n    font-size: 20px;\r\n    \r\n}\r\n\r\n.social a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.social .centerIcon{\r\n    padding: 0 20px 0 20px;\r\n}\r\n\r\n.termsConditions {\r\n    min-width: 150px;\r\n    text-align: center;\r\n    padding: 16px 0 16px 0;\r\n}\r\n\r\n.termsConditions a {\r\n    color: white;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n}\r\n\r\n.version {\r\n    width: 300px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    padding: 16px 0 16px 0;\r\n}\r\n\r\n.copyright {\r\n    min-width:150px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    padding: 16px 0 16px 0;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\" [ngStyle]=\"{ 'background-color': colour }\">\r\n  \r\n  <!-- lt-md = 'littler than - medium' or smaller than 959px -->\r\n  <div class=\"footerRow1\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"space-between flex-start\" fxLayoutAlign.lt-md=\"center center\">\r\n\r\n    <div class=\"contactDetails\" fxFlexOrder.lt-md=\"3\">\r\n      <div class=\"email\">\r\n        <a href=\"mailto:info@goinggone.io\">\r\n          <mat-icon>email</mat-icon>\r\n          <span>info@goinggone.io</span>\r\n        </a>\r\n      </div>\r\n\r\n      <div>\r\n        <a href=\"http://goinggone.io\">\r\n          <mat-icon>language</mat-icon>\r\n          <span>www.goinggone.io</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"logo\" fxFlexOrder.lt-md=\"1\">\r\n      <label fxHide.lt-md=\"true\">Powered by:</label>\r\n      <a routerLink=\"/home\">\r\n        <img src=\"../../assets/images/gg_small_logo.png\"/>\r\n      </a>\r\n\r\n      <p>If you would like to use the Going Gone system at your next event, please don't hesitate to get in touch at info@goinggone.io.</p>\r\n    </div>\r\n\r\n    <div class=\"social\" fxFlexOrder.lt-md=\"2\">\r\n      <ul>\r\n        <li>\r\n          <a href=\"https://www.facebook.com/goinggonetechnology\">\r\n            <i class=\"fa fa-facebook\"></i>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"centerIcon\">\r\n          <a href=\"https://www.instagram.com/goinggonetechnology\">\r\n            <i class=\"fa fa-instagram\"></i>\r\n          </a>\r\n        </li>\r\n\r\n        <li>\r\n          <a href=\"https://www.linkedin.com/company-beta/17881204/\">\r\n            <i class=\"fa fa-linkedin\"></i>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"footerRow2\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"space-between flex-start\" fxLayoutAlign.lt-md=\"center center\">\r\n    <div class=\"termsConditions\">\r\n      <a routerLink=\"/terms-and-conditions\">\r\n        <span>Terms &  Conditions</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"version\">\r\n      <span>Version 2.0.0</span>\r\n    </div>\r\n\r\n    <div class=\"copyright\">\r\n      <div>\r\n        <span>© Copyright 2018. Going Gone.</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FooterComponent.prototype, "colour", void 0);
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

module.exports = ".app-toolbar {\r\n    /* position: sticky;\r\n    position: -webkit-sticky;  */\r\n    position: fixed;\r\n    top: 0; \r\n    z-index: 1000;\r\n    height:56px;\r\n}\r\n\r\n.app-toolbar img{\r\n    padding-top: 7px;\r\n}\r\n\r\n.app-toolbar button{\r\n    position: fixed;\r\n    right: 16px;\r\n    color:white;\r\n}\r\n\r\n.quicklinks-container {\r\n    position: fixed;\r\n    right: 0px;\r\n}\r\n\r\n.quicklinks-container ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.quicklinks-container li {\r\n    float: left;\r\n}\r\n\r\n.quicklinks-container a {\r\n    background-color: transparent;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 18px 20px;\r\n    text-decoration: none;\r\n    font-size: 14px;\r\n    opacity: 0.9;\r\n}\r\n\r\n.quicklinks-container a:hover {\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar [ngStyle]=\"{ 'background-color': colour }\" class='app-toolbar mat-elevation-z4'>\r\n    <div class=\"logo-container\">\r\n        <a href=\"http://goinggone.io\">\r\n            <img src=\"../../assets/images/gg_small_logo.png\"/>\r\n        </a>\r\n    </div>\r\n    <div class=\"quicklinks-container\" fxHide.xs=\"true\">\r\n        <ul>\r\n            <li>\r\n                <a routerLink=\"/{{organisationId}}\">Overview</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/{{organisationId}}/lots\">Auction</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/{{organisationId}}/faq\">FAQ</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <button type=\"button\" mat-icon-button [matMenuTriggerFor]=\"menu\" fxShow=\"false\" fxShow.xs=\"true\">\r\n        <mat-icon>menu</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item routerLink=\"/{{organisationId}}\">Overview</button>\r\n        <button mat-menu-item routerLink=\"/{{organisationId}}/lots\">Auction</button>\r\n        <button mat-menu-item routerLink=\"/{{organisationId}}/faq\">FAQ</button>\r\n    </mat-menu>\r\n\r\n</mat-toolbar>"

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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "organisationId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "colour", void 0);
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

module.exports = ".background {\n    background-color: rgb(238, 238, 238);\n    background-size: cover;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: -1;\n}\n\n.title {\n    margin: 100px auto 50px;\n    text-align: center;\n    font-size: 42px;\n    color: black;\n}\n\n.adminLinkContainer {\n    text-align: center;\n}\n\n.adminLinkContainer a {\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n\n<p class=\"title\">Welcome to Going Gone!</p>\n\n<app-organisation-list></app-organisation-list>\n\n<div class=\"adminLinkContainer\">\n    <a routerLink=\"/admin\">\n        Admin Page\n    </a>\n</div>\n"

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

module.exports = ".background {\r\n    background-color: rgb(238, 238, 238);\r\n    background-size: cover;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.content{\r\n    position: relative;\r\n    top: 56px;\r\n}\r\n\r\n.pageHeader {\r\n    color: white;\r\n    margin: 0 0 0 0px;\r\n    padding: 20px;\r\n    background-color: rgb(0, 43, 136);\r\n    opacity: 0.9;\r\n    width: auto;\r\n    font-weight: normal;\r\n    text-align: left;\r\n    font-size: 20px;\r\n    margin-bottom: 60px;\r\n\r\n}\r\n\r\n.pageHeader a {\r\n    color: white;\r\n}\r\n\r\n.pageHeader mat-icon {\r\n    padding-right: 10px;\r\n    position: relative;\r\n    top: 5px;\r\n    \r\n}\r\n\r\nmat-card.lotDetailsCard{\r\n    padding: 12px;\r\n}\r\n\r\nmat-card.lotDetailsCard.inputCard{\r\n    height: 100%;\r\n}\r\n\r\n.lotDetailsCard .lotPricing {\r\n    margin: 10px auto;\r\n    text-align: left;\r\n}\r\n\r\n.lotDetailsCard .lotPricing div {\r\n    display: inline-block;\r\n    width: 100px;\r\n    font-size: 18px;\r\n}\r\n\r\n.lotDetailsCard mat-form-field {\r\n    flex: 1;\r\n}\r\n\r\n.lotDetailsCard button {\r\n    flex: 1;\r\n    min-width: 150px;\r\n}\r\n\r\n.containerRow{\r\n    max-width: 980px;\r\n    margin: 20px auto 20px !important;\r\n    padding: 0px 10px 0px 10px;\r\n}\r\n\r\n.containerRow.secondRow{\r\n    position: relative;\r\n    top: -20px;\r\n}\r\n\r\n.lotContentContainer{\r\n    flex: 1 0 0;\r\n    padding: 12px;\r\n    align-items: center;\r\n    /* min-width: 350px; */\r\n}\r\n\r\n.lotContentContainer .lotDetailsCard{\r\n    align-items: center;\r\n}\r\n\r\n.lotContentContainer img {\r\n    width: 100%;\r\n    max-width: 600px;\r\n}\r\n\r\n.bidButton {\r\n    background: #4dcc27;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    padding: 5px;\r\n}\r\n\r\n.bidButton mat-icon {\r\n    padding-right: 8px;\r\n}"

/***/ }),

/***/ "./src/app/lot-details/lot-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/lot-details/lot-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\r\n\r\n<app-header [organisationId]=\"organisationId\" [colour]=\"Organisation.primaryColour\"></app-header>\r\n\r\n<div class=\"content\">\r\n    <div class=\"pageHeader\" [ngStyle]=\"{ 'background-color': Organisation.primaryColour}\">\r\n        <a routerLink=\"/{{organisationId}}/lots\"><mat-icon>arrow_back</mat-icon></a>\r\n        <span>{{ lot.title }}</span>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" class=\"containerRow firstRow\" >\r\n\r\n        <div class=\"lotContentContainer\" fxFlex=\"1 1 40%\" fxFlex.lt-md=\"1 1 50%\">\r\n            <mat-card class=\"lotDetailsCard\">\r\n                <div class='lotPricing firstRow'>\r\n                    <div class='label'>Reserve: </div>\r\n                    <div class='value'>£{{lot.reservePrice}}</div>\r\n                </div>  \r\n        \r\n                <div class='lotPricing'>\r\n                    <div class='label'>Estimate: </div>\r\n                    <div class='value'>£{{lot.estimate}}</div>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n\r\n        <div class=\"lotContentContainer\" fxFlex=\"1 1 60%\" fxFlex.lt-md=\"1 1 50%\">\r\n            <mat-card class=\"lotDetailsCard inputCard\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\">\r\n                    <mat-form-field>\r\n                        <input matInput [(ngModel)]=\"amount\" type=\"number\" placeholder=\"My Bid (minimum £{{lot.reservePrice}})\" autofocus>\r\n                        <mat-hint>Currency: GBP</mat-hint>\r\n                    </mat-form-field>\r\n                    \r\n                    <button mat-raised-button class=\"bidButton\" [disabled]=\"amount < lot.reservePrice\" (click)=\"openBidPopup()\" ngStyle.lt-sm=\"margin-top: 10px;\" >\r\n                        <mat-icon>gavel</mat-icon><span>PLACE BID</span>\r\n                    </button>\r\n\r\n            </mat-card>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" class=\"containerRow secondRow\">\r\n        <div class=\"lotContentContainer\" fxFlex=\"1 1 40%\" fxFlex.lt-md=\"1 1 50%\" fxLayoutAlign=\"start start\" fxLayoutAlign.lt-md=\"center start\">\r\n                <img src=\"{{lot.imageUri}}\"/>\r\n        </div> \r\n        \r\n        <div class=\"lotContentContainer\" fxFlex=\"1 1 60%\" fxFlex.lt-md=\"1 1 50%\" [innerHTML]=\"lot.description\">\r\n\r\n        </div>\r\n    \r\n    </div>\r\n\r\n    <app-footer [colour]=\"Organisation.primaryColour\"></app-footer>\r\n\r\n</div>"

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
/* harmony import */ var _services_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/organisation.service */ "./src/app/services/organisation.service.ts");
/* harmony import */ var _common_models_Organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/Organisation */ "./common/models/Organisation.ts");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/lot.service */ "./src/app/services/lot.service.ts");
/* harmony import */ var _common_models_Lot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/models/Lot */ "./common/models/Lot.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bid_dialog_bid_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bid-dialog/bid-dialog.component */ "./src/app/bid-dialog/bid-dialog.component.ts");
/* harmony import */ var _notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notification-dialog/notification-dialog.component */ "./src/app/notification-dialog/notification-dialog.component.ts");
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
    function LotDetailsComponent(organisationService, lotService, route, dialog) {
        var _this = this;
        this.organisationService = organisationService;
        this.lotService = lotService;
        this.route = route;
        this.dialog = dialog;
        this.lotId = '';
        this.organisationId = '';
        this.lot = new _common_models_Lot__WEBPACK_IMPORTED_MODULE_5__["Lot"]('', '', '', '', '', '', 0, 0, [], 0, 0, [], '');
        this.Organisation = new _common_models_Organisation__WEBPACK_IMPORTED_MODULE_3__["Organisation"]('', '', '', '', '', '', '', '', '', new Date(), '', '', '', '', [], false);
        this.amount = '';
        this.route.params.subscribe(function (params) {
            _this.organisationId = params.organisationId;
            _this.lotId = params.lotId;
            lotService.LoadLot(params.lotId).subscribe(function (lot) {
                _this.lot = lot;
            });
            organisationService.LoadOrganisationById(params.organisationId).subscribe(function (organisation) {
                _this.Organisation = organisation;
            });
        });
    }
    LotDetailsComponent.prototype.openBidPopup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_bid_dialog_bid_dialog_component__WEBPACK_IMPORTED_MODULE_7__["BidDialogComponent"], {
            width: '600px',
            disableClose: true,
            data: {
                lotId: this.lotId,
                amount: this.amount,
                stripeIntegration: this.Organisation.stripeIntegration
            }
        });
        dialogRef.afterClosed().subscribe(function (success) {
            if (success) {
                _this.openBidConfirmedDialog();
            }
        });
    };
    LotDetailsComponent.prototype.openBidConfirmedDialog = function () {
        this.dialog.open(_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_8__["NotificationDialogComponent"], {
            width: '400px',
            disableClose: true,
            data: {
                title: 'Bid placed',
                body: 'Your bid has been placed. Thank you for your contribution!'
            }
        });
    };
    LotDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lot-details',
            template: __webpack_require__(/*! ./lot-details.component.html */ "./src/app/lot-details/lot-details.component.html"),
            styles: [__webpack_require__(/*! ./lot-details.component.css */ "./src/app/lot-details/lot-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_organisation_service__WEBPACK_IMPORTED_MODULE_2__["OrganisationService"], _services_lot_service__WEBPACK_IMPORTED_MODULE_4__["LotService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
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

module.exports = ".lotContainer{\r\n    width:100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.lotCard mat-card{\r\n    width: 275px;\r\n    margin-top: 12px;\r\n    padding: 0 12px 12px 12px;\r\n}\r\n\r\n.lotCard mat-card:hover {\r\n    box-shadow: 0 5px 12px -7px rgba(0, 0, 0, 0.22), 0 9px 19px -3px rgba(0, 0, 0, 0.3);\r\n  }\r\n\r\n.lotCard img{\r\n    /* margin: -24px auto 0; */\r\n    max-width:100%;\r\n    border-radius: 2px;\r\n    position: relative;\r\n    top: -12px;\r\n}\r\n\r\n.lotCard mat-card-title{\r\n    text-align:center;\r\n    margin-bottom: 12px;\r\n    font-size: 22px;\r\n    min-height: 50px;\r\n}\r\n\r\n.lotCard mat-card-content{\r\n    border-top: 1px solid #eee;\r\n    padding-top: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.lotCard mat-card-actions{\r\n    text-align: center;\r\n    margin: 0px 0px 0px 0px;\r\n    padding: 0px;\r\n\r\n}\r\n\r\n.lotCard button{\r\n    width: 100%;\r\n    background: #4dcc27;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n}\r\n\r\n.lotCard button:hover {\r\n    background: #3ea120;\r\n}\r\n\r\n.lotCard mat-icon{\r\n    height: 27px;\r\n    width: 27px;\r\n}\r\n\r\n.lotCard .lotPricing {\r\n    margin: 14px auto;\r\n    text-align: left;\r\n}\r\n\r\n.lotCard .lotPricing div {\r\n    display: inline-block;\r\n    width: 100px;\r\n    font-size: 18px;\r\n}\r\n\r\n.lotCard .value{\r\n    font-weight: bold;\r\n}\r\n\r\n/* .lotContainer .name {\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    padding: 25px 0 45px;\r\n    border-bottom: 1px solid #EEE;\r\n}\r\n\r\n.lotContainer .price {\r\n    font-weight: bold;\r\n    margin: 14px auto;\r\n    text-align: left;\r\n}\r\n\r\n.lotContainer .price div {\r\n    display: inline-block;\r\n    width: 100px;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n}\r\n\r\n.lotContainer div.imageContainer {\r\n    position: relative;\r\n}\r\n\r\n.lotContainer div.providedBy {\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 4px;\r\n    text-align: center!important;\r\n    padding: 8px 0;\r\n    background: rgba(207,207,207,.8);\r\n    border-radius: 0 0 4px 4px;\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\r\n\r\n.lotContainer img {\r\n    margin: -24px auto 0;\r\n    height: 200px;\r\n    width: 100%;\r\n    background: #cdcecd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.lotsButtonContainer {\r\n    margin: 10px auto;\r\n    text-align: center;\r\n}\r\n\r\n.viewButton {\r\n    width: 100%;\r\n    background: #4dcc27;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    padding: 5px 0;\r\n} */"

/***/ }),

/***/ "./src/app/lot-list/lot-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/lot-list/lot-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n    <div class=\"lotContainer\" fxLayout=\"row\" fxLayoutGap=\"20px grid\">\r\n\r\n        <div class=\"lotCard\" *ngFor=\"let lot of Lots\">\r\n            <mat-card>\r\n                \r\n                <img class=\"mat-elevation-z4\" src=\"{{lot.imageUri}}\"/>\r\n\r\n                <mat-card-title>\r\n                    {{lot.title}}\r\n                </mat-card-title>\r\n\r\n                <mat-card-content>\r\n\r\n                    <div class='lotPricing'>\r\n                        <div class='label'>Reserve: </div>\r\n                        <div class='value'>£{{lot.reservePrice}}</div>\r\n                    </div>  \r\n\r\n                    <div class='lotPricing'>\r\n                        <div class='label'>Estimate: </div>\r\n                        <div class='value'>£{{lot.estimate}}</div>\r\n                    </div>\r\n     \r\n                </mat-card-content>\r\n\r\n                <mat-card-actions>\r\n                    <button mat-raised-button [disabled]=\"lot.winningBidId\" routerLink=\"/{{organisationId}}/lot/{{lot.lotId}}\">\r\n                        <mat-icon>visibility</mat-icon>\r\n                        <span *ngIf=\"lot.winningBidId\">Sold</span>\r\n                        <span *ngIf=\"!lot.winningBidId\">View</span>\r\n                    </button>\r\n                </mat-card-actions>\r\n\r\n                \r\n            </mat-card>\r\n        </div>\r\n\r\n    </div>\r\n    \r\n    \r\n    <!-- <div class=\"lotContainer child\" *ngFor=\"let lot of Lots\">\r\n\r\n        <div class=\"imageContainer\">\r\n            <div class=\"providedBy\">\r\n                Provided by: {{lot.providedBy}}\r\n            </div>\r\n            <img src=\"{{lot.imageUri}}\"/>\r\n        </div>\r\n\r\n        <div class=\"name\">{{lot.title}}</div>\r\n\r\n        <div class=\"price\">\r\n            <div class=\"label\">\r\n                Reserve:\r\n            </div>\r\n            <div class=\"amount\">\r\n                £{{lot.reservePrice}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n            <div class=\"label\">\r\n                Estimate:\r\n            </div>\r\n            <div class=\"amount\">\r\n                £{{lot.estimate}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"lotsButtonContainer\">\r\n            <button mat-raised-button class=\"viewButton\"\r\n                    routerLink=\"/club/{{clubId}}/lot/{{lot.lotId}}\">\r\n                View\r\n            </button>\r\n        </div>\r\n\r\n    </div> -->\r\n\r\n</div>"

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
                _this.lotService.LoadLotsForTag(_this.organisationId, params.filter)
                    .subscribe(function (lots) { return _this.Lots = lots; });
            }
            else {
                _this.lotService.LoadLots(_this.organisationId)
                    .subscribe(function (lots) { return _this.Lots = lots; });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LotListComponent.prototype, "organisationId", void 0);
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

/***/ "./src/app/map-viewer/map-viewer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/map-viewer/map-viewer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n    height: 200px;\r\n}\r\n\r\n#map {\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/map-viewer/map-viewer.component.html":
/*!******************************************************!*\
  !*** ./src/app/map-viewer/map-viewer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map [zoom]=\"15\" [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n</agm-map>"

/***/ }),

/***/ "./src/app/map-viewer/map-viewer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/map-viewer/map-viewer.component.ts ***!
  \****************************************************/
/*! exports provided: MapViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewerComponent", function() { return MapViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapViewerComponent = /** @class */ (function (_super) {
    __extends(MapViewerComponent, _super);
    function MapViewerComponent(__loader, __zone) {
        var _this = _super.call(this, __loader, __zone) || this;
        _this.__loader = __loader;
        _this.__zone = __zone;
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MapViewerComponent.prototype, "latitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MapViewerComponent.prototype, "longitude", void 0);
    MapViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-viewer',
            template: __webpack_require__(/*! ./map-viewer.component.html */ "./src/app/map-viewer/map-viewer.component.html"),
            styles: [__webpack_require__(/*! ./map-viewer.component.css */ "./src/app/map-viewer/map-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], MapViewerComponent);
    return MapViewerComponent;
}(_agm_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]));



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

/***/ "./src/app/notification-dialog/notification-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/notification-dialog/notification-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-dialog-actions {\n    float: right;\n    margin-top: 10px;\n}\n\nmat-dialog-content {\n    line-height: 22px;\n    color: #757575;\n}"

/***/ }),

/***/ "./src/app/notification-dialog/notification-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/notification-dialog/notification-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2 mat-dialog-title>{{data.title}}</h2>\n\n    <mat-dialog-content>\n        {{data.body}}\n    </mat-dialog-content>\n\n    <mat-dialog-actions>\n        <button mat-raised-button (click)=\"onCloseOk()\">OK</button>&nbsp;\n    </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/notification-dialog/notification-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/notification-dialog/notification-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDialogComponent", function() { return NotificationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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



var NotificationDialogComponent = /** @class */ (function () {
    function NotificationDialogComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    NotificationDialogComponent.prototype.ngOnInit = function () {
    };
    NotificationDialogComponent.prototype.onCloseOk = function () {
        this.thisDialogRef.close();
    };
    NotificationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-dialog',
            template: __webpack_require__(/*! ./notification-dialog.component.html */ "./src/app/notification-dialog/notification-dialog.component.html"),
            styles: [__webpack_require__(/*! ./notification-dialog.component.css */ "./src/app/notification-dialog/notification-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NotificationDialogComponent);
    return NotificationDialogComponent;
}());



/***/ }),

/***/ "./src/app/organisation-faq/organisation-faq.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/organisation-faq/organisation-faq.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n    background-color: rgb(238, 238, 238);\r\n    background-size: cover;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.content{\r\n    position: relative;\r\n    top:56px;\r\n}\r\n\r\n.pageHeader {\r\n    color: white;\r\n    margin: 0 0 0 0px;\r\n    padding: 20px;\r\n    opacity: 0.9;\r\n    width: auto;\r\n    font-weight: normal;\r\n    text-align: left;\r\n    font-size: 20px;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.accordionContainer{\r\n    max-width: 980px;\r\n    margin: 20px auto 20px !important;\r\n    padding: 0 10px 0 10px;\r\n}"

/***/ }),

/***/ "./src/app/organisation-faq/organisation-faq.component.html":
/*!******************************************************************!*\
  !*** ./src/app/organisation-faq/organisation-faq.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [organisationId]=\"organisationId\" [colour]=\"Organisation.primaryColour\"></app-header>\r\n\r\n<div class=\"background\"></div>\r\n\r\n<div class=\"content\">\r\n\r\n    <div class=\"pageHeader\" [ngStyle]=\"{ 'background-color': Organisation.primaryColour}\">\r\n        <span>Frequently Asked Questions</span>\r\n    </div>\r\n\r\n    <div class='accordionContainer'>\r\n\r\n        <mat-accordion>\r\n            <mat-expansion-panel *ngFor=\"let faq of Organisation.faqs\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    {{faq.question}}\r\n                </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n                <div class=\"answerHTML\" [innerHTML]=\"faq.answer\"></div>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n\r\n    </div>\r\n\r\n    <app-footer [colour]=\"Organisation.primaryColour\"></app-footer>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/organisation-faq/organisation-faq.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/organisation-faq/organisation-faq.component.ts ***!
  \****************************************************************/
/*! exports provided: OrganisationFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationFaqComponent", function() { return OrganisationFaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/organisation.service */ "./src/app/services/organisation.service.ts");
/* harmony import */ var _common_models_Organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/Organisation */ "./common/models/Organisation.ts");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/lot.service */ "./src/app/services/lot.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrganisationFaqComponent = /** @class */ (function () {
    function OrganisationFaqComponent(organisationService, lotService, route) {
        var _this = this;
        this.organisationService = organisationService;
        this.lotService = lotService;
        this.route = route;
        this.organisationId = '';
        this.Organisation = new _common_models_Organisation__WEBPACK_IMPORTED_MODULE_3__["Organisation"]('', '', '', '', '', '', '', '', '', new Date(), '', '', '', '', [], false);
        this.route.params.subscribe(function (params) {
            _this.organisationId = params.organisationId;
            organisationService.LoadOrganisationById(params.organisationId)
                .subscribe(function (organisation) {
                _this.Organisation = organisation;
                console.log(organisation.faqs);
            });
        });
    }
    OrganisationFaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organisation-faq',
            template: __webpack_require__(/*! ./organisation-faq.component.html */ "./src/app/organisation-faq/organisation-faq.component.html"),
            styles: [__webpack_require__(/*! ./organisation-faq.component.css */ "./src/app/organisation-faq/organisation-faq.component.css")]
        }),
        __metadata("design:paramtypes", [_services_organisation_service__WEBPACK_IMPORTED_MODULE_2__["OrganisationService"], _services_lot_service__WEBPACK_IMPORTED_MODULE_4__["LotService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OrganisationFaqComponent);
    return OrganisationFaqComponent;
}());



/***/ }),

/***/ "./src/app/organisation-list/organisation-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/organisation-list/organisation-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    text-align: center;\n    color: white;\n    margin: 10px auto;\n    padding: 8px;\n    background-color: #333;\n    opacity: 0.9;\n    border-radius: 10px;\n    max-width: 400px;\n}\n\n.orgContainer {\n    background-color: white;\n    width: 280px;\n    padding: 5px;\n    border-radius: 12px;\n    text-align: center;\n    margin: 20px auto;\n}\n\n.orgContainer .title {\n    font-weight: bold;\n}\n\n.orgContainer .title a {\n    display: block;\n    text-decoration: none;\n    color: black;\n    font-size: 24px;\n}\n\n.orgContainer .orgLogo {\n    height: 120px;\n}"

/***/ }),

/***/ "./src/app/organisation-list/organisation-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/organisation-list/organisation-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  Our Partners\n</h2>\n\n<div class=\"orgContainer\" *ngFor=\"let org of Organisations\">\n  <div class=\"title\">\n    <a routerLink=\"/{{org.organisationId}}\">\n      <img class=\"orgLogo\" src=\"{{org.logoUrl}}\"/>\n      <div>{{org.title}}</div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/organisation-list/organisation-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/organisation-list/organisation-list.component.ts ***!
  \******************************************************************/
/*! exports provided: OrganisationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationListComponent", function() { return OrganisationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_organisation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/organisation.service */ "./src/app/services/organisation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrganisationListComponent = /** @class */ (function () {
    function OrganisationListComponent(organisationService) {
        this.organisationService = organisationService;
        this.Organisations = [];
    }
    OrganisationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.organisationService.LoadOrganisations()
            .subscribe(function (organisations) { return _this.Organisations = organisations; });
    };
    OrganisationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organisation-list',
            template: __webpack_require__(/*! ./organisation-list.component.html */ "./src/app/organisation-list/organisation-list.component.html"),
            styles: [__webpack_require__(/*! ./organisation-list.component.css */ "./src/app/organisation-list/organisation-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_organisation_service__WEBPACK_IMPORTED_MODULE_1__["OrganisationService"]])
    ], OrganisationListComponent);
    return OrganisationListComponent;
}());



/***/ }),

/***/ "./src/app/organisation-lots/organisation-lots.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/organisation-lots/organisation-lots.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n    background-color: rgb(238, 238, 238);\r\n    background-size: cover;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n}\r\n\r\nh1 {\r\n    color: white;\r\n    padding: 20px;\r\n    background-color: rgb(0, 43, 136);\r\n    opacity: 0.9;\r\n    width: auto;\r\n    font-weight: normal;\r\n    text-align: left;\r\n    font-size: 20px;\r\n    margin: 56px 0 20px;\r\n}\r\n\r\nbutton .menu {\r\n    position: relative;\r\n    top: -3px;\r\n}\r\n\r\n.sideNav {\r\n    position: fixed;\r\n    top: 56px;\r\n}\r\n\r\n.lots {\r\n    margin: 20px;\r\n    min-height: 350px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/organisation-lots/organisation-lots.component.html":
/*!********************************************************************!*\
  !*** ./src/app/organisation-lots/organisation-lots.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [organisationId]=\"organisationId\" [colour]=\"Organisation.primaryColour\"></app-header>\r\n\r\n<div class=\"background\"></div>\r\n\r\n<mat-sidenav-container class=\"fullscreenContainer\" fullscreen>\r\n\r\n    <mat-sidenav [mode]=\"(screenWidth > 600) ? 'side' : 'over'\" [opened]=\"screenWidth > 600\" class=\"sideNav\" #sidenav>\r\n    <div class=\"nav\">\r\n        <app-auction-nav [organisationId]=\"organisationId\"></app-auction-nav>\r\n    </div>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content class=\"page-wrap\">\r\n\r\n        <h1 [ngStyle]=\"{ 'background-color': Organisation.primaryColour}\">\r\n            <button type=\"button\" mat-icon-button (click)=\"sidenav.toggle()\" title=\"Filter results\" class=\"menu\"\r\n                    [ngStyle]=\"{'display' : (screenWidth > 600) ? 'none' : 'inline-block',\r\n                                'top' : '-3px'}\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n            {{ Organisation.title }} Auction\r\n        </h1>\r\n\r\n        <div class=\"lots\">\r\n            <app-lot-list [organisationId]=\"organisationId\"></app-lot-list>\r\n        </div>\r\n\r\n        <app-footer [colour]=\"Organisation.primaryColour\"></app-footer>\r\n\r\n    </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/organisation-lots/organisation-lots.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/organisation-lots/organisation-lots.component.ts ***!
  \******************************************************************/
/*! exports provided: OrganisationLotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationLotsComponent", function() { return OrganisationLotsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/organisation.service */ "./src/app/services/organisation.service.ts");
/* harmony import */ var _common_models_Organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/Organisation */ "./common/models/Organisation.ts");
/* harmony import */ var _services_lot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/lot.service */ "./src/app/services/lot.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrganisationLotsComponent = /** @class */ (function () {
    function OrganisationLotsComponent(organisationService, lotService, route) {
        var _this = this;
        this.organisationService = organisationService;
        this.lotService = lotService;
        this.route = route;
        this.organisationId = '';
        this.Organisation = new _common_models_Organisation__WEBPACK_IMPORTED_MODULE_3__["Organisation"]('', '', '', '', '', '', '', '', '', new Date(), '', '', '', '', [], false);
        this.screenWidth = window.innerWidth;
        this.route.params.subscribe(function (params) {
            _this.organisationId = params.organisationId;
            organisationService.LoadOrganisationById(params.organisationId)
                .subscribe(function (organisation) {
                _this.Organisation = organisation;
            });
        });
    }
    OrganisationLotsComponent.prototype.onResize = function (event) {
        this.screenWidth = event.target.innerWidth;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"])
    ], OrganisationLotsComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OrganisationLotsComponent.prototype, "onResize", null);
    OrganisationLotsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organisation-lots',
            template: __webpack_require__(/*! ./organisation-lots.component.html */ "./src/app/organisation-lots/organisation-lots.component.html"),
            styles: [__webpack_require__(/*! ./organisation-lots.component.css */ "./src/app/organisation-lots/organisation-lots.component.css")]
        }),
        __metadata("design:paramtypes", [_services_organisation_service__WEBPACK_IMPORTED_MODULE_2__["OrganisationService"], _services_lot_service__WEBPACK_IMPORTED_MODULE_4__["LotService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OrganisationLotsComponent);
    return OrganisationLotsComponent;
}());



/***/ }),

/***/ "./src/app/organisation/organisation.component.css":
/*!*********************************************************!*\
  !*** ./src/app/organisation/organisation.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n    background-color: rgb(238, 238, 238);\r\n    background-size: cover;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.content{\r\n    position: relative;\r\n    top: 56px;\r\n}\r\n\r\n.headerSection {\r\n    height: 350px;\r\n    background-color: rgb(0, 43, 136);\r\n    margin-bottom: 60px;\r\n    align-items: center;\r\n}\r\n\r\n.headerSection h1 {\r\n    color: white;\r\n    font-size: 24px;\r\n    font-weight: normal;\r\n    margin-bottom: 0px; \r\n    padding: 0px 10px 0px 10px;  \r\n}\r\n\r\n.headerSection h2 {\r\n    color: white;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    padding: 0px 10px 0px 10px;\r\n    text-align: center;\r\n}\r\n\r\n.orgLogo {\r\n    height: 160px;\r\n    padding-top: 50px;\r\n}\r\n\r\n.orgLogo img {\r\n    height: 160px;\r\n}\r\n\r\n.bannerContainer {\r\n    padding: 0px 10px 0px 10px;\r\n}\r\n\r\n.banner {\r\n    padding: 40px;\r\n    background: center/cover no-repeat #789;\r\n    min-height: 160px;\r\n    max-width: 880px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.bannerText {\r\n    font-size: 30px;\r\n    background: rgba(0,0,0,0.38);\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    padding: 0 10px;\r\n    -webkit-box-decoration-break: clone;\r\n    -ms-box-decoration-break: clone;\r\n    -o-box-decoration-break: clone;\r\n    box-decoration-break: clone;\r\n}\r\n\r\n.lotsButtonContainer {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n}\r\n\r\n.lotsButton {\r\n    text-transform: uppercase;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.introductionContainer {\r\n    max-width: 980px;\r\n    margin: 35px auto 35px;\r\n    padding: 0px 10px 0px 10px;\r\n}\r\n\r\n.introductionText {\r\n    font-size: 15px;\r\n}\r\n\r\n.infoCardContainerRow{\r\n    max-width: 980px;\r\n    margin: 20px auto 20px !important;\r\n    padding: 0px 10px 0px 10px;\r\n    /* flex-flow: row wrap; */\r\n}\r\n\r\nmat-card.infoCard {\r\n    padding: 10px !important;\r\n    /* min-width: 350px; */\r\n}\r\n\r\n.infoCard mat-card-header  {\r\n    margin: 7px!important;\r\n}\r\n\r\n.infoCard div.mat-card-avatar{\r\n    background: red;\r\n    height: 50px;\r\n    width: 50px;\r\n    font-size: 34px;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    line-height: 50px;\r\n}\r\n\r\n.infoCard mat-card-title{\r\n    color: #6f6f6f;\r\n    font-size: 12px;\r\n    margin-bottom: 6px;\r\n    margin-top: 6px;\r\n}\r\n\r\n.infoCard mat-card-subtitle{\r\n    font-size: 14px;\r\n    color: #3d3d3d;\r\n    margin: -3px auto !important;    \r\n}\r\n\r\n.descriptionContainer {\r\n    max-width: 960px;\r\n    margin: 20px auto 60px;\r\n    padding: 0px 10px 0px 10px;\r\n}\r\n\r\n.descriptionHtml {\r\n    font-size: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/organisation/organisation.component.html":
/*!**********************************************************!*\
  !*** ./src/app/organisation/organisation.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [organisationId]=\"organisationId\" [colour]=\"Organisation.primaryColour\"></app-header>\r\n\r\n<div class=\"background\"></div>\r\n\r\n<div class=\"content\">\r\n\r\n    <div fxLayout=\"column\" class=\"headerSection\" [ngStyle]=\"{ 'background-color': Organisation.primaryColour}\">\r\n        <div class=\"orgLogo\">\r\n            <img src=\"{{Organisation.logoUrl}}\"/>\r\n        </div>\r\n\r\n        <h1>\r\n            {{title}}\r\n        </h1>\r\n\r\n        <h2>\r\n            {{Organisation.subtitle}}\r\n        </h2>\r\n    </div>\r\n    <div class=\"bannerContainer\">    \r\n        <div class=\"banner\" [ngStyle]=\"{ 'background-image': 'url(' + Organisation.bannerUrl + ')'}\">\r\n            <div class=\"bannerText\">\r\n                {{Organisation.bannerText}}\r\n            </div>\r\n            <div class=\"lotsButtonContainer\">\r\n                <button mat-raised-button class=\"lotsButton\" routerLink=\"/{{organisationId}}/lots\">\r\n                    View the auction lots\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n        \r\n\r\n    <div class=\"introductionContainer\" fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n        <div class=\"introductionText\">\r\n            {{Organisation.introText}}\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" class=\"infoCardContainerRow\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxFlex=\"1 1 0\" class=\"infoCardColumn1\">\r\n\r\n            <mat-card class=\"infoCard\">\r\n                <mat-card-header>\r\n                    <div mat-card-avatar>\r\n                        <mat-icon>alarm</mat-icon>\r\n                    </div>\r\n                    <mat-card-title>When</mat-card-title>\r\n                    <mat-card-subtitle>Ends {{Organisation.closingDate | date:'h:mm a, d LLLL y'}}</mat-card-subtitle>\r\n                </mat-card-header>\r\n            </mat-card>\r\n\r\n            <mat-card class=\"infoCard\">\r\n                <mat-card-header>\r\n                    <div mat-card-avatar>\r\n                            <mat-icon>email</mat-icon>\r\n                    </div>\r\n                    <mat-card-title>Contact</mat-card-title>\r\n                    <mat-card-subtitle>{{Organisation.contactEmail}}</mat-card-subtitle>\r\n                </mat-card-header>\r\n            </mat-card>\r\n\r\n            <mat-card class=\"infoCard\">\r\n                <mat-card-header>\r\n                    <div mat-card-avatar>\r\n                            <mat-icon>language</mat-icon>\r\n                    </div>\r\n                    <mat-card-title>Website</mat-card-title>\r\n                    <mat-card-subtitle><a href=\"{{Organisation.websiteUrl}}\" target=\"_blank\">{{Organisation.websiteUrl}}</a></mat-card-subtitle>\r\n                </mat-card-header>\r\n            </mat-card>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxFlex=\"1 1 0\" class=\"infoCardColumn2\">\r\n\r\n            <mat-card class=\"infoCard\" style=\"height:270px;\">\r\n                <mat-card-header>\r\n                    <div mat-card-avatar>\r\n                            <mat-icon>place</mat-icon>\r\n                    </div>\r\n                    <mat-card-title>Where</mat-card-title>\r\n                    <mat-card-subtitle>{{Organisation.address}}</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-card-content *ngIf=\"latitude && longitude\">\r\n                    <app-map-viewer [latitude]=\"latitude\" [longitude]=\"longitude\"></app-map-viewer>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"descriptionContainer\">\r\n        <div class=\"descriptionHtml\" [innerHtml]=\"Organisation.descriptionHtml\"></div>\r\n    </div>\r\n\r\n    <app-footer [colour]=\"Organisation.primaryColour\"></app-footer>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/organisation/organisation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/organisation/organisation.component.ts ***!
  \********************************************************/
/*! exports provided: OrganisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationComponent", function() { return OrganisationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/organisation.service */ "./src/app/services/organisation.service.ts");
/* harmony import */ var _common_models_Organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/Organisation */ "./common/models/Organisation.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrganisationComponent = /** @class */ (function (_super) {
    __extends(OrganisationComponent, _super);
    function OrganisationComponent(__loader, __zone, organisationService, route, changeDetectorRef) {
        var _this = _super.call(this, __loader, __zone) || this;
        _this.__loader = __loader;
        _this.__zone = __zone;
        _this.organisationService = organisationService;
        _this.route = route;
        _this.changeDetectorRef = changeDetectorRef;
        _this.title = '';
        _this.organisationId = '';
        _this.Organisation = new _common_models_Organisation__WEBPACK_IMPORTED_MODULE_3__["Organisation"]('', '', '', '', '', '', '', '', '', new Date(), '', '', '', '', [], false);
        _this.route.params.subscribe(function (params) {
            _this.organisationId = params.organisationId;
            organisationService.LoadOrganisationById(params.organisationId).subscribe(function (organisation) {
                _this.title = organisation.title;
                _this.Organisation = organisation;
                _this.getLatLong(_this.Organisation.address).subscribe(function (location) {
                    _this.latitude = location.lat();
                    _this.longitude = location.lng();
                    _this.changeDetectorRef.detectChanges();
                });
            });
        });
        return _this;
    }
    OrganisationComponent.prototype.getLatLong = function (address) {
        var geocoder = new google.maps.Geocoder();
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results[0].geometry.location);
                    observer.complete();
                }
                else {
                    console.log('Error - ', results, ' & Status - ', status);
                    observer.next({});
                    observer.complete();
                }
            });
        });
    };
    OrganisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organisation',
            template: __webpack_require__(/*! ./organisation.component.html */ "./src/app/organisation/organisation.component.html"),
            styles: [__webpack_require__(/*! ./organisation.component.css */ "./src/app/organisation/organisation.component.css")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _services_organisation_service__WEBPACK_IMPORTED_MODULE_2__["OrganisationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], OrganisationComponent);
    return OrganisationComponent;
}(_agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"]));



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
/* harmony import */ var _organisation_organisation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organisation/organisation.component */ "./src/app/organisation/organisation.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _organisation_lots_organisation_lots_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organisation-lots/organisation-lots.component */ "./src/app/organisation-lots/organisation-lots.component.ts");
/* harmony import */ var _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lot-details/lot-details.component */ "./src/app/lot-details/lot-details.component.ts");
/* harmony import */ var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms-and-conditions/terms-and-conditions.component */ "./src/app/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _organisation_faq_organisation_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-faq/organisation-faq.component */ "./src/app/organisation-faq/organisation-faq.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_lot_admin_lot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-lot/admin-lot.component */ "./src/app/admin/admin-lot/admin-lot.component.ts");








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'admin/:lotId', component: _admin_admin_lot_admin_lot_component__WEBPACK_IMPORTED_MODULE_7__["AdminLotComponent"] },
    { path: 'terms-and-conditions', component: _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__["TermsAndConditionsComponent"] },
    { path: ':organisationId', component: _organisation_organisation_component__WEBPACK_IMPORTED_MODULE_0__["OrganisationComponent"] },
    { path: ':organisationId/faq', component: _organisation_faq_organisation_faq_component__WEBPACK_IMPORTED_MODULE_5__["OrganisationFaqComponent"] },
    { path: ':organisationId/lots', component: _organisation_lots_organisation_lots_component__WEBPACK_IMPORTED_MODULE_2__["OrganisationLotsComponent"] },
    { path: ':organisationId/lots/:activeTag', component: _organisation_lots_organisation_lots_component__WEBPACK_IMPORTED_MODULE_2__["OrganisationLotsComponent"] },
    { path: ':organisationId/lot/:lotId', component: _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_3__["LotDetailsComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];


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
    LotService.prototype.LoadTags = function (organisationId) {
        var url = this.host + '/api/organisations/' + organisationId + '/tags';
        return this.http.get(url);
    };
    LotService.prototype.LoadLots = function (organisationId) {
        var url = this.host + '/api/organisations/' + organisationId + '/lots';
        return this.http.get(url);
    };
    LotService.prototype.LoadLotsForTag = function (organisationId, tag) {
        var url = this.host + '/api/organisations/' + organisationId + '/lots/' + tag;
        return this.http.get(url);
    };
    LotService.prototype.LoadLot = function (lotId) {
        var url = this.host + '/api/lots/' + lotId;
        return this.http.get(url);
    };
    LotService.prototype.PlaceBid = function (lotId, name, bidderId, phone, amount, stripeTokenId) {
        var url = this.host + '/api/lots/' + lotId + '/bid';
        var body = {
            name: name,
            bidderId: bidderId,
            phone: phone,
            value: amount,
            stripeTokenId: stripeTokenId
        };
        return this.http.post(url, body);
    };
    LotService.prototype.AcceptWinningBid = function (lotId, bidId) {
        var url = this.host + '/api/lots/' + lotId + '/bids/' + bidId;
        var body = {};
        return this.http.post(url, body);
    };
    LotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LotService);
    return LotService;
}());



/***/ }),

/***/ "./src/app/services/organisation.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/organisation.service.ts ***!
  \**************************************************/
/*! exports provided: OrganisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationService", function() { return OrganisationService; });
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


var OrganisationService = /** @class */ (function () {
    function OrganisationService(http) {
        this.http = http;
        // private readonly host: string = 'http://localhost:3000';
        this.host = 'http://ggv2test.eu-west-2.elasticbeanstalk.com';
    }
    OrganisationService.prototype.LoadOrganisations = function () {
        var url = this.host + '/api/organisations';
        return this.http.get(url);
    };
    OrganisationService.prototype.LoadOrganisationById = function (slug) {
        var url = this.host + '/api/organisations/' + slug;
        return this.http.get(url);
    };
    OrganisationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrganisationService);
    return OrganisationService;
}());



/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n    background-color: rgb(238, 238, 238);\n    background-size: cover;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: -1;\n}\n\n.app-toolbar {\n    background-color: #002B88;\n    position: sticky;\n    position: -webkit-sticky;\n    top: 0;\n    z-index: 1000;\n    height:56px;\n}\n\n.app-toolbar img{\n    padding-top: 7px;\n}\n\n.content{\n    top:56px;\n}\n\n.pageHeader {\n    color: white;\n    background-color: #002B88;\n    margin: 0 0 0 0px;\n    padding: 20px;\n    opacity: 0.9;\n    width: auto;\n    font-weight: normal;\n    text-align: left;\n    font-size: 20px;\n}\n\n.terms {\n    margin: 0 auto;\n    padding: 0 20px;\n}"

/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class='app-toolbar mat-elevation-z4'>\n    <div class=\"logo-container\">\n        <a href=\"http://goinggone.io\">\n            <img src=\"../../assets/images/gg_small_logo.png\"/>\n        </a>\n    </div>\n</mat-toolbar>\n\n<div class=\"background\"></div>\n\n<div class=\"content\">\n    <div class=\"pageHeader\">\n        <span>Terms and Conditions</span>\n    </div>\n\n    <div class=\"container terms\">\n        <div class=\"row\">\n            <p>\n                The following page outlines the terms and conditions under which you may use the Going Gone Silent\n                Auction and Pledge system either as a guest or a registered user. Please be sure to read these terms\n                carefully before using the system. Your usage of the system indicates that you agree to abide by these\n                terms and conditions. If there is any part of these terms and conditions that you do not agree to,\n                please exit the site immediately and consult advice from a representative of Going Gone.\n            </p>\n\n            <p>\n                Additionally, Going Gone reserves the right to modify these Terms at any time without prior\n                notification. Users must agree upon and abide by these changes accordingly. You are advised to review\n                these conditions periodically for any changes. Any use of our technology at any time constitutes full\n                acceptance of our service terms.\n            </p>\n\n            <p>You promise to fully indemnify us against any claim or demand or loss of any kind made by any third party\n                due to your use of our technology, or breach of these terms by you, your infringement of someone else’s\n                intellectual property rights or as a result of your use of our interactive features or our site as a\n                venue.</p>\n\n            <p><strong>Company Information</strong></p>\n\n            <p>\n                Going Gone Technology Services Limited (“We”) is a limited company registered in England and Wales under\n                company number 10678727. Our registered address is: Going Gone Technology Services Ltd, Hayles Bridge\n                Offices, 228 Mulgrave Road, Cheam, Surrey, SM2 6JT. The company is not VAT registered.\n            </p>\n\n            <p><strong>Usage of the System</strong></p>\n\n            <p>Access to our site is permitted on a temporary basis, and we reserve the right to withdraw or amend the\n                service we provide on our site without notice. We will not be liable if for any reason our site is\n                unavailable at any time or for any period.</p>\n\n            <p>We may issue you with a warning or limit, suspend or cancel your access to our site if you breach any of\n                these terms of use or our policies or other terms. We shall not be liable for any loss that you may\n                incur as a result of us taking such actions.</p>\n\n            <p><strong>Auction Rules and Restrictions</strong></p>\n            <em>Auction</em>\n            <ul>\n                <li>\n                    Bidders may bid for as many items as they require in the Silent Auction system.\n                </li>\n                <li>\n                    The winning bidder on each Item will be the person who has submitted the bid with the highest amount\n                    at the deadline of the auction.\n                </li>\n                <li>\n                    The winning bidder must pay for the items they have won once the auction is finished.\n                </li>\n            </ul>\n\n            <em>Eligible Bidders</em>\n            <ul>\n                <li>\n                    All bidders must be capable of forming legally binding liabilities under applicable law. The Going\n                    Gone bidding system may not be used by any individuals under the age of 18 years old and by any\n                    other individuals who are legally prohibited from, or otherwise incapable of, entering into binding\n                    contracts.\n                </li>\n                <li>\n                    Any bidder using the Going Gone technology is justified by so doing that they are legally entitled\n                    to do so.\n                </li>\n                <li>\n                    As bidder you agree that we gather certain personal data about you (See ‘Personal Information’\n                    section of this document for more details).\n                </li>\n\n            </ul>\n\n            <em>Auction Items</em>\n            <ul>\n                <li>The images and descriptions of the auction items are all representational and Going Gone has no\n                    liability if they do not are not represented accurately by the seller.\n                </li>\n                <li>It is the charity’s responsibility to ensure that descriptions and photographs are true to reality,\n                    and up-to-date. Going Gone does not guarantee on behalf of the charity, and will not be responsible\n                    for any damage or loss caused due to inaccurate or mismatch of bidders’ expectation of the auction\n                    items.\n                </li>\n                <li>Images are subjected to copyright of the image provider.</li>\n            </ul>\n\n            <em>Bidding Deadlines</em>\n            <ul>\n                <li>Deadlines for bids are decided by the charity and will not be extended under any circumstances. No\n                    bids will be accepted on an auction item after the deadline.\n                </li>\n                <li>When the auction closes, the winning bidder will be contacted by the charity either in person, via\n                    telephone or via email to make payment and organise the procurement of their items.\n                </li>\n\n            </ul>\n\n            <p><strong>Changes to the System</strong></p>\n\n            <p>\n                We are constantly improving our system, and may change the content at any time. If the need arises, we\n                may suspend access to our system, or close it indefinitely. Any of the material on our system may be out\n                of date at any given time, and we are under no obligation to update such material.\n            </p>\n            <p><strong>Liability</strong></p>\n            <p>This section limits and excludes our liability for your use of our site generally. Our policies and\n                specific terms cover your use of particular features provided on our site and contain limitations and\n                exclusions of liability specific to your use of those features.</p>\n            <p>The material displayed on our system is provided without any guarantees, conditions or warranties as to\n                its accuracy. To the extent permitted by law, we, our officers, agents, employees and other third\n                parties connected to us hereby expressly exclude:</p>\n\n            <ul>\n                <li>All conditions, warranties and other terms which might otherwise be implied by statute, common law\n                    or the law of equity.\n                </li>\n                <li>\n                    Any liability for any direct, indirect or consequential loss or damage incurred by any user in\n                    connection with our site or in connection with the use, inability to use, or results of the use of\n                    our site, any websites linked to it and any materials posted on it, including, without limitation\n                    any liability for:\n                    <ul>\n                        <li>loss of income or revenue;</li>\n                        <li>loss of business;</li>\n                        <li>loss of profits or contracts;</li>\n                        <li>loss of anticipated savings;</li>\n                        <li>loss of data;</li>\n                        <li>loss of goodwill;</li>\n                        <li>wasted management or office time;</li>\n                    </ul>\n                </li>\n            </ul>\n\n            <p>\n                and for any other loss or damage of any kind, however arising and whether caused by tort (including\n                negligence), breach of contract or otherwise, even if foreseeable, provided that this condition shall\n                not prevent claims for loss of or damage to your tangible property or any other claims for direct\n                financial loss that are not excluded by any of the categories set out above.\n            </p>\n\n            <p>You acknowledge that there may be occasions when our system or part of it is inaccessible or undergoes\n                maintenance and that such circumstances shall not constitute breach of our contract with you and that we\n                will not be liable to you for any loss or refund in such circumstances.</p>\n\n            <p>This does not affect our liability for death or personal injury arising from our negligence, nor our\n                liability for fraudulent misrepresentation or misrepresentation as to a fundamental matter, nor any\n                other liability which cannot be excluded or limited under applicable law.</p>\n\n            <p><strong>Cookies</strong></p>\n\n            <p>We may collect information about your computer, including your IP address, operating system and browser\n                type, for system administration.</p>\n            <p>\n                For the same reason, we may obtain information about your general internet usage by using a cookie file\n                which is stored on the hard drive of your computer. Cookies contain information that is transferred to\n                your computer’s hard drive. They help us to improve our site and to deliver a better and more\n                personalised service. They enable us:\n            </p>\n            <ul>\n                <li>\n                    To estimate our audience size and usage pattern.\n                </li>\n                <li>To store information about your preferences, and so allow us to customise our site according to your\n                    individual interests.\n                </li>\n                <li>To speed up your searches.</li>\n                <li>To recognise you when you return to our site.</li>\n            </ul>\n\n            <p>\n                Our servers may use two different types of cookies. The first type is known as a “session-based” cookie\n                and is allocated to your PC only for the duration of your visit to our website. It helps you to move\n                around the website faster. This cookie automatically expires when you close down your browser.\n            </p>\n            <p>\n                The second type of cookie known as a “persistent” cookie is allocated to your PC only if you agree by\n                selecting the “Remember me” function. This cookie, if chosen, will remain on your PC for a period of\n                time.\n            </p>\n            <p>By using our system you consent to our use of these cookies.</p>\n            <p>If you want to delete our cookies that are already on your computer, please refer to the instructions for\n                file management software to locate the file or directory that stores cookies. You will normally be able\n                to delete or control cookies via your browser.</p>\n            <p>\n                Please note that by rejecting or deleting our cookies you may not be able to access some areas or\n                features of our site.\n            </p>\n            <p>\n                You are not permitted to use your own cookies or other devices on or in connection with our site unless\n                you comply with all applicable law and in particular provide others users with an opportunity to\n                expressly consent or decline them.\n            </p>\n            <p><strong>Misuse of the System</strong></p>\n            <p>You must not misuse our system by knowingly introducing viruses, trojans, worms, logic bombs or other\n                material which is malicious or technologically harmful. You must not attempt to gain unauthorised access\n                to our site, the server on which our site is stored or any server, computer or database connected to our\n                site. You must not attack our site via a denial-of-service attack or a distributed denial-of service\n                attack.</p>\n            <p>By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We\n                will report any such breach to the relevant law enforcement authorities and we will co-operate with\n                those authorities by disclosing your identity to them. In the event of such a breach, your right to use\n                our site will cease immediately.</p>\n            <p>\n                We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses\n                or other technologically harmful material that may infect your computer equipment, computer programs,\n                data or other proprietary material due to your use of our site or to your downloading of any material\n                posted on it, or on any website linked to it.\n            </p>\n            <p><strong>Legal Terms</strong></p>\n            <p>These terms of use and the policies and documents referred to constitute the entire agreement between you\n                and us.</p>\n            <p>Section headings are for reference purposes only and do not limit the scope or extent of such\n                section.</p>\n            <p>If any part of these terms of use or our other policies or terms is held to be invalid or unenforceable,\n                such provision shall be struck out and the remaining provisions shall be enforced.</p>\n            <p>You acknowledge that if we do not enforce any particular provision, we are not waiving our right to do\n                so. We may take steps to enforce a provision at a later date. Our failure to act on a breach by you or\n                others does not waive our right to act on subsequent or similar breaches. We do not guarantee that we\n                will take action against any or all breaches of these terms of use.</p>\n            <p>\n                Any reference on our site to a statute, statutory provision or any subordinate legislation made under a\n                statute is to such statute, provision or subordinate legislation as amended or re-enacted from time to\n                time whether before or after the date of this agreement and, in the case of a statute, includes any\n                subordinate legislation made under that statute whether before or after the date of this agreement.\n            </p>\n            <p>Personal information</p>\n            <p>Going Gone bidding system requires you to enter certain personal information in order to make bids and or\n                pledges. The personal information we collect are your full name, email address and telephone number.\n                Personal information is required for identification, procurement of lot items and the collection of\n                payments.</p>\n            <p><strong>Use of personal information</strong></p>\n            <p>\n                All personal data collected is for Going Gone business operations and related charity partners at the\n                auction events. Your personal information may also be used for internal purposes such as auditing, data\n                analysis, and research to improve Going Gone products, services, and customer communications.\n            </p>\n            <p>Personal data protection</p>\n            <p>Going Gone follows the rigid international standards of personal data protection. Going Gone discloses\n                potentially personally-identifying information only to those of its auction administrators, employees,\n                contractors and affiliated organisations. </p>\n            <ul>\n                <li>Going Gone will not rent or sell potentially personally-identifying information to anyone.</li>\n                <li>\n                    Other than to its auction administrators, employees, contractors and affiliated organisations, as\n                    described above, Going Gone discloses potentially personally-identifying information only in\n                    response to a subpoena, court order or other government request, or when Going Gone believes in good\n                    faith that disclosure is reasonably necessary to protect the rights of Going Gone, third parties or\n                    the public at large.\n                </li>\n                <li>Going Gone takes all measures reasonably necessary to protect against the unauthorised access, use,\n                    alteration or destruction of potentially personally-identifying and personally-identifying\n                    information.\n                </li>\n            </ul>\n            <p><strong>Online Payments</strong></p>\n            <p>All payments with the auction items are done with Stripe payment system, a market leader in online\n                payments so guests can rest assured that their sensitive data is being handled correctly.</p>\n            <p><strong>Contact</strong></p>\n            <p>If you have any concerns about material which appears on our site please contact info@goinggone.io.\n            </p>\n        </div>\n\n\n    </div>\n</div>\n\n<app-footer [colour]=\"'#002B88'\"></app-footer>"

/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.component.ts ***!
  \************************************************************************/
/*! exports provided: TermsAndConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function() { return TermsAndConditionsComponent; });
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

var TermsAndConditionsComponent = /** @class */ (function () {
    function TermsAndConditionsComponent() {
    }
    TermsAndConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsAndConditionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms-and-conditions.component.html */ "./src/app/terms-and-conditions/terms-and-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-and-conditions.component.css */ "./src/app/terms-and-conditions/terms-and-conditions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsAndConditionsComponent);
    return TermsAndConditionsComponent;
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