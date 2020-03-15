(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <h1>{{title | uppercase}}</h1>\n</header>\n<nav>\n  <dt-button-group>\n    <dt-button-group-item dt-button routerLink=\"/dashboard\">Dashboard</dt-button-group-item>\n    <dt-button-group-item dt-button routerLink=\"/heroes\">Heroes</dt-button-group-item>\n  </dt-button-group>\n</nav>\n<router-outlet></router-outlet>\n<app-messages></app-messages>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/attribution/attribution.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/attribution/attribution.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dt-card>\n  <p>Data provided by <a href=\"https://marvel.com\">Marvel</a>. © 2014 Marvel</p>\n</dt-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Top Heroes</h2>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let hero of heroes\" class=\"col-1-4\"\n      routerLink=\"/detail/{{hero.id}}\">\n    <div class=\"module hero\">\n      <h4>{{hero.name}}</h4>\n    </div>\n  </a>\n</div>\n\n<app-hero-search></app-hero-search>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hero-detail/hero-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hero-detail/hero-detail.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"hero\" class=\"details\">\n  <h2>{{hero.name | uppercase}}</h2>\n\n  <div class=\"info_container\">\n    <div class=\"info\">\n      <img src=\"{{getImage()}}\" alt=\"{{hero.name}}\" />\n      <div class=\"info_text_container\">\n        <div class=\"id_box\">\n          <label class=\"hero_label\">ID</label>\n          <p class=\"hero_id\">{{hero.id}}</p>\n        </div>\n        <div>\n          <label>Name:</label>\n          <em dt-inline-editor [(ngModel)]=\"hero.name\" ariaLabelSave=\"Save name\"\n            ariaLabelCancel=\"Cancel and discard changes\"></em>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"info_container\" *ngIf=\"getSeriesItems(hero)\">\n    <div class=\"series\">\n      <div class=\"series_text_container\">\n        <div>\n          <label>Series</label>\n          <p class=\"hero_serie\" *ngFor=\"let serie of getSeriesItems(hero)\">{{serie.name}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div>\n  <button dt-button (click)=\"goBack()\">Go back</button>\n  <button dt-button (click)=\"save()\">Save</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hero-search/hero-search.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hero-search/hero-search.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dt-card>\n  <dt-card-title>\n    <label for=\"search-box\">Search for hero</label>\n  </dt-card-title>\n  <input #searchBox dtInput id=\"search-box\" (input)=\"search(searchBox.value)\" />\n\n  <ul class=\"search-result\">\n    <li *ngFor=\"let hero of heroes$ | async\">\n      <a routerLink=\"/detail/{{hero.id}}\">\n        {{hero.name}}\n      </a>\n    </li>\n  </ul>\n</dt-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/heroes/heroes.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/heroes/heroes.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Heroes</h2>\n\n<div class=\"inline\">\n  <input type=\"text\" dtInput placeholder=\"Please add hero name\" #heroName />\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button dt-button (click)=\"add(heroName.value); heroName.value=''\">\n    <dt-icon name=\"plus-add\"></dt-icon>\n    Add\n  </button>\n</div>\n\n<ul class=\"heroes\" *ngIf=\"heroService.heroes\">\n  <li *ngFor=\"let hero of heroService.heroes\">\n    <a routerLink=\"/detail/{{hero.id}}\">\n      <span class=\"badge\">{{hero.id}}</span>\n      <span class=\"name\">{{hero.name}}</span>\n    </a>\n    <button class=\"delete\" title=\"delete hero\" (click)=\"delete(hero)\">\n      <!-- <dt-icon name=\"abort\"></dt-icon> -->\n      x\n    </button>\n  </li>\n\n</ul>\n\n<app-attribution></app-attribution>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dt-demo-card\">\n  <dt-card>\n    <div *ngIf=\"messageService.messages.length\">\n      <dt-card-title> Messages </dt-card-title>\n      <button dt-button variant=\"secondary\" class=\"clear\" (click)=\"messageService.clear()\">\n        <dt-icon name=\"delete\"></dt-icon>Clear\n      </button>\n      <div class=\"messages\" *ngFor='let message of messageService.messages'>\n        <span class=\"message\">{{message}}</span>\n      </div>\n    </div>\n  </dt-card>\n\n  <app-attribution></app-attribution>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");






const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'detail/:id', component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__["HeroDetailComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.5em;\r\n  font-weight: 500;\r\n  margin: auto;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nheader {\r\n  background-color: #00848e;\r\n  text-align: left;\r\n}\r\nheader h1 {\r\n  padding: 25px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  letter-spacing: 10px;\r\n}\r\nnav {\r\n  margin: 30px 0;\r\n}\r\nnav a,\r\nnav .dt-button-group-item {\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited,\r\na:link,\r\nnav .dt-button-group-item:visited,\r\nnav .dt-button-group-item:link {\r\n  color: #334953;\r\n}\r\nnav a:hover,\r\nnav .dt-button-group-item:hover {\r\n  color: white;\r\n  background: #00848e;\r\n  border-color: #00848e;\r\n}\r\n.dt-button+.dt-button,\r\n.dt-button-group-item+.dt-button-group-item {\r\n  margin-left: 8px;\r\n}\r\n/*\r\nnav a.active,\r\nnav .dt-button-group-item.active {\r\n  color: #039be5;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBRUE7Ozs7RUFJRSxjQUFjO0FBQ2hCO0FBRUE7O0VBRUUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFFQTs7OztHQUlHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg0OGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaGVhZGVyIGgxIHtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxufVxyXG5cclxubmF2IHtcclxuICBtYXJnaW46IDMwcHggMDtcclxufVxyXG5cclxubmF2IGEsXHJcbm5hdiAuZHQtYnV0dG9uLWdyb3VwLWl0ZW0ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbm5hdiBhOnZpc2l0ZWQsXHJcbmE6bGluayxcclxubmF2IC5kdC1idXR0b24tZ3JvdXAtaXRlbTp2aXNpdGVkLFxyXG5uYXYgLmR0LWJ1dHRvbi1ncm91cC1pdGVtOmxpbmsge1xyXG4gIGNvbG9yOiAjMzM0OTUzO1xyXG59XHJcblxyXG5uYXYgYTpob3ZlcixcclxubmF2IC5kdC1idXR0b24tZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDg0OGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA4NDhlO1xyXG59XHJcblxyXG4uZHQtYnV0dG9uKy5kdC1idXR0b24sXHJcbi5kdC1idXR0b24tZ3JvdXAtaXRlbSsuZHQtYnV0dG9uLWdyb3VwLWl0ZW0ge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi8qXHJcbm5hdiBhLmFjdGl2ZSxcclxubmF2IC5kdC1idXR0b24tZ3JvdXAtaXRlbS5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMDM5YmU1O1xyXG59ICovXHJcbiJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Marvel Heroes';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hero-search/hero-search.component */ "./src/app/hero-search/hero-search.component.ts");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/fesm2015/dynatrace-barista-components-icon.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/fesm2015/dynatrace-barista-components-button.js");
/* harmony import */ var _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @dynatrace/barista-components/form-field */ "./node_modules/@dynatrace/barista-components/fesm2015/dynatrace-barista-components-form-field.js");
/* harmony import */ var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @dynatrace/barista-components/input */ "./node_modules/@dynatrace/barista-components/fesm2015/dynatrace-barista-components-input.js");
/* harmony import */ var _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @dynatrace/barista-components/loading-distractor */ "./node_modules/@dynatrace/barista-components/fesm2015/dynatrace-barista-components-loading-distractor.js");
/* harmony import */ var _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @dynatrace/barista-components/button-group */ "./node_modules/@dynatrace/barista-components/fesm2015/dynatrace-barista-components-button-group.js");
/* harmony import */ var _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @dynatrace/barista-components/card */ "./node_modules/@dynatrace/barista-components/fesm2015/dynatrace-barista-components-card.js");
/* harmony import */ var _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @dynatrace/barista-components/inline-editor */ "./node_modules/@dynatrace/barista-components/fesm2015/dynatrace-barista-components-inline-editor.js");
/* harmony import */ var _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./attribution/attribution.component */ "./src/app/attribution/attribution.component.ts");



 // <-- NgModel lives here


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_7__["HeroesComponent"],
            _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_8__["HeroDetailComponent"],
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_11__["HeroSearchComponent"],
            _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_21__["AttributionComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_12__["DtIconModule"].forRoot({ svgIconLocation: '/assets/icons/{{name}}.svg' }),
            _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_14__["DtButtonModule"],
            _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_15__["DtFormFieldModule"],
            _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_16__["DtInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_18__["DtButtonGroupModule"],
            _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_19__["DtCardModule"],
            _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_20__["DtInlineEditorModule"],
            _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_17__["DtLoadingDistractorModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/attribution/attribution.component.css":
/*!*******************************************************!*\
  !*** ./src/app/attribution/attribution.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\r\n  color: gray;\r\n  font-size: 11px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #00848e;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0cmlidXRpb24vYXR0cmlidXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdHRyaWJ1dGlvbi9hdHRyaWJ1dGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMDg0OGU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/attribution/attribution.component.ts":
/*!******************************************************!*\
  !*** ./src/app/attribution/attribution.component.ts ***!
  \******************************************************/
/*! exports provided: AttributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributionComponent", function() { return AttributionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AttributionComponent = class AttributionComponent {
    constructor() { }
    ngOnInit() {
    }
};
AttributionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attribution',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./attribution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/attribution/attribution.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./attribution.component.css */ "./src/app/attribution/attribution.component.css")).default]
    })
], AttributionComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n*,\r\n*:after,\r\n*:before {\r\n  box-sizing: border-box;\r\n}\r\nh2 {\r\n  text-align: center;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.grid {\r\n  margin: 0;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  min-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #00848e;\r\n  border-radius: 2px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.module:hover {\r\n  background-color: #dfe7e7;\r\n  cursor: pointer;\r\n  color: #00848e;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid.grid-pad {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n.grid-pad>[class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px;\r\n  }\r\n\r\n  .module.hero {\r\n    padding: 10px;\r\n    min-height: 80px;\r\n  }\r\n}\r\n@media (min-width: 601px) and (max-width: 1024px) {\r\n  .module.hero {\r\n    min-height: 120px;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QztFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBOzs7RUFLRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFDZjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBR0E7Ozs7Q0FJQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5bY2xhc3MqPSdjb2wtJ10ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbltjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuKixcclxuKjphZnRlcixcclxuKjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbC0xLTQge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5tb2R1bGUge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODQ4ZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kdWxlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlN2U3O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzAwODQ4ZTtcclxufVxyXG5cclxuLmdyaWQtcGFkIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5ncmlkLmdyaWQtcGFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZ3JpZC1wYWQ+W2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1vZHVsZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZHVsZS5oZXJvIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLm1vZHVsZS5oZXJvIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5tb2R1bGUge1xyXG4gICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qXHJcbkNvcHlyaWdodCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi9cclxuIl19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    ngOnInit() {
        if (!this.heroes || !this.heroes.length) {
            this.getHeroes();
        }
    }
    getHeroes() {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = this.getRandomHeroes(heroes));
    }
    getRandomHeroes(heroes) {
        return heroes.sort(() => 0.5 - Math.random()).slice(0, 4);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* HeroDetailComponent's private CSS styles */\r\nlabel {\r\n  display: inline-block;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n  margin-top: 5px;\r\n}\r\nbutton {\r\n  margin-top: 10px;\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n.dt-button+.dt-button {\r\n  margin-left: 8px;\r\n}\r\nimg {\r\n  float: right;\r\n}\r\n.details {\r\n  width: 500px;\r\n  display: inline-block;\r\n}\r\n.info_container {\r\n  display: grid;\r\n}\r\n.details .info {\r\n  -ms-grid-column: 1;\r\n  grid-column: 1;\r\n  border-top: 1px solid #e1e1e1;\r\n  border-left: 1px solid #e1e1e1;\r\n  border-right: 1px solid #e1e1e1;\r\n  border-bottom: 1px solid #e1e1e1;\r\n}\r\n.series {\r\n  border-bottom: 1px solid #e1e1e1;\r\n  border-left: 1px solid #e1e1e1;\r\n  border-right: 1px solid #e1e1e1;\r\n}\r\n.info .id_box {\r\n  margin: 0 0 20px;\r\n}\r\n.hero_id_label {\r\n  font-family: Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  font-size: 13px;\r\n  line-height: 20px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.hero_id {\r\n  color: #151515;\r\n  font-size: 16px;\r\n  word-break: break-word;\r\n  font-family: Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n}\r\np,\r\n.hero_label {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.info_text_container {\r\n  padding-left: 2em;\r\n  padding-top: 2em;\r\n}\r\n.series_text_container {\r\n  padding: 2em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1kZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0M7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsK0RBQStEO0VBQy9ELGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsK0RBQStEO0VBQy9ELGdCQUFnQjtBQUNsQjtBQUVBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hlcm8tZGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvRGV0YWlsQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAuNWVtIDA7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBwYWRkaW5nLWxlZnQ6IC40ZW07XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG5cclxuLmR0LWJ1dHRvbisuZHQtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbmZvX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLmRldGFpbHMgLmluZm8ge1xyXG4gIC1tcy1ncmlkLWNvbHVtbjogMTtcclxuICBncmlkLWNvbHVtbjogMTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZTFlMTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UxZTFlMTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxufVxyXG5cclxuLnNlcmllcyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMWUxZTE7XHJcbn1cclxuXHJcbi5pbmZvIC5pZF9ib3gge1xyXG4gIG1hcmdpbjogMCAwIDIwcHg7XHJcbn1cclxuXHJcbi5oZXJvX2lkX2xhYmVsIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBUcmVidWNoZXQgTVMsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaGVyb19pZCB7XHJcbiAgY29sb3I6ICMxNTE1MTU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgVHJlYnVjaGV0IE1TLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbnAsXHJcbi5oZXJvX2xhYmVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmluZm9fdGV4dF9jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMmVtO1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbn1cclxuXHJcbi5zZXJpZXNfdGV4dF9jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.ts ***!
  \******************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");





let HeroDetailComponent = class HeroDetailComponent {
    constructor(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    ngOnInit() {
        if (!this.hero) {
            this.getHero();
        }
    }
    getHero() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.hero = this.heroService.tryGetHeroLocally(id) || null;
        if (!this.hero) {
            this.heroService.getHero(id).subscribe(hero => this.hero = hero);
        }
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.heroService.updateLocalHero(this.hero);
        // this.heroService.updateHero(this.hero)
        //   .subscribe(() => this.goBack());
    }
    getImage() {
        return `${this.hero.thumbnail.path}/standard_xlarge.jpg`;
    }
    getSeriesItems(hero) {
        return hero.series.available > 0 ? hero.series.items : null;
    }
};
HeroDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hero-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hero-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hero-detail/hero-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/hero-detail/hero-detail.component.css")).default]
    })
], HeroDetailComponent);



/***/ }),

/***/ "./src/app/hero-search/hero-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* HeroSearch private styles */\r\nh3 {\r\n  margin-bottom: 5px;\r\n}\r\nlabel {\r\n  font-size: 14px;\r\n}\r\n.search-result li {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width: 208px;\r\n  height: 20px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n}\r\n.search-result li:hover {\r\n  background-color: #00848e;\r\n}\r\n.search-result li a {\r\n  color: #888;\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n.search-result li a:hover {\r\n  color: white;\r\n}\r\n.search-result li a:active {\r\n  color: white;\r\n}\r\n#search-box {\r\n  width: 220px;\r\n  height: 20px;\r\n}\r\nul.search-result {\r\n  margin-top: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1zZWFyY2gvaGVyby1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7QUFDOUI7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9oZXJvLXNlYXJjaC9oZXJvLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb1NlYXJjaCBwcml2YXRlIHN0eWxlcyAqL1xyXG5oMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdCBsaSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgd2lkdGg6IDIwOHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg0OGU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdCBsaSBhOmFjdGl2ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jc2VhcmNoLWJveCB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxudWwuc2VhcmNoLXJlc3VsdCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/hero-search/hero-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.ts ***!
  \******************************************************/
/*! exports provided: HeroSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function() { return HeroSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");





let HeroSearchComponent = class HeroSearchComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((term) => this.heroService.searchHeroes(term)));
    }
};
HeroSearchComponent.ctorParameters = () => [
    { type: _hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"] }
];
HeroSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hero-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hero-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hero-search/hero-search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hero-search.component.css */ "./src/app/hero-search/hero-search.component.css")).default]
    })
], HeroSearchComponent);



/***/ }),

/***/ "./src/app/hero.service.ts":
/*!*********************************!*\
  !*** ./src/app/hero.service.ts ***!
  \*********************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let HeroService = class HeroService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.heroesUrl = 'api/heroes'; // URL to web api
        this.marvelAPI = {
            ts: '1',
            publicKey: 'ce160eefcb9aebd904aebc4b26834292',
            privateKey: 'b6514e52a26973fc538d9a33f3c1bb65f17e3c28',
            hash: 'f68daa7ad9dd734af8ebffd116a2c18d'
        };
        // tslint:disable-next-line: max-line-length
        this.marvelAPIBaseURL = 'https://gateway.marvel.com/v1/public/characters';
        this.marvelAPIQueryParams = `ts=${this.marvelAPI.ts}&apikey=${this.marvelAPI.publicKey}&hash=${this.marvelAPI.hash}`;
        this.newlyAddedId = 20000;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    // getHeroes(): Observable<Hero[]> {
    //   this.messageService.add('HeroService fetched heroes');
    //   return of(HEROES);
    // }
    /** GET heroes from the server */
    getHeroes() {
        const marvelAPIURL = `${this.marvelAPIBaseURL}?${this.marvelAPIQueryParams}`;
        return this.http.get(marvelAPIURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log('fetched heroes')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => res.data.results), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getHeroes', [])));
    }
    /** GET hero by id. Will 404 if id not found */
    getHero(id) {
        const url = `${this.marvelAPIBaseURL}/${id}?${this.marvelAPIQueryParams}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(x => x.status === 'Ok' && x.data.results.length ?
            this.log(`fetched heroes with id="${id}"`) :
            this.log(`no heroes matching id "${id}" could be found`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => res ? res.data.results[0] : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError(`getHero from API with id=${id}`)));
    }
    tryGetHeroLocally(id) {
        if (!this.heroes || !this.heroes.length) {
            this.getHeroes().subscribe(heroes => { this.heroes = heroes; return this.findHeroById(id); });
            return;
        }
        return this.findHeroById(id);
    }
    findHeroById(id) {
        return this.heroes.find(h => h.id === id);
    }
    /** Log a HeroService message with the MessageService */
    log(message) {
        this.messageService.add(`HeroService: ${message}`);
    }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error && error.error ? error.error.status : error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    /** PUT: update the hero on the server */
    updateHero(hero) {
        return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log(`updated hero id=${hero.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateHero')));
    }
    updateLocalHero(hero) {
        if (!this.heroes || !this.heroes.length) {
            this.getHeroes().subscribe(heroes => { this.heroes = heroes; this.updateHeroName(hero); });
            return;
        }
        this.updateHeroName(hero);
    }
    updateHeroName(hero) {
        this.heroes.find(h => h.id === hero.id).name = hero.name; // only first found item is changed;
        // this.heroes.forEach((element, index) => {  //to change all names
        //   if (element.name === hero.name) {
        //     this.heroes[index].name = hero.name;
        //   }
        // });
    }
    /** POST: add a new hero to the server */
    addHero(hero) {
        return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((newHero) => this.log(`added hero w/ id=${newHero.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addHero')));
    }
    /** DELETE: delete the hero from the server */
    deleteHero(hero) {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log(`deleted hero id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteHero')));
    }
    /* GET heroes whose name contains search term */
    searchHeroes(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        const url = `${this.marvelAPIBaseURL}?name=${term}&${this.marvelAPIQueryParams}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(x => x.status === 'Ok' && x.data.results.length ?
            this.log(`found heroes matching "${term}"`) :
            this.log(`no heroes matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => res.data.results), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('searchHeroes', [])));
    }
};
HeroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
HeroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HeroService);



/***/ }),

/***/ "./src/app/heroes/heroes.component.css":
/*!*********************************************!*\
  !*** ./src/app/heroes/heroes.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* HeroesComponent's private CSS styles */\r\n.heroes {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 75%;\r\n}\r\n.heroes li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.heroes li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.heroes a {\r\n  color: #333;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n}\r\n.heroes a:hover {\r\n  color: #00a1b2;\r\n}\r\n.heroes .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #00a1b2;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.6em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n.heroes .badge:hover {\r\n  background-color: #2d8b95;\r\n}\r\n.heroes span.name {\r\n  display: inline-block;\r\n  vertical-align: text-bottom;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: calc(100% - 28px);\r\n  top: -33px;\r\n  background-color: gray;\r\n  color: white;\r\n  padding: 5px 10px;\r\n}\r\nbutton.delete:hover {\r\n  background-color: #9c5061;\r\n}\r\n.inline {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n.inline input {\r\n  width: 75%;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QztFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbi5oZXJvZXMge1xyXG4gIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5oZXJvZXMgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICBtYXJnaW46IC41ZW07XHJcbiAgcGFkZGluZzogLjNlbSAwO1xyXG4gIGhlaWdodDogMS42ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uaGVyb2VzIGxpOmhvdmVyIHtcclxuICBjb2xvcjogIzYwN0Q4QjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gIGxlZnQ6IC4xZW07XHJcbn1cclxuXHJcbi5oZXJvZXMgYSB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmhlcm9lcyBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAwYTFiMjtcclxufVxyXG5cclxuLmhlcm9lcyAuYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExYjI7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTFweDtcclxuICB0b3A6IC00cHg7XHJcbiAgaGVpZ2h0OiAxLjZlbTtcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcblxyXG4uaGVyb2VzIC5iYWRnZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkOGI5NTtcclxufVxyXG5cclxuLmhlcm9lcyBzcGFuLm5hbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5cclxuYnV0dG9uLmRlbGV0ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDI4cHgpO1xyXG4gIHRvcDogLTMzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzUwNjE7XHJcbn1cclxuXHJcbi5pbmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmlubGluZSBpbnB1dCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");



// import { MessageService } from '../message.service';
let HeroesComponent = class HeroesComponent {
    constructor(heroService /*, private messageService: MessageService*/) {
        this.heroService = heroService;
    }
    ngOnInit() {
        if (!this.heroService.heroes || !this.heroService.heroes.length) {
            this.getHeroes();
        }
    }
    // onSelect(hero: Hero): void {
    //   this.selectedHero = hero;
    //   this.messageService.add(`HeroService: Selected hero id=${hero.id}, name=${hero.name}`);
    // }
    getHeroes() {
        this.heroService.getHeroes().subscribe(heroes => this.heroService.heroes = heroes);
    }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        // tslint:disable-next-line: max-line-length
        this.heroService.heroes.push({ name, id: this.heroService.newlyAddedId, series: {}, thumbnail: { path: 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/', extension: 'jpg' } });
        this.heroService.newlyAddedId++;
        // this.heroService.addHero({ name } as Hero)
        //   .subscribe(hero => {
        //     this.heroes.push(hero);
        //   });
    }
    delete(hero) {
        this.heroService.heroes = this.heroService.heroes.filter(h => h !== hero);
        // this.heroService.deleteHero(hero).subscribe();
    }
    getImage(hero) {
        return `${hero.thumbnail.path}/standard_xlarge.jpg`;
    }
};
HeroesComponent.ctorParameters = () => [
    { type: _hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"] /*, private messageService: MessageService*/ }
];
HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heroes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heroes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/heroes/heroes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heroes.component.css */ "./src/app/heroes/heroes.component.css")).default]
    })
], HeroesComponent);



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], MessageService);



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MessagesComponent's private CSS styles */\r\nh2,\r\ndt-card-title {\r\n  color: #00848e;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody,\r\ninput[text],\r\nbutton {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear {\r\n  color: #333;\r\n  margin: 12px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0M7O0VBRUUsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuaDIsXHJcbmR0LWNhcmQtdGl0bGUge1xyXG4gIGNvbG9yOiAjMDA4NDhlO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDJlbTtcclxufVxyXG5cclxuYm9keSxcclxuaW5wdXRbdGV4dF0sXHJcbmJ1dHRvbiB7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XHJcbn1cclxuXHJcbmJ1dHRvbi5jbGVhciB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY3Vyc29yOiBoYW5kO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogI2FhYTtcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuXHJcbmJ1dHRvbi5jbGVhciB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgbWFyZ2luOiAxMnB4IDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



let MessagesComponent = class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")).default]
    })
], MessagesComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Programming\Repositories\MarvelHeroes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map