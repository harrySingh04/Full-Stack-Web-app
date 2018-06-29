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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_doclist_doclist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/doclist/doclist.component */ "./src/app/components/doclist/doclist.component.ts");
/* harmony import */ var _components_docdetails_docdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/docdetails/docdetails.component */ "./src/app/components/docdetails/docdetails.component.ts");
/* harmony import */ var _services_doclist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/doclist.service */ "./src/app/services/doclist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: _components_doclist_doclist_component__WEBPACK_IMPORTED_MODULE_4__["DoclistComponent"] },
    { path: 'details/:id', component: _components_docdetails_docdetails_component__WEBPACK_IMPORTED_MODULE_5__["DocdetailsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_doclist_doclist_component__WEBPACK_IMPORTED_MODULE_4__["DoclistComponent"],
                _components_docdetails_docdetails_component__WEBPACK_IMPORTED_MODULE_5__["DocdetailsComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_doclist_service__WEBPACK_IMPORTED_MODULE_6__["DoclistService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/docdetails/docdetails.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/docdetails/docdetails.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/docdetails/docdetails.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/docdetails/docdetails.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/\"><button class=\"btn btn-light btn-sm mb-3\">BACK</button></a>\n<h1 class=\"text-center  uppercase\">Welcome to Doctors Details Page</h1>\n<div *ngIf=\"detail\" class=\"card\">\n<div class=\"card-body text-center mb-10\">\n  <h3>{{detail.name}}</h3>\n  <p>SPECIALITY :  {{detail.speciality}} </p>\n  <p>AREA : {{detail.area}} </p>\n  <p>PHONE NUMBER :{{detail.area}}</p>\n  <p>REVIEW SCORE: {{detail.score}}</p>\n</div>\n</div>\n\n\n<div class=\"card mt-3\">\n    <h3>OTHERS DOCTORS OF SAME SPECIALITY(ORDER BY REVIEW SCORE)</h3>\n  <div *ngIf=\"sameDetails\" class=\"card-body\" >\n  \n  <ul ></ul>\n  <li *ngFor=\"let det of sameDetails\" >NAME:   {{det.name}} <span class=\"ml-4\">SCORE:   {{det.score}}</span></li>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/docdetails/docdetails.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/docdetails/docdetails.component.ts ***!
  \***************************************************************/
/*! exports provided: DocdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocdetailsComponent", function() { return DocdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_doclist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/doclist.service */ "./src/app/services/doclist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocdetailsComponent = /** @class */ (function () {
    function DocdetailsComponent(route, docListService) {
        this.route = route;
        this.docListService = docListService;
    }
    DocdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.docListService.getDoctor(id).subscribe(function (doc) {
            _this.detail = doc;
            _this.docListService.getSameDetails(_this.detail.speciality).subscribe(function (docs) {
                _this.sameDetails = docs;
                _this.filterResults();
            });
        });
    };
    DocdetailsComponent.prototype.filterResults = function () {
        var _this = this;
        this.sameDetails = this.sameDetails.filter(function (item) {
            return item.id != _this.detail.id;
        });
        this.sameDetails.sort(function (a, b) {
            if (a.score > b.score)
                return -1;
            else if (a.score < b.score)
                return 1;
            else
                return 0;
        });
        console.log(this.sameDetails);
    };
    DocdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-docdetails',
            template: __webpack_require__(/*! ./docdetails.component.html */ "./src/app/components/docdetails/docdetails.component.html"),
            styles: [__webpack_require__(/*! ./docdetails.component.css */ "./src/app/components/docdetails/docdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_doclist_service__WEBPACK_IMPORTED_MODULE_2__["DoclistService"]])
    ], DocdetailsComponent);
    return DocdetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/doclist/doclist.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/doclist/doclist.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/doclist/doclist.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/doclist/doclist.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\"> Find Your Doctor</h1>\n<div class=\"card card-body mb-3\">\n  <form (ngSubmit)=\"searchLists()\">\n    <div class=\"form-group\">\n      <label>SPECIALITY : </label>\n      <select class=\"form-control mb-2\" id=\"s\" [(ngModel)]=\"s\" name=\"s\" >\n          <option *ngFor=\"let spec of specs\"  [value]=\"spec\">{{spec}}</option>\n        </select>\n      <label class=\"mt-2\">AREA : </label>\n      <select class=\"form-control mb-2\" id=\"a\" [(ngModel)]=\"a\" name=\"a\">\n          <option *ngFor=\"let area of areas\"  [value]=\"area\">{{area}}</option>\n        </select>\n      <label class=\"mt-2\">REVIEW SCORE: </label>\n      <input type=\"text\" [(ngModel)]=\"score\" placeholder=\"SEARCH FOR REVIEW SCORE GREATER THAN(MAX-5)\" \n      class=\"form-control\"  name=\"score\">\n      <input type=\"submit\" class=\"btn btn-default mt-2\" value=\"SEARCH\">\n</div>\n  </form>\n</div>\n\n<div *ngIf=\"doctors\">\n<div *ngIf=\"doctors.length>0\">\n<table class=\"table table-bordered\">\n  <th>ID</th>\n  <th>NAME</th>\n  <th>SPECIALITY</th>\n  <th>AREA</th>\n  <th>PHONE NUMBER</th>\n  <th>REVIEW SCORE</th>\n  <tr *ngFor=\"let doc of doctors\">\n    <td>{{doc.id}}</td>\n    <td><a routerLink=\"/details/{{doc.id}}\">{{doc.name}}</a></td>\n    <td>{{doc.speciality}}</td>\n    <td>{{doc.area}}</td>\n    <td>{{doc.phoneNo}}\n    <td>{{doc.score}}</td>\n  </tr>\n</table>\n</div>\n<div *ngIf=\"doctors.length<=0\">\n<h4>SORRY! NO DOCTORS FOR THIS SEARCH.</h4>\n\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/doclist/doclist.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/doclist/doclist.component.ts ***!
  \*********************************************************/
/*! exports provided: DoclistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoclistComponent", function() { return DoclistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_doclist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/doclist.service */ "./src/app/services/doclist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoclistComponent = /** @class */ (function () {
    function DoclistComponent(docListService) {
        this.docListService = docListService;
        this.specs = [
            'Dentist',
            'Psychiatrist',
            'Cardiologist',
            'Dermatologist'
        ],
            this.areas = [
                'Los Angeles',
                'San Diego',
                'New York'
            ];
    }
    DoclistComponent.prototype.ngOnInit = function () {
    };
    DoclistComponent.prototype.searchLists = function (s, area, score) {
        //console.log(this.score);
        //console.log(this.s);
        //console.log(this.a);
        var _this = this;
        this.docListService.getDoctors().subscribe(function (docs) {
            _this.doctors = docs;
            _this.filterResults();
        });
    };
    DoclistComponent.prototype.filterResults = function () {
        var _this = this;
        // console.log(this.doctors);
        if (this.s != undefined) {
            this.doctors = this.doctors.filter(function (idx) {
                return idx.speciality == _this.s;
            });
        }
        if (this.a != undefined) {
            this.doctors = this.doctors.filter(function (idx) {
                return idx.area == _this.a;
            });
        }
        if (this.score != undefined) {
            this.doctors = this.doctors.filter(function (idx) {
                return idx.score >= _this.score;
            });
        }
    };
    DoclistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doclist',
            template: __webpack_require__(/*! ./doclist.component.html */ "./src/app/components/doclist/doclist.component.html"),
            styles: [__webpack_require__(/*! ./doclist.component.css */ "./src/app/components/doclist/doclist.component.css")]
        }),
        __metadata("design:paramtypes", [_services_doclist_service__WEBPACK_IMPORTED_MODULE_1__["DoclistService"]])
    ], DoclistComponent);
    return DoclistComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-primary mb-2\">\n\n    <div class=\"container\">\n      <a routerLink=\"/\" class=\"navbar-brand\">Angular App</a>\n      <div>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a routerLink=\"/\" class=\"nav-link\" [routerLinkActive]=\"['active']\">Home</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/doclist.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/doclist.service.ts ***!
  \*********************************************/
/*! exports provided: DoclistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoclistService", function() { return DoclistService; });
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


var DoclistService = /** @class */ (function () {
    function DoclistService(http) {
        this.http = http;
        this.postUrls = "";
    }
    DoclistService.prototype.getDoctors = function () {
        return this.http.get(this.postUrls + '/home');
    };
    DoclistService.prototype.getDoctor = function (id) {
        return this.http.get(this.postUrls + "/details/" + id);
    };
    DoclistService.prototype.getSameDetails = function (category) {
        return this.http.get(this.postUrls + '/' + category);
    };
    DoclistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DoclistService);
    return DoclistService;
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

module.exports = __webpack_require__(/*! D:\StudyMaterial\CS5220\angular-materials and projects\node-practice\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map