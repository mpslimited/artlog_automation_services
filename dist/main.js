(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../dashboard/dashboard.module": [
		"./src/app/pages/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./pages/login/login.module": [
		"./src/app/pages/login/login.module.ts",
		"pages-login-login-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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

module.exports = "<app-alert-message>\r\n</app-alert-message>\r\n  \r\n  <router-outlet>\r\n  </router-outlet>\r\n  \r\n  <app-global-dropdown>\r\n  </app-global-dropdown>\r\n  \r\n  <app-global-popup>\r\n  </app-global-popup>\r\n  <footer class=\"footer mt-auto py-2\">\r\n    <div class=\"container\">\r\n      <div class=\"d-flex justify-content-center\">\r\n        <span class=\"text-muted font\"><small>Bynder Art Log Automation V.1 &copy;MPS LTD. 2019</small></span>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  \r\n  <app-angular-loader #globalLoader>\r\n  </app-angular-loader>\r\n  \r\n  \r\n  <!-- <app-common-search-cs [searchModel]=\"documentReferenceModel\"></app-common-search-cs> -->\r\n  "

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
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/app/component/index.ts");
/* harmony import */ var _core_base_base_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/base/base.util */ "./src/app/core/base/base.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.version = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].version;
        this.cssUrl = '/assets/css/styleCustomer.css';
        this.routerEvents();
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        _core_base_base_util__WEBPACK_IMPORTED_MODULE_4__["BaseUtil"].setGlobalLoader(this.globalLoader);
    };
    AppComponent.prototype.routerEvents = function () {
        this.router.events.subscribe(function (val) {
            //Utils.setCss(this.cssUrl);
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadStart"]) {
                _core_base_base_util__WEBPACK_IMPORTED_MODULE_4__["BaseUtil"].showGlobalLoader();
            }
            else if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _core_base_base_util__WEBPACK_IMPORTED_MODULE_4__["BaseUtil"].hideGlobalLoader();
            }
            else if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                _core_base_base_util__WEBPACK_IMPORTED_MODULE_4__["BaseUtil"].hideGlobalLoader();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('globalLoader'),
        __metadata("design:type", _component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"])
    ], AppComponent.prototype, "globalLoader", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_front_panel_front_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/front-panel/front-panel.module */ "./src/app/pages/front-panel/front-panel.module.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component */ "./src/app/component/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/guard */ "./src/app/core/guard/index.ts");
/* harmony import */ var _core_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/directive */ "./src/app/core/directive/index.ts");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _pages_sync_jobs_sync_jobs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/sync-jobs/sync-jobs.component */ "./src/app/pages/sync-jobs/sync-jobs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { EditjobComponent } from './pages/dashboard/editjob/editjob.component';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_sync_jobs_sync_jobs_component__WEBPACK_IMPORTED_MODULE_18__["SyncJobsComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _pages_front_panel_front_panel_module__WEBPACK_IMPORTED_MODULE_7__["FrontPanelModule"],
                _core_services__WEBPACK_IMPORTED_MODULE_9__["ServiceModule"],
                _core_guard__WEBPACK_IMPORTED_MODULE_10__["GuardModule"],
                _component__WEBPACK_IMPORTED_MODULE_8__["AGModule"],
                _component__WEBPACK_IMPORTED_MODULE_8__["ComponentModule"],
                _component__WEBPACK_IMPORTED_MODULE_8__["ComponentServiceModule"],
                _core_directive__WEBPACK_IMPORTED_MODULE_11__["DirectiveModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ScrollingModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guard */ "./src/app/core/guard/index.ts");
/* harmony import */ var _core_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guard/login-guard */ "./src/app/core/guard/login-guard/index.ts");



var routes = [
    {
        path: '',
        canActivate: [_core_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]],
        pathMatch: 'full',
        loadChildren: './pages/login/login.module#LoginModule'
    },
    {
        path: '**',
        redirectTo: 'pages/front-panel/front-panel.module#FrontPanelModule',
        canActivate: [_core_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }
];
var extraOptions = {
    enableTracing: false,
    useHash: false
};
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, extraOptions);


/***/ }),

/***/ "./src/app/component/ag-component/ag-checbox-header/ag-checbox-header.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/component/ag-component/ag-checbox-header/ag-checbox-header.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/ag-component/ag-checbox-header/ag-checbox-header.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/component/ag-component/ag-checbox-header/ag-checbox-header.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-control custom-checkbox\">\r\n  <!-- <input type=\"checkbox\" class=\"custom-control-input\" [id]=\"id\" [(ngModel)]=\"value\" (change)=\"onChange()\"> -->\r\n  <label class=\"custom-control-label\" [for]=\"id\">{{params.displayName}}</label>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/ag-component/ag-checbox-header/ag-checbox-header.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/ag-component/ag-checbox-header/ag-checbox-header.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AgChecboxHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgChecboxHeaderComponent", function() { return AgChecboxHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ag_check_box_ag_check_box_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ag-check-box/ag-check-box.service */ "./src/app/component/ag-component/ag-check-box/ag-check-box.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgChecboxHeaderComponent = /** @class */ (function () {
    function AgChecboxHeaderComponent(agCheckBox) {
        this.agCheckBox = agCheckBox;
        this.value = false;
        this.id = agCheckBox.getID();
    }
    AgChecboxHeaderComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    AgChecboxHeaderComponent.prototype.onChange = function () {
        var _this = this;
        var field = this.params.column.getColDef().field;
        this.params.api.forEachNode(function (item) {
            if (item.data[field].readonly = false) {
                if (_this.value) {
                    item.data[field] = Object.assign({}, item.data[field], { value: true });
                }
                else {
                    item.data[field] = Object.assign({}, item.data[field], { value: false });
                }
            }
        });
        this.params.api.refreshCells();
    };
    AgChecboxHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ag-checbox-header',
            template: __webpack_require__(/*! ./ag-checbox-header.component.html */ "./src/app/component/ag-component/ag-checbox-header/ag-checbox-header.component.html"),
            styles: [__webpack_require__(/*! ./ag-checbox-header.component.css */ "./src/app/component/ag-component/ag-checbox-header/ag-checbox-header.component.css")]
        }),
        __metadata("design:paramtypes", [_ag_check_box_ag_check_box_service__WEBPACK_IMPORTED_MODULE_1__["AgCheckBoxService"]])
    ], AgChecboxHeaderComponent);
    return AgChecboxHeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/ag-component/ag-checbox-header/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/component/ag-component/ag-checbox-header/index.ts ***!
  \*******************************************************************/
/*! exports provided: AgChecboxHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ag_checbox_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ag-checbox-header.component */ "./src/app/component/ag-component/ag-checbox-header/ag-checbox-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgChecboxHeaderComponent", function() { return _ag_checbox_header_component__WEBPACK_IMPORTED_MODULE_0__["AgChecboxHeaderComponent"]; });




/***/ }),

/***/ "./src/app/component/ag-component/ag-check-box/ag-check-box.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/component/ag-component/ag-check-box/ag-check-box.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-control-label {\r\n    position: relative;\r\n}"

/***/ }),

/***/ "./src/app/component/ag-component/ag-check-box/ag-check-box.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/component/ag-component/ag-check-box/ag-check-box.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-control custom-checkbox\">\r\n  <input type=\"checkbox\" class=\"custom-control-input\" [id]=\"id\" [disabled]=\"!isReadonly\" [(ngModel)]=\"value\" (change)=\"onChange()\">\r\n  <label style=\"display: block; position: relative\" class=\"custom-control-label\" [for]=\"id\"></label>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/ag-component/ag-check-box/ag-check-box.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/component/ag-component/ag-check-box/ag-check-box.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AgCheckBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgCheckBoxComponent", function() { return AgCheckBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ag_check_box_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ag-check-box.service */ "./src/app/component/ag-component/ag-check-box/ag-check-box.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgCheckBoxComponent = /** @class */ (function () {
    function AgCheckBoxComponent(agCheckSer) {
        this.agCheckSer = agCheckSer;
        this.isReadonly = false;
        this.id = agCheckSer.getID();
    }
    AgCheckBoxComponent.prototype.agInit = function (params) {
        this.agParam = params;
        this.value = this.agParam.data[this.agParam.colDef.field].value;
        this.isReadonly = this.agParam.data[this.agParam.colDef.field].readonly;
    };
    AgCheckBoxComponent.prototype.onChange = function () {
        this.agParam.data[this.agParam.colDef.field].value = this.value;
        console.log(this.agParam.data);
    };
    AgCheckBoxComponent.prototype.refresh = function () {
        return false;
    };
    AgCheckBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ag-check-box',
            template: __webpack_require__(/*! ./ag-check-box.component.html */ "./src/app/component/ag-component/ag-check-box/ag-check-box.component.html"),
            styles: [__webpack_require__(/*! ./ag-check-box.component.css */ "./src/app/component/ag-component/ag-check-box/ag-check-box.component.css")]
        }),
        __metadata("design:paramtypes", [_ag_check_box_service__WEBPACK_IMPORTED_MODULE_1__["AgCheckBoxService"]])
    ], AgCheckBoxComponent);
    return AgCheckBoxComponent;
}());



/***/ }),

/***/ "./src/app/component/ag-component/ag-check-box/ag-check-box.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/ag-component/ag-check-box/ag-check-box.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AgCheckBoxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgCheckBoxService", function() { return AgCheckBoxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ag_radio_id_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ag-radio/id-generator */ "./src/app/component/ag-component/ag-radio/id-generator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgCheckBoxService = /** @class */ (function () {
    function AgCheckBoxService() {
        this.agIdGen = new _ag_radio_id_generator__WEBPACK_IMPORTED_MODULE_1__["IdGenerator"]('ag-checkbox');
    }
    AgCheckBoxService.prototype.getID = function () {
        return this.agIdGen.genrateID();
    };
    AgCheckBoxService.prototype.getCheckedValues = function (data, key) {
        var retVal = data.filter(function (item) {
            if (item[key].value === true) {
                return true;
            }
            else {
                return false;
            }
        });
        return retVal;
    };
    AgCheckBoxService.prototype.getUnheckedValues = function (data, key) {
        var retVal = data.filter(function (item) {
            if (item[key].value === false) {
                return true;
            }
            else {
                return false;
            }
        });
        return retVal;
    };
    AgCheckBoxService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AgCheckBoxService);
    return AgCheckBoxService;
}());



/***/ }),

/***/ "./src/app/component/ag-component/ag-check-box/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/ag-component/ag-check-box/index.ts ***!
  \**************************************************************/
/*! exports provided: AgCheckBoxComponent, AgCheckBoxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ag_check_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ag-check-box.component */ "./src/app/component/ag-component/ag-check-box/ag-check-box.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgCheckBoxComponent", function() { return _ag_check_box_component__WEBPACK_IMPORTED_MODULE_0__["AgCheckBoxComponent"]; });

/* harmony import */ var _ag_check_box_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ag-check-box.service */ "./src/app/component/ag-component/ag-check-box/ag-check-box.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgCheckBoxService", function() { return _ag_check_box_service__WEBPACK_IMPORTED_MODULE_1__["AgCheckBoxService"]; });





/***/ }),

/***/ "./src/app/component/ag-component/ag-component.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/ag-component/ag-component.module.ts ***!
  \***************************************************************/
/*! exports provided: AGModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGModule", function() { return AGModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_sharedModules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sharedModules */ "./src/app/core/sharedModules/index.ts");
/* harmony import */ var _radio_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-button */ "./src/app/component/ag-component/radio-button/index.ts");
/* harmony import */ var _ag_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ag-dropdown */ "./src/app/component/ag-dropdown/index.ts");
/* harmony import */ var _ag_radio_ag_radio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ag-radio/ag-radio.component */ "./src/app/component/ag-component/ag-radio/ag-radio.component.ts");
/* harmony import */ var _ag_radio_ag_radio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ag-radio/ag-radio.service */ "./src/app/component/ag-component/ag-radio/ag-radio.service.ts");
/* harmony import */ var _ag_check_box_ag_check_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ag-check-box/ag-check-box.component */ "./src/app/component/ag-component/ag-check-box/ag-check-box.component.ts");
/* harmony import */ var _ag_checbox_header_ag_checbox_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ag-checbox-header/ag-checbox-header.component */ "./src/app/component/ag-component/ag-checbox-header/ag-checbox-header.component.ts");
/* harmony import */ var _ag_check_box_ag_check_box_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ag-check-box/ag-check-box.service */ "./src/app/component/ag-component/ag-check-box/ag-check-box.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AGModule = /** @class */ (function () {
    function AGModule() {
    }
    AGModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _radio_button__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"],
                _ag_dropdown__WEBPACK_IMPORTED_MODULE_4__["AgDropdownComponent"],
                _ag_radio_ag_radio_component__WEBPACK_IMPORTED_MODULE_5__["AgRadioVerticalComponent"],
                _ag_check_box_ag_check_box_component__WEBPACK_IMPORTED_MODULE_7__["AgCheckBoxComponent"],
                _ag_checbox_header_ag_checbox_header_component__WEBPACK_IMPORTED_MODULE_8__["AgChecboxHeaderComponent"]
            ],
            providers: [
                _ag_radio_ag_radio_service__WEBPACK_IMPORTED_MODULE_6__["AgRadioService"],
                _ag_check_box_ag_check_box_service__WEBPACK_IMPORTED_MODULE_9__["AgCheckBoxService"]
            ],
            imports: [
                _core_sharedModules__WEBPACK_IMPORTED_MODULE_2__["RootSharedModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_1__["AgGridModule"].withComponents([
                    _radio_button__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"], _ag_dropdown__WEBPACK_IMPORTED_MODULE_4__["AgDropdownComponent"],
                    _ag_radio_ag_radio_component__WEBPACK_IMPORTED_MODULE_5__["AgRadioVerticalComponent"], _ag_check_box_ag_check_box_component__WEBPACK_IMPORTED_MODULE_7__["AgCheckBoxComponent"],
                    _ag_checbox_header_ag_checbox_header_component__WEBPACK_IMPORTED_MODULE_8__["AgChecboxHeaderComponent"]
                ])
            ]
        })
    ], AGModule);
    return AGModule;
}());



/***/ }),

/***/ "./src/app/component/ag-component/ag-radio/ag-radio.component.css":
/*!************************************************************************!*\
  !*** ./src/app/component/ag-component/ag-radio/ag-radio.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/ag-component/ag-radio/ag-radio.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/component/ag-component/ag-radio/ag-radio.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-control custom-radio \">\r\n  <input type=\"radio\" class=\"custom-control-input\" [name]=\"name\" [id]=\"id\" [value]=\"valueOnSelect\" [(ngModel)]=\"value\" (change)=\"onChange()\">\r\n  <label style=\"display: block\" class=\"custom-control-label\" [for]=\"id\">{{text}}</label>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/ag-component/ag-radio/ag-radio.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/ag-component/ag-radio/ag-radio.component.ts ***!
  \***********************************************************************/
/*! exports provided: AgRadioVerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgRadioVerticalComponent", function() { return AgRadioVerticalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ag_radio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ag-radio.service */ "./src/app/component/ag-component/ag-radio/ag-radio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgRadioVerticalComponent = /** @class */ (function () {
    function AgRadioVerticalComponent(agRadioSer) {
        this.agRadioSer = agRadioSer;
        this.text = '';
        this.value = null;
        this.valueOnSelect = '';
        this.id = agRadioSer.getRadioID();
    }
    AgRadioVerticalComponent.prototype.agInit = function (params) {
        this.agParam = params;
        this.name = params.colDef.field;
        this.valueOnSelect = params.data[params.colDef.field];
        this.value = params.data[params.colDef.field + '-config']['value'];
        var text = params.data[params.colDef.field + '-config']['text'];
        if (text) {
            this.text = params.data[params.colDef.field + '-config']['text'];
        }
    };
    AgRadioVerticalComponent.prototype.onChange = function () {
        this.agParam.data[this.agParam.colDef.field + '-config']['value'] = this.value;
        // console.log(this.value, this.agParam);
    };
    AgRadioVerticalComponent.prototype.refresh = function () {
        return false;
    };
    AgRadioVerticalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ag-radio',
            template: __webpack_require__(/*! ./ag-radio.component.html */ "./src/app/component/ag-component/ag-radio/ag-radio.component.html"),
            styles: [__webpack_require__(/*! ./ag-radio.component.css */ "./src/app/component/ag-component/ag-radio/ag-radio.component.css")]
        }),
        __metadata("design:paramtypes", [_ag_radio_service__WEBPACK_IMPORTED_MODULE_1__["AgRadioService"]])
    ], AgRadioVerticalComponent);
    return AgRadioVerticalComponent;
}());



/***/ }),

/***/ "./src/app/component/ag-component/ag-radio/ag-radio.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/ag-component/ag-radio/ag-radio.service.ts ***!
  \*********************************************************************/
/*! exports provided: AgRadioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgRadioService", function() { return AgRadioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _id_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id-generator */ "./src/app/component/ag-component/ag-radio/id-generator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgRadioService = /** @class */ (function () {
    function AgRadioService() {
        this.agIdGen = new _id_generator__WEBPACK_IMPORTED_MODULE_1__["IdGenerator"]('ag-radio');
    }
    AgRadioService.prototype.getRadioID = function () {
        return this.agIdGen.genrateID();
    };
    AgRadioService.prototype.genrateAgRaioConfigVertical = function (data, agRadioInput) {
        agRadioInput.forEach(function (input) {
            data.forEach(function (item) {
                item[input.field + '-config'] = {
                    value: 35000
                };
            });
        });
    };
    AgRadioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AgRadioService);
    return AgRadioService;
}());



/***/ }),

/***/ "./src/app/component/ag-component/ag-radio/id-generator.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/ag-component/ag-radio/id-generator.ts ***!
  \*****************************************************************/
/*! exports provided: IdGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdGenerator", function() { return IdGenerator; });
var IdGenerator = /** @class */ (function () {
    function IdGenerator(idName) {
        this.idCount = 0;
        this.idName = null;
        this.idName = idName + '-';
    }
    IdGenerator.prototype.genrateID = function () {
        return this.idName + (++this.idCount);
    };
    return IdGenerator;
}());



/***/ }),

/***/ "./src/app/component/ag-component/index.ts":
/*!*************************************************!*\
  !*** ./src/app/component/ag-component/index.ts ***!
  \*************************************************/
/*! exports provided: AGModule, AgChecboxHeaderComponent, AgCheckBoxComponent, AgCheckBoxService, RadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ag_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ag-component.module */ "./src/app/component/ag-component/ag-component.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AGModule", function() { return _ag_component_module__WEBPACK_IMPORTED_MODULE_0__["AGModule"]; });

/* harmony import */ var _radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-button */ "./src/app/component/ag-component/radio-button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return _radio_button__WEBPACK_IMPORTED_MODULE_1__["RadioButtonComponent"]; });

/* harmony import */ var _ag_checbox_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ag-checbox-header */ "./src/app/component/ag-component/ag-checbox-header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgChecboxHeaderComponent", function() { return _ag_checbox_header__WEBPACK_IMPORTED_MODULE_2__["AgChecboxHeaderComponent"]; });

/* harmony import */ var _ag_check_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ag-check-box */ "./src/app/component/ag-component/ag-check-box/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgCheckBoxComponent", function() { return _ag_check_box__WEBPACK_IMPORTED_MODULE_3__["AgCheckBoxComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgCheckBoxService", function() { return _ag_check_box__WEBPACK_IMPORTED_MODULE_3__["AgCheckBoxService"]; });







/***/ }),

/***/ "./src/app/component/ag-component/radio-button/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/ag-component/radio-button/index.ts ***!
  \**************************************************************/
/*! exports provided: RadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-button.component */ "./src/app/component/ag-component/radio-button/radio-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return _radio_button_component__WEBPACK_IMPORTED_MODULE_0__["RadioButtonComponent"]; });




/***/ }),

/***/ "./src/app/component/ag-component/radio-button/radio-button.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/component/ag-component/radio-button/radio-button.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/ag-component/radio-button/radio-button.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/component/ag-component/radio-button/radio-button.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"radio\" [name]=\"name\" (change)=\"onChange()\" [(ngModel)]=\"value\" [value]=\"defaultValue\">\r\n"

/***/ }),

/***/ "./src/app/component/ag-component/radio-button/radio-button.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/component/ag-component/radio-button/radio-button.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return RadioButtonComponent; });
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

var RadioButtonComponent = /** @class */ (function () {
    function RadioButtonComponent() {
    }
    RadioButtonComponent.prototype.agInit = function (params) {
        this.params = params;
        this.defaultValue = this.params.value.defaultValue;
        this.name = this.params.value.name;
        this.value = this.params.value.value;
        this.outputKeyInData = this.params.value.outputKeyInData;
        this.params.data[this.outputKeyInData] = this.params.value.value;
    };
    RadioButtonComponent.prototype.onChange = function () {
        this.params.data[this.outputKeyInData] = this.value;
    };
    RadioButtonComponent.prototype.refresh = function () {
        return false;
    };
    RadioButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-radio-button',
            template: __webpack_require__(/*! ./radio-button.component.html */ "./src/app/component/ag-component/radio-button/radio-button.component.html"),
            styles: [__webpack_require__(/*! ./radio-button.component.css */ "./src/app/component/ag-component/radio-button/radio-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RadioButtonComponent);
    return RadioButtonComponent;
}());



/***/ }),

/***/ "./src/app/component/ag-dropdown/ag-dropdown.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/ag-dropdown/ag-dropdown.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/component/ag-dropdown/ag-dropdown.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/ag-dropdown/ag-dropdown.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-dropdown-with-description style=\"position: relative; z-index: 1000;\" (change)=\"onChange($event)\" [data]=\"data\" name=\"test\" [(ngModel)]=\"value\" [basicSetting]=\"basicSetting\">\r\n\r\n</app-dropdown-with-description> -->\r\n\r\n\r\n\r\n\r\n<div #myInput class=\"dropdowndisplay\">\r\n  <div style=\"display: inline-block;\" [class.width60Perc]=\"basicSetting.descriptionKey\" [class.width100Perc]=\"!basicSetting.descriptionKey\">\r\n    <input (mouseleave)=\"onMouseLeave()\" (focus)=\"onFocus()\" type=\"text\" [value]=\"selectedValue[basicSetting.displayKey] || ''\" class=\"form-control form-control-sm\">\r\n  </div>\r\n\r\n  <div style=\"display: inline-block;\" *ngIf=\"basicSetting.descriptionKey\" class=\"width40Perc\">\r\n    <input readonly class=\"form-control form-control-sm\" [value]=\"selectedValue[basicSetting.descriptionKey]\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/ag-dropdown/ag-dropdown.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/ag-dropdown/ag-dropdown.component.ts ***!
  \****************************************************************/
/*! exports provided: AgDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgDropdownComponent", function() { return AgDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-dropdown */ "./src/app/component/global-dropdown/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { testData, basicSetting as BS } from './test.data';
var AgDropdownComponent = /** @class */ (function () {
    function AgDropdownComponent(globalDropDownService) {
        var _this = this;
        this.globalDropDownService = globalDropDownService;
        this.selectedValue = {};
        this.basicSetting = new _global_dropdown__WEBPACK_IMPORTED_MODULE_1__["GlobalDropdownModel"]();
        this.myBlurFunc = function () {
            _this.globalDropDownService.sendDropdownShow(false);
        };
    }
    AgDropdownComponent.prototype.ngAfterViewInit = function () {
        this.myInputEle = this.myInput.nativeElement;
    };
    AgDropdownComponent.prototype.agInit = function (params) {
        this.params = params;
        this.basicSetting = this.params.value.basicSetting;
        this.data = this.params.value.data;
        this.selectedValue = this.data[0];
    };
    AgDropdownComponent.prototype.onChange = function (event) {
        console.log(event);
        this.selectedValue = event;
        this.params.data[this.params.colDef.field + '-value'] = this.progateValue(event);
    };
    AgDropdownComponent.prototype.progateValue = function (val) {
        if (this.basicSetting.valueTypeOrKey === 'complete') {
            return val;
        }
        else {
            return val[this.basicSetting.valueTypeOrKey];
        }
    };
    AgDropdownComponent.prototype.showDropdown = function () {
        var abc = {};
        abc.basicSetting = this.basicSetting;
        abc.context = this;
        abc.ele = this.myInputEle;
        abc.listData = this.data;
        this.globalDropDownService
            .sendDropdownData(abc);
    };
    AgDropdownComponent.prototype.onMouseLeave = function () {
        this.myInputEle.onblur = this.myBlurFunc;
    };
    AgDropdownComponent.prototype.onMouseEnter = function () {
        this.myInputEle.onblur = null;
    };
    AgDropdownComponent.prototype.onFocus = function () {
        this.showDropdown();
    };
    AgDropdownComponent.prototype.refresh = function () {
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myInput'),
        __metadata("design:type", Object)
    ], AgDropdownComponent.prototype, "myInput", void 0);
    AgDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ag-dropdown',
            template: __webpack_require__(/*! ./ag-dropdown.component.html */ "./src/app/component/ag-dropdown/ag-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./ag-dropdown.component.css */ "./src/app/component/ag-dropdown/ag-dropdown.component.css")]
        }),
        __metadata("design:paramtypes", [_global_dropdown__WEBPACK_IMPORTED_MODULE_1__["GlobalDropDownService"]])
    ], AgDropdownComponent);
    return AgDropdownComponent;
}());



/***/ }),

/***/ "./src/app/component/ag-dropdown/index.ts":
/*!************************************************!*\
  !*** ./src/app/component/ag-dropdown/index.ts ***!
  \************************************************/
/*! exports provided: AgDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ag_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ag-dropdown.component */ "./src/app/component/ag-dropdown/ag-dropdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgDropdownComponent", function() { return _ag_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["AgDropdownComponent"]; });




/***/ }),

/***/ "./src/app/component/ag-grid/ag-grid.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/ag-grid/ag-grid.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-right {\r\n  text-align: right !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/ag-grid/ag-grid.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/ag-grid/ag-grid.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"width: 100%; height: 100%;\" [style.display]=\"showGrid\"> -->\r\n\r\n<div style=\"width: 100%; height: 100%;\">\r\n\r\n  <div *ngIf=\"showHeader\" class=\"row   mt-3\">\r\n    <div class=\"col-2 pt-2 \">\r\n      <div class=\"d-flex\">\r\n        <select #page_size (change)=\"onPageSizeChanged(page_size.value)\" id=\"page-size\" class=\"form-control mr-2\">\r\n          <option *ngFor=\"let rows of rowsToShowArray\"> {{rows}} </option>\r\n        </select>\r\n        <span class=\"mt-1\">entries</span>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-3 pt-2 mr-auto \">\r\n      <app-common-search-cs *ngIf=\"searchModel\" [searchModel]=\"searchModel\"></app-common-search-cs>\r\n    </div>\r\n    <div class=\"  col-5 d-flex flex-row-reverse\">\r\n      <!-- <span *ngIf=\"export\" class=\"ml-1\">\r\n      <button class=\"btn btn-primary\" (click)=\"onBtExport()\">\r\n        <i class=\"fa fa-download\"></i>\r\n      </button>\r\n    </span> -->\r\n      <!-- <span class=\"ml-1\">\r\n      <button   class=\"btn btn-primary\">\r\n        <i class=\"fa fa-bars\"></i>\r\n      </button>\r\n    </span> -->\r\n      <div class=\"d-flex\">\r\n        <label class=\"pr-2 pt-2\">Search</label>\r\n        <input (keyup)=\"onQuickFilterChanged($event)\" id=\"quickFilterInput\" style=\"width: 175px\" class=\"form-control\" placeholder=\"Type text to search...\" />\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <ag-grid-angular suppressColumnVirtualisation=true [getRowHeight]=\"getRowHeight\" [context]=\"context\" [frameworkComponents]=\"frameworkComponents\" paginationSetPageSize=true\r\n    [pagination]=\"showHeader\" style=\"width: 100%; height: 88%;\" animateRows=\"true\" enableColResize=\"true\" class=\"ag-theme-balham my-1\" enableSorting=\"true\" [rowSelection]=\"rowSelection\"\r\n    enableFilter=\"true\" [headerHeight]=\"headerHeight\" [gridOptions]=\"gridOptions\" (filterChanged)=\"onFilterChanged($event)\" (rowDataChanged)=\"onRowDataChanged($event)\"\r\n    (rowDataUpdated)=\"onRowDataUpdated($event)\" (sortChanged)=\"onSortChanged($event)\" (gridReady)=\"onGridReady($event)\" (modelUpdated)=\"onModelUpdated($event)\">\r\n  </ag-grid-angular>\r\n\r\n\r\n  <div class=\"clearfix\"></div>\r\n\r\n  <div *ngIf=\"showFooter\">\r\n    <app-pagination *ngIf=\"paging\" [pageSize]=\"pageSize\" [totalEntries]=\"totalEntries\" [newSetup]=\"newSetup\" (pageChanged)=\"onPageChanged($event)\">\r\n    </app-pagination>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- <app-pagination [newSetup]=\"newSetup\" (pageChanged)=\"onPageChanged($event)\"> -->\r\n\r\n\r\n<!-- </app-pagination> -->\r\n\r\n<!-- <nav aria-label=\"...\">\r\n  <ul class=\"pagination\">\r\n    <li (click)=\"onPageClick('first', firstPage)\" #firstPage class=\"page-item\">\r\n      <a class=\"page-link\">First</a>\r\n    </li>\r\n\r\n\r\n    <li (click)=\"onPageClick('prev', prePage)\" #prePage class=\"page-item \">\r\n      <a class=\"page-link\">Previous</a>\r\n    </li>\r\n\r\n    <ng-container *ngFor=\"let pageNum of pagesArray\">\r\n      <li (click)=\"onPageClick(pageNum, me)\" #me class=\"page-item\">\r\n        <a class=\"page-link\">{{pageNum}}</a>\r\n      </li>\r\n    </ng-container>\r\n\r\n    <li (click)=\"onPageClick('next', nextPage)\" #nextPage class=\"page-item\">\r\n      <a class=\"page-link\">Next</a>\r\n    </li>\r\n\r\n    <li (click)=\"onPageClick('last', lastPage)\" #lastPage class=\"page-item \">\r\n      <a class=\"page-link\">Last</a>\r\n    </li>\r\n\r\n  </ul>\r\n</nav> -->\r\n"

/***/ }),

/***/ "./src/app/component/ag-grid/ag-grid.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/ag-grid/ag-grid.component.ts ***!
  \********************************************************/
/*! exports provided: AgGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgGridComponent", function() { return AgGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared */ "./src/app/core/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgGridComponent = /** @class */ (function () {
    function AgGridComponent() {
        this.rowsToShowArray = [10, 25, 50, 100];
        this.count = 0;
        this.paging = true;
        this.export = true;
        this.myGridOptions = {};
        this.myGridReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newSetup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showGrid = 'none';
        this.showHeader = true;
        this.showFooter = true;
        this.totalEntries = null;
        this.pageSize = null;
        this.totalPages = null;
        this.pagesArray = [];
        this.lastSelectedPageEle = null;
        this.lastSelectedPage = 0;
        this.gridOptions = {};
        this.headerHeight = 32;
    }
    AgGridComponent.prototype.ngOnChanges = function () {
        this.gridOptions = this.myGridOptions;
        this.gridOptions.rowHeight = 30;
        this.gridOptions.suppressDragLeaveHidesColumns = true;
    };
    AgGridComponent.prototype.ngOnInit = function () {
        console.log('extraOption>', this.extraOption);
        if (this.extraOption) {
            console.log('extraOption>', this.extraOption);
            this.showHeader = this.extraOption.showHeader;
            this.showFooter = this.extraOption.showFooter;
        }
        this.rowSelection = (this.rowSelection !== undefined) ? this.rowSelection : 'multiple';
        console.log('rowSelection', this.rowSelection);
    };
    AgGridComponent.prototype.onPageSizeChanged = function (newPageSize) {
        this.pageSize = Number(newPageSize);
        this.myGridOptions.api.paginationSetPageSize(Number(newPageSize));
        this.newSetup.next(this.gridApi.paginationGetTotalPages());
        this.autoAdjustLocal();
    };
    AgGridComponent.prototype.onGridReady = function (api) {
        this.gridApi = api.api;
        // this.gridApi.setColumnDefs(this.columnDefs);
        // this.gridApi.setRowData(this.rowData);
        //  this.gridApi.sizeColumnsToFit();
        this.columnApi = api.columnApi;
        this.myGridReady.emit(api);
        this.gridApi.paginationSetPageSize(10);
        this.onRowDataChanged(null);
    };
    AgGridComponent.prototype.onRowDataChanged = function (event) {
        // this.totalPages = 0;
        // this.totalPages = this.gridApi.paginationGetTotalPages();
        if (this.gridApi) {
            ++this.count;
            console.log(this.count, 'onRowDataChanged');
            if (this.gridApi['gridEmpty'] === true) {
                this.showGrid = 'none';
            }
            else {
                this.showGrid = 'block';
            }
            this.pageSize = this.gridApi.paginationGetPageSize() || this.gridOptions.paginationPageSize;
            // if (this.gridOptions.rowData) {
            this.totalEntries = this.gridApi.totalRowCount || (this.gridOptions.rowData && this.gridOptions.rowData.length) || 0;
            // }
            this.newSetup.next(this.gridApi.paginationGetTotalPages());
            // this.generatePages();
            console.log('onRowDataChanged', this.totalPages);
            var allColumnIds_1 = [];
            this.columnApi.getAllColumns()
                .forEach(function (column) {
                allColumnIds_1.push(column.colId);
            });
            this.columnApi.autoSizeColumns(allColumnIds_1);
        }
    };
    AgGridComponent.prototype.onRowDataUpdated = function (event) {
        console.log('onRowDataUpdated');
    };
    AgGridComponent.prototype.onQuickFilterChanged = function ($event) {
        this.gridApi.setQuickFilter($event.target.value);
        this.newSetup.next(this.gridApi.paginationGetTotalPages());
    };
    AgGridComponent.prototype.onBtExport = function () {
        var params = {
            skipHeader: false,
            skipFooters: true,
            skipGroups: true,
            fileName: this.fileName || 'export.csv'
        };
        this.gridApi.exportDataAsCsv(params);
    };
    AgGridComponent.prototype.onBtFirst = function () {
        this.gridApi.paginationGoToFirstPage();
    };
    AgGridComponent.prototype.onBtLast = function () {
        this.gridApi.paginationGoToLastPage();
    };
    AgGridComponent.prototype.onBtNext = function () {
        this.gridApi.paginationGoToNextPage();
    };
    AgGridComponent.prototype.onBtPrevious = function () {
        this.gridApi.paginationGoToPreviousPage();
    };
    AgGridComponent.prototype.onNthPage = function (num) {
        this.gridApi.paginationGoToPage(num);
    };
    AgGridComponent.prototype.onPageChanged = function (val) {
        switch (val) {
            case 'first':
                this.gridApi.paginationGoToFirstPage();
                break;
            case 'last':
                this.gridApi.paginationGoToLastPage();
                break;
            case 'next':
                this.gridApi.paginationGoToNextPage();
                break;
            case 'prev':
                this.gridApi.paginationGoToPreviousPage();
                break;
            default:
                this.gridApi.paginationGoToPage(val - 1);
                break;
        }
        this.autoAdjustLocal();
    };
    AgGridComponent.prototype.onSortChanged = function (event) {
        this.autoAdjustLocal();
        console.log('onSortChanged', event);
    };
    AgGridComponent.prototype.onFilterChanged = function (api) {
        this.newSetup.next(this.gridApi.paginationGetTotalPages());
        this.autoAdjustLocal();
    };
    AgGridComponent.prototype.autoAdjustLocal = function () {
        _core_shared__WEBPACK_IMPORTED_MODULE_2__["ProjectUtils"].grid.autoSizeColumns({
            gridApi: this.gridApi,
            columnApi: this.columnApi
        });
    };
    AgGridComponent.prototype.onModelUpdated = function (event) {
        console.log('onModelUpdated', event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "searchModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "extraOption", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "context", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "frameworkComponents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "getRowHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "paging", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "export", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "myGridOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "rowSelection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgGridComponent.prototype, "fileName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgGridComponent.prototype, "myGridReady", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], AgGridComponent.prototype, "newSetup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "showHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgGridComponent.prototype, "showFooter", void 0);
    AgGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ag-grid',
            template: __webpack_require__(/*! ./ag-grid.component.html */ "./src/app/component/ag-grid/ag-grid.component.html"),
            styles: [__webpack_require__(/*! ./ag-grid.component.css */ "./src/app/component/ag-grid/ag-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgGridComponent);
    return AgGridComponent;
}());



/***/ }),

/***/ "./src/app/component/alert-message/alert-message.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/alert-message/alert-message.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-success {\r\n  background: rgba(106, 204, 67, 1);\r\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(106, 204, 67, 1)), color-stop(100%, rgba(56, 135, 11, 1)));\r\n  background: linear-gradient(to bottom, rgba(106, 204, 67, 1) 0%, rgba(56, 135, 11, 1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6acc43', endColorstr='#38870b', GradientType=0);\r\n  color: #fff;\r\n}\r\n\r\n.alert-danger {\r\n  background: rgba(227, 9, 60, 1);\r\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(227, 9, 60, 1)), color-stop(44%, rgba(204, 10, 56, 1)), color-stop(100%, rgba(145, 7, 35, 1)));\r\n  background: linear-gradient(to bottom, rgba(227, 9, 60, 1) 0%, rgba(204, 10, 56, 1) 44%, rgba(145, 7, 35, 1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e3093c', endColorstr='#910723', GradientType=0);\r\n  color: #fff;\r\n}\r\n\r\n.custAlert {\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 9999;\r\n  left: 0;\r\n  right: 0;\r\n  padding: .25rem 1.25rem;\r\n  text-align: center;\r\n  border-radius: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/alert-message/alert-message.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/alert-message/alert-message.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [id]=\"id\" [class]=\"alertType +' custAlert  alert'\">\r\n\r\n  <div *ngFor=\"let item of  msg\">\r\n    {{item}}\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- <div class=\"alert-success  custAlert  alert\">\r\n\r\n    Hellooo\r\n  </div> -->\r\n"

/***/ }),

/***/ "./src/app/component/alert-message/alert-message.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/alert-message/alert-message.component.ts ***!
  \********************************************************************/
/*! exports provided: AlertMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessageComponent", function() { return AlertMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-message.service */ "./src/app/component/alert-message/alert-message.service.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared */ "./src/app/core/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertMessageComponent = /** @class */ (function () {
    function AlertMessageComponent(alertService, idGen) {
        this.alertService = alertService;
        this.idGen = idGen;
        this.msg = [];
        this.id = idGen.generateNormalIDs('alert-msg');
        this.SubToAlertRxSub();
    }
    AlertMessageComponent.prototype.SubToAlertRxSub = function () {
        var _this = this;
        this.alertService.alertRxObs
            .subscribe(function (data) {
            _this.alertType = data.type;
            _this.msg = data.message;
            _core_shared__WEBPACK_IMPORTED_MODULE_3__["ProjectUtils"].html.showMsgForDuration(_this.id, data.timeToLive);
        });
    };
    AlertMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert-message',
            template: __webpack_require__(/*! ./alert-message.component.html */ "./src/app/component/alert-message/alert-message.component.html"),
            styles: [__webpack_require__(/*! ./alert-message.component.css */ "./src/app/component/alert-message/alert-message.component.css")]
        }),
        __metadata("design:paramtypes", [_alert_message_service__WEBPACK_IMPORTED_MODULE_1__["AlertMessageService"],
            _core_services__WEBPACK_IMPORTED_MODULE_2__["IDGeneratorService"]])
    ], AlertMessageComponent);
    return AlertMessageComponent;
}());



/***/ }),

/***/ "./src/app/component/alert-message/alert-message.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/alert-message/alert-message.model.ts ***!
  \****************************************************************/
/*! exports provided: AlertMessageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessageModel", function() { return AlertMessageModel; });
var AlertMessageModel = /** @class */ (function () {
    function AlertMessageModel(msg, duration, type) {
        if (duration === void 0) { duration = 2500; }
        if (type === void 0) { type = 'alert-success'; }
        this.message = msg;
        this.type = type;
        this.timeToLive = duration;
    }
    return AlertMessageModel;
}());



/***/ }),

/***/ "./src/app/component/alert-message/alert-message.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/alert-message/alert-message.service.ts ***!
  \******************************************************************/
/*! exports provided: AlertMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessageService", function() { return AlertMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-message.model */ "./src/app/component/alert-message/alert-message.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AlertMessageComponent } from './alert-message.component';
var AlertMessageService = /** @class */ (function () {
    function AlertMessageService() {
        this.alertRxSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.alertRxObs = this.alertRxSub.asObservable();
    }
    AlertMessageService.prototype.show = function (msg) {
        this.alertMsgModel = new _alert_message_model__WEBPACK_IMPORTED_MODULE_1__["AlertMessageModel"](msg);
        this.alertRxSub.next(this.alertMsgModel);
    };
    AlertMessageService.prototype.showAlertScucess = function (msg, duration) {
        this.alertMsgModel = new _alert_message_model__WEBPACK_IMPORTED_MODULE_1__["AlertMessageModel"](msg, duration);
        this.alertRxSub.next(this.alertMsgModel);
    };
    AlertMessageService.prototype.showAlertDanger = function (msg, duration) {
        this.alertMsgModel = new _alert_message_model__WEBPACK_IMPORTED_MODULE_1__["AlertMessageModel"](msg, duration, 'alert-danger');
        this.alertRxSub.next(this.alertMsgModel);
    };
    AlertMessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertMessageService);
    return AlertMessageService;
}());



/***/ }),

/***/ "./src/app/component/alert-message/index.ts":
/*!**************************************************!*\
  !*** ./src/app/component/alert-message/index.ts ***!
  \**************************************************/
/*! exports provided: AlertMessageService, AlertMessageComponent, AlertMessageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-message.model */ "./src/app/component/alert-message/alert-message.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertMessageModel", function() { return _alert_message_model__WEBPACK_IMPORTED_MODULE_0__["AlertMessageModel"]; });

/* harmony import */ var _alert_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-message.service */ "./src/app/component/alert-message/alert-message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertMessageService", function() { return _alert_message_service__WEBPACK_IMPORTED_MODULE_1__["AlertMessageService"]; });

/* harmony import */ var _alert_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-message.component */ "./src/app/component/alert-message/alert-message.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertMessageComponent", function() { return _alert_message_component__WEBPACK_IMPORTED_MODULE_2__["AlertMessageComponent"]; });






/***/ }),

/***/ "./src/app/component/check-box/check-box.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/check-box/check-box.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/check-box/check-box.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/check-box/check-box.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-control custom-checkbox\">\r\n  <input type=\"checkbox\" class=\"custom-control-input\" [id]=\"id\" [(ngModel)]=\"_value\" (change)=\"onChange($event)\" [disabled]=\"_disabled\">\r\n  <label class=\"custom-control-label\" [for]=\"id\"> {{label}} </label>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/check-box/check-box.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/check-box/check-box.component.ts ***!
  \************************************************************/
/*! exports provided: CheckBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function() { return CheckBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_comp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-comp */ "./src/app/component/core-comp/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
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




// import { EventEmitter } from 'events';
var dropdownHeight = '190px';
var MY_NG_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CheckBoxComponent; }),
    multi: true,
};
var MY_NG_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CheckBoxComponent; }),
    multi: true,
};
var CheckBoxComponent = /** @class */ (function (_super) {
    __extends(CheckBoxComponent, _super);
    function CheckBoxComponent(idGen) {
        var _this = _super.call(this) || this;
        _this.idGen = idGen;
        _this.label = 'Check this custom checkbox';
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.disabled = 0;
        _this.Autoeventfire = true;
        _this.id = _this.idGen.generateNormalIDs('check-box');
        return _this;
    }
    Object.defineProperty(CheckBoxComponent.prototype, "_value", {
        get: function () {
            if (this.value == 0) {
                return false;
            }
            else if (this.value == 1) {
                return true;
            }
            return false;
        },
        set: function (val) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "_disabled", {
        get: function () {
            if (this.disabled == 0) {
                return false;
            }
            else if (this.disabled == 1) {
                return true;
            }
            return false;
        },
        set: function (val) {
        },
        enumerable: true,
        configurable: true
    });
    CheckBoxComponent.prototype.assignValueToDisplay = function (value) {
        if (value === null || value === undefined) {
            this.value = 0;
        }
        else {
            this.value = value;
        }
        if (this.Autoeventfire !== false) {
            this.propagateChange(this.value);
            this.valueChange.emit(this.value);
        }
    };
    CheckBoxComponent.prototype.ngOnInit = function () {
    };
    CheckBoxComponent.prototype.onChange = function (event) {
        this.setValueToBoolean();
        this.propagateChange(this.value);
        this.valueChange.emit(this.value);
    };
    CheckBoxComponent.prototype.setValueToBoolean = function () {
        if (this._value === false) {
            this.value = 1;
        }
        else {
            this.value = 0;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CheckBoxComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CheckBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CheckBoxComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CheckBoxComponent.prototype, "Autoeventfire", void 0);
    CheckBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-box',
            template: __webpack_require__(/*! ./check-box.component.html */ "./src/app/component/check-box/check-box.component.html"),
            styles: [__webpack_require__(/*! ./check-box.component.css */ "./src/app/component/check-box/check-box.component.css")],
            providers: [
                MY_NG_VALUE_ACCESSOR,
                MY_NG_VALIDATORS
            ]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_3__["IDGeneratorService"]])
    ], CheckBoxComponent);
    return CheckBoxComponent;
}(_core_comp__WEBPACK_IMPORTED_MODULE_2__["CustomFormControl"]));



/***/ }),

/***/ "./src/app/component/choose-job-queue/choose-job-queue.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/choose-job-queue/choose-job-queue.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/choose-job-queue/choose-job-queue.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/choose-job-queue/choose-job-queue.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"close crossIcon\" data-dismiss=\"modal\" aria-label=\"Close\"> X\r\n</button>\r\n<div class=\"modal-body\">\r\n  <div class=\"content-box-inner\">\r\n    <div class=\"content-box-inner\">\r\n      <div class=\"row\">\r\n        <div class=\"col-5\">\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleFormControlTextarea1\">Available Job Queue</label>\r\n            <!-- <textarea class=\"form-control cust-modal-line-height\" id=\"exampleFormControlTextarea1\" rows=\"3\">Auto</textarea> -->\r\n            <select size=5 multiple class=\"form-control cust-modal-line-height\">\r\n              <option value=\"volvo\">Volvo</option>\r\n              <option value=\"saab\">Saab</option>\r\n              <option value=\"opel\">Opel</option>\r\n              <option value=\"audi\">Audi</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-2 pt-4\">\r\n          <button type=\"button\" class=\"btn btn-primary cust-modal-popup-btn\">\r\n            >>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary mt-1\">\r\n            All >>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary mt-1\">\r\n            << All </button> <button type=\"button\" class=\"btn btn-primary mt-1 cust-modal-popup-btn\">\r\n              << </button> </div> <div class=\"col-5\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleFormControlTextarea1\">Job Queue to Process</label>\r\n                  <select size=5 multiple class=\"form-control cust-modal-line-height\">\r\n                    <option value=\"volvo\">Volvo</option>\r\n                    <option value=\"saab\">Saab</option>\r\n                    <option value=\"opel\">Opel</option>\r\n                    <option value=\"audi\">Audi</option>\r\n                  </select>\r\n                  <!-- <textarea class=\"form-control cust-modal-line-height\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea> -->\r\n                </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-right my-3\">\r\n          <button type=\"button\" class=\"btn btn-primary\">\r\n            Ok\r\n          </button>&nbsp;\r\n          <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/choose-job-queue/choose-job-queue.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/choose-job-queue/choose-job-queue.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChooseJobQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseJobQueueComponent", function() { return ChooseJobQueueComponent; });
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

var ChooseJobQueueComponent = /** @class */ (function () {
    function ChooseJobQueueComponent() {
    }
    ChooseJobQueueComponent.prototype.ngOnInit = function () {
    };
    ChooseJobQueueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choose-job-queue',
            template: __webpack_require__(/*! ./choose-job-queue.component.html */ "./src/app/component/choose-job-queue/choose-job-queue.component.html"),
            styles: [__webpack_require__(/*! ./choose-job-queue.component.css */ "./src/app/component/choose-job-queue/choose-job-queue.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChooseJobQueueComponent);
    return ChooseJobQueueComponent;
}());



/***/ }),

/***/ "./src/app/component/common-search-cs/animation.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/common-search-cs/animation.ts ***!
  \*********************************************************/
/*! exports provided: popInLimit, showHideAnimate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popInLimit", function() { return popInLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHideAnimate", function() { return showHideAnimate; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var popInLimit = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('popInLimit', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            // animate(500, style({ transform: 'translateX(100%)' }))
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0,
                    transform: 'translateX(-100%)',
                    offset: 0
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    transform: 'translateX(15px)',
                    offset: 0.3,
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    transform: 'translateX(0)',
                    offset: 1.0
                })
            ]))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    transform: 'translateX(0)',
                    offset: 0
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    transform: 'translateX(-15px)',
                    offset: 0.7
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0,
                    transform: 'translateX(100%)',
                    offset: 1.0
                })
            ]))
        ])
    ])
];
var showHideAnimate = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showHide', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                offset: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0.3,
                offset: 0.3,
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0.5,
                offset: 1.0
            })
        ]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0.5,
                offset: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0.3,
                offset: 0.3,
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                offset: 1.0
            })
        ])))
    ])
];


/***/ }),

/***/ "./src/app/component/common-search-cs/common-search-cs.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/common-search-cs/common-search-cs.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .myLimitContainer {\r\n  background: rgba(0, 0, 0, 1);\r\n  background: -moz-linear-gradient(-45deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.78) 44%, rgba(20, 61, 105, 0.58) 85%, rgba(20, 61, 105, 0.5) 100%);\r\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(0, 0, 0, 1)), color-stop(44%, rgba(0, 0, 0, 0.78)), color-stop(85%, rgba(20, 61, 105, 0.58)), color-stop(100%, rgba(20, 61, 105, 0.5)));\r\n  background: -webkit-linear-gradient(-45deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.78) 44%, rgba(20, 61, 105, 0.58) 85%, rgba(20, 61, 105, 0.5) 100%);\r\n  background: -o-linear-gradient(-45deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.78) 44%, rgba(20, 61, 105, 0.58) 85%, rgba(20, 61, 105, 0.5) 100%);\r\n  background: -ms-linear-gradient(-45deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.78) 44%, rgba(20, 61, 105, 0.58) 85%, rgba(20, 61, 105, 0.5) 100%);\r\n  background: linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.78) 44%, rgba(20, 61, 105, 0.58) 85%, rgba(20, 61, 105, 0.5) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#143d69', GradientType=1);\r\n}\r\n\r\n.myLimitContainer {\r\n  opacity: 0.5;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0px;\r\n  z-index: -1;\r\n}\r\n\r\n.myCommonSearhCss {\r\n  position: relative;\r\n  top: 200px;\r\n  left: 35%;\r\n  z-index: 1;\r\n  opacity: 1;\r\n  height: 100px;\r\n  width: 35%;\r\n}\r\n\r\n.myCommonSearhCss {\r\n  border-radius: 10px 10px 10px 10px;\r\n  -moz-border-radius: 10px 10px 10px 10px;\r\n  -webkit-border-radius: 10px 10px 10px 10px;\r\n  border: 0px solid #000000;\r\n  background-color: white;\r\n} */\r\n"

/***/ }),

/***/ "./src/app/component/common-search-cs/common-search-cs.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/common-search-cs/common-search-cs.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"onShow()\"> Show </button>\r\n\r\n<div *ngIf=\"show\" [@showHide] (@showHide.done)=\"onContainerShown()\" class=\"myLimitContainer\">\r\n\r\n\r\n\r\n\r\n  <div [@popInLimit] *ngIf=\"showInput\" class=\"myCommonSearhCss\">\r\n\r\n\r\n    <div class=\"row  \">\r\n\r\n\r\n\r\n      <div class=\"col-3\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Default limit is 1000\" [disabled]=\"!addLimit\" [(ngModel)]=\"limit\" (change)=\"onChange()\">\r\n      </div>\r\n\r\n\r\n      <div class=\"col-3\">\r\n        <div class=\"custom-control custom-checkbox\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" [id]=\"id\" [(ngModel)]=\"addLimit\" (change)=\"onChange()\">\r\n          <label class=\"custom-control-label\" [for]=\"id\">Limit</label>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div> -->\r\n\r\n\r\n<div class=\"d-flex\">\r\n\r\n  <input type=\"text\" class=\"form-control mr-2\" placeholder=\"Default limit is 1000\" [disabled]=\"!addLimit\" [(ngModel)]=\"limit\" (change)=\"onChange()\">\r\n\r\n  <div class=\"custom-control custom-checkbox mt-1\">\r\n    <input type=\"checkbox\" class=\"custom-control-input\" [id]=\"id\" [(ngModel)]=\"addLimit\" (change)=\"onChange()\">\r\n    <label class=\"custom-control-label\" [for]=\"id\">Data Limit</label>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/common-search-cs/common-search-cs.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/common-search-cs/common-search-cs.component.ts ***!
  \**************************************************************************/
/*! exports provided: CommonSearchCsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSearchCsComponent", function() { return CommonSearchCsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ag_component_ag_radio_id_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ag-component/ag-radio/id-generator */ "./src/app/component/ag-component/ag-radio/id-generator.ts");
/* harmony import */ var _common_search_cs_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-search-cs.model */ "./src/app/component/common-search-cs/common-search-cs.model.ts");
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared */ "./src/app/core/shared/index.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation */ "./src/app/component/common-search-cs/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommonSearchCsComponent = /** @class */ (function () {
    function CommonSearchCsComponent() {
        this.addLimit = true;
        this.limit = 1000;
        this.commonModel = new _common_search_cs_model__WEBPACK_IMPORTED_MODULE_2__["CommonSearchCS"]();
        this.idGen = new _ag_component_ag_radio_id_generator__WEBPACK_IMPORTED_MODULE_1__["IdGenerator"]('common-search');
        this.show = false;
        this.showInput = false;
        this.id = this.idGen.genrateID();
    }
    CommonSearchCsComponent.prototype.ngOnInit = function () {
        if (_core_shared__WEBPACK_IMPORTED_MODULE_3__["ProjectUtils"].isEmpty(this.searchModel)) {
            throw new Error('Search Model is required');
        }
        else {
            this.addingLimit();
        }
    };
    CommonSearchCsComponent.prototype.onChange = function () {
        this.addingLimit();
        // console.log(this.commonModel, this.searchModel);
    };
    CommonSearchCsComponent.prototype.addingLimit = function () {
        if (this.limit === '' || isNaN(this.limit)) {
            this.limit = 1000;
        }
        if (this.addLimit) {
            this.commonModel.limit.value = this.limit;
        }
        else {
            this.commonModel.limit.value = '';
        }
        Object.assign(this.searchModel, this.commonModel);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommonSearchCsComponent.prototype, "searchModel", void 0);
    CommonSearchCsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common-search-cs',
            template: __webpack_require__(/*! ./common-search-cs.component.html */ "./src/app/component/common-search-cs/common-search-cs.component.html"),
            styles: [__webpack_require__(/*! ./common-search-cs.component.css */ "./src/app/component/common-search-cs/common-search-cs.component.css")],
            animations: [_animation__WEBPACK_IMPORTED_MODULE_4__["popInLimit"], _animation__WEBPACK_IMPORTED_MODULE_4__["showHideAnimate"]]
        }),
        __metadata("design:paramtypes", [])
    ], CommonSearchCsComponent);
    return CommonSearchCsComponent;
}());



/***/ }),

/***/ "./src/app/component/common-search-cs/common-search-cs.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/common-search-cs/common-search-cs.model.ts ***!
  \**********************************************************************/
/*! exports provided: CommonSearchCS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSearchCS", function() { return CommonSearchCS; });
/* harmony import */ var _core_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/base */ "./src/app/core/base/index.ts");

var CommonSearchCS = /** @class */ (function () {
    function CommonSearchCS() {
        this.limit = new _core_base__WEBPACK_IMPORTED_MODULE_0__["BasicSearchKey"]('limit', '', 1000);
    }
    return CommonSearchCS;
}());



/***/ }),

/***/ "./src/app/component/component-service.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/component/component-service.module.ts ***!
  \*******************************************************/
/*! exports provided: ComponentServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentServiceModule", function() { return ComponentServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.service */ "./src/app/component/loader/loader.service.ts");
/* harmony import */ var _custom_modal_pop_up_custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-modal-pop-up/custom-modal-pop-up.service */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.service.ts");
/* harmony import */ var _dropdown_with_description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-with-description */ "./src/app/component/dropdown-with-description/index.ts");
/* harmony import */ var _alert_message_alert_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert-message/alert-message.service */ "./src/app/component/alert-message/alert-message.service.ts");
/* harmony import */ var _global_dropdown_global_dropdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-dropdown/global-dropdown.service */ "./src/app/component/global-dropdown/global-dropdown.service.ts");
/* harmony import */ var _global_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-popup */ "./src/app/component/global-popup/index.ts");
/* harmony import */ var _select_select_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select/select.service */ "./src/app/component/select/select.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentServiceModule = /** @class */ (function () {
    function ComponentServiceModule() {
    }
    ComponentServiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"],
                _custom_modal_pop_up_custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__["CustomModalPopUpService"],
                _dropdown_with_description__WEBPACK_IMPORTED_MODULE_3__["DropdownWithDescriptionService"],
                _alert_message_alert_message_service__WEBPACK_IMPORTED_MODULE_4__["AlertMessageService"],
                _global_dropdown_global_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["GlobalDropDownService"],
                _global_popup__WEBPACK_IMPORTED_MODULE_6__["GlobalPopupService"],
                _select_select_service__WEBPACK_IMPORTED_MODULE_7__["SelectService"]
            ]
        })
    ], ComponentServiceModule);
    return ComponentServiceModule;
}());



/***/ }),

/***/ "./src/app/component/component.module.ts":
/*!***********************************************!*\
  !*** ./src/app/component/component.module.ts ***!
  \***********************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_sharedModules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sharedModules */ "./src/app/core/sharedModules/index.ts");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-angular/main */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ag-grid/ag-grid.component */ "./src/app/component/ag-grid/ag-grid.component.ts");
/* harmony import */ var _top_menu_bar_top_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-menu-bar/top-menu-bar.component */ "./src/app/component/top-menu-bar/top-menu-bar.component.ts");
/* harmony import */ var _ng_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-tabs */ "./src/app/component/ng-tabs/index.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/component/loader/loader.component.ts");
/* harmony import */ var _custom_modal_pop_up_custom_modal_pop_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-modal-pop-up/custom-modal-pop-up.component */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.component.ts");
/* harmony import */ var _choose_job_queue_choose_job_queue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./choose-job-queue/choose-job-queue.component */ "./src/app/component/choose-job-queue/choose-job-queue.component.ts");
/* harmony import */ var _delete_pop_delete_pop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete-pop/delete-pop.component */ "./src/app/component/delete-pop/delete-pop.component.ts");
/* harmony import */ var _dropdown_with_description_dropdown_with_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dropdown-with-description/dropdown-with-description.component */ "./src/app/component/dropdown-with-description/dropdown-with-description.component.ts");
/* harmony import */ var _global_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global-dropdown */ "./src/app/component/global-dropdown/index.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/component/pagination/pagination.component.ts");
/* harmony import */ var _alert_message_alert_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alert-message/alert-message.component */ "./src/app/component/alert-message/alert-message.component.ts");
/* harmony import */ var _global_popup_global_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./global-popup/global-popup.component */ "./src/app/component/global-popup/global-popup.component.ts");
/* harmony import */ var _check_box_check_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./check-box/check-box.component */ "./src/app/component/check-box/check-box.component.ts");
/* harmony import */ var _core_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/directive */ "./src/app/core/directive/index.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/component/modal/modal.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./select/select.component */ "./src/app/component/select/select.component.ts");
/* harmony import */ var _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dropdown/dropdown.module */ "./src/app/component/dropdown/dropdown.module.ts");
/* harmony import */ var _common_search_cs_common_search_cs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common-search-cs/common-search-cs.component */ "./src/app/component/common-search-cs/common-search-cs.component.ts");
/* harmony import */ var _setup_top_menu_bar_setup_top_menu_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./setup-top-menu-bar/setup-top-menu-bar.component */ "./src/app/component/setup-top-menu-bar/setup-top-menu-bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _core_sharedModules__WEBPACK_IMPORTED_MODULE_1__["RootSharedModule"],
                ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_2__["AgGridModule"],
                _core_directive__WEBPACK_IMPORTED_MODULE_16__["DirectiveModule"],
                _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_19__["MultiselectDropdownModule"]
            ],
            declarations: [
                _custom_modal_pop_up_custom_modal_pop_up_component__WEBPACK_IMPORTED_MODULE_7__["CustomModalPopUpComponent"],
                _top_menu_bar_top_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__["TopMenuBarComponent"],
                _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_3__["AgGridComponent"],
                _ng_tabs__WEBPACK_IMPORTED_MODULE_5__["TabComponent"],
                _ng_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"],
                _ng_tabs__WEBPACK_IMPORTED_MODULE_5__["DynamicTabsDirective"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"],
                _choose_job_queue_choose_job_queue_component__WEBPACK_IMPORTED_MODULE_8__["ChooseJobQueueComponent"],
                _delete_pop_delete_pop_component__WEBPACK_IMPORTED_MODULE_9__["DeletePopComponent"],
                _dropdown_with_description_dropdown_with_description_component__WEBPACK_IMPORTED_MODULE_10__["DropdownWithDescriptionComponent"],
                _global_dropdown__WEBPACK_IMPORTED_MODULE_11__["GlobalDropdownComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"],
                _alert_message_alert_message_component__WEBPACK_IMPORTED_MODULE_13__["AlertMessageComponent"],
                _global_popup_global_popup_component__WEBPACK_IMPORTED_MODULE_14__["GlobalPopupComponent"],
                _check_box_check_box_component__WEBPACK_IMPORTED_MODULE_15__["CheckBoxComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_18__["SelectComponent"],
                _common_search_cs_common_search_cs_component__WEBPACK_IMPORTED_MODULE_20__["CommonSearchCsComponent"],
                _setup_top_menu_bar_setup_top_menu_bar_component__WEBPACK_IMPORTED_MODULE_21__["SetupTopMenuBarComponent"]
            ],
            exports: [
                _custom_modal_pop_up_custom_modal_pop_up_component__WEBPACK_IMPORTED_MODULE_7__["CustomModalPopUpComponent"],
                _ng_tabs__WEBPACK_IMPORTED_MODULE_5__["TabComponent"],
                _ng_tabs__WEBPACK_IMPORTED_MODULE_5__["DynamicTabsDirective"],
                _ng_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"],
                _top_menu_bar_top_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__["TopMenuBarComponent"],
                _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_3__["AgGridComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"],
                _choose_job_queue_choose_job_queue_component__WEBPACK_IMPORTED_MODULE_8__["ChooseJobQueueComponent"],
                _delete_pop_delete_pop_component__WEBPACK_IMPORTED_MODULE_9__["DeletePopComponent"],
                _dropdown_with_description_dropdown_with_description_component__WEBPACK_IMPORTED_MODULE_10__["DropdownWithDescriptionComponent"],
                _global_dropdown__WEBPACK_IMPORTED_MODULE_11__["GlobalDropdownComponent"],
                _alert_message_alert_message_component__WEBPACK_IMPORTED_MODULE_13__["AlertMessageComponent"],
                _global_popup_global_popup_component__WEBPACK_IMPORTED_MODULE_14__["GlobalPopupComponent"],
                _check_box_check_box_component__WEBPACK_IMPORTED_MODULE_15__["CheckBoxComponent"],
                _core_directive__WEBPACK_IMPORTED_MODULE_16__["DirectiveModule"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_18__["SelectComponent"],
                _common_search_cs_common_search_cs_component__WEBPACK_IMPORTED_MODULE_20__["CommonSearchCsComponent"],
                _setup_top_menu_bar_setup_top_menu_bar_component__WEBPACK_IMPORTED_MODULE_21__["SetupTopMenuBarComponent"]
            ],
            entryComponents: [
                _ng_tabs__WEBPACK_IMPORTED_MODULE_5__["TabComponent"]
            ]
        })
    ], ComponentModule);
    return ComponentModule;
}());



/***/ }),

/***/ "./src/app/component/core-comp/CustomFormControl.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/core-comp/CustomFormControl.ts ***!
  \**********************************************************/
/*! exports provided: CustomFormControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormControl", function() { return CustomFormControl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared */ "./src/app/core/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomFormControl = /** @class */ (function () {
    function CustomFormControl() {
        this.onTouched = function () { };
        this.propagateChange = function (_) {
        };
    }
    CustomFormControl.prototype.debuggerWithName = function () {
        if (this.myName === 'test111') {
        }
    };
    CustomFormControl.prototype.writeValue = function (obj) {
        // console.log('writeValue----', obj);
        if (this.assignValueToDisplay(obj) === undefined) {
            this.value = obj;
        }
        this.debuggerWithName();
    };
    CustomFormControl.prototype.assignValueToDisplay = function (obj) {
        return undefined;
    };
    CustomFormControl.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CustomFormControl.prototype.validate = function (c) {
        var retVal;
        this.debuggerWithName();
        var empty = _core_shared__WEBPACK_IMPORTED_MODULE_1__["Utils"].isEmpty(c.value);
        if (empty && this.isrequired && !this.isDisabled) {
            if (typeof retVal !== 'object') {
                retVal = {};
            }
            retVal['empty'] = {
                valid: !empty
            };
        }
        var min = null;
        if (this.minmumLength) {
            min = c.value.length >= this.minmumLength;
            if (min && this.isrequired && !this.isDisabled) {
                this.singleErrorChecking(retVal, 'min', min);
            }
        }
        return retVal;
    };
    CustomFormControl.prototype.singleErrorChecking = function (obj, error, status) {
        if (typeof obj !== 'object') {
            obj = {};
        }
        obj[error] = {
            valid: status
        };
        return obj;
    };
    CustomFormControl.prototype.registerOnTouched = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CustomFormControl.prototype, "isrequired", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CustomFormControl.prototype, "isDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomFormControl.prototype, "myName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomFormControl.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CustomFormControl.prototype, "minmumLength", void 0);
    return CustomFormControl;
}());



/***/ }),

/***/ "./src/app/component/core-comp/index.ts":
/*!**********************************************!*\
  !*** ./src/app/component/core-comp/index.ts ***!
  \**********************************************/
/*! exports provided: ShowHide, CustomFormControl, ModalPopUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_hide_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-hide.class */ "./src/app/component/core-comp/show-hide.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowHide", function() { return _show_hide_class__WEBPACK_IMPORTED_MODULE_0__["ShowHide"]; });

/* harmony import */ var _CustomFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFormControl */ "./src/app/component/core-comp/CustomFormControl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControl", function() { return _CustomFormControl__WEBPACK_IMPORTED_MODULE_1__["CustomFormControl"]; });

/* harmony import */ var _modal_pupup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-pupup */ "./src/app/component/core-comp/modal-pupup.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalPopUp", function() { return _modal_pupup__WEBPACK_IMPORTED_MODULE_2__["ModalPopUp"]; });






/***/ }),

/***/ "./src/app/component/core-comp/modal-pupup.ts":
/*!****************************************************!*\
  !*** ./src/app/component/core-comp/modal-pupup.ts ***!
  \****************************************************/
/*! exports provided: ModalPopUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPopUp", function() { return ModalPopUp; });
var ModalPopUp = /** @class */ (function () {
    function ModalPopUp() {
    }
    ModalPopUp.prototype.show = function (id) {
        $("#" + id).modal('show');
    };
    ModalPopUp.prototype.hide = function (id) {
        $("#" + id).modal('hide');
    };
    return ModalPopUp;
}());



/***/ }),

/***/ "./src/app/component/core-comp/show-hide.class.ts":
/*!********************************************************!*\
  !*** ./src/app/component/core-comp/show-hide.class.ts ***!
  \********************************************************/
/*! exports provided: ShowHide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHide", function() { return ShowHide; });
/* harmony import */ var _CustomFormControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomFormControl */ "./src/app/component/core-comp/CustomFormControl.ts");
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

var ShowHide = /** @class */ (function (_super) {
    __extends(ShowHide, _super);
    function ShowHide() {
        return _super.call(this) || this;
    }
    return ShowHide;
}(_CustomFormControl__WEBPACK_IMPORTED_MODULE_0__["CustomFormControl"]));



/***/ }),

/***/ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/component/custom-modal-pop-up/custom-modal-pop-up.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/component/custom-modal-pop-up/custom-modal-pop-up.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" [id]=\"basicSetting.id\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" style=\"overflow-y:auto;\">\r\n  <div class=\"modal-dialog\" [class.modal-lg]=\"basicSetting.large\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{basicSetting?.title}}</h5>\r\n        <button *ngIf=\"basicSetting.upperCross\" type=\"button\" class=\"close crossIcon\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ng-container *ngTemplateOutlet=\"template\">\r\n        </ng-container>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <ng-template #tempTemplate>\r\n  abc\r\n</ng-template> -->\r\n"

/***/ }),

/***/ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/custom-modal-pop-up/custom-modal-pop-up.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomModalPopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModalPopUpComponent", function() { return CustomModalPopUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_modal_pop_up_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-modal-pop-up.model */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.model.ts");
/* harmony import */ var _custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-modal-pop-up.service */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.service.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomModalPopUpComponent = /** @class */ (function () {
    function CustomModalPopUpComponent(cmpus, cdr, idGen) {
        this.cmpus = cmpus;
        this.cdr = cdr;
        this.idGen = idGen;
        this.modalAfterViewInIt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(CustomModalPopUpComponent.prototype, "show", {
        get: function () {
            return this.isShowing;
        },
        set: function (val) {
            this.cmpus.showHideMe(val, this.basicSetting.id, this.basicSetting.isrestricted);
            this.isShowing = val;
        },
        enumerable: true,
        configurable: true
    });
    CustomModalPopUpComponent.prototype.ngOnChanges = function (changes) {
        // console.log('ngOnChanges', this.template, changes)
        // console.log('AlertTypeAlertType', this.AlertType);
        this.cdr.detectChanges();
    };
    CustomModalPopUpComponent.prototype.ngOnInit = function () {
        this.errorChecking();
        this.basicSetting.id = this.idGen.generateNormalIDs('ModalPupUp');
        this.cmpus._register(this.basicSetting);
    };
    CustomModalPopUpComponent.prototype.ngAfterViewInit = function () {
        this.cmpus.showHideMe(this.isShowing, this.basicSetting.id, this.basicSetting.isrestricted);
        this.modalAfterViewInIt.emit();
    };
    CustomModalPopUpComponent.prototype.ngOnDestroy = function () {
        this.cmpus._unregister(this.basicSetting);
        var modal_backdrop = document.getElementsByClassName('modal-backdrop')[0];
        if (modal_backdrop) {
            modal_backdrop.remove();
        }
    };
    CustomModalPopUpComponent.prototype.errorChecking = function () {
        if (!this.basicSetting.title) {
            throw new Error('Pop up should have title');
        }
        this.basicSetting.button1 = this.basicSetting.button1 || 'Close';
        this.basicSetting.button2 = this.basicSetting.button2 || 'Ok';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _custom_modal_pop_up_model__WEBPACK_IMPORTED_MODULE_1__["CustomModalPopUpModel"])
    ], CustomModalPopUpComponent.prototype, "basicSetting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomModalPopUpComponent.prototype, "AlertType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CustomModalPopUpComponent.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomModalPopUpComponent.prototype, "modalAfterViewInIt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CustomModalPopUpComponent.prototype, "show", null);
    CustomModalPopUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-modal-pop-up',
            template: __webpack_require__(/*! ./custom-modal-pop-up.component.html */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.component.html"),
            styles: [__webpack_require__(/*! ./custom-modal-pop-up.component.css */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__["CustomModalPopUpService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["IDGeneratorService"]])
    ], CustomModalPopUpComponent);
    return CustomModalPopUpComponent;
}());



/***/ }),

/***/ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.model.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/custom-modal-pop-up/custom-modal-pop-up.model.ts ***!
  \****************************************************************************/
/*! exports provided: CustomModalPopUpModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModalPopUpModel", function() { return CustomModalPopUpModel; });
var CustomModalPopUpModel = /** @class */ (function () {
    function CustomModalPopUpModel(title, noBUttons, upperCross, large, isrestricted) {
        if (noBUttons === void 0) { noBUttons = true; }
        if (upperCross === void 0) { upperCross = true; }
        if (large === void 0) { large = true; }
        if (isrestricted === void 0) { isrestricted = false; }
        this.noButtons = false;
        this.large = true;
        this.upperCross = true;
        this.isrestricted = false;
        this.title = title;
        this.noButtons = noBUttons;
        this.upperCross = upperCross;
        this.large = large;
        this.isrestricted = isrestricted;
    }
    return CustomModalPopUpModel;
}());



/***/ }),

/***/ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/custom-modal-pop-up/custom-modal-pop-up.service.ts ***!
  \******************************************************************************/
/*! exports provided: CustomModalPopUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModalPopUpService", function() { return CustomModalPopUpService; });
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

var CustomModalPopUpService = /** @class */ (function () {
    function CustomModalPopUpService() {
        this.customPopUps = new Set();
    }
    CustomModalPopUpService.prototype._register = function (info) {
        this.customPopUps.add(info);
        console.log('CustomModalPopUpModel _register', this.customPopUps);
    };
    CustomModalPopUpService.prototype._unregister = function (info) {
        var _this = this;
        this.customPopUps.forEach(function (item) {
            if (item === info) {
                _this.customPopUps.delete(item);
            }
        });
        console.log('CustomModalPopUpModel _unregister', this.customPopUps);
    };
    CustomModalPopUpService.prototype.showHideMe = function (val, id, isrestricted) {
        if (isrestricted) {
            $("#" + id).modal({
                show: false,
                backdrop: 'static'
            });
        }
        if (val) {
            $("#" + id).modal('show');
        }
        else {
            $("#" + id).modal('hide');
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('newmodal-open');
        }
    };
    CustomModalPopUpService.prototype.show = function (info) {
        $("#" + info.id).modal('show');
    };
    CustomModalPopUpService.prototype.hide = function (info) {
        $("#" + info.id).modal('hide');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('newmodal-open');
    };
    CustomModalPopUpService.prototype.onshow = function (info) {
        console.log('event registed', info.id);
        $("#" + info.id).on('hidden.bs.modal', function (e) {
            // alert('hi');
            console.log('event fire');
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('newmodal-open');
            // e.preventDefault();
        });
    };
    CustomModalPopUpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CustomModalPopUpService);
    return CustomModalPopUpService;
}());



/***/ }),

/***/ "./src/app/component/custom-modal-pop-up/index.ts":
/*!********************************************************!*\
  !*** ./src/app/component/custom-modal-pop-up/index.ts ***!
  \********************************************************/
/*! exports provided: CustomModalPopUpComponent, CustomModalPopUpModel, CustomModalPopUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_modal_pop_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-modal-pop-up.component */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomModalPopUpComponent", function() { return _custom_modal_pop_up_component__WEBPACK_IMPORTED_MODULE_0__["CustomModalPopUpComponent"]; });

/* harmony import */ var _custom_modal_pop_up_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-modal-pop-up.model */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomModalPopUpModel", function() { return _custom_modal_pop_up_model__WEBPACK_IMPORTED_MODULE_1__["CustomModalPopUpModel"]; });

/* harmony import */ var _custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-modal-pop-up.service */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomModalPopUpService", function() { return _custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__["CustomModalPopUpService"]; });






/***/ }),

/***/ "./src/app/component/delete-pop/delete-pop.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/delete-pop/delete-pop.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/delete-pop/delete-pop.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/delete-pop/delete-pop.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-custom-modal-pop-up [AlertType]=\"AlertType\" [basicSetting]=\"deletePopUpbasicSetting\" [template]=\"DeleteTemplate\"></app-custom-modal-pop-up>\r\n\r\n<ng-template #DeleteTemplate>\r\n\r\n  <div class=\"content-box-inner\">\r\n    <div class=\"form-row\">\r\n      <p>Do you want to Delete '\r\n        <b>{{massage}}'</b> ?</p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-right my-3\">\r\n        <a (click)=\"deleteClick()\" class=\"btn btn-primary\">\r\n          Ok\r\n        </a>\r\n        <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">\r\n          Cancel\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/component/delete-pop/delete-pop.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/delete-pop/delete-pop.component.ts ***!
  \**************************************************************/
/*! exports provided: DeletePopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePopComponent", function() { return DeletePopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_modal_pop_up_custom_modal_pop_up_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom-modal-pop-up/custom-modal-pop-up.model */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.model.ts");
/* harmony import */ var _custom_modal_pop_up_custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-modal-pop-up/custom-modal-pop-up.service */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeletePopComponent = /** @class */ (function () {
    function DeletePopComponent(customModalPopUpService) {
        this.customModalPopUpService = customModalPopUpService;
    }
    DeletePopComponent.prototype.ngOnInit = function () {
        this.createReseDataPopoup();
    };
    DeletePopComponent.prototype.openDeletePopUp = function (text) {
        this.massage = text;
        this.customModalPopUpService.show(this.deletePopUpbasicSetting);
    };
    DeletePopComponent.prototype.deleteClick = function () {
        this.customModalPopUpService.hide(this.deletePopUpbasicSetting);
    };
    DeletePopComponent.prototype.createReseDataPopoup = function () {
        this.deletePopUpbasicSetting = new _custom_modal_pop_up_custom_modal_pop_up_model__WEBPACK_IMPORTED_MODULE_1__["CustomModalPopUpModel"]();
        this.deletePopUpbasicSetting.id = 'DeleteDiloag';
        this.deletePopUpbasicSetting.title = 'Delete';
        this.deletePopUpbasicSetting.noButtons = true;
        this.deletePopUpbasicSetting.upperCross = true;
    };
    DeletePopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-pop',
            template: __webpack_require__(/*! ./delete-pop.component.html */ "./src/app/component/delete-pop/delete-pop.component.html"),
            styles: [__webpack_require__(/*! ./delete-pop.component.css */ "./src/app/component/delete-pop/delete-pop.component.css")]
        }),
        __metadata("design:paramtypes", [_custom_modal_pop_up_custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__["CustomModalPopUpService"]])
    ], DeletePopComponent);
    return DeletePopComponent;
}());



/***/ }),

/***/ "./src/app/component/dropdown-with-description/dropdown-with-description.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/component/dropdown-with-description/dropdown-with-description.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .slimScrollDiv {\r\n   background: #fdfdfd;\r\n   padding: 10px;\r\n   border: 1px solid #f1f1f1;\r\n   borx-shadow: unset;\r\n   box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\r\n }\r\n\r\n .dropdowndisplay {\r\n   display: flex;\r\n }\r\n\r\n .dropdownCaret {\r\n   position: absolute;\r\n   top: 10px;\r\n   right: 10px;\r\n }\r\n\r\n .dropDownSlim table tr td {\r\n   padding: 3px 0.75rem\r\n }\r\n\r\n .shortIt {\r\n\r\n   height: 0px;\r\n }\r\n\r\n tr {\r\n   height: 28px;\r\n }\r\n\r\n .dropdowndiscCls {\r\n   /* position: absolute; */\r\n   z-index: 9999;\r\n   /* width: 100%;\r\n   left: 0;\r\n   right: 0; */\r\n }\r\n\r\n /* .custom-dd {\r\n   max-width: 300px;\r\n   overflow-x: auto;\r\n   max-height: 200px;\r\n } */\r\n"

/***/ }),

/***/ "./src/app/component/dropdown-with-description/dropdown-with-description.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/component/dropdown-with-description/dropdown-with-description.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: relative;\">\r\n  <div class=\"dropdowndisplay\">\r\n    <div style=\"position:relative\" [class.width50Perc]=\"dropdownWithDescriptionModel.descriptionKey\"\r\n      [class.width100Perc]=\"!dropdownWithDescriptionModel.descriptionKey\">\r\n      <input type=\"text\" class=\"form-control form-control-sm\" [placeholder]=\"placeholder\" #myInput\r\n        [value]=\"selectedValue[dropdownWithDescriptionModel.displayKey] || ''\" (mouseleave)=\"onMouseLeave()\"\r\n        [disabled]=\"is_editAble\" (focus)=\"onFocus()\" (keyup)=\"onKeyUp(myInput)\">\r\n      <i class=\"fa fa-caret-down dropdownCaret\" (click)=\"togggleDropDown()\"></i>\r\n    </div>&nbsp;&nbsp;\r\n    <div *ngIf=\"dropdownWithDescriptionModel.descriptionKey\" class=\"width50Perc\">\r\n      <input readonly class=\"form-control form-control-sm\"\r\n        [value]=\"selectedValue[dropdownWithDescriptionModel.descriptionKey] || ''\"\r\n        title=\"{{selectedValue[dropdownWithDescriptionModel.descriptionKey] || ''}}\">\r\n    </div>\r\n  </div>\r\n\r\n  <div #dropdown class=\"dropdowndiscCls \" [style.height]=\"show ? dropdownHeight : 0\">\r\n    <div *ngIf=\"show\" class=\" dropdownDiv \">\r\n      <div [style.width]=\"listWidth + 'px'\" class=\"row   dropDownSlim\" (mouseenter)=\"onMouseEnter()\"\r\n        (mouseleave)=\"onMouseLeave()\">\r\n        <!-- <div class=\"custom-dd\"> -->\r\n        <!-- <div class=\"table-responsive\"> -->\r\n        <table class=\"table table-bordered table-hover table-light\">\r\n          <thead *ngIf=\"header\">\r\n            <tr>\r\n              <ng-container *ngFor=\"let listDisplayKeys of  basicSetting.ListDisplayKeys\">\r\n                <th>{{listDisplayKeys.headerName}}</th>\r\n              </ng-container>\r\n            </tr>\r\n          </thead>\r\n\r\n          <ng-container *ngFor=\"let list of listData\">\r\n\r\n            <tr class=\"table-primary\" *ngIf=\"list.issueDate == selValue ; else elseTR\">\r\n              <ng-container *ngFor=\"let listDisplayKeys of dropdownWithDescriptionModel.ListDisplayKeys\">\r\n                <td (click)=\"onShownBodyClick(list)\">\r\n                  {{list[listDisplayKeys.displayKey]}}\r\n                </td>\r\n\r\n              </ng-container>\r\n            </tr>\r\n            <ng-template #elseTR>\r\n              <tr>\r\n                <ng-container *ngFor=\"let listDisplayKeys of dropdownWithDescriptionModel.ListDisplayKeys\">\r\n                  <td (click)=\"onShownBodyClick(list)\">\r\n                    {{list[listDisplayKeys.displayKey]}}\r\n                  </td>\r\n                </ng-container>\r\n              </tr>\r\n            </ng-template>\r\n\r\n          </ng-container>\r\n\r\n        </table>\r\n        <!-- </div> -->\r\n        <!-- </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- {{dropdownWithDescriptionModel | json}}\r\n\r\n<select class=\"form-control\">\r\n  <option *ngFor=\"let list of listData\">\r\n    {{list[dropdownWithDescriptionModel.ListDisplayKeys[0]]}}\r\n  </option>\r\n</select> -->\r\n"

/***/ }),

/***/ "./src/app/component/dropdown-with-description/dropdown-with-description.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/component/dropdown-with-description/dropdown-with-description.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DropdownWithDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownWithDescriptionComponent", function() { return DropdownWithDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_with_description_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-with-description.model */ "./src/app/component/dropdown-with-description/dropdown-with-description.model.ts");
/* harmony import */ var _dropdown_with_description_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-with-description.service */ "./src/app/component/dropdown-with-description/dropdown-with-description.service.ts");
/* harmony import */ var _core_comp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core-comp */ "./src/app/component/core-comp/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shared */ "./src/app/core/shared/index.ts");
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







var dropdownHeight = '190px';
var MY_NG_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DropdownWithDescriptionComponent; }),
    multi: true,
};
var MY_NG_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DropdownWithDescriptionComponent; }),
    multi: true,
};
var DropdownWithDescriptionComponent = /** @class */ (function (_super) {
    __extends(DropdownWithDescriptionComponent, _super);
    function DropdownWithDescriptionComponent(ddSrv, element) {
        var _this = _super.call(this) || this;
        _this.ddSrv = ddSrv;
        _this.element = element;
        _this.arrivedValue = null;
        _this.data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.placeholder = 'Select a Value';
        _this.header = false;
        _this.dropdownHeight = '0px';
        _this.show = false;
        _this.listData = [];
        _this.orgData = [];
        _this.selectedValue = {};
        _this.preValueCheckObj = {};
        _this.myBlurFunc = function () {
            _this.show = false;
            var value = _this.selectedValue[_this.dropdownWithDescriptionModel.displayKey];
            if (_this.ele['value'] === '') {
                _this.emptySelectedValue();
            }
            else {
                _this.ele['value'] = value ? value : '';
            }
        };
        _this.basicSetting = new _dropdown_with_description_model__WEBPACK_IMPORTED_MODULE_1__["DropdownWithDescriptionModel"]();
        return _this;
    }
    DropdownWithDescriptionComponent.prototype.ngOnChanges = function () {
        console.log('ngOnChangesngOnChangesngOnChanges');
        if (this.Data) {
            this.convertToArray(this.Data);
        }
    };
    DropdownWithDescriptionComponent.prototype.ngOnInit = function () {
        this.initSearchModel();
        this.ddSrv.errorChecking(this.basicSetting, this.name);
        this.loadData();
        this.sub_ApiTrigger();
    };
    DropdownWithDescriptionComponent.prototype.initSearchModel = function () {
        this.dropdownWithDescriptionModel = this.basicSetting;
    };
    DropdownWithDescriptionComponent.prototype.assignValueToDisplay = function (obj) {
        var _this = this;
        this.arrivedValue = obj;
        if (this.basicSetting.valueTypeOrKey === 'complete') {
            if (obj) {
                this.selectedValue = obj;
            }
        }
        else {
            if (obj) {
                var value = this.listData.find(function (item) {
                    _this.selValue = item[_this.basicSetting.valueTypeOrKey];
                    return item[_this.basicSetting.valueTypeOrKey] === obj;
                });
                if (value) {
                    this.selectedValue = value;
                }
            }
        }
    };
    DropdownWithDescriptionComponent.prototype.loadData = function () {
        var _this = this;
        if ((this.basicSetting.serviceUrl !== undefined) && (this.triggrApi === undefined)) {
            this.loadDataFromApi();
        }
        else {
            this.data.subscribe(function (data) {
                _this.convertToArray(data);
            });
        }
    };
    DropdownWithDescriptionComponent.prototype.loadDataFromApi = function () {
        var _this = this;
        this.ddSrv
            .getData(this.basicSetting.serviceUrl, this.basicSetting.params)
            .subscribe(function (data) {
            data.data = data[_this.basicSetting.apiKey];
            if (Array.isArray(data) === false) {
                _this.convertToArray(data);
            }
            else {
                _this.selectedValue = data[0];
                _this.assignListData(data);
            }
        });
    };
    DropdownWithDescriptionComponent.prototype.emptySelectedValue = function () {
        this.selectedValue = {};
        this.progateValue(this.selectedValue);
    };
    DropdownWithDescriptionComponent.prototype.convertToArray = function (obj) {
        var temp = [];
        if (!Array.isArray(obj.data)) {
            Object.keys(obj.data)
                .forEach(function (key) {
                temp.push({
                    key: key,
                    value: obj.data[key]
                });
            });
        }
        else {
            temp = obj.data ? obj.data : obj;
        }
        if (this.basicSetting.serviceUrl) {
            this.selectedValue = temp[0];
        }
        this.assignListData(temp);
    };
    DropdownWithDescriptionComponent.prototype.assignListData = function (data) {
        if (data) {
            this.dropdownHeight = this.ddSrv.generateDropdownHeight(data.length);
            this.listData = data;
            this.orgData = Array.from(data);
            this.assignValueToDisplay(this.arrivedValue);
            // if (this.listData.length === 1) {
            //   this.selectedValue = this.listData[0];
            // }
            this.progateValue(this.selectedValue);
        }
    };
    DropdownWithDescriptionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ele = this.myInput.nativeElement;
        setTimeout(function () {
            _this.listWidth = (_this.ele.clientWidth * 10) / 6;
        }, 200);
    };
    DropdownWithDescriptionComponent.prototype.onMouseLeave = function () {
        this.ele.onblur = this.myBlurFunc;
    };
    DropdownWithDescriptionComponent.prototype.onMouseEnter = function () {
        this.ele.onblur = null;
    };
    DropdownWithDescriptionComponent.prototype.togggleDropDown = function () {
        if (!this.is_editAble) {
            if (this.show) {
                this.show = false;
            }
            else {
                this.ele.focus();
                //   this.onFocus();
                // this.show = true;
                // this.slimScrollSetting();
            }
        }
    };
    DropdownWithDescriptionComponent.prototype.onFocus = function () {
        this.setPositionOfElementToEle(this.myInput.nativeElement, this.dropdownEle.nativeElement, 350);
        this.show = true;
        this.slimScrollSetting();
    };
    DropdownWithDescriptionComponent.prototype.setPositionOfElementToEle = function (targetEle, outputEle, DEFAULT_Height) {
        this.ddSrv.setPositionOfElementToEle(targetEle, outputEle, DEFAULT_Height, dropdownHeight);
    };
    DropdownWithDescriptionComponent.prototype.onKeyUp = function (val) {
        this.listData = this.ddSrv.filterDropdown(val.value, this.orgData, this.dropdownWithDescriptionModel);
    };
    DropdownWithDescriptionComponent.prototype.onShownBodyClick = function (val) {
        console.log(val);
        this.show = false;
        this.selectedValue = val;
        this.selValue = val.issueDate;
        this.progateValue(val);
    };
    DropdownWithDescriptionComponent.prototype.progateValue = function (val) {
        this.passOnlyNewValue(val);
    };
    DropdownWithDescriptionComponent.prototype.passOnlyNewValue = function (val) {
        var _this = this;
        _core_shared__WEBPACK_IMPORTED_MODULE_6__["Utils"].checkForNewValue(typeof val === 'object' ? JSON.stringify(val) : val, this.preValueCheckObj)
            .then(function (value) {
            if (_this.basicSetting.valueTypeOrKey === 'complete') {
                _this.propagateChange(val);
                _this.arrivedValue = val;
                _this.change.emit(val);
            }
            else {
                if (val[_this.basicSetting.valueTypeOrKey]) {
                    _this.arrivedValue = val[_this.basicSetting.valueTypeOrKey];
                    _this.propagateChange(val[_this.basicSetting.valueTypeOrKey]);
                    _this.change.emit(val[_this.basicSetting.valueTypeOrKey]);
                }
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    DropdownWithDescriptionComponent.prototype.sub_ApiTrigger = function () {
        var _this = this;
        if (this.triggrApi instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]) {
            this.triggrApi
                .subscribe(function () {
                _this.loadDataFromApi();
            });
        }
    };
    DropdownWithDescriptionComponent.prototype.slimScrollSetting = function () {
        this.ddSrv.slimScrollSetting(dropdownHeight);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myInput'),
        __metadata("design:type", Object)
    ], DropdownWithDescriptionComponent.prototype, "myInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropdown'),
        __metadata("design:type", Object)
    ], DropdownWithDescriptionComponent.prototype, "dropdownEle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _dropdown_with_description_model__WEBPACK_IMPORTED_MODULE_1__["DropdownWithDescriptionModel"])
    ], DropdownWithDescriptionComponent.prototype, "basicSetting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownWithDescriptionComponent.prototype, "is_editAble", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownWithDescriptionComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DropdownWithDescriptionComponent.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownWithDescriptionComponent.prototype, "Data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownWithDescriptionComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DropdownWithDescriptionComponent.prototype, "header", void 0);
    DropdownWithDescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown-with-description',
            template: __webpack_require__(/*! ./dropdown-with-description.component.html */ "./src/app/component/dropdown-with-description/dropdown-with-description.component.html"),
            styles: [__webpack_require__(/*! ./dropdown-with-description.component.css */ "./src/app/component/dropdown-with-description/dropdown-with-description.component.css")],
            providers: [
                MY_NG_VALUE_ACCESSOR,
                MY_NG_VALIDATORS
            ]
        }),
        __metadata("design:paramtypes", [_dropdown_with_description_service__WEBPACK_IMPORTED_MODULE_2__["DropdownWithDescriptionService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownWithDescriptionComponent);
    return DropdownWithDescriptionComponent;
}(_core_comp__WEBPACK_IMPORTED_MODULE_3__["CustomFormControl"]));



/***/ }),

/***/ "./src/app/component/dropdown-with-description/dropdown-with-description.model.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/component/dropdown-with-description/dropdown-with-description.model.ts ***!
  \****************************************************************************************/
/*! exports provided: DropdownWithDescriptionModel, DropdownDataModel, DropdownDataModelWithZeroIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownWithDescriptionModel", function() { return DropdownWithDescriptionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDataModel", function() { return DropdownDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDataModelWithZeroIndex", function() { return DropdownDataModelWithZeroIndex; });
var DropdownWithDescriptionModel = /** @class */ (function () {
    function DropdownWithDescriptionModel(valueTypeOrKey, ListDisplayKeys, displayKey, descriptionKey) {
        this.ListDisplayKeys = [];
        this.displayKey = null;
        this.descriptionKey = null;
        this.valueTypeOrKey = 'complete';
        this.params = {};
        this.ListDisplayKeys = ListDisplayKeys || [{
                displayKey: 'value',
                headerName: '-select-'
            }];
        this.ListDisplayKeys[0].displayKey = 'display';
        this.displayKey = displayKey || 'display';
        if (displayKey === 'value') {
            this.displayKey = 'display';
        }
        this.descriptionKey = descriptionKey || '';
        this.valueTypeOrKey = valueTypeOrKey || 'key';
    }
    return DropdownWithDescriptionModel;
}());

var DropdownDataModel = /** @class */ (function () {
    function DropdownDataModel(data, defaultKey) {
        if (data === void 0) { data = []; }
        if (defaultKey === void 0) { defaultKey = ''; }
        this.data = data;
    }
    return DropdownDataModel;
}());

var DropdownDataModelWithZeroIndex = /** @class */ (function () {
    function DropdownDataModelWithZeroIndex(data, defaultKey) {
        if (data === void 0) { data = []; }
        if (defaultKey === void 0) { defaultKey = ''; }
        var myVal = [{ key: '', display: '---Select Value---', description: null, extra: null }];
        this.data = myVal.concat(data);
    }
    return DropdownDataModelWithZeroIndex;
}());



/***/ }),

/***/ "./src/app/component/dropdown-with-description/dropdown-with-description.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/component/dropdown-with-description/dropdown-with-description.service.ts ***!
  \******************************************************************************************/
/*! exports provided: DropdownWithDescriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownWithDescriptionService", function() { return DropdownWithDescriptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/base */ "./src/app/core/base/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
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



var DropdownWithDescriptionService = /** @class */ (function (_super) {
    __extends(DropdownWithDescriptionService, _super);
    function DropdownWithDescriptionService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.dropdowTrHeight = 28;
        return _this;
    }
    DropdownWithDescriptionService.prototype.getData = function (url, params) {
        var retValue = '';
        var keys = Object.keys(params);
        keys.forEach(function (key) {
            var val = params[key];
            if (val) {
                retValue += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(val);
            }
        });
        retValue = retValue.substring(1);
        return this.getDataFromAPI(url, retValue);
    };
    DropdownWithDescriptionService.prototype.errorChecking = function (ddOptions, name) {
        if (ddOptions) {
            if (!ddOptions.displayKey) {
                throw new Error('Display Key requred for DropdownWithDescription ' + name);
            }
            // else if (!ddOptions.serviceUrl) {
            //       throw new Error('Service Url requred for DropdownWithDescription ' + name);
            // }
            // else if (!ddOptions.descriptionKey) {
            //       throw new Error('Description Key requred for DropdownWithDescription ' + name);
            // }
        }
        else {
            throw new Error('Basic Setting required for DropdownWithDescription ' + name);
        }
    };
    DropdownWithDescriptionService.prototype.slimScrollSetting = function (dropdownHeight) {
        setTimeout(function () {
            $('.dropDownSlim').slimScroll({
                color: '#000',
                size: '5px',
                height: dropdownHeight,
                alwaysVisible: true,
                allowPageScroll: true,
                scrollTo: 100 + 'px',
            });
        }, 1);
    };
    DropdownWithDescriptionService.prototype.setPositionOfElementToEle = function (targetEle, outputEle, DEFAULT_Height, dropdownHeight) {
        var _a = targetEle.getBoundingClientRect(), bottom = _a.bottom, height = _a.height, left = _a.left, right = _a.right, top = _a.top, width = _a.width;
        var bodyRect = document.body.getBoundingClientRect();
        // console.log(bodyRect, 'bodyRect');
        var windowWidth = window.outerWidth;
        var windowInnerHeight = window.innerHeight;
        // console.log(top, height)
        var eleTop = (top + height + (-bodyRect.y)) % windowInnerHeight;
        if (top > (windowInnerHeight - DEFAULT_Height)) {
            outputEle.style.top = -(dropdownHeight) + 'px'; // eleTop + 'px';
        }
        else {
            outputEle.style.top = (height) + 'px'; // eleTop + 'px';
        }
        outputEle.style.position = 'absolute';
    };
    DropdownWithDescriptionService.prototype.generateDropdownHeight = function (noOfTrs) {
        var dropdownHeight;
        if (noOfTrs > 5) {
            dropdownHeight = this.dropdowTrHeight * 6;
        }
        else {
            dropdownHeight = this.dropdowTrHeight * noOfTrs;
        }
        dropdownHeight += 2;
        return dropdownHeight + 'px';
    };
    DropdownWithDescriptionService.prototype.filterDropdown = function (filter, data, ddOptions) {
        var retOut = data.filter(function (item) {
            if (item[ddOptions.displayKey].toLowerCase().includes(filter.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        });
        return retOut;
    };
    DropdownWithDescriptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], DropdownWithDescriptionService);
    return DropdownWithDescriptionService;
}(_core_base__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/component/dropdown-with-description/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/dropdown-with-description/index.ts ***!
  \**************************************************************/
/*! exports provided: DropdownWithDescriptionComponent, DropdownWithDescriptionModel, DropdownDataModel, DropdownDataModelWithZeroIndex, DropdownWithDescriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_with_description_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-with-description.component */ "./src/app/component/dropdown-with-description/dropdown-with-description.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownWithDescriptionComponent", function() { return _dropdown_with_description_component__WEBPACK_IMPORTED_MODULE_0__["DropdownWithDescriptionComponent"]; });

/* harmony import */ var _dropdown_with_description_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-with-description.model */ "./src/app/component/dropdown-with-description/dropdown-with-description.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownWithDescriptionModel", function() { return _dropdown_with_description_model__WEBPACK_IMPORTED_MODULE_1__["DropdownWithDescriptionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownDataModel", function() { return _dropdown_with_description_model__WEBPACK_IMPORTED_MODULE_1__["DropdownDataModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownDataModelWithZeroIndex", function() { return _dropdown_with_description_model__WEBPACK_IMPORTED_MODULE_1__["DropdownDataModelWithZeroIndex"]; });

/* harmony import */ var _dropdown_with_description_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-with-description.service */ "./src/app/component/dropdown-with-description/dropdown-with-description.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownWithDescriptionService", function() { return _dropdown_with_description_service__WEBPACK_IMPORTED_MODULE_2__["DropdownWithDescriptionService"]; });






/***/ }),

/***/ "./src/app/component/dropdown/autofocus.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/dropdown/autofocus.directive.ts ***!
  \***********************************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(elemRef) {
        this.elemRef = elemRef;
    }
    Object.defineProperty(AutofocusDirective.prototype, "element", {
        get: function () {
            return this.elemRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    AutofocusDirective.prototype.ngOnInit = function () {
        this.focus();
    };
    AutofocusDirective.prototype.ngOnChanges = function (changes) {
        var ssAutofocusChange = changes.ssAutofocus;
        if (ssAutofocusChange && !ssAutofocusChange.isFirstChange()) {
            this.focus();
        }
    };
    AutofocusDirective.prototype.focus = function () {
        if (this.ssAutofocus) {
            return;
        }
        this.element.focus && this.element.focus();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AutofocusDirective.prototype, "ssAutofocus", void 0);
    AutofocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ssAutofocus]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "./src/app/component/dropdown/dropdown.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/dropdown/dropdown.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  outline: none !important;\r\n}\r\n\r\n.dropdown-inline {\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-toggle .caret {\r\n  margin-left: 4px;\r\n  white-space: nowrap;\r\n  display: inline-block;\r\n}\r\n\r\n.chunkydropdown-menu {\r\n  min-width: 20em;\r\n}\r\n\r\n.chunkyrow {\r\n  line-height: 2;\r\n  margin-left: 1em;\r\n  font-size: 2em;\r\n}\r\n\r\n.slider {\r\n  width: 3.8em;\r\n  height: 3.8em;\r\n  display: block;\r\n  transition: all 0.125s linear;\r\n  margin-left: 0.125em;\r\n  margin-top: auto;\r\n}\r\n\r\n.slideron {\r\n  margin-left: 1.35em;\r\n}\r\n\r\n.content_wrapper {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.search-container {\r\n  padding: 0px 5px 5px 5px;\r\n}\r\n\r\n.txtEllipsis {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n\r\n.custDropdown .dropdown-menu {\r\n  width: 100%;\r\n  max-width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/dropdown/dropdown.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/dropdown/dropdown.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" [ngClass]=\"settings.containerClasses\" [class.open]=\"isVisible\" (offClick)=\"clickedOutside()\">\r\n  <button type=\"button\" class=\"dropdown-toggle txtEllipsis\" [ngClass]=\"settings.buttonClasses\" (click)=\"toggleDropdown($event)\" [disabled]=\"disabled\"\r\n    [ssAutofocus]=\"!focusBack\">\r\n    {{ title }}\r\n    <span class=\"caret\"></span>\r\n  </button>\r\n  <div #scroller *ngIf=\"isVisible\" class=\"dropdown-menu\" [ngClass]=\"{'chunkydropdown-menu': settings.checkedStyle == 'visual' }\" (scroll)=\"settings.isLazyLoad ? checkScrollPosition($event) : null\"\r\n    (wheel)=\"settings.stopScrollPropagation ? checkScrollPropagation($event, scroller) : null\" [class.pull-right]=\"settings.pullRight\" [class.dropdown-menu-right]=\"settings.pullRight\"\r\n    [style.max-height]=\"settings.maxHeight\" style=\"display: block; height: auto; overflow-y: auto;\" (keydown.tab)=\"focusItem(1, $event)\" (keydown.shift.tab)=\"focusItem(-1, $event)\">\r\n    <div class=\"input-group search-container\" *ngIf=\"settings.enableSearch\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\" id=\"basic-addon1\">\r\n          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n        </span>\r\n      </div>\r\n      <input type=\"text\" class=\"form-control\" ssAutofocus [formControl]=\"filterControl\" [placeholder]=\"texts.searchPlaceholder\" class=\"form-control\">\r\n      <div class=\"input-group-append\" *ngIf=\"filterControl.value.length>0\">\r\n        <button class=\"btn btn-default btn-secondary\" type=\"button\" (click)=\"clearSearch($event)\">\r\n          <i class=\"fa fa-times\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <a role=\"menuitem\" href=\"javascript:;\" tabindex=\"-1\" class=\"dropdown-item check-control check-control-check\" *ngIf=\"settings.showCheckAll && !disabledSelection\"\r\n      (click)=\"checkAll()\">\r\n      <span style=\"width: 16px;\">\r\n        <span [ngClass]=\"{'glyphicon glyphicon-ok': settings.checkedStyle !== 'fontawesome','fa fa-check': settings.checkedStyle === 'fontawesome'}\"></span>\r\n      </span>\r\n      {{ texts.checkAll }}\r\n    </a>\r\n    <a role=\"menuitem\" href=\"javascript:;\" tabindex=\"-1\" class=\"dropdown-item check-control check-control-uncheck\" *ngIf=\"settings.showUncheckAll && !disabledSelection\"\r\n      (click)=\"uncheckAll()\">\r\n      <span style=\"width: 16px;\">\r\n        <span [ngClass]=\"{'glyphicon glyphicon-remove': settings.checkedStyle !== 'fontawesome','fa fa-times': settings.checkedStyle === 'fontawesome'}\"></span>\r\n      </span>\r\n      {{ texts.uncheckAll }}\r\n    </a>\r\n    <a *ngIf=\"settings.showCheckAll || settings.showUncheckAll\" href=\"javascript:;\" class=\"dropdown-divider divider\"></a>\r\n    <a *ngIf=\"!renderItems\" href=\"javascript:;\" class=\"dropdown-item empty\">{{ texts.searchNoRenderText }}</a>\r\n    <a *ngIf=\"renderItems && !renderFilteredOptions.length\" href=\"javascript:;\" class=\"dropdown-item empty\">{{ texts.searchEmptyResult }}</a>\r\n    <a class=\"dropdown-item\" href=\"javascript:;\" *ngFor=\"let option of renderFilteredOptions; trackBy: trackById\" [class.active]=\"isSelected(option)\"\r\n      [ngStyle]=\"getItemStyle(option)\" [ngClass]=\"option.classes\" [class.dropdown-header]=\"option.isLabel\" [ssAutofocus]=\"option !== focusedItem\"\r\n      tabindex=\"-1\" (click)=\"setSelected($event, option)\" (keydown.space)=\"setSelected($event, option)\" (keydown.enter)=\"setSelected($event, option)\">\r\n      <span *ngIf=\"!option.isLabel; else label\" role=\"menuitem\" tabindex=\"-1\" [style.padding-left]=\"this.parents.length>0&&this.parents.indexOf(option.id)<0&&'30px'\"\r\n        [ngStyle]=\"getItemStyleSelectionDisabled()\">\r\n        <ng-container [ngSwitch]=\"settings.checkedStyle\">\r\n          <input *ngSwitchCase=\"'checkboxes'\" type=\"checkbox\" [checked]=\"isSelected(option)\" (click)=\"preventCheckboxCheck($event, option)\" [disabled]=\"isCheckboxDisabled(option)\"\r\n            [ngStyle]=\"getItemStyleSelectionDisabled()\" />\r\n          <span *ngSwitchCase=\"'glyphicon'\" style=\"width: 16px;\" class=\"glyphicon\" [class.glyphicon-ok]=\"isSelected(option)\" [class.glyphicon-lock]=\"isCheckboxDisabled(option)\"></span>\r\n          <span *ngSwitchCase=\"'fontawesome'\" style=\"width: 16px;display: inline-block;\">\r\n            <span *ngIf=\"isSelected(option)\">\r\n              <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <span *ngIf=\"isCheckboxDisabled(option)\">\r\n              <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\r\n            </span>\r\n          </span>\r\n          <span *ngSwitchCase=\"'visual'\" style=\"display:block;float:left; border-radius: 0.2em; border: 0.1em solid rgba(44, 44, 44, 0.63);background:rgba(0, 0, 0, 0.1);width: 5.5em;\">\r\n            <div class=\"slider\" [ngClass]=\"{'slideron': isSelected(option)}\">\r\n              <img *ngIf=\"option.image != null\" [src]=\"option.image\" style=\"height: 100%; width: 100%; object-fit: contain\" />\r\n              <div *ngIf=\"option.image == null\" style=\"height: 100%; width: 100%;text-align: center; display: table; background-color:rgba(0, 0, 0, 0.74)\">\r\n                <div class=\"content_wrapper\">\r\n                  <span style=\"font-size:3em;color:white\" class=\"glyphicon glyphicon-eye-close\"></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </span>\r\n        </ng-container>\r\n        <span [ngClass]=\"{'chunkyrow': settings.checkedStyle == 'visual' }\" [class.disabled]=\"isCheckboxDisabled(option)\" [ngClass]=\"settings.itemClasses\"\r\n          [style.font-weight]=\"this.parents.indexOf(option.id)>=0?'bold':'normal'\">\r\n          {{ option.name }}\r\n        </span>\r\n      </span>\r\n      <ng-template #label>\r\n        <span [class.disabled]=\"isCheckboxDisabled(option)\">{{ option.name }}</span>\r\n      </ng-template>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/dropdown/dropdown.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/dropdown/dropdown.component.ts ***!
  \**********************************************************/
/*! exports provided: MultiselectDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectDropdownComponent", function() { return MultiselectDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _search_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-filter.pipe */ "./src/app/component/dropdown/search-filter.pipe.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 * Angular 2 Dropdown Multiselect for Bootstrap
 *
 * Simon Lindh
 * https://github.com/softsimon/angular-2-dropdown-multiselect
 */
var MULTISELECT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MultiselectDropdownComponent; }),
    multi: true,
};
var MultiselectDropdownComponent = /** @class */ (function () {
    function MultiselectDropdownComponent(element, fb, searchFilter, differs, cdRef) {
        this.element = element;
        this.fb = fb;
        this.searchFilter = searchFilter;
        this.cdRef = cdRef;
        this.filterControl = this.fb.control('');
        this.disabled = false;
        this.disabledSelection = false;
        this.selectionLimitReached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdownClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdownOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFilter = this.filterControl.valueChanges;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.filteredOptions = [];
        this.lazyLoadOptions = [];
        this.renderFilteredOptions = [];
        this.model = [];
        this.prevModel = [];
        this.numSelected = 0;
        this.renderItems = true;
        this.checkAllSearchRegister = new Set();
        this.checkAllStatus = false;
        this.loadedValueIds = [];
        this._focusBack = false;
        this.defaultSettings = {
            closeOnClickOutside: true,
            pullRight: false,
            enableSearch: false,
            searchRenderLimit: 0,
            searchRenderAfter: 1,
            searchMaxLimit: 0,
            searchMaxRenderedItems: 0,
            checkedStyle: 'checkboxes',
            buttonClasses: 'btn btn-primary dropdown-toggle',
            containerClasses: 'dropdown-inline',
            selectionLimit: 0,
            minSelectionLimit: 0,
            closeOnSelect: false,
            autoUnselect: false,
            showCheckAll: false,
            showUncheckAll: false,
            fixedTitle: false,
            dynamicTitleMaxItems: 3,
            maxHeight: '300px',
            isLazyLoad: false,
            stopScrollPropagation: false,
            loadViewDistance: 1,
            selectAddedValues: false,
            ignoreLabels: false,
            maintainSelectionOrderInTitle: false,
            focusBack: true
        };
        this.defaultTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            searchPlaceholder: 'Search...',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this._isVisible = false;
        this._workerDocClicked = false;
        this.onModelChange = function (_) { };
        this.onModelTouched = function () { };
        this.differ = differs.find([]).create(null);
        this.settings = this.defaultSettings;
        this.texts = this.defaultTexts;
    }
    Object.defineProperty(MultiselectDropdownComponent.prototype, "focusBack", {
        get: function () {
            return this.settings.focusBack && this._focusBack;
        },
        enumerable: true,
        configurable: true
    });
    MultiselectDropdownComponent.prototype.clickedOutside = function () {
        if (!this.isVisible || !this.settings.closeOnClickOutside) {
            return;
        }
        this.isVisible = false;
        this._focusBack = true;
        this.dropdownClosed.emit();
    };
    Object.defineProperty(MultiselectDropdownComponent.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (val) {
            this._isVisible = val;
            this._workerDocClicked = val ? false : this._workerDocClicked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdownComponent.prototype, "searchLimit", {
        get: function () {
            return this.settings.searchRenderLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdownComponent.prototype, "searchRenderAfter", {
        get: function () {
            return this.settings.searchRenderAfter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdownComponent.prototype, "searchLimitApplied", {
        get: function () {
            return this.searchLimit > 0 && this.options.length > this.searchLimit;
        },
        enumerable: true,
        configurable: true
    });
    MultiselectDropdownComponent.prototype.getItemStyle = function (option) {
        var style = {};
        if (!option.isLabel) {
            style['cursor'] = 'pointer';
        }
        if (option.disabled) {
            style['cursor'] = 'default';
        }
    };
    MultiselectDropdownComponent.prototype.getItemStyleSelectionDisabled = function () {
        if (this.disabledSelection) {
            return { cursor: 'default' };
        }
    };
    MultiselectDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.texts.defaultTitle || '';
        this.filterControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function () {
            _this.updateRenderItems();
            if (_this.settings.isLazyLoad) {
                _this.load();
            }
        });
    };
    MultiselectDropdownComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['options']) {
            this.options = this.options || [];
            this.parents = this.options
                .filter(function (option) { return typeof option.parentId === 'number'; })
                .map(function (option) { return option.parentId; });
            this.updateRenderItems();
            if (this.settings.isLazyLoad &&
                this.settings.selectAddedValues &&
                this.loadedValueIds.length === 0) {
                this.loadedValueIds = this.loadedValueIds.concat(changes.options.currentValue.map(function (value) { return value.id; }));
            }
            if (this.settings.isLazyLoad &&
                this.settings.selectAddedValues &&
                changes.options.previousValue) {
                var addedValues_1 = changes.options.currentValue.filter(function (value) { return _this.loadedValueIds.indexOf(value.id) === -1; });
                this.loadedValueIds.concat(addedValues_1.map(function (value) { return value.id; }));
                if (this.checkAllStatus) {
                    this.addChecks(addedValues_1);
                }
                else if (this.checkAllSearchRegister.size > 0) {
                    this.checkAllSearchRegister.forEach(function (searchValue) {
                        return _this.addChecks(_this.applyFilters(addedValues_1, searchValue));
                    });
                }
            }
            if (this.texts) {
                this.updateTitle();
            }
            this.fireModelChange();
        }
        if (changes['settings']) {
            this.settings = __assign({}, this.defaultSettings, this.settings);
        }
        if (changes['texts']) {
            this.texts = __assign({}, this.defaultTexts, this.texts);
            if (!changes['texts'].isFirstChange()) {
                this.updateTitle();
            }
        }
    };
    MultiselectDropdownComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
    };
    MultiselectDropdownComponent.prototype.updateRenderItems = function () {
        this.renderItems =
            !this.searchLimitApplied ||
                this.filterControl.value.length >= this.searchRenderAfter;
        this.filteredOptions = this.applyFilters(this.options, this.settings.isLazyLoad ? '' : this.filterControl.value);
        this.renderFilteredOptions = this.renderItems ? this.filteredOptions : [];
        this.focusedItem = undefined;
    };
    MultiselectDropdownComponent.prototype.applyFilters = function (options, value) {
        return this.searchFilter.transform(options, value, this.settings.searchMaxLimit, this.settings.searchMaxRenderedItems);
    };
    MultiselectDropdownComponent.prototype.fireModelChange = function () {
        if (this.model != this.prevModel) {
            this.prevModel = this.model;
            this.onModelChange(this.model);
            this.onModelTouched();
            this.cdRef.markForCheck();
        }
    };
    MultiselectDropdownComponent.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            this.model = Array.isArray(value) ? value : [value];
            this.ngDoCheck();
        }
        else {
            this.model = [];
        }
    };
    MultiselectDropdownComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    MultiselectDropdownComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    MultiselectDropdownComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MultiselectDropdownComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.model);
        if (changes) {
            this.updateNumSelected();
            this.updateTitle();
        }
    };
    MultiselectDropdownComponent.prototype.validate = function (_c) {
        var _this = this;
        if (this.model && this.model.length) {
            return {
                required: {
                    valid: false
                }
            };
        }
        if (this.options.filter(function (o) { return _this.model.indexOf(o.id) && !o.disabled; }).length === 0) {
            return {
                selection: {
                    valid: false
                }
            };
        }
        return null;
    };
    MultiselectDropdownComponent.prototype.registerOnValidatorChange = function (_fn) {
        throw new Error('Method not implemented.');
    };
    MultiselectDropdownComponent.prototype.clearSearch = function (event) {
        this.maybeStopPropagation(event);
        this.filterControl.setValue('');
    };
    MultiselectDropdownComponent.prototype.toggleDropdown = function (e) {
        if (this.isVisible) {
            this._focusBack = true;
        }
        this.isVisible = !this.isVisible;
        this.isVisible ? this.dropdownOpened.emit() : this.dropdownClosed.emit();
        this.focusedItem = undefined;
    };
    MultiselectDropdownComponent.prototype.closeDropdown = function (e) {
        this.isVisible = true;
        this.toggleDropdown(e);
    };
    MultiselectDropdownComponent.prototype.isSelected = function (option) {
        return this.model && this.model.indexOf(option.id) > -1;
    };
    MultiselectDropdownComponent.prototype.setSelected = function (_event, option) {
        var _this = this;
        if (option.isLabel) {
            return;
        }
        if (option.disabled) {
            return;
        }
        if (this.disabledSelection) {
            return;
        }
        setTimeout(function () {
            _this.maybeStopPropagation(_event);
            _this.maybePreventDefault(_event);
            var index = _this.model.indexOf(option.id);
            var isAtSelectionLimit = _this.settings.selectionLimit > 0 &&
                _this.model.length >= _this.settings.selectionLimit;
            var removeItem = function (idx, id) {
                _this.model.splice(idx, 1);
                _this.onRemoved.emit(id);
                if (_this.settings.isLazyLoad &&
                    _this.lazyLoadOptions.some(function (val) { return val.id === id; })) {
                    _this.lazyLoadOptions.splice(_this.lazyLoadOptions.indexOf(_this.lazyLoadOptions.find(function (val) { return val.id === id; })), 1);
                }
            };
            if (index > -1) {
                if (_this.settings.minSelectionLimit === undefined ||
                    _this.numSelected > _this.settings.minSelectionLimit) {
                    removeItem(index, option.id);
                }
                var parentIndex = option.parentId && _this.model.indexOf(option.parentId);
                if (parentIndex > -1) {
                    removeItem(parentIndex, option.parentId);
                }
                else if (_this.parents.indexOf(option.id) > -1) {
                    _this.options
                        .filter(function (child) {
                        return _this.model.indexOf(child.id) > -1 &&
                            child.parentId === option.id;
                    })
                        .forEach(function (child) {
                        return removeItem(_this.model.indexOf(child.id), child.id);
                    });
                }
            }
            else if (isAtSelectionLimit && !_this.settings.autoUnselect) {
                _this.selectionLimitReached.emit(_this.model.length);
                return;
            }
            else {
                var addItem_1 = function (id) {
                    _this.model.push(id);
                    _this.onAdded.emit(id);
                    if (_this.settings.isLazyLoad &&
                        !_this.lazyLoadOptions.some(function (val) { return val.id === id; })) {
                        _this.lazyLoadOptions.push(option);
                    }
                };
                addItem_1(option.id);
                if (!isAtSelectionLimit) {
                    if (option.parentId && !_this.settings.ignoreLabels) {
                        var children = _this.options.filter(function (child) {
                            return child.id !== option.id && child.parentId === option.parentId;
                        });
                        if (children.every(function (child) { return _this.model.indexOf(child.id) > -1; })) {
                            addItem_1(option.parentId);
                        }
                    }
                    else if (_this.parents.indexOf(option.id) > -1) {
                        var children = _this.options.filter(function (child) {
                            return _this.model.indexOf(child.id) < 0 && child.parentId === option.id;
                        });
                        children.forEach(function (child) { return addItem_1(child.id); });
                    }
                }
                else {
                    removeItem(0, _this.model[0]);
                }
            }
            if (_this.settings.closeOnSelect) {
                _this.toggleDropdown();
            }
            _this.model = _this.model.slice();
            _this.fireModelChange();
        }, 0);
    };
    MultiselectDropdownComponent.prototype.updateNumSelected = function () {
        var _this = this;
        this.numSelected =
            this.model.filter(function (id) { return _this.parents.indexOf(id) < 0; }).length || 0;
    };
    MultiselectDropdownComponent.prototype.updateTitle = function () {
        var _this = this;
        var numSelectedOptions = this.options.length;
        if (this.settings.ignoreLabels) {
            numSelectedOptions = this.options.filter(function (option) { return !option.isLabel; }).length;
        }
        if (this.numSelected === 0 || this.settings.fixedTitle) {
            this.title = this.texts ? this.texts.defaultTitle : '';
        }
        else if (this.settings.displayAllSelectedText &&
            this.model.length === numSelectedOptions) {
            this.title = this.texts ? this.texts.allSelected : '';
        }
        else if (this.settings.dynamicTitleMaxItems &&
            this.settings.dynamicTitleMaxItems >= this.numSelected) {
            var useOptions_1 = this.settings.isLazyLoad && this.lazyLoadOptions.length
                ? this.lazyLoadOptions
                : this.options;
            var titleSelections = void 0;
            if (this.settings.maintainSelectionOrderInTitle) {
                var optionIds_1 = useOptions_1.map(function (selectOption, idx) { return selectOption.id; });
                titleSelections = this.model
                    .map(function (selectedId) { return optionIds_1.indexOf(selectedId); })
                    .filter(function (optionIndex) { return optionIndex > -1; })
                    .map(function (optionIndex) { return useOptions_1[optionIndex]; });
            }
            else {
                titleSelections = useOptions_1.filter(function (option) { return _this.model.indexOf(option.id) > -1; });
            }
            this.title = titleSelections.map(function (option) { return option.name; }).join(', ');
        }
        else {
            this.title =
                this.numSelected +
                    ' ' +
                    (this.numSelected === 1
                        ? this.texts.checked
                        : this.texts.checkedPlural);
        }
        this.cdRef.markForCheck();
    };
    MultiselectDropdownComponent.prototype.searchFilterApplied = function () {
        return (this.settings.enableSearch &&
            this.filterControl.value &&
            this.filterControl.value.length > 0);
    };
    MultiselectDropdownComponent.prototype.addChecks = function (options) {
        var _this = this;
        var checkedOptions = options
            .filter(function (option) {
            if (!option.disabled &&
                (_this.model.indexOf(option.id) === -1 &&
                    !(_this.settings.ignoreLabels && option.isLabel))) {
                _this.onAdded.emit(option.id);
                return true;
            }
            return false;
        })
            .map(function (option) { return option.id; });
        this.model = this.model.concat(checkedOptions);
    };
    MultiselectDropdownComponent.prototype.checkAll = function () {
        if (!this.disabledSelection) {
            this.addChecks(!this.searchFilterApplied() ? this.options : this.filteredOptions);
            if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
                if (this.searchFilterApplied() && !this.checkAllStatus) {
                    this.checkAllSearchRegister.add(this.filterControl.value);
                }
                else {
                    this.checkAllSearchRegister.clear();
                    this.checkAllStatus = true;
                }
                this.load();
            }
            this.fireModelChange();
        }
    };
    MultiselectDropdownComponent.prototype.uncheckAll = function () {
        var _this = this;
        if (!this.disabledSelection) {
            var checkedOptions = this.model;
            var unCheckedOptions_1 = !this.searchFilterApplied()
                ? this.model
                : this.filteredOptions.map(function (option) { return option.id; });
            // set unchecked options only to the ones that were checked
            unCheckedOptions_1 = checkedOptions.filter(function (item) { return unCheckedOptions_1.indexOf(item) > -1; });
            this.model = this.model.filter(function (id) {
                if ((unCheckedOptions_1.indexOf(id) < 0 &&
                    _this.settings.minSelectionLimit === undefined) ||
                    unCheckedOptions_1.indexOf(id) < _this.settings.minSelectionLimit) {
                    return true;
                }
                else {
                    _this.onRemoved.emit(id);
                    return false;
                }
            });
            if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
                if (this.searchFilterApplied()) {
                    if (this.checkAllSearchRegister.has(this.filterControl.value)) {
                        this.checkAllSearchRegister.delete(this.filterControl.value);
                        this.checkAllSearchRegister.forEach(function (searchTerm) {
                            var filterOptions = this.applyFilters(this.options.filter(function (option) { return unCheckedOptions_1.indexOf(option.id) > -1; }), searchTerm);
                            this.addChecks(filterOptions);
                        });
                    }
                }
                else {
                    this.checkAllSearchRegister.clear();
                    this.checkAllStatus = false;
                }
                this.load();
            }
            this.fireModelChange();
        }
    };
    MultiselectDropdownComponent.prototype.preventCheckboxCheck = function (event, option) {
        if (option.disabled ||
            (this.settings.selectionLimit &&
                !this.settings.autoUnselect &&
                this.model.length >= this.settings.selectionLimit &&
                this.model.indexOf(option.id) === -1 &&
                this.maybePreventDefault(event))) {
            this.maybePreventDefault(event);
        }
    };
    MultiselectDropdownComponent.prototype.isCheckboxDisabled = function (option) {
        return this.disabledSelection || option && option.disabled;
    };
    MultiselectDropdownComponent.prototype.checkScrollPosition = function (ev) {
        var scrollTop = ev.target.scrollTop;
        var scrollHeight = ev.target.scrollHeight;
        var scrollElementHeight = ev.target.clientHeight;
        var roundingPixel = 1;
        var gutterPixel = 1;
        if (scrollTop >=
            scrollHeight -
                (1 + this.settings.loadViewDistance) * scrollElementHeight -
                roundingPixel -
                gutterPixel) {
            this.load();
        }
    };
    MultiselectDropdownComponent.prototype.checkScrollPropagation = function (ev, element) {
        var scrollTop = element.scrollTop;
        var scrollHeight = element.scrollHeight;
        var scrollElementHeight = element.clientHeight;
        if ((ev.deltaY > 0 && scrollTop + scrollElementHeight >= scrollHeight) ||
            (ev.deltaY < 0 && scrollTop <= 0)) {
            ev = ev || window.event;
            this.maybePreventDefault(ev);
            ev.returnValue = false;
        }
    };
    MultiselectDropdownComponent.prototype.trackById = function (idx, selectOption) {
        return selectOption.id;
    };
    MultiselectDropdownComponent.prototype.load = function () {
        this.onLazyLoad.emit({
            length: this.options.length,
            filter: this.filterControl.value,
            checkAllSearches: this.checkAllSearchRegister,
            checkAllStatus: this.checkAllStatus,
        });
    };
    MultiselectDropdownComponent.prototype.focusItem = function (dir, e) {
        if (!this.isVisible) {
            return;
        }
        this.maybePreventDefault(e);
        var idx = this.filteredOptions.indexOf(this.focusedItem);
        if (idx === -1) {
            this.focusedItem = this.filteredOptions[0];
            return;
        }
        var nextIdx = idx + dir;
        var newIdx = nextIdx < 0
            ? this.filteredOptions.length - 1
            : nextIdx % this.filteredOptions.length;
        this.focusedItem = this.filteredOptions[newIdx];
    };
    MultiselectDropdownComponent.prototype.maybePreventDefault = function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
    };
    MultiselectDropdownComponent.prototype.maybeStopPropagation = function (e) {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MultiselectDropdownComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MultiselectDropdownComponent.prototype, "settings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MultiselectDropdownComponent.prototype, "texts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MultiselectDropdownComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MultiselectDropdownComponent.prototype, "disabledSelection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MultiselectDropdownComponent.prototype, "selectionLimitReached", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MultiselectDropdownComponent.prototype, "dropdownClosed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MultiselectDropdownComponent.prototype, "dropdownOpened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MultiselectDropdownComponent.prototype, "onAdded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MultiselectDropdownComponent.prototype, "onRemoved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MultiselectDropdownComponent.prototype, "onLazyLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], MultiselectDropdownComponent.prototype, "onFilter", void 0);
    MultiselectDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ss-multiselect-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/component/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.css */ "./src/app/component/dropdown/dropdown.component.css")],
            providers: [MULTISELECT_VALUE_ACCESSOR, _search_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["MultiSelectSearchFilter"]],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _search_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["MultiSelectSearchFilter"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MultiselectDropdownComponent);
    return MultiselectDropdownComponent;
}());



/***/ }),

/***/ "./src/app/component/dropdown/dropdown.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/component/dropdown/dropdown.module.ts ***!
  \*******************************************************/
/*! exports provided: MultiselectDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectDropdownModule", function() { return MultiselectDropdownModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autofocus.directive */ "./src/app/component/dropdown/autofocus.directive.ts");
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown.component */ "./src/app/component/dropdown/dropdown.component.ts");
/* harmony import */ var _search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-filter.pipe */ "./src/app/component/dropdown/search-filter.pipe.ts");
/* harmony import */ var _off_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./off-click.directive */ "./src/app/component/dropdown/off-click.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MultiselectDropdownModule = /** @class */ (function () {
    function MultiselectDropdownModule() {
    }
    MultiselectDropdownModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            exports: [
                _dropdown_component__WEBPACK_IMPORTED_MODULE_4__["MultiselectDropdownComponent"],
                _search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["MultiSelectSearchFilter"],
            ],
            declarations: [
                _dropdown_component__WEBPACK_IMPORTED_MODULE_4__["MultiselectDropdownComponent"],
                _search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["MultiSelectSearchFilter"],
                _autofocus_directive__WEBPACK_IMPORTED_MODULE_3__["AutofocusDirective"],
                _off_click_directive__WEBPACK_IMPORTED_MODULE_6__["OffClickDirective"]
            ],
        })
    ], MultiselectDropdownModule);
    return MultiselectDropdownModule;
}());



/***/ }),

/***/ "./src/app/component/dropdown/off-click.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/dropdown/off-click.directive.ts ***!
  \***********************************************************/
/*! exports provided: OffClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffClickDirective", function() { return OffClickDirective; });
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



var OffClickDirective = /** @class */ (function () {
    function OffClickDirective() {
        this.onOffClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // private _touchEvent: TouchEvent;
        // @HostListener('click', ['$event']) 
        // public onClick(event: MouseEvent): void {
        //   this._clickEvent = event;
        // }
        // @HostListener('touchstart', ['$event'])
        // public onTouch(event: TouchEvent): void {
        //   this._touchEvent = event;
        // }
        // @HostListener('document:click', ['$event']) 
        // private onDocumentClick(event: MouseEvent): void {
        //   if (event !== this._clickEvent) {
        //     this.onOffClick.emit(event);
        //   }
        // }
        // @HostListener('document:touchstart', ['$event'])
        // private onDocumentTouch(event: TouchEvent): void {
        //   if (event !== this._touchEvent) {
        //     this.onOffClick.emit(event);
        //   }
        // }
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('offClick'),
        __metadata("design:type", Object)
    ], OffClickDirective.prototype, "onOffClick", void 0);
    OffClickDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[offClick]',
        })
    ], OffClickDirective);
    return OffClickDirective;
}());



/***/ }),

/***/ "./src/app/component/dropdown/search-filter.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/dropdown/search-filter.pipe.ts ***!
  \**********************************************************/
/*! exports provided: MultiSelectSearchFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectSearchFilter", function() { return MultiSelectSearchFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MultiSelectSearchFilter = /** @class */ (function () {
    function MultiSelectSearchFilter() {
        this._searchCache = {};
        this._searchCacheInclusive = {};
        this._prevSkippedItems = {};
    }
    MultiSelectSearchFilter.prototype.transform = function (options, str, limit, renderLimit) {
        if (str === void 0) { str = ''; }
        if (limit === void 0) { limit = 0; }
        if (renderLimit === void 0) { renderLimit = 0; }
        str = str.toLowerCase();
        // Drop cache because options were updated
        if (options !== this._lastOptions) {
            this._lastOptions = options;
            this._searchCache = {};
            this._searchCacheInclusive = {};
            this._prevSkippedItems = {};
        }
        var filteredOpts = this._searchCache.hasOwnProperty(str)
            ? this._searchCache[str]
            : this._doSearch(options, str, limit);
        var isUnderLimit = options.length <= limit;
        return isUnderLimit
            ? filteredOpts
            : this._limitRenderedItems(filteredOpts, renderLimit);
    };
    MultiSelectSearchFilter.prototype._getSubsetOptions = function (options, prevOptions, prevSearchStr) {
        var prevInclusiveOrIdx = this._searchCacheInclusive[prevSearchStr];
        if (prevInclusiveOrIdx === true) {
            // If have previous results and it was inclusive, do only subsearch
            return prevOptions;
        }
        else if (typeof prevInclusiveOrIdx === 'number') {
            // Or reuse prev results with unchecked ones
            return prevOptions.concat(options.slice(prevInclusiveOrIdx));
        }
        return options;
    };
    MultiSelectSearchFilter.prototype._doSearch = function (options, str, limit) {
        var prevStr = str.slice(0, -1);
        var prevResults = this._searchCache[prevStr];
        var prevResultShift = this._prevSkippedItems[prevStr] || 0;
        if (prevResults) {
            options = this._getSubsetOptions(options, prevResults, prevStr);
        }
        var optsLength = options.length;
        var maxFound = limit > 0 ? Math.min(limit, optsLength) : optsLength;
        var regexp = new RegExp(this._escapeRegExp(str), 'i');
        var filteredOpts = [];
        var i = 0, founded = 0, removedFromPrevResult = 0;
        var doesOptionMatch = function (option) { return regexp.test(option.name); };
        var getChildren = function (option) {
            return options.filter(function (child) { return child.parentId === option.id; });
        };
        var getParent = function (option) {
            return options.find(function (parent) { return option.parentId === parent.id; });
        };
        var foundFn = function (item) { filteredOpts.push(item); founded++; };
        var notFoundFn = prevResults ? function () { return removedFromPrevResult++; } : function () { };
        for (; i < optsLength && founded < maxFound; ++i) {
            var option = options[i];
            var directMatch = doesOptionMatch(option);
            if (directMatch) {
                foundFn(option);
                continue;
            }
            if (typeof option.parentId === 'undefined') {
                var childrenMatch = getChildren(option).some(doesOptionMatch);
                if (childrenMatch) {
                    foundFn(option);
                    continue;
                }
            }
            if (typeof option.parentId !== 'undefined') {
                var parentMatch = doesOptionMatch(getParent(option));
                if (parentMatch) {
                    foundFn(option);
                    continue;
                }
            }
            notFoundFn();
        }
        var totalIterations = i + prevResultShift;
        this._searchCache[str] = filteredOpts;
        this._searchCacheInclusive[str] = i === optsLength || totalIterations;
        this._prevSkippedItems[str] = removedFromPrevResult + prevResultShift;
        return filteredOpts;
    };
    MultiSelectSearchFilter.prototype._limitRenderedItems = function (items, limit) {
        return items.length > limit && limit > 0 ? items.slice(0, limit) : items;
    };
    MultiSelectSearchFilter.prototype._escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
    MultiSelectSearchFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchFilter'
        })
    ], MultiSelectSearchFilter);
    return MultiSelectSearchFilter;
}());



/***/ }),

/***/ "./src/app/component/global-dropdown/global-dropdown.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/global-dropdown/global-dropdown.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdownCls {\r\n  z-index: 2001;\r\n  height: 300px;\r\n  overflow: scroll;\r\n}\r\n\r\n/* .slimScrollDiv {\r\n  background: #fdfdfd;\r\n  padding: 10px;\r\n  border: 1px solid #f1f1f1;\r\n  borx-shadow: unset;\r\n  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\r\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\r\n} */\r\n\r\n.completeBox {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1050;\r\n  display: none;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-overflow-scrolling: touch;\r\n  outline: 0;\r\n  background: #202326;\r\n  opacity: 0.5;\r\n}\r\n\r\n.innerCompleteBox {\r\n  opacity: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/global-dropdown/global-dropdown.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/global-dropdown/global-dropdown.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"tempID\" #me class=\"innerCompleteBox\">\r\n\r\n\r\n  <div *ngIf=\"show\">\r\n    <div [style.width]=\"listWidth + 'px'\" class=\" dropdownCls dropDownSlim \" (mouseenter)=\"onMouseEnter()\" (mouseleave)=\"onMouseLeave()\">\r\n      <table class=\"table table-bordered table-hover  table-light table-sm table-striped \">\r\n\r\n        <thead>\r\n          <tr>\r\n            <ng-container *ngFor=\"let listDisplayKeys of  basicSetting.ListDisplayKeys\">\r\n              <th>{{listDisplayKeys.headerName}}</th>\r\n            </ng-container>\r\n          </tr>\r\n        </thead>\r\n\r\n        <ng-container *ngFor=\"let list of listData\">\r\n          <tr>\r\n            <ng-container *ngFor=\"let listDisplayKeys of  basicSetting.ListDisplayKeys\">\r\n              <td (click)=\"onShownBodyClick(list)\">{{list[listDisplayKeys.displayKey]}}</td>\r\n            </ng-container>\r\n          </tr>\r\n        </ng-container>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"completeBox\" (click)=\"show = false\" [style.display]=\"show? 'block': 'none'\"></div>\r\n"

/***/ }),

/***/ "./src/app/component/global-dropdown/global-dropdown.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/global-dropdown/global-dropdown.component.ts ***!
  \************************************************************************/
/*! exports provided: GlobalDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalDropdownComponent", function() { return GlobalDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_dropdown_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-dropdown.model */ "./src/app/component/global-dropdown/global-dropdown.model.ts");
/* harmony import */ var _global_dropdown_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-dropdown.service */ "./src/app/component/global-dropdown/global-dropdown.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalDropdownComponent = /** @class */ (function () {
    function GlobalDropdownComponent(gddServ) {
        var _this = this;
        this.gddServ = gddServ;
        this.DEFAULT_WIDTH = 350;
        this.basicSetting = new _global_dropdown_model__WEBPACK_IMPORTED_MODULE_1__["GlobalDropdownModel"]();
        this.listData = [];
        this.ele = {};
        this.context = {};
        this.listWidth = 100;
        this.show = false;
        this.selectedValue = {};
        this.myBlurFunc = function () {
            _this.show = false;
        };
    }
    GlobalDropdownComponent.prototype.ngOnInit = function () {
        this.sub_GetDropdownData();
        this.sub_Show();
    };
    GlobalDropdownComponent.prototype.ngAfterViewInit = function () {
        this.meELe = this.me.nativeElement;
    };
    GlobalDropdownComponent.prototype.sub_GetDropdownData = function () {
        var _this = this;
        this.gddServ.getData
            .subscribe(function (data) {
            _this.show = true;
            _this.basicSetting = data.basicSetting;
            _this.listData = data.listData;
            _this.ele = data.ele;
            _this.context = data.context;
            _this.setPositionOfElementToEle(_this.ele, _this.meELe, _this.DEFAULT_WIDTH);
            _this.listWidth = _this.DEFAULT_WIDTH;
            // const { bottom, height, left, right, top, width } = this.ele.getBoundingClientRect();
            // //     this.listWidth = (width > this.DEFAULT_WIDTH) ? width : this.DEFAULT_WIDTH;
            // this.listWidth = this.DEFAULT_WIDTH;
            // const bodyRect: any = document.body.getBoundingClientRect();
            // //
            // //
            // // clientWidth
            // const windowWidth = window.outerWidth;
            // const windowInnerHeight = window.innerHeight;
            // let eleTop = top + height + (-bodyRect.y);
            // if (eleTop > (windowInnerHeight - this.DEFAULT_WIDTH)) {
            //   eleTop = eleTop - this.DEFAULT_WIDTH + 17;
            // }
            // if (windowWidth < this.listWidth + left) {
            //   this.meELe.style.left = windowWidth;
            // } else {
            //   this.meELe.style.left = (left) + 'px';
            // }
            // this.meELe.style.position = 'absolute';
            // this.meELe.style.top = eleTop + 'px';
        });
    };
    GlobalDropdownComponent.prototype.setPositionOfElementToEle = function (targetEle, outputEle, DEFAULT_WIDTH) {
        var _a = targetEle.getBoundingClientRect(), bottom = _a.bottom, height = _a.height, left = _a.left, right = _a.right, top = _a.top, width = _a.width;
        var bodyRect = document.body.getBoundingClientRect();
        var windowWidth = window.outerWidth;
        var windowInnerHeight = window.innerHeight;
        var eleTop = top + height + (-bodyRect.y);
        if (eleTop > (windowInnerHeight - DEFAULT_WIDTH)) {
            eleTop = eleTop - DEFAULT_WIDTH + 17;
        }
        if (windowWidth < DEFAULT_WIDTH + left) {
            outputEle.style.left = windowWidth;
        }
        else {
            outputEle.style.left = (left) + 'px';
        }
        outputEle.style.position = 'absolute';
        outputEle.style.top = eleTop + 'px';
    };
    GlobalDropdownComponent.prototype.sub_Show = function () {
        var _this = this;
        this.gddServ.getShow.subscribe(function (show) {
            _this.show = show;
        });
    };
    GlobalDropdownComponent.prototype.onShownBodyClick = function (val) {
        this.show = false;
        this.selectedValue = val;
        this.context.onChange(this.selectedValue);
        // this.progateValue(val);
    };
    GlobalDropdownComponent.prototype.progateValue = function (val) {
        if (this.basicSetting.valueTypeOrKey === 'complete') {
            this.selectedValue = val;
        }
        else {
            this.selectedValue = val[this.basicSetting.valueTypeOrKey];
        }
    };
    GlobalDropdownComponent.prototype.onMouseLeave = function () {
        this.ele.onblur = this.myBlurFunc;
    };
    GlobalDropdownComponent.prototype.onMouseEnter = function () {
        this.ele.onblur = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('me'),
        __metadata("design:type", Object)
    ], GlobalDropdownComponent.prototype, "me", void 0);
    GlobalDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-global-dropdown',
            template: __webpack_require__(/*! ./global-dropdown.component.html */ "./src/app/component/global-dropdown/global-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./global-dropdown.component.css */ "./src/app/component/global-dropdown/global-dropdown.component.css")]
        }),
        __metadata("design:paramtypes", [_global_dropdown_service__WEBPACK_IMPORTED_MODULE_2__["GlobalDropDownService"]])
    ], GlobalDropdownComponent);
    return GlobalDropdownComponent;
}());

// slimScrollSetting() {
//   setTimeout(() => {
//     $('.dropDownSlim').slimScroll({
//       color: '#000',
//       size: '5px',
//       height: '300px',
//       alwaysVisible: true
//     });
//   }, 100);
// }


/***/ }),

/***/ "./src/app/component/global-dropdown/global-dropdown.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/global-dropdown/global-dropdown.model.ts ***!
  \********************************************************************/
/*! exports provided: GlobalDropdownModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalDropdownModel", function() { return GlobalDropdownModel; });
var GlobalDropdownModel = /** @class */ (function () {
    function GlobalDropdownModel() {
        this.ListDisplayKeys = [];
        this.displayKey = null;
        this.descriptionKey = null;
        this.valueTypeOrKey = 'complete';
    }
    return GlobalDropdownModel;
}());



/***/ }),

/***/ "./src/app/component/global-dropdown/global-dropdown.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/global-dropdown/global-dropdown.service.ts ***!
  \**********************************************************************/
/*! exports provided: GlobalDropDownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalDropDownService", function() { return GlobalDropDownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalDropDownService = /** @class */ (function () {
    function GlobalDropDownService() {
        this.sendData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getData = this.sendData.asObservable();
        this.sendShow = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getShow = this.sendShow.asObservable();
    }
    GlobalDropDownService.prototype.sendDropdownData = function (dropdownData) {
        this.sendData.next(dropdownData);
    };
    GlobalDropDownService.prototype.sendDropdownShow = function (show) {
        this.sendShow.next(show);
    };
    GlobalDropDownService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalDropDownService);
    return GlobalDropDownService;
}());



/***/ }),

/***/ "./src/app/component/global-dropdown/index.ts":
/*!****************************************************!*\
  !*** ./src/app/component/global-dropdown/index.ts ***!
  \****************************************************/
/*! exports provided: GlobalDropDownService, GlobalDropdownComponent, GlobalDropdownModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-dropdown.component */ "./src/app/component/global-dropdown/global-dropdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalDropdownComponent", function() { return _global_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["GlobalDropdownComponent"]; });

/* harmony import */ var _global_dropdown_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-dropdown.model */ "./src/app/component/global-dropdown/global-dropdown.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalDropdownModel", function() { return _global_dropdown_model__WEBPACK_IMPORTED_MODULE_1__["GlobalDropdownModel"]; });

/* harmony import */ var _global_dropdown_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-dropdown.service */ "./src/app/component/global-dropdown/global-dropdown.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalDropDownService", function() { return _global_dropdown_service__WEBPACK_IMPORTED_MODULE_2__["GlobalDropDownService"]; });






/***/ }),

/***/ "./src/app/component/global-popup/global-popup.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/global-popup/global-popup.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/global-popup/global-popup.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/global-popup/global-popup.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" [id]=\"id\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\"> {{title}}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\" [innerHTML]=\"msg\">\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Ok</button>\r\n        <!-- <button type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/global-popup/global-popup.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/global-popup/global-popup.component.ts ***!
  \******************************************************************/
/*! exports provided: GlobalPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPopupComponent", function() { return GlobalPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _global_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-popup.service */ "./src/app/component/global-popup/global-popup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalPopupComponent = /** @class */ (function () {
    function GlobalPopupComponent(idGen, globalPopSer) {
        this.idGen = idGen;
        this.globalPopSer = globalPopSer;
        this.id = idGen.generateNormalIDs('global-pupup');
        globalPopSer.registerComponent(this);
    }
    GlobalPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-global-popup',
            template: __webpack_require__(/*! ./global-popup.component.html */ "./src/app/component/global-popup/global-popup.component.html"),
            styles: [__webpack_require__(/*! ./global-popup.component.css */ "./src/app/component/global-popup/global-popup.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["IDGeneratorService"],
            _global_popup_service__WEBPACK_IMPORTED_MODULE_2__["GlobalPopupService"]])
    ], GlobalPopupComponent);
    return GlobalPopupComponent;
}());



/***/ }),

/***/ "./src/app/component/global-popup/global-popup.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/global-popup/global-popup.service.ts ***!
  \****************************************************************/
/*! exports provided: GlobalPopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPopupService", function() { return GlobalPopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_comp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core-comp */ "./src/app/component/core-comp/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



var GlobalPopupService = /** @class */ (function (_super) {
    __extends(GlobalPopupService, _super);
    function GlobalPopupService(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        return _this;
    }
    GlobalPopupService.prototype.registerComponent = function (globalPopUpComp) {
        this.globalPopUpComp = globalPopUpComp;
    };
    GlobalPopupService.prototype.showGlobalPopup = function (msg, title) {
        if (title === void 0) { title = 'Alert!'; }
        this.globalPopUpComp.msg = msg;
        this.globalPopUpComp.title = title;
        this.show(this.globalPopUpComp.id);
    };
    GlobalPopupService.prototype.navigateTo = function (command) {
        this.router.navigate(command);
    };
    GlobalPopupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GlobalPopupService);
    return GlobalPopupService;
}(_core_comp__WEBPACK_IMPORTED_MODULE_1__["ModalPopUp"]));



/***/ }),

/***/ "./src/app/component/global-popup/index.ts":
/*!*************************************************!*\
  !*** ./src/app/component/global-popup/index.ts ***!
  \*************************************************/
/*! exports provided: GlobalPopupComponent, GlobalPopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-popup.component */ "./src/app/component/global-popup/global-popup.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalPopupComponent", function() { return _global_popup_component__WEBPACK_IMPORTED_MODULE_0__["GlobalPopupComponent"]; });

/* harmony import */ var _global_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-popup.service */ "./src/app/component/global-popup/global-popup.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalPopupService", function() { return _global_popup_service__WEBPACK_IMPORTED_MODULE_1__["GlobalPopupService"]; });





/***/ }),

/***/ "./src/app/component/index.ts":
/*!************************************!*\
  !*** ./src/app/component/index.ts ***!
  \************************************/
/*! exports provided: ComponentModule, ComponentServiceModule, LoaderComponent, LoaderService, DropdownWithDescriptionComponent, DropdownWithDescriptionModel, DropdownDataModel, DropdownDataModelWithZeroIndex, DropdownWithDescriptionService, CustomModalPopUpComponent, CustomModalPopUpModel, CustomModalPopUpService, AlertMessageService, AlertMessageComponent, GlobalPopupComponent, TabComponent, TabsComponent, DynamicTabsDirective, AgDropdownComponent, AGModule, AgChecboxHeaderComponent, AgCheckBoxComponent, AgCheckBoxService, AlertMessageModel, GlobalPopupService, RadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.module */ "./src/app/component/component.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return _component_module__WEBPACK_IMPORTED_MODULE_0__["ComponentModule"]; });

/* harmony import */ var _component_service_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-service.module */ "./src/app/component/component-service.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentServiceModule", function() { return _component_service_module__WEBPACK_IMPORTED_MODULE_1__["ComponentServiceModule"]; });

/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader */ "./src/app/component/loader/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return _loader__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return _loader__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]; });

/* harmony import */ var _ng_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-tabs */ "./src/app/component/ng-tabs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return _ng_tabs__WEBPACK_IMPORTED_MODULE_3__["TabComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return _ng_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicTabsDirective", function() { return _ng_tabs__WEBPACK_IMPORTED_MODULE_3__["DynamicTabsDirective"]; });

/* harmony import */ var _ag_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ag-dropdown */ "./src/app/component/ag-dropdown/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgDropdownComponent", function() { return _ag_dropdown__WEBPACK_IMPORTED_MODULE_4__["AgDropdownComponent"]; });

/* harmony import */ var _ag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ag-component */ "./src/app/component/ag-component/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AGModule", function() { return _ag_component__WEBPACK_IMPORTED_MODULE_5__["AGModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgChecboxHeaderComponent", function() { return _ag_component__WEBPACK_IMPORTED_MODULE_5__["AgChecboxHeaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgCheckBoxComponent", function() { return _ag_component__WEBPACK_IMPORTED_MODULE_5__["AgCheckBoxComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgCheckBoxService", function() { return _ag_component__WEBPACK_IMPORTED_MODULE_5__["AgCheckBoxService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return _ag_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"]; });

/* harmony import */ var _dropdown_with_description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-with-description */ "./src/app/component/dropdown-with-description/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownWithDescriptionComponent", function() { return _dropdown_with_description__WEBPACK_IMPORTED_MODULE_6__["DropdownWithDescriptionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownWithDescriptionModel", function() { return _dropdown_with_description__WEBPACK_IMPORTED_MODULE_6__["DropdownWithDescriptionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownDataModel", function() { return _dropdown_with_description__WEBPACK_IMPORTED_MODULE_6__["DropdownDataModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownDataModelWithZeroIndex", function() { return _dropdown_with_description__WEBPACK_IMPORTED_MODULE_6__["DropdownDataModelWithZeroIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownWithDescriptionService", function() { return _dropdown_with_description__WEBPACK_IMPORTED_MODULE_6__["DropdownWithDescriptionService"]; });

/* harmony import */ var _custom_modal_pop_up__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-modal-pop-up */ "./src/app/component/custom-modal-pop-up/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomModalPopUpComponent", function() { return _custom_modal_pop_up__WEBPACK_IMPORTED_MODULE_7__["CustomModalPopUpComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomModalPopUpModel", function() { return _custom_modal_pop_up__WEBPACK_IMPORTED_MODULE_7__["CustomModalPopUpModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomModalPopUpService", function() { return _custom_modal_pop_up__WEBPACK_IMPORTED_MODULE_7__["CustomModalPopUpService"]; });

/* harmony import */ var _alert_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alert-message */ "./src/app/component/alert-message/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertMessageService", function() { return _alert_message__WEBPACK_IMPORTED_MODULE_8__["AlertMessageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertMessageComponent", function() { return _alert_message__WEBPACK_IMPORTED_MODULE_8__["AlertMessageComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertMessageModel", function() { return _alert_message__WEBPACK_IMPORTED_MODULE_8__["AlertMessageModel"]; });

/* harmony import */ var _global_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global-popup */ "./src/app/component/global-popup/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalPopupComponent", function() { return _global_popup__WEBPACK_IMPORTED_MODULE_9__["GlobalPopupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalPopupService", function() { return _global_popup__WEBPACK_IMPORTED_MODULE_9__["GlobalPopupService"]; });













/***/ }),

/***/ "./src/app/component/loader/index.ts":
/*!*******************************************!*\
  !*** ./src/app/component/loader/index.ts ***!
  \*******************************************/
/*! exports provided: LoaderComponent, LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.component */ "./src/app/component/loader/loader.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return _loader_component__WEBPACK_IMPORTED_MODULE_0__["LoaderComponent"]; });

/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/component/loader/loader.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return _loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]; });





/***/ }),

/***/ "./src/app/component/loader/loader.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/loader/loader.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-hidden {\r\n  display: none;\r\n}\r\n\r\n/*.loader-overlay {\r\n    position: absolute;\r\n    width:100%;\r\n    top:100px\t;\r\n    left: 100px;\r\n    opacity: 1;\r\n    z-index: 500000;\r\n}*/\r\n\r\n#loading-indicator {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-top: -50px;\r\n  margin-left: -50px;\r\n}\r\n\r\n.loader-overlay {\r\n  margin-top: -20px;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1000;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  left: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/loader/loader.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/loader/loader.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"(show) ? '': 'loader-hidden'\">\r\n  <div class=\"loader-overlay\">\r\n    <i [ngStyle]=\"{'font-size': loaderSize}\" class=\"fa fa-spinner fa-pulse\" id=\"loading-indicator\"></i>\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div style=\"position: relative; z-index: 10000; font-size: 32px\">\r\n  {{name}}\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/component/loader/loader.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/loader/loader.component.ts ***!
  \******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/component/loader/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService, cdf) {
        this.loaderService = loaderService;
        this.cdf = cdf;
        this.loaderSize = '60px';
        this.showChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.count = 0;
        console.log('this.loaderSize', this.loaderSize);
    }
    Object.defineProperty(LoaderComponent.prototype, "show", {
        get: function () {
            return this.isShowing;
        },
        set: function (val) {
            this.isShowing = val;
            this.showChange.emit(this.isShowing);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoaderComponent.prototype, "loaderStyle", {
        get: function () {
            console.log('this.loaderSize', this.loaderSize);
            return 'font-size:' + this.loaderSize + 'px;';
        },
        enumerable: true,
        configurable: true
    });
    LoaderComponent.prototype.ngOnChanges = function () {
        //   this.cdf.detectChanges();
    };
    LoaderComponent.prototype.ngOnInit = function () {
        if (!this.name) {
            console.warn('Loader must have a "name" attribute. In Think Project');
        }
        this.loaderService._register(this);
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.loaderService._unregister(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "loadingImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoaderComponent.prototype, "loaderSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LoaderComponent.prototype, "show", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoaderComponent.prototype, "showChange", void 0);
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/component/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/component/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/component/loader/loader.service.ts":
/*!****************************************************!*\
  !*** ./src/app/component/loader/loader.service.ts ***!
  \****************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderCache = new Set();
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype._register = function (loader) {
        this.loaderCache.add(loader);
    };
    LoaderService.prototype._unregister = function (loaderToRemove) {
        var _this = this;
        this.loaderCache.forEach(function (loader) {
            if (loader === loaderToRemove) {
                _this.loaderCache.delete(loader);
            }
        });
    };
    LoaderService.prototype.show = function (loaderName) {
        this.loaderCache.forEach(function (loader) {
            if (loader.name === loaderName) {
                ++loader.count;
                loader.show = true;
            }
            // console.log('loaderCache at show', loader.name, 'loader.count', loader.count)
        });
    };
    LoaderService.prototype.hide = function (loaderName) {
        this.loaderCache.forEach(function (loader) {
            if (loader.name === loaderName) {
                --loader.count;
                if (loader.count < 1) {
                    loader.show = false;
                }
            }
            // console.log('loaderCache at Hide', loader.name, 'loader.count', loader.count)
        });
    };
    LoaderService.prototype.showNow = function (loaderName) {
        this.loaderCache.forEach(function (loader) {
            if (loader.name === loaderName) {
                loader.count = 1;
                loader.show = true;
            }
            // console.log('loader Cache at showNow', loader.name, 'loader.count', loader.count)
        });
    };
    LoaderService.prototype.hideNow = function (loaderName) {
        this.loaderCache.forEach(function (loader) {
            if (loader.name === loaderName) {
                loader.count = 0;
                loader.show = false;
            }
            // console.log('loader Cache at hideNow', loader.name, 'loader.count', loader.count)
        });
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/component/modal/modal.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/modal/modal.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/modal/modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/modal/modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" [id]=\"id\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" [ngClass]=\"{'modal-lg': large}\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{title}}</h5>\r\n        <button *ngIf=\"upperCross\" type=\"button\" class=\"close crossIcon\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <ng-content>\r\n\r\n        </ng-content>\r\n\r\n        <br>\r\n        <div class=\"modal-footer\">\r\n\r\n\r\n          <ng-container *ngIf=\"buttons.length\">\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngFor=\"let button of buttons\" (click)=\"onButtonClick(button)\">{{button}}</button>\r\n          </ng-container>\r\n\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/modal/modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/modal/modal.component.ts ***!
  \****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(idGen) {
        var _this = this;
        this.idGen = idGen;
        this.upperCross = true;
        this.buttons = [];
        this.modalReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonsClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.show = function () {
            $("#" + _this.id).modal('show');
            if (_this.modalApi.onShow) {
                _this.modalApi.onShow();
            }
        };
        this.hide = function () {
            $("#" + _this.id).modal('hide');
        };
        this.id = this.idGen.generateNormalIDs('modal');
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.ngAfterViewInit = function () {
        this.modalApi = {
            show: this.show,
            hide: this.hide,
            onShow: null
        };
        this.modalReady.emit(this.modalApi);
    };
    ModalComponent.prototype.onButtonClick = function (button) {
        this.buttonsClick.emit(button);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "large", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "upperCross", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ModalComponent.prototype, "buttons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ModalComponent.prototype, "modalReady", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ModalComponent.prototype, "buttonsClick", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/component/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/component/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["IDGeneratorService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/component/ng-tabs/dynamic-tabs.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/ng-tabs/dynamic-tabs.directive.ts ***!
  \*************************************************************/
/*! exports provided: DynamicTabsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicTabsDirective", function() { return DynamicTabsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * This directive is used as an anchor to get access
 * to the ViewContainerRef which here is exposed via
 * the public member `viewContainer`
 *
 * Theres an ALTERNATIVE to explicitly using the anchor directive.
 * Read in the blog post
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicTabsDirective = /** @class */ (function () {
    function DynamicTabsDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    DynamicTabsDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dynamic-tabs]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], DynamicTabsDirective);
    return DynamicTabsDirective;
}());



/***/ }),

/***/ "./src/app/component/ng-tabs/index.ts":
/*!********************************************!*\
  !*** ./src/app/component/ng-tabs/index.ts ***!
  \********************************************/
/*! exports provided: TabComponent, TabsComponent, DynamicTabsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component */ "./src/app/component/ng-tabs/tab.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return _tab_component__WEBPACK_IMPORTED_MODULE_0__["TabComponent"]; });

/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component */ "./src/app/component/ng-tabs/tabs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return _tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"]; });

/* harmony import */ var _dynamic_tabs_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-tabs.directive */ "./src/app/component/ng-tabs/dynamic-tabs.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicTabsDirective", function() { return _dynamic_tabs_directive__WEBPACK_IMPORTED_MODULE_2__["DynamicTabsDirective"]; });






/***/ }),

/***/ "./src/app/component/ng-tabs/tab.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/ng-tabs/tab.component.ts ***!
  \****************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.active = false;
        this.isCloseable = false;
        this.disabled = false;
    }
    TabComponent.prototype.ngOnInit = function () {
        console.log('TabComponent', 'ngOnInit', this.tabId);
        if (this.tabId === undefined) {
            throw new Error('Tabs must have a "tabId" attribute.');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tabId'),
        __metadata("design:type", String)
    ], TabComponent.prototype, "tabId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tabTitle'),
        __metadata("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "isCloseable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "dataContext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "disabled", void 0);
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-tab',
            template: __webpack_require__(/*! ./tab.html */ "./src/app/component/ng-tabs/tab.html")
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/component/ng-tabs/tab.html":
/*!********************************************!*\
  !*** ./src/app/component/ng-tabs/tab.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!active\" class=\"pane\">\r\n  <ng-content></ng-content>\r\n  <ng-container *ngIf=\"template\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ person: dataContext }\">\r\n  </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/ng-tabs/tabs.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/component/ng-tabs/tabs.component.ts ***!
  \*****************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component */ "./src/app/component/ng-tabs/tab.component.ts");
/* harmony import */ var _dynamic_tabs_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-tabs.directive */ "./src/app/component/ng-tabs/dynamic-tabs.directive.ts");
/**
 * The main component that renders single TabComponent
 * instances.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsComponent = /** @class */ (function () {
    /*
      Alternative approach of using an anchor directive
      would be to simply get hold of a template variable
      as follows
    */
    // @ViewChild('container', {read: ViewContainerRef}) dynamicTabPleholder;
    function TabsComponent(_componentFactoryResolver) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this.dynamicTabs = [];
        this.selectTabName = null;
        this.onTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        console.log('tabs LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL');
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            console.log(this.tabs);
            var selectTabID_1 = null;
            if (this.selectTabName) {
                this.tabs.toArray()
                    .forEach(function (tab) {
                    if (tab.tabId === _this.selectTabName) {
                        selectTabID_1 = tab;
                    }
                    console.log(tab);
                });
            }
            console.log(selectTabID_1);
            if (selectTabID_1) {
                this.selectTab(selectTabID_1);
            }
            else if (!this.tabs.first.disabled) {
                this.selectTab(this.tabs.first);
            }
            else {
                this.selectTab(this.tabs.last);
            }
        }
    };
    TabsComponent.prototype.selectTabWithID = function (newSelectTabId) {
        console.log(this.tabs);
        var selectTabID = null;
        if (newSelectTabId) {
            this.tabs.toArray().forEach(function (tab) {
                if (tab.tabId === newSelectTabId) {
                    selectTabID = tab;
                }
                console.log(tab);
            });
        }
        console.log(selectTabID);
        if (selectTabID) {
            this.selectTab(selectTabID);
        }
    };
    TabsComponent.prototype.isTabCreated = function (tabId) {
        var retVal = -1;
        var tabIndex = 0;
        for (var _i = 0, _a = this.dynamicTabs; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.tabId === tabId) {
                retVal = tabIndex;
                break;
            }
            tabIndex++;
        }
        return retVal;
    };
    TabsComponent.prototype.openTab = function (title, template, data, isCloseable, tabId) {
        if (isCloseable === void 0) { isCloseable = false; }
        var existTab = this.isTabCreated(tabId);
        if (existTab > -1) {
            // set it active
            this.selectTab(this.dynamicTabs[existTab]);
        }
        else {
            // get a component factory for our TabComponent
            var componentFactory = this._componentFactoryResolver.resolveComponentFactory(_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]);
            // fetch the view container reference from our anchor directive
            var viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
            // alternatively...
            // let viewContainerRef = this.dynamicTabPlder;
            // create a component instance
            var componentRef = viewContainerRef.createComponent(componentFactory);
            // set the according properties on our component instance
            var instance = componentRef.instance;
            instance.title = title;
            instance.template = template;
            instance.dataContext = data;
            instance.isCloseable = isCloseable;
            instance.tabId = tabId;
            // remember the dynamic component for rendering the
            // tab navigation headers
            this.dynamicTabs.push(componentRef.instance);
            // set it active
            this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
        }
    };
    TabsComponent.prototype.selectTab = function (pTab) {
        var _this = this;
        console.log(pTab);
        if (pTab) {
            // if (!pTab || pTab.tabId === 'INSIGHTTAB') {
            //     //return;
            // }
            // deactivate all tabs
            this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
            this.dynamicTabs.forEach(function (tab) { return tab.active = false; });
            // activate the tab the user has clicked on.
            pTab.active = true;
            console.log('tag getting change here....................');
            setTimeout(function () {
                _this.onTabChange.emit(pTab.tabId);
            }, 100);
        }
    };
    TabsComponent.prototype.selectLastTab = function () {
        if (this.tabs) {
            this.selectTab(this.tabs.last);
        }
    };
    TabsComponent.prototype.closeTab = function (tab) {
        for (var i = 0; i < this.dynamicTabs.length; i++) {
            if (this.dynamicTabs[i] === tab) {
                // remove the tab from our array
                this.dynamicTabs.splice(i, 1);
                // destroy our dynamically created component again
                var viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
                // let viewContainerRef = this.dynamicTabPlaceholder;
                viewContainerRef.remove(i);
                // set tab index to 1st one
                if (this.dynamicTabs.length < 1) {
                    this.selectTab(this.tabs.first);
                }
                else {
                    this.selectTab(this.dynamicTabs[0]);
                }
                break;
            }
        }
    };
    TabsComponent.prototype.closeActiveTab = function () {
        var activeTabs = this.dynamicTabs.filter(function (tab) { return tab.active; });
        if (activeTabs.length > 0) {
            // close the 1st active tab (should only be one at a time)
            this.closeTab(activeTabs[0]);
        }
    };
    TabsComponent.prototype.closeTab2 = function (tabId) {
        for (var i = 0; i < this.dynamicTabs.length; i++) {
            if (this.dynamicTabs[i].tabId === tabId) {
                // remove the tab from our array
                this.dynamicTabs.splice(i, 1);
                var viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
                // let viewContainerRef = this.dynamicTabPlaceholder;
                viewContainerRef.remove(i);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabsComponent.prototype, "tabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_dynamic_tabs_directive__WEBPACK_IMPORTED_MODULE_2__["DynamicTabsDirective"]),
        __metadata("design:type", _dynamic_tabs_directive__WEBPACK_IMPORTED_MODULE_2__["DynamicTabsDirective"])
    ], TabsComponent.prototype, "dynamicTabPlaceholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "selectTabName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "onTabChange", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-tabs',
            template: __webpack_require__(/*! ./tabs.html */ "./src/app/component/ng-tabs/tabs.html"),
            styles: [__webpack_require__(/*! ./tabs.css */ "./src/app/component/ng-tabs/tabs.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/component/ng-tabs/tabs.css":
/*!********************************************!*\
  !*** ./src/app/component/ng-tabs/tabs.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-close {\r\n  color: gray;\r\n  text-align: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-tabs {\r\n  border: 0px;\r\n}\r\n\r\n.nav-tabs li {\r\n  margin-right: 2px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/ng-tabs/tabs.html":
/*!*********************************************!*\
  !*** ./src/app/component/ng-tabs/tabs.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs custTabs\">\r\n  <li *ngFor=\"let tab of tabs\" (click)=\"(tab.disabled)?'':selectTab(tab)\" [class.active]=\"tab.active\">\r\n    <a class='nav-link' href=\"javascript:;\" [class.active]=\"tab.active\" [ngClass]=\"{\r\n            'disabled':tab.disabled\r\n          }\">\r\n      <span>{{tab.title}}</span>\r\n    </a>\r\n  </li>\r\n  <!-- dynamic tabs -->\r\n  <li *ngFor=\"let tab of dynamicTabs\" (click)=\"(tab.disabled)?'':selectTab(tab)\" [class.active]=\"tab.active\">\r\n    <a class='nav-link' href=\"javascript:;\" [class.active]=\"tab.active\" [ngClass]=\"{\r\n            'disabled':tab.disabled\r\n          }\">\r\n      <span>{{tab.title}}</span>\r\n      <!-- <span class=\"tab-close\" *ngIf=\"tab.isCloseable\" (click)=\"closeTab(tab)\">x</span> -->\r\n    </a>\r\n  </li>\r\n</ul>\r\n<ng-content></ng-content>\r\n<ng-template dynamic-tabs #container></ng-template>\r\n"

/***/ }),

/***/ "./src/app/component/pagination/pagination.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/pagination/pagination.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-link:focus,\r\n.page-link:hover {\r\n  border: 0px solid #fff !important;\r\n  border-radius: 4px;\r\n  color: #000\r\n}\r\n\r\n.page-link {\r\n  margin: 0 1px;\r\n  color: #272727\r\n}\r\n\r\n.page-item.active .page-link {\r\n  color: #fff !important;\r\n  border: 0px solid #ddd !important;\r\n  border-radius: 4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/pagination/pagination.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/pagination/pagination.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"agPagination float-left col-12 px-0 d-flex justify-content-end \">\r\n  <div class=\"col-md-2 position-relative p-0\">\r\n    <label class=\"float-left pt-1\">Jump to:</label>\r\n    <input class=\"form-control form-control-sm float-left mr-1\" style=\"width:80px;\" [(ngModel)]=\"jumpTo\" placeholder=\"Page no.\"\r\n      type=\"text\" (keyup)=\"onJumpTo();\">\r\n    <span class=\"position-absolute text-danger mt-4 pt-2\" style=\"left:0;\">{{pageMsg}}</span>\r\n  </div>\r\n\r\n  <!-- <div class=\"pt-2 mr-auto mb-0\">\r\n\r\n    <span class=\"ag-paging-row-summary-panel\">\r\n      Showing\r\n      <span>{{showingStart}}</span> to\r\n      <span>{{showingEnd}}</span> of\r\n      <span>{{totalEntries}}</span> entries\r\n    </span>\r\n  </div> -->\r\n  <ul class=\"pagination mt-0 \">\r\n    <li (click)=\"onPageClick('first', firstPage)\" #firstPage [class.disabled]=\"enablePre\" class=\"page-item\">\r\n      <a href=\"javascript:;\" class=\"page-link\">\r\n        <i class=\"fa fa-backward\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </li>\r\n\r\n    <li (click)=\"onPageClick('prev', prePage)\" #prePage [class.disabled]=\"enablePre\" class=\"page-item \">\r\n      <a href=\"javascript:;\" class=\"page-link\">\r\n        <i class=\"fa fa-caret-left\" aria-hidden=\"true \"></i>\r\n      </a>\r\n    </li>\r\n\r\n    <ng-container *ngFor=\"let pageNum of pagesArray \">\r\n      <li (click)=\"onPageClick(pageNum, me) \" #me class=\"page-item \">\r\n        <a href=\"javascript:;\" class=\"page-link \">{{pageNum}}</a>\r\n      </li>\r\n    </ng-container>\r\n\r\n    <li (click)=\"onPageClick( 'next', nextPage) \" #nextPage [class.disabled]=\"enableNext \" class=\"page-item \">\r\n      <a href=\"javascript:;\" class=\"page-link \">\r\n        <i class=\"fa fa-caret-right\" aria-hidden=\"true \"></i>\r\n      </a>\r\n    </li>\r\n\r\n    <li (click)=\"onPageClick( 'last', lastPage) \" #lastPage [class.disabled]=\"enableNext \" class=\"page-item \">\r\n      <a href=\"javascript:;\" class=\"page-link \">\r\n        <i class=\"fa fa-forward \" aria-hidden=\"true \"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/pagination/pagination.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/pagination/pagination.component.ts ***!
  \**************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.totalPages = null;
        this.maxPagesSize = null;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newSetup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.totalEntries = null;
        this.pageSize = null;
        this.jumpTo = null;
        this.pageMsg = null;
        this.showingStart = 1;
        this.showingEnd = 10;
        this.enableNext = true;
        this.enablePre = true;
        this.defaultMaxPageSize = 5;
        this.pagesArray = [];
        this.lastSelectedPageEle = null;
        this.lastSelectedPage = 0;
        this.changeFlag = 0;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newSetup.subscribe(function (num) {
            _this.totalPages = num;
            _this.generatePages();
        });
    };
    PaginationComponent.prototype.generatePages = function (pageNum) {
        var _this = this;
        if (pageNum === void 0) { pageNum = 1; }
        this.jumpTo = null;
        this.maxPagesSize = this.maxPagesSize || this.defaultMaxPageSize;
        var pages = this.maxPagesSize < this.totalPages ? this.maxPagesSize : this.totalPages;
        this.pagesArray = [];
        for (var i = 0; i < pages || 0; i++) {
            this.pagesArray.push(i + 1);
        }
        if (this.totalPages) {
            setTimeout(function () {
                _this.highLightElement(pageNum);
            }, 100);
        }
    };
    PaginationComponent.prototype.highLightElement = function (pageNum) {
        var _this = this;
        this.liEle._results.forEach(function (element) {
            element.nativeElement.classList.remove('active');
        });
        pageNum = this.generateNewPageNumbers(pageNum);
        this.setShowingEntries(pageNum);
        var selectedPageEle = this.findElement(pageNum);
        setTimeout(function () {
            if (_this.liEle._results[selectedPageEle]) {
                _this.liEle._results[selectedPageEle].nativeElement.classList.add('active');
            }
        }, 100);
        this.pageChanged.emit(pageNum);
    };
    PaginationComponent.prototype.onPageClick = function (pageNum, ele) {
        this.jumpTo = '';
        this.highLightElement(pageNum);
    };
    PaginationComponent.prototype.setShowingEntries = function (pageNum) {
        if ((typeof pageNum === 'number') && (typeof this.pageSize === 'number')) {
            this.showingStart = ((pageNum - 1) * this.pageSize) + 1;
            this.showingEnd = ((pageNum) * this.pageSize);
            if (this.showingEnd > this.totalEntries) {
                this.showingEnd = this.totalEntries;
                this.enableNext = true;
            }
            else {
                this.enableNext = false;
            }
            if (this.showingStart === 1) {
                this.enablePre = true;
            }
            else {
                this.enablePre = false;
            }
        }
    };
    PaginationComponent.prototype.findElement = function (pageNum) {
        var retValue = null;
        this.pagesArray.forEach(function (element, idx) {
            if (element === pageNum) {
                retValue = idx;
            }
        });
        return retValue;
    };
    PaginationComponent.prototype.generateNewPageNumbers = function (number) {
        switch (number) {
            case 'first':
                number = 1;
                break;
            case 'last':
                number = this.totalPages;
                break;
            case 'next':
                number = this.lastSelectedPage === this.totalPages ? this.lastSelectedPage : this.lastSelectedPage + 1;
                this.changeFlag = 1;
                break;
            case 'prev':
                number = this.lastSelectedPage === 1 ? this.lastSelectedPage : this.lastSelectedPage - 1;
                break;
        }
        if ((this.totalPages >= number) && (number !== 0)) {
            this.pageMsg = null;
            this.changeFlag = 0;
            this.lastSelectedPage = number;
            var pages = this.maxPagesSize < this.totalPages ? this.maxPagesSize : this.totalPages;
            if (this.pagesArray.includes(number)) {
            }
            else if (number <= this.pagesArray[pages - 1]) {
                this.pagesArray = this.pagesArray.map(function (num, index) {
                    return number + index;
                });
            }
            else if (this.totalPages >= (number)) {
                this.pagesArray = this.pagesArray.map(function (num, index) {
                    return number - index;
                });
                this.pagesArray = this.pagesArray.reverse();
            }
            // this.pagesArray = this.pagesArray.reverse();
            return number;
        }
        else {
            if (number !== 0) {
                this.pageMsg = 'This page not available!';
            }
            return this.lastSelectedPage;
        }
    };
    PaginationComponent.prototype.onJumpTo = function () {
        this.highLightElement(Number(this.jumpTo));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('me'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "liEle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalPages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "maxPagesSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "pageChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], PaginationComponent.prototype, "newSetup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalEntries", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "pageSize", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/component/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/component/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/component/select/select.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/select/select.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txtEllipsis {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/select/select.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/select/select.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ss-multiselect-dropdown #myMultiSector [options]=\"myOptions\" [(ngModel)]=\"optionsModel\" [texts]=\"myTexts\" [settings]=\"mySettings\"\r\n  [disabled]=\"isDisabled\" (ngModelChange)=\"onChange($event)\" (onRemoved)=\"onRemove($event)\">\r\n</ss-multiselect-dropdown>\r\n"

/***/ }),

/***/ "./src/app/component/select/select.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/select/select.component.ts ***!
  \******************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting */ "./src/app/component/select/setting.ts");
/* harmony import */ var _select_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.service */ "./src/app/component/select/select.service.ts");
/* harmony import */ var _core_comp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core-comp */ "./src/app/component/core-comp/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared */ "./src/app/core/shared/index.ts");
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






var MY_NG_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SelectComponent; }),
    multi: true,
};
var MY_NG_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SelectComponent; }),
    multi: true,
};
var SelectComponent = /** @class */ (function (_super) {
    __extends(SelectComponent, _super);
    function SelectComponent(selectSer, cdr) {
        var _this = _super.call(this) || this;
        _this.selectSer = selectSer;
        _this.cdr = cdr;
        _this.mulitSelect = false;
        _this.outputKey = 'key';
        _this.placeholder = 'Select a Value';
        _this.url = null;
        _this.apiKey = null;
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.myOptions = [];
        _this.mySettings = Object.assign({}, _setting__WEBPACK_IMPORTED_MODULE_1__["mySettings"]);
        _this.myTexts = Object.assign({}, _setting__WEBPACK_IMPORTED_MODULE_1__["myTexts"]);
        return _this;
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    SelectComponent.prototype.ngOnChanges = function () {
        this.convertToSelectData();
        this.enableMultiSelect();
        this.setPlaceHolder();
        this.cdr.detectChanges();
        if (this.ifClearReq === false) {
            this.myTexts['uncheckAll'] = '';
        }
        this.resetMysettingNtext();
    };
    SelectComponent.prototype.assignValueToDisplay = function (obj) {
        var _this = this;
        console.log('assignValueToDisplay', this.optionsModel);
        if (Array.isArray(obj)) {
            this.optionsModel = [];
            obj.forEach(function (item) {
                _this.optionsModel.push(item['id'] || item);
            });
            this.optionsModel = Array.from(this.optionsModel);
        }
        else if (obj === null || obj === undefined || obj === '') {
            this.optionsModel = [];
        }
        else {
            this.optionsModel = [obj];
        }
        this.optionsModel = Array.from(this.optionsModel);
        this.cdr.detectChanges();
        console.log('assignValueToDisplay', this.optionsModel);
        return false;
    };
    SelectComponent.prototype.convertToSelectData = function () {
        this.myOptions = this.selectSer.convertToSelectData(this.Data);
        this.cdr.detectChanges();
    };
    SelectComponent.prototype.onChange = function (val) {
        this.value = this.selectSer.findItems(this.myOptions, this.outputKey, val);
        this.emitValues();
    };
    SelectComponent.prototype.onRemove = function (val) {
        this.remove.emit('');
    };
    SelectComponent.prototype.emitValues = function () {
        this.emittedValues = this.beforePropagateChange();
        if (_core_shared__WEBPACK_IMPORTED_MODULE_5__["Utils"].isEmpty(this.emittedValues)) {
        }
        else {
            this.propagateChange(this.emittedValues);
            this.change.emit(this.emittedValues);
        }
        console.log(this.emittedValues, this.optionsModel);
    };
    SelectComponent.prototype.beforePropagateChange = function () {
        if (this.mulitSelect) {
            return this.value;
        }
        else {
            return this.value[0] || null;
        }
    };
    SelectComponent.prototype.enableMultiSelect = function () {
        if (this.mulitSelect) {
            this.mySettings['closeOnSelect'] = false;
            this.mySettings['autoUnselect'] = false;
        }
        else {
            this.mySettings['selectionLimit'] = 1;
            this.mySettings['autoUnselect'] = true;
        }
    };
    SelectComponent.prototype.setPlaceHolder = function () {
        if (this.placeholder) {
            this.myTexts['defaultTitle'] = this.placeholder;
        }
    };
    SelectComponent.prototype.getData = function () {
        var _this = this;
        if (this.url) {
            this.selectSer.getData(this.url, this.params)
                .subscribe(function (data) {
                _this.myOptions = _this.selectSer.convertToSelectData(data[_this.apiKey]);
                _this.value = _this.myOptions[0];
                _this.emitValues();
            });
        }
    };
    SelectComponent.prototype.resetMysettingNtext = function () {
        this.mySettings = Object.assign({}, this.mySettings);
        this.myTexts = Object.assign({}, this.myTexts);
        this.cdr.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "Data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "mulitSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "outputKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "params", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SelectComponent.prototype, "isDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "apiKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SelectComponent.prototype, "ifClearReq", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelectComponent.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelectComponent.prototype, "remove", void 0);
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/component/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.css */ "./src/app/component/select/select.component.css")],
            providers: [
                MY_NG_VALUE_ACCESSOR,
                MY_NG_VALIDATORS
            ]
        }),
        __metadata("design:paramtypes", [_select_service__WEBPACK_IMPORTED_MODULE_2__["SelectService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SelectComponent);
    return SelectComponent;
}(_core_comp__WEBPACK_IMPORTED_MODULE_3__["CustomFormControl"]));



/***/ }),

/***/ "./src/app/component/select/select.service.ts":
/*!****************************************************!*\
  !*** ./src/app/component/select/select.service.ts ***!
  \****************************************************/
/*! exports provided: SelectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectService", function() { return SelectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/base */ "./src/app/core/base/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
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



var SelectService = /** @class */ (function (_super) {
    __extends(SelectService, _super);
    function SelectService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    SelectService.prototype.getData = function (url, params) {
        var retValue = '';
        var keys = Object.keys(params);
        keys.forEach(function (key) {
            var val = params[key];
            if (val) {
                retValue += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(val);
            }
        });
        retValue = retValue.substring(1);
        return this.getDataFromAPI(url, retValue);
    };
    SelectService.prototype.convertToSelectData = function (data) {
        if (data && Array.isArray(data.data)) {
            var optionModalData = data.data.map(function (item) {
                return {
                    id: item['key'],
                    name: item['display'],
                    extra: item['extra'],
                    description: item['description']
                };
            });
            return optionModalData;
        }
        else {
            return [];
        }
    };
    SelectService.prototype.convertToSelectDataReverse = function (data) {
        var optionModalData = data.map(function (item) {
            return {
                key: item['id'],
                display: item['name'],
                extra: item['extra'],
                description: item['description']
            };
        });
        return optionModalData;
    };
    SelectService.prototype.findItems = function (data, outputKey, values) {
        var retValue = data.filter(function (item) {
            for (var i = 0; i < values.length; i++) {
                var element = values[i];
                if (element === item['id']) {
                    return true;
                }
            }
            return false;
        });
        if (outputKey === 'complete') {
            return this.convertToSelectDataReverse(retValue);
        }
        else {
            var temp = this.convertToSelectDataReverse(retValue);
            var newRet = temp.map(function (item) {
                return item[outputKey];
            });
            return newRet;
        }
    };
    SelectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SelectService);
    return SelectService;
}(_core_base__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/component/select/setting.ts":
/*!*********************************************!*\
  !*** ./src/app/component/select/setting.ts ***!
  \*********************************************/
/*! exports provided: mySettings, myTexts, myOptions, DataDropDownOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mySettings", function() { return mySettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myTexts", function() { return myTexts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myOptions", function() { return myOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDropDownOptions", function() { return DataDropDownOptions; });
var mySettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: false,
    containerClasses: 'containerDiv custDropdown',
    itemClasses: 'itemClassMultiSelect',
    closeOnSelect: true,
    autoUnselect: true,
    showUncheckAll: true,
    closeOnClickOutside: true
};
var myTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Clear',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Result Not Found.',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select a value',
    allSelected: 'All selected',
};
var myOptions = [];
var DataDropDownOptions = /** @class */ (function () {
    function DataDropDownOptions() {
        this.multipleState = false;
        this.sizeCount = 0;
    }
    return DataDropDownOptions;
}());



/***/ }),

/***/ "./src/app/component/setup-top-menu-bar/setup-top-menu-bar.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/component/setup-top-menu-bar/setup-top-menu-bar.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/setup-top-menu-bar/setup-top-menu-bar.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/component/setup-top-menu-bar/setup-top-menu-bar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar sidebar-offcanvas\" id=\"sidebar\">\r\n  <ul class=\"nav\">\r\n    <li class=\"nav-item nav-profile\">\r\n      <a href=\"#\" class=\"nav-link\">\r\n        <div class=\"nav-profile-image\">\r\n          <img src=\"assets/images/faces/face1.jpg\" alt=\"profile\">\r\n          <span class=\"login-status online\"></span>\r\n          <!--change to offline or busy as needed-->\r\n        </div>\r\n        <div class=\"nav-profile-text d-flex flex-column\">\r\n          <span class=\"font-weight-bold mb-2\">David Grey. H</span>\r\n          <span class=\"text-secondary text-small\">Project Manager</span>\r\n        </div>\r\n        <i class=\"mdi mdi-bookmark-check text-success nav-profile-badge\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"index.html\">\r\n        <span class=\"menu-title\">Dashboard</span>\r\n        <i class=\"mdi mdi-home menu-icon\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#ui-basic\" aria-expanded=\"false\" aria-controls=\"ui-basic\">\r\n        <span class=\"menu-title\">Basic UI Elements</span>\r\n        <i class=\"menu-arrow\"></i>\r\n        <i class=\"mdi mdi-crosshairs-gps menu-icon\"></i>\r\n      </a>\r\n      <div class=\"collapse\" id=\"ui-basic\">\r\n        <ul class=\"nav flex-column sub-menu\">\r\n          <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/ui-features/buttons.html\">Buttons</a></li>\r\n          <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/ui-features/typography.html\">Typography</a></li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"pages/icons/mdi.html\">\r\n        <span class=\"menu-title\">Icons</span>\r\n        <i class=\"mdi mdi-contacts menu-icon\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"pages/forms/basic_elements.html\">\r\n        <span class=\"menu-title\">Forms</span>\r\n        <i class=\"mdi mdi-format-list-bulleted menu-icon\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"pages/charts/chartjs.html\">\r\n        <span class=\"menu-title\">Charts</span>\r\n        <i class=\"mdi mdi-chart-bar menu-icon\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"pages/tables/basic-table.html\">\r\n        <span class=\"menu-title\">Tables</span>\r\n        <i class=\"mdi mdi-table-large menu-icon\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#general-pages\" aria-expanded=\"false\" aria-controls=\"general-pages\">\r\n        <span class=\"menu-title\">Sample Pages</span>\r\n        <i class=\"menu-arrow\"></i>\r\n        <i class=\"mdi mdi-medical-bag menu-icon\"></i>\r\n      </a>\r\n      <div class=\"collapse\" id=\"general-pages\">\r\n        <ul class=\"nav flex-column sub-menu\">\r\n          <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/samples/blank-page.html\"> Blank Page </a></li>\r\n          <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/samples/login.html\"> Login </a></li>\r\n          <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/samples/register.html\"> Register </a></li>\r\n          <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/samples/error-404.html\"> 404 </a></li>\r\n          <li class=\"nav-item\"> <a class=\"nav-link\" href=\"pages/samples/error-500.html\"> 500 </a></li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item sidebar-actions\">\r\n      <span class=\"nav-link\">\r\n        <div class=\"border-bottom\">\r\n          <h6 class=\"font-weight-normal mb-3\">Projects</h6>\r\n        </div>\r\n        <button class=\"btn btn-block btn-lg btn-gradient-primary mt-4\">+ Add a project</button>\r\n        <div class=\"mt-4\">\r\n          <div class=\"border-bottom\">\r\n            <p class=\"text-secondary\">Categories</p>\r\n          </div>\r\n          <ul class=\"gradient-bullet-list mt-4\">\r\n            <li>Free</li>\r\n            <li>Pro</li>\r\n          </ul>\r\n        </div>\r\n      </span>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/component/setup-top-menu-bar/setup-top-menu-bar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/setup-top-menu-bar/setup-top-menu-bar.component.ts ***!
  \******************************************************************************/
/*! exports provided: SetupTopMenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupTopMenuBarComponent", function() { return SetupTopMenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_custom_modal_pop_up_custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/custom-modal-pop-up/custom-modal-pop-up.service */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.service.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_base_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/base/base.service */ "./src/app/core/base/base.service.ts");
/* harmony import */ var _core_guard_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/guard/guard.service */ "./src/app/core/guard/guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SetupTopMenuBarComponent = /** @class */ (function () {
    function SetupTopMenuBarComponent(router, customModalPopService, globalProcessRoutingService, baseService, grdSer) {
        this.router = router;
        this.customModalPopService = customModalPopService;
        this.globalProcessRoutingService = globalProcessRoutingService;
        this.baseService = baseService;
        this.grdSer = grdSer;
    }
    SetupTopMenuBarComponent.prototype.ngOnInit = function () {
    };
    SetupTopMenuBarComponent.prototype.myChangeHandler = function (value) {
        // this.pathArr = [];
        // this.pathArr.push(value);
    };
    SetupTopMenuBarComponent.prototype.clickEvent = function (elm) {
        elm.click();
    };
    SetupTopMenuBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-top-menu-bar',
            template: __webpack_require__(/*! ./setup-top-menu-bar.component.html */ "./src/app/component/setup-top-menu-bar/setup-top-menu-bar.component.html"),
            styles: [__webpack_require__(/*! ./setup-top-menu-bar.component.css */ "./src/app/component/setup-top-menu-bar/setup-top-menu-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _component_custom_modal_pop_up_custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__["CustomModalPopUpService"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["GlobalProcessRoutingService"],
            _core_base_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            _core_guard_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]])
    ], SetupTopMenuBarComponent);
    return SetupTopMenuBarComponent;
}());



/***/ }),

/***/ "./src/app/component/top-menu-bar/top-menu-bar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/top-menu-bar/top-menu-bar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu-close {\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/top-menu-bar/top-menu-bar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/top-menu-bar/top-menu-bar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-brand-wrapper fixed-top\">\r\n    <a class=\"navbar-brand brand-logo\" href=\"\"><img src=\"https://greatminds.mpstechnologies.com/GreatMinds/assets/images/brand-logo-home.svg\" alt=\"logo\" /></a>\r\n     <!-- <a class=\"navbar-brand brand-logo-mini\" href=\"\"><img src=\"assets/images/brand-logo-home.svg\" alt=\"logo\" /></a> -->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse navbar-menu-wrapper\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto col-4\">\r\n        <li class=\"nav-item\">\r\n          <h4 class=\"nav-link m-0 ml-n4\" href=\"#\">Art Log Automation</h4>\r\n        </li>\r\n        \r\n      </ul>\r\n      \r\n      <ul class=\"navbar-nav navbar-nav-right\">\r\n        <li class=\"nav-item nav-profile dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" id=\"profileDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n            <div class=\"nav-profile-img\">\r\n              <img src=\"assets/images/faces-clipart/pic-2.png\" alt=\"image\">\r\n              <span class=\"availability-status online\"></span>\r\n            </div>\r\n            <div class=\"nav-profile-text\">\r\n              <p class=\"mb-1 text-white\">{{auth.name}}</p>\r\n              \r\n            </div>\r\n          </a>\r\n          <div class=\"dropdown-menu navbar-dropdown\" aria-labelledby=\"profileDropdown\">\r\n           \r\n            <a class=\"dropdown-item\">\r\n                <strong>{{auth.roleName}}</strong> </a>\r\n           \r\n            <div class=\"dropdown-divider\"> </div>\r\n            <a class=\"dropdown-item\" (click)=\"logout()\">\r\n              <i class=\"pi pi-sign-out mr-2 text-primary\"></i>  </a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/component/top-menu-bar/top-menu-bar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/top-menu-bar/top-menu-bar.component.ts ***!
  \******************************************************************/
/*! exports provided: TopMenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuBarComponent", function() { return TopMenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_custom_modal_pop_up_custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/custom-modal-pop-up/custom-modal-pop-up.service */ "./src/app/component/custom-modal-pop-up/custom-modal-pop-up.service.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/index */ "./src/app/core/shared/index.ts");
/* harmony import */ var _core_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/base */ "./src/app/core/base/index.ts");
/* harmony import */ var _core_guard_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/guard/guard.service */ "./src/app/core/guard/guard.service.ts");
/* harmony import */ var _top_menu_bar_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-menu-bar.model */ "./src/app/component/top-menu-bar/top-menu-bar.model.ts");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _core_shared_constant_url_constants_customer_services_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/shared/constant/url-constants/customer-services.constants */ "./src/app/core/shared/constant/url-constants/customer-services.constants.ts");
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










var TopMenuBarComponent = /** @class */ (function (_super) {
    __extends(TopMenuBarComponent, _super);
    function TopMenuBarComponent(httpService, router, customModalPopService, globalProcessRoutingService, baseService, grdSer, renderer, el) {
        var _this = _super.call(this, baseService, router) || this;
        _this.httpService = httpService;
        _this.router = router;
        _this.customModalPopService = customModalPopService;
        _this.globalProcessRoutingService = globalProcessRoutingService;
        _this.baseService = baseService;
        _this.grdSer = grdSer;
        _this.renderer = renderer;
        _this.el = el;
        _this.showHidePopup = false;
        _this.NAME_NEW_PROCESS = 'NEW_PROCESS';
        _this.NAME_PROCESS_TYPE = 'PROCESS_TYPE';
        _this.NAME_PROCESS_DETAILS = 'NAME_PROCESS_DETAILS';
        // click = 0;
        _this.moduleSeleted = 0;
        _this.auth = {};
        _this.docRefFlag = true;
        return _this;
    }
    TopMenuBarComponent.prototype.logout = function () {
        var _this = this;
        debugger;
        this.httpService.extractPostData(_core_shared_constant_url_constants_customer_services_constants__WEBPACK_IMPORTED_MODULE_9__["CustomerServicesUrls"].SMARTSHEET_LOGOUT, null, null).subscribe(function (data) {
            debugger;
            console.log("getting data=>", data);
            localStorage.removeItem('UserDetails');
            localStorage.clear();
            localStorage.setItem('isLogin', 'false');
            _this.router.navigate(['/']);
        });
    };
    TopMenuBarComponent.prototype.searchByjobKey = function (evt) {
        debugger;
        _core_shared_index__WEBPACK_IMPORTED_MODULE_4__["SessionObject"].setJobKey(this.jobkey);
    };
    TopMenuBarComponent.prototype.initSearchModels = function () {
        this.topMenuBarModel = new _top_menu_bar_model__WEBPACK_IMPORTED_MODULE_7__["TopMenuBarModel"]();
    };
    TopMenuBarComponent.prototype.ngOnInit = function () {
        this.auth = _core_shared_index__WEBPACK_IMPORTED_MODULE_4__["SessionObject"].getUserDetails();
    };
    // getServiceUrl(name): any {
    //   if (name === this.NAME_NEW_PROCESS) {
    //     return ProcessUrls.TK_ADD_NEW_PROCESS_URL;
    //   } else if (name === this.NAME_PROCESS_TYPE) {
    //     return ProcessUrls.TK_PROCESS_TYPE_URL;
    //   }
    // }
    TopMenuBarComponent.prototype.getNonSearchModelParams = function (name) {
        if (name === this.NAME_NEW_PROCESS) {
            var obj = {
                processType: this.pathArr
            };
            return obj;
        }
    };
    TopMenuBarComponent.prototype.clickEvent = function (elm) {
        elm.click();
    };
    TopMenuBarComponent.prototype.resetClick = function () {
        this.topMenuBarModel.processType.value = '';
    };
    TopMenuBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-menu-bar',
            template: __webpack_require__(/*! ./top-menu-bar.component.html */ "./src/app/component/top-menu-bar/top-menu-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-menu-bar.component.css */ "./src/app/component/top-menu-bar/top-menu-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _component_custom_modal_pop_up_custom_modal_pop_up_service__WEBPACK_IMPORTED_MODULE_2__["CustomModalPopUpService"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["GlobalProcessRoutingService"],
            _core_base__WEBPACK_IMPORTED_MODULE_5__["BaseService"],
            _core_guard_guard_service__WEBPACK_IMPORTED_MODULE_6__["GuardService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TopMenuBarComponent);
    return TopMenuBarComponent;
}(_core_base__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/component/top-menu-bar/top-menu-bar.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/top-menu-bar/top-menu-bar.model.ts ***!
  \**************************************************************/
/*! exports provided: TopMenuBarModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuBarModel", function() { return TopMenuBarModel; });
var TopMenuBarModel = /** @class */ (function () {
    function TopMenuBarModel() {
        this.processType = {
            value: '',
            defaultValue: null,
            label: 'processType',
            apiKey: 'processType',
            placeholder: '',
        };
    }
    return TopMenuBarModel;
}());



/***/ }),

/***/ "./src/app/core/base/base.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/base/base.component.ts ***!
  \*********************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/app/core/shared/index.ts");
/* harmony import */ var _base_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.util */ "./src/app/core/base/base.util.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseComponent = /** @class */ (function () {
    function BaseComponent(baseService, router) {
        this.baseService = baseService;
        this.router = router;
        this.baseForm = null;
        this.gridOptions = {};
        this.jsonbody = {};
        this.initSearchModels();
    }
    Object.defineProperty(BaseComponent, "sessionObject", {
        get: function () {
            return _shared__WEBPACK_IMPORTED_MODULE_1__["ProjectUtils"].getSessionObject();
        },
        enumerable: true,
        configurable: true
    });
    BaseComponent.changeLoaderState = function (loaders, state) {
        if (Array.isArray(loaders)) {
            loaders.forEach(function (loader) {
                loader.show = state;
            });
        }
    };
    BaseComponent.prototype.isFormValid = function (name) {
        var skipPhone = false;
        var form = this.getForm(name);
        if (form === undefined) {
            return true;
        }
        else if (form.status === 'INVALID') {
            var controls = Object.keys(form.controls);
            controls.forEach(function (control) {
                if (form.controls[control].status === 'INVALID') {
                    if (control === 'phone1' || control === 'phone2') {
                        skipPhone = true;
                    }
                    console.warn(control);
                }
            });
            if (skipPhone === false) {
                return false;
            }
            else {
                return true;
            }
        }
        else if (form.status === 'VALID') {
            return true;
        }
    };
    BaseComponent.prototype.getForm = function (name) {
        return this.baseForm;
        // throw new Error('Please provide form for ' + name);
    };
    BaseComponent.prototype.ngOnInit = function () {
        this.xtBaseOnInit();
    };
    BaseComponent.prototype.xtBaseOnInit = function () {
    };
    BaseComponent.prototype.navigateTo = function (value) {
        this.router.navigate([value]);
    };
    BaseComponent.prototype.ngAfterViewInit = function () {
        this.xtBaseAfterViewInit();
    };
    BaseComponent.prototype.xtBaseAfterViewInit = function () {
    };
    BaseComponent.prototype.initSearchModels = function () {
    };
    BaseComponent.prototype.getSearchModel = function (name) {
    };
    BaseComponent.prototype.setSearchModel = function (name) {
    };
    BaseComponent.prototype.ngOnDestroy = function () {
        this.xtBaseOnDestroy();
    };
    BaseComponent.prototype.xtBaseOnDestroy = function () {
    };
    BaseComponent.prototype.setColumnDef = function (name) {
        return [];
    };
    BaseComponent.prototype.doOnGridReady = function (name) {
        this.xtBaseDoOnGridReady(name);
        var gridAPIS = this.getGridApi(name);
        if (gridAPIS.gridApi) {
            var gridApi = gridAPIS.gridApi;
            //    gridApi.hideOverlay();
            gridApi.setColumnDefs(this.setColumnDef(name));
            gridApi.sizeColumnsToFit();
        }
    };
    BaseComponent.prototype.xtBaseDoOnGridReady = function (name) {
    };
    BaseComponent.prototype.OnSubmit = function (name, bindDataToGrid) {
        var _this = this;
        if (bindDataToGrid === void 0) { bindDataToGrid = true; }
        var otherGridNames = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            otherGridNames[_i - 2] = arguments[_i];
        }
        if (this.isFormValid(name)) {
            otherGridNames.forEach(function (otherName) {
                var gridAPIS = _this.getGridApi(name);
                if (gridAPIS.gridApi) {
                    var otherGridApi = gridAPIS.gridApi;
                    otherGridApi.paginationSetPageSize(BaseComponent.GRIDPAGESIZE);
                    // otherGridApi.showLoadingOverlay();
                }
            });
            var gridAPIS = this.getGridApi(name);
            if (gridAPIS.gridApi) {
                var gridApi = gridAPIS.gridApi;
                gridApi.paginationSetPageSize(BaseComponent.GRIDPAGESIZE);
                //   gridApi.showLoadingOverlay();
            }
            this.setSearchModel(name);
            this.loadDataFromApiNSetGrid(name, bindDataToGrid);
        }
    };
    BaseComponent.prototype.OnSubmitNDontValidate = function (name, bindDataToGrid) {
        var _this = this;
        if (bindDataToGrid === void 0) { bindDataToGrid = true; }
        var otherGridNames = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            otherGridNames[_i - 2] = arguments[_i];
        }
        otherGridNames.forEach(function (otherName) {
            var gridAPIS = _this.getGridApi(name);
            if (gridAPIS.gridApi) {
                var otherGridApi = gridAPIS.gridApi;
                otherGridApi.paginationSetPageSize(BaseComponent.GRIDPAGESIZE);
                // otherGridApi.showLoadingOverlay();
            }
        });
        var gridAPIS = this.getGridApi(name);
        if (gridAPIS.gridApi) {
            var gridApi = gridAPIS.gridApi;
            gridApi.paginationSetPageSize(BaseComponent.GRIDPAGESIZE);
            //   gridApi.showLoadingOverlay();
        }
        this.setSearchModel(name);
        this.loadDataFromApiNSetGrid(name, bindDataToGrid);
    };
    BaseComponent.prototype.getKeyName = function (name) {
    };
    BaseComponent.prototype.loadDataFromApiNSetGrid = function (name, bindDataToGrid) {
        var _this = this;
        if (bindDataToGrid === void 0) { bindDataToGrid = false; }
        this.showLoader();
        var _a = this.getQueryUrl(name), url = _a.url, params = _a.params;
        this.baseService.getDataFromAPI(url, params)
            .subscribe(function (data) {
            _this.xtBaseLoadDataFromApiProcessData(name, data);
            if (bindDataToGrid) {
                _this.bindDataToGrid(name, data);
            }
            _this.hideLoader();
            //  this.autoSizeColumns(name);
        }, function (e) {
            _this.hideLoader();
        });
    };
    BaseComponent.prototype.bindDataToGrid = function (name, data) {
        //debugger
        var searchModel = this.getSearchModel(name);
        var apiDataKey = searchModel['apiDatakey'];
        var apiGridHeaderKay = searchModel['apiGridHeaderKay'];
        var gridAPIS = this.getGridApi(name);
        if (gridAPIS.gridApi) {
            var gridApi = gridAPIS.gridApi;
            if (apiGridHeaderKay) {
                if (!_shared__WEBPACK_IMPORTED_MODULE_1__["Utils"].isEmpty(data[apiGridHeaderKay])) {
                    this.dynamicHeaderFromApi(data[apiGridHeaderKay], name);
                }
            }
            _shared__WEBPACK_IMPORTED_MODULE_1__["ProjectUtils"].grid.setGridRowData(gridApi, data[apiDataKey]);
        }
    };
    BaseComponent.prototype.loadDataFromApi = function (name) {
        //debugger
        var _a = this.getQueryUrl(name), url = _a.url, params = _a.params;
        return this.baseService.getDataFromAPI(url, params);
    };
    BaseComponent.prototype.autoSizeColumns = function (name) {
        var gridAPIS = this.getGridApi(name);
        _shared__WEBPACK_IMPORTED_MODULE_1__["ProjectUtils"].grid.autoSizeColumns(gridAPIS);
    };
    BaseComponent.prototype.xtBaseLoadDataFromApiProcessData = function (name, data) {
        return null;
    };
    BaseComponent.prototype.getGridApi = function (name) {
        return {
            gridApi: this.gridApi,
            columnApi: this.columnApi
        };
    };
    BaseComponent.prototype.getServiceUrl = function (name) {
        return null;
    };
    BaseComponent.prototype.getValueFromSearchModel = function (name) {
        var searchModel = this.getSearchModel(name) || {};
        return _base_util__WEBPACK_IMPORTED_MODULE_2__["BaseUtil"].getValueFromSearchModel(searchModel);
    };
    BaseComponent.prototype.setValueFromSession = function (searchModel, sessionModel) {
        _base_util__WEBPACK_IMPORTED_MODULE_2__["BaseUtil"].setValueFromSession(searchModel, sessionModel);
    };
    BaseComponent.prototype.getParamsBody = function (name) {
        var searchModel = this.getSearchModel(name) || {};
        var apiObj = _base_util__WEBPACK_IMPORTED_MODULE_2__["BaseUtil"].getApiObj(searchModel);
        var nonSearchParams = this.getNonSearchModelParams(name);
        return _base_util__WEBPACK_IMPORTED_MODULE_2__["BaseUtil"].getApiParams(apiObj, nonSearchParams);
    };
    BaseComponent.prototype.getNonSearchModelParams = function (name) {
        return {};
    };
    BaseComponent.prototype.getQueryUrl = function (name) {
        var url = this.getServiceUrl(name);
        var params = this.getParamsBody(name);
        return {
            url: url,
            params: params
        };
    };
    BaseComponent.prototype.doOnTabChange = function (name) {
        this.xtBaseDoOnTabChange(name);
        this.autoSizeColumns(name);
    };
    BaseComponent.prototype.xtBaseDoOnTabChange = function (name) {
    };
    BaseComponent.prototype.hideLoader = function () {
        var loaders = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            loaders[_i] = arguments[_i];
        }
        if (this.baseLoader) {
            this.baseLoader.show = false;
        }
        _base_util__WEBPACK_IMPORTED_MODULE_2__["BaseUtil"].hideGlobalLoader();
        BaseComponent.changeLoaderState(loaders, false);
    };
    BaseComponent.prototype.showLoader = function () {
        var loaders = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            loaders[_i] = arguments[_i];
        }
        if (this.baseLoader) {
            this.baseLoader.show = true;
        }
        _base_util__WEBPACK_IMPORTED_MODULE_2__["BaseUtil"].showGlobalLoader();
        BaseComponent.changeLoaderState(loaders, true);
    };
    BaseComponent.prototype.createDynamicColumns = function (obj, name) {
        var columns = _base_util__WEBPACK_IMPORTED_MODULE_2__["BaseGridUtil"].createDynamicColumns(obj);
        this.setDynamicColumnDef(name, columns);
        this.autoSizeColumns(name);
    };
    BaseComponent.prototype.addAdditionalHeaderToDynamicHeaders = function (name) {
        return null;
    };
    BaseComponent.prototype.dynamicHeaderFromApi = function (headers, name) {
        var columns = _shared__WEBPACK_IMPORTED_MODULE_1__["ProjectUtils"].grid.dynamicColumnsFromObj(headers);
        var additionHeaders = this.addAdditionalHeaderToDynamicHeaders(name);
        if (additionHeaders) {
            columns = additionHeaders.concat(columns);
        }
        this.setDynamicColumnDef(name, columns);
    };
    BaseComponent.prototype.setDynamicColumnDef = function (name, cols) {
        var gridAPIS = this.getGridApi(name);
        _shared__WEBPACK_IMPORTED_MODULE_1__["ProjectUtils"].grid.setDynamicColumnDef(gridAPIS, cols);
    };
    BaseComponent.prototype.getjson = function (filename) {
        return this.baseService.getjson(filename);
    };
    BaseComponent.prototype.setParm = function (parm) {
        var tt = '';
        Object.entries(parm).forEach(function (key, index) {
            if (key[1].value === null || key[1].value === undefined) {
                key[1].value = '';
            }
            tt += key[0] + '=' + key[1].value + '&';
        });
        tt = tt.substring(0, tt.length - 1);
        return tt;
    };
    BaseComponent.GRIDPAGESIZE = 10;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('baseForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], BaseComponent.prototype, "baseForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('baseLoader'),
        __metadata("design:type", Object)
    ], BaseComponent.prototype, "baseLoader", void 0);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/core/base/base.search.model.ts":
/*!************************************************!*\
  !*** ./src/app/core/base/base.search.model.ts ***!
  \************************************************/
/*! exports provided: BasicSearchKey, BaseSearchModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicSearchKey", function() { return BasicSearchKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSearchModel", function() { return BaseSearchModel; });
var BasicSearchKey = /** @class */ (function () {
    function BasicSearchKey(apiKey, fillFromKey, value) {
        if (fillFromKey === void 0) { fillFromKey = ''; }
        if (value === void 0) { value = ''; }
        this._apiKey = apiKey;
        this._fillFromKey = fillFromKey === '' ? apiKey : fillFromKey;
        this.value = value;
    }
    Object.defineProperty(BasicSearchKey.prototype, "apiKey", {
        get: function () {
            return this._apiKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicSearchKey.prototype, "fillFromKey", {
        get: function () {
            return this._fillFromKey;
        },
        enumerable: true,
        configurable: true
    });
    return BasicSearchKey;
}());

var BaseSearchModel = /** @class */ (function () {
    function BaseSearchModel() {
    }
    return BaseSearchModel;
}());



/***/ }),

/***/ "./src/app/core/base/base.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/base/base.service.ts ***!
  \*******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _component_global_popup_global_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/global-popup/global-popup.service */ "./src/app/component/global-popup/global-popup.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/core/shared/index.ts");
/* harmony import */ var _base_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.util */ "./src/app/core/base/base.util.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BaseService = /** @class */ (function () {
    function BaseService(httpService, globalPupUp, router) {
        var _this = this;
        this.httpService = httpService;
        this.globalPupUp = globalPupUp;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.menuFlag = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.EnableCollapse = false;
        this.lastUrlhit = '';
        this.handleError = function (error) {
            if ((error['status'] === 500) && error['error']['message'].includes('expired')) {
                localStorage.clear();
                _this.globalPupUp.navigateTo(['']);
                _this.globalPupUp.showGlobalPopup("<span style=\"color:red; font-weight: bold\"> Session has been expired!</span>");
            }
            // } if (error['status'] === 0) {
            //       this.globalPupUp.showGlobalPopup(`<span style="color:red; font-weight: bold"> Your internet 
            //       is not working properly!</span> <br> Please check`);
            // }
            else {
                localStorage.clear();
                _this.globalPupUp.navigateTo(['']);
                _this.globalPupUp.showGlobalPopup("<span style=\"color:red; font-weight: bold\"> We are facing some\n                  technical issues!</span> <br> Please try after sometime");
            }
            _base_util__WEBPACK_IMPORTED_MODULE_6__["BaseUtil"].hideGlobalLoader();
            var errorParam = _base_util__WEBPACK_IMPORTED_MODULE_6__["BaseUtil"].getApiParams({
                message: JSON.stringify(error),
                subject: 'Error_Log'
            });
            if (_this.lastUrlhit !== _shared__WEBPACK_IMPORTED_MODULE_5__["CustomerServicesUrls"].TK_CUSTOMER_ERROR_LOG) {
                _this.lastUrlhit = _shared__WEBPACK_IMPORTED_MODULE_5__["CustomerServicesUrls"].TK_CUSTOMER_ERROR_LOG;
                _this.getDataFromAPI(_shared__WEBPACK_IMPORTED_MODULE_5__["CustomerServicesUrls"].TK_CUSTOMER_ERROR_LOG, errorParam)
                    .subscribe(function (data) {
                    console.log('Error Log Response', data);
                });
            }
            // In a real world app, we might use a remote logging infrastructure
            // We'd also dig deeper into the error to get a better message
            var errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : 'Server error';
            console.error(errMsg); // log to console instead
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
        };
    }
    BaseService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    BaseService.prototype.clearMessage = function () {
        this.subject.next();
    };
    BaseService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    BaseService.prototype.getServiceUrl = function (name) {
        return null;
    };
    BaseService.prototype.getDataFromAPI = function (strURL, body, responseType) {
        var tokenId = null;
        this.lastUrlhit = strURL;
        var sessionObj = _shared__WEBPACK_IMPORTED_MODULE_5__["SessionObject"].getUserDetails();
        tokenId = sessionObj && _shared__WEBPACK_IMPORTED_MODULE_5__["SessionObject"].getUserDetails().Token;
        // tokenId = (SessionObject.getUserDetails().Token === undefined) ? '' : SessionObject.getUserDetails().Token;
        // tokenId = `bXBzQDEyM34jfjMyMDN+I34yMDE=`;
        if (!responseType) {
            this.getResponseType();
        }
        if (localStorage['isLogin'] === 'true' || strURL.includes('login')) {
            return this.httpService.extractPostData(strURL, body, tokenId, responseType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
        else if (localStorage['isLogin'] === 'false' && tokenId === null) {
            this.router.navigate(['/']);
        }
    };
    BaseService.prototype.getResponseType = function () {
        return '';
    };
    BaseService.prototype.getjson = function (filename) {
        // return this.extractData(filename);
        return this.httpService.getJSON(filename);
    };
    BaseService.prototype.loadJSONData = function (jsonPath) {
        return this.httpService.getJSON(jsonPath);
    };
    BaseService.prototype.extractData = function (res) {
        return res;
    };
    BaseService.prototype.uploadFile = function (event, strURL, nameinForm, otherBody) {
        var tokenId = null;
        var sessionObj = _shared__WEBPACK_IMPORTED_MODULE_5__["SessionObject"].getUserDetails();
        tokenId = sessionObj && _shared__WEBPACK_IMPORTED_MODULE_5__["SessionObject"].getUserDetails().Token;
        return this.httpService.uploadData(event, strURL, nameinForm, otherBody, tokenId);
    };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _component_global_popup_global_popup_service__WEBPACK_IMPORTED_MODULE_4__["GlobalPopupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/core/base/base.util.ts":
/*!****************************************!*\
  !*** ./src/app/core/base/base.util.ts ***!
  \****************************************/
/*! exports provided: BaseUtil, BaseGridUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUtil", function() { return BaseUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseGridUtil", function() { return BaseGridUtil; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ "./src/app/core/shared/index.ts");

var BaseUtil = /** @class */ (function () {
    function BaseUtil() {
    }
    BaseUtil.getApiObj = function (searchModel) {
        var basicSearchKey;
        var apiObj = {};
        var keys = Object.keys(searchModel);
        keys.forEach(function (key) {
            if (typeof searchModel[key] === 'object') {
                basicSearchKey = searchModel[key];
                var apiValue = basicSearchKey.value;
                if (apiValue === null || apiValue === undefined) {
                    apiObj[basicSearchKey.apiKey] = '';
                }
                else {
                    apiObj[basicSearchKey.apiKey] = apiValue;
                }
            }
        });
        return apiObj;
    };
    //  retValue += '&' + encodeURIComponent(val.apiKey) + '=' + encodeURIComponent(val.value);
    BaseUtil.getApiParams = function () {
        var apiObjs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            apiObjs[_i] = arguments[_i];
        }
        var retValue = '';
        apiObjs.forEach(function (apiObj) {
            retValue += BaseUtil.convertObjToEncodeURIComponent(apiObj);
        });
        retValue = retValue.substring(1);
        return retValue;
    };
    BaseUtil.convertObjToEncodeURIComponent = function (apiObj) {
        var retValue = '';
        var keys = Object.keys(apiObj || {});
        keys.forEach(function (key) {
            retValue += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(apiObj[key]);
        });
        return retValue;
    };
    BaseUtil.getValueFromSearchModel = function (searchModel) {
        var obj = {};
        var keys = Object.keys(searchModel);
        keys.forEach(function (key) {
            obj[key] = searchModel[key].value;
        });
        return obj;
    };
    BaseUtil.setValueFromSession = function (searchModel, sessionModel) {
        var keys = Object.keys(sessionModel || {});
        keys.forEach(function (key) {
            searchModel[key].value = sessionModel[key];
        });
    };
    BaseUtil.setGlobalLoader = function (globalLoader) {
        BaseUtil.globalLoader = globalLoader;
    };
    BaseUtil.showGlobalLoader = function () {
        BaseUtil.globalLoader.show = true;
    };
    BaseUtil.hideGlobalLoader = function () {
        BaseUtil.globalLoader.show = false;
    };
    return BaseUtil;
}());

var BaseGridUtil = /** @class */ (function () {
    function BaseGridUtil() {
    }
    BaseGridUtil.createDynamicColumns = function (obj) {
        var columns = [];
        var keys = Object.keys(obj);
        var len = keys.length;
        var width = 10;
        width = 100 / len;
        columns.push();
        keys.forEach(function (val) {
            columns.push({
                headerName: val.split('_').join(' '),
                field: val,
                minWidth: _shared__WEBPACK_IMPORTED_MODULE_0__["ProjectUtils"].ag_SetWidth(width)
            });
        });
        return columns;
    };
    return BaseGridUtil;
}());



/***/ }),

/***/ "./src/app/core/base/index.ts":
/*!************************************!*\
  !*** ./src/app/core/base/index.ts ***!
  \************************************/
/*! exports provided: BaseService, BaseComponent, BasicSearchKey, BaseSearchModel, ModelPopUpBase, ModalBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ "./src/app/core/base/base.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return _base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]; });

/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/core/base/base.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]; });

/* harmony import */ var _base_search_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.search.model */ "./src/app/core/base/base.search.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicSearchKey", function() { return _base_search_model__WEBPACK_IMPORTED_MODULE_2__["BasicSearchKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSearchModel", function() { return _base_search_model__WEBPACK_IMPORTED_MODULE_2__["BaseSearchModel"]; });

/* harmony import */ var _modal_pupup_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-pupup.base */ "./src/app/core/base/modal-pupup.base.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelPopUpBase", function() { return _modal_pupup_base__WEBPACK_IMPORTED_MODULE_3__["ModelPopUpBase"]; });

/* harmony import */ var _modal_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.base */ "./src/app/core/base/modal.base.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBase", function() { return _modal_base__WEBPACK_IMPORTED_MODULE_4__["ModalBase"]; });








/***/ }),

/***/ "./src/app/core/base/modal-pupup.base.ts":
/*!***********************************************!*\
  !*** ./src/app/core/base/modal-pupup.base.ts ***!
  \***********************************************/
/*! exports provided: ModelPopUpBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelPopUpBase", function() { return ModelPopUpBase; });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ "./src/app/core/base/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/core/shared/index.ts");
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




var ModelPopUpBase = /** @class */ (function (_super) {
    __extends(ModelPopUpBase, _super);
    function ModelPopUpBase(baseService, router) {
        var _this = _super.call(this, baseService, router) || this;
        _this.baseService = baseService;
        _this.router = router;
        _this.resetScope = false;
        _this.firstInit = true;
        return _this;
    }
    ModelPopUpBase.prototype.ngOnChanges = function (simpleChange) {
        this.subReInit();
        this.xtBaseOnChange();
    };
    ModelPopUpBase.prototype.xtBaseOnChange = function () {
    };
    ModelPopUpBase.prototype.subReInit = function () {
        var _this = this;
        if ((this.reInInSub instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]) === false) {
            if (this.reInitComponent instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]) {
                this.reInInSub = this.reInitComponent.subscribe(function (data) {
                    if (_this.firstInit) {
                        _this.firstInit = false;
                        _this.firstReInit();
                    }
                    _this.resetScope = false;
                    setTimeout(function () {
                        _this.resetScope = true;
                    }, 100);
                    _this.reInit(data);
                });
            }
        }
    };
    ModelPopUpBase.prototype.firstReInit = function () {
    };
    ModelPopUpBase.prototype.reInit = function (data) {
    };
    ModelPopUpBase.prototype.ngOnDestroy = function () {
        _shared__WEBPACK_IMPORTED_MODULE_3__["Utils"].unsubscribe(this.reInInSub);
        this.xtBaseOnDestroy();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"])
    ], ModelPopUpBase.prototype, "reInitComponent", void 0);
    return ModelPopUpBase;
}(_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]));



/***/ }),

/***/ "./src/app/core/base/modal.base.ts":
/*!*****************************************!*\
  !*** ./src/app/core/base/modal.base.ts ***!
  \*****************************************/
/*! exports provided: ModalBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBase", function() { return ModalBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.component */ "./src/app/core/base/base.component.ts");
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


var ModalBase = /** @class */ (function (_super) {
    __extends(ModalBase, _super);
    function ModalBase(baseService, router) {
        var _this = _super.call(this, baseService, router) || this;
        _this.baseService = baseService;
        _this.router = router;
        _this.reInit = function (param) {
        };
        return _this;
    }
    ModalBase.prototype.ngOnChanges = function () {
        if (this.modalApi) {
            this.modalApi.onShow = this.reInit;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalBase.prototype, "modalApi", void 0);
    return ModalBase;
}(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/core/directive/directive.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/directive/directive.module.ts ***!
  \****************************************************/
/*! exports provided: DirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveModule", function() { return DirectiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validations */ "./src/app/core/directive/validations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectiveModule = /** @class */ (function () {
    function DirectiveModule() {
    }
    DirectiveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _validations__WEBPACK_IMPORTED_MODULE_1__["DDWDRequiredDirective"]
            ],
            providers: [],
            imports: [],
            exports: [
                _validations__WEBPACK_IMPORTED_MODULE_1__["DDWDRequiredDirective"]
            ]
        })
    ], DirectiveModule);
    return DirectiveModule;
}());



/***/ }),

/***/ "./src/app/core/directive/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/directive/index.ts ***!
  \*****************************************/
/*! exports provided: DirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.module */ "./src/app/core/directive/directive.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectiveModule", function() { return _directive_module__WEBPACK_IMPORTED_MODULE_0__["DirectiveModule"]; });




/***/ }),

/***/ "./src/app/core/directive/validations/dropdown-with-discription/ddwd-required.directive.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/core/directive/validations/dropdown-with-discription/ddwd-required.directive.ts ***!
  \*************************************************************************************************/
/*! exports provided: DDWDRequiredDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DDWDRequiredDirective", function() { return DDWDRequiredDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ "./src/app/core/shared/index.ts");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation.service */ "./src/app/core/directive/validations/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DDWDRequiredDirective = /** @class */ (function () {
    function DDWDRequiredDirective(el, fg, vldSer) {
        var _this = this;
        this.el = el;
        this.fg = fg;
        this.vldSer = vldSer;
        this.errorDiv = document.createElement('div');
        this._value = null;
        this.nativeElement = el.nativeElement;
        this.formDirective = this.fg.formDirective;
        this.formDirective.ngSubmit.subscribe(function (event) {
            _this.requiredValidator(_this._value);
        });
    }
    DDWDRequiredDirective_1 = DDWDRequiredDirective;
    DDWDRequiredDirective.prototype.onBlur = function (target) {
        this._value = target.value;
        this.requiredValidator(this._value);
    };
    DDWDRequiredDirective.prototype.ngAfterViewInit = function () {
        this.vldSer.addErrorDiv(this.errorDiv, this.nativeElement);
    };
    DDWDRequiredDirective.prototype.validate = function (control) {
        this._value = control.value;
        return this.requiredValidator(this._value);
    };
    DDWDRequiredDirective.prototype.requiredValidator = function (value) {
        var _this = this;
        var required = _shared__WEBPACK_IMPORTED_MODULE_2__["Utils"].isEmpty(value);
        if (required) {
            setTimeout(function () {
                _this.vldSer.actionOnInValid(_this.errorDiv, _this.nativeElement, _this.appRequired);
            }, 100);
            return this.vldSer.valueToReturnOnInvalid();
        }
        else {
            setTimeout(function () {
                _this.vldSer.actionOnValid(_this.errorDiv);
            }, 100);
            return null;
        }
    };
    var DDWDRequiredDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DDWDRequiredDirective.prototype, "appRequired", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DDWDRequiredDirective.prototype, "onBlur", null);
    DDWDRequiredDirective = DDWDRequiredDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appRequired]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DDWDRequiredDirective_1; }),
                    multi: true
                },
                _validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationServcie"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
            _validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationServcie"]])
    ], DDWDRequiredDirective);
    return DDWDRequiredDirective;
}());



/***/ }),

/***/ "./src/app/core/directive/validations/dropdown-with-discription/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/directive/validations/dropdown-with-discription/index.ts ***!
  \*******************************************************************************/
/*! exports provided: DDWDRequiredDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ddwd_required_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ddwd-required.directive */ "./src/app/core/directive/validations/dropdown-with-discription/ddwd-required.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DDWDRequiredDirective", function() { return _ddwd_required_directive__WEBPACK_IMPORTED_MODULE_0__["DDWDRequiredDirective"]; });




/***/ }),

/***/ "./src/app/core/directive/validations/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/directive/validations/index.ts ***!
  \*****************************************************/
/*! exports provided: DDWDRequiredDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_with_discription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-with-discription */ "./src/app/core/directive/validations/dropdown-with-discription/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DDWDRequiredDirective", function() { return _dropdown_with_discription__WEBPACK_IMPORTED_MODULE_0__["DDWDRequiredDirective"]; });




/***/ }),

/***/ "./src/app/core/directive/validations/validation.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/directive/validations/validation.service.ts ***!
  \******************************************************************/
/*! exports provided: ValidationServcie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationServcie", function() { return ValidationServcie; });
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

var ValidationServcie = /** @class */ (function () {
    function ValidationServcie() {
    }
    ValidationServcie.prototype.valueToReturnOnInvalid = function () {
        return {
            'required': {
                value: true
            }
        };
    };
    ValidationServcie.prototype.containAllClass = function (ele) {
        var classNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            classNames[_i - 1] = arguments[_i];
        }
        var len = classNames.length;
        for (var i = 0; i < len; i++) {
            if (ele.classList.contains(classNames[i]) === false) {
                return false;
            }
        }
        return true;
    };
    ValidationServcie.prototype.addErrorDiv = function (errorDiv, nativeElement) {
        this.addInnerHTMLToDiv(errorDiv, '<br>');
        if (nativeElement.tagName === 'INPUT') {
            nativeElement.parentElement.appendChild(errorDiv);
        }
        else {
            nativeElement.appendChild(errorDiv);
        }
    };
    ValidationServcie.prototype.addInnerHTMLToDiv = function (naEle, innerHTML) {
        naEle.innerHTML = innerHTML;
    };
    ValidationServcie.prototype.actionOnValid = function (errorDiv) {
        this.addInnerHTMLToDiv(errorDiv, '<br>');
    };
    ValidationServcie.prototype.actionOnInValid = function (errorDiv, nativeElement, msg) {
        if (msg !== '') {
            if (this.containAllClass(nativeElement, 'ng-touched')) {
                this.addInnerHTMLToDiv(errorDiv, "<div class=\"radius4 errrorBox\">" + msg + "</div>");
            }
        }
    };
    ValidationServcie.prototype.actionOnSubmit = function (errorDiv, nativeElement, msg) {
        if (msg !== '') {
            this.addInnerHTMLToDiv(errorDiv, "<div class=\"radius4 errrorBox\">" + msg + "</div>");
        }
    };
    ValidationServcie = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidationServcie);
    return ValidationServcie;
}());



/***/ }),

/***/ "./src/app/core/guard/auth-guard/auth-guard.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/guard/auth-guard/auth-guard.guard.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guard.service */ "./src/app/core/guard/guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(grdSer) {
        this.grdSer = grdSer;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.checkMyRoute();
    };
    AuthGuard.prototype.canLoad = function () {
        return this.checkMyRoute();
    };
    AuthGuard.prototype.canActivateChild = function () {
        return this.checkMyRoute();
    };
    AuthGuard.prototype.checkMyRoute = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.grdSer.isTokenAvaible()) {
                resolve(true);
            }
            else {
                resolve(false);
                _this.grdSer.navigateToLogin();
            }
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/guard/auth-guard/index.ts":
/*!************************************************!*\
  !*** ./src/app/core/guard/auth-guard/index.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-guard.guard */ "./src/app/core/guard/auth-guard/auth-guard.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/core/guard/guard-module.module.ts":
/*!***************************************************!*\
  !*** ./src/app/core/guard/guard-module.module.ts ***!
  \***************************************************/
/*! exports provided: GuardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardModule", function() { return GuardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard */ "./src/app/core/guard/auth-guard/index.ts");
/* harmony import */ var _ref_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ref-guard */ "./src/app/core/guard/ref-guard/index.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard.service */ "./src/app/core/guard/guard.service.ts");
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-guard */ "./src/app/core/guard/login-guard/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GuardModule = /** @class */ (function () {
    function GuardModule() {
    }
    GuardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],
                _ref_guard__WEBPACK_IMPORTED_MODULE_2__["RefGuard"],
                _guard_service__WEBPACK_IMPORTED_MODULE_3__["GuardService"],
                _login_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]
            ]
        })
    ], GuardModule);
    return GuardModule;
}());



/***/ }),

/***/ "./src/app/core/guard/guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/guard/guard.service.ts ***!
  \*********************************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_session_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/session-object */ "./src/app/core/shared/session-object.ts");
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



var GuardService = /** @class */ (function () {
    function GuardService(router) {
        this.router = router;
        //debugger 
    }
    GuardService.prototype.getRefID = function () {
        var refId = _shared_session_object__WEBPACK_IMPORTED_MODULE_1__["SessionObject"].getRefID();
        return refId && refId.documentReferenceDialogue;
    };
    GuardService.prototype.getcustID = function () {
        var custId = _shared_session_object__WEBPACK_IMPORTED_MODULE_1__["SessionObject"].getCustomerID();
        return custId;
    };
    GuardService.prototype.getToken = function () {
        var userDetail = _shared_session_object__WEBPACK_IMPORTED_MODULE_1__["SessionObject"].getUserDetails();
        return userDetail && userDetail.Token;
    };
    GuardService.prototype.isRefIdAvaible = function () {
        if (this.getRefID()) {
            return true;
        }
        else {
            return false;
        }
    };
    GuardService.prototype.isTokenAvaible = function () {
        if (this.getToken()) {
            return true;
        }
        else {
            return false;
        }
    };
    GuardService.prototype.navigateFromLogin = function () {
        if (localStorage.getItem('isLogin') == "true") {
            this.router.navigate(['/pages/admin']);
        }
        else {
            localStorage.clear();
            this.navigateToLogin();
        }
    };
    GuardService.prototype.navigateToLogin = function () {
        this.router.navigate(['']);
    };
    GuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/core/guard/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/guard/index.ts ***!
  \*************************************/
/*! exports provided: GuardModule, AuthGuard, RefGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-guard */ "./src/app/core/guard/auth-guard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _ref_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ref-guard */ "./src/app/core/guard/ref-guard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefGuard", function() { return _ref_guard__WEBPACK_IMPORTED_MODULE_1__["RefGuard"]; });

/* harmony import */ var _guard_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard-module.module */ "./src/app/core/guard/guard-module.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuardModule", function() { return _guard_module_module__WEBPACK_IMPORTED_MODULE_2__["GuardModule"]; });






/***/ }),

/***/ "./src/app/core/guard/login-guard/index.ts":
/*!*************************************************!*\
  !*** ./src/app/core/guard/login-guard/index.ts ***!
  \*************************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.guard */ "./src/app/core/guard/login-guard/login.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return _login_guard__WEBPACK_IMPORTED_MODULE_0__["LoginGuard"]; });




/***/ }),

/***/ "./src/app/core/guard/login-guard/login.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/guard/login-guard/login.guard.ts ***!
  \*******************************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guard.service */ "./src/app/core/guard/guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = /** @class */ (function () {
    function LoginGuard(grdSer) {
        this.grdSer = grdSer;
    }
    LoginGuard.prototype.canActivate = function () {
        return this.checkRoute();
    };
    LoginGuard.prototype.canLoad = function () {
        return this.checkRoute();
    };
    LoginGuard.prototype.checkRoute = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.grdSer.isTokenAvaible()) {
                _this.grdSer.navigateFromLogin();
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/core/guard/ref-guard/index.ts":
/*!***********************************************!*\
  !*** ./src/app/core/guard/ref-guard/index.ts ***!
  \***********************************************/
/*! exports provided: RefGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ref_guard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ref-guard.guard */ "./src/app/core/guard/ref-guard/ref-guard.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefGuard", function() { return _ref_guard_guard__WEBPACK_IMPORTED_MODULE_0__["RefGuard"]; });




/***/ }),

/***/ "./src/app/core/guard/ref-guard/ref-guard.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/guard/ref-guard/ref-guard.guard.ts ***!
  \*********************************************************/
/*! exports provided: RefGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefGuard", function() { return RefGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guard.service */ "./src/app/core/guard/guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RefGuard = /** @class */ (function () {
    function RefGuard(grdSer) {
        this.grdSer = grdSer;
    }
    RefGuard.prototype.canActivate = function () {
        return this.checkMyRoute();
    };
    RefGuard.prototype.canLoad = function () {
        return this.checkMyRoute();
    };
    RefGuard.prototype.canActivateChild = function () {
        return this.checkMyRoute();
    };
    RefGuard.prototype.checkMyRoute = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.grdSer.isRefIdAvaible()) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    };
    RefGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]])
    ], RefGuard);
    return RefGuard;
}());



/***/ }),

/***/ "./src/app/core/services/constants/assets-path.constants.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/services/constants/assets-path.constants.ts ***!
  \******************************************************************/
/*! exports provided: AssetsPathConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsPathConstants", function() { return AssetsPathConstants; });
var AssetsPathConstants = /** @class */ (function () {
    function AssetsPathConstants() {
    }
    return AssetsPathConstants;
}());



/***/ }),

/***/ "./src/app/core/services/constants/constant.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/services/constants/constant.service.ts ***!
  \*************************************************************/
/*! exports provided: ConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantService", function() { return ConstantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_path_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets-path.constants */ "./src/app/core/services/constants/assets-path.constants.ts");
/* harmony import */ var _route_path_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-path.constants */ "./src/app/core/services/constants/route-path.constants.ts");
/* harmony import */ var _dropdown_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-constant */ "./src/app/core/services/constants/dropdown-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConstantService = /** @class */ (function () {
    function ConstantService() {
        this.assetsPath = new _assets_path_constants__WEBPACK_IMPORTED_MODULE_1__["AssetsPathConstants"]();
        this.routePath = new _route_path_constants__WEBPACK_IMPORTED_MODULE_2__["RoutePathConstant"]();
        this.dropdown = new _dropdown_constant__WEBPACK_IMPORTED_MODULE_3__["DropdownConstants"]();
    }
    ConstantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConstantService);
    return ConstantService;
}());



/***/ }),

/***/ "./src/app/core/services/constants/dropdown-constant.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/services/constants/dropdown-constant.ts ***!
  \**************************************************************/
/*! exports provided: DropdownConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownConstants", function() { return DropdownConstants; });
var DropdownConstants = /** @class */ (function () {
    function DropdownConstants() {
    }
    return DropdownConstants;
}());



/***/ }),

/***/ "./src/app/core/services/constants/index.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/constants/index.ts ***!
  \**************************************************/
/*! exports provided: ConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.service */ "./src/app/core/services/constants/constant.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstantService", function() { return _constant_service__WEBPACK_IMPORTED_MODULE_0__["ConstantService"]; });




/***/ }),

/***/ "./src/app/core/services/constants/route-path.constants.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/services/constants/route-path.constants.ts ***!
  \*****************************************************************/
/*! exports provided: RoutePathConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePathConstant", function() { return RoutePathConstant; });
var RoutePathConstant = /** @class */ (function () {
    function RoutePathConstant() {
        this.AGENCY_DETAILS = [{
                path: 'customer-report',
                completePath: null,
                label: 'Customer'
            },
            {
                path: 'order',
                completePath: null,
                label: 'Order'
            },
            {
                path: 'payments-report',
                completePath: null,
                label: 'Payments'
            },
            {
                path: 'payments-account',
                completePath: null,
                label: 'Payment Accounts'
            },
            {
                path: 'attachment-report',
                completePath: null,
                label: 'Attachment'
            },
            {
                path: 'service-complaint',
                completePath: null,
                label: 'Service'
            },
            {
                path: 'customer-history-report',
                completePath: null,
                label: 'Customer History'
            },
            {
                path: 'notes-report',
                completePath: null,
                label: 'Notes'
            }
        ];
        this.ADDPRODUCTORDERCLASSPATH = [{
                path: 'description',
                completePath: null,
                label: 'Description'
            },
            {
                path: 'rate',
                completePath: null,
                label: 'Rates'
            },
            {
                path: 'discounts',
                completePath: null,
                label: 'Discounts'
            },
            {
                path: 'sources',
                completePath: null,
                label: 'Source'
            },
            {
                path: 'demog',
                completePath: null,
                label: 'Demog.Form'
            },
            {
                path: 'upcrosssell',
                completePath: null,
                label: 'Up/CrossSell'
            }
        ];
        this.ADD_SUBSCRIPTION = [{
                path: 'description',
                completePath: null,
                label: 'Description'
            },
            {
                path: 'rate',
                completePath: null,
                label: 'Rates'
            },
            {
                path: 'discounts',
                completePath: null,
                label: 'Discounts'
            },
            {
                path: 'sources',
                completePath: null,
                label: 'Source'
            },
            {
                path: 'demog',
                completePath: null,
                label: 'Demog.Form'
            },
            {
                path: 'ordercode',
                completePath: null,
                label: 'Order Code'
            },
            {
                path: 'subscription',
                completePath: null,
                label: 'Subscription'
            },
            {
                path: 'renewal',
                completePath: null,
                label: 'Renewal'
            },
            {
                path: 'promotion',
                completePath: null,
                label: 'Promotion'
            },
            {
                path: 'generic',
                completePath: null,
                label: 'Generic'
            },
            {
                path: 'issuedate',
                completePath: null,
                label: 'Issues Date'
            },
            {
                path: 'issues',
                completePath: null,
                label: 'Issues'
            },
            {
                path: 'starts',
                completePath: null,
                label: 'Starts'
            },
            {
                path: 'audit',
                completePath: null,
                label: 'Audit'
            }
        ];
        this.ADD_PRODUCT_OC = [{
                path: 'description',
                completePath: null,
                label: 'Description'
            },
            {
                path: 'rate',
                completePath: null,
                label: 'Rates'
            },
            {
                path: 'discounts',
                completePath: null,
                label: 'Discounts'
            },
            {
                path: 'ordercode',
                completePath: null,
                label: 'Order Codes'
            },
            {
                path: 'sources',
                completePath: null,
                label: 'Sources'
            },
            {
                path: 'promotion',
                completePath: null,
                label: 'Promotions'
            },
            {
                path: 'demog',
                completePath: null,
                label: 'Demog.Forms'
            },
            {
                path: 'product',
                completePath: null,
                label: 'Products'
            },
            {
                path: 'generic',
                completePath: null,
                label: 'Generic Promotion'
            }
        ];
        this.ADD_HOC = [{
                path: 'description',
                completePath: null,
                label: 'Description'
            },
            {
                path: 'discounts',
                completePath: null,
                label: 'Discounts'
            },
            {
                path: 'ordercode',
                completePath: null,
                label: 'Order Codes'
            },
            {
                path: 'sources',
                completePath: null,
                label: 'Sources'
            },
            {
                path: 'renewal',
                completePath: null,
                label: 'Renewal'
            },
            {
                path: 'demog',
                completePath: null,
                label: 'Demog.Forms'
            }
        ];
        this.ADD_POOLED_PKG = [{
                path: 'description',
                completePath: null,
                label: 'Description'
            },
            {
                path: 'rate',
                completePath: null,
                label: 'Rates'
            },
            {
                path: 'discounts',
                completePath: null,
                label: 'Discounts'
            },
            {
                path: 'ordercode',
                completePath: null,
                label: 'Order Codes'
            },
            {
                path: 'sources',
                completePath: null,
                label: 'Sources'
            },
            {
                path: 'renewal',
                completePath: null,
                label: 'Renewal'
            },
            {
                path: 'demog',
                completePath: null,
                label: 'Demog.Forms'
            }
        ];
        this.ADD_BASIC_PKG = [{
                path: 'description',
                completePath: null,
                label: 'Description'
            },
            {
                path: 'rate',
                completePath: null,
                label: 'Rates'
            },
            {
                path: 'discounts',
                completePath: null,
                label: 'Discounts'
            },
            {
                path: 'ordercode',
                completePath: null,
                label: 'Order Codes'
            },
            {
                path: 'generic',
                completePath: null,
                label: 'Generic Promotion'
            },
            {
                path: 'renewal',
                completePath: null,
                label: 'Renewal'
            },
            {
                path: 'promotion',
                completePath: null,
                label: 'Promotions'
            },
            {
                path: 'demog',
                completePath: null,
                label: 'Demog.Forms'
            },
            {
                path: 'sources',
                completePath: null,
                label: 'Sources'
            }
        ];
    }
    return RoutePathConstant;
}());



/***/ }),

/***/ "./src/app/core/services/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/core/shared/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    // extractPostDataInsight(url: string, body: any, tokenId: any, responseType: string = 'json'): Observable<any> {
    //       this.showLoader();
    //       const options = this.getHTTPOption(tokenId);
    //       console.log(this.http);
    //       options['responseType'] = responseType;
    //       return this.http.post(url, body, options)
    //             .catch(this.onCatch)
    //             .do((res: Response) => {
    //                   console.log(res);
    //                   this.onSuccess(res);
    //             }, (error: any) => {
    //                   console.log('error');
    //                   this.onError(error);
    //             })
    //             .finally(() => {
    //                   this.onEnd();
    //             });
    // }
    HttpService.prototype.extractData = function (url, body, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = 'json'; }
        this.showLoader();
        var sessionObj = _shared__WEBPACK_IMPORTED_MODULE_3__["SessionObject"].getUserDetails();
        var AUser = sessionObj && _shared__WEBPACK_IMPORTED_MODULE_3__["SessionObject"].getUserDetails();
        var options = this.getHTTPOptions(AUser.Token, AUser.userInfo);
        console.log(this.http);
        options['responseType'] = responseType;
        return this.http.post(url, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.onCatch), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
            //   console.log(res);
            _this.onSuccess(res);
        }, function (error) {
            console.log('error');
            _this.onError(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            // console.log('final.......................................................');
            _this.onEnd();
        }));
    };
    HttpService.prototype.extractPostData = function (url, body, tokenId, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = 'json'; }
        this.showLoader();
        var options = this.getHTTPOption(tokenId);
        console.log(this.http);
        options['responseType'] = responseType;
        return this.http.post(url, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.onCatch), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
            //   console.log(res);
            _this.onSuccess(res);
        }, function (error) {
            console.log('error');
            _this.onError(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            // console.log('final.......................................................');
            _this.onEnd();
        }));
    };
    HttpService.prototype.onCatch = function (error, caught) {
        console.log('Catch, error: ', error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
    };
    HttpService.prototype.onSuccess = function (res) {
        //    console.log('Request successful');
    };
    HttpService.prototype.onError = function (res) {
        console.log('Error, status code: ' + res.status);
    };
    HttpService.prototype.onEnd = function () {
    };
    HttpService.prototype.showLoader = function () {
    };
    HttpService.prototype.hideLoader = function () {
    };
    HttpService.prototype.getHTTPOptions = function (tokenId, id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        if (tokenId) {
            httpOptions.headers = httpOptions.headers.set('Authorization', tokenId);
        }
        if (id) {
            httpOptions.headers = httpOptions.headers.set('AuthUser', id);
        }
        return httpOptions;
    };
    HttpService.prototype.getHTTPOption = function (tokenId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        if (tokenId) {
            httpOptions.headers = httpOptions.headers.set('Authorization', tokenId);
        }
        return httpOptions;
    };
    // "./file.json"
    // public getJSON(filename: string): Observable<any> {
    //       return this.http.get(filename)
    //             .map((res: any) => res.json())
    //             .catch((error: any) => { console.log(error) });
    // }
    HttpService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    };
    HttpService.prototype.getJSON = function (jsonPath) {
        return this.http.get(jsonPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    HttpService.prototype.addToFormData = function (formData, obj) {
        Object.keys(obj).forEach(function (key) {
            debugger;
            if (key == "username") {
                formData.append("email", obj[key]);
            }
            else {
                formData.append(key, obj[key]);
            }
        });
    };
    HttpService.prototype.uploadData = function (event, urlStr, formName, otherBody, tokenId) {
        if (otherBody === void 0) { otherBody = {}; }
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            // formData.append('file', file, file.name);
            // formData.append('podXML', '1');
            formData.append('attachment', file);
            this.addToFormData(formData, otherBody);
            var options = this.upLoadOptions(tokenId);
            options['responseType'] = 'json';
            return this.http.post(urlStr, formData, options);
        }
    };
    HttpService.prototype.upLoadOptions = function (tokenId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        //  head.append('enctype', 'multipart/form-data');
        // headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('enctype', 'multipart/form-data');
        var httpOptions = {
            headers: headers
        };
        if (tokenId) {
            httpOptions.headers = httpOptions.headers.set('Authorization', tokenId);
        }
        return httpOptions;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/core/services/id-generator/id-generator.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/services/id-generator/id-generator.service.ts ***!
  \********************************************************************/
/*! exports provided: IDGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDGeneratorService", function() { return IDGeneratorService; });
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

var IDGeneratorService = /** @class */ (function () {
    function IDGeneratorService() {
        this.normalIDCounts = 0;
    }
    IDGeneratorService.prototype.generateNormalIDs = function (name) {
        return name + (++this.normalIDCounts);
    };
    IDGeneratorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], IDGeneratorService);
    return IDGeneratorService;
}());



/***/ }),

/***/ "./src/app/core/services/id-generator/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/id-generator/index.ts ***!
  \*****************************************************/
/*! exports provided: IDGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _id_generator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id-generator.service */ "./src/app/core/services/id-generator/id-generator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDGeneratorService", function() { return _id_generator_service__WEBPACK_IMPORTED_MODULE_0__["IDGeneratorService"]; });




/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: HttpService, ServiceModule, IDGeneratorService, GlobalProcessRoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ "./src/app/core/services/http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]; });

/* harmony import */ var _service_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.module */ "./src/app/core/services/service.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return _service_module__WEBPACK_IMPORTED_MODULE_1__["ServiceModule"]; });

/* harmony import */ var _id_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./id-generator */ "./src/app/core/services/id-generator/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDGeneratorService", function() { return _id_generator__WEBPACK_IMPORTED_MODULE_2__["IDGeneratorService"]; });

/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing */ "./src/app/core/services/routing/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalProcessRoutingService", function() { return _routing__WEBPACK_IMPORTED_MODULE_3__["GlobalProcessRoutingService"]; });







/***/ }),

/***/ "./src/app/core/services/routing/global-process-routing.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/services/routing/global-process-routing.service.ts ***!
  \*************************************************************************/
/*! exports provided: GlobalProcessRoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalProcessRoutingService", function() { return GlobalProcessRoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_routing_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-routing.base */ "./src/app/core/services/routing/global-routing.base.ts");
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


var GlobalProcessRoutingService = /** @class */ (function (_super) {
    __extends(GlobalProcessRoutingService, _super);
    function GlobalProcessRoutingService() {
        var _this = _super.call(this) || this;
        _this.myRoutes = [
            {
                label: 'Accouting Reconciliation',
                path: 'accounting/reconciliation'
            },
            {
                label: 'Accounting Reconciliation-output',
                path: 'accounting/reconciliation-output'
            },
            {
                label: 'Galary Submit Job',
                path: 'aduit/galary-submit-job'
            },
            {
                label: 'Paragraph Report Submit Job',
                path: 'aduit/paragraph-report-submit-job'
            },
            {
                label: 'Audit Gallary',
                path: 'aduit/audit-gallery'
            },
            {
                label: 'Paragraph Report',
                path: 'aduit/paragraph-report'
            }
        ];
        return _this;
    }
    GlobalProcessRoutingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalProcessRoutingService);
    return GlobalProcessRoutingService;
}(_global_routing_base__WEBPACK_IMPORTED_MODULE_1__["GlobalRouting"]));



/***/ }),

/***/ "./src/app/core/services/routing/global-routing.base.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/services/routing/global-routing.base.ts ***!
  \**************************************************************/
/*! exports provided: GlobalRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalRouting", function() { return GlobalRouting; });
var GlobalRouting = /** @class */ (function () {
    function GlobalRouting() {
    }
    GlobalRouting.prototype.findPath = function (label) {
        var path = this.myRoutes
            .find(function (item) {
            return item.label === label;
        });
        if (path) {
            return path.path;
        }
        else {
            return '**';
        }
    };
    return GlobalRouting;
}());



/***/ }),

/***/ "./src/app/core/services/routing/index.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/routing/index.ts ***!
  \************************************************/
/*! exports provided: GlobalProcessRoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_process_routing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-process-routing.service */ "./src/app/core/services/routing/global-process-routing.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalProcessRoutingService", function() { return _global_process_routing_service__WEBPACK_IMPORTED_MODULE_0__["GlobalProcessRoutingService"]; });




/***/ }),

/***/ "./src/app/core/services/service.module.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/service.module.ts ***!
  \*************************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _id_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id-generator */ "./src/app/core/services/id-generator/index.ts");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing */ "./src/app/core/services/routing/index.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/base.service */ "./src/app/core/base/base.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/app/core/services/constants/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _id_generator__WEBPACK_IMPORTED_MODULE_1__["IDGeneratorService"],
                _routing__WEBPACK_IMPORTED_MODULE_2__["GlobalProcessRoutingService"],
                _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
                _base_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
                _constants__WEBPACK_IMPORTED_MODULE_5__["ConstantService"]
            ]
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "./src/app/core/shared/constant/index.ts":
/*!***********************************************!*\
  !*** ./src/app/core/shared/constant/index.ts ***!
  \***********************************************/
/*! exports provided: CustomerServicesUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-constants */ "./src/app/core/shared/constant/url-constants/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerServicesUrls", function() { return _url_constants__WEBPACK_IMPORTED_MODULE_0__["CustomerServicesUrls"]; });




/***/ }),

/***/ "./src/app/core/shared/constant/url-constants/customer-services.constants.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core/shared/constant/url-constants/customer-services.constants.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomerServicesUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServicesUrls", function() { return CustomerServicesUrls; });
/* harmony import */ var _url_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.base */ "./src/app/core/shared/constant/url-constants/url.base.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
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

 //'./../environments/environment';
var CustomerServicesUrls = /** @class */ (function (_super) {
    __extends(CustomerServicesUrls, _super);
    function CustomerServicesUrls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerServicesUrls.ARTLOGAUTOMATION_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl; //"http://localhost:3000/";
    //public static ARTLOGAUTOMATION_URL = "https://gmartlogautomationdemo.mpstechnologies.com/";
    //public static ARTLOGAUTOMATION_URL = "https://gmartlogautomation.mpstechnologies.com/";
    CustomerServicesUrls.SMARTSHEET_LOGIN = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/login";
    CustomerServicesUrls.SMARTSHEET_LOGOUT = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/logout";
    CustomerServicesUrls.ARTLOG_INIT = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/artloginit/";
    CustomerServicesUrls.ARTLOG_DATA = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/artlogdata/";
    //setDefaultSearch
    CustomerServicesUrls.ARTLOG_JOBADD = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/addnewjobs/";
    CustomerServicesUrls.ARTLOG_UPDATEJOBS = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/updateJob/";
    CustomerServicesUrls.ARTLOG_UPDATEJOBS_Verified = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/updateJobVerified/";
    CustomerServicesUrls.ARTLOG_KILLEDSELECTEDJOBS = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/killedRows/";
    CustomerServicesUrls.ARTLOG_UnKILLEDSELECTEDJOBS = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/unkilledRows/";
    CustomerServicesUrls.ARTLOG_FLAGEDSELECTEDJOBS = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/flagedRows/";
    CustomerServicesUrls.ARTLOG_ASSIGNAUDITORS = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/assignAuditors/";
    CustomerServicesUrls.ARTLOG_UnFLAGEDSELECTEDJOBS = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/unflagedRows/";
    CustomerServicesUrls.ARTLOG_REDDRUSERINFO = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/getUserInfo/";
    CustomerServicesUrls.ARTLOG_SEARCHSAVE = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/searchState/";
    CustomerServicesUrls.ARTLOG_GRIDSTATESAVE = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/gridStage/";
    CustomerServicesUrls.ARTLOG_GRIDSTATECLEAR = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/cleargridStage/";
    CustomerServicesUrls.ARTLOG_DELETE_SEARCHSAVE = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/dellSearchState/";
    CustomerServicesUrls.ARTLOG_SETDEFAULT_SEARCH = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/setDefaultSearch/";
    CustomerServicesUrls.ARTLOG_BULKBATCH = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/updateBulkBatch/";
    CustomerServicesUrls.ARTLOG_BULK_EXCEPTIONCAT = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/updateBulkExceptionCat/";
    CustomerServicesUrls.ARTLOG_BULK_BULKBATCHCDATE = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/updateBulkBatchCDate/";
    CustomerServicesUrls.ARTLOG_BULK_EXCEPTION = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/updateBulkException/";
    CustomerServicesUrls.ARTLOG_BULKTAGS = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/updateBulkTags/";
    CustomerServicesUrls.JOBSMETA_DATA = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/jobsMetadata/";
    CustomerServicesUrls.UPDATEASSETTAGS = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/updateAsset/";
    CustomerServicesUrls.USERINFO_DATA = "https://mpstrakdemo.mpstechnologies.com/mpstrak/production/taskTrakingReport";
    CustomerServicesUrls.JOBSMETA_DATA1 = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/artlogdata/";
    CustomerServicesUrls.ARTLOG_TeamData = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/artlogteamdata/";
    CustomerServicesUrls.ARTLOG_DCASUMMARY = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/dsmsummary/";
    CustomerServicesUrls.ARTLOG_JOBS_REFRESH = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/refreshjobs/";
    CustomerServicesUrls.ARTLOG_JOBS_REFRESH_SHOW = CustomerServicesUrls.ARTLOGAUTOMATION_URL + "api/showrefreshjobs/";
    CustomerServicesUrls.TK_CUSTOMER_BASE_URL = 'https://democswebservices.mps-think.com/';
    CustomerServicesUrls.TK_CUSTOMER_LOGIN = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'login';
    CustomerServicesUrls.TK_CUSTOMER_ORDER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/order';
    CustomerServicesUrls.TK_CUSTOMER_ADD_ORDER_SEARCH = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/subscriptionDefDetails';
    CustomerServicesUrls.TK_CUSTOMER_REFERENCE_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'dashboardcsr';
    CustomerServicesUrls.TK_CUSTOMER_REFERENCE_SEARCH_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'searchDocumentReferenceList';
    CustomerServicesUrls.TK_CUSTOMER_AXUILIARY_ADD_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAuxiliaryAdd';
    CustomerServicesUrls.TK_CUSTOMER_AXUILIARY_ADD_SUBMIT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAuxiliaryAddSubmit';
    CustomerServicesUrls.TK_CUSTOMER_REFERENCE_ADD_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/addDocumentReference';
    CustomerServicesUrls.TK_CUSTOMER_REFERENCE_DESCRIPTIONS_COUNT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getDescriptionCount';
    CustomerServicesUrls.TK_CUSTOMER_ADD_CUSTOMER_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAdd';
    CustomerServicesUrls.TK_CUSTOMER_GET_COUNTRY_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getCountry';
    CustomerServicesUrls.TK_CUSTOMER_ADDRESS_ADD_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddressAdd';
    CustomerServicesUrls.TK_CUSTOMER_ADDRESS_ADD_SUBMIT_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddressAddSubmit';
    CustomerServicesUrls.TK_CUSTOMER_ADDRESS_Edit_SUBMIT_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddressEditSubmit';
    CustomerServicesUrls.TK_CUST_CHK_LOGIN_AVAILABILITY = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'checkLogin';
    CustomerServicesUrls.TK_CUSTOMER_ADDRESS_Edit_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddressEdit';
    CustomerServicesUrls.TK_CUSTOMER_SEND_ADD_CUSTOMER_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddSubmit';
    CustomerServicesUrls.TK_CUSTOMER_EDIT_EXITING_CUSTOMER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerEdit';
    CustomerServicesUrls.TK_CUSTOMER_LOGIN_AUTH_DETAILS = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerLoginDetails';
    CustomerServicesUrls.TK_CUST_IP_ADDRESS_DETAILS = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'ipAddressDetails';
    CustomerServicesUrls.TK_DELETE_CUSTOMER_LOGIN = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'deleteCustomerLogin';
    CustomerServicesUrls.TK_TRANSFER_CUSTOMER_LOGIN = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'transferCustomerLogin';
    CustomerServicesUrls.TK_ADD_EDIT_IP_ADDRESS = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addIpAddress';
    CustomerServicesUrls.TK_ADD_CUST_AUTH_LOGIN = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addCustomerLogin';
    CustomerServicesUrls.TK_CUSTOMER_EDIT_SUBMIT_CUSTOMER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerEditSubmit';
    CustomerServicesUrls.TK_CUSTOMER_CHECK_DUPLICTE_CUSTOMER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'checkDuplicateCustomer';
    CustomerServicesUrls.TK_CUSTOMER_SEARCH_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerSearch';
    CustomerServicesUrls.TK_CUSTOMER_REFERENCE_EDIT_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'editDocumentReference';
    CustomerServicesUrls.TK_CANCEL_PAYMENT_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'cancelPayment';
    CustomerServicesUrls.TK_ATTACHMENT_LIST_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAttachment';
    // public static TK_ORDER_CODE_LOOKUP_SEARCH = CustomerServicesUrls.TK_CUSTOMER_BASE_URL+'order/orderCode';
    CustomerServicesUrls.TK_EDIT_HEADER_INFO = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'selectEditOrderHeader';
    CustomerServicesUrls.TK_ORDER_CODE_LOOKUP_SEARCH = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/orderCode';
    CustomerServicesUrls.TK_ORDER_CLASS_LOOKUP_SEARCH = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/orderClassLookUp';
    CustomerServicesUrls.TK_SOURCE_CODE_LOOKUP_SEARCH = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'order/sourceCode';
    CustomerServicesUrls.TK_ORDER_IN_PROGRESS = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/orderProgress';
    CustomerServicesUrls.TK_SAVE_ORDER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/addOrder';
    CustomerServicesUrls.TK_EDIT_ORDER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/customerOrdersEdit';
    CustomerServicesUrls.TK_CUSTOMER_LIST = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/customerDetail';
    CustomerServicesUrls.TK_CUSTOMER_ADDRESS = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/customerAddress';
    CustomerServicesUrls.TK_AGENCY_SEARCH = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'agenciesSearch';
    CustomerServicesUrls.TK_AGENCY_LIST = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'agencies';
    CustomerServicesUrls.TK_AGENCY_EDIT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'editAgency';
    CustomerServicesUrls.TK_ADD_AGENCY_GET = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addAgency';
    CustomerServicesUrls.TK_ADD_AGENCY = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addAgencySubmit';
    CustomerServicesUrls.TK_AGENCY_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/onAgencyChange';
    CustomerServicesUrls.TK_RATE_CARD_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/onRateCardChange';
    CustomerServicesUrls.TK_ORDER_CODE_LOOKUP_DROPDOWN = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/searchByOrderClass';
    CustomerServicesUrls.TK_ORDER_UPDATE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/orderUpdate';
    // payments url
    CustomerServicesUrls.TK_PAYMENTS_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'Payments';
    CustomerServicesUrls.TK_PAYMENTS_DROPDOWN_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'paymentFilterDropDown';
    CustomerServicesUrls.TK_EDIT_PAYMENTS_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'EditPayment';
    CustomerServicesUrls.TK_EDIT_PAYMENTS_SAVE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'UpdatePayment';
    CustomerServicesUrls.TK_MAKE_PAYMENTS_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'MakePayment';
    CustomerServicesUrls.TK_MAKE_PAYMENTS_TABLE_FILTER_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'orderFIlterDropDownResult';
    CustomerServicesUrls.TK_MAKE_PAYMENTS_SAVE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'MakePaymentSave';
    CustomerServicesUrls.TK_ORDER_LOOK_UP_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'orderlookup';
    CustomerServicesUrls.TK_PAYMENT_THRESHOLD_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'ThresholdData';
    CustomerServicesUrls.TK_PAYMENT_THRESHOLD_SETTINGS_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'thresholdSettingOptions';
    CustomerServicesUrls.TK_DEPOSIT_PAYMENTS_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'DepositPaymentSave';
    CustomerServicesUrls.TK_PAYMENT_BREAKDOWN_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'paymentBreakdown';
    CustomerServicesUrls.TK_PAYMENTS_TRANSFER_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'paymentTransfer';
    CustomerServicesUrls.TK_PAYMENTS_DEPOSIT_SUMMARY_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'depositeSummary';
    CustomerServicesUrls.TK_PAYMENT_REFUND_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'depositRefundPayment';
    CustomerServicesUrls.TK_GET_DEPOSIT_BALANCE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getDepositAmount';
    // Deposit Details For payment Table Data
    CustomerServicesUrls.TK_GET_DEPOSIT_DETAILS_FOR_PAYMENT_TABLE_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getOrderItemsFromDepositPay';
    // Pay From Deposit Save
    CustomerServicesUrls.TK_GET_DEPOSIT_SAVE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'payFromDepositAccountSave';
    // payment Accounts
    CustomerServicesUrls.TK_PAYMENT_ACCOUNT_DETAILS_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'paymentAccountList';
    CustomerServicesUrls.TK_PAYMENT_ADD_ACCOUNT_DETAILS_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addAccountDetail';
    CustomerServicesUrls.TK_PAYMENT_DEBIT_ACCOUNT_SAVE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'savePaymentAccount';
    CustomerServicesUrls.TK_PAYMENT_CREDIT_GET_ADDRESS_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getAddressList';
    // Payment Review
    CustomerServicesUrls.TK_PAYMENT_REVIEW_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'reviewPayments';
    // customer History
    CustomerServicesUrls.TK_CUSTOMER_HISTORY_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerHistory';
    CustomerServicesUrls.TK_CUSTOMER_ADDRESS_HISTORY_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addressHistory';
    // NOTES API
    CustomerServicesUrls.TK_NOTE_EXIST_DATA_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'checkNoteExist';
    CustomerServicesUrls.TK_CUSTOMER_NOTE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerNoteFilter';
    CustomerServicesUrls.TK_CUSTOMER_NOTE_DROPDOWN_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerNote';
    CustomerServicesUrls.TK_NOTES_EDIT_SAVE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'editNote';
    CustomerServicesUrls.TK_NOTES_ADD_GET_DATA_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addNote';
    CustomerServicesUrls.TK_NOTES_ADD_SAVE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addNoteSubmit';
    CustomerServicesUrls.TK_NOTES_DELETE_NOTE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'deleteNote';
    CustomerServicesUrls.TK_ORDER_DROPDOWN = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/viewOrderType';
    CustomerServicesUrls.TK_SUBS_DEF_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/onSubscriptionChange';
    CustomerServicesUrls.TK_PARTIAL_PAYMENT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'partialPaymentDetails';
    CustomerServicesUrls.TK_CHECK_DUPLICATE_ORDER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/checkDuplicateOrder';
    CustomerServicesUrls.TK_CHECK_RENEW_ORDER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/getRenewalOrder';
    CustomerServicesUrls.TK_DEL_CUSTOMER_TEMP_ADD = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerDeleteAddress';
    CustomerServicesUrls.TK_GET_COUNTRY_LIST = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getStateList';
    CustomerServicesUrls.TK_SHOW_ALL_DOC_REF = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'showAllDocumentReferenceList';
    CustomerServicesUrls.TK_CUSTOMER_ERROR_LOG = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'sendMail';
    CustomerServicesUrls.TK_CUSTOMER_CANCEL_ORDER_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/cancelOrderDetail';
    CustomerServicesUrls.TK_CUSTOMER_CANCEL_ORDER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/cancelOrder';
    CustomerServicesUrls.TK_CANCEL_ORDER_DETAILS = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/cancelOrderDetailInEntireSub';
    CustomerServicesUrls.TK_CUSTOMER_AUTOSUGGEST = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'searchCustomerBillToAddress';
    CustomerServicesUrls.TK_CUSTOMER_ORDER_QUANTITY_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/customerOrder/noOfIssueChange';
    CustomerServicesUrls.TK_CUSTOMER_ORDER_EXPIRY_DATE_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/customerOrder/expireDateCalculate';
    CustomerServicesUrls.TK_ORDER_ISSUE_NO_OF_COPY_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/customerOrder/bundleQuantityChangeOption';
    CustomerServicesUrls.TK_CUSTOMER_DOC_REF_VIEW_DETAILS = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getDocumentReferenceDetail';
    CustomerServicesUrls.TK_ORDER_DATEBASE_NO_OF_COPY_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/customerOrder/noOfCopiesforDateOption';
    CustomerServicesUrls.TK_ORDER_QUANTITY_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/customerOrder/optionBundleQuantityChange';
    CustomerServicesUrls.TK_CUSTOMER_VIEW_EDIT_TRAILS = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getEditTrialOnDocumentReference';
    CustomerServicesUrls.TK_CUSTOMER_ADD_ATTACHMENT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addAttachment';
    CustomerServicesUrls.TK_CUSTOMER_ADD_ATTACHMENT_SUBMIT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addAttachmentSubmit';
    CustomerServicesUrls.TK_ATTACHMENT_TABLE_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAttachmentFilter';
    CustomerServicesUrls.TK_DELETE_ATTACHMENT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'deleteAttachment';
    CustomerServicesUrls.TK_VIEW_ATTACHMENT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'viewAttachment';
    CustomerServicesUrls.TK_NAME_EDIT_DATA_ATTACHMENT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'editAttachment';
    CustomerServicesUrls.TK_NAME_CLEAR_ADDRESS_INFO = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'clearAddressInfo';
    CustomerServicesUrls.TK_PAYMENTS_GET_ADDRESS_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getPayerCustomerAddress';
    CustomerServicesUrls.TK_NAME_COMPLAINT_SERVICE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'order/orderComplaintData';
    CustomerServicesUrls.TK_ORDER_AUX_FIELD = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/orderAuxiliaryAdd';
    CustomerServicesUrls.TK_NAME_COMPLAINT_SERVICE_TABLE_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'order/serviceData';
    CustomerServicesUrls.TK_NAME_SERVICE_FILTER_DROPDOWN_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'order/serviceDetails';
    CustomerServicesUrls.TK_NAME_SERVICE_ROW_COUNT_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'order/rowCountValue';
    CustomerServicesUrls.TK_NAME_SERVICE_UPDATE_DATA_SAVE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'order/updateService';
    CustomerServicesUrls.TK_ORDER_AUXILIARY_ADD_SUBMIT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/orderAuxiliaryAddSubmit';
    CustomerServicesUrls.TK_NAME_COMPLAINT_DATA_SUBMIT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'order/serviceSave';
    CustomerServicesUrls.TK_PKG_DEF_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/onPkgDefChange';
    CustomerServicesUrls.TK_NAME_SERVICE_UPDATE_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'order/showDisplayForUpdate';
    CustomerServicesUrls.TK_CUSTOMER_BACK_ISSUE_ORDERS = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/backIssues';
    CustomerServicesUrls.TK_ON_SOURCE_CODE_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/onSourceCodeChange';
    CustomerServicesUrls.TK_SAVE_ORDER_QUANTITY_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/saveOrderQuantityChangeOption';
    CustomerServicesUrls.TK_GET_EXPIRY_DATE_ON_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/onDateChange';
    CustomerServicesUrls.TK_EDIT_HEADER_INFO_SAVE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'updateEditOrderHeader';
    CustomerServicesUrls.TK_SUPPLEMENT_REFUND = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'supplementalRefund';
    CustomerServicesUrls.TK_ORDER_HISTORY = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/orderHistory';
    CustomerServicesUrls.TK_SERVICE_HISTORY = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'order/serviceHistory';
    CustomerServicesUrls.TK_PAYMENT_HISTORY = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'paymentHistory';
    // *********** Temporary Suspension ************
    CustomerServicesUrls.TK_TEMP_SUSPENSION_TABLE_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'selectTemporarySuspension';
    CustomerServicesUrls.TK_ADD_TEMP_SUSPENSION = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'selectAddTempSuspension';
    CustomerServicesUrls.TK_TEMP_SUSPENSION_SAVE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'saveAddTempSuspension';
    // *********** END Temporary Suspension ************
    CustomerServicesUrls.TK_SERVICE_AUXILLIARY_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'serviceAuxiliary';
    CustomerServicesUrls.TK_SERVICE_AUXILLIARY_DATA_SAVE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'serviceAuxiliarySubmit';
    CustomerServicesUrls.TK_SERVICE_TEMPLATE_CHECKBOX = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'order/serviceComplaintButton';
    CustomerServicesUrls.TK_PAYMENT_AUXILIARY = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'paymentAuxiliary';
    CustomerServicesUrls.TK_PAYMENT_AUXILIARY_SAVE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'paymentAuxiliarySubmit';
    CustomerServicesUrls.TK_CUST_ADDR_AUXILIARY = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddressAuxiliary';
    CustomerServicesUrls.TK_CUST_ADDR_AUXILIARY_SAVE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddressAuxiliarySubmit';
    return CustomerServicesUrls;
}(_url_base__WEBPACK_IMPORTED_MODULE_0__["UrlBase"]));



/***/ }),

/***/ "./src/app/core/shared/constant/url-constants/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/shared/constant/url-constants/index.ts ***!
  \*************************************************************/
/*! exports provided: CustomerServicesUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer_services_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-services.constants */ "./src/app/core/shared/constant/url-constants/customer-services.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerServicesUrls", function() { return _customer_services_constants__WEBPACK_IMPORTED_MODULE_0__["CustomerServicesUrls"]; });




/***/ }),

/***/ "./src/app/core/shared/constant/url-constants/url.base.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/shared/constant/url-constants/url.base.ts ***!
  \****************************************************************/
/*! exports provided: UrlBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlBase", function() { return UrlBase; });
var UrlBase = /** @class */ (function () {
    function UrlBase() {
    }
    // Insight and THINK Dev
    UrlBase.THINK_PROCESS_SERVER_URL = 'https://alpha1.mpsinsight.com/';
    return UrlBase;
}());



/***/ }),

/***/ "./src/app/core/shared/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/shared/index.ts ***!
  \**************************************/
/*! exports provided: SessionObject, Utils, ProjectUtils, SearchModelUtil, CustomerServicesUrls, UserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-object */ "./src/app/core/shared/session-object.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionObject", function() { return _session_object__WEBPACK_IMPORTED_MODULE_0__["SessionObject"]; });

/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/app/core/shared/utility/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["Utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectUtils", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["ProjectUtils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchModelUtil", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["SearchModelUtil"]; });

/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./src/app/core/shared/constant/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerServicesUrls", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["CustomerServicesUrls"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/core/shared/user/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["UserDetails"]; });





// export * from './timeOut.service';


/***/ }),

/***/ "./src/app/core/shared/session-object.ts":
/*!***********************************************!*\
  !*** ./src/app/core/shared/session-object.ts ***!
  \***********************************************/
/*! exports provided: SessionObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionObject", function() { return SessionObject; });
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
var SessionObject = /** @class */ (function () {
    function SessionObject() {
    }
    SessionObject.getSessionObject = function () {
        return JSON.parse(localStorage.getItem('sessionObject'));
    };
    SessionObject.setSessionObject = function (sessionObject) {
        localStorage.setItem('sessionObject', JSON.stringify(sessionObject));
    };
    SessionObject.setRefObject = function (sessionObject) {
        localStorage.setItem('setRefObject', JSON.stringify(sessionObject));
    };
    SessionObject.getRefObject = function () {
        return JSON.parse(localStorage.getItem('setRefObject'));
    };
    SessionObject.setUserDetails = function (userDetail) {
        localStorage.setItem('UserDetails', JSON.stringify(userDetail));
    };
    SessionObject.getUserDetails = function () {
        return JSON.parse(localStorage.getItem('UserDetails'));
    };
    SessionObject.removeUserDetails = function () {
        localStorage.removeItem('UserDetails');
    };
    SessionObject.setJobKey = function (sessionObject) {
        localStorage.setItem('JobKey', JSON.stringify(sessionObject));
    };
    SessionObject.getJobKey = function () {
        return JSON.parse(localStorage.getItem('JobKey'));
    };
    SessionObject.setRefID = function (sessionObject) {
        localStorage.setItem('RefID', JSON.stringify(sessionObject));
    };
    SessionObject.getRefID = function () {
        return JSON.parse(localStorage.getItem('RefID'));
    };
    SessionObject.removeSessionObject = function () {
        localStorage.removeItem('sessionObject');
    };
    SessionObject.setCustomerID = function (sessionObject) {
        localStorage.setItem('customerId', JSON.stringify(sessionObject));
    };
    SessionObject.getCustomerID = function () {
        var retVal = JSON.parse(localStorage.getItem('customerId'));
        return retVal;
    };
    SessionObject.removeCustomerID = function () {
        localStorage.removeItem('customerId');
    };
    SessionObject.setAddressStatus = function (sessionObject) {
        localStorage.setItem('AddStatus', JSON.stringify(sessionObject));
    };
    SessionObject.getAddressStatus = function () {
        return JSON.parse(localStorage.getItem('AddStatus'));
    };
    SessionObject.getopenTab = function () {
        return JSON.parse(localStorage.getItem('openTab'));
    };
    SessionObject.setOpenTab = function (sessionObject) {
        localStorage.setItem('openTab', JSON.stringify(sessionObject));
    };
    SessionObject.getEditPaymentData = function () {
        return JSON.parse(localStorage.getItem('editData'));
    };
    SessionObject.setEditPaymentData = function (sessionObject) {
        localStorage.setItem('editData', JSON.stringify(sessionObject));
    };
    SessionObject.removeOpenTab = function () {
        localStorage.removeItem('openTab');
    };
    SessionObject.setOCID = function (ocid) {
        localStorage.setItem('OCId', JSON.stringify(ocid));
    };
    SessionObject.getOCID = function () {
        return JSON.parse(localStorage.getItem('OCId'));
    };
    SessionObject.removeOCID = function () {
        localStorage.removeItem('OCId');
    };
    SessionObject.setOcType = function (ocType) {
        localStorage.setItem('ocType', JSON.stringify(ocType));
    };
    SessionObject.getOcType = function () {
        var retVal = JSON.parse(localStorage.getItem('ocType'));
        return retVal;
    };
    return SessionObject;
}());



/***/ }),

/***/ "./src/app/core/shared/user/index.ts":
/*!*******************************************!*\
  !*** ./src/app/core/shared/user/index.ts ***!
  \*******************************************/
/*! exports provided: UserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details */ "./src/app/core/shared/user/user-details.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return _user_details__WEBPACK_IMPORTED_MODULE_0__["UserDetails"]; });




/***/ }),

/***/ "./src/app/core/shared/user/user-details.ts":
/*!**************************************************!*\
  !*** ./src/app/core/shared/user/user-details.ts ***!
  \**************************************************/
/*! exports provided: UserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
var UserDetails = /** @class */ (function () {
    function UserDetails() {
    }
    return UserDetails;
}());



/***/ }),

/***/ "./src/app/core/shared/utility/array.util.ts":
/*!***************************************************!*\
  !*** ./src/app/core/shared/utility/array.util.ts ***!
  \***************************************************/
/*! exports provided: ArrayUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUtil", function() { return ArrayUtil; });
var ArrayUtil = /** @class */ (function () {
    function ArrayUtil() {
    }
    ArrayUtil.prototype.addKeyWithBoolen = function (data, keys) {
        var id = null;
        data.forEach(function (item) {
            id = 'radio-' + (++ArrayUtil.count);
            keys.forEach(function (key) {
                if (item[key.key] === key.conditonStr) {
                    item[key.outputKey] = {
                        value: true,
                        id: id
                    };
                }
                else {
                    item[key.outputKey] = {
                        value: false,
                        id: id
                    };
                }
            });
        });
    };
    ArrayUtil.prototype.addSrNo = function (data, outPutKey) {
        if (outPutKey === void 0) { outPutKey = 'SrNo'; }
        data.forEach(function (item, index) {
            item[outPutKey] = index + 1;
        });
    };
    ArrayUtil.prototype.addConfigRadio = function (data, keys) {
        var id = null;
        data.forEach(function (item) {
            id = 'radio-' + (++ArrayUtil.count);
            keys.forEach(function (key) {
                if (item[key.key] === key.conditonStr) {
                    item[key.outputKey] = {
                        name: id,
                        value: key.conditonStr,
                        defaultValue: key.conditonStr,
                        outputKeyInData: key.outputKeyInData
                    };
                }
                else {
                    item[key.outputKey] = {
                        name: id,
                        value: null,
                        defaultValue: key.conditonStr,
                        outputKeyInData: key.outputKeyInData
                    };
                }
            });
        });
    };
    ArrayUtil.prototype.convert01ToBoolean = function (arr, conditionFn) {
        var keys = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            keys[_i - 2] = arguments[_i];
        }
        arr.forEach(function (item) {
            keys.forEach(function (key) {
                if (conditionFn(item)) {
                    if (item[key] == 0) {
                        item[key] = false;
                    }
                    else if (item[key] == 1) {
                        item[key] = true;
                    }
                }
            });
        });
    };
    ArrayUtil.count = 0;
    return ArrayUtil;
}());



/***/ }),

/***/ "./src/app/core/shared/utility/date.util.ts":
/*!**************************************************!*\
  !*** ./src/app/core/shared/utility/date.util.ts ***!
  \**************************************************/
/*! exports provided: DateUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtil", function() { return DateUtil; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

var DateUtil = /** @class */ (function () {
    function DateUtil() {
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
    }
    DateUtil.prototype.TempdateFormate = function (date, format) {
        if (format === void 0) { format = 'dd/MM/yyyy'; }
        var transformedDate = this.datePipe.transform(date, format);
        return transformedDate;
    };
    DateUtil.prototype.dateFormate = function (date, format) {
        if (format === void 0) { format = 'MMM dd, yyyy hh:mm:ss a'; }
        var transformedDate = this.datePipe.transform(date, format);
        return transformedDate;
    };
    DateUtil.prototype.convertKeyToDate = function (obj, key, format) {
        if (format === void 0) { format = 'MMM dd, yyyy hh:mm:ss a'; }
        var transformedDate = this.dateFormate(obj[key]);
        return transformedDate;
    };
    DateUtil.prototype.convertKeyToDateOnly = function (obj, key, format) {
        if (format === void 0) { format = 'MMM dd, yyyy'; }
        var transformedDate = this.dateFormate(obj[key]);
        return transformedDate;
    };
    DateUtil.prototype.convertArrayKeytoDate = function (arr, key, format) {
        var _this = this;
        if (format === void 0) { format = 'MMM dd, yyyy hh:mm:ss a'; }
        var outArr = arr.forEach(function (item) {
            item[key] = _this.convertKeyToDate(item, key, format);
        });
    };
    DateUtil.prototype.convertArrayKeytoDateOnly = function (arr, key, format) {
        var _this = this;
        if (format === void 0) { format = 'MMM dd, yyyy'; }
        var outArr = arr.forEach(function (item) {
            item[key] = _this.convertKeyToDateOnly(item, key, format);
        });
    };
    //  Jul 15, 2010 9: 49: 52 AM
    DateUtil.prototype.convertKeyToDatehyphn = function (obj, key, format) {
        if (format === void 0) { format = 'yyyy-mm-dd'; }
        var transformedDate = this.dateWithoutTime(obj[key]);
        return transformedDate;
    };
    DateUtil.prototype.convertArrayKeytoDatewithoutTime = function (arr, key, format) {
        var _this = this;
        if (format === void 0) { format = 'yyyy-mm-dd'; }
        var outArr = arr.forEach(function (item) {
            item[key] = _this.convertKeyToDatehyphn(item, key, format);
        });
    };
    DateUtil.prototype.dateWithoutTime = function (date, format) {
        if (format === void 0) { format = 'yyyy-mm-dd'; }
        if (date !== null) {
            var transformedDate = date.split(' ')[0];
            return transformedDate;
        }
    };
    return DateUtil;
}());



/***/ }),

/***/ "./src/app/core/shared/utility/grid.util.ts":
/*!**************************************************!*\
  !*** ./src/app/core/shared/utility/grid.util.ts ***!
  \**************************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _html_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html.util */ "./src/app/core/shared/utility/html.util.ts");


var Grid = /** @class */ (function () {
    function Grid() {
        this.html = new _html_util__WEBPACK_IMPORTED_MODULE_1__["HtmlUtil"]();
    }
    Object.defineProperty(Grid.prototype, "GRIDWIDTH", {
        get: function () {
            return window.screen.availWidth;
        },
        enumerable: true,
        configurable: true
    });
    Grid.prototype.ag_SetWidth = function (perc) {
        return (this.GRIDWIDTH * perc) / 100;
    };
    Grid.prototype.makeColumnsFromSimpleArray = function (header) {
        var _this = this;
        var len = header.length;
        var width = 10;
        width = 100 / len;
        var colDef = header.map(function (item) {
            return {
                headerName: item,
                field: item.toLowerCase().split(' ').join('_'),
                minWidth: _this.ag_SetWidth(width),
            };
        });
        return colDef;
    };
    Grid.prototype.dynamicColumnsFromObj = function (obj) {
        var _this = this;
        var keys = Object.keys(obj);
        var len = keys.length + 1;
        var width = 10;
        width = 100 / len;
        var colDef = keys.map(function (key) {
            return {
                headerName: key,
                field: obj[key],
                minWidth: _this.ag_SetWidth(width)
            };
        });
        return colDef;
    };
    Grid.prototype.setGridRowData = function (gridApi, data) {
        if (Array.isArray(data) && data.length) {
            gridApi['gridEmpty'] = false;
            gridApi.setRowData(data);
        }
        else {
            gridApi['gridEmpty'] = true;
            gridApi.setRowData([]);
        }
    };
    Grid.prototype.autoSizeColumns = function (gridAPIS) {
        if (gridAPIS.gridApi) {
            var columnApi_1 = gridAPIS.columnApi;
            var gridApi = gridAPIS.gridApi;
            var allColumnIds_1 = [];
            columnApi_1.getAllColumns()
                .forEach(function (column) {
                allColumnIds_1.push(column.colId);
            });
            if (gridApi.getDisplayedRowCount() !== 0) {
                var timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(50, 100);
                var timerSub_1 = timer.subscribe(function (data) {
                    if (data === 5) {
                        timerSub_1.unsubscribe();
                    }
                    columnApi_1.autoSizeColumns(allColumnIds_1);
                });
            }
        }
        // gridAPIS.gridApi.sizeColumnsToFit();
    };
    Grid.prototype.setDynamicColumnDef = function (gridAPIS, cols) {
        if (gridAPIS.gridApi) {
            var gridApi = gridAPIS.gridApi;
            //   gridApi.hideOverlay();
            gridApi.setColumnDefs(cols);
            gridApi.sizeColumnsToFit();
        }
    };
    Grid.prototype.checkBoxBootstrap = function (id, checked, disabled) {
        if (checked === void 0) { checked = false; }
        if (disabled === void 0) { disabled = ''; }
        var checkboxStr = "<div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" " + (checked ? 'checked' : '') + " " + disabled + " id=\"" + id + "\"\n            data-dismiss=\"modal\">\n            <label style=\"display:block\" class=\"custom-control-label\" for=\"" + id + "\"></label>\n          </div>";
        return checkboxStr;
    };
    Grid.prototype.agCheckBox = function (key, disabled) {
        var _this = this;
        if (disabled === void 0) { disabled = ''; }
        return function (value) {
            var checked = true;
            var keyValue = value['data'][key];
            if ((keyValue == 0) && keyValue) {
                checked = false;
            }
            var id = 'ag-checkbox' + (++Grid.agElementIds);
            return _this.checkBoxBootstrap(id, checked, disabled);
        };
    };
    Grid.agElementIds = 0;
    return Grid;
}());



/***/ }),

/***/ "./src/app/core/shared/utility/html.util.ts":
/*!**************************************************!*\
  !*** ./src/app/core/shared/utility/html.util.ts ***!
  \**************************************************/
/*! exports provided: HtmlUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlUtil", function() { return HtmlUtil; });
var HtmlUtil = /** @class */ (function () {
    function HtmlUtil() {
    }
    HtmlUtil.prototype.checkBox = function (conditionValue, baseKey, key) {
        var _this = this;
        if (conditionValue) {
            return function (val) {
                _this.boolToCheckBox(val[baseKey][key] === conditionValue);
            };
        }
        else {
            return this.boolToCheckBox;
        }
    };
    HtmlUtil.prototype.boolToCheckBox = function (val, disabled) {
        if (disabled === void 0) { disabled = ''; }
        if (val) {
            return "<input type=\"checkbox\" name=\"check\" checked " + disabled + ">";
        }
        else {
            return "<input type=\"checkbox\" name=\"check\"   " + disabled + " >";
        }
    };
    HtmlUtil.prototype.radio = function (conditionValue, baseKey, key) {
        var values = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            values[_i - 3] = arguments[_i];
        }
        return function (val) {
            if (val[baseKey][key] === conditionValue) {
                return '<input type="radio" checked="true" name="' + val[baseKey][key] + '-role" value="' + values[1] + '" >';
            }
            else {
                return '<input type="radio" name="' + val[baseKey][key] + '-role" value="' + values[0] + '">';
            }
        };
    };
    HtmlUtil.prototype.fadeIn = function (id, durationInMilliseconds) {
        if (durationInMilliseconds === void 0) { durationInMilliseconds = 'slow'; }
        $('#' + id).fadeIn(durationInMilliseconds);
    };
    HtmlUtil.prototype.fadeOut = function (id, durationInMilliseconds) {
        if (durationInMilliseconds === void 0) { durationInMilliseconds = 'slow'; }
        $('#' + id).fadeOut(durationInMilliseconds);
    };
    HtmlUtil.prototype.showMsgForDuration = function (id, time) {
        var _this = this;
        if (time === void 0) { time = 2000; }
        this.fadeIn(id);
        setTimeout(function () {
            _this.fadeOut(id);
        }, time);
    };
    HtmlUtil.prototype.anchorTag = function (value) {
        return '<a href="javascript:;">' + value.value + '</a>';
    };
    HtmlUtil.prototype.numericValidation = function (e) {
        var input;
        if (e.which > 95 && e.which < 107) {
            return true;
        }
        else if ((e.which > 34 && e.which < 38) || e.which === 39 || e.which === 46) {
            return true;
        }
        else if (e.metaKey || e.ctrlKey) {
            return true;
        }
        else if (e.which === 32) {
            return false;
        }
        else if (e.which === 0) {
            return true;
        }
        else if (e.which < 33) {
            return true;
        }
        else if (e.which === 110 || e.which === 190) {
            return true;
        }
        input = String.fromCharCode(e.which);
        return !!/[\d\s]/.test(input);
    };
    HtmlUtil.prototype.numericValidationOnPaste = function (e) {
        var prevValue = e.target.value;
        setTimeout(function () {
            if (isNaN(e.target.value)) {
                e.target.value = prevValue;
            }
        }, 1);
    };
    HtmlUtil.prototype.scrollToTop = function () {
        var scrollingElement = (document.scrollingElement || document.body);
        $(scrollingElement).animate({
            scrollTop: 0
        }, 1000);
    };
    // To call the method pass array of id as param
    HtmlUtil.prototype.validator = function (array) {
        array.forEach(function (element) {
            var name = document.getElementById(element);
            if (name !== null) {
                if (name['value'] === '') {
                    $('#' + element).css('border', '1px solid red');
                }
                else {
                    $('#' + element).css('border', '1px solid #ced4da');
                }
            }
        });
    };
    return HtmlUtil;
}());



/***/ }),

/***/ "./src/app/core/shared/utility/index.ts":
/*!**********************************************!*\
  !*** ./src/app/core/shared/utility/index.ts ***!
  \**********************************************/
/*! exports provided: Utils, ProjectUtils, SearchModelUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/app/core/shared/utility/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"]; });

/* harmony import */ var _project_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-util */ "./src/app/core/shared/utility/project-util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectUtils", function() { return _project_util__WEBPACK_IMPORTED_MODULE_1__["ProjectUtils"]; });

/* harmony import */ var _search_model_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-model.util */ "./src/app/core/shared/utility/search-model.util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchModelUtil", function() { return _search_model_util__WEBPACK_IMPORTED_MODULE_2__["SearchModelUtil"]; });






/***/ }),

/***/ "./src/app/core/shared/utility/object.util.ts":
/*!****************************************************!*\
  !*** ./src/app/core/shared/utility/object.util.ts ***!
  \****************************************************/
/*! exports provided: ObjectUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUtil", function() { return ObjectUtil; });
var ObjectUtil = /** @class */ (function () {
    function ObjectUtil() {
    }
    ObjectUtil.prototype.asignObjTofirstOne = function (first) {
        var others = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            others[_i - 1] = arguments[_i];
        }
        others.forEach(function (other) {
            Object.assign(first, (other || {}));
        });
        return first;
    };
    ObjectUtil.prototype.deleteKeys = function (obj) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        keys.forEach(function (key) {
            delete obj[key];
        });
    };
    ObjectUtil.prototype.objectToArray = function (obj, keyKey, valueKey) {
        var keys = Object.keys(obj);
        var retValue = [];
        keys.forEach(function (key) {
            var singleObj = {};
            singleObj[keyKey] = key;
            singleObj[valueKey] = obj[key];
            retValue.push(singleObj);
        });
    };
    return ObjectUtil;
}());



/***/ }),

/***/ "./src/app/core/shared/utility/project-util.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/shared/utility/project-util.ts ***!
  \*****************************************************/
/*! exports provided: ProjectUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectUtils", function() { return ProjectUtils; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/app/core/shared/utility/utils.ts");
/* harmony import */ var _component_ag_component_ag_checbox_header_ag_checbox_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/ag-component/ag-checbox-header/ag-checbox-header.component */ "./src/app/component/ag-component/ag-checbox-header/ag-checbox-header.component.ts");
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


var ProjectUtils = /** @class */ (function (_super) {
    __extends(ProjectUtils, _super);
    function ProjectUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectUtils.getJobKey = function (value) {
        return function (value) {
            if (!!value.data.job_key) {
                return "<a href=\"https://greatminds.getbynder.com/workflow/job/view/" + value.data.job_key + "/\" target=\"_blank\">" + value.data.job_key + "</a>";
            }
            else {
                return "";
            }
        };
    };
    ProjectUtils.getLession = function (value) {
        return function (value) {
            if (!!value.data.jobMetaproperties && value.data.jobMetaproperties.hasOwnProperty("b447dc7d70b0420a8ac9ec9aeff78296")) {
                return value.data.jobMetaproperties.b447dc7d70b0420a8ac9ec9aeff78296;
            }
            else {
                return "";
            }
        };
    };
    ProjectUtils.getComponents = function (value) {
        return function (value) {
            //var ret ="";
            for (var _i = 0, _a = Object.entries(value.data.jobMetaproperties); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], val = _b[1];
                if (key == "87d538e6d3a442468b20426285aef253") {
                    return val;
                    break;
                }
            }
            return "";
        };
    };
    ProjectUtils.getGrades = function (value) {
        return function (value) {
            var _loop_1 = function (key, val) {
                if (key == "c0ac0a86e65f4f7ebd88dbd7e77965ef") {
                    var dd = value.data.grade.options.filter(function (dt) { return dt.ID.split("-").join("") == val; });
                    return { value: dd[0].label };
                    return "break";
                }
            };
            for (var _i = 0, _a = Object.entries(value.data.jobMetaproperties); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], val = _b[1];
                var state_1 = _loop_1(key, val);
                if (typeof state_1 === "object")
                    return state_1.value;
                if (state_1 === "break")
                    break;
            }
            return "";
        };
    };
    ProjectUtils.getModules = function (value) {
        return function (value) {
            var _loop_2 = function (key, val) {
                if (key == "7388493928bc4a9aa57ca65306ed1579") {
                    var dd = value.data.modules.options.filter(function (dt) { return dt.ID.split("-").join("") == val; });
                    if (dd.length > 0) {
                        return { value: dd[0].label };
                        return "break";
                    }
                }
            };
            ///debugger
            for (var _i = 0, _a = Object.entries(value.data.jobMetaproperties); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], val = _b[1];
                var state_2 = _loop_2(key, val);
                if (typeof state_2 === "object")
                    return state_2.value;
                if (state_2 === "break")
                    break;
            }
            return "";
        };
    };
    ProjectUtils.getArtComplexity = function (value) {
        return function (value) {
            for (var _i = 0, _a = Object.entries(value.data.jobMetaproperties); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], val = _b[1];
                if (key == "c7fbc907710045778ee29863e33d2bd2") {
                    return val;
                    break;
                }
            }
            return "";
        };
    };
    ProjectUtils.getArtAssignment = function (value) {
        return function (value) {
            for (var _i = 0, _a = Object.entries(value.data.jobMetaproperties); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], val = _b[1];
                if (key == "cd8809565088496da4955eb3327fea04") {
                    return val;
                    break;
                }
            }
            return "";
        };
    };
    //
    ProjectUtils.getMetainfo = function (value, key) {
        return function (value) {
            debugger;
            if (typeof value.getValue() == "object") {
                for (var _i = 0, _a = Object.entries(value.getValue()); _i < _a.length; _i++) {
                    var _b = _a[_i], key_1 = _b[0], val = _b[1];
                    if (key_1 == "b447dc7d70b0420a8ac9ec9aeff78296") {
                        return val;
                        break;
                    }
                }
                //return value.getValue()[ value.getValue().length -1 ].name;
            }
            else {
                return "";
            } // value['data'][key];
        };
    };
    ProjectUtils.getStageName = function (key) {
        return function (value) {
            if (value.getValue().length > 0) {
                return value.getValue()[value.getValue().length - 1].name;
            }
            else {
                return "";
            } // value['data'][key];
        };
    };
    ProjectUtils.displayThumbnail = function (value) {
        return "<img src=\"notfound.jpg\">";
    };
    ProjectUtils.getSessionObject = function () {
        return null;
    };
    ProjectUtils.decimaltwoplace = function (value) {
        if (value.value
            === null) {
            return '';
        }
        return parseFloat(value.value).toFixed(2);
    };
    ProjectUtils.ChangeValueToTrueFalse = function (value) {
        if (value.value === 1) {
            return 'True';
        }
        else {
            return 'False';
        }
    };
    ProjectUtils.ag_SetWidth = function (perc) {
        return (ProjectUtils.GRIDWIDTH * perc) / 100;
    };
    ProjectUtils.selectsymb = function (value) {
        return function (value) {
            return '<i class="fa fa-edit text-primary"></i>';
        };
    };
    ProjectUtils.selecticon = function (value) {
        return '<input type="checkbox" style="zoom: 1.5" data-dismiss="modal">';
    };
    ProjectUtils.selecticonredio = function (name) {
        return function (value) {
            var id = 'radio-' + (++ProjectUtils.idCount);
            return "<div class=\"custom-control custom-radio\">\n            <input type=\"radio\" id=\"" + id + "\" name=\"" + name + "\" class=\"custom-control-input\">\n            <label style=\"display:block\" class=\"custom-control-label\" for=\"" + id + "\"></label>\n          </div>";
        };
    };
    ProjectUtils.selecticon1 = function (key) {
        return function (value) {
            var id = value['data'][key];
            return "<div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" " + (value['data'].select ? 'checked' : '') + " class=\"custom-control-input\" id=\"" + id + "\"\n                  data-dismiss=\"modal\">\n                  <label style=\"display:block\" class=\"custom-control-label\" for=\"" + id + "\"></label>\n                </div>";
        };
    };
    ProjectUtils.chkboxCol = function (key) {
        return function (value) {
            var id = key + (++ProjectUtils.idCount);
            return "<div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" " + (value['data'][key] ? 'checked' : '') + " class=\"custom-control-input\" id=\"" + id + "\"\n                  data-dismiss=\"modal\" disabled>\n                  <label style=\"display:block\" class=\"custom-control-label\" for=\"" + id + "\"></label>\n                </div>";
        };
    };
    ProjectUtils.createCheckBox = function (key) {
        return function (value) {
            var id = key + (++ProjectUtils.idCount);
            return "<div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" " + (value['data'][key] !== 0 ? 'checked' : '') + "\n                  class=\"custom-control-input\" id=\"" + id + "\">\n                  <label style=\"display:block\" class=\"custom-control-label\" for=\"" + id + "\"></label>\n                </div>";
        };
    };
    ProjectUtils.createDisabledCheckBox = function (key) {
        return function (value) {
            var id = key + (++ProjectUtils.idCount);
            return "<div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" " + (value['data'][key] !== 0 ? 'checked' : '') + " class=\"custom-control-input\" id=\"" + id + "\"  disabled>\n                  <label style=\"display:block\" class=\"custom-control-label\" for=\"" + id + "\"></label>\n                </div>";
        };
    };
    ProjectUtils.RowOption = function (key) {
        return function (value) {
            var rowIndex = value.rowIndex;
            var eSelect = document.createElement('select');
            eSelect.setAttribute('class', 'cursor-pntr');
            eSelect.setAttribute('style', 'padding:0px');
            eSelect.setAttribute('name', value.colDef.field);
            eSelect.setAttribute('id', value.colDef.field + '_' + rowIndex);
            var eOption = document.createElement('option');
            eOption.text = ' Choose Action';
            eOption.value = '';
            eSelect.appendChild(eOption);
            if (value.colDef.field == 'action') {
                var eOption1 = document.createElement('option');
                eOption1.text = ' Edit';
                eOption1.value = '1';
                eSelect.appendChild(eOption1);
                if (!(value.data.orderItemType == 1 || value.data.orderStatusId == 2 || value.data.orderItemType == 2)) {
                    var eOption2 = document.createElement('option');
                    eOption2.text = ' Renew ';
                    eOption2.value = '2';
                    eSelect.appendChild(eOption2);
                }
                var eOption3 = document.createElement('option');
                eOption3.text = ' Add To Order';
                eOption3.value = '3';
                eSelect.appendChild(eOption3);
                if (!(value.data.orderStatusId == 2) && (!(value.data.gross_local_amount == 0) || value.data.noCharge == 0)) {
                    var eOption4 = document.createElement('option');
                    eOption4.text = '  Make Payment';
                    eOption4.value = '4';
                    eSelect.appendChild(eOption4);
                }
                if (!(value.data.orderStatusId == 2)) {
                    var eOption5 = document.createElement('option');
                    eOption5.text = ' Cancel Order';
                    eOption5.value = '5';
                    eSelect.appendChild(eOption5);
                }
                if (!(value.data.payment_status === 'No Payment')) {
                    if (value.data.gross_local_amount !== '0.00') {
                        var eOption6 = document.createElement('option');
                        eOption6.text = ' Payment Review';
                        eOption6.value = '6';
                        eSelect.appendChild(eOption6);
                    }
                }
                var eOption7 = document.createElement('option');
                eOption7.text = ' Service/Complaints';
                eOption7.value = '7';
                eSelect.appendChild(eOption7);
                if (value.data.orderItemType === 4) {
                    var eOption8 = document.createElement('option');
                    eOption8.text = 'Package Members';
                    eOption8.value = '8';
                    eSelect.appendChild(eOption8);
                }
                var eOption9 = document.createElement('option');
                eOption9.text = ' Edit Order Header Info';
                eOption9.value = '9';
                eSelect.appendChild(eOption9);
                if (value.data.orderStatusId === '2') {
                    var eOption10 = document.createElement('option');
                    eOption10.text = ' Supplemental Refund';
                    eOption10.value = '10';
                    eSelect.appendChild(eOption10);
                }
            }
            return eSelect;
            // return function (value: any) {
            //       return `<div class="dropdown show">
            //       <div class="cursor-pntr" id="dropdownMenuButton"
            //        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="padding:0px;">
            //         <i class="fa fa-ellipsis-v text-primary"></i>
            //       </div>
            //       <div class="dropdown-menu hide" aria-labelledby="dropdownMenuButton"  style="position: relative;">
            //         <a class="custom-select form-control">Edit</a>
            //         <div class="dropdown-divider" ${(value.data.orderItemType == 1
            //                   || value.data.orderStatusId == 2 || value.data.orderItemType == 2) ? 'hidden' : ''}></div>
            //         <a class="custom-select form-control" ${(value.data.orderItemType == 1
            //                   || value.data.orderStatusId == 2 || value.data.orderItemType == 2) ? 'hidden' : ''}  >Renew</a>
            //         <div class="dropdown-divider"></div>
            //         <a class="custom-select form-control">Add To Order</a>
            //         <div class="dropdown-divider" ${(value.data.gross_local_amount == 0
            //                   || value.data.orderStatusId == 2) ? 'hidden' : ''}></div>
            //         <a class="custom-select form-control" ${(value.data.gross_local_amount == 0
            //                   || value.data.orderStatusId == 2) ? 'hidden' : ''}>Payments</a>
            //         <div class="dropdown-divider" ${(value.data.orderStatusId == 2) ? 'hidden' : ''}></div>
            //         <a class="custom-select form-control" ${(value.data.orderStatusId == 2) ? 'hidden' : ''} >Cancel Order</a>
            //         <div class="dropdown-divider" ${(value.data.payment_status === 'No Payment') ? 'hidden' : ''}></div>
            //   <a class="custom-select form-control"
            //   ${(value.data.payment_status === 'No Payment')
            //    ? 'hidden' : ''}>Payment Review</a>
            //         <div class="dropdown-divider"></div>
            //         <a class="custom-select form-control">Service/Complaints</a>
            //       </div>
            //     </div>`;
        };
    };
    ProjectUtils.PackageOrderRowOption = function (key) {
        return function (value) {
            var rowIndex = value.rowIndex;
            var eSelect = document.createElement('select');
            eSelect.setAttribute('class', 'cursor-pntr');
            eSelect.setAttribute('style', 'padding:0px');
            eSelect.setAttribute('name', value.colDef.field);
            eSelect.setAttribute('id', value.colDef.field + '_' + rowIndex);
            var eOption = document.createElement('option');
            eOption.text = 'Choose Action';
            eOption.value = '';
            eSelect.appendChild(eOption);
            if (value.colDef.field == 'action') {
                var eOption1 = document.createElement('option');
                eOption1.text = 'Edit Package';
                eOption1.value = '1';
                eSelect.appendChild(eOption1);
                var eOption2 = document.createElement('option');
                eOption2.text = 'Renew Member';
                eOption2.value = '2';
                eSelect.appendChild(eOption2);
                var eOption3 = document.createElement('option');
                eOption3.text = 'Edit Member';
                eOption3.value = '3';
                eSelect.appendChild(eOption3);
                var eOption4 = document.createElement('option');
                eOption4.text = 'Cancel Member';
                eOption4.value = '4';
                eSelect.appendChild(eOption4);
                var eOption5 = document.createElement('option');
                eOption5.text = 'Extend Member Subscription';
                eOption5.value = '5';
                eSelect.appendChild(eOption5);
            }
            return eSelect;
        };
    };
    ProjectUtils.ProcessRowOption = function (key) {
        return function (value) {
            var rowIndex = value.rowIndex;
            var eSelect = document.createElement('select');
            eSelect.setAttribute('class', 'cursor-pntr');
            eSelect.setAttribute('style', 'padding:0px');
            eSelect.setAttribute('name', value.colDef.field);
            eSelect.setAttribute('id', value.colDef.field + '_' + rowIndex);
            var eOption = document.createElement('option');
            eOption.text = 'Choose Action';
            eOption.value = '';
            eSelect.appendChild(eOption);
            if (value.colDef.field == 'reportList') {
                var eOption1 = document.createElement('option');
                eOption1.text = 'Open Record';
                eOption1.value = '1';
                eSelect.appendChild(eOption1);
                if (!(value.data.charged == 0 || value.data.orderStatusId == 2)) {
                    var eOption2 = document.createElement('option');
                    eOption2.text = 'Delete Record';
                    eOption2.value = '2';
                    eSelect.appendChild(eOption2);
                }
                if (!(value.data.status == 0)) {
                    var eOption3 = document.createElement('option');
                    eOption3.text = 'Submit Job';
                    eOption3.value = '3';
                    eSelect.appendChild(eOption3);
                }
            }
            return eSelect;
        };
    };
    // return function (value: any) {
    //       return `<div class="dropdown show">
    //       <div class="cursor-pntr" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    //         <i class="fa fa-ellipsis-v text-primary"></i>
    //       </div>
    //       <div class="dropdown-menu hide" aria-labelledby="dropdownMenuButton" x-placement="top-start" style="position: relative;
    //        transform: translate3d(0px, -64px, 0px); top: 0px; left: 0px; will-change: transform;">
    //         <div class="dropdown-divider"></div>
    //         <a class="dropdown-item">Open Record</a>
    //         <div class="dropdown-divider" ${(value.data.charged == 0 || value.data.orderStatusId == 2) ? 'hidden' : ''}></div>
    //         <a class="dropdown-item" ${(value.data.charged == 0 || value.data.orderStatusId == 2) ? 'hidden' : ''}>Delete Record</a>
    //         <div class="dropdown-divider" ${value.data.status == 0 ? 'hidden' : ''}></div>
    //         <a class="dropdown-item"${value.data.status == 0 ? 'hidden' : ''}>Submit Job</a>
    //       </div>
    //     </div>`;
    // };
    ProjectUtils.editicon = function (value) {
        return '<a href="javascript:;"><i class="fa fa-edit" style="font-size:16px;"></i></a>';
    };
    ProjectUtils.viewDetailsIcon = function (value) {
        return '<a href="javascript:;"><i class="fa fa-eye" style="font-size:16px;"></i></a>';
    };
    ProjectUtils.viewPaymentDetailIcon = function (value) {
        return '<a href="javascript:;"><i class="fa fa-money" style="font-size:16px;"></i></a>';
    };
    ProjectUtils.processiconReviewJob = function (value) {
        return '<a href="javascript:;" style="padding-left: 55px"><i class="fa fa-history" aria-hidden="true"></i></a>';
    };
    ProjectUtils.processiconEmailSetup = function (value) {
        return '<a href="javascript:;" style="padding-left: 55px"><i class="fa fa-envelope" aria-hidden="true"></i></a>';
    };
    ProjectUtils.DocRefType = function (value) {
        var docType = value.value;
        if (docType === 0) {
            return 'Customer Service';
        }
        else if (docType === 1) {
            return 'Import';
        }
        else if (docType === 2) {
            return 'Batch';
        }
        else if (docType === 3) {
            return 'Day End';
        }
        else if (docType === 4) {
            return 'Internet';
        }
    };
    ProjectUtils.renewalType = function (value) {
        var docType = value.value;
        if (docType === 0) {
            return 'By Issue/Unit';
        }
        else if (docType === 1) {
            return 'By Volume Group';
        }
        else if (docType === 2) {
            return 'Requal';
        }
    };
    ProjectUtils.effortType = function (value) {
        var docType = value.value;
        if (docType === 0) {
            return 'N/A';
        }
        else if (docType === 1) {
            return 'Issues/Units Left';
        }
        else if (docType === 2) {
            return 'Issues/Units Left with Expire';
        }
        else if (docType === 3) {
            return 'At Birth';
        }
        else if (docType === 4) {
            return 'By Package Expire Date';
        }
        else if (docType === 5) {
            return 'From Long Qual. date';
        }
        else if (docType === 6) {
            return 'From Short Qual. date';
        }
        else if (docType === 7) {
            return 'By Subscription Expire Date';
        }
        else if (docType === 8) {
            return 'Exact Issues/Units Left';
        }
    };
    ProjectUtils.historyicon = function (value) {
        return '<a href="javascript:;"><i class="fa fa-history" style="font-size:16px;"></i></a>';
    };
    ProjectUtils.editSelectButton = function (value) {
        return "<i class=\"fa fa-edit iconColor mr-2\" >edit</i>\n            <i class=\"fa fa-check-square-o iconColor\" >Select</i>";
    };
    ProjectUtils.editDeleteButton = function (value) {
        return "<a href=\"javascript:;\" style=\"text-decoration: none;\"><i class=\"fa fa-edit\" ></i>&nbsp;&nbsp;&nbsp;\n            <i class=\"fa fa-trash\" ></i></a>";
    };
    ProjectUtils.deleteButton = function (value) {
        return "<a href=\"javascript:;\" style=\"text-decoration: none;\">\n            <i class=\"fa fa-trash\" ></i></a>";
    };
    ProjectUtils.editButton = function (value) {
        return "<a href=\"javascript:;\" style=\"text-decoration: none;\">\n            <i class=\"fa fa-edit\" ></i></a>";
    };
    ProjectUtils.transferButton = function (value) {
        return "<a href=\"javascript:;\" style=\"text-decoration: none;\">\n            <i class=\"fa fa-exchange\" ></i></a>";
    };
    ProjectUtils.checkButton = function (value) {
        return "<a href=\"javascript:;\" style=\"text-decoration: none;\">\n            <i type=\"checkbox\" class=\"custom-control-input\" ></i></a>";
    };
    // public static setUnpaidOrderSelected(value: any) {
    //       if (value.data['netBaseAmount'] > '0') {
    //             return `<a href="javascript:;" style="text-decoration: none;"><input type="checkbox" checked></a>`;
    //       } else {
    //             return `<a href="javascript:;" style="text-decoration: none;"><input type="checkbox" readonly></a>`;
    //       }
    // }
    ProjectUtils.AddEditSelect = function (colDef, header) {
        var edtSel = [{
                headerName: header,
                cellRenderer: ProjectUtils.editSelectButton,
                suppressFilter: true
            }];
        colDef = edtSel.concat(colDef);
        return colDef;
    };
    ProjectUtils.AddEditDelect = function (colDef, header) {
        var edtSel = [{
                headerName: header,
                cellRenderer: ProjectUtils.editDeleteButton,
                suppressFilter: true
            }];
        colDef = edtSel.concat(colDef);
        return colDef;
    };
    ProjectUtils.AddSelectCheckbox = function (colDef, header) {
        var chkSel = [{
                headerName: header,
                field: 'checkbox',
                cellRenderer: 'AgCheckBoxComponent',
                headerComponentFramework: _component_ag_component_ag_checbox_header_ag_checbox_header_component__WEBPACK_IMPORTED_MODULE_1__["AgChecboxHeaderComponent"]
            }];
        colDef = chkSel.concat(colDef);
        return colDef;
    };
    ProjectUtils.setSelect = function (value) {
        var anchor;
        if (value.node.data.is_reversed === 1) {
            anchor = '<input type="checkbox" disabled id=""  checked>';
        }
        else if (value.node.data.is_reversed === 0) {
            anchor = '<input type="checkbox" id="" disabled>';
        }
        return anchor;
    };
    ProjectUtils.numberFormatter = function (parm) {
        if (parm !== undefined) {
            var argu = (parm.value !== undefined) ? parm.value : parm;
            if (argu === 0) {
                return 'Customer Service';
            }
            if (argu === 1) {
                return 'Import';
            }
            if (argu === 2) {
                return 'Batch';
            }
            if (argu === 3) {
                return 'Day End';
            }
            if (argu === 4) {
                return 'Internet';
            }
        }
    };
    ProjectUtils.tableNumberFormatter = function (parm) {
        if (parm !== undefined) {
            var argu = (parm.value !== undefined) ? parm.value : parm;
            if (argu === 0) {
                return 'Customer';
            }
            if (argu === 1) {
                return 'Customer Address';
            }
            if (argu === 2) {
                return 'Customer Prospect';
            }
            if (argu === 3) {
                return 'Order Item';
            }
            if (argu === 4) {
                return 'Payment';
            }
            if (argu === 4) {
                return 'Demographic';
            }
            if (argu === 6) {
                return 'Order Item Amount Break';
            }
            if (argu === 7) {
                return 'Cust. Addr. Distr';
            }
            if (argu === 8) {
                return 'Subscrip';
            }
            if (argu === 9) {
                return 'Order Item Install';
            }
            if (argu === 10) {
                return 'Payment Account';
            }
            if (argu === 11) {
                return 'Service';
            }
        }
    };
    ProjectUtils.numericValidation = function (e) {
        var input;
        if (e.which > 95 && e.which < 107) {
            return true;
        }
        else if ((e.which > 34 && e.which < 38) || e.which === 39 || e.which === 46) {
            return true;
        }
        else if (e.metaKey || e.ctrlKey) {
            return true;
        }
        else if (e.which === 32) {
            return false;
        }
        else if (e.which === 0) {
            return true;
        }
        else if (e.which < 33) {
            return true;
        }
        input = String.fromCharCode(e.which);
        return !!/[\d\s]/.test(input);
    };
    ProjectUtils.editNumberFormatter = function (parm) {
        if (parm !== undefined) {
            var argu = (parm.value !== undefined) ? parm.value : parm;
            if (argu === 0 || argu === '0') {
                return 'Add';
            }
            if (argu === 1 || argu === '1') {
                return 'Edited';
            }
        }
    };
    ProjectUtils.editNumberFormatter1 = function (parm) {
        if (parm !== undefined) {
            var argu = (parm.value !== undefined) ? parm.value : parm;
            if (argu === 0 || argu === '0') {
                return 'Add';
            }
            if (argu === 1 || argu === '1') {
                return 'Change';
            }
        }
    };
    ProjectUtils.ChangeBeforeValueAsPerNoteExist = function (parm) {
        var rowData = parm['data'];
        if (rowData.column_name === 'note_exist' || rowData.column_name === 'status_noedit'
            || rowData.column_name === 'is_reversed') {
            if (rowData.before_change === '0') {
                return 'False';
            }
            else {
                return 'True';
            }
        }
        return parm.value;
    };
    ProjectUtils.ChangeAfterValueAsPerNoteExist = function (parm) {
        var rowData = parm['data'];
        if (rowData.column_name === 'note_exist' || rowData.column_name === 'status_noedit'
            || rowData.column_name === 'is_reversed') {
            if (rowData.after_change === '0') {
                return 'False';
            }
            else {
                return 'True';
            }
        }
        return parm.value;
    };
    ProjectUtils.changeAddType = function (parm) {
        var changeType = parm.data['changeType'];
        if (changeType === '1') {
            return 'TEMP';
        }
        else {
            return 'FUTURE';
        }
    };
    ProjectUtils.removeTimeStamp = function (param) {
        var value = param.value;
        if (value !== null) {
            if (value.includes('T')) {
                return value.split('T')[0];
            }
            else {
                return value.split(' ')[0];
            }
        }
        else {
            return '';
        }
    };
    ProjectUtils.CheckBoxVal = function (param) {
        console.log(param);
        return '';
    };
    ProjectUtils.fadeIn = function (id, durationInMilliseconds) {
        if (durationInMilliseconds === void 0) { durationInMilliseconds = 'slow'; }
        $('#' + id).fadeIn(durationInMilliseconds);
    };
    ProjectUtils.fadeOut = function (id, durationInMilliseconds) {
        if (durationInMilliseconds === void 0) { durationInMilliseconds = 'slow'; }
        $('#' + id).fadeOut(durationInMilliseconds);
    };
    ProjectUtils.showMsgForDuration = function (id, time) {
        var _this = this;
        if (time === void 0) { time = 5000; }
        this.fadeIn(id);
        setTimeout(function () {
            _this.fadeOut(id);
        }, time);
    };
    ProjectUtils.processPathArray = function (value) {
        var pathProcess = '';
        switch (value) {
            case 0:
                pathProcess = 'accounting_reconciliation';
                break;
            case 1:
                pathProcess = 'audit_galley';
                break;
            case 2:
                pathProcess = 'audit_paragraph_report';
                break;
            case 3:
                pathProcess = 'backlabel';
                break;
            case 4:
                pathProcess = 'billing';
                break;
            case 5:
                pathProcess = 'accounting_reconciliation';
                break;
            case 6:
                pathProcess = 'label';
                break;
            case 7:
                pathProcess = 'list_extract';
                break;
            case 8:
                pathProcess = 'accounting_reconciliation';
                break;
            case 9:
                pathProcess = 'accounting_reconciliation';
                break;
            case 10:
                pathProcess = 'mass_kill';
                break;
            case 11:
                pathProcess = 'payment';
                break;
            case 12:
                pathProcess = 'refund';
                break;
            case 13:
                pathProcess = 'accounting_reconciliation';
                break;
            case 14:
                pathProcess = 'product_fulfillment';
                break;
            case 15:
                pathProcess = 'promotion';
                break;
            case 16:
                pathProcess = 'renewal';
                break;
            case 17:
                pathProcess = 'accounting_reconciliation';
                break;
            case 18:
                pathProcess = 'accounting_reconciliation';
                break;
            case 19:
                pathProcess = 'start_stop';
                break;
            case 20:
                pathProcess = 'accounting_reconciliation';
                break;
            case 21:
                pathProcess = 'bacs';
                break;
            case 22:
                pathProcess = 'cleanup';
                break;
            case 23:
                pathProcess = 'installment_notices';
                break;
            case 24:
                pathProcess = 'accounting_reconciliation';
                break;
            case 25:
                pathProcess = 'accounting_reconciliation';
                break;
            case 26:
                pathProcess = 'accounting_reconciliation';
                break;
            case 27:
                pathProcess = 'customer_deposit_reconciliation';
                break;
            case 28:
                pathProcess = 'on_off';
                break;
            case 29:
                pathProcess = 'accounting_reconciliation';
                break;
            case 30:
                pathProcess = 'label_estimate';
                break;
            case 31:
                pathProcess = 'ics_payment_batch_listener';
                break;
            case 32:
                pathProcess = 'bacs_billing';
                break;
            case 33:
                pathProcess = 'bacs_auddis';
                break;
            case 34:
                pathProcess = 'accounting_reconciliation';
                break;
            case 37:
                pathProcess = 'accounting_reconciliation';
                break;
            case 38:
                pathProcess = 'credit_card_expiry_notify';
                break;
            case 39:
                pathProcess = 'credit_card_token_refresh';
                break;
            case 40:
                pathProcess = 'auto_renewal_notify';
                break;
            case 41:
                pathProcess = 'accounting_reconciliation';
                break;
            default:
                break;
        }
        return pathProcess;
    };
    ProjectUtils.GRIDWIDTH = window.screen.availWidth;
    ProjectUtils.idCount = 0;
    return ProjectUtils;
}(_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"]));



/***/ }),

/***/ "./src/app/core/shared/utility/search-model.util.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/shared/utility/search-model.util.ts ***!
  \**********************************************************/
/*! exports provided: SearchModelUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModelUtil", function() { return SearchModelUtil; });
var SearchModelUtil = /** @class */ (function () {
    function SearchModelUtil() {
    }
    SearchModelUtil.prototype.assignValueFromApi = function (searchModel, apiDataModel) {
        var keys = Object.keys(searchModel);
        var apiValue = null;
        keys.forEach(function (key) {
            if (typeof searchModel[key] === 'object') {
                apiValue = apiDataModel[searchModel[key].fillFromKey];
                if (apiValue === null || apiValue === undefined) {
                    searchModel[key].value = '';
                }
                else {
                    searchModel[key].value = apiValue;
                }
            }
        });
    };
    SearchModelUtil.prototype.emptySearchModel = function (searchModel, emptyWith) {
        if (emptyWith === void 0) { emptyWith = ''; }
        var keys = Object.keys(searchModel);
        keys.forEach(function (key) {
            if (typeof searchModel[key] === 'object') {
                searchModel[key].value = emptyWith;
            }
        });
    };
    return SearchModelUtil;
}());



/***/ }),

/***/ "./src/app/core/shared/utility/string.util.ts":
/*!****************************************************!*\
  !*** ./src/app/core/shared/utility/string.util.ts ***!
  \****************************************************/
/*! exports provided: StringUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringUtil", function() { return StringUtil; });
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil.prototype.replaceSpaceWith_ = function (str) {
        return str.split(' ').join('_');
    };
    return StringUtil;
}());



/***/ }),

/***/ "./src/app/core/shared/utility/utils.ts":
/*!**********************************************!*\
  !*** ./src/app/core/shared/utility/utils.ts ***!
  \**********************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _html_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html.util */ "./src/app/core/shared/utility/html.util.ts");
/* harmony import */ var _grid_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid.util */ "./src/app/core/shared/utility/grid.util.ts");
/* harmony import */ var _array_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array.util */ "./src/app/core/shared/utility/array.util.ts");
/* harmony import */ var _string_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string.util */ "./src/app/core/shared/utility/string.util.ts");
/* harmony import */ var _search_model_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-model.util */ "./src/app/core/shared/utility/search-model.util.ts");
/* harmony import */ var _date_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date.util */ "./src/app/core/shared/utility/date.util.ts");
/* harmony import */ var _object_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./object.util */ "./src/app/core/shared/utility/object.util.ts");










var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.formatDateDataWithDefault = function (startDate) {
        return Utils.formatDateData(startDate, 'MMM dd, yyyy');
    };
    Utils.formatDateData = function (startDate, dateFormat) {
        // const datePipe: DatePipe = new DatePipe('en-US');
        // return datePipe.transform(new Date(startDate), dateFormat);
    };
    Utils.OldisEmpty = function (val) {
        return !val || (Array.isArray(val) && !val[0]) || !Object.keys(val).length;
    };
    Utils.isEmptyNumStr = function (val) {
        if (typeof val === 'number') {
            return false;
        }
        else if ((typeof val === 'string')) {
            return !val;
        }
        else if (val === null) {
            return true;
        }
        else if (val === undefined) {
            return true;
        }
        return false;
    };
    Utils.isEmpty = function (val) {
        if (Array.isArray(val)) {
            return this.isEmptyNumStr(val[0]);
        }
        else if (typeof val === 'object' && val !== null) {
            // console.log('object');
            var obj = Object.keys(val);
            for (var i = 0; i < obj.length; i++) {
                // console.log(val[obj[i]], 'aaaa ', this.isEmptyNumStr(val[obj[i]]))
                if (!this.isEmptyNumStr(val[obj[i]])) {
                    return false;
                }
            }
            return true;
        }
        return this.isEmptyNumStr(val);
    };
    Utils.NullHandler = function (value) {
        if (value === null || value === '' || value === undefined) {
            return '';
        }
        else {
            return value;
        }
    };
    Utils.numberFormat = function (item) {
        item = parseFloat(item);
        if (isNaN(item)) {
            return '00';
        }
        else {
            var addK = (item > 10000) ? 'k' : '';
            item = (item > 1000) ? (item / 1000) : item;
            item = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]('en-US').transform(item, '1.0-0');
            item += addK;
            return item;
        }
    };
    Utils.numberFormatWithOutK = function (item) {
        var num = parseFloat(item);
        if (isNaN(num)) {
            return '00';
        }
        else {
            item = (item > 100000000000) ? (item / 1000) : item;
            item = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]('en-US').transform(item, '1.0-0');
            return item;
        }
    };
    Utils.isNotEmpty = function (val) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isEmpty(val)) {
                reject();
            }
            else {
                resolve();
            }
        });
    };
    Utils.cloneObject = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    Utils.cloneArray = function (source) {
        return source.map(function (x) { return Object.assign({}, x); });
    };
    Utils.ob_getIds = function (obj) {
        var objectIds;
        if (!Utils.isEmpty(obj)) {
            if (Array.isArray(obj)) {
                for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
                    var value = obj_1[_i];
                    console.log(value);
                    if (!Utils.isEmpty(objectIds)) {
                        objectIds += ',' + value.id;
                    }
                    else {
                        objectIds = value.id;
                    }
                }
            }
            else {
                objectIds = obj.id;
            }
        }
        return objectIds;
    };
    Utils.ob_getIdAsArray = function (obj) {
        var objectIds = [];
        if (!Utils.isEmpty(obj)) {
            if (Array.isArray(obj)) {
                for (var _i = 0, obj_2 = obj; _i < obj_2.length; _i++) {
                    var value = obj_2[_i];
                    console.log(value);
                    objectIds.push(value.id);
                }
            }
            else {
                objectIds.push(obj.id);
            }
        }
        console.log('objectIds', objectIds);
        return objectIds;
    };
    Utils.toUpperIfString = function (value) {
        var isString = typeof value === 'string' ? true : false;
        return isString ? value.toUpperCase() : value;
    };
    Utils.toBoldHtml = function (val) {
        if (!this.isEmpty(val)) {
            if (typeof val === 'number') {
                return "<div class=\"dt-bold font-weight-bold\"  >" + val + "</div>";
            }
            else {
                return "<div class=\"dt-bold font-weight-bold textAlignRight\"  >" + val + "</div>";
            }
        }
        return '';
    };
    Utils.toFixedIfNumberRev = function (value) {
        var ret = parseInt(value, 10);
        if (isNaN(ret)) {
            ret = value.split('/')[0].split('>')[1];
            ret = Utils.toBoldHtml(parseInt(ret, 10) + '');
        }
        return ret || '';
    };
    Utils.toFixedIfNumber = function (value) {
        var isNumber = typeof value === 'number';
        var ret = isNumber ? value.toFixed(2) : value;
        return ret;
    };
    Utils.mySumFunction = function (data, keys, sort, strDisplayWithSort) {
        var _this = this;
        var isEmpty = this.isEmpty(data);
        if (!isEmpty) {
            data.sort(function (a, b) {
                var nameA = _this.toUpperIfString(a[sort]);
                var nameB = _this.toUpperIfString(b[sort]);
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            var indexes_1 = [];
            var last_1 = data[0][sort];
            var count_1 = 0;
            data.forEach(function (item) {
                if (last_1 === item[sort]) {
                    count_1++;
                }
                else {
                    indexes_1.push(count_1);
                    count_1 = 1;
                }
                last_1 = item[sort];
            });
            indexes_1.push(count_1);
            var data2_1 = Array.from(data);
            var firstObj_1 = Object.assign({}, data2_1[0]);
            Object.keys(firstObj_1).forEach(function (k) {
                firstObj_1[k] = '';
            });
            var indexCount_1 = 0;
            indexes_1.forEach(function (item) {
                var sum = {};
                keys.forEach(function (item2) {
                    sum[item2] = 0;
                });
                var _loop_1 = function (i) {
                    keys.forEach(function (item3) {
                        sum[item3] += parseFloat(data2_1[i][item3]);
                    });
                };
                for (var i = indexCount_1; i < indexCount_1 + item; i++) {
                    _loop_1(i);
                }
                sum[sort] = strDisplayWithSort + ' ' + data2_1[indexCount_1][sort];
                indexCount_1 += item;
                Object.keys(sum)
                    .forEach(function (k2) {
                    sum[k2] = _this.toBoldHtml(_this.toFixedIfNumber(sum[k2]));
                });
                var sumObj = Object.assign({}, firstObj_1, sum);
                data2_1.splice(indexCount_1, 0, sumObj);
                indexCount_1 += 1;
                //    this.Data2 = data2;
            });
            console.log('data2 ', data2_1);
            return data2_1;
        }
        else {
            return [];
        }
    };
    Utils.assignNewCopy = function (obj) {
        return Object.assign({}, obj);
    };
    Utils.ar_splitArray = function (data, key) {
        var _this = this;
        var myOutput = [];
        var splitKeys = [];
        var lastKeyValue = null;
        this.ar_sorting(data, key, 'dsc');
        data.forEach(function (item) {
            if (lastKeyValue !== item[key]) {
                lastKeyValue = item[key];
                splitKeys.push(item[key]);
                myOutput[lastKeyValue] = [];
                myOutput[lastKeyValue].push(_this.assignNewCopy(item));
            }
            else {
                myOutput[lastKeyValue].push(_this.assignNewCopy(item));
            }
        });
        console.log('splitArray', myOutput, splitKeys);
        return {
            splitArrays: myOutput,
            splitKeys: splitKeys
        };
    };
    Utils.ob_deletePropertyFromObject = function (obj) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        keys.forEach(function (key) {
            delete obj[key];
        });
    };
    Utils.ar_deletePropertyFromArray = function (arr) {
        var _this = this;
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        if (!arr) {
            return [];
        }
        arr.forEach(function (item) {
            _this.ob_deletePropertyFromObject.apply(_this, [item].concat(keys));
        });
        return Array.from(arr);
    };
    Utils.ar_sorting = function (data, sort, dsc) {
        var _this = this;
        console.log('before sortArray ', data, sort, dsc);
        var mySortFunction = (function () {
            if (dsc === 'dsc') {
                return function () {
                    data.sort(function (a, b) {
                        var nameA = _this.toUpperIfString(a[sort]);
                        var nameB = _this.toUpperIfString(b[sort]);
                        if (nameA < nameB) {
                            return 1;
                        }
                        if (nameA > nameB) {
                            return -1;
                        }
                        return 0;
                    });
                };
            }
            else {
                return function () {
                    data.sort(function (a, b) {
                        var nameA = _this.toUpperIfString(a[sort]);
                        var nameB = _this.toUpperIfString(b[sort]);
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    });
                };
            }
        })();
        mySortFunction();
        console.log('sorting', data);
    };
    Utils.ar_sortArray = function (data, sort) {
        var _this = this;
        console.log('before sortArray ', data);
        data.sort(function (a, b) {
            var nameA = _this.toUpperIfString(a[sort]);
            var nameB = _this.toUpperIfString(b[sort]);
            if (b['ignore']) {
                return 0;
            }
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    };
    // : Array< Array<IndexOrderI>>
    Utils.getSortOrder = function (keys) {
        var mySortOrder = [];
        keys.forEach(function (item) {
            item.row.forEach(function (item2) {
                mySortOrder.push({
                    key: item2.key,
                    sortPriority: item2.sortPriority,
                    toSum: item2.keysToSum
                });
            });
        });
        return mySortOrder;
    };
    Utils.findFirstIngore = function (element) {
        return element['ignore'] === true;
    };
    Utils.sortMultiPleArray = function (data, keys) {
        var _this = this;
        var mySortOrder = this.getSortOrder(keys);
        console.log('mySortOrder', mySortOrder);
        var currentTotalInArray = Array.from(data);
        var ignoreIndex = currentTotalInArray.length;
        mySortOrder.forEach(function (item) {
            var previousIgnoreIndex = 0;
            var operatableData = currentTotalInArray;
            console.log('currentTotalInArray', currentTotalInArray);
            if (ignoreIndex === -1) {
                ignoreIndex = operatableData.findIndex(_this.findFirstIngore);
                operatableData = currentTotalInArray.slice(previousIgnoreIndex, ignoreIndex);
            }
            var OutData = [];
            var enter = true;
            while ((ignoreIndex !== -1)) {
                enter = false;
                console.log('operatableData', operatableData);
                _this.ar_sortArray(operatableData, item.key);
                console.log('sortArray', operatableData);
                var currentIndexOrder = _this.indexOrder(operatableData, item.key);
                console.log('currentIndexOrder', currentIndexOrder);
                OutData = OutData.concat(_this.sumSortedArray(operatableData, currentIndexOrder, item));
                console.log('sumSortedArray', OutData);
                previousIgnoreIndex = ignoreIndex;
                console.log(previousIgnoreIndex, currentTotalInArray.length);
                ignoreIndex = currentTotalInArray.slice(previousIgnoreIndex + 1, currentTotalInArray.length).findIndex(_this.findFirstIngore);
                console.log('ignoreIndex', ignoreIndex);
                if (ignoreIndex !== -1) {
                    operatableData = currentTotalInArray.slice(previousIgnoreIndex + 1, previousIgnoreIndex + ignoreIndex + 1);
                    console.log('new operatableData', operatableData);
                    ignoreIndex = ignoreIndex === 0 ? -1 : ignoreIndex;
                }
                else {
                    console.log('no new operatableData');
                }
            }
            currentTotalInArray = OutData;
            console.log('currentTotalInArray after While', currentTotalInArray);
        });
    };
    Utils.emptyMyObjectWithNewRef = function (obj) {
        obj = Object.assign({}, obj);
        Object.keys(obj).forEach(function (k) {
            obj[k] = '';
        });
        return obj;
    };
    Utils.emptyMyObjectWithZeros = function (obj) {
        obj = Object.assign({}, obj);
        Object.keys(obj).forEach(function (k) {
            obj[k] = 0;
        });
        return obj;
    };
    Utils.indexOrder = function (data, sortKey) {
        var indexes = [];
        var last = data[0][sortKey];
        var count = 0;
        data.forEach(function (item) {
            if (last === item[sortKey]) {
                count++;
            }
            else {
                indexes.push(count);
                count = 1;
            }
            last = item[sortKey];
        });
        indexes.push(count);
        return Array.from(indexes);
    };
    Utils.indexesOrder = function (data, sortOrder) {
        var _this = this;
        var myIndexesOrder = [];
        sortOrder.forEach(function (item, index) {
            myIndexesOrder.push(_this.indexOrder(data, item.key));
            _this.sumSortedArray(data, myIndexesOrder[index], item.key);
        });
        console.log('myIndexesOrder', myIndexesOrder);
        return myIndexesOrder;
    };
    Utils.sumSortedArray = function (data, indexes, key) {
        var SUM = this.emptyMyObjectWithZeros(data[0]);
        var sumArray = Array.from(data);
        var indexCount = 0;
        // console.log('indexes', indexes);
        indexes.forEach(function (item) {
            var sum = Object.assign({}, SUM);
            var _loop_2 = function (i) {
                if (!sumArray[i]['ignore']) {
                    key.toSum.forEach(function (element) {
                        sum[element] += parseFloat(sumArray[i][element]);
                    });
                }
            };
            for (var i = indexCount; i < indexCount + item; i++) {
                _loop_2(i);
            }
            indexCount += item;
            sum['ignore'] = true;
            sumArray.splice(indexCount, 0, sum);
            indexCount += 1;
        });
        console.log('sumSortedArray', sumArray);
        return sumArray;
    };
    Utils.emptyMyObjectWithZerosNString = function (obj, isNumber) {
        obj = Object.assign({}, obj);
        Object.keys(obj).forEach(function (k) {
            obj[k] = '';
        });
        isNumber.forEach(function (item) {
            obj[item] = 0;
        });
        return obj;
    };
    Utils.sumTheseKeys = function (obj, toSum, data) {
        toSum.forEach(function (item) {
            obj[item] += parseFloat(data[item]);
        });
    };
    Utils.toFixedTheseKeys = function (toSum, obj) {
        toSum.forEach(function (item) {
            obj[item] = parseFloat(obj[item]).toFixed(2);
        });
    };
    Utils.labelOnColumn = function (col, obj, data, labelAdd, labelKeyName) {
        if (labelKeyName === void 0) { labelKeyName = true; }
        if (labelKeyName) {
            obj[col] = data[col] + ' ' + labelAdd;
        }
        else {
            obj[col] = labelAdd;
        }
    };
    Utils.pushObjectwithBold = function (inPush, toPush) {
        var _this = this;
        Object.keys(toPush)
            .forEach(function (k) {
            if (typeof toPush[k] === 'number') {
                toPush[k] = toPush[k].toFixed(2);
            }
            toPush[k] = _this.toBoldHtml(toPush[k]);
        });
        inPush.push(toPush);
    };
    Utils.breakThemBeforeAKey = function (output, objToCopy, keys, breakingKey, mySumArray, lastKeyValue) {
        var _this = this;
        var keysToBreak = [];
        var keysLength = keys.length;
        for (var i = 0; i < keysLength; i++) {
            keysToBreak.push(keys[i]);
            if (keys[i] === breakingKey) {
                break;
            }
        }
        keysToBreak.forEach(function (key) {
            // output.push(mySumArray[key])
            _this.pushObjectwithBold(output, mySumArray[key]);
            mySumArray[key] = Object.assign({}, objToCopy);
            lastKeyValue[key] = null;
        });
    };
    Utils.setShowKeys = function (showKeys, keys, currentKey) {
    };
    Utils.mySumFunction2 = function (data, toSum, labelCol, labelAdd, grandTotalLabel, keys, labelKeyName, showAsItIs) {
        // Order data from API should be correct
        var _this = this;
        if (labelKeyName === void 0) { labelKeyName = true; }
        var isEmpty = this.isEmpty(data);
        console.log('mySumFunction2');
        if (!isEmpty) {
            var SUM_1 = this.emptyMyObjectWithZerosNString(data[0], toSum);
            var output_1 = [];
            var dataLength = data.length;
            var mySumArray_1 = [];
            var lastKeyValue_1 = [];
            var shownKeys_1 = [];
            if (keys.length !== 0) {
                keys.forEach(function (k) {
                    mySumArray_1[k] = Object.assign({}, SUM_1);
                    lastKeyValue_1[k] = data[0][k];
                });
            }
            var grandTotal = Object.assign({}, SUM_1);
            var _loop_3 = function (i) {
                keys.forEach(function (k) {
                    if (lastKeyValue_1[k] === data[i][k]) {
                        _this.sumTheseKeys(mySumArray_1[k], toSum, data[i]);
                        _this.labelOnColumn(k, mySumArray_1[k], data[i], labelAdd, labelKeyName);
                    }
                    else {
                        shownKeys_1.push(k);
                        // this.breakThemBeforeAKey(output, SUM, keys, k, mySumArray, lastKeyValue);
                        _this.pushObjectwithBold(output_1, mySumArray_1[k]);
                        lastKeyValue_1[k] = data[i][k];
                        mySumArray_1[k] = Object.assign({}, SUM_1);
                        _this.labelOnColumn(k, mySumArray_1[k], data[i], labelAdd, labelKeyName);
                        _this.sumTheseKeys(mySumArray_1[k], toSum, data[i]);
                    }
                });
                this_1.sumTheseKeys(grandTotal, toSum, data[i]);
                // this.toFixedTheseKeys(toSum, data[i]);
                output_1.push(data[i]);
            };
            var this_1 = this;
            for (var i = 0; i < dataLength; i++) {
                _loop_3(i);
            }
            keys.forEach(function (k) {
                _this.pushObjectwithBold(output_1, mySumArray_1[k]);
            });
            grandTotal[labelCol] = grandTotalLabel + ':';
            this.pushObjectwithBold(output_1, grandTotal);
            console.log('output', output_1);
            return output_1;
        }
        else {
            return [];
        }
    };
    Utils.SumAllObjects = function (data, keys, textObj) {
        var _this = this;
        var isEmpty = this.isEmpty(data);
        if (!isEmpty) {
            var sum_1 = Object.assign({}, data[0]);
            Object.keys(sum_1)
                .forEach(function (key) {
                sum_1[key] = '';
            });
            keys.forEach(function (key) {
                sum_1[key] = 0;
            });
            data.forEach(function (elem) {
                keys.forEach(function (key) {
                    var keyValue = parseFloat(elem[key]);
                    if (!isNaN(keyValue)) {
                        sum_1[key] += keyValue;
                    }
                });
            });
            var total_1 = Object.assign({}, sum_1, textObj);
            console.log('total', total_1);
            Object.keys(total_1)
                .forEach(function (key) {
                total_1[key] = _this.toBoldHtml(_this.toFixedIfNumber(total_1[key]));
            });
            console.log('total...................', total_1);
            console.log(data.concat(total_1));
            return data.concat(total_1);
        }
        else {
            return [];
        }
    };
    Utils.unsubscribe = function () {
        var obj = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            obj[_i] = arguments[_i];
        }
        obj.forEach(function (item) {
            if (item instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]) {
                item.unsubscribe();
            }
            else if (item instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]) {
                item.unsubscribe();
            }
        });
    };
    Utils.getFutureElement = function (id, delay, interval) {
        var _this = this;
        var mytimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(delay, interval);
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var sub = mytimer.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(200))
                .subscribe(function (count) {
                console.log('getFutureElement', count);
                var element = document.getElementById(id);
                if (!_this.isEmpty(element)) {
                    sub.unsubscribe();
                    observer.next(element);
                }
            });
        });
    };
    Utils.getFutureObj = function (objOrFn, instance, delay, interval) {
        if (delay === void 0) { delay = 50; }
        if (interval === void 0) { interval = 50; }
        var mytimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(delay, interval);
        var value = null;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var sub = mytimer.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(200))
                .subscribe(function (count) {
                console.log('getFutureObj', count);
                if (typeof objOrFn === 'function') {
                    value = objOrFn();
                    if (value instanceof instance) {
                        sub.unsubscribe();
                        observer.next(value);
                    }
                }
                else if (objOrFn instanceof instance) {
                    sub.unsubscribe();
                    observer.next(objOrFn);
                }
            });
        });
    };
    Utils.loadJS = function (url) {
        var script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = url;
        document.body.appendChild(script);
    };
    Utils.loadCss = function (url, id) {
        var elm;
        elm = Utils.findElemnts(id);
        if (!elm) {
            Utils.createElement(id, url, elm);
        }
        else {
            if (elm.href && elm.href.indexOf(url) !== -1) {
                return;
            }
            elm.remove();
            Utils.createElement(id, url, elm);
        }
    };
    Utils.findElemnts = function (id) {
        return document.getElementById(id);
    };
    Utils.createElement = function (id, url, elm) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.media = 'all';
        head.appendChild(link);
    };
    Utils.setCss = function (cssURL) {
        var module = Utils.getModuleName();
        if (module === 'customer') {
            Utils.loadCss('/assets/css/styleCustomer.css', 'abc');
        }
        else if (module === 'setup') {
            Utils.loadCss('/assets/css/styleSetup.css', 'abc');
        }
        else {
            Utils.loadCss('/assets/css/styleCustomer.css', 'abc');
        }
    };
    Utils.getModuleName = function () {
        var currentURL = '' + window.location;
        if (currentURL.indexOf('pages/customer') !== -1) {
            return 'customer';
        }
        else if (currentURL.indexOf('/setup') !== -1) {
            return 'setup';
        }
        else if (currentURL.indexOf('/pages') !== -1) {
            return 'process';
        }
        else {
            return 'customer';
        }
    };
    Utils.dynamicColumns = function (ColmFunc, dtOptions) {
        if (typeof ColmFunc === 'function') {
            ColmFunc(dtOptions);
            dtOptions['aoColumns'] = [];
            dtOptions['columns'].forEach(function (element) {
                dtOptions['aoColumns'].push({
                    data: element['data'],
                    mData: element['data'],
                    sTitle: element['title'],
                    title: element['title']
                });
            });
        }
        console.log('dynamicColumns', dtOptions);
    };
    Utils.deleteFromArray = function (data, key, value) {
        return data.filter(function (item, index) {
            return item[key] !== value;
        });
    };
    Utils.downloadGET = function (url) {
        Utils.openSmallWindow(url);
        //  document.location.href = url;
    };
    Utils.getMonthNumber = function (month) {
        var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        var index = months.indexOf(month.toUpperCase());
        return ('0' + index).slice(-2);
    };
    Utils.returnEmptyArray = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            observer.next([]);
        });
    };
    Utils.disablePagingNSearch = function (dtOptions) {
        dtOptions.paging = false;
        dtOptions.searching = false;
    };
    Utils.arrayToCommaSep = function (arr) {
        return arr.join(',');
    };
    Utils.fetchObjKeyFromArray = function (arr, key) {
        var keyArray = [];
        arr.forEach(function (item) {
            keyArray.push(item[key]);
        });
        return keyArray.join(',');
    };
    Utils.openSmallWindow = function (url, windowName, height, width) {
        if (height === void 0) { height = 200; }
        if (width === void 0) { width = 150; }
        var newwindow = window.open(url, windowName, "height=" + height + ",width=" + width);
        if (window.focus) {
            newwindow.focus();
        }
        return newwindow;
    };
    Utils.addRemoveObjIsAvailabe = function (arr, obj, checkKey, task) {
        var retObj = null;
        if (task === 'remove') {
            arr.forEach(function (item, index, myArray) {
                if (item[checkKey] === obj[checkKey]) {
                    retObj = myArray.splice(index, index + 1);
                }
            });
        }
        else {
            var flag_1 = true;
            arr.forEach(function (item, index, myArray) {
                if (item[checkKey] === obj[checkKey]) {
                    flag_1 = false;
                }
            });
            if (flag_1) {
                arr.push(obj);
            }
        }
        retObj = arr;
        return retObj;
    };
    Utils.addRemoveObjIsAvailable = function (arr, obj, checkKey, task) {
        var retObj = null;
        if (task === 'remove') {
            arr.forEach(function (item, index, myArray) {
                if (item === obj) {
                    retObj = myArray.splice(index, index + 1);
                }
            });
        }
        else {
            var flag_2 = true;
            arr.forEach(function (item, index, myArray) {
                if (item === obj) {
                    flag_2 = false;
                }
            });
            if (flag_2) {
                arr.push(obj);
            }
        }
        retObj = arr;
        return retObj;
    };
    Utils.deleteElementFromArrayByValues = function (arr, key) {
        var val = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            val[_i - 2] = arguments[_i];
        }
        val.forEach(function (item) {
            var length = arr.length;
            for (var i = 0; i < length; i++) {
                if (arr[i][key] === item) {
                    arr.splice(i, 1);
                    console.log(arr);
                    break;
                }
            }
        });
    };
    Utils.isEmptyObjectExceptKeys = function (obj) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        var retVal = true;
        var myKeys = Object.keys(obj || {});
        var length = myKeys.length;
        for (var i = 0; i < length; i++) {
            var element = myKeys[i];
            if (!keys.includes(element)) {
                if (!this.isEmpty(obj[element])) {
                    retVal = false;
                    break;
                }
            }
        }
        return retVal;
    };
    Utils.objIsAllTheseKeysEmpty = function (obj) {
        var _this = this;
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        var retVal = true;
        keys.forEach(function (key) {
            if (_this.isEmpty(obj[key])) {
                if (retVal) {
                    retVal = false;
                }
                obj[key] = null;
            }
            else {
            }
        });
        return retVal;
    };
    Utils.assignTillTheseKeys = function (obj, assignmentFn) {
        var keys = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            keys[_i - 2] = arguments[_i];
        }
        var isAllFilled = false;
        var myKeys = Object.keys(obj || {});
        var length = myKeys.length;
        var myTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500, 500);
        var subMyTimer = myTimer.subscribe(function () {
            assignmentFn();
            console.log('assignTillTheseKeys', obj);
            isAllFilled = true;
            for (var i = 0; i < length; i++) {
                var element = myKeys[i];
                if (keys.includes(element)) {
                    if (Utils.isEmpty(obj[element])) {
                        isAllFilled = false;
                    }
                }
            }
            if (isAllFilled === true) {
                subMyTimer.unsubscribe();
            }
        });
    };
    Utils.parseFloatIfNumber = function (num) {
        var temp = parseFloat(num);
        if (isNaN(temp)) {
            return 0;
        }
        else {
            return temp;
        }
    };
    Utils.dtDisableSorting = function (dtOptions) {
        var rowsNumber = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rowsNumber[_i - 1] = arguments[_i];
        }
        dtOptions['aaSorting'] = []; // for disable starting sort
        dtOptions['aoColumnDefs'] = [
            { 'bSortable': false, 'aTargets': rowsNumber }
        ];
    };
    Utils.limitStringNAddToolTip = function (val, noOfChars) {
        if (noOfChars === void 0) { noOfChars = 60; }
        var str = val.substring(0, noOfChars);
        var toShow = null;
        if (val.length > noOfChars) {
            toShow = str + '...';
        }
        else {
            toShow = str;
        }
        return "<span title=\">" + val + "\">" + toShow + "</span>";
    };
    Utils.PrintElem = function (elem, style) {
        var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        var requiredForColor = "\n        @media print, screen { /* Using for the screen as well */\n          * {\n              -webkit-print-color-adjust: exact;\n          }\n        }";
        style = requiredForColor + style;
        mywindow.document.write('<html><head><title>' + document.title + '</title>');
        mywindow.document.write("<style> " + style + " </style>");
        mywindow.document.write('</head><body >');
        mywindow.document.write('<h1>' + document.title + '</h1>');
        mywindow.document.write(document.getElementById(elem).innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
        mywindow.close();
        return true;
    };
    Utils.paramFromObjectKeys = function (obj) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        var body = '';
        var value;
        if (typeof obj === 'object') {
            Object.keys(obj)
                .forEach(function (key) {
                if (keys.includes(key)) {
                    if (Array.isArray(obj[key])) {
                        value = encodeURIComponent(obj[key].join(','));
                    }
                    else {
                        value = encodeURIComponent(obj[key]);
                    }
                    body += '&' + encodeURIComponent(key) + '=' + value;
                }
            });
        }
        body = body && body.slice(1);
        return body;
    };
    Utils.printAddCss = function (IDToPrint) {
        var styleE = document.createElement('style');
        styleE.id = IDToPrint;
        IDToPrint = '#' + IDToPrint;
        styleE.innerText = '@media print {body * {visibility: hidden;} ' + IDToPrint + ',' + IDToPrint +
            ' * { visibility: visible; }' + IDToPrint + '{ position: absolute; left: 0; top: 0; }} ';
        console.log('styleE.innerText', styleE.innerText);
        document.head.appendChild(styleE);
    };
    Utils.printRemoveCss = function (IDToPrint) {
        var styleE = document.getElementById(IDToPrint);
        styleE.remove();
    };
    Utils.objKeyValueArray = function (obj) {
        var keys = Object.keys(obj);
        var arr = [];
        keys.forEach(function (key) {
            arr[key] = {
                key: key,
                value: obj[key]
            };
        });
        return arr;
    };
    Utils.arrDivideInSubArray = function (data, divisionLimit) {
        if (divisionLimit === void 0) { divisionLimit = 7; }
        var singleObj = data && data[0];
        var obj = this.emptyMyObjectWithNewRef(singleObj);
        var division = parseInt((data.length / divisionLimit) + '', 10) + 1;
        var dataToShow = [];
        var i = 0;
        for (; i < division; i++) {
            var start = i * divisionLimit;
            dataToShow[i] = data.slice(start, start + divisionLimit);
        }
        var addRow = divisionLimit - dataToShow[i - 1].length;
        var j = 0;
        for (; j < addRow; j++) {
            dataToShow[i - 1].push(obj);
        }
        return {
            singleObj: singleObj,
            dataToShow: dataToShow
        };
    };
    Utils.obj_MakeQueryStringFromObj = function (obj) {
        var retValue = '';
        var keys = Object.keys(obj);
        keys.forEach(function (key) {
            var val = obj[key];
            if (Array.isArray(val.value)) {
                retValue += '&' + (key) + '=' + (val).join(',');
            }
            else {
                retValue += '&' + (key) + '=' + (val);
            }
        });
        retValue = retValue.substring(1);
        return '?' + retValue;
    };
    Utils.obj_MakeQueryStringFromObjStartWithAND = function (obj) {
        var retValue = '';
        var keys = Object.keys(obj);
        keys.forEach(function (key) {
            var val = obj[key];
            if (Array.isArray(val.value)) {
                retValue += '&' + (key) + '=' + (val).join(',');
            }
            else {
                retValue += '&' + (key) + '=' + (val);
            }
        });
        return retValue;
    };
    Utils.str_ToBoldString = function (value) {
        return '<b>' + value + '</b>';
    };
    Utils.checkForNewValue = function (currentValue, obj) {
        return new Promise(function (resolve, reject) {
            if (currentValue === undefined) {
                reject(currentValue);
            }
            if (obj['prev'] === undefined) {
                obj['prev'] = currentValue;
                resolve(currentValue);
            }
            else if (obj['prev'] !== currentValue) {
                resolve(currentValue);
            }
            obj['prev'] = currentValue;
            reject(currentValue);
        });
    };
    Utils.dot2num = function (dot) {
        var d = dot.split('.');
        return ((((((+d[0]) * 256) + (+d[1])) * 256) + (+d[2])) * 256) + (+d[3]);
    };
    Utils.html = new _html_util__WEBPACK_IMPORTED_MODULE_3__["HtmlUtil"]();
    Utils.grid = new _grid_util__WEBPACK_IMPORTED_MODULE_4__["Grid"]();
    Utils.arrayUtil = new _array_util__WEBPACK_IMPORTED_MODULE_5__["ArrayUtil"]();
    Utils.string = new _string_util__WEBPACK_IMPORTED_MODULE_6__["StringUtil"]();
    Utils.searchModel = new _search_model_util__WEBPACK_IMPORTED_MODULE_7__["SearchModelUtil"]();
    Utils.date = new _date_util__WEBPACK_IMPORTED_MODULE_8__["DateUtil"]();
    Utils.object = new _object_util__WEBPACK_IMPORTED_MODULE_9__["ObjectUtil"]();
    return Utils;
}());



/***/ }),

/***/ "./src/app/core/sharedModules/index.ts":
/*!*********************************************!*\
  !*** ./src/app/core/sharedModules/index.ts ***!
  \*********************************************/
/*! exports provided: RootSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root-shared.module */ "./src/app/core/sharedModules/root-shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootSharedModule", function() { return _root_shared_module__WEBPACK_IMPORTED_MODULE_0__["RootSharedModule"]; });




/***/ }),

/***/ "./src/app/core/sharedModules/root-shared.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/sharedModules/root-shared.module.ts ***!
  \**********************************************************/
/*! exports provided: RootSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootSharedModule", function() { return RootSharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RootSharedModule = /** @class */ (function () {
    function RootSharedModule() {
    }
    RootSharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], RootSharedModule);
    return RootSharedModule;
}());



/***/ }),

/***/ "./src/app/pages/front-panel/front-panel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/front-panel/front-panel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background: black !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/front-panel/front-panel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/front-panel/front-panel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-menu-bar>\r\n\r\n</app-top-menu-bar>\r\n<div class=\"container-fluid page-body-wrapper\">\r\n<app-setup-top-menu-bar class=\"d-none\">\r\n</app-setup-top-menu-bar>\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/front-panel/front-panel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/front-panel/front-panel.component.ts ***!
  \************************************************************/
/*! exports provided: FrontPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPanelComponent", function() { return FrontPanelComponent; });
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

var FrontPanelComponent = /** @class */ (function () {
    function FrontPanelComponent() {
    }
    FrontPanelComponent.prototype.ngOnInit = function () {
        // this.addStyle(document.body, '#ecebec');
    };
    FrontPanelComponent.prototype.addStyle = function (elm, style) {
        elm.style.background = style;
    };
    FrontPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-front-panel',
            template: __webpack_require__(/*! ./front-panel.component.html */ "./src/app/pages/front-panel/front-panel.component.html"),
            styles: [__webpack_require__(/*! ./front-panel.component.css */ "./src/app/pages/front-panel/front-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrontPanelComponent);
    return FrontPanelComponent;
}());



/***/ }),

/***/ "./src/app/pages/front-panel/front-panel.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/front-panel/front-panel.module.ts ***!
  \*********************************************************/
/*! exports provided: FrontPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPanelModule", function() { return FrontPanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-angular/main */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _front_panel_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front-panel.routing */ "./src/app/pages/front-panel/front-panel.routing.ts");
/* harmony import */ var _front_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./front-panel.component */ "./src/app/pages/front-panel/front-panel.component.ts");
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../component/component.module */ "./src/app/component/component.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { DashboardModule } from './../dashboard/dashboard.module';
var FrontPanelModule = /** @class */ (function () {
    function FrontPanelModule() {
    }
    FrontPanelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _front_panel_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _component_component_module__WEBPACK_IMPORTED_MODULE_5__["ComponentModule"],
                ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_2__["AgGridModule"],
            ],
            declarations: [
                _front_panel_component__WEBPACK_IMPORTED_MODULE_4__["FrontPanelComponent"],
            ]
        })
    ], FrontPanelModule);
    return FrontPanelModule;
}());



/***/ }),

/***/ "./src/app/pages/front-panel/front-panel.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/front-panel/front-panel.routing.ts ***!
  \**********************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _front_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front-panel.component */ "./src/app/pages/front-panel/front-panel.component.ts");


//import { AuthGuardService } from './auth-guard.service';
var routes = [
    {
        path: 'pages',
        component: _front_panel_component__WEBPACK_IMPORTED_MODULE_1__["FrontPanelComponent"],
        children: [
            {
                path: 'admin',
                loadChildren: '../dashboard/dashboard.module#DashboardModule'
                //'../cust-service/cust-desktop.module#DashboardModule'
            } //,{
            //       path: 'admin',
            //       loadChildren: '../cust-service/cust-desktop.module#CustDestTopModule'
            // }
        ],
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/sync-jobs/sync-jobs.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/sync-jobs/sync-jobs.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/sync-jobs/sync-jobs.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/sync-jobs/sync-jobs.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sync-jobs works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/sync-jobs/sync-jobs.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/sync-jobs/sync-jobs.component.ts ***!
  \********************************************************/
/*! exports provided: SyncJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncJobsComponent", function() { return SyncJobsComponent; });
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

var SyncJobsComponent = /** @class */ (function () {
    function SyncJobsComponent() {
    }
    SyncJobsComponent.prototype.ngOnInit = function () {
    };
    SyncJobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sync-jobs',
            template: __webpack_require__(/*! ./sync-jobs.component.html */ "./src/app/pages/sync-jobs/sync-jobs.component.html"),
            styles: [__webpack_require__(/*! ./sync-jobs.component.css */ "./src/app/pages/sync-jobs/sync-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SyncJobsComponent);
    return SyncJobsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    'production': true,
    apiUrl: 'https://gmartlogautomationdemo.mpstechnologies.com/',
    debugMode: false,
    'version': '1.0.0'
};


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    apiUrl: 'http://localhost:3000/',
    //apiUrl:'https://gmartlogautomation.mpstechnologies.com/',
    debugMode: false,
    production: false
};


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

module.exports = __webpack_require__(/*! E:\angular\artlog_automation\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map