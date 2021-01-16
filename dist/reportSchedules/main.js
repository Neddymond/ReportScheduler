(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/tPW":
/*!**************************************************!*\
  !*** ./src/app/schedules/schedules.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ../schedules.service */ "ekzQ"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! @angular/material/form-field */ "kmnG"), __webpack_require__(/*! @angular/material/input */ "qFsG"), __webpack_require__(/*! @angular/material/datepicker */ "iadO"), __webpack_require__(/*! @angular/material/button */ "bTqV"), __webpack_require__(/*! @angular/material/toolbar */ "/t3+")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, i0, i1, i2, i3, i4, i5, i6, i7, i8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SchedulesComponent = void 0;
    function SchedulesComponent_mat_toolbar_0_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar", 14);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r0.successMsg);
    } }
    function SchedulesComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar", 15);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r1.errorMsg);
    } }
    class SchedulesComponent {
        constructor(scheduleService) {
            this.scheduleService = scheduleService;
            // private fileName: string;
            this.uploading = false;
        }
        ngOnInit() {
        }
        onUpload() {
            this.uploading = !this.uploading;
            // console.log(this.document);
            this.scheduleService.upload(this.document).subscribe((event) => {
                if (typeof (event) === "object") {
                    this.uploading = false;
                }
            });
        }
        handleFileInput(event) {
            this.document = event.target.files[0];
            // this.onUpload();
        }
        ;
        createSchedule() {
            this.successMsg = "";
            this.errorMsg = "";
            this.scheduleService.createSchedule(this.date, this.name, this.email, this.document)
                .subscribe((createdSchedule) => {
                this.date = "";
                this.name = "";
                this.email = "";
                this.document = null;
                const date = new Date(createdSchedule.date).toDateString();
                this.successMsg = `Report scheduled successfully for ${date}`;
                console.log(this.successMsg);
            }, (error) => {
                this.errorMsg = error.error.message;
            });
        }
    }
    exports.SchedulesComponent = SchedulesComponent;
    SchedulesComponent.ɵfac = function SchedulesComponent_Factory(t) { return new (t || SchedulesComponent)(i0.ɵɵdirectiveInject(i1.SchedulesService)); };
    SchedulesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SchedulesComponent, selectors: [["app-schedules"]], decls: 22, vars: 7, consts: [["color", "accent", 4, "ngIf"], ["color", "warn", 4, "ngIf"], [1, "form-container"], [3, "submit"], ["name", "date", "matInput", "", "placeholder", "Choose a date", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["name", "name", "matInput", "", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["name", "email", "matInput", "", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["for", "file"], ["id", "file", "type", "file", "name", "document", 3, "change"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["link-container", ""], ["target", "blank", "href", "http://localhost:4200/schedule-list"], ["color", "accent"], ["color", "warn"]], template: function SchedulesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SchedulesComponent_mat_toolbar_0_Template, 2, 1, "mat-toolbar", 0);
            i0.ɵɵtemplate(1, SchedulesComponent_mat_toolbar_1_Template, 2, 1, "mat-toolbar", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "form", 3);
            i0.ɵɵlistener("submit", function SchedulesComponent_Template_form_submit_3_listener() { return ctx.createSchedule(); });
            i0.ɵɵelementStart(4, "mat-form-field");
            i0.ɵɵelementStart(5, "input", 4);
            i0.ɵɵlistener("ngModelChange", function SchedulesComponent_Template_input_ngModelChange_5_listener($event) { return ctx.date = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "mat-datepicker-toggle", 5);
            i0.ɵɵelement(7, "mat-datepicker", null, 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-form-field");
            i0.ɵɵelementStart(10, "input", 7);
            i0.ɵɵlistener("ngModelChange", function SchedulesComponent_Template_input_ngModelChange_10_listener($event) { return ctx.name = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-form-field");
            i0.ɵɵelementStart(12, "input", 8);
            i0.ɵɵlistener("ngModelChange", function SchedulesComponent_Template_input_ngModelChange_12_listener($event) { return ctx.email = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "label", 9);
            i0.ɵɵtext(14, "Upload file");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "input", 10);
            i0.ɵɵlistener("change", function SchedulesComponent_Template_input_change_15_listener($event) { return ctx.handleFileInput($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "br");
            i0.ɵɵelementStart(17, "button", 11);
            i0.ɵɵtext(18, "Schedule");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 12);
            i0.ɵɵelementStart(20, "a", 13);
            i0.ɵɵtext(21, "All Scheduled Reports");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(8);
            i0.ɵɵproperty("ngIf", ctx.successMsg);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.errorMsg);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.date)("matDatepicker", _r2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r2);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.name);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.email);
        } }, directives: [i2.NgIf, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatFormField, i5.MatInput, i3.DefaultValueAccessor, i6.MatDatepickerInput, i3.NgControlStatus, i3.NgModel, i6.MatDatepickerToggle, i4.MatSuffix, i6.MatDatepicker, i7.MatButton, i8.MatToolbar], styles: [".form-container[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n  max-width: 350px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  background-color: grey;\r\n  color: white;\r\n  border-radius: 3px;\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZiIsImZpbGUiOiJzY2hlZHVsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SchedulesComponent, [{
            type: core_1.Component,
            args: [{
                    selector: 'app-schedules',
                    templateUrl: './schedules.component.html',
                    styleUrls: ['./schedules.component.css']
                }]
        }], function () { return [{ type: i1.SchedulesService }]; }, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER PC\Documents\NodeProjects\ReportScheduler\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ../schedules/schedules.component */ "/tPW")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HomeComponent = void 0;
    class HomeComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    exports.HomeComponent = HomeComponent;
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
    HomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-schedules");
        } }, directives: [i1.SchedulesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HomeComponent, [{
            type: core_1.Component,
            args: [{
                    selector: 'app-home',
                    templateUrl: './home.component.html',
                    styleUrls: ['./home.component.css']
                }]
        }], function () { return []; }, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.environment = void 0;
    exports.environment = {
        production: false,
        API_URL: "http://localhost:3000"
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "RWlP":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/core */ "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, i0) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileUploadComponent = void 0;
    class FileUploadComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    exports.FileUploadComponent = FileUploadComponent;
    FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(); };
    FileUploadComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FileUploadComponent, selectors: [["app-file-upload"]], decls: 2, vars: 0, template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "file-upload works!");
            i0.ɵɵelementEnd();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLXVwbG9hZC5jb21wb25lbnQuY3NzIn0= */"] });
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FileUploadComponent, [{
            type: core_1.Component,
            args: [{
                    selector: 'app-file-upload',
                    templateUrl: './file-upload.component.html',
                    styleUrls: ['./file-upload.component.css']
                }]
        }], function () { return []; }, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "SkcC":
/*!**********************************************************!*\
  !*** ./src/app/schedule-list/schedule-list.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! rxjs/operators */ "kU1M"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ../schedules.service */ "ekzQ"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L"), __webpack_require__(/*! @angular/material/toolbar */ "/t3+"), __webpack_require__(/*! @angular/material/table */ "+0xr"), __webpack_require__(/*! @angular/material/button */ "bTqV")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, operators_1, i0, i1, i2, i3, i4, i5, i6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScheduleListComponent = void 0;
    function ScheduleListComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-spinner");
    } }
    function ScheduleListComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar", 3);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r1.successMsg);
    } }
    function ScheduleListComponent_mat_toolbar_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar", 4);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r2.errorMsg);
    } }
    function ScheduleListComponent_div_3_th_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 15);
        i0.ɵɵtext(1, "Schedule Date");
        i0.ɵɵelementEnd();
    } }
    function ScheduleListComponent_div_3_td_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 16);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "date");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const schedule_r16 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, schedule_r16.date, "dd/MMM/yyyy, h:mm a"));
    } }
    function ScheduleListComponent_div_3_th_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 15);
        i0.ɵɵtext(1, "Name");
        i0.ɵɵelementEnd();
    } }
    function ScheduleListComponent_div_3_td_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 16);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const schedule_r17 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(schedule_r17.name);
    } }
    function ScheduleListComponent_div_3_th_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 15);
        i0.ɵɵtext(1, "Email");
        i0.ɵɵelementEnd();
    } }
    function ScheduleListComponent_div_3_td_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 16);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const schedule_r18 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(schedule_r18.email);
    } }
    function ScheduleListComponent_div_3_th_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 15);
        i0.ɵɵtext(1, "Document");
        i0.ɵɵelementEnd();
    } }
    function ScheduleListComponent_div_3_td_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 16);
        i0.ɵɵtext(1, "{{schedule.document}");
        i0.ɵɵelementEnd();
    } }
    function ScheduleListComponent_div_3_th_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 15);
        i0.ɵɵtext(1, "Cancel");
        i0.ɵɵelementEnd();
    } }
    function ScheduleListComponent_div_3_td_16_Template(rf, ctx) { if (rf & 1) {
        const _r22 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "td", 16);
        i0.ɵɵelementStart(1, "button", 17);
        i0.ɵɵlistener("click", function ScheduleListComponent_div_3_td_16_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r22); const schedule_r20 = ctx.$implicit; const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.cancelSchedule(schedule_r20._id); });
        i0.ɵɵtext(2, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function ScheduleListComponent_div_3_tr_17_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 18);
    } }
    function ScheduleListComponent_div_3_tr_18_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 19);
    } }
    function ScheduleListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "table", 5);
        i0.ɵɵelementContainerStart(2, 6);
        i0.ɵɵtemplate(3, ScheduleListComponent_div_3_th_3_Template, 2, 0, "th", 7);
        i0.ɵɵtemplate(4, ScheduleListComponent_div_3_td_4_Template, 3, 4, "td", 8);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 9);
        i0.ɵɵtemplate(6, ScheduleListComponent_div_3_th_6_Template, 2, 0, "th", 7);
        i0.ɵɵtemplate(7, ScheduleListComponent_div_3_td_7_Template, 2, 1, "td", 8);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(8, 10);
        i0.ɵɵtemplate(9, ScheduleListComponent_div_3_th_9_Template, 2, 0, "th", 7);
        i0.ɵɵtemplate(10, ScheduleListComponent_div_3_td_10_Template, 2, 1, "td", 8);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(11, 11);
        i0.ɵɵtemplate(12, ScheduleListComponent_div_3_th_12_Template, 2, 0, "th", 7);
        i0.ɵɵtemplate(13, ScheduleListComponent_div_3_td_13_Template, 2, 0, "td", 8);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(14, 12);
        i0.ɵɵtemplate(15, ScheduleListComponent_div_3_th_15_Template, 2, 0, "th", 7);
        i0.ɵɵtemplate(16, ScheduleListComponent_div_3_td_16_Template, 3, 0, "td", 8);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(17, ScheduleListComponent_div_3_tr_17_Template, 1, 0, "tr", 13);
        i0.ɵɵtemplate(18, ScheduleListComponent_div_3_tr_18_Template, 1, 0, "tr", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx_r3.schedules);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("matHeaderRowDef", ctx_r3.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx_r3.columns);
    } }
    class ScheduleListComponent {
        constructor(scheduleService) {
            this.scheduleService = scheduleService;
            this.loading = true;
            this.errorMsg = "";
            this.successMsg = "";
            this.schedules = [];
            this.columns = ["date", "name", "email", "document", "cancel"];
        }
        ngOnInit() {
            this.scheduleService.getSchedules()
                .subscribe((schedules) => {
                this.schedules = schedules;
                this.loading = false;
            }, (error) => {
                this.errorMsg = error.error.message;
                this.loading = false;
            });
        }
        ;
        cancelSchedule(id) {
            this.scheduleService.cancelSchedule(id)
                .pipe(operators_1.mergeMap(() => this.scheduleService.getSchedules()))
                .subscribe((schedules) => {
                this.schedules = schedules;
                this.successMsg = "Successfully cancelled the schedule.";
            }, (error) => {
                this.errorMsg = error.error.message;
            });
        }
        ;
    }
    exports.ScheduleListComponent = ScheduleListComponent;
    ScheduleListComponent.ɵfac = function ScheduleListComponent_Factory(t) { return new (t || ScheduleListComponent)(i0.ɵɵdirectiveInject(i1.SchedulesService)); };
    ScheduleListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ScheduleListComponent, selectors: [["app-schedule-list"]], decls: 4, vars: 4, consts: [[4, "ngIf"], ["color", "accent", 4, "ngIf"], ["color", "warn", 4, "ngIf"], ["color", "accent"], ["color", "warn"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "email"], ["matColumnDef", "document"], ["matColumnDef", "cancel"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ScheduleListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ScheduleListComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
            i0.ɵɵtemplate(1, ScheduleListComponent_mat_toolbar_1_Template, 2, 1, "mat-toolbar", 1);
            i0.ɵɵtemplate(2, ScheduleListComponent_mat_toolbar_2_Template, 2, 1, "mat-toolbar", 2);
            i0.ɵɵtemplate(3, ScheduleListComponent_div_3_Template, 19, 3, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.successMsg);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.errorMsg);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.loading && !ctx.loading);
        } }, directives: [i2.NgIf, i3.MatSpinner, i4.MatToolbar, i5.MatTable, i5.MatColumnDef, i5.MatHeaderCellDef, i5.MatCellDef, i5.MatHeaderRowDef, i5.MatRowDef, i5.MatHeaderCell, i5.MatCell, i6.MatButton, i5.MatHeaderRow, i5.MatRow], pipes: [i2.DatePipe], styles: ["table[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2IiLCJmaWxlIjoic2NoZWR1bGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ScheduleListComponent, [{
            type: core_1.Component,
            args: [{
                    selector: 'app-schedule-list',
                    templateUrl: './schedule-list.component.html',
                    styleUrls: ['./schedule-list.component.css']
                }]
        }], function () { return [{ type: i1.SchedulesService }]; }, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppComponent = void 0;
    class AppComponent {
        constructor() {
            this.title = 'reportSchedules';
        }
    }
    exports.AppComponent = AppComponent;
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h1");
            i0.ɵɵtext(2, "Schedule Report");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "router-outlet");
            i0.ɵɵelementEnd();
        } }, directives: [i1.RouterOutlet], styles: [".container[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin: 50px auto 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvO1xyXG59Il19 */"] });
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
            type: core_1.Component,
            args: [{
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                }]
        }], null, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/platform-browser */ "jhN1"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ./app-routing.module */ "vY5A"), __webpack_require__(/*! ./app.component */ "Sy1n"), __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws"), __webpack_require__(/*! @angular/common/http */ "tk/3"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! @angular/material/table */ "+0xr"), __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L"), __webpack_require__(/*! @angular/material/form-field */ "kmnG"), __webpack_require__(/*! @angular/material/input */ "qFsG"), __webpack_require__(/*! @angular/material/button */ "bTqV"), __webpack_require__(/*! @angular/material/datepicker */ "iadO"), __webpack_require__(/*! @angular/material/core */ "FKr1"), __webpack_require__(/*! @angular/material/toolbar */ "/t3+"), __webpack_require__(/*! ./home/home.component */ "9vUh"), __webpack_require__(/*! ./schedules/schedules.component */ "/tPW"), __webpack_require__(/*! ./schedule-list/schedule-list.component */ "SkcC"), __webpack_require__(/*! ./file-upload/file-upload.component */ "RWlP"), __webpack_require__(/*! @angular/core */ "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, platform_browser_1, core_1, app_routing_module_1, app_component_1, animations_1, http_1, forms_1, table_1, progress_spinner_1, form_field_1, input_1, button_1, datepicker_1, core_2, toolbar_1, home_component_1, schedules_component_1, schedule_list_component_1, file_upload_component_1, i0) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppModule = void 0;
    class AppModule {
    }
    exports.AppModule = AppModule;
    AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
    AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                table_1.MatTableModule,
                progress_spinner_1.MatProgressSpinnerModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                toolbar_1.MatToolbarModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
            home_component_1.HomeComponent,
            schedules_component_1.SchedulesComponent,
            schedule_list_component_1.ScheduleListComponent,
            file_upload_component_1.FileUploadComponent], imports: [platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule,
            table_1.MatTableModule,
            progress_spinner_1.MatProgressSpinnerModule,
            form_field_1.MatFormFieldModule,
            input_1.MatInputModule,
            button_1.MatButtonModule,
            datepicker_1.MatDatepickerModule,
            core_2.MatNativeDateModule,
            toolbar_1.MatToolbarModule,
            http_1.HttpClientModule,
            forms_1.FormsModule] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
            type: core_1.NgModule,
            args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        home_component_1.HomeComponent,
                        schedules_component_1.SchedulesComponent,
                        schedule_list_component_1.ScheduleListComponent,
                        file_upload_component_1.FileUploadComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        app_routing_module_1.AppRoutingModule,
                        animations_1.BrowserAnimationsModule,
                        table_1.MatTableModule,
                        progress_spinner_1.MatProgressSpinnerModule,
                        form_field_1.MatFormFieldModule,
                        input_1.MatInputModule,
                        button_1.MatButtonModule,
                        datepicker_1.MatDatepickerModule,
                        core_2.MatNativeDateModule,
                        toolbar_1.MatToolbarModule,
                        http_1.HttpClientModule,
                        forms_1.FormsModule
                    ],
                    providers: [],
                    bootstrap: [app_component_1.AppComponent]
                }]
        }], null, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "ekzQ":
/*!**************************************!*\
  !*** ./src/app/schedules.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ../environments/environment */ "AytR"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common/http */ "tk/3")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, environment_1, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SchedulesService = void 0;
    class SchedulesService {
        constructor(http) {
            this.http = http;
            this.BASE_URL = environment_1.environment.API_URL;
        }
        getSchedules() {
            return this.http.get(`${this.BASE_URL}/schedule`);
        }
        ;
        createSchedule(date, name, email, document) {
            // const formData = new FormData();
            // formData.append("document", document, document.name);
            return this.http.post(`${this.BASE_URL}/schedule`, {
                date,
                name,
                email,
                document
            });
        }
        ;
        cancelSchedule(id) {
            return this.http.delete(`${this.BASE_URL}/schedule/${id}`);
        }
        ;
        upload(document) {
            const formData = new FormData();
            formData.append("document", document, document.name);
            // console.log(formData.get("document"));
            return this.http.post(`${this.BASE_URL}/schedule/uploadreport`, formData);
        }
        ;
    }
    exports.SchedulesService = SchedulesService;
    SchedulesService.ɵfac = function SchedulesService_Factory(t) { return new (t || SchedulesService)(i0.ɵɵinject(i1.HttpClient)); };
    SchedulesService.ɵprov = i0.ɵɵdefineInjectable({ token: SchedulesService, factory: SchedulesService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SchedulesService, [{
            type: core_1.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: i1.HttpClient }]; }, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! ./home/home.component */ "9vUh"), __webpack_require__(/*! ./schedule-list/schedule-list.component */ "SkcC"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, home_component_1, schedule_list_component_1, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppRoutingModule = void 0;
    const routes = [
        {
            path: '',
            component: home_component_1.HomeComponent
        },
        {
            path: 'schedule-list',
            component: schedule_list_component_1.ScheduleListComponent
        }
    ];
    class AppRoutingModule {
    }
    exports.AppRoutingModule = AppRoutingModule;
    AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[router_1.RouterModule.forRoot(routes)], router_1.RouterModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppRoutingModule, [{
            type: core_1.NgModule,
            args: [{
                    imports: [router_1.RouterModule.forRoot(routes)],
                    exports: [router_1.RouterModule]
                }]
        }], null, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ./environments/environment */ "AytR"), __webpack_require__(/*! ./app/app.module */ "ZAI4"), __webpack_require__(/*! @angular/platform-browser */ "jhN1")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, environment_1, __NgCli_bootstrap_1, __NgCli_bootstrap_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (environment_1.environment.production) {
        core_1.enableProdMode();
    }
    __NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)
        .catch(err => console.error(err));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map