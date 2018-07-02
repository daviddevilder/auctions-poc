(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
            template: '<router-outlet></router-outlet>'
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _token_list_token_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token-list/token-list.component */ "./src/app/token-list/token-list.component.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio-list/portfolio-list.component */ "./src/app/portfolio-list/portfolio-list.component.ts");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/portfolio.service */ "./src/app/services/portfolio.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _token_list_token_list_component__WEBPACK_IMPORTED_MODULE_4__["TokenListComponent"],
                _portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"], _services_portfolio_service__WEBPACK_IMPORTED_MODULE_8__["PortfolioService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n    background: url('background.jpg') no-repeat center center fixed;\n    background-size: cover;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: -1;\n}\n\nh1 {\n    text-align: center;\n    color: white;\n    margin: 10px auto;\n    padding: 8px;\n}\n\n.tokenList, .portfolioList {\n    width: 50%;\n    float: left;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n\n<h1>\n  {{ title }}\n</h1>\n\n<div class=\"tokenList\">\n  <app-token-list></app-token-list>\n</div>\n<div class=\"portfolioList\">\n  <app-portfolio-list></app-portfolio-list>\n</div>\n\n"

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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Going Gone';
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-list/portfolio-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/portfolio-list/portfolio-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    text-align: center;\n    color: white;\n    margin: 10px 30px;\n    padding: 8px;\n    background-color: #333;\n    opacity: 0.9;\n    border-radius: 10px;\n}\n\n.portfolioContainer {\n    margin: 10px auto;\n    background-color: white;\n    width: 300px;\n    padding: 5px;\n    border-radius: 12px;\n    text-align: center;\n}\n\n.portfolioContainer .name {\n    font-weight: bold;\n}\n\n.totalValue {\n    font-weight: bold;\n}\n\n.holding .details {\n    font-size: small;\n}\n\n.createContainer {\n    width: 60%;\n    float: left;\n    margin: 0 18%;\n    background-color: #333;\n    opacity: 0.9;\n    padding: 20px;\n    border-radius: 6px;\n}\n\nh3 {\n    margin: 0 auto;\n    color: white;\n}\n\n.inputContainer {\n    margin: 8px auto;\n    clear: both;\n    padding-top: 10px;\n}\n\nlabel {\n    color: white;\n    margin: 10px auto;\n    display: block;\n    float: left;\n}\n\ninput[type=text] {\n    width: 60%;\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    float: right;\n}\n\n.holdings {\n    float: right;\n    margin: 4px auto;\n}\n\ninput[type=number] {\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    width: 90px;\n}\n\ninput:invalid {\n    border: 1px solid red;\n}\n\ninput:valid {\n    border: 1px solid #ccc;\n}\n\nselect {\n    width: 100px;\n    height: 40px;\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-right: 10px;\n}\n\nbutton[type=button] {\n    float: right;\n    clear: both;\n    margin: 4px auto;\n    padding: 12px;\n    border-radius: 4px;\n    border:none;\n    background-color: blue;\n    color: white;\n    cursor: pointer;\n}\n\nbutton[type=button]:hover {\n    background-color: darkblue;\n}\n\nbutton[type=submit] {\n    background-color: #4CAF50;\n    color: white;\n    padding: 12px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    float: right;\n    clear: both;\n}\n\nbutton[type=submit]:hover {\n    background-color: #45a049;\n}"

/***/ }),

/***/ "./src/app/portfolio-list/portfolio-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/portfolio-list/portfolio-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  My Portfolios\n</h2>\n\n<div class=\"portfolioContainer\" *ngFor=\"let portfolio of Portfolios\">\n  <div class=\"name\">Portfolio: {{portfolio.name}}</div>\n  <div class=\"totalValue\">Total: {{portfolio.totalValue | currency}}</div>\n  <div class=\"holding\" *ngFor=\"let holding of portfolio.holdings\">\n    <div class=\"details\">\n      {{holding.quantity}} {{holding.tokenName}} = {{holding.value | currency}}\n    </div>\n  </div>\n</div>\n\n<div class=\"createContainer\">\n  <h3>Create New Portfolio</h3>\n  <form [formGroup]=\"portfolioForm\" (ngSubmit)=\"createPortfolio(portfolioForm.value)\" ngNativeValidate>\n    <div class=\"inputContainer\">\n      <label for=\"formName\">Portfolio Name</label>\n      <input id=\"formName\" type=\"text\" formControlName=\"name\" required/>\n    </div>\n    <div class=\"inputContainer\">\n      <label>Portfolio Holdings</label>\n      <div class=\"holdings\" formArrayName=\"holdings\" *ngFor=\"let holding of holdings.controls; let i = index;\">\n        <div [formGroupName]=\"i\">\n          <select formControlName=\"tokenId\">\n            <option *ngFor=\"let token of Tokens\" value= \"{{token.id}}\">\n              {{token.name}}\n            </option>\n          </select>\n          <input type=\"number\" formControlName=\"quantity\" placeholder=\"Quantity\"/>\n        </div>\n      </div>\n      <button type=\"button\" (click)=\"addHolding()\">Add Another</button>\n    </div>\n    <div class=\"inputContainer\">\n      <button type=\"submit\">Create</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/portfolio-list/portfolio-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portfolio-list/portfolio-list.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioListComponent", function() { return PortfolioListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/portfolio.service */ "./src/app/services/portfolio.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortfolioListComponent = /** @class */ (function () {
    function PortfolioListComponent(portfolioService, tokenService, formBuilder) {
        this.portfolioService = portfolioService;
        this.tokenService = tokenService;
        this.formBuilder = formBuilder;
        this.Tokens = [];
        this.resetForm = function () {
            this.portfolioForm = this.formBuilder.group({
                name: '',
                holdings: this.formBuilder.array([this.createHolding()])
            });
        };
        this.loadPortfolios = function () {
            var _this = this;
            this.portfolioService.LoadPortfolios()
                .subscribe(function (portfolios) {
                _this.Portfolios = portfolios;
                _this.calculatePortfolioValues();
            });
        };
        this.calculatePortfolioValues = function () {
            var _this = this;
            this.Portfolios.forEach(function (portfolio) {
                portfolio.totalValue = 0;
                portfolio.holdings.forEach(function (holding) { return _this.deriveNameAndValue(portfolio, holding); });
            });
        };
        this.deriveNameAndValue = function (portfolio, holding) {
            var token = this.Tokens.filter(function (token) {
                return token.id == holding.tokenId;
            })[0];
            holding.tokenName = token.name;
            holding.value = Number(token.price) * Number(holding.quantity);
            portfolio.totalValue += holding.value;
        };
        this.removeEmpties = function (holdings) {
            var results = [];
            holdings.forEach(function (holding) {
                if (holding.tokenId.length > 0 && holding.quantity > 0) {
                    results.push(holding);
                }
            });
            return results;
        };
    }
    PortfolioListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.tokenService.LoadTokens()
            .subscribe(function (tokens) {
            _this.Tokens = tokens;
            _this.loadPortfolios();
        });
    };
    PortfolioListComponent.prototype.createHolding = function () {
        return this.formBuilder.group({
            tokenId: '',
            quantity: 0
        });
    };
    Object.defineProperty(PortfolioListComponent.prototype, "holdings", {
        get: function () {
            return this.portfolioForm.get('holdings');
        },
        enumerable: true,
        configurable: true
    });
    ;
    PortfolioListComponent.prototype.addHolding = function () {
        this.holdings.push(this.createHolding());
    };
    PortfolioListComponent.prototype.createPortfolio = function (formValue) {
        var _this = this;
        formValue.holdings = this.removeEmpties(formValue.holdings);
        this.portfolioService.CreatePortfolio(formValue)
            .subscribe(function () {
            alert("Created successfully!!!");
            _this.resetForm();
            _this.loadPortfolios();
        });
    };
    PortfolioListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-list',
            template: __webpack_require__(/*! ./portfolio-list.component.html */ "./src/app/portfolio-list/portfolio-list.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-list.component.css */ "./src/app/portfolio-list/portfolio-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PortfolioListComponent);
    return PortfolioListComponent;
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");

var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    },
    {
        path: '**',
        redirectTo: '/error/notfound',
    }
];


/***/ }),

/***/ "./src/app/services/portfolio.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/portfolio.service.ts ***!
  \***********************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
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


var PortfolioService = /** @class */ (function () {
    function PortfolioService(http) {
        this.http = http;
        this.host = "http://localhost:3000";
        this.Portfolios = [];
    }
    PortfolioService.prototype.CreatePortfolio = function (payload) {
        var url = this.host + "/api/portfolios";
        return this.http.put(url, payload);
    };
    PortfolioService.prototype.LoadPortfolios = function () {
        var url = this.host + "/api/portfolios";
        return this.http.get(url);
    };
    PortfolioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
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


var TokenService = /** @class */ (function () {
    function TokenService(http) {
        this.http = http;
        this.host = "http://localhost:3000";
        this.Tokens = [];
    }
    TokenService.prototype.LoadTokens = function () {
        var url = this.host + "/api/tokens";
        return this.http.get(url);
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/token-list/token-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/token-list/token-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    text-align: center;\n    color: white;\n    margin: 10px 30px;\n    padding: 8px;\n    background-color: #333;\n    opacity: 0.9;\n    border-radius: 10px;\n}\n\n.tokenContainer {\n    margin: 10px auto;\n    background-color: white;\n    width: 300px;\n    padding: 5px;\n    border-radius: 12px;\n    text-align: center;\n}\n\n.tokenContainer .name {\n    font-weight: bold;\n}\n\n.tokenContainer .price {\n    font-weight: bold;\n}"

/***/ }),

/***/ "./src/app/token-list/token-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/token-list/token-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  Top 10 Cryptocurrencies\n</h2>\n\n<div class=\"tokenContainer\" *ngFor=\"let token of Tokens\">\n  <div class=\"name\">{{token.name}}</div>\n  <div class=\"price\">{{token.price | currency}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/token-list/token-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/token-list/token-list.component.ts ***!
  \****************************************************/
/*! exports provided: TokenListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListComponent", function() { return TokenListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenListComponent = /** @class */ (function () {
    function TokenListComponent(tokenService) {
        this.tokenService = tokenService;
        this.Tokens = [];
    }
    TokenListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tokenService.LoadTokens()
            .subscribe(function (tokens) { return _this.Tokens = tokens; });
    };
    TokenListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-token-list',
            template: __webpack_require__(/*! ./token-list.component.html */ "./src/app/token-list/token-list.component.html"),
            styles: [__webpack_require__(/*! ./token-list.component.css */ "./src/app/token-list/token-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], TokenListComponent);
    return TokenListComponent;
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

module.exports = __webpack_require__(/*! /Users/daviddevilder/going-gone-v2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map