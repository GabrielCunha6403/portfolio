(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Black\Documents\portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MenuComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setScroll(item_r1.offsetTop); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r1.id === ctx_r0.menuSelected ? "item-selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
} }
class MenuComponent {
    constructor() {
        this.menuSelected = '';
        this.menuItems = [];
        this.offset = 70;
        this.themeSelected = 0;
        this.styles = [
            { primary: '#FF6F61', secondary: '#005F73' },
            { primary: '#F0F1F6', secondary: '#1E3F66' },
            { primary: '#FFDC80', secondary: '#0006c1' },
            { primary: '#FF9F1C', secondary: '#2EC4B6' },
            { primary: '#FFDC80', secondary: '#833AB4' },
            { primary: '#A8DADC', secondary: '#E63946' },
            { primary: '#FFC6FF', secondary: '#6B705C' }
        ];
        this.setColorScheme();
    }
    ngOnInit() {
    }
    onWindowScroll(e) {
        const windowScroll = window.scrollY;
        if (windowScroll == 0) {
            document.querySelector('.menu').classList.add('fixed-top');
        }
        else {
            document.querySelector('.menu').classList.remove('fixed-top');
        }
    }
    setColorScheme() {
        this.themeSelected++;
        if (this.themeSelected > this.styles.length - 1)
            this.themeSelected = 0;
        document.documentElement.style.setProperty('--colorPrimary', this.styles[this.themeSelected].primary);
        document.documentElement.style.setProperty('--colorSecondary', this.styles[this.themeSelected].secondary);
    }
    setScroll(value) {
        window.scrollTo({
            top: (value - this.offset),
            behavior: 'smooth'
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], hostBindings: function MenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function MenuComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { menuSelected: "menuSelected", menuItems: "menuItems" }, decls: 12, vars: 1, consts: [[1, "menu", "fixed-top"], ["src", "", "alt", ""], [1, "mobile-area"], [1, "blur-background"], [1, "menu-list"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row"], [1, "divider"], [1, "neon", 3, "click"], [1, "neon", "toggle-menu-mobile"], [1, "fas", "fa-bars"], [3, "ngClass"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuComponent_li_5_Template, 3, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_8_listener() { return ctx.setColorScheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Change Schema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".menu[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  height: 60px;\r\n  top: 0;\r\n  z-index: 10;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  -webkit-backdrop-filter: blur(10px);\r\n          backdrop-filter: blur(10px);\r\n  background: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n  padding: 0 24px;\r\n  transition: .2s ease-in-out;\r\n}\r\n.menu[_ngcontent-%COMP%]:hover {\r\n  background: black;\r\n}\r\n.fixed-top[_ngcontent-%COMP%] {\r\n  background: black;\r\n}\r\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 12px 0;\r\n  display: flex;\r\n}\r\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-left: 16px;\r\n  position: relative;\r\n}\r\n.item-selected[_ngcontent-%COMP%]::after {\r\n  transition: .2s;\r\n  content: '';\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: var(--colorSecondary);\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.divider[_ngcontent-%COMP%] {\r\n  margin-right: 16px;\r\n  height: 100%;\r\n  width: 3px;\r\n  background-color: var(--colorPrimary);\r\n}\r\n.toggle-menu-mobile[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.blur-background[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n@media (max-width: 906px) {\r\n  .toggle-menu-mobile[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  .menu-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .blur-background[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    top: 0;\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osTUFBTTtFQUNOLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsU0FBUztFQUNULE9BQU87QUFDVDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLE9BQU87SUFDUCxNQUFNO0lBQ04sZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGhlaWdodDogNjBweDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgMjRweDtcclxuICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm1lbnU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbi5maXhlZC10b3Age1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbi5tZW51IHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMTJweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1lbnUgdWwgbGkge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaXRlbS1zZWxlY3RlZDo6YWZ0ZXIge1xyXG4gIHRyYW5zaXRpb246IC4ycztcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JTZWNvbmRhcnkpO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5kaXZpZGVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcclxufVxyXG4udG9nZ2xlLW1lbnUtbW9iaWxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5ibHVyLWJhY2tncm91bmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwNnB4KSB7XHJcbiAgLnRvZ2dsZS1tZW51LW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAubWVudS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmJsdXItYmFja2dyb3VuZCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, { menuSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ModalComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", link_r2.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", link_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r2.url);
} }
function ModalComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const top_r3 = ctx.$implicit;
    const isFirst_r4 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (!isFirst_r4 ? " \u2022 " : "") + top_r3, " ");
} }
class ModalComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    closeModal() {
        this.close.emit(false);
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { project: "project", visible: "visible" }, outputs: { close: "close" }, decls: 26, vars: 8, consts: [[1, "background-modal", 3, "ngClass"], [1, "modal-container"], [1, "modal-header-container"], [1, "line-divider"], [1, "modal-body-content"], [1, "modal-body-image"], [1, "modal-body-info"], ["class", "link-row", 4, "ngFor", "ngForOf"], [1, "topics-content"], [4, "ngFor", "ngForOf"], [1, "modal-sub"], [3, "click"], [1, "link-row"], ["target", "_blank", 3, "href"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModalComponent_div_12_Template, 5, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Topics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ModalComponent_span_22_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_24_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fechar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.visible ? "d-flex" : "d-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project == null ? null : ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx.project == null ? null : ctx.project.urlImage, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project == null ? null : ctx.project.urls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project == null ? null : ctx.project.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project == null ? null : ctx.project.dsTopics);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".background-modal[_ngcontent-%COMP%] {\r\n  \r\n  height: 100vh;\r\n  width: 100vw;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n  -webkit-backdrop-filter: blur(22px) brightness(50%);\r\n          backdrop-filter: blur(22px) brightness(50%);\r\n  z-index: 20;\r\n  padding: 6rem 12rem;\r\n  animation: fadeInBackground 1s;\r\n}\r\n.modal-container[_ngcontent-%COMP%] {\r\n  -webkit-backdrop-filter: brightness(50%);\r\n          backdrop-filter: brightness(50%);\r\n  background: rgba(0, 0, 0, 0.5);\r\n  border-radius: 8px;\r\n  \r\n  font-family: Consolas;\r\n  animation: fadeInModal .5s;\r\n  overflow: hidden;\r\n  width: -webkit-fill-available;\r\n}\r\n.modal-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: var(--colorPrimary);\r\n}\r\n.modal-header-container[_ngcontent-%COMP%] {\r\n  padding: 12px 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.modal-body-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 16px 16px;\r\n  \r\n  height: 66%;\r\n}\r\n.modal-body-image[_ngcontent-%COMP%] {\r\n  height: 20rem;\r\n  width: 50%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n.modal-body-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: white;\r\n  margin-left: 4rem;\r\n  padding: 4px 1rem;\r\n  border-radius: 8px;\r\n  transition: .2s;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  max-height: 340px;\r\n  overflow-y: scroll;\r\n}\r\n.modal-body-info[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n  margin-bottom: 16px;\r\n}\r\n.modal-body-info[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n.modal-sub[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 16px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  width: -webkit-fill-available;\r\n  transition: .2s;\r\n}\r\n.modal-sub[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n.modal-sub[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  color: var(--colorPrimary);\r\n  transition: .2s;\r\n  padding: 8px;\r\n  border-radius: 8px;\r\n}\r\n.modal-sub[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  color: var(--colorSecondary);\r\n  text-shadow: 0 0 4px var(--colorSecondary);\r\n  background-color: var(--colorPrimary);\r\n  box-shadow: 0 0 6px 2px var(--colorPrimary), 0 0 10px 3px var(--colorPrimary);\r\n}\r\n.line-divider[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 2px;\r\n  margin-bottom: 12px;\r\n  background: linear-gradient(45deg, var(--colorSecondary), var(--colorPrimary));\r\n}\r\n.modal-body-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  line-break: anywhere;\r\n}\r\n@keyframes fadeInModal {\r\n  0% { opacity: 0 }\r\n  100% { opacity: 1 }\r\n}\r\n@keyframes fadeInBackground {\r\n  0% { -webkit-backdrop-filter: none; backdrop-filter: none }\r\n  100% { -webkit-backdrop-filter: blur(22px) brightness(50%); backdrop-filter: blur(22px) brightness(50%) }\r\n}\r\n@media (max-width: 960px) {\r\n  .background-modal[_ngcontent-%COMP%] {\r\n    padding: 6rem 7rem;\r\n  }\r\n}\r\n@media (max-width: 728px) {\r\n  .background-modal[_ngcontent-%COMP%] {\r\n    padding: 16px 8px;\r\n  }\r\n  .modal-body-content[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: auto;\r\n  }\r\n  .modal-body-image[_ngcontent-%COMP%] {\r\n    height: 12rem;\r\n  }\r\n  .modal-body-info[_ngcontent-%COMP%] {\r\n    margin: 8px 0;\r\n    max-height: 212px;\r\n    width: -webkit-fill-available;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLG1EQUEyQztVQUEzQywyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsMENBQTBDO0VBQzFDLHFDQUFxQztFQUNyQyw2RUFBNkU7QUFDL0U7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw4RUFBOEU7QUFDaEY7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsS0FBSyxXQUFXO0VBQ2hCLE9BQU8sV0FBVztBQUNwQjtBQUNBO0VBQ0UsS0FBSyw2QkFBb0IsRUFBcEIsc0JBQXNCO0VBQzNCLE9BQU8sbURBQTBDLEVBQTFDLDRDQUE0QztBQUNyRDtBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNkJBQTZCO0VBQy9CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1tb2RhbCB7XHJcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjJweCkgYnJpZ2h0bmVzcyg1MCUpO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIHBhZGRpbmc6IDZyZW0gMTJyZW07XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5CYWNrZ3JvdW5kIDFzO1xyXG59XHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLyogcGFkZGluZzogMTJweCAxNnB4OyAqL1xyXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcztcclxuICBhbmltYXRpb246IGZhZGVJbk1vZGFsIC41cztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcbi5tb2RhbC1jb250YWluZXIgaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xyXG59XHJcbi5tb2RhbC1oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5tb2RhbC1ib2R5LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nOiAxNnB4IDE2cHg7XHJcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICBoZWlnaHQ6IDY2JTtcclxufVxyXG4ubW9kYWwtYm9keS1pbWFnZSB7XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4ubW9kYWwtYm9keS1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cmVtO1xyXG4gIHBhZGRpbmc6IDRweCAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1heC1oZWlnaHQ6IDM0MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4ubW9kYWwtYm9keS1pbmZvIHNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLm1vZGFsLWJvZHktaW5mbzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi5tb2RhbC1zdWIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuLm1vZGFsLXN1Yjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi5tb2RhbC1zdWIgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcclxuICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4ubW9kYWwtc3ViIGJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yU2Vjb25kYXJ5KTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDRweCB2YXIoLS1jb2xvclNlY29uZGFyeSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiAwIDAgNnB4IDJweCB2YXIoLS1jb2xvclByaW1hcnkpLCAwIDAgMTBweCAzcHggdmFyKC0tY29sb3JQcmltYXJ5KTtcclxufVxyXG4ubGluZS1kaXZpZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1jb2xvclNlY29uZGFyeSksIHZhcigtLWNvbG9yUHJpbWFyeSkpO1xyXG59XHJcbi5tb2RhbC1ib2R5LWluZm8gYSB7XHJcbiAgbGluZS1icmVhazogYW55d2hlcmU7XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlSW5Nb2RhbCB7XHJcbiAgMCUgeyBvcGFjaXR5OiAwIH1cclxuICAxMDAlIHsgb3BhY2l0eTogMSB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlSW5CYWNrZ3JvdW5kIHtcclxuICAwJSB7IGJhY2tkcm9wLWZpbHRlcjogbm9uZSB9XHJcbiAgMTAwJSB7IGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMnB4KSBicmlnaHRuZXNzKDUwJSkgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5iYWNrZ3JvdW5kLW1vZGFsIHtcclxuICAgIHBhZGRpbmc6IDZyZW0gN3JlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcyOHB4KSB7XHJcbiAgLmJhY2tncm91bmQtbW9kYWwge1xyXG4gICAgcGFkZGluZzogMTZweCA4cHg7XHJcbiAgfVxyXG4gIC5tb2RhbC1ib2R5LWNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5tb2RhbC1ib2R5LWltYWdlIHtcclxuICAgIGhlaWdodDogMTJyZW07XHJcbiAgfVxyXG4gIC5tb2RhbC1ib2R5LWluZm8ge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIG1heC1oZWlnaHQ6IDIxMnB4O1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return []; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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

/***/ "LsEZ":
/*!***********************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.ts ***!
  \***********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TimelineComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
function TimelineComponent_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const top_r5 = ctx.$implicit;
    const isFirst_r6 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((!isFirst_r6 ? " \u2022 " : "") + top_r5);
} }
function TimelineComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimelineComponent_div_1_div_2_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TimelineComponent_div_1_span_12_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 < ctx_r0.data.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", line_r1.topics);
} }
class TimelineComponent {
    constructor() { }
    ngOnInit() {
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "timeline"], ["class", "tl-row", 4, "ngFor", "ngForOf"], [1, "tl-row"], [1, "tl-point"], ["class", "line", 4, "ngIf"], [1, "line-mobile"], [1, "tl-body"], [1, "tl-topics"], [4, "ngFor", "ngForOf"], [1, "line"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimelineComponent_div_1_Template, 13, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".tl-point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  height: 8rem;\r\n  width: 8rem;\r\n  background-color: var(--colorSecondary);\r\n  z-index: 1;\r\n  transition: .2s;\r\n}\r\n.tl-point[_ngcontent-%COMP%] {\r\n  color: var(--colorPrimary);\r\n  font-size: 20px;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.line[_ngcontent-%COMP%] {\r\n  content: '';\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 2px;\r\n  background: var(--colorPrimary);\r\n  top: 4rem;\r\n}\r\n.tl-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 16px 26px;\r\n  border-radius: 8px;\r\n  transition: .2s;\r\n}\r\n.tl-row[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n.tl-row[_ngcontent-%COMP%]:hover   .tl-point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  background-color: var(--colorPrimary);\r\n}\r\n.tl-row[_ngcontent-%COMP%]:hover   .tl-point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: var(--colorSecondary);\r\n}\r\n.tl-row[_ngcontent-%COMP%]:hover   .tl-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .tl-row[_ngcontent-%COMP%]:hover   .tl-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: var(--colorPrimary);\r\n}\r\n.tl-body[_ngcontent-%COMP%] {\r\n  margin-left: 34px;\r\n}\r\n.tl-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: var(--colorPrimary);\r\n  font-weight: bold;\r\n}\r\n.tl-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .tl-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: var(--colorSecondary);\r\n  transition: .2s;\r\n}\r\n@media (max-width: 728px) {\r\n  .tl-row[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    padding-left: 8px;\r\n    padding-right: 8px;\r\n  }\r\n  .tl-body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n  .tl-point[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n  .tl-point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: none;\r\n    height: 6rem;\r\n    width: auto;\r\n    font-size: 16px;\r\n  }\r\n  .line[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .line-mobile[_ngcontent-%COMP%] {\r\n    background: var(--colorSecondary);\r\n    height: 2px;\r\n    width: -webkit-fill-available;\r\n    margin: 0 16px;\r\n  }\r\n  .tl-row[_ngcontent-%COMP%]:hover   .tl-point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: none;\r\n    color: var(--colorPrimary);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTs7RUFFRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCO0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtFQUM1QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRsLXBvaW50IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG4gIHdpZHRoOiA4cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yU2Vjb25kYXJ5KTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zaXRpb246IC4ycztcclxufVxyXG4udGwtcG9pbnQge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubGluZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yUHJpbWFyeSk7XHJcbiAgdG9wOiA0cmVtO1xyXG59XHJcbi50bC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nOiAxNnB4IDI2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRyYW5zaXRpb246IC4ycztcclxufVxyXG4udGwtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuLnRsLXJvdzpob3ZlciAudGwtcG9pbnQgc3BhbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcclxufVxyXG4udGwtcm93OmhvdmVyIC50bC1wb2ludCBzcGFuIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3JTZWNvbmRhcnkpO1xyXG59XHJcbi50bC1yb3c6aG92ZXIgLnRsLWJvZHkgc3BhbixcclxuLnRsLXJvdzpob3ZlciAudGwtYm9keSBwIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcclxufVxyXG4udGwtYm9keSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM0cHg7XHJcbn1cclxuLnRsLWJvZHkgaDQge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi50bC1ib2R5IHNwYW4sXHJcbi50bC1ib2R5IHAge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvclNlY29uZGFyeSk7XHJcbiAgdHJhbnNpdGlvbjogLjJzO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzI4cHgpIHtcclxuICAudGwtcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgLnRsLWJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAudGwtcG9pbnQge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnRsLXBvaW50IHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGhlaWdodDogNnJlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAubGluZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubGluZS1tb2JpbGUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3JTZWNvbmRhcnkpO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuICAudGwtcm93OmhvdmVyIC50bC1wb2ludCBzcGFuIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fTlv":
/*!***************************************************************!*\
  !*** ./src/app/components/float-card/float-card.component.ts ***!
  \***************************************************************/
/*! exports provided: FloatCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatCardComponent", function() { return FloatCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class FloatCardComponent {
    constructor() { }
    ngOnInit() {
    }
    onMouseMove(ev) {
        const element = document.querySelector("#" + this.id);
        this.rotateCard(ev, element);
    }
    rotateCard(event, element) {
        const rect = element.getBoundingClientRect();
        const middleX = rect.left + rect.width / 2;
        const middleY = rect.top + rect.height / 2;
        const offsetX = ((event.clientX - middleX) / middleX) * 45; // Reduzir o multiplicador se o efeito for muito forte
        const offsetY = ((event.clientY - middleY) / middleY) * 45;
        element.style.setProperty("--rotateX", `${offsetX}deg`);
        element.style.setProperty("--rotateY", `${-offsetY}deg`);
    }
}
FloatCardComponent.ɵfac = function FloatCardComponent_Factory(t) { return new (t || FloatCardComponent)(); };
FloatCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FloatCardComponent, selectors: [["app-float-card"]], hostBindings: function FloatCardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function FloatCardComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { id: "id" }, ngContentSelectors: _c0, decls: 5, vars: 1, consts: [[1, "card-container"], [3, "id"]], template: function FloatCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.id);
    } }, styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::after, *[_ngcontent-%COMP%]::before {\r\n  box-sizing: border-box;\r\n}\r\n.card-container[_ngcontent-%COMP%] {\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin-bottom: 16px;\r\n}\r\npre[_ngcontent-%COMP%] {\r\n  background: black;\r\n  \r\n  margin: 0;\r\n  border-radius: 1rem;\r\n  width: 168px;\r\n  position: relative;\r\n  transform-style: preserve-3d;\r\n  \r\n}\r\npre[_ngcontent-%COMP%]::before, pre[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  border-radius: inherit;\r\n}\r\npre[_ngcontent-%COMP%]::after {\r\n  transition: .5s;\r\n}\r\npre[_ngcontent-%COMP%]::before {\r\n  inset: .75rem;\r\n  background: black;\r\n  transform: translateZ(-24px);\r\n  filter: blur(15px);\r\n  opacity: .5;\r\n}\r\npre[_ngcontent-%COMP%]::after {\r\n  transition: .5s;\r\n  inset: -.5rem;\r\n  background: linear-gradient(-45deg, var(--colorPrimary), var(--colorSecondary));\r\n  transform: translateZ(-25px);\r\n}\r\npre[_ngcontent-%COMP%]:hover::before {\r\n  transform: translateZ(-49px);\r\n}\r\npre[_ngcontent-%COMP%]:hover::after {\r\n  transform: translateZ(-50px);\r\n}\r\npre[_ngcontent-%COMP%]:hover {\r\n  transform:\r\n    perspective(5000px)\r\n    rotateY(var(--rotateX))\r\n    rotateX(var(--rotateY))\r\n    translateZ(50px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbG9hdC1jYXJkL2Zsb2F0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLCtFQUErRTtFQUMvRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRTs7OztvQkFJa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zsb2F0LWNhcmQvZmxvYXQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKixcclxuKjo6YWZ0ZXIsXHJcbio6OmJlZm9yZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbnByZSB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgLyogcGFkZGluZzogMnJlbTsgKi9cclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICB3aWR0aDogMTY4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLyogdHJhbnNpdGlvbjogLjFzOyAqL1xyXG59XHJcbnByZTo6YmVmb3JlLFxyXG5wcmU6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxufVxyXG5wcmU6OmFmdGVyIHtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxucHJlOjpiZWZvcmUge1xyXG4gIGluc2V0OiAuNzVyZW07XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNHB4KTtcclxuICBmaWx0ZXI6IGJsdXIoMTVweCk7XHJcbiAgb3BhY2l0eTogLjU7XHJcbn1cclxucHJlOjphZnRlciB7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIGluc2V0OiAtLjVyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgdmFyKC0tY29sb3JQcmltYXJ5KSwgdmFyKC0tY29sb3JTZWNvbmRhcnkpKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1cHgpO1xyXG59XHJcbnByZTpob3Zlcjo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTQ5cHgpO1xyXG59XHJcbnByZTpob3Zlcjo6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTBweCk7XHJcbn1cclxucHJlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06XHJcbiAgICBwZXJzcGVjdGl2ZSg1MDAwcHgpXHJcbiAgICByb3RhdGVZKHZhcigtLXJvdGF0ZVgpKVxyXG4gICAgcm90YXRlWCh2YXIoLS1yb3RhdGVZKSlcclxuICAgIHRyYW5zbGF0ZVooNTBweCk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloatCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-float-card',
                templateUrl: './float-card.component.html',
                styleUrls: ['./float-card.component.css'],
            }]
    }], function () { return []; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }] }); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _float_card_float_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./float-card/float-card.component */ "fTlv");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card.component */ "lXt9");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.component */ "7aL3");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/timeline.component */ "LsEZ");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "0oYm");








class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _float_card_float_card_component__WEBPACK_IMPORTED_MODULE_2__["FloatCardComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _float_card_float_card_component__WEBPACK_IMPORTED_MODULE_2__["FloatCardComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                    _float_card_float_card_component__WEBPACK_IMPORTED_MODULE_2__["FloatCardComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"],
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
                    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"]
                ],
                exports: [
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                    _float_card_float_card_component__WEBPACK_IMPORTED_MODULE_2__["FloatCardComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"],
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
                    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CardComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} if (rf & 2) {
    const top_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.getIconClass(top_r1));
} }
class CardComponent {
    constructor() { }
    ngOnInit() {
    }
    getIconClass(topic) {
        switch (topic.toUpperCase()) {
            case "DOCKER":
                return "fab fa-docker color-blue";
            case "ANGULAR":
                return "fab fa-angular color-red";
            case "VUE":
                return "fab fa-vuejs color-green";
            case "SPRING":
                return "fas fa-leaf color-green";
            case "JAVA":
                return "fab fa-java color-orange";
            case "JAVASCRIPT":
                return "fab fa-js color-yellow";
            case "HTML":
                return "fab fa-html5 color-blue";
            case "CSS":
                return "fab fa-css3-alt color-orange";
        }
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { project: "project" }, decls: 7, vars: 5, consts: [[1, "card-component"], [1, "card-image"], [1, "card-body"], [1, "card-topics"], ["class", "topic-icon", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "topic-icon", 3, "ngClass"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_i_6_Template, 1, 1, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx.project.urlImage, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.topics);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".color-blue[_ngcontent-%COMP%] {\r\n  color: rgb(0, 110, 255);\r\n}\r\n.color-red[_ngcontent-%COMP%] {\r\n  color: rgb(255, 0, 0);\r\n}\r\n.color-green[_ngcontent-%COMP%] {\r\n  color: rgb(19, 194, 0);\r\n}\r\n.color-orange[_ngcontent-%COMP%] {\r\n  color: rgb(255, 132, 0);\r\n}\r\n.color-yellow[_ngcontent-%COMP%] {\r\n  color: rgb(255, 255, 0);\r\n}\r\n.topic-icon[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  margin-right: 12px;\r\n}\r\n.card-component[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transition: .2s;\r\n  max-height: 256px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin: 12px 0;\r\n  \r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n.card-component[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  transition-delay: .3s;\r\n  background-color: var(--colorPrimary);\r\n  box-shadow: 0 0 10px 2px var(--colorPrimary), 0 0 10px 4px var(--colorPrimary), 0 0 10px 6px var(--colorPrimary);\r\n}\r\n.card-component[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\r\n  transition-delay: .3s;\r\n  text-shadow: 0 0 10px var(--colorSecondary);\r\n  color: var(--colorSecondary);\r\n}\r\n.card-component[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: var(--colorPrimary);\r\n}\r\n.card-image[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n.card-component[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  content: '';\r\n  width: 100%;\r\n  height: 5px;\r\n  left: -100%;\r\n  top: 0;\r\n  background: linear-gradient(90deg, transparent, var(--colorPrimary));\r\n}\r\n.card-component[_ngcontent-%COMP%]::before {\r\n  position: absolute;\r\n  content: '';\r\n  width: 100%;\r\n  height: 5px;\r\n  right: -100%;\r\n  bottom: 0;\r\n  background: linear-gradient(270deg, transparent, var(--colorPrimary));\r\n}\r\n.card-component[_ngcontent-%COMP%]:hover::after {\r\n  transition: .5s;\r\n  left: 100%;\r\n}\r\n.card-component[_ngcontent-%COMP%]:hover::before {\r\n  transition: .5s;\r\n  right: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLGdIQUFnSDtBQUNsSDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDJDQUEyQztFQUMzQyw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxNQUFNO0VBQ04sb0VBQW9FO0FBQ3RFO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLWJsdWUge1xyXG4gIGNvbG9yOiByZ2IoMCwgMTEwLCAyNTUpO1xyXG59XHJcbi5jb2xvci1yZWQge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxufVxyXG4uY29sb3ItZ3JlZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTksIDE5NCwgMCk7XHJcbn1cclxuLmNvbG9yLW9yYW5nZSB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDEzMiwgMCk7XHJcbn1cclxuLmNvbG9yLXllbGxvdyB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMCk7XHJcbn1cclxuLnRvcGljLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuLmNhcmQtY29tcG9uZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogLjJzO1xyXG4gIG1heC1oZWlnaHQ6IDI1NnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW46IDEycHggMDtcclxuICAvKiBtYXgtd2lkdGg6IDM1NnB4OyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4uY2FyZC1jb21wb25lbnQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAuM3M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggdmFyKC0tY29sb3JQcmltYXJ5KSwgMCAwIDEwcHggNHB4IHZhcigtLWNvbG9yUHJpbWFyeSksIDAgMCAxMHB4IDZweCB2YXIoLS1jb2xvclByaW1hcnkpO1xyXG59XHJcbi5jYXJkLWNvbXBvbmVudDpob3ZlciBoMyB7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogLjNzO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1jb2xvclNlY29uZGFyeSk7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yU2Vjb25kYXJ5KTtcclxufVxyXG4uY2FyZC1jb21wb25lbnQgaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xyXG59XHJcbi5jYXJkLWltYWdlIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcbi5jYXJkLWNvbXBvbmVudDo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDVweDtcclxuICBsZWZ0OiAtMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgdmFyKC0tY29sb3JQcmltYXJ5KSk7XHJcbn1cclxuLmNhcmQtY29tcG9uZW50OjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDVweDtcclxuICByaWdodDogLTEwMCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHRyYW5zcGFyZW50LCB2YXIoLS1jb2xvclByaW1hcnkpKTtcclxufVxyXG4uY2FyZC1jb21wb25lbnQ6aG92ZXI6OmFmdGVyIHtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgbGVmdDogMTAwJTtcclxufVxyXG4uY2FyZC1jb21wb25lbnQ6aG92ZXI6OmJlZm9yZSB7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIHJpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then((m) => m.HomeModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
//# sourceMappingURL=main.js.map