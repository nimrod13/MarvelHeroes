function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./heroes/heroes.component */
    "./src/app/heroes/heroes.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hero-detail/hero-detail.component */
    "./src/app/hero-detail/hero-detail.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'heroes',
      component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_2__["HeroesComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: 'detail/:id',
      component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__["HeroDetailComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'top'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'top'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @dynatrace/barista-components/button-group */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button-group.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/messages/messages.component.ts");
    /* harmony import */


    var _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./attribution/attribution.component */
    "./src/app/attribution/attribution.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Marvel Heroes';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 14,
      vars: 3,
      consts: [[1, "container"], ["dt-button", "", "routerLink", "/dashboard"], ["dt-button", "", "routerLink", "/heroes"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.title));
        }
      },
      directives: [_dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_1__["DtButtonGroup"], _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_1__["DtButtonGroupItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"], _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_4__["AttributionComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]],
      styles: ["h1[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n  font-weight: 500;\r\n  margin: auto;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  max-width: 700px;\r\n  margin: auto;\r\n}\r\nheader[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #222831;\r\n  text-align: left;\r\n}\r\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  padding: 25px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  letter-spacing: 10px;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  margin: 30px 0;\r\n  text-align: center;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .dt-button-group-item[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link, nav[_ngcontent-%COMP%]   .dt-button-group-item[_ngcontent-%COMP%]:visited, nav[_ngcontent-%COMP%]   .dt-button-group-item[_ngcontent-%COMP%]:link {\r\n  color: #334953;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   .dt-button-group-item[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  background: #00848e;\r\n  border-color: #00848e;\r\n}\r\n.dt-button[_ngcontent-%COMP%] + .dt-button[_ngcontent-%COMP%], .dt-button-group-item[_ngcontent-%COMP%] + .dt-button-group-item[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUVBOzs7O0VBSUUsY0FBYztBQUNoQjtBQUVBOztFQUVFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NDhlOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaGVhZGVyIGgxIHtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxufVxyXG5cclxubmF2IHtcclxuICBtYXJnaW46IDMwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm5hdiBhLFxyXG5uYXYgLmR0LWJ1dHRvbi1ncm91cC1pdGVtIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5uYXYgYTp2aXNpdGVkLFxyXG5hOmxpbmssXHJcbm5hdiAuZHQtYnV0dG9uLWdyb3VwLWl0ZW06dmlzaXRlZCxcclxubmF2IC5kdC1idXR0b24tZ3JvdXAtaXRlbTpsaW5rIHtcclxuICBjb2xvcjogIzMzNDk1MztcclxufVxyXG5cclxubmF2IGE6aG92ZXIsXHJcbm5hdiAuZHQtYnV0dG9uLWdyb3VwLWl0ZW06aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjMDA4NDhlO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwODQ4ZTtcclxufVxyXG5cclxuLmR0LWJ1dHRvbisuZHQtYnV0dG9uLFxyXG4uZHQtYnV0dG9uLWdyb3VwLWl0ZW0rLmR0LWJ1dHRvbi1ncm91cC1pdGVtIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./heroes/heroes.component */
    "./src/app/heroes/heroes.component.ts");
    /* harmony import */


    var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hero-detail/hero-detail.component */
    "./src/app/hero-detail/hero-detail.component.ts");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/messages/messages.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./hero-search/hero-search.component */
    "./src/app/hero-search/hero-search.component.ts");
    /* harmony import */


    var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @dynatrace/barista-components/icon */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @dynatrace/barista-components/button */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
    /* harmony import */


    var _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @dynatrace/barista-components/form-field */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-form-field.js");
    /* harmony import */


    var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @dynatrace/barista-components/input */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
    /* harmony import */


    var _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @dynatrace/barista-components/loading-distractor */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-loading-distractor.js");
    /* harmony import */


    var _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @dynatrace/barista-components/button-group */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button-group.js");
    /* harmony import */


    var _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @dynatrace/barista-components/card */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-card.js");
    /* harmony import */


    var _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @dynatrace/barista-components/inline-editor */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-inline-editor.js");
    /* harmony import */


    var _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./attribution/attribution.component */
    "./src/app/attribution/attribution.component.ts");
    /* harmony import */


    var _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./dashboard/loading/loading.component */
    "./src/app/dashboard/loading/loading.component.ts");
    /* harmony import */


    var _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./fallbackimg.directive */
    "./src/app/fallbackimg.directive.ts");
    /* harmony import */


    var _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @dynatrace/barista-components/pagination */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-pagination.js");
    /* harmony import */


    var _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @dynatrace/barista-components/toast */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-toast.js");
    /* harmony import */


    var _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @dynatrace/barista-components/table */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-table.js");
    /* harmony import */


    var _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./dynamic-table/dynamic-table.component */
    "./src/app/dynamic-table/dynamic-table.component.ts"); // <-- NgModel lives here


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__["DtIconModule"].forRoot({
        svgIconLocation: '/assets/icons/{{name}}.svg'
      }), _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__["DtButtonModule"], _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__["DtFormFieldModule"], _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__["DtInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__["DtButtonGroupModule"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__["DtCardModule"], _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__["DtInlineEditorModule"], _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__["DtLoadingDistractorModule"], _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__["DtPaginationModule"], _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__["DtToastModule"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_25__["DtTableModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"], _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_10__["HeroSearchComponent"], _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_20__["AttributionComponent"], _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__["LoadingComponent"], _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_22__["FallbackimgDirective"], _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_26__["DynamicTableComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__["DtIconModule"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__["DtButtonModule"], _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__["DtFormFieldModule"], _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__["DtInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__["DtButtonGroupModule"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__["DtCardModule"], _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__["DtInlineEditorModule"], _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__["DtLoadingDistractorModule"], _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__["DtPaginationModule"], _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__["DtToastModule"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_25__["DtTableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"], _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_10__["HeroSearchComponent"], _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_20__["AttributionComponent"], _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__["LoadingComponent"], _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_22__["FallbackimgDirective"], _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_26__["DynamicTableComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__["DtIconModule"].forRoot({
            svgIconLocation: '/assets/icons/{{name}}.svg'
          }), _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__["DtButtonModule"], _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__["DtFormFieldModule"], _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__["DtInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__["DtButtonGroupModule"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__["DtCardModule"], _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__["DtInlineEditorModule"], _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__["DtLoadingDistractorModule"], _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__["DtPaginationModule"], _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__["DtToastModule"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_25__["DtTableModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/attribution/attribution.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/attribution/attribution.component.ts ***!
    \******************************************************/

  /*! exports provided: AttributionComponent */

  /***/
  function srcAppAttributionAttributionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttributionComponent", function () {
      return AttributionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AttributionComponent =
    /*#__PURE__*/
    function () {
      function AttributionComponent() {
        _classCallCheck(this, AttributionComponent);
      }

      _createClass(AttributionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AttributionComponent;
    }();

    AttributionComponent.ɵfac = function AttributionComponent_Factory(t) {
      return new (t || AttributionComponent)();
    };

    AttributionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AttributionComponent,
      selectors: [["app-attribution"]],
      decls: 5,
      vars: 0,
      consts: [["href", "https://marvel.com"]],
      template: function AttributionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data provided by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Marvel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". \xA9 2020 Marvel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["p[_ngcontent-%COMP%] {\r\n  color: gray;\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #00848e;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0cmlidXRpb24vYXR0cmlidXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdHRyaWJ1dGlvbi9hdHRyaWJ1dGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDA4NDhlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-attribution',
          templateUrl: './attribution.component.html',
          styleUrls: ['./attribution.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../hero.service */
    "./src/app/hero.service.ts");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../message.service */
    "./src/app/message.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../hero-search/hero-search.component */
    "./src/app/hero-search/hero-search.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./loading/loading.component */
    "./src/app/dashboard/loading/loading.component.ts");

    function DashboardComponent_div_2_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hero_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r11.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r11.name);
      }
    }

    function DashboardComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_2_a_2_Template, 7, 2, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-hero-search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.heroes);
      }
    }

    function DashboardComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(heroService, messageService) {
        _classCallCheck(this, DashboardComponent);

        this.heroService = heroService;
        this.messageService = messageService;
        this.heroes = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var heroesLocal = this.heroService.tryGetHeroesFromLocalStorage();

          if (heroesLocal) {
            this.heroes = this.getRandomHeroes(heroesLocal);
            this.messageService.add("Fetched ".concat(this.heroes.reduce(function (prev, hero) {
              return "".concat(prev.length ? prev + ', ' : '', " ").concat(hero.name);
            }, ''), " from local storage."));
            return;
          }

          this.heroService.getHeroes().subscribe(function (heroes) {
            _this.heroes = _this.getRandomHeroes(heroes);

            _this.heroService.addHeroesToLocalStorage(heroes);
          });
        }
      }, {
        key: "getRandomHeroes",
        value: function getRandomHeroes(heroes) {
          return heroes.sort(function () {
            return 0.5 - Math.random();
          }).slice(0, 4);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 4,
      vars: 2,
      consts: [[4, "ngIf"], [1, "grid", "grid-pad"], ["class", "col-1-4", "class", "mtb mtb-col details-link", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "mtb", "mtb-col", "details-link", 3, "routerLink"], [1, "borders"], [1, "corner-top"], [1, "corner-bottom"], [1, "module", "hero"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Heroes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 4, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 2, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heroes.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.heroes.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_4__["HeroSearchComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]],
      styles: ["[class*='col-'][_ngcontent-%COMP%] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-'][_ngcontent-%COMP%]:last-of-type {\r\n  padding-right: 0;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  padding: 10px;\r\n  width: 25%;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\r\n  box-sizing: border-box;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-height: 44px;\r\n}\r\n.grid[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n.col-1-4[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n}\r\n.module[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  min-height: 120px;\r\n  min-width: 120px;\r\n  \r\n  border-radius: 2px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.module.hero[_ngcontent-%COMP%]:hover {\r\n  \r\n  background-color: #022629;\r\n  cursor: pointer;\r\n  \r\n}\r\n.module.hero[_ngcontent-%COMP%] {\r\n  color: white;\r\n  border-radius: 3px;\r\n  box-shadow: 2px 3px 2px 0 rgba(9, 130, 154, 0.2);\r\n  background: linear-gradient(rgba(0, 132, 142), rgba(0, 132, 142, 0.69));\r\n}\r\n.grid-pad[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n}\r\n.grid.grid-pad[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n@media (max-width: 600px) {\r\n  .module[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    max-height: 75px;\r\n  }\r\n\r\n  .module.hero[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    min-height: 80px;\r\n  }\r\n}\r\n@media (min-width: 601px) and (max-width: 1024px) {\r\n  .module.hero[_ngcontent-%COMP%] {\r\n    min-height: 120px;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  .module[_ngcontent-%COMP%] {\r\n    min-width: 60px;\r\n  }\r\n}\r\n.borders[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background: #002554;\r\n}\r\n.corner-top[_ngcontent-%COMP%], .corner-bottom[_ngcontent-%COMP%] {\r\n  transition: 0.3s cubic-bezier(0.695, -0.030, 0.630, 1.065) opacity, 0.3s cubic-bezier(0.695, -0.030, 0.630, 1.065) transform;\r\n}\r\n.corner-top[_ngcontent-%COMP%], .corner-bottom[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: block;\r\n  top: 10px;\r\n  bottom: 10px;\r\n  left: 10px;\r\n  right: 10px;\r\n  opacity: 0;\r\n  transform: scale(0.5);\r\n}\r\na.borders[_ngcontent-%COMP%]:hover   .corner-top[_ngcontent-%COMP%], a.borders[_ngcontent-%COMP%]:hover   .corner-bottom[_ngcontent-%COMP%], a.details-link[_ngcontent-%COMP%]:hover   .corner-top[_ngcontent-%COMP%], a.details-link[_ngcontent-%COMP%]:hover   .corner-bottom[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transform: scale(.95);\r\n  will-change: transform, opacity;\r\n}\r\na.borders[_ngcontent-%COMP%]:hover:after, a.details-link[_ngcontent-%COMP%]:hover   .borders[_ngcontent-%COMP%]:after {\r\n  opacity: 0;\r\n}\r\n.corner-top[_ngcontent-%COMP%], .corner-bottom[_ngcontent-%COMP%], .corner-top[_ngcontent-%COMP%]:before, .corner-top[_ngcontent-%COMP%]:after, .corner-bottom[_ngcontent-%COMP%]:before, .corner-bottom[_ngcontent-%COMP%]:after {\r\n  z-index: 10;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:before, .corner-top[_ngcontent-%COMP%]:after, .corner-bottom[_ngcontent-%COMP%]:before, .corner-bottom[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: block;\r\n  width: 13px;\r\n  height: 13px;\r\n  border-color: #e9e8de;\r\n  border-style: solid;\r\n  border-width: 0;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:before, .corner-top[_ngcontent-%COMP%]:after {\r\n  top: 0;\r\n  border-top-width: 2px;\r\n}\r\n.corner-bottom[_ngcontent-%COMP%]:before, .corner-bottom[_ngcontent-%COMP%]:after {\r\n  bottom: 0;\r\n  border-bottom-width: 2px;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:before, .corner-bottom[_ngcontent-%COMP%]:before {\r\n  left: 0;\r\n  border-left-width: 2px;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:after, .corner-bottom[_ngcontent-%COMP%]:after {\r\n  right: 0;\r\n  border-right-width: 2px;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:before {\r\n  border-top-left-radius: 0;\r\n  border-top-left-radius: 2px;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:after {\r\n  border-top-right-radius: 0;\r\n  border-top-right-radius: 2px;\r\n}\r\n.corner-bottom[_ngcontent-%COMP%]:before {\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-left-radius: 2px;\r\n}\r\n.corner-bottom[_ngcontent-%COMP%]:after {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-right-radius: 2px;\r\n}\r\n.dt-card[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QztFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsVUFBVTtBQUNaO0FBRUE7OztFQUtFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELHVFQUF1RTtBQUN6RTtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRSxrQkFBa0I7RUFFbEIsYUFBYTtFQUdiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUdBOztFQUdFLDRIQUE0SDtBQUM5SDtBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsU0FBUztFQUNULFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFFVixxQkFBcUI7QUFDdkI7QUFHQTs7OztFQUlFLFVBQVU7RUFFVixxQkFBcUI7RUFDckIsK0JBQStCO0FBQ2pDO0FBRUE7O0VBRUUsVUFBVTtBQUNaO0FBRUE7Ozs7OztFQU1FLFdBQVc7QUFDYjtBQUVBOzs7O0VBSUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTs7RUFFRSxNQUFNO0VBQ04scUJBQXFCO0FBQ3ZCO0FBRUE7O0VBRUUsU0FBUztFQUNULHdCQUF3QjtBQUMxQjtBQUVBOztFQUVFLE9BQU87RUFDUCxzQkFBc0I7QUFDeEI7QUFHQTs7RUFFRSxRQUFRO0VBQ1IsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGFzaGJvYXJkQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbltjbGFzcyo9J2NvbC0nXSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuKixcclxuKjphZnRlcixcclxuKjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtaGVpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29sLTEtNCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLm1vZHVsZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NDhlOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2R1bGUuaGVybzpob3ZlciB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2RmZTdlNzsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyNjI5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBjb2xvcjogIzAwODQ4ZTsgKi9cclxufVxyXG5cclxuLm1vZHVsZS5oZXJvIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAzcHggMnB4IDAgcmdiYSg5LCAxMzAsIDE1NCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAxMzIsIDE0MiksIHJnYmEoMCwgMTMyLCAxNDIsIDAuNjkpKTtcclxufVxyXG5cclxuLmdyaWQtcGFkIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5ncmlkLmdyaWQtcGFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9kdWxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgfVxyXG5cclxuICAubW9kdWxlLmhlcm8ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAubW9kdWxlLmhlcm8ge1xyXG4gICAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1vZHVsZSB7XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9yZGVycyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogIzAwMjU1NDtcclxufVxyXG5cclxuXHJcbi5jb3JuZXItdG9wLFxyXG4uY29ybmVyLWJvdHRvbSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjY5NSwgLTAuMDMwLCAwLjYzMCwgMS4wNjUpIG9wYWNpdHksIDAuMyBjdWJpYy1iZXppZXIoMC42OTUsIC0wLjAzMCwgMC42MzAsIDEuMDY1KSB0cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC42OTUsIC0wLjAzMCwgMC42MzAsIDEuMDY1KSBvcGFjaXR5LCAwLjNzIGN1YmljLWJlemllcigwLjY5NSwgLTAuMDMwLCAwLjYzMCwgMS4wNjUpIHRyYW5zZm9ybTtcclxufVxyXG5cclxuLmNvcm5lci10b3AsXHJcbi5jb3JuZXItYm90dG9tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG59XHJcblxyXG5cclxuYS5ib3JkZXJzOmhvdmVyIC5jb3JuZXItdG9wLFxyXG5hLmJvcmRlcnM6aG92ZXIgLmNvcm5lci1ib3R0b20sXHJcbmEuZGV0YWlscy1saW5rOmhvdmVyIC5jb3JuZXItdG9wLFxyXG5hLmRldGFpbHMtbGluazpob3ZlciAuY29ybmVyLWJvdHRvbSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxufVxyXG5cclxuYS5ib3JkZXJzOmhvdmVyOmFmdGVyLFxyXG5hLmRldGFpbHMtbGluazpob3ZlciAuYm9yZGVyczphZnRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNvcm5lci10b3AsXHJcbi5jb3JuZXItYm90dG9tLFxyXG4uY29ybmVyLXRvcDpiZWZvcmUsXHJcbi5jb3JuZXItdG9wOmFmdGVyLFxyXG4uY29ybmVyLWJvdHRvbTpiZWZvcmUsXHJcbi5jb3JuZXItYm90dG9tOmFmdGVyIHtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmNvcm5lci10b3A6YmVmb3JlLFxyXG4uY29ybmVyLXRvcDphZnRlcixcclxuLmNvcm5lci1ib3R0b206YmVmb3JlLFxyXG4uY29ybmVyLWJvdHRvbTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEzcHg7XHJcbiAgaGVpZ2h0OiAxM3B4O1xyXG4gIGJvcmRlci1jb2xvcjogI2U5ZThkZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxufVxyXG5cclxuLmNvcm5lci10b3A6YmVmb3JlLFxyXG4uY29ybmVyLXRvcDphZnRlciB7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlci10b3Atd2lkdGg6IDJweDtcclxufVxyXG5cclxuLmNvcm5lci1ib3R0b206YmVmb3JlLFxyXG4uY29ybmVyLWJvdHRvbTphZnRlciB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxufVxyXG5cclxuLmNvcm5lci10b3A6YmVmb3JlLFxyXG4uY29ybmVyLWJvdHRvbTpiZWZvcmUge1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcclxufVxyXG5cclxuXHJcbi5jb3JuZXItdG9wOmFmdGVyLFxyXG4uY29ybmVyLWJvdHRvbTphZnRlciB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi5jb3JuZXItdG9wOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5jb3JuZXItdG9wOmFmdGVyIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uY29ybmVyLWJvdHRvbTpiZWZvcmUge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uY29ybmVyLWJvdHRvbTphZnRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmR0LWNhcmQge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]
        }, {
          type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/loading/loading.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/dashboard/loading/loading.component.ts ***!
    \********************************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppDashboardLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @dynatrace/barista-components/loading-distractor */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-loading-distractor.js");

    var LoadingComponent =
    /*#__PURE__*/
    function () {
      function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);
      }

      _createClass(LoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingComponent;
    }();

    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
      return new (t || LoadingComponent)();
    };

    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingComponent,
      selectors: [["app-loading"]],
      decls: 1,
      vars: 0,
      template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dt-loading-spinner");
        }
      },
      directives: [_dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_1__["DtLoadingSpinner"]],
      styles: [".dt-loading-spinner-svg {\r\n  stroke: #c7bb63 !important;\r\n}\r\n\r\ndt-loading-spinner {\r\n  display: block !important;\r\n  margin: auto;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kdC1sb2FkaW5nLXNwaW5uZXItc3ZnIHtcclxuICBzdHJva2U6ICNjN2JiNjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuZHQtbG9hZGluZy1zcGlubmVyIHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcbiJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loading',
          templateUrl: './loading.component.html',
          styleUrls: ['./loading.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dynamic-table/dynamic-table.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/dynamic-table/dynamic-table.component.ts ***!
    \**********************************************************/

  /*! exports provided: DynamicTableComponent */

  /***/
  function srcAppDynamicTableDynamicTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicTableComponent", function () {
      return DynamicTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @dynatrace/barista-components/pagination */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-pagination.js");
    /* harmony import */


    var _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @dynatrace/barista-components/table */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-table.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../hero.service */
    "./src/app/hero.service.ts");

    function DynamicTableComponent_dt_header_row_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dt-header-row");
      }
    }

    function DynamicTableComponent_dt_row_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dt-row");
      }
    }

    var _c0 = function _c0() {
      return ["id", "name", "favorite"];
    };

    var DynamicTableComponent =
    /*#__PURE__*/
    function () {
      function DynamicTableComponent(heroService) {
        _classCallCheck(this, DynamicTableComponent);

        this.heroService = heroService;
      }

      _createClass(DynamicTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.data = this.heroService.heroesLocal;
          this.dataSource = new _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTableDataSource"](this.data);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.paginationList.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe(function () {
            if (_this2.paginationList.first) {
              _this2.dataSource.pagination = _this2.paginationList.first;
              _this2.dataSource.pageSize = 20;
            } else {
              _this2.dataSource.pagination = null;
            }
          });
        }
      }, {
        key: "toggleFavorite",
        value: function toggleFavorite(toggledRow) {
          // Modify a data clone and assign the changed state at the end
          // to notify change detection about the dataChange in an array.
          var modifiedData = _toConsumableArray(this.data);

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = modifiedData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var row = _step.value;

              if (row === toggledRow) {
                row.favorite = !row.favorite;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.data = modifiedData;
        }
      }]);

      return DynamicTableComponent;
    }();

    DynamicTableComponent.ɵfac = function DynamicTableComponent_Factory(t) {
      return new (t || DynamicTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"]));
    };

    DynamicTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DynamicTableComponent,
      selectors: [["app-dynamic-table"]],
      viewQuery: function DynamicTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginationList = _t);
        }
      },
      decls: 8,
      vars: 5,
      consts: [["interactiveRows", "", 3, "dataSource"], ["name", "id", "label", "Id", "sortable", "false"], ["name", "name", "label", "Name", "sortable", "false"], ["name", "favorite", "sortable", "false", 3, "favoriteToggled"], [4, "dtHeaderRowDef"], [4, "dtRowDef", "dtRowDefColumns"]],
      template: function DynamicTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dt-table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dt-simple-text-column", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dt-simple-text-column", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "dt-favorite-column", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("favoriteToggled", function DynamicTableComponent_Template_dt_favorite_column_favoriteToggled_4_listener($event) {
            return ctx.toggleFavorite($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicTableComponent_dt_header_row_5_Template, 1, 0, "dt-header-row", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicTableComponent_dt_row_6_Template, 1, 0, "dt-row", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dt-pagination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTable"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtSimpleTextColumn"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtFavoriteColumn"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtHeaderRowDef"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtRowDef"], _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtHeaderRow"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtdGFibGUvZHluYW1pYy10YWJsZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dynamic-table',
          templateUrl: './dynamic-table.component.html',
          styleUrls: ['./dynamic-table.component.css']
        }]
      }], function () {
        return [{
          type: _hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"]
        }];
      }, {
        paginationList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [_dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/fallbackimg.directive.ts":
  /*!******************************************!*\
    !*** ./src/app/fallbackimg.directive.ts ***!
    \******************************************/

  /*! exports provided: FallbackimgDirective */

  /***/
  function srcAppFallbackimgDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FallbackimgDirective", function () {
      return FallbackimgDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FallbackimgDirective =
    /*#__PURE__*/
    function () {
      function FallbackimgDirective(eRef) {
        _classCallCheck(this, FallbackimgDirective);

        this.eRef = eRef;
      }

      _createClass(FallbackimgDirective, [{
        key: "loadFallbackOnError",
        value: function loadFallbackOnError() {
          var element = this.eRef.nativeElement;
          element.src = this.appFallbackimg || 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_xlarge.jpg';
        }
      }]);

      return FallbackimgDirective;
    }();

    FallbackimgDirective.ɵfac = function FallbackimgDirective_Factory(t) {
      return new (t || FallbackimgDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    FallbackimgDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FallbackimgDirective,
      selectors: [["img", "appFallbackimg", ""]],
      hostBindings: function FallbackimgDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function FallbackimgDirective_error_HostBindingHandler() {
            return ctx.loadFallbackOnError();
          });
        }
      },
      inputs: {
        appFallbackimg: "appFallbackimg"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FallbackimgDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'img[appFallbackimg]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        appFallbackimg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loadFallbackOnError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['error']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/hero-detail/hero-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/hero-detail/hero-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: HeroDetailComponent */

  /***/
  function srcAppHeroDetailHeroDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function () {
      return HeroDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../hero.service */
    "./src/app/hero.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @dynatrace/barista-components/button */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
    /* harmony import */


    var _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../fallbackimg.directive */
    "./src/app/fallbackimg.directive.ts");
    /* harmony import */


    var _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @dynatrace/barista-components/inline-editor */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-inline-editor.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function HeroDetailComponent_div_0_div_18_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var serie_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](serie_r16.name);
      }
    }

    function HeroDetailComponent_div_0_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Comic series");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeroDetailComponent_div_0_div_18_p_6_Template, 2, 1, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.getSeriesItems(ctx_r13.hero));
      }
    }

    function HeroDetailComponent_div_0_div_19_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var story_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](story_r18.name);
      }
    }

    function HeroDetailComponent_div_0_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeroDetailComponent_div_0_div_19_p_6_Template, 2, 1, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.getStories(ctx_r14.hero));
      }
    }

    function HeroDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "em", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_em_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.hero.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeroDetailComponent_div_0_div_18_Template, 7, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeroDetailComponent_div_0_div_19_Template, 7, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx_r12.hero.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r12.getImageSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("srcset", ctx_r12.getImageSrcSet(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r12.hero.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.hero.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.hero.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getSeriesItems(ctx_r12.hero));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getStories(ctx_r12.hero));
      }
    }

    var HeroDetailComponent =
    /*#__PURE__*/
    function () {
      function HeroDetailComponent(route, heroService, location) {
        _classCallCheck(this, HeroDetailComponent);

        this.route = route;
        this.heroService = heroService;
        this.location = location;
      }

      _createClass(HeroDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.hero) {
            this.getHero();
          } // if (!this.hero.nickname) {
          //   this.hero.nickname = this.hero.name;
          // }

        }
      }, {
        key: "getHero",
        value: function getHero() {
          var _this3 = this;

          var id = +this.route.snapshot.paramMap.get('id');
          this.hero = this.heroService.tryGetHeroLocally(id) || null;

          if (!this.hero) {
            this.heroService.getHero(id).subscribe(function (hero) {
              return _this3.hero = hero;
            });
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "save",
        value: function save() {
          this.heroService.updateLocalHero(this.hero); // this.heroService.updateHero(this.hero)
          //   .subscribe(() => this.goBack());
        }
      }, {
        key: "getImageSrc",
        value: function getImageSrc() {
          var path = this.getPathWithHttps();
          return "".concat(path, "/landscape_xlarge.jpg");
        }
      }, {
        key: "getImageSrcSet",
        value: function getImageSrcSet() {
          var path = this.getPathWithHttps();
          return "".concat(path, "/landscape_small.jpg 120w, ").concat(path, "/landscape_medium.jpg 175w, ").concat(path, "/landscape_large.jpg 190w, ").concat(path, "/landscape_xlarge.jpg 270w");
        }
      }, {
        key: "getPathWithHttps",
        value: function getPathWithHttps() {
          return this.hero.thumbnail.path.indexOf('https') >= 0 ? this.hero.thumbnail.path : this.hero.thumbnail.path.replace('http', 'https');
        }
      }, {
        key: "getSeriesItems",
        value: function getSeriesItems(hero) {
          return hero.series.available > 0 ? hero.series.items : null;
        }
      }, {
        key: "getStories",
        value: function getStories(hero) {
          return hero.stories.available > 0 ? hero.stories.items : null;
        }
      }]);

      return HeroDetailComponent;
    }();

    HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) {
      return new (t || HeroDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    HeroDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroDetailComponent,
      selectors: [["app-hero-detail"]],
      inputs: {
        hero: "hero"
      },
      decls: 6,
      vars: 1,
      consts: [["class", "details", 4, "ngIf"], [1, "buttons"], ["dt-button", "", 3, "click"], [1, "details"], [1, "details_container"], [1, "info_container"], [1, "info"], ["height", "200px", "appFallbackimg", "", 3, "src", "srcset", "alt"], [1, "info_text_container"], [1, "info_row"], [1, "hero_label"], [1, "hero_id"], ["dt-inline-editor", "", "ariaLabelSave", "Save name", "ariaLabelCancel", "Cancel and discard changes", 3, "ngModel", "ngModelChange"], ["class", "info_container", 4, "ngIf"], [1, "items"], [1, "items_text_container"], [4, "ngFor", "ngForOf"]],
      template: function HeroDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeroDetailComponent_div_0_Template, 20, 10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_Template_button_click_2_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_Template_button_click_4_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hero);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__["DtButton"], _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_5__["FallbackimgDirective"], _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_6__["DtInlineEditor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]],
      styles: ["h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n  margin-top: 5px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n\r\n.dt-button[_ngcontent-%COMP%] + .dt-button[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n\r\n.info_row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: auto;\r\n  flex-direction: column;\r\n}\r\n\r\n@media (min-width: 578px) {\r\n  img[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .details[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%] {\r\n    margin: 0 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 577px) {\r\n  img[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: auto;\r\n  }\r\n\r\n  details[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\n.details_container[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 10px rgba(14, 30, 37, .12);\r\n}\r\n\r\n.info_container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  background-color: white;\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n  grid-column: 1;\r\n  border: 1px solid #e1e1e1;\r\n}\r\n\r\n.items[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e1e1e1;\r\n  border-left: 1px solid #e1e1e1;\r\n  border-right: 1px solid #e1e1e1;\r\n}\r\n\r\n.info_row[_ngcontent-%COMP%] + .info_row[_ngcontent-%COMP%] {\r\n  margin: 10px 0 0;\r\n}\r\n\r\n.hero_id_label[_ngcontent-%COMP%] {\r\n  font-family: Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  font-size: 13px;\r\n  line-height: 20px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.hero_id[_ngcontent-%COMP%] {\r\n  color: #151515;\r\n  font-size: 16px;\r\n  word-break: break-word;\r\n  font-family: Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\np[_ngcontent-%COMP%], .hero_label[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.info_text_container[_ngcontent-%COMP%] {\r\n  padding-left: 2em;\r\n  padding-top: 2em;\r\n}\r\n\r\n.items_text_container[_ngcontent-%COMP%] {\r\n  padding: 2em;\r\n}\r\n\r\n.items_text_container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-bottom: 10px;\r\n}\r\n\r\nem[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1kZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7O0FBRTdDO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBRUUsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0RBQStEO0VBQy9ELGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLCtEQUErRDtFQUMvRCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9oZXJvLWRldGFpbC9oZXJvLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb0RldGFpbENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogIzYwN0Q4QjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmctbGVmdDogLjRlbTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcblxyXG4uZHQtYnV0dG9uKy5kdC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5pbmZvX3JvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3OHB4KSB7XHJcbiAgaW1nIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5kZXRhaWxzLCAuYnV0dG9ucyB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzdweCkge1xyXG4gIGltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgZGV0YWlsc3tcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4uZGV0YWlsc19jb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxufVxyXG5cclxuLmluZm9fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGV0YWlscyAuaW5mbyB7XHJcbiAgLW1zLWdyaWQtY29sdW1uOiAxO1xyXG4gIGdyaWQtY29sdW1uOiAxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbn1cclxuXHJcbi5pdGVtcyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMWUxZTE7XHJcbn1cclxuXHJcbi5pbmZvX3JvdysuaW5mb19yb3cge1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcbn1cclxuXHJcbi5oZXJvX2lkX2xhYmVsIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBUcmVidWNoZXQgTVMsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaGVyb19pZCB7XHJcbiAgY29sb3I6ICMxNTE1MTU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgVHJlYnVjaGV0IE1TLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbnAsXHJcbi5oZXJvX2xhYmVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmluZm9fdGV4dF9jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMmVtO1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbn1cclxuXHJcbi5pdGVtc190ZXh0X2NvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMmVtO1xyXG59XHJcblxyXG4uaXRlbXNfdGV4dF9jb250YWluZXIgbGFiZWwge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5lbSB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero-detail',
          templateUrl: './hero-detail.component.html',
          styleUrls: ['./hero-detail.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, {
        hero: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/hero-search/hero-search.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/hero-search/hero-search.component.ts ***!
    \******************************************************/

  /*! exports provided: HeroSearchComponent */

  /***/
  function srcAppHeroSearchHeroSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function () {
      return HeroSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../hero.service */
    "./src/app/hero.service.ts");
    /* harmony import */


    var _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @dynatrace/barista-components/card */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-card.js");
    /* harmony import */


    var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @dynatrace/barista-components/input */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeroSearchComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hero_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r28.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r28.name, " ");
      }
    }

    var HeroSearchComponent =
    /*#__PURE__*/
    function () {
      function HeroSearchComponent(heroService) {
        _classCallCheck(this, HeroSearchComponent);

        this.heroService = heroService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      } // Push a search term into the observable stream.


      _createClass(HeroSearchComponent, [{
        key: "search",
        value: function search(term) {
          this.searchTerms.next(term);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.heroes$ = this.searchTerms.pipe( // wait 300ms after each keystroke before considering the term
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), // ignore new term if same as previous term
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), // switch to new search observable each time the term changes
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            return _this4.heroService.searchHeroes(term);
          }));
        }
      }]);

      return HeroSearchComponent;
    }();

    HeroSearchComponent.ɵfac = function HeroSearchComponent_Factory(t) {
      return new (t || HeroSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"]));
    };

    HeroSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroSearchComponent,
      selectors: [["app-hero-search"]],
      decls: 9,
      vars: 3,
      consts: [["for", "search-box"], ["dtInput", "", "id", "search-box", 3, "input"], ["searchBox", ""], [1, "search-result"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
      template: function HeroSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dt-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search for hero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HeroSearchComponent_Template_input_input_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.search(_r26.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeroSearchComponent_li_7_Template, 3, 2, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.heroes$));
        }
      },
      directives: [_dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_4__["DtCard"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_4__["DtCardTitle"], _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__["DtInput"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["h3[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width: 208px;\r\n  height: 20px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background-color: #00848e;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #888;\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n  color: white;\r\n}\r\n#search-box[_ngcontent-%COMP%] {\r\n  width: 220px;\r\n  height: 20px;\r\n}\r\nul.search-result[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  padding-left: 0;\r\n}\r\n.dt-card[_ngcontent-%COMP%] {\r\n  border-top: 3px solid #c7bb63;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1zZWFyY2gvaGVyby1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7QUFDOUI7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLDZDQUE2QztFQUM3QyxhQUFhO0VBQ2IsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvaGVyby1zZWFyY2gvaGVyby1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9TZWFyY2ggcHJpdmF0ZSBzdHlsZXMgKi9cclxuaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gIHdpZHRoOiAyMDhweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NDhlO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdCBsaSBhIHtcclxuICBjb2xvcjogIzg4ODtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkgYTphY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3NlYXJjaC1ib3gge1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbnVsLnNlYXJjaC1yZXN1bHQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uZHQtY2FyZCB7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNjN2JiNjM7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxNCwgMzAsIDM3LCAuMTIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero-search',
          templateUrl: './hero-search.component.html',
          styleUrls: ['./hero-search.component.css']
        }]
      }], function () {
        return [{
          type: _hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hero.service.ts":
  /*!*********************************!*\
    !*** ./src/app/hero.service.ts ***!
    \*********************************/

  /*! exports provided: HeroService */

  /***/
  function srcAppHeroServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroService", function () {
      return HeroService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./message.service */
    "./src/app/message.service.ts");
    /* harmony import */


    var _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @dynatrace/barista-components/toast */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-toast.js");

    var HeroService =
    /*#__PURE__*/
    function () {
      function HeroService(http, messageService, toast) {
        _classCallCheck(this, HeroService);

        this.http = http;
        this.messageService = messageService;
        this.toast = toast;
        this.heroesUrl = 'api/heroes'; // URL to web api

        this.marvelAPI = {
          ts: '1',
          publicKey: 'ce160eefcb9aebd904aebc4b26834292',
          privateKey: 'b6514e52a26973fc538d9a33f3c1bb65f17e3c28',
          hash: 'f68daa7ad9dd734af8ebffd116a2c18d'
        }; // tslint:disable-next-line: max-line-length

        this.marvelAPIBaseURL = 'https://gateway.marvel.com/v1/public/characters';
        this.marvelAPIQueryParams = "ts=".concat(this.marvelAPI.ts, "&apikey=").concat(this.marvelAPI.publicKey, "&hash=").concat(this.marvelAPI.hash);
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(HeroService, [{
        key: "addHeroesToLocalStorage",
        value: function addHeroesToLocalStorage(heroes) {
          heroes && localStorage.setItem('testHeroes', JSON.stringify(heroes));
        }
      }, {
        key: "tryGetHeroesFromLocalStorage",
        value: function tryGetHeroesFromLocalStorage() {
          var heroes = localStorage.getItem('testHeroes');
          return heroes && heroes.length ? this.heroesLocal = JSON.parse(heroes) : null;
        } // getHeroes(): Observable<Hero[]> {
        //   this.messageService.add('HeroService fetched heroes');
        //   return of(HEROES);
        // }

        /** GET heroes from the server */

      }, {
        key: "getHeroes",
        value: function getHeroes() {
          var _this5 = this;

          var marvelAPIURL = "".concat(this.marvelAPIBaseURL, "?limit=100&").concat(this.marvelAPIQueryParams);
          return this.http.get(marvelAPIURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return _this5.log('fetched heroes');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.data.results;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getHeroes', [])));
        }
        /** GET hero by id. Will 404 if id not found */

      }, {
        key: "getHero",
        value: function getHero(id) {
          var _this6 = this;

          var url = "".concat(this.marvelAPIBaseURL, "/").concat(id, "?").concat(this.marvelAPIQueryParams);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
            return x.status === 'Ok' && x.data.results.length ? _this6.log("fetched heroes with id=\"".concat(id, "\"")) : _this6.log("no heroes matching id \"".concat(id, "\" could be found"));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res ? res.data.results[0] : null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getHero from API with id=".concat(id))));
        }
      }, {
        key: "tryGetHeroLocally",
        value: function tryGetHeroLocally(id) {
          var _this7 = this;

          var heroesLocal = this.tryGetHeroesFromLocalStorage();

          if (!heroesLocal) {
            this.getHeroes().subscribe(function (heroes) {
              _this7.addHeroesToLocalStorage(heroes);

              return _this7.findHeroById(id, heroes);
            });
            return;
          }

          return this.findHeroById(id, heroesLocal);
        }
      }, {
        key: "findHeroById",
        value: function findHeroById(id, heroes) {
          return heroes.find(function (h) {
            return h.id === id;
          });
        }
        /** Log a HeroService message with the MessageService */

      }, {
        key: "log",
        value: function log(message) {
          this.messageService.add("HeroService: ".concat(message));
        }
        /**
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */

      }, {
        key: "handleError",
        value: function handleError() {
          var _this8 = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption

            _this8.log("".concat(operation, " failed: ").concat(error && error.error ? error.error.status : error.message)); // Let the app keep running by returning an empty result.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
          };
        }
        /** PUT: update the hero on the server */

      }, {
        key: "updateHero",
        value: function updateHero(hero) {
          var _this9 = this;

          return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return _this9.log("updated hero id=".concat(hero.id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateHero')));
        }
      }, {
        key: "updateLocalHero",
        value: function updateLocalHero(hero) {
          var _this10 = this;

          var heroesLocal = this.tryGetHeroesFromLocalStorage();

          if (!heroesLocal) {
            this.getHeroes().subscribe(function (heroes) {
              _this10.addHeroesToLocalStorage(heroesLocal);

              _this10.updateHeroName(hero, heroes);
            });
            return;
          }

          this.updateHeroName(hero, heroesLocal);
        }
      }, {
        key: "updateHeroName",
        value: function updateHeroName(hero, heroes) {
          var heroCurrent = heroes.find(function (h) {
            return h.id === hero.id;
          });

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
          this.toast.create('Your changes have been saved!'); // this.heroes.forEach((element, index) => {  //to change all names
          //   if (element.name === hero.name) {
          //     this.heroes[index].name = hero.name;
          //   }
          // });
        }
        /** POST: add a new hero to the server */

      }, {
        key: "addHero",
        value: function addHero(hero) {
          var _this11 = this;

          return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newHero) {
            return _this11.log("added hero w/ id=".concat(newHero.id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addHero')));
        }
        /** DELETE: delete the hero from the server */

      }, {
        key: "deleteHero",
        value: function deleteHero(hero) {
          var _this12 = this;

          var id = typeof hero === 'number' ? hero : hero.id;
          var url = "".concat(this.heroesUrl, "/").concat(id);
          return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return _this12.log("deleted hero id=".concat(id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteHero')));
        }
        /* GET heroes whose name contains search term */

      }, {
        key: "searchHeroes",
        value: function searchHeroes(term) {
          var _this13 = this;

          if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
          }

          var url = "".concat(this.marvelAPIBaseURL, "?nameStartsWith=").concat(term, "&").concat(this.marvelAPIQueryParams);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
            return x.status === 'Ok' && x.data.results.length ? _this13.log("found heroes matching \"".concat(term, "\"")) : _this13.log("no heroes matching \"".concat(term, "\""));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.data.results;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchHeroes', [])));
        }
      }]);

      return HeroService;
    }();

    HeroService.ɵfac = function HeroService_Factory(t) {
      return new (t || HeroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__["DtToast"]));
    };

    HeroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HeroService,
      factory: HeroService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }, {
          type: _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__["DtToast"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/heroes/heroes.component.ts":
  /*!********************************************!*\
    !*** ./src/app/heroes/heroes.component.ts ***!
    \********************************************/

  /*! exports provided: HeroesComponent */

  /***/
  function srcAppHeroesHeroesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroesComponent", function () {
      return HeroesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../hero.service */
    "./src/app/hero.service.ts");
    /* harmony import */


    var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @dynatrace/barista-components/input */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
    /* harmony import */


    var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @dynatrace/barista-components/button */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
    /* harmony import */


    var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @dynatrace/barista-components/icon */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["heroesContainer"];

    function HeroesComponent_div_9_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroesComponent_div_9_li_2_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var hero_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5["delete"](hero_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " x ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hero_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r4.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r4.name);
      }
    }

    function HeroesComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeroesComponent_div_9_li_2_Template, 8, 3, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.heroService.tryGetHeroesFromLocalStorage());
      }
    }

    var HeroesComponent =
    /*#__PURE__*/
    function () {
      function HeroesComponent(heroService
      /*, private messageService: MessageService*/
      ) {
        _classCallCheck(this, HeroesComponent);

        this.heroService = heroService;
        this.isTop = true;
      }

      _createClass(HeroesComponent, [{
        key: "handleScroll",
        value: function handleScroll() {
          this.isTop = window.pageYOffset <= window.innerHeight / 2;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.heroService.tryGetHeroesFromLocalStorage()) {
            this.getHeroes();
          }
        } // onSelect(hero: Hero): void {
        //   this.selectedHero = hero;
        //   this.messageService.add(`HeroService: Selected hero id=${hero.id}, name=${hero.name}`);
        // }

      }, {
        key: "getHeroes",
        value: function getHeroes() {
          var _this14 = this;

          this.heroService.getHeroes().subscribe(function (heroes) {
            return _this14.heroService.addHeroesToLocalStorage(heroes);
          });
        }
      }, {
        key: "add",
        value: function add(name) {
          name = name.trim();

          if (!name) {
            return;
          }

          var heroesLocal = this.heroService.heroesLocal;
          heroesLocal && heroesLocal.push({
            name: name,
            id: heroesLocal[heroesLocal.length - 1].id + 1,
            series: {},
            stories: {},
            thumbnail: {
              path: 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
              extension: 'jpg'
            }
          });
          this.heroService.addHeroesToLocalStorage(heroesLocal);
          this.scrollToBottom();
        }
      }, {
        key: "delete",
        value: function _delete(hero) {
          var heroesLocal = this.heroService.tryGetHeroesFromLocalStorage();
          heroesLocal = heroesLocal.filter(function (h) {
            return h.id !== hero.id;
          });
          this.heroService.addHeroesToLocalStorage(heroesLocal);
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          window.scroll({
            top: this.heroesContainer.nativeElement.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
          this.isTop = false;
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          this.isTop = true;
        }
      }, {
        key: "toggleScroll",
        value: function toggleScroll() {
          this.isTop ? this.scrollToBottom() : this.scrollToTop();
        }
      }]);

      return HeroesComponent;
    }();

    HeroesComponent.ɵfac = function HeroesComponent_Factory(t) {
      return new (t || HeroesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]));
    };

    HeroesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroesComponent,
      selectors: [["app-heroes"]],
      viewQuery: function HeroesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.heroesContainer = _t.first);
        }
      },
      hostBindings: function HeroesComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeroesComponent_scroll_HostBindingHandler($event) {
            return ctx.handleScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 11,
      vars: 3,
      consts: [[1, "heroes_container"], [1, "flex"], ["type", "text", "dtInput", "", "placeholder", "Please add hero name", 1, "hero_input"], ["heroName", ""], ["dt-button", "", 1, "inline-flex", 3, "click"], ["name", "plus-add"], ["class", "heroes", 4, "ngIf"], ["name", "dropdownopen", 1, "scroll", 3, "click"], [1, "heroes"], ["heroesContainer", ""], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "badge"], [1, "name"], ["title", "delete hero", 1, "delete", 3, "click"]],
      template: function HeroesComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Heroes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroesComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            ctx.add(_r0.value);
            return _r0.value = "";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dt-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeroesComponent_div_9_Template, 3, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "dt-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroesComponent_Template_dt_icon_click_10_listener() {
            return ctx.toggleScroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heroService.tryGetHeroesFromLocalStorage());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrolltop", !ctx.isTop);
        }
      },
      directives: [_dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_2__["DtInput"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_3__["DtButton"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_4__["DtIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
      styles: [".heroes_container[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n\r\n.heroes[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 75%;\r\n  display: table;\r\n  margin-top: 10px;\r\n}\r\n\r\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: table-row;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n\r\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: inline-block;\r\n  width: calc(100% - 26.5px);\r\n}\r\n\r\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #00a1b2;\r\n}\r\n\r\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n  display: inline-table;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.6em 0.6em 0 0.6em;\r\n  background-color: #00a1b2;\r\n  line-height: 1em;\r\n  position: relative;\r\n  height: 1.5em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n}\r\n\r\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]:hover, .heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .badge[_ngcontent-%COMP%] {\r\n  background-color: #2d8b95;\r\n  transform: scale(1.05);\r\n}\r\n\r\n.hero_input[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  width: 75%;\r\n  margin-right: 10px;\r\n}\r\n\r\n.inline-flex[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n}\r\n\r\n.flex[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton.delete[_ngcontent-%COMP%] {\r\n  background-color: gray;\r\n  color: white;\r\n  padding: 4px 10px;\r\n  float: right;\r\n}\r\n\r\nbutton.delete[_ngcontent-%COMP%]:hover {\r\n  background-color: #9c5061;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n\r\n.heroes_container[_ngcontent-%COMP%] {\r\n  border-top: 3px solid #c7bb63;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n  background: white;\r\n}\r\n\r\n.scroll[_ngcontent-%COMP%] {\r\n  transform: rotate(0);\r\n  z-index: 20;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  fill: #00a1b2;\r\n  transition: transform .35s ease-in-out;\r\n  transition-delay: 1s;\r\n  cursor: pointer;\r\n}\r\n\r\n.scrolltop[_ngcontent-%COMP%] {\r\n  transform: rotate(180deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsNkNBQTZDO0VBQzdDLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFFYixzQ0FBc0M7RUFDdEMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyb2VzX2NvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5oZXJvZXMge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmhlcm9lcyBsaSB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gIG1hcmdpbjogLjVlbTtcclxuICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgaGVpZ2h0OiAxLjZlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5oZXJvZXMgbGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgbGVmdDogLjFlbTtcclxufVxyXG5cclxuLmhlcm9lcyBhIHtcclxuICBjb2xvcjogIzMzMztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjYuNXB4KTtcclxufVxyXG5cclxuLmhlcm9lcyBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAwYTFiMjtcclxufVxyXG5cclxuLmhlcm9lcyAuYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjZlbSAwLjZlbSAwIDAuNmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExYjI7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxLjVlbTtcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG59XHJcblxyXG4uaGVyb2VzIC5iYWRnZTpob3ZlcixcclxuLmhlcm9lcyBsaTpob3ZlciAuYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDhiOTU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLmhlcm9faW5wdXQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW5saW5lLWZsZXgge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcblxyXG5idXR0b24uZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0cHggMTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzUwNjE7XHJcbn1cclxuXHJcbi5pbmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmlubGluZSBpbnB1dCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaGVyb2VzX2NvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNjN2JiNjM7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxNCwgMzAsIDM3LCAuMTIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5zY3JvbGwge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGZpbGw6ICMwMGExYjI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zY3JvbGx0b3Age1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-heroes',
          templateUrl: './heroes.component.html',
          styleUrls: ['./heroes.component.css']
        }]
      }], function () {
        return [{
          type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]
        }];
      }, {
        heroesContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['heroesContainer']
        }],
        handleScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/message.service.ts":
  /*!************************************!*\
    !*** ./src/app/message.service.ts ***!
    \************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MessageService =
    /*#__PURE__*/
    function () {
      function MessageService() {
        _classCallCheck(this, MessageService);

        this.messages = [];
      }

      _createClass(MessageService, [{
        key: "add",
        value: function add(message) {
          this.messages.push(message);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.messages = [];
        }
      }]);

      return MessageService;
    }();

    MessageService.ɵfac = function MessageService_Factory(t) {
      return new (t || MessageService)();
    };

    MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MessageService,
      factory: MessageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/messages/messages.component.ts":
  /*!************************************************!*\
    !*** ./src/app/messages/messages.component.ts ***!
    \************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../message.service */
    "./src/app/message.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @dynatrace/barista-components/card */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-card.js");
    /* harmony import */


    var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @dynatrace/barista-components/button */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
    /* harmony import */


    var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @dynatrace/barista-components/icon */
    "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");

    function MessagesComponent_div_0_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r23);
      }
    }

    function MessagesComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dt-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dt-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Messages ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.messageService.clear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dt-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clear ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MessagesComponent_div_0_div_7_Template, 3, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.messageService.messages);
      }
    }

    var MessagesComponent =
    /*#__PURE__*/
    function () {
      function MessagesComponent(messageService) {
        _classCallCheck(this, MessagesComponent);

        this.messageService = messageService;
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
      return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]));
    };

    MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessagesComponent,
      selectors: [["app-messages"]],
      decls: 1,
      vars: 1,
      consts: [["class", "dt-demo-card", 4, "ngIf"], [1, "dt-demo-card"], ["dt-button", "", "variant", "secondary", 1, "clear", 3, "click"], ["name", "delete"], ["class", "messages", 4, "ngFor", "ngForOf"], [1, "messages"], [1, "message"]],
      template: function MessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 8, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_3__["DtCard"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_3__["DtCardTitle"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__["DtButton"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_5__["DtIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["h2[_ngcontent-%COMP%], dt-card-title[_ngcontent-%COMP%] {\r\n  color: #00848e;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 2em;\r\n}\r\nbody[_ngcontent-%COMP%], input[text][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear[_ngcontent-%COMP%] {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  margin: 12px 0;\r\n}\r\n.dt-card[_ngcontent-%COMP%] {\r\n  border-top: 4px solid #00848e;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0M7O0VBRUUsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLDZDQUE2QztFQUM3QyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhDQUE4QztBQUNoRCIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNZXNzYWdlc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5oMixcclxuZHQtY2FyZC10aXRsZSB7XHJcbiAgY29sb3I6ICMwMDg0OGU7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMmVtO1xyXG59XHJcblxyXG5ib2R5LFxyXG5pbnB1dFt0ZXh0XSxcclxuYnV0dG9uIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcclxufVxyXG5cclxuYnV0dG9uLmNsZWFyIHtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG5cclxuYnV0dG9uLmNsZWFyIHtcclxuICBjb2xvcjogIzMzMztcclxuICBtYXJnaW46IDEycHggMDtcclxufVxyXG5cclxuLmR0LWNhcmQge1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDA4NDhlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-messages',
          templateUrl: './messages.component.html',
          styleUrls: ['./messages.component.css']
        }]
      }], function () {
        return [{
          type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Programming\Repositories\MarvelHeroes\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map