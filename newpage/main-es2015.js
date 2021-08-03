(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workdir/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar-menu/toolbar-menu.component */ "xEQ9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Lukas Woodtli\'s Web Page';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar-menu/toolbar-menu.component */ "xEQ9");
/* harmony import */ var _pages_static_sites_static_site_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/static-sites/static-site.component */ "j8XU");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _static_pages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./static-pages */ "vqVk");
/* harmony import */ var _pages_table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/table-of-contents/table-of-contents.component */ "iYTM");
















const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' }
];
for (const entry of _static_pages__WEBPACK_IMPORTED_MODULE_11__["STATIC_PAGES"]) {
    routes.push({ path: entry.fileName, component: _pages_static_sites_static_site_component__WEBPACK_IMPORTED_MODULE_7__["StaticSiteComponent"] });
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled'
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot({
                loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
                sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].NONE
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarMenuComponent"],
        _pages_static_sites_static_site_component__WEBPACK_IMPORTED_MODULE_7__["StaticSiteComponent"],
        _pages_table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_12__["TableOfContentsComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"]] }); })();


/***/ }),

/***/ "eOnb":
/*!*************************************************************!*\
  !*** ./src/app/pages/table-of-contents/table-of-content.ts ***!
  \*************************************************************/
/*! exports provided: TableOfContentEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOfContentEntry", function() { return TableOfContentEntry; });
class TableOfContentEntry {
    constructor(level, text, anchor) {
        this.level = level;
        this.text = text;
        this.anchor = anchor;
    }
}


/***/ }),

/***/ "iYTM":
/*!************************************************************************!*\
  !*** ./src/app/pages/table-of-contents/table-of-contents.component.ts ***!
  \************************************************************************/
/*! exports provided: TableOfContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOfContentsComponent", function() { return TableOfContentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function TableOfContentsComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tocEntry_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ".")("fragment", tocEntry_r2.anchor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tocEntry_r2.text, " ");
} }
function TableOfContentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableOfContentsComponent_div_0_div_4_Template, 4, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tableOfContent);
} }
class TableOfContentsComponent {
    constructor() {
        this.tableOfContent = [];
    }
    ngOnInit() {
    }
    showToc() {
        return this.tableOfContent.length > 0;
    }
}
TableOfContentsComponent.ɵfac = function TableOfContentsComponent_Factory(t) { return new (t || TableOfContentsComponent)(); };
TableOfContentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableOfContentsComponent, selectors: [["app-table-of-contents"]], inputs: { tableOfContent: "tableOfContent" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "table-of-contents"], [4, "ngFor", "ngForOf"], [3, "routerLink", "fragment"]], template: function TableOfContentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableOfContentsComponent_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToc());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1vZi1jb250ZW50cy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ "j8XU":
/*!*************************************************************!*\
  !*** ./src/app/pages/static-sites/static-site.component.ts ***!
  \*************************************************************/
/*! exports provided: StaticSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticSiteComponent", function() { return StaticSiteComponent; });
/* harmony import */ var _table_of_contents_table_of_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../table-of-contents/table-of-content */ "eOnb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../table-of-contents/table-of-contents.component */ "iYTM");





class StaticSiteComponent {
    constructor(router, activatedRoute, markdownService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.markdownService = markdownService;
        this.tableOfContent = [];
        this.isFirstTableRow = true;
        this.isFirstTableRow = true;
    }
    ngOnInit() {
        this.configureMarkDownFileName();
        this.markdownService.renderer.heading = (text, level, raw) => this.renderHeading(text, level, raw);
        this.markdownService.renderer.text = (text) => this.renderText(text);
        this.markdownService.renderer.table = (header, body) => this.renderTable(header, body);
        this.markdownService.renderer.tablerow = (content) => this.renderTableRow(content);
        this.markdownService.renderer.tablecell = this.renderTableCell;
        this.markdownService.renderer.link = this.renderLink;
    }
    configureMarkDownFileName() {
        const url = this.router.url;
        this.pathToMdFile = this.getMarkdownFileNameFromRouteUrl(url);
    }
    getMarkdownFileNameFromRouteUrl(url) {
        const urlPart = url.split('#')[0];
        let filePath = 'assets/pages';
        if (!urlPart.startsWith('/')) {
            filePath += '/';
        }
        return `${filePath}${urlPart}.md`;
    }
    renderHeading(text, level, raw) {
        let anchorPrefix = this.markdownService.options.headerPrefix;
        anchorPrefix = anchorPrefix ? anchorPrefix : '';
        const anchor = anchorPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-');
        this.tableOfContent.push(new _table_of_contents_table_of_content__WEBPACK_IMPORTED_MODULE_0__["TableOfContentEntry"](level, raw, anchor));
        const headerTag = `<h${level} id='${anchor}'>${text}</h${level}>`;
        return headerTag;
    }
    renderText(text) {
        if (text.trim() === '[TOC]') {
            return '';
        }
        if (this.isMetadataTag(text)) {
            console.log(`Warning removing meta data from Markdown file: ${text}`);
            return '';
        }
        return text;
    }
    renderTable(header, body) {
        this.isFirstTableRow = true;
        return '<div class="mat-table">' + header + body + '</div>';
    }
    renderTableRow(content) {
        if (this.isFirstTableRow) {
            this.isFirstTableRow = false;
            return '<div class="mat-header-row">' + content + '</div>';
        }
        return '<div class="mat-row">' + content + '</div>';
    }
    renderTableCell(content, flags) {
        if (flags.header) {
            return '<div class="mat-header-cell">' + content + '</div>';
        }
        return '<div class="mat-cell">' + content + '</div>';
    }
    isMetadataTag(text) {
        const textTrimmed = text.trim();
        const metadataTags = ['Title:', 'slug:', 'save_as:', 'URL:'];
        return metadataTags.some(x => textTrimmed.startsWith(x));
    }
    renderLink(href, title, text) {
        console.log(`href: ${href}, title: ${title}, text: ${text}`);
        const staticPagePrefix = '{filename}/pages';
        const documentsPrefix = '/documents/';
        let url = href;
        if (href.startsWith(staticPagePrefix)) {
            url = href.replace(staticPagePrefix, '');
            url = url.replace('.md', '');
            console.log(`Warning fixing link: ${href} to ${url}`);
        }
        else if (href.startsWith(documentsPrefix)) {
            url = href.replace(documentsPrefix, '/assets/documents/');
            console.log(`Warning fixing link: ${href} to ${url}`);
        }
        return `<a href="${url}">${text}</a>`;
    }
}
StaticSiteComponent.ɵfac = function StaticSiteComponent_Factory(t) { return new (t || StaticSiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"])); };
StaticSiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StaticSiteComponent, selectors: [["app-static-site"]], decls: 3, vars: 2, consts: [[1, "document-wrapper"], [3, "tableOfContent"], [3, "src"]], template: function StaticSiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-table-of-contents", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "markdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableOfContent", ctx.tableOfContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.pathToMdFile);
    } }, directives: [_table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_4__["TableOfContentsComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"]], styles: [".mat-table {\n  display: block;\n}\n\n.mat-row,\n.mat-header-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  align-items: center;\n  min-height: 48px;\n  padding: 0 24px;\n}\n\n.mat-cell,\n.mat-header-cell {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}\n\n* {\n  line-height: 1.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXRpYy1zaXRlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBOztFQUVFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTs7RUFFRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7QUFJRiIsImZpbGUiOiJzdGF0aWMtc2l0ZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGVcbiAgZGlzcGxheTogYmxvY2tcblxuLm1hdC1yb3csXG4ubWF0LWhlYWRlci1yb3dcbiAgZGlzcGxheTogZmxleFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHhcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWRcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICBtaW4taGVpZ2h0OiA0OHB4XG4gIHBhZGRpbmc6IDAgMjRweFxuXG4ubWF0LWNlbGwsXG4ubWF0LWhlYWRlci1jZWxsXG4gIGZsZXg6IDFcbiAgb3ZlcmZsb3c6IGhpZGRlblxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmRcblxuKlxuICBsaW5lLWhlaWdodDogMS44XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "vqVk":
/*!*********************************!*\
  !*** ./src/app/static-pages.ts ***!
  \*********************************/
/*! exports provided: STATIC_PAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_PAGES", function() { return STATIC_PAGES; });
const STATIC_PAGES = [
    { displayName: 'Home', fileName: 'index' },
    { displayName: 'Resume', fileName: 'resume' },
    { displayName: 'Skills', fileName: 'skills' },
    { displayName: 'Books', fileName: 'books' },
    { displayName: 'Courses', fileName: 'courses' },
    { displayName: 'Projects', fileName: 'projects' },
    { displayName: 'Blog', fileName: 'blog' },
    { displayName: 'Contact', fileName: 'contact' }
    //  {display_name: '', file_name: 'recruiters_headhunters'},
];


/***/ }),

/***/ "xEQ9":
/*!********************************************************!*\
  !*** ./src/app/toolbar-menu/toolbar-menu.component.ts ***!
  \********************************************************/
/*! exports provided: ToolbarMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarMenuComponent", function() { return ToolbarMenuComponent; });
/* harmony import */ var _static_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static-pages */ "vqVk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ToolbarMenuComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", menuItem_r1.fileName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.displayName, " ");
} }
class ToolbarMenuComponent {
    constructor() {
        this.menuItems = _static_pages__WEBPACK_IMPORTED_MODULE_0__["STATIC_PAGES"];
    }
    ngOnInit() {
    }
}
ToolbarMenuComponent.ɵfac = function ToolbarMenuComponent_Factory(t) { return new (t || ToolbarMenuComponent)(); };
ToolbarMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToolbarMenuComponent, selectors: [["app-toolbar-menu"]], decls: 7, vars: 1, consts: [["color", "primary"], [1, "gap"], ["mat-button", "", "routerLink", "/"], [1, "filler"], [4, "ngFor", "ngForOf"], ["mat-button", "", 3, "routerLink"]], template: function ToolbarMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Lukas Woodtli");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ToolbarMenuComponent_span_6_Template, 3, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".filler[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.gap[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rvb2xiYXItbWVudS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoidG9vbGJhci1tZW51LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZmlsbGVyXG4gIGZsZXg6IDEgMSBhdXRvXG5cbi5nYXBcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4XG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map