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


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_secure_routes_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./guards/secure-routes.guard */
    "./src/app/guards/secure-routes.guard.ts"); // Guards


    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
      canActivate: [_guards_secure_routes_guard__WEBPACK_IMPORTED_MODULE_6__["SecureRoutesGuard"]]
    }, {
      path: 'signup',
      component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"],
      canActivate: [_guards_secure_routes_guard__WEBPACK_IMPORTED_MODULE_6__["SecureRoutesGuard"]]
    }, {
      path: 'dashboard',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
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
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Chin Chin Pagos';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
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


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_currencies_currencies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/currencies/currencies.component */
    "./src/app/components/currencies/currencies.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MDBBootstrapModule"].forRoot(), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _components_currencies_currencies_component__WEBPACK_IMPORTED_MODULE_12__["CurrenciesComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MDBRootModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _components_currencies_currencies_component__WEBPACK_IMPORTED_MODULE_12__["CurrenciesComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MDBBootstrapModule"].forRoot(), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"]],
          providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/currencies/currencies.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/currencies/currencies.component.ts ***!
    \***************************************************************/

  /*! exports provided: CurrenciesComponent */

  /***/
  function srcAppComponentsCurrenciesCurrenciesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrenciesComponent", function () {
      return CurrenciesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_currencies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/currencies.service */
    "./src/app/services/currencies.service.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

    function CurrenciesComponent_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-card-title", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mdb-card-title", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var currency_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currency_r3.symbol);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", currency_r3.priceChangePercent, "%)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currency_r3.cryptoName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", currency_r3.askPrice, "");
      }
    }

    function CurrenciesComponent_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CurrenciesComponent_1_ng_template_0_Template, 12, 4, "ng-template", 3);
      }
    }

    function CurrenciesComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-card-title", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "VES");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No hay cambios.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mdb-card-title", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bol\xEDvar Soberano");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "$ 0.00045");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CurrenciesComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-card-title", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PTR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No hay cambios");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mdb-card-title", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Petro");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "$ 60.00");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    } // import { Observable } from 'rxjs';


    var CurrenciesComponent = /*#__PURE__*/function () {
      function CurrenciesComponent(currenciesService) {
        _classCallCheck(this, CurrenciesComponent);

        this.currenciesService = currenciesService;
        this.currencies = []; // Crypto names 

        this.bitcoin = 'Bitcoin';
        this.dash = 'Dash';
        this.ethereum = 'Ethereum'; // Carousel Options

        this.marketOptions = {
          loop: true,
          items: 3,
          autoplay: true,
          mouseDrag: true,
          touchDrag: true,
          dots: false,
          center: true,
          navSpeed: 700,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 2
            },
            940: {
              items: 3
            }
          }
        };
      }

      _createClass(CurrenciesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCurrency();
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          var _this = this;

          this.currenciesService.getCurrencies().subscribe(function (resp) {
            // console.log(resp);
            for (var i = 0; i < resp.length; i++) {
              if (resp[i].symbol === 'BTCUSDT') {
                resp[i].cryptoName = _this.bitcoin;
                resp[i].askPrice = parseInt(resp[i].askPrice).toFixed(2);
                resp[i].priceChangePercent = parseInt(resp[i].priceChangePercent).toFixed(2);

                _this.currencies.push(resp[i]);
              } else if (resp[i].symbol === 'ETHUSDT') {
                resp[i].cryptoName = _this.ethereum;
                resp[i].askPrice = parseInt(resp[i].askPrice).toFixed(2);
                resp[i].priceChangePercent = parseInt(resp[i].priceChangePercent).toFixed(2);

                _this.currencies.push(resp[i]);
              } else if (resp[i].symbol === 'DASHUSDT') {
                resp[i].cryptoName = _this.dash;
                resp[i].askPrice = parseInt(resp[i].askPrice).toFixed(2);
                resp[i].priceChangePercent = parseInt(resp[i].priceChangePercent).toFixed(2);

                _this.currencies.push(resp[i]);
              }
            }

            console.log(_this.currencies);
          });
        }
      }]);

      return CurrenciesComponent;
    }();

    CurrenciesComponent.ɵfac = function CurrenciesComponent_Factory(t) {
      return new (t || CurrenciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_currencies_service__WEBPACK_IMPORTED_MODULE_1__["CurrenciesService"]));
    };

    CurrenciesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurrenciesComponent,
      selectors: [["app-currencies"]],
      decls: 4,
      vars: 2,
      consts: [[3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], ["carouselSlide", "", "class", "market-item"], [1, "market-cards"], [1, "content"], [1, "row"], [1, "market-symbol"], [1, "price-change"], [1, "market-title"], [1, "price"]],
      template: function CurrenciesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrenciesComponent_1_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurrenciesComponent_ng_template_2_Template, 12, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CurrenciesComponent_ng_template_3_Template, 12, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.marketOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currencies);
        }
      },
      directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardTitleComponent"]],
      styles: ["@media (max-width: 1000px) {\n  owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nowl-carousel-o[_ngcontent-%COMP%]   .market-cards[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-bottom: 10px;\n  margin-left: 5px;\n  background-color: #f9f1f1;\n  width: 360px;\n}\nowl-carousel-o[_ngcontent-%COMP%]   .market-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0 1.25rem 0 1.25rem;\n  font-size: 12px;\n}\nowl-carousel-o[_ngcontent-%COMP%]   .market-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .market-symbol[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 15px;\n}\nowl-carousel-o[_ngcontent-%COMP%]   .market-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .market-title[_ngcontent-%COMP%] {\n  font-weight: 300;\n  letter-spacing: 1.5;\n}\nowl-carousel-o[_ngcontent-%COMP%]   .market-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .price-change[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\nowl-carousel-o[_ngcontent-%COMP%]   .market-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\nowl-carousel-o[_ngcontent-%COMP%]   .market-cards[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXN0cmUvRG9jdW1lbnRzL2Rldi9jaGluY2hpbmZyb250L3NyYy9hcHAvY29tcG9uZW50cy9jdXJyZW5jaWVzL2N1cnJlbmNpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVuY2llcy9jdXJyZW5jaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxhQUFBO0VDQ0Y7QUFDRjtBREFFO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNFRjtBRERFO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDR0o7QURGSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0lOO0FERkk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDSU47QURGSTtFQUNFLGdCQUFBO0FDSU47QURGSTtFQUNFLGdCQUFBO0FDSU47QURERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVuY2llcy9jdXJyZW5jaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsib3dsLWNhcm91c2VsLW8ge1xuICBAbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5tYXJrZXQtY2FyZHMge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjFmMTtcbiAgd2lkdGg6IDM2MHB4O1xuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMCAxLjI1cmVtIDAgMS4yNXJlbTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLm1hcmtldC1zeW1ib2wge1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgLm1hcmtldC10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNTtcbiAgICB9XG4gICAgLnByaWNlLWNoYW5nZSB7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cbiAgICAucHJpY2Uge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cbiAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxufVxufVxuXG5cbiIsIkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgb3dsLWNhcm91c2VsLW8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbm93bC1jYXJvdXNlbC1vIC5tYXJrZXQtY2FyZHMge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjFmMTtcbiAgd2lkdGg6IDM2MHB4O1xufVxub3dsLWNhcm91c2VsLW8gLm1hcmtldC1jYXJkcyAuY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMS4yNXJlbSAwIDEuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbm93bC1jYXJvdXNlbC1vIC5tYXJrZXQtY2FyZHMgLmNvbnRlbnQgLm1hcmtldC1zeW1ib2wge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5vd2wtY2Fyb3VzZWwtbyAubWFya2V0LWNhcmRzIC5jb250ZW50IC5tYXJrZXQtdGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41O1xufVxub3dsLWNhcm91c2VsLW8gLm1hcmtldC1jYXJkcyAuY29udGVudCAucHJpY2UtY2hhbmdlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbm93bC1jYXJvdXNlbC1vIC5tYXJrZXQtY2FyZHMgLmNvbnRlbnQgLnByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbm93bC1jYXJvdXNlbC1vIC5tYXJrZXQtY2FyZHMgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrenciesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-currencies',
          templateUrl: './currencies.component.html',
          styleUrls: ['./currencies.component.scss']
        }]
      }], function () {
        return [{
          type: _services_currencies_service__WEBPACK_IMPORTED_MODULE_1__["CurrenciesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_records_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/records.service */
    "./src/app/services/records.service.ts");
    /* harmony import */


    var _currencies_currencies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../currencies/currencies.component */
    "./src/app/components/currencies/currencies.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    function DashboardComponent_div_58_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mdb-badge", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var record_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r4.concept);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r4.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r4.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r4.date);
      }
    }

    function DashboardComponent_div_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transacci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Monto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Estatus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fecha");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_div_58_tr_13_Template, 14, 4, "tr", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.records);
      }
    }

    function DashboardComponent_ng_template_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No hay transacciones para mostrar.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(authService, router, ngZone, http, recordsService) {
        _classCallCheck(this, DashboardComponent);

        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.http = http;
        this.recordsService = recordsService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMovements();
        }
      }, {
        key: "getMovements",
        value: function getMovements() {
          var _this2 = this;

          this.recordsService.getRecords().subscribe(function (records) {
            _this2.records = records;
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_records_service__WEBPACK_IMPORTED_MODULE_4__["RecordsService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 62,
      vars: 3,
      consts: [[1, "container-fluid"], [1, "container"], [1, "nav", "grey", "user-data", "lighten-4", "py-4", "mt-5", "d-flex", "justify-content-between"], [1, "nav-item"], ["src", "../../../assets/images/logo.png", "alt", "Chin Chin Logo", "width", "200", 1, "pl-3", "mt-2"], [1, "balance", "font-weight-bold", "pt-3"], [1, "btn", "btn-success", "btn", "pay"], [1, "btn", "btn-success", "btn", "buy"], [1, "nav-item", "dropdown"], [1, "dropdown-item", 3, "click"], [1, "jumbotron-fluid", "mt-3"], [1, "display-3", "welcome"], [1, "lead", "welcome-subheading"], [1, "row", "align-items-center"], [1, "col-lg-4", "col-md-12", "col-sm-12", "mb-3"], [1, "success-color-dark", "py-3"], [1, "font-weight-bold", "currency-title"], [1, "pl-3", "my-0"], [1, "font-weight-bold", "text-muted"], [1, "warning-color", "py-3"], [1, "pl-3"], [1, "danger-color", "py-3"], [1, "mt-5"], [1, "lead"], [4, "ngIf", "ngIfElse"], ["noRecords", ""], ["mdbTable", ""], ["mdbTableCol", "", 4, "ngFor", "ngForOf"], ["mdbTableCol", ""], ["scope", "row"], [1, "red-text", "lead", "text-uppercase"], [1, "font-weight-bold"], ["warning", "true", 1, "text-uppercase"], [1, "text-center"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-currencies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "6.449.989,38 VES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pagar Orden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Compra - Venta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_16_listener() {
            return ctx.authService.signOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Bienvenido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mis billeteras o cuentas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mdb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mdb-card-header", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mdb-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Bolivar Soberano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mdb-card-text", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "9.489,00 VES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mdb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mdb-card-header", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mdb-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Bitcoin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mdb-card-text", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "0,0034186 BTC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mdb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mdb-card-header", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mdb-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Petros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mdb-card-text", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1 PTR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Mis \xFAltimas transacciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, DashboardComponent_div_58_Template, 14, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, DashboardComponent_ng_template_59_Template, 3, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authService.userData.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.records == null ? null : ctx.records.length) > 0)("ngIfElse", _r1);
        }
      },
      directives: [_currencies_currencies_component__WEBPACK_IMPORTED_MODULE_5__["CurrenciesComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardHeaderComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardTextComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBadgeComponent"]],
      styles: [".currency-title[_ngcontent-%COMP%] {\n  color: #fff;\n  padding-left: 10px;\n  padding-top: 10px;\n}\n\n@media (max-width: 900px) {\n  .buy[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .pay[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .balance[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n\n  .user-data[_ngcontent-%COMP%] {\n    align-items: center;\n    flex-wrap: nowrap !important;\n  }\n\n  .welcome[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    text-align: center;\n  }\n\n  .welcome-subheading[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXN0cmUvRG9jdW1lbnRzL2Rldi9jaGluY2hpbmZyb250L3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxhQUFBO0VDQ0Y7O0VERUE7SUFDRSxhQUFBO0VDQ0Y7O0VERUE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ0NGOztFREVBO0lBQ0UsbUJBQUE7SUFDQSw0QkFBQTtFQ0NGOztFREVBO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxrQkFBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVuY3ktdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmJ1eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wYXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYmFsYW5jZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyAgXG4gIH1cblxuICAudXNlci1kYXRhIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAud2VsY29tZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAud2VsY29tZS1zdWJoZWFkaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iLCIuY3VycmVuY3ktdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5idXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucGF5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJhbGFuY2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxuXG4gIC51c2VyLWRhdGEge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC53ZWxjb21lIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLndlbGNvbWUtc3ViaGVhZGluZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _services_records_service__WEBPACK_IMPORTED_MODULE_4__["RecordsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 31,
      vars: 0,
      consts: [["id", "footer", 1, "page-footer", "pt-4", "mt-5"], [1, "inner", "container-fluid", "text-center", "text-md-left"], ["src", "../../../assets/images/logo.png", "alt", "Chin Chin", "width", "200"], [1, "row", "justify-content-between"], [1, "col-md-6", "mt-md-0", "mt-3"], [1, "my-5", "about", "text-muted"], [1, "fab", "fa-twitter", "social-icons"], [1, "fab", "fa-instagram", "ml-5", "social-icons"], [1, "fab", "fa-facebook", "ml-5", "social-icons"], [1, "clearfix", "w-100", "d-md-none", "pb-3"], [1, "col-md-2", "mb-md-0", "mb-3", "mt-5"], [1, "list-unstyled"], ["href", "#", 1, "footer-links"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Chin Chin te da la libertad que necesitas para manejar tu dinero sin intermediarios. A trav\xE9s de nuestra plataforma de dinero digital podr\xE1s ahorrar en cualquier divisa o criptomoneda y realizar pagos y transferencias a cualquier parte del mundo, desde cualquier dispositivo de manera segura, f\xE1cil y con bajo costo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Caracter\xEDsticas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contacto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ayuda y Soporte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "T\xE9rminos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#footer[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  background: #f9f1f1;\n  padding: 3em;\n  padding-top: 7rem;\n  border-top-left-radius: 70px;\n  border-top-right-radius: 70px;\n}\n#footer[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  line-height: 1.8em;\n  font-size: 0.85em;\n}\n#footer[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #000;\n}\n#footer[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 3rem;\n  font-size: 0.85em;\n  font-weight: 300;\n}\n#footer[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXN0cmUvRG9jdW1lbnRzL2Rldi9jaGluY2hpbmZyb250L3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNBSjtBREdJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0ZOO0FESUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGTjtBREdNO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHtcbiAgLmlubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmMWYxO1xuICAgIHBhZGRpbmc6IDNlbTtcbiAgICBwYWRkaW5nLXRvcDogN3JlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3MHB4O1xuICAgIFxuXG4gICAgLmFib3V0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XG4gICAgfVxuXG4gICAgLnNvY2lhbC1pY29ucyB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG4gICAgdWwgbGkge1xuICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgICBmb250LXNpemU6IC44NWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIC5mb290ZXItbGlua3Mge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIiNmb290ZXIgLmlubmVyIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjFmMTtcbiAgcGFkZGluZzogM2VtO1xuICBwYWRkaW5nLXRvcDogN3JlbTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNzBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDcwcHg7XG59XG4jZm9vdGVyIC5pbm5lciAuYWJvdXQge1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xufVxuI2Zvb3RlciAuaW5uZXIgLnNvY2lhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICMwMDA7XG59XG4jZm9vdGVyIC5pbm5lciB1bCBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiNmb290ZXIgLmlubmVyIHVsIGxpIC5mb290ZXItbGlua3Mge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _currencies_currencies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../currencies/currencies.component */
    "./src/app/components/currencies/currencies.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/signup"];
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 25,
      vars: 2,
      consts: [["id", "login", 1, "text-center"], ["method", "POST", "action", "#", 1, "form-signin"], ["src", "../../../assets/images/logo.png", "alt", "", "width", "200", 1, "mb-4"], [1, "h1", "mb-3"], ["for", "email", 1, "sr-only"], ["id", "email", "type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control"], ["userName", ""], ["for", "password", 1, "sr-only"], ["id", "password", "type", "password", "placeholder", "Password", "name", "password", "required", "", 1, "form-control"], ["userPwd", ""], [1, "forgot-password", "my-3"], ["type", "button", "value", "Login", 1, "btn", "btn-primary", "btn-block", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "fab", "fa-google"], [3, "routerLink"], [1, "redirect"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-currencies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.authService.signIn(_r0.value, _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
            return ctx.authService.googleAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Login with Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Don't have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_currencies_currencies_component__WEBPACK_IMPORTED_MODULE_2__["CurrenciesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["#login[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n}\n#login[_ngcontent-%COMP%]   .form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n#login[_ngcontent-%COMP%]   .form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n#login[_ngcontent-%COMP%]   .form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n#login[_ngcontent-%COMP%]   .form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n#login[_ngcontent-%COMP%]   .form-signin[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n#login[_ngcontent-%COMP%]   .form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXN0cmUvRG9jdW1lbnRzL2Rldi9jaGluY2hpbmZyb250L3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRUo7QURESTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNHTjtBREZNO0VBQ0UsVUFBQTtBQ0lSO0FEREk7RUFDRSxnQkFBQTtBQ0dOO0FEREk7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNHTjtBRERJO0VBRUUseUJBQUE7RUFDQSwwQkFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgLmZvcm0tc2lnbmluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNoZWNrYm94IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIH1cbiAgICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG4gIH1cbn0iLCIjbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4jbG9naW4gLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbiNsb2dpbiAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4jbG9naW4gLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuI2xvZ2luIC5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuI2xvZ2luIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuI2xvZ2luIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _currencies_currencies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../currencies/currencies.component */
    "./src/app/components/currencies/currencies.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/login"];
    };

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(authService) {
        _classCallCheck(this, SignupComponent);

        this.authService = authService;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 25,
      vars: 2,
      consts: [["id", "signup", 1, "text-center"], ["method", "POST", "action", "#", 1, "form-signup"], ["src", "../../../assets/images/logo.jpg", "alt", "", "width", "200", "height", "50", 1, "mb-4"], [1, "h1", "mb-3"], ["for", "email", 1, "sr-only"], ["id", "email", "type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control"], ["userName", ""], ["for", "password", 1, "sr-only"], ["id", "password", "type", "password", "placeholder", "Password", "name", "password", "required", "", 1, "form-control"], ["userPwd", ""], [1, "forgot-password", "my-3"], ["type", "button", "value", "Sign Up", 1, "btn", "btn-primary", "btn-block", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "fab", "fa-google"], [3, "routerLink"], [1, "redirect"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-currencies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_input_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.authService.signUp(_r0.value, _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_17_listener() {
            return ctx.authService.googleAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Continue with Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_currencies_currencies_component__WEBPACK_IMPORTED_MODULE_2__["CurrenciesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["#signup[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n}\n#signup[_ngcontent-%COMP%]   .form-signup[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n#signup[_ngcontent-%COMP%]   .form-signup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n#signup[_ngcontent-%COMP%]   .form-signup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n#signup[_ngcontent-%COMP%]   .form-signup[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n#signup[_ngcontent-%COMP%]   .form-signup[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n#signup[_ngcontent-%COMP%]   .form-signup[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXN0cmUvRG9jdW1lbnRzL2Rldi9jaGluY2hpbmZyb250L3NyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEREk7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDR047QURGTTtFQUNFLFVBQUE7QUNJUjtBRERJO0VBQ0UsZ0JBQUE7QUNHTjtBRERJO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDR047QURESTtFQUVFLHlCQUFBO0VBQ0EsMEJBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWdudXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIC5mb3JtLXNpZ251cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICB9XG4gICAgfVxuICAgIC5jaGVja2JveCB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICB9XG4gICAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG59IiwiI3NpZ251cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbiNzaWdudXAgLmZvcm0tc2lnbnVwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbiNzaWdudXAgLmZvcm0tc2lnbnVwIC5mb3JtLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuI3NpZ251cCAuZm9ybS1zaWdudXAgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG4jc2lnbnVwIC5mb3JtLXNpZ251cCAuY2hlY2tib3gge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuI3NpZ251cCAuZm9ybS1zaWdudXAgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbiNzaWdudXAgLmZvcm0tc2lnbnVwIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['login']);
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/secure-routes.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/guards/secure-routes.guard.ts ***!
    \***********************************************/

  /*! exports provided: SecureRoutesGuard */

  /***/
  function srcAppGuardsSecureRoutesGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecureRoutesGuard", function () {
      return SecureRoutesGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SecureRoutesGuard = /*#__PURE__*/function () {
      function SecureRoutesGuard(authService, router) {
        _classCallCheck(this, SecureRoutesGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(SecureRoutesGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authService.isLoggedIn) {
            window.alert('You are not allowed to access this URL!');
            this.router.navigate(['dashboard']);
          }

          return true;
        }
      }]);

      return SecureRoutesGuard;
    }();

    SecureRoutesGuard.ɵfac = function SecureRoutesGuard_Factory(t) {
      return new (t || SecureRoutesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SecureRoutesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SecureRoutesGuard,
      factory: SecureRoutesGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecureRoutesGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afs, // Inject Firestore service
      afAuth, // Inject Firebase Auth service
      router, ngZone) {
        var _this3 = this;

        _classCallCheck(this, AuthService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this3.userData = user;
            localStorage.setItem('user', JSON.stringify(_this3.userData));
          } else {
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        });
      }

      _createClass(AuthService, [{
        key: "signIn",
        value: function signIn(email, password) {
          var _this4 = this;

          return this.afAuth.signInWithEmailAndPassword(email, password).then(function (result) {
            _this4.ngZone.run(function () {
              _this4.router.navigate(['dashboard']);
            });

            _this4.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        }
      }, {
        key: "signUp",
        value: function signUp(email, password) {
          var _this5 = this;

          return this.afAuth.createUserWithEmailAndPassword(email, password).then(function (result) {
            _this5.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        }
      }, {
        key: "googleAuth",
        value: function googleAuth() {
          return this.authLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider());
        }
      }, {
        key: "authLogin",
        value: function authLogin(provider) {
          var _this6 = this;

          return this.afAuth.signInWithPopup(provider).then(function (result) {
            _this6.ngZone.run(function () {
              _this6.router.navigate(['dashboard']);
            });

            _this6.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        }
      }, {
        key: "SetUserData",
        value: function SetUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.userId));
          var userData = {
            userId: user.userId,
            email: user.email,
            displayName: user.displayName
          };
          return userRef.set(userData, {
            merge: true
          });
        }
      }, {
        key: "signOut",
        value: function signOut() {
          var _this7 = this;

          return this.afAuth.signOut().then(function () {
            localStorage.removeItem('user');

            _this7.router.navigate(['login']);
          });
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = JSON.parse(localStorage.getItem('user'));
          return user !== null ? true : false;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/currencies.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/currencies.service.ts ***!
    \************************************************/

  /*! exports provided: CurrenciesService */

  /***/
  function srcAppServicesCurrenciesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrenciesService", function () {
      return CurrenciesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CurrenciesService = /*#__PURE__*/function () {
      function CurrenciesService(http) {
        _classCallCheck(this, CurrenciesService);

        this.http = http;
      }

      _createClass(CurrenciesService, [{
        key: "getCurrencies",
        value: function getCurrencies() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].binance.apiUrl, "/api/v3/ticker/24hr")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp;
          }));
        }
      }]);

      return CurrenciesService;
    }();

    CurrenciesService.ɵfac = function CurrenciesService_Factory(t) {
      return new (t || CurrenciesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    CurrenciesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CurrenciesService,
      factory: CurrenciesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrenciesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/records.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/records.service.ts ***!
    \*********************************************/

  /*! exports provided: RecordsService */

  /***/
  function srcAppServicesRecordsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecordsService", function () {
      return RecordsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var RecordsService = /*#__PURE__*/function () {
      function RecordsService(afs) {
        _classCallCheck(this, RecordsService);

        this.afs = afs; // this.records = this.afs.collection('records').valueChanges();

        this.records = this.afs.collection('records').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
          return changes.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
          });
        }));
      }

      _createClass(RecordsService, [{
        key: "getRecords",
        value: function getRecords() {
          return this.records;
        }
      }]);

      return RecordsService;
    }();

    RecordsService.ɵfac = function RecordsService_Factory(t) {
      return new (t || RecordsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
    };

    RecordsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RecordsService,
      factory: RecordsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecordsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
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
      production: false,
      firebaseConfig: {
        apiKey: 'AIzaSyBoCJLLpCsv0-cYL31wrzk_vNZA_F6zLdQ',
        authDomain: 'chin-chin-85522.firebaseapp.com',
        databaseURL: 'https://chin-chin-85522.firebaseio.com',
        projectId: 'chin-chin-85522',
        storageBucket: 'chin-chin-85522.appspot.com',
        messagingSenderId: '741586546710',
        appId: '1:741586546710:web:4da0aea6d53581c57c4537',
        measurementId: 'G-W824WD1WR2'
      },
      binance: {
        apiUrl: 'https://api.binance.com',
        apiPublicKey: 'spXVSU1h1brvc9F1hAqpzUCV7FM2k06eFkrdYFX4LwQLeTGjRgRwbpjI4PwE9spH',
        apiSecretKey: 'MOFQk1LoJRIQ45PQxtLwLhiGlQjFYVoyVodWaAmC3ZS15Co3I6Cm0SoplLl75WIG'
      }
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
    /*! /Users/wistre/Documents/dev/chinchinfront/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map