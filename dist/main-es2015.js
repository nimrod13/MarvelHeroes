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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");







const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_2__["HeroesComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'detail/:id', component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__["HeroDetailComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dynatrace/barista-components/button-group */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button-group.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attribution/attribution.component */ "./src/app/attribution/attribution.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







class AppComponent {
    constructor() {
        this.title = 'Marvel Heroes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 3, consts: [[1, "container"], ["dt-button", "", "routerLink", "/dashboard"], ["dt-button", "", "routerLink", "/heroes"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "dt-button-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "dt-button-group-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "dt-button-group-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-attribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.title));
    } }, directives: [_dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_1__["DtButtonGroup"], _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_1__["DtButtonGroupItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"], _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_4__["AttributionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n  font-weight: 500;\r\n  margin: auto;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  max-width: 700px;\r\n  margin: auto;\r\n}\r\nheader[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #222831;\r\n  text-align: left;\r\n}\r\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  padding: 25px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  letter-spacing: 10px;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  margin: 30px 0;\r\n  text-align: center;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .dt-button-group-item[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link, nav[_ngcontent-%COMP%]   .dt-button-group-item[_ngcontent-%COMP%]:visited, nav[_ngcontent-%COMP%]   .dt-button-group-item[_ngcontent-%COMP%]:link {\r\n  color: #334953;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   .dt-button-group-item[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  background: #00848e;\r\n  border-color: #00848e;\r\n}\r\n.dt-button[_ngcontent-%COMP%] + .dt-button[_ngcontent-%COMP%], .dt-button-group-item[_ngcontent-%COMP%] + .dt-button-group-item[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUVBOzs7O0VBSUUsY0FBYztBQUNoQjtBQUVBOztFQUVFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBRUE7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmgxIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwODQ4ZTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODMxO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmhlYWRlciBoMSB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5uYXYgYSxcclxubmF2IC5kdC1idXR0b24tZ3JvdXAtaXRlbSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxubmF2IGE6dmlzaXRlZCxcclxuYTpsaW5rLFxyXG5uYXYgLmR0LWJ1dHRvbi1ncm91cC1pdGVtOnZpc2l0ZWQsXHJcbm5hdiAuZHQtYnV0dG9uLWdyb3VwLWl0ZW06bGluayB7XHJcbiAgY29sb3I6ICMzMzQ5NTM7XHJcbn1cclxuXHJcbm5hdiBhOmhvdmVyLFxyXG5uYXYgLmR0LWJ1dHRvbi1ncm91cC1pdGVtOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzAwODQ4ZTtcclxuICBib3JkZXItY29sb3I6ICMwMDg0OGU7XHJcbn1cclxuXHJcbi5kdC1idXR0b24rLmR0LWJ1dHRvbixcclxuLmR0LWJ1dHRvbi1ncm91cC1pdGVtKy5kdC1idXR0b24tZ3JvdXAtaXRlbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLypcclxubmF2IGEuYWN0aXZlLFxyXG5uYXYgLmR0LWJ1dHRvbi1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMzliZTU7XHJcbn0gKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hero-search/hero-search.component */ "./src/app/hero-search/hero-search.component.ts");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
/* harmony import */ var _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @dynatrace/barista-components/form-field */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-form-field.js");
/* harmony import */ var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @dynatrace/barista-components/input */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
/* harmony import */ var _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @dynatrace/barista-components/loading-distractor */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-loading-distractor.js");
/* harmony import */ var _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @dynatrace/barista-components/button-group */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button-group.js");
/* harmony import */ var _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @dynatrace/barista-components/card */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-card.js");
/* harmony import */ var _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @dynatrace/barista-components/inline-editor */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-inline-editor.js");
/* harmony import */ var _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./attribution/attribution.component */ "./src/app/attribution/attribution.component.ts");
/* harmony import */ var _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/loading/loading.component */ "./src/app/dashboard/loading/loading.component.ts");
/* harmony import */ var _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fallbackimg.directive */ "./src/app/fallbackimg.directive.ts");
/* harmony import */ var _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @dynatrace/barista-components/pagination */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-pagination.js");
/* harmony import */ var _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @dynatrace/barista-components/toast */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-toast.js");


 // <-- NgModel lives here
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__["DtIconModule"].forRoot({ svgIconLocation: '/assets/icons/{{name}}.svg' }),
            _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__["DtButtonModule"],
            _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__["DtFormFieldModule"],
            _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__["DtInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__["DtButtonGroupModule"],
            _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__["DtCardModule"],
            _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__["DtInlineEditorModule"],
            _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__["DtLoadingDistractorModule"],
            _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__["DtPaginationModule"],
            _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__["DtToastModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"],
        _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_10__["HeroSearchComponent"],
        _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_20__["AttributionComponent"],
        _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__["LoadingComponent"],
        _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_22__["FallbackimgDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__["DtIconModule"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__["DtButtonModule"],
        _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__["DtFormFieldModule"],
        _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__["DtInputModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__["DtButtonGroupModule"],
        _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__["DtCardModule"],
        _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__["DtInlineEditorModule"],
        _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__["DtLoadingDistractorModule"],
        _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__["DtPaginationModule"],
        _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__["DtToastModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"],
                    _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"],
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_10__["HeroSearchComponent"],
                    _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_20__["AttributionComponent"],
                    _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__["LoadingComponent"],
                    _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_22__["FallbackimgDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__["DtIconModule"].forRoot({ svgIconLocation: '/assets/icons/{{name}}.svg' }),
                    _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__["DtButtonModule"],
                    _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__["DtFormFieldModule"],
                    _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__["DtInputModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__["DtButtonGroupModule"],
                    _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__["DtCardModule"],
                    _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__["DtInlineEditorModule"],
                    _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__["DtLoadingDistractorModule"],
                    _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__["DtPaginationModule"],
                    _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__["DtToastModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AttributionComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AttributionComponent.ɵfac = function AttributionComponent_Factory(t) { return new (t || AttributionComponent)(); };
AttributionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributionComponent, selectors: [["app-attribution"]], decls: 5, vars: 0, consts: [["href", "https://marvel.com"]], template: function AttributionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data provided by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Marvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". \u00A9 2014 Marvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%] {\r\n  color: gray;\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #00848e;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0cmlidXRpb24vYXR0cmlidXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdHRyaWJ1dGlvbi9hdHRyaWJ1dGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDA4NDhlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attribution',
                templateUrl: './attribution.component.html',
                styleUrls: ['./attribution.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero-search/hero-search.component */ "./src/app/hero-search/hero-search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/dashboard/loading/loading.component.ts");








function DashboardComponent_div_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r10.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r10.name);
} }
function DashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_2_a_2_Template, 4, 2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-hero-search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.heroes);
} }
function DashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(heroService, messageService) {
        this.heroService = heroService;
        this.messageService = messageService;
        this.heroes = [];
    }
    ngOnInit() {
        const heroesLocal = this.heroService.tryGetHeroesFromLocalStorage();
        if (heroesLocal) {
            this.heroes = this.getRandomHeroes(heroesLocal);
            this.messageService.add(`Fetched ${this.heroes.reduce((prev, hero) => `${prev.length ? prev + ', ' : ''} ${hero.name}`, '')} from local storage.`);
            return;
        }
        this.heroService.getHeroes().subscribe(heroes => {
            this.heroes = this.getRandomHeroes(heroes);
            this.heroService.addHeroesToLocalStorage(heroes);
        });
    }
    getRandomHeroes(heroes) {
        return heroes.sort(() => 0.5 - Math.random()).slice(0, 4);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "grid", "grid-pad"], ["class", "col-1-4", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-1-4", 3, "routerLink"], [1, "module", "hero"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heroes.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.heroes.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_4__["HeroSearchComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]], styles: ["[class*='col-'][_ngcontent-%COMP%] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-'][_ngcontent-%COMP%]:last-of-type {\r\n  padding-right: 0;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\r\n  box-sizing: border-box;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.grid[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n.col-1-4[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n}\r\n.module[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  min-height: 120px;\r\n  min-width: 120px;\r\n  \r\n  border-radius: 2px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.module.hero[_ngcontent-%COMP%]:hover {\r\n  \r\n  background-color: #022629;\r\n  cursor: pointer;\r\n  \r\n}\r\n.module.hero[_ngcontent-%COMP%] {\r\n  color: white;\r\n  border-radius: 3px;\r\n  box-shadow: 2px 3px 2px 0 rgba(9, 130, 154, 0.2);\r\n  background: linear-gradient(rgba(0, 132, 142), rgba(0, 132, 142, 0.69));\r\n}\r\n.grid-pad[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n}\r\n.grid.grid-pad[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n@media (max-width: 600px) {\r\n  .module[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    max-height: 75px;\r\n  }\r\n\r\n  .module.hero[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    min-height: 80px;\r\n  }\r\n}\r\n@media (min-width: 601px) and (max-width: 1024px) {\r\n  .module.hero[_ngcontent-%COMP%] {\r\n    min-height: 120px;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  .module[_ngcontent-%COMP%] {\r\n    min-width: 60px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QztFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBOzs7RUFLRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELHVFQUF1RTtBQUN6RTtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGFzaGJvYXJkQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbltjbGFzcyo9J2NvbC0nXSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4qLFxyXG4qOmFmdGVyLFxyXG4qOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29sLTEtNCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLm1vZHVsZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NDhlOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2R1bGUuaGVybzpob3ZlciB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2RmZTdlNzsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyNjI5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBjb2xvcjogIzAwODQ4ZTsgKi9cclxufVxyXG5cclxuLm1vZHVsZS5oZXJvIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAzcHggMnB4IDAgcmdiYSg5LCAxMzAsIDE1NCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAxMzIsIDE0MiksIHJnYmEoMCwgMTMyLCAxNDIsIDAuNjkpKTtcclxufVxyXG5cclxuLmdyaWQtcGFkIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5ncmlkLmdyaWQtcGFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9kdWxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgfVxyXG5cclxuICAubW9kdWxlLmhlcm8ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAubW9kdWxlLmhlcm8ge1xyXG4gICAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1vZHVsZSB7XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/loading/loading.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/loading/loading.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dynatrace/barista-components/loading-distractor */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-loading-distractor.js");



class LoadingComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 1, vars: 0, template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dt-loading-spinner");
    } }, directives: [_dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_1__["DtLoadingSpinner"]], styles: [".dt-loading-spinner-svg {\r\n  stroke: #c7bb63 !important;\r\n}\r\n\r\ndt-loading-spinner {\r\n  display: block !important;\r\n  margin: auto;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kdC1sb2FkaW5nLXNwaW5uZXItc3ZnIHtcclxuICBzdHJva2U6ICNjN2JiNjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuZHQtbG9hZGluZy1zcGlubmVyIHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/fallbackimg.directive.ts":
/*!******************************************!*\
  !*** ./src/app/fallbackimg.directive.ts ***!
  \******************************************/
/*! exports provided: FallbackimgDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FallbackimgDirective", function() { return FallbackimgDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FallbackimgDirective {
    constructor(eRef) {
        this.eRef = eRef;
    }
    loadFallbackOnError() {
        const element = this.eRef.nativeElement;
        element.src = this.appFallbackimg || 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_xlarge.jpg';
    }
}
FallbackimgDirective.ɵfac = function FallbackimgDirective_Factory(t) { return new (t || FallbackimgDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FallbackimgDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FallbackimgDirective, selectors: [["img", "appFallbackimg", ""]], hostBindings: function FallbackimgDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function FallbackimgDirective_error_HostBindingHandler() { return ctx.loadFallbackOnError(); });
    } }, inputs: { appFallbackimg: "appFallbackimg" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FallbackimgDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'img[appFallbackimg]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appFallbackimg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadFallbackOnError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['error']
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
/* harmony import */ var _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fallbackimg.directive */ "./src/app/fallbackimg.directive.ts");
/* harmony import */ var _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dynatrace/barista-components/inline-editor */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-inline-editor.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function HeroDetailComponent_div_0_div_18_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serie_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](serie_r14.name);
} }
function HeroDetailComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Series");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeroDetailComponent_div_0_div_18_p_6_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.getSeriesItems(ctx_r12.hero));
} }
function HeroDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "em", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_em_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.hero.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeroDetailComponent_div_0_div_18_Template, 7, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r11.hero.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.getImageSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("srcset", ctx_r11.getImageSrcSet(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r11.hero.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.hero.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.hero.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.getSeriesItems(ctx_r11.hero));
} }
class HeroDetailComponent {
    constructor(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    ngOnInit() {
        if (!this.hero) {
            this.getHero();
        }
        // if (!this.hero.nickname) {
        //   this.hero.nickname = this.hero.name;
        // }
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
        ;
        // this.heroService.updateHero(this.hero)
        //   .subscribe(() => this.goBack());
    }
    getImageSrc() {
        const path = this.getPathWithHttps();
        return `${path}/landscape_xlarge.jpg`;
    }
    getImageSrcSet() {
        const path = this.getPathWithHttps();
        return `${path}/landscape_small.jpg 120w, ${path}/landscape_medium.jpg 175w, ${path}/landscape_large.jpg 190w, ${path}/landscape_xlarge.jpg 270w`;
    }
    getPathWithHttps() {
        return this.hero.thumbnail.path.indexOf('https') >= 0 ? this.hero.thumbnail.path : this.hero.thumbnail.path.replace('http', 'https');
    }
    getSeriesItems(hero) {
        return hero.series.available > 0 ? hero.series.items : null;
    }
}
HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) { return new (t || HeroDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
HeroDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroDetailComponent, selectors: [["app-hero-detail"]], inputs: { hero: "hero" }, decls: 6, vars: 1, consts: [["class", "details", 4, "ngIf"], ["dt-button", "", 3, "click"], [1, "details"], [1, "details_container"], [1, "info_container"], [1, "info"], ["height", "200px", "appFallbackimg", "", 3, "src", "srcset", "alt"], [1, "info_text_container"], [1, "info_row"], [1, "hero_label"], [1, "hero_id"], ["dt-inline-editor", "", "ariaLabelSave", "Save name", "ariaLabelCancel", "Cancel and discard changes", 3, "ngModel", "ngModelChange"], ["class", "info_container", 4, "ngIf"], [1, "series"], [1, "series_text_container"], ["class", "hero_serie", 4, "ngFor", "ngForOf"], [1, "hero_serie"]], template: function HeroDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeroDetailComponent_div_0_Template, 19, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_Template_button_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_Template_button_click_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hero);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__["DtButton"], _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_5__["FallbackimgDirective"], _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_6__["DtInlineEditor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: ["label[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n  margin-top: 5px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n.dt-button[_ngcontent-%COMP%] + .dt-button[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n.details[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n.details_container[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 10px rgba(14, 30, 37, .12);\r\n}\r\n.info_container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  background-color: white;\r\n}\r\n.details[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n  grid-column: 1;\r\n  border: 1px solid #e1e1e1;\r\n}\r\n.series[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e1e1e1;\r\n  border-left: 1px solid #e1e1e1;\r\n  border-right: 1px solid #e1e1e1;\r\n}\r\n.info_row[_ngcontent-%COMP%] + .info_row[_ngcontent-%COMP%] {\r\n  margin: 10px 0 0;\r\n}\r\n.hero_id_label[_ngcontent-%COMP%] {\r\n  font-family: Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  font-size: 13px;\r\n  line-height: 20px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.hero_id[_ngcontent-%COMP%] {\r\n  color: #151515;\r\n  font-size: 16px;\r\n  word-break: break-word;\r\n  font-family: Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n}\r\np[_ngcontent-%COMP%], .hero_label[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.info_text_container[_ngcontent-%COMP%] {\r\n  padding-left: 2em;\r\n  padding-top: 2em;\r\n}\r\n.series_text_container[_ngcontent-%COMP%] {\r\n  padding: 2em;\r\n}\r\nem[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1kZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0M7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFFQTtFQUVFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLCtEQUErRDtFQUMvRCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLCtEQUErRDtFQUMvRCxnQkFBZ0I7QUFDbEI7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2hlcm8tZGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvRGV0YWlsQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBwYWRkaW5nLWxlZnQ6IC40ZW07XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG5cclxuLmR0LWJ1dHRvbisuZHQtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRldGFpbHNfY29udGFpbmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbn1cclxuXHJcbi5pbmZvX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRldGFpbHMgLmluZm8ge1xyXG4gIC1tcy1ncmlkLWNvbHVtbjogMTtcclxuICBncmlkLWNvbHVtbjogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG59XHJcblxyXG4uc2VyaWVzIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UxZTFlMTtcclxufVxyXG5cclxuLmluZm9fcm93Ky5pbmZvX3JvdyB7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMDtcclxufVxyXG5cclxuLmhlcm9faWRfbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFRyZWJ1Y2hldCBNUywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5oZXJvX2lkIHtcclxuICBjb2xvcjogIzE1MTUxNTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBUcmVidWNoZXQgTVMsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxucCxcclxuLmhlcm9fbGFiZWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaW5mb190ZXh0X2NvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgcGFkZGluZy10b3A6IDJlbTtcclxufVxyXG5cclxuLnNlcmllc190ZXh0X2NvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMmVtO1xyXG59XHJcblxyXG5lbSB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero-detail',
                templateUrl: './hero-detail.component.html',
                styleUrls: ['./hero-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, { hero: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dynatrace/barista-components/card */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-card.js");
/* harmony import */ var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dynatrace/barista-components/input */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









function HeroSearchComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r24.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r24.name, " ");
} }
class HeroSearchComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => this.heroService.searchHeroes(term)));
    }
}
HeroSearchComponent.ɵfac = function HeroSearchComponent_Factory(t) { return new (t || HeroSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"])); };
HeroSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroSearchComponent, selectors: [["app-hero-search"]], decls: 9, vars: 3, consts: [["for", "search-box"], ["dtInput", "", "id", "search-box", 3, "input"], ["searchBox", ""], [1, "search-result"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function HeroSearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dt-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search for hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HeroSearchComponent_Template_input_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.search(_r22.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeroSearchComponent_li_7_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.heroes$));
    } }, directives: [_dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_4__["DtCard"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_4__["DtCardTitle"], _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__["DtInput"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["h3[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width: 208px;\r\n  height: 20px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background-color: #00848e;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #888;\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n  color: white;\r\n}\r\n#search-box[_ngcontent-%COMP%] {\r\n  width: 220px;\r\n  height: 20px;\r\n}\r\nul.search-result[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  padding-left: 0;\r\n}\r\n.dt-card[_ngcontent-%COMP%] {\r\n  border-top: 3px solid #c7bb63;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1zZWFyY2gvaGVyby1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7QUFDOUI7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLDZDQUE2QztFQUM3QyxhQUFhO0VBQ2IsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvaGVyby1zZWFyY2gvaGVyby1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9TZWFyY2ggcHJpdmF0ZSBzdHlsZXMgKi9cclxuaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gIHdpZHRoOiAyMDhweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NDhlO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdCBsaSBhIHtcclxuICBjb2xvcjogIzg4ODtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkgYTphY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3NlYXJjaC1ib3gge1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbnVsLnNlYXJjaC1yZXN1bHQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uZHQtY2FyZCB7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNjN2JiNjM7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxNCwgMzAsIDM3LCAuMTIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero-search',
                templateUrl: './hero-search.component.html',
                styleUrls: ['./hero-search.component.css']
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dynatrace/barista-components/toast */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-toast.js");








class HeroService {
    constructor(http, messageService, toast) {
        this.http = http;
        this.messageService = messageService;
        this.toast = toast;
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
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    addHeroesToLocalStorage(heroes) {
        // tslint:disable-next-line: no-unused-expression
        heroes && localStorage.setItem('testHeroes', JSON.stringify(heroes));
    }
    tryGetHeroesFromLocalStorage() {
        const heroes = localStorage.getItem('testHeroes');
        return heroes && heroes.length ? JSON.parse(heroes) : null;
    }
    // getHeroes(): Observable<Hero[]> {
    //   this.messageService.add('HeroService fetched heroes');
    //   return of(HEROES);
    // }
    /** GET heroes from the server */
    getHeroes() {
        const marvelAPIURL = `${this.marvelAPIBaseURL}?limit=100&${this.marvelAPIQueryParams}`;
        return this.http.get(marvelAPIURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log('fetched heroes')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.data.results), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getHeroes', [])));
    }
    /** GET hero by id. Will 404 if id not found */
    getHero(id) {
        const url = `${this.marvelAPIBaseURL}/${id}?${this.marvelAPIQueryParams}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => x.status === 'Ok' && x.data.results.length ?
            this.log(`fetched heroes with id="${id}"`) :
            this.log(`no heroes matching id "${id}" could be found`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res ? res.data.results[0] : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getHero from API with id=${id}`)));
    }
    tryGetHeroLocally(id) {
        const heroesLocal = this.tryGetHeroesFromLocalStorage();
        if (!heroesLocal) {
            this.getHeroes().subscribe(heroes => { this.addHeroesToLocalStorage(heroes); return this.findHeroById(id, heroes); });
            return;
        }
        return this.findHeroById(id, heroesLocal);
    }
    findHeroById(id, heroes) {
        return heroes.find(h => h.id === id);
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    /** PUT: update the hero on the server */
    updateHero(hero) {
        return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`updated hero id=${hero.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateHero')));
    }
    updateLocalHero(hero) {
        const heroesLocal = this.tryGetHeroesFromLocalStorage();
        if (!heroesLocal) {
            this.getHeroes().subscribe(heroes => { this.addHeroesToLocalStorage(heroesLocal); this.updateHeroName(hero, heroes); });
            return;
        }
        this.updateHeroName(hero, heroesLocal);
    }
    updateHeroName(hero, heroes) {
        const heroCurrent = heroes.find(h => h.id === hero.id);
        if (!heroCurrent) {
            this.toast.create('This name cannot be changed!');
            return;
        }
        if (heroCurrent.name === hero.name) {
            this.toast.create('You have not made any changes!');
            return;
        }
        heroCurrent.name = hero.name; // only first found item is changed;
        this.addHeroesToLocalStorage(heroes);
        this.toast.create('Your changes have been saved!');
        // this.heroes.forEach((element, index) => {  //to change all names
        //   if (element.name === hero.name) {
        //     this.heroes[index].name = hero.name;
        //   }
        // });
    }
    /** POST: add a new hero to the server */
    addHero(hero) {
        return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((newHero) => this.log(`added hero w/ id=${newHero.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addHero')));
    }
    /** DELETE: delete the hero from the server */
    deleteHero(hero) {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`deleted hero id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteHero')));
    }
    /* GET heroes whose name contains search term */
    searchHeroes(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        const url = `${this.marvelAPIBaseURL}?nameStartsWith=${term}&${this.marvelAPIQueryParams}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => x.status === 'Ok' && x.data.results.length ?
            this.log(`found heroes matching "${term}"`) :
            this.log(`no heroes matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.data.results), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchHeroes', [])));
    }
}
HeroService.ɵfac = function HeroService_Factory(t) { return new (t || HeroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__["DtToast"])); };
HeroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeroService, factory: HeroService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__["DtToast"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dynatrace/barista-components/input */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function HeroesComponent_ul_9_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroesComponent_ul_9_li_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const hero_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.delete(hero_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r3.name);
} }
function HeroesComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeroesComponent_ul_9_li_1_Template, 8, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.heroService.tryGetHeroesFromLocalStorage());
} }
// import { MessageService } from '../message.service';
class HeroesComponent {
    constructor(heroService /*, private messageService: MessageService*/) {
        this.heroService = heroService;
    }
    ngOnInit() {
        if (!this.heroService.tryGetHeroesFromLocalStorage()) {
            this.getHeroes();
        }
    }
    // onSelect(hero: Hero): void {
    //   this.selectedHero = hero;
    //   this.messageService.add(`HeroService: Selected hero id=${hero.id}, name=${hero.name}`);
    // }
    getHeroes() {
        this.heroService.getHeroes().subscribe(heroes => this.heroService.addHeroesToLocalStorage(heroes));
    }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        const heroesLocal = this.heroService.tryGetHeroesFromLocalStorage();
        heroesLocal && heroesLocal.push({ name, id: heroesLocal[heroesLocal.length - 1].id + 1, series: {},
            thumbnail: { path: 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available', extension: 'jpg' } });
        this.heroService.addHeroesToLocalStorage(heroesLocal);
    }
    delete(hero) {
        let heroesLocal = this.heroService.tryGetHeroesFromLocalStorage();
        heroesLocal = heroesLocal.filter((h) => h.id !== hero.id);
        this.heroService.addHeroesToLocalStorage(heroesLocal);
    }
}
HeroesComponent.ɵfac = function HeroesComponent_Factory(t) { return new (t || HeroesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"])); };
HeroesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroesComponent, selectors: [["app-heroes"]], decls: 10, vars: 1, consts: [[1, "heroes_container"], [1, "inline"], ["type", "text", "dtInput", "", "placeholder", "Please add hero name"], ["heroName", ""], ["dt-button", "", 3, "click"], ["name", "plus-add"], ["class", "heroes", 4, "ngIf"], [1, "heroes"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "badge"], [1, "name"], ["title", "delete hero", 1, "delete", 3, "click"]], template: function HeroesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroesComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); ctx.add(_r0.value); return _r0.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dt-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeroesComponent_ul_9_Template, 2, 1, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heroService.tryGetHeroesFromLocalStorage());
    } }, directives: [_dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_2__["DtInput"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_3__["DtButton"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_4__["DtIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".heroes[_ngcontent-%COMP%] {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 75%;\r\n}\r\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n}\r\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #00a1b2;\r\n}\r\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #00a1b2;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.6em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]:hover {\r\n  background-color: #2d8b95;\r\n}\r\n.heroes[_ngcontent-%COMP%]   span.name[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  vertical-align: text-bottom;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: calc(100% - 28px);\r\n  top: -33px;\r\n  background-color: gray;\r\n  color: white;\r\n  padding: 5px 10px;\r\n}\r\nbutton.delete[_ngcontent-%COMP%]:hover {\r\n  background-color: #9c5061;\r\n}\r\n.inline[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n.inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n.heroes_container[_ngcontent-%COMP%] {\r\n  border-top: 3px solid #c7bb63;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n  background: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QztFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUVsQiw2Q0FBNkM7RUFDN0MsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuLmhlcm9lcyB7XHJcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLmhlcm9lcyBsaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gIG1hcmdpbjogLjVlbTtcclxuICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgaGVpZ2h0OiAxLjZlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5oZXJvZXMgbGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgbGVmdDogLjFlbTtcclxufVxyXG5cclxuLmhlcm9lcyBhIHtcclxuICBjb2xvcjogIzMzMztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGVyb2VzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDBhMWIyO1xyXG59XHJcblxyXG4uaGVyb2VzIC5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFiMjtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtMXB4O1xyXG4gIHRvcDogLTRweDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIG1pbi13aWR0aDogMTZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbn1cclxuXHJcbi5oZXJvZXMgLmJhZGdlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ4Yjk1O1xyXG59XHJcblxyXG4uaGVyb2VzIHNwYW4ubmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcblxyXG5idXR0b24uZGVsZXRlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogY2FsYygxMDAlIC0gMjhweCk7XHJcbiAgdG9wOiAtMzNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuYnV0dG9uLmRlbGV0ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljNTA2MTtcclxufVxyXG5cclxuLmlubGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW5saW5lIGlucHV0IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZXJvZXNfY29udGFpbmVyIHtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2M3YmI2MztcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxNCwgMzAsIDM3LCAuMTIpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-heroes',
                templateUrl: './heroes.component.html',
                styleUrls: ['./heroes.component.css']
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dynatrace/barista-components/card */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-card.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");







function MessagesComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r19);
} }
function MessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dt-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dt-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.messageService.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dt-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MessagesComponent_div_0_div_7_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.messageService.messages);
} }
class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 1, vars: 1, consts: [["class", "dt-demo-card", 4, "ngIf"], [1, "dt-demo-card"], ["dt-button", "", "variant", "secondary", 1, "clear", 3, "click"], ["name", "delete"], ["class", "messages", 4, "ngFor", "ngForOf"], [1, "messages"], [1, "message"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 8, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_3__["DtCard"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_3__["DtCardTitle"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__["DtButton"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_5__["DtIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%], dt-card-title[_ngcontent-%COMP%] {\r\n  color: #00848e;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 2em;\r\n}\r\nbody[_ngcontent-%COMP%], input[text][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear[_ngcontent-%COMP%] {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  margin: 12px 0;\r\n}\r\n.dt-card[_ngcontent-%COMP%] {\r\n  border-top: 4px solid #00848e;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0M7O0VBRUUsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLDZDQUE2QztFQUM3QyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhDQUE4QztBQUNoRCIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNZXNzYWdlc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5oMixcclxuZHQtY2FyZC10aXRsZSB7XHJcbiAgY29sb3I6ICMwMDg0OGU7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMmVtO1xyXG59XHJcblxyXG5ib2R5LFxyXG5pbnB1dFt0ZXh0XSxcclxuYnV0dG9uIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcclxufVxyXG5cclxuYnV0dG9uLmNsZWFyIHtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG5cclxuYnV0dG9uLmNsZWFyIHtcclxuICBjb2xvcjogIzMzMztcclxuICBtYXJnaW46IDEycHggMDtcclxufVxyXG5cclxuLmR0LWNhcmQge1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDA4NDhlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.css']
            }]
    }], function () { return [{ type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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