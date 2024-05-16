(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/data.json */ "3YvT");
var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/data.json */ "3YvT", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/timeline/timeline.component */ "LsEZ");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal/modal.component */ "7aL3");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/card/card.component */ "lXt9");







const _c0 = ["perfilImage"];
function HomeComponent_app_card_39_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_app_card_39_Template_app_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openModal(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r5);
} }
function HomeComponent_li_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sk_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sk_r9.name);
} }
function HomeComponent_li_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sk_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sk_r10.name);
} }
function HomeComponent_li_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sk_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sk_r11.name);
} }
class HomeComponent {
    constructor() {
        this.projects = [];
        this.timeline = [];
        this.isModalVisible = false;
        this.projectView = null;
        this.projects = _assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__["projects"];
        this.skills = _assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__["skills"];
        this.timeline = _assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__["timeline"];
    }
    ngOnInit() {
    }
    isScrolledIntoView() {
        if (this.perfilImage) {
            const rect = this.perfilImage.nativeElement.getBoundingClientRect();
            const topShown = rect.top >= 0;
            const bottomShown = rect.bottom <= window.innerHeight;
            this.isPerfilImageScrolledIntoView = topShown && bottomShown;
        }
    }
    openModal(index) {
        this.projectView = this.projects[index];
        this.isModalVisible = true;
    }
    closeModal(ev) {
        this.isModalVisible = ev.target;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.perfilImage = _t.first);
    } }, hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.isScrolledIntoView($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 69, vars: 7, consts: [[1, "home"], [1, "section-row", "row", "m-0"], [1, "col-xl-6"], [1, "flip-card-area"], [1, "mouse-message"], [1, "fas", "fa-mouse-pointer"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], [1, "perfil-background"], [1, "perfil-image"], ["perfilImage", ""], [1, "flip-card-back"], [1, "card-back-info"], ["href", "http://github.com/GabrielCunha6403", "target", "_blank", 1, "btn-github"], [1, "fab", "fa-github"], ["href", "https://www.linkedin.com/in/jo%C3%A3o-gabriel-cunha-jata%C3%AD-582791189/", "target", "_blank", 1, "btn-linkedin"], [1, "fab", "fa-linkedin"], ["href", "https://wa.link/90k0vk", "target", "_blank", 1, "btn-whatsapp"], [1, "fab", "fa-whatsapp"], ["href", "../../../assets/docs/curr\u00EDculo.pdf", "target", "_blank", 1, "btn-download"], [1, "fas", "fa-download"], [1, "col-xl-6", "d-flex", "px-0"], [1, "info-section"], [1, "body-column"], [1, "body-content"], [1, "body-container"], [1, "line-divider"], [1, "row"], ["class", "col-lg-6", 3, "project", "click", 4, "ngFor", "ngForOf"], [3, "data"], [1, "col-lg-4", "skill-column"], [1, "skills-content"], [4, "ngFor", "ngForOf"], [3, "visible", "project", "close"], [1, "col-lg-6", 3, "project", "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Passe o mouse!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Bem-vindo(a) ao meu portf\u00F3lio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Meu nome \u00E9 Jo\u00E3o Gabriel, mais conhecido como Jata\u00ED, e atuo como Desenvolvedor Web. Este espa\u00E7o \u00E9 dedicado \u00E0 apresenta\u00E7\u00E3o de minha trajet\u00F3ria profissional, projetos desenvolvidos e tecnologias que domino. Adicionalmente, disponibilizo meios para contato direto, convidando-o(a) a enviar feedbacks, que s\u00E3o de grande valia para o aprimoramento cont\u00EDnuo do meu trabalho. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Agrade\u00E7o por dedicar tempo \u00E0 visita do meu portf\u00F3lio. Por favor, sinta-se \u00E0 vontade para salvar meus dados de contato, caso deseje deixar uma mensagem futuramente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Projetos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HomeComponent_app_card_39_Template, 1, 1, "app-card", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Linha do tempo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-timeline", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Compet\u00EAncias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Programa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, HomeComponent_li_57_Template, 2, 1, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Desenvolvimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HomeComponent_li_62_Template, 2, 1, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Outros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HomeComponent_li_67_Template, 2, 1, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "app-modal", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function HomeComponent_Template_app_modal_close_68_listener($event) { return ctx.closeModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.timeline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.programming);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.development);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.others);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.isModalVisible)("project", ctx.projectView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"]], styles: [".perfil-image[_ngcontent-%COMP%] {\r\n  background-image: url('perfil.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 356px;\r\n  width: 356px;\r\n  border-radius: 50%;\r\n}\r\n.flip-card[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  perspective: 1000px;\r\n}\r\n.flip-card-inner[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  top: 380px;\r\n  left: -10px;\r\n  width: 100%;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n}\r\n.flip-card-inner[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: transform 0.8s;\r\n  transform-style: preserve-3d;\r\n  animation: flipCard 2s cubic-bezier(0.3, 0, 0, 1);\r\n}\r\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\r\n  transform: rotateY(180deg);\r\n}\r\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-back[_ngcontent-%COMP%] {\r\n  transition-delay: .2s;\r\n  box-shadow: 0 0 10px 4px var(--colorPrimary), 0 0 10px 6px var(--colorPrimary), 0 0 10px 8px var(--colorPrimary);\r\n}\r\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backface-visibility: hidden;\r\n  transition: .3s;\r\n}\r\n.flip-card-front[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #bbb;\r\n  color: black;\r\n}\r\n.flip-card-back[_ngcontent-%COMP%] {\r\n  background: rgba(0, 0, 0, 0.3);\r\n  -webkit-backdrop-filter: blur(10px);\r\n          backdrop-filter: blur(10px);\r\n  color: white;\r\n  height: 356px;\r\n  width: 356px;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  transform: rotateY(180deg);\r\n}\r\n.flip-card-area[_ngcontent-%COMP%] {\r\n  height: 28rem;\r\n}\r\n.card-back-info[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.card-back-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n  color: var(--colorPrimary);\r\n  margin: 0 12px;\r\n}\r\n.btn-github[_ngcontent-%COMP%]:hover, .btn-linkedin[_ngcontent-%COMP%]:hover, .btn-whatsapp[_ngcontent-%COMP%]:hover, .btn-download[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  color: white !important;\r\n  text-shadow: 0 0 10px white;\r\n}\r\n.btn-github[_ngcontent-%COMP%]::before {\r\n  background-image: none;\r\n}\r\n.btn-github[_ngcontent-%COMP%]:hover::before, .btn-linkedin[_ngcontent-%COMP%]:hover::before, .btn-whatsapp[_ngcontent-%COMP%]:hover::before, .btn-download[_ngcontent-%COMP%]:hover::before {\r\n  transition: .2s;\r\n  content: '';\r\n  position: absolute;\r\n  pointer-events: none;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  filter: blur(8px) brightness(40%);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  animation: fadeIn .4s;\r\n  z-index: -1;\r\n}\r\n.btn-github[_ngcontent-%COMP%]:hover::before {\r\n  background-image: url('github-icon.jpg');\r\n}\r\n.btn-linkedin[_ngcontent-%COMP%]:hover::before {\r\n  background-image: url('linkedin-icon.png');\r\n}\r\n.btn-whatsapp[_ngcontent-%COMP%]:hover::before {\r\n  background-image: url('whatsapp-icon.png');\r\n}\r\n.btn-download[_ngcontent-%COMP%]:hover::before {\r\n  background-image: url('download-icon.png');\r\n}\r\n.body-column[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  -webkit-backdrop-filter: blur(10px);\r\n          backdrop-filter: blur(10px);\r\n  margin: 0 12%;\r\n  padding: 16px 24px;\r\n}\r\n.body-content[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  margin-bottom: 3rem;\r\n}\r\n.body-container[_ngcontent-%COMP%] {\r\n  font-family: Consolas;\r\n}\r\n.body-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: #fff;\r\n  margin: 0;\r\n  width: 100%;\r\n  padding: 12px 0;\r\n  \r\n}\r\n.line-divider[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 2px;\r\n  margin-bottom: 12px;\r\n  background: linear-gradient(45deg, var(--colorSecondary), var(--colorPrimary));\r\n}\r\n.section-row[_ngcontent-%COMP%] {\r\n  padding: 36px 12%;\r\n  margin-bottom: 64px;\r\n  display: flex;\r\n  font-family: Consolas;\r\n}\r\n.info-section[_ngcontent-%COMP%] {\r\n  -webkit-backdrop-filter: blur(10px) brightness(50%);\r\n          backdrop-filter: blur(10px) brightness(50%);\r\n  width: max-content;\r\n  padding: 12px 36px;\r\n  border-left: 6px solid var(--colorSecondary);\r\n  border-radius: 8px;\r\n}\r\n.info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 36px;\r\n  padding-bottom: 24px;\r\n  color: var(--colorSecondary);\r\n}\r\n.info-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: var(--colorPrimary);\r\n  font-weight: 500;\r\n}\r\n.mouse-message[_ngcontent-%COMP%] {\r\n  color: var(--colorPrimary);\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 12px 0;\r\n}\r\n.mouse-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  animation: hovering .5s ease-in-out infinite;\r\n}\r\n.skill-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: var(--colorPrimary);\r\n  padding: 12px 0;\r\n  border-bottom: 1px solid var(--colorSecondary);\r\n}\r\n.skill-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  padding-left: 24px;\r\n}\r\n.skill-column[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  color: var(--colorPrimary);\r\n}\r\n.skill-column[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\r\n  color: var(--colorSecondary);\r\n}\r\n@keyframes fadeIn {\r\n  0% { opacity: 0; }\r\n  100% { opacity: 1; }\r\n}\r\n@keyframes flipCard {\r\n  from {\r\n    transform: rotateY(0deg);\r\n  }\r\n  to {\r\n    transform: rotateY(360deg);\r\n  }\r\n}\r\n@keyframes hovering {\r\n  0% {\r\n    transform:\r\n    translateX(0)\r\n    translatey(0);\r\n  }\r\n  50% {\r\n    transform:\r\n    translateX(4px)\r\n    translatey(2px);\r\n  }\r\n  100% {\r\n    transform:\r\n    translateX(0)\r\n    translatey(0);\r\n  }\r\n}\r\n@media (max-width: 728px) {\r\n  .body-column[_ngcontent-%COMP%] {\r\n    margin: 8px;\r\n  }\r\n  .section-row[_ngcontent-%COMP%] {\r\n    padding: 36px 8px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBc0Q7RUFDdEQsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0hBQWdIO0FBQ2xIO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFFWiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCO0FBQ0E7Ozs7RUFJRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7Ozs7RUFJRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUFpQztFQUNqQywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBQ0E7RUFDRSx3Q0FBMkQ7QUFDN0Q7QUFDQTtFQUNFLDBDQUE2RDtBQUMvRDtBQUNBO0VBQ0UsMENBQTZEO0FBQy9EO0FBQ0E7RUFDRSwwQ0FBNkQ7QUFDL0Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLG9EQUFvRDtBQUN0RDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDhFQUE4RTtBQUNoRjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxtREFBMkM7VUFBM0MsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsT0FBTyxVQUFVLEVBQUU7QUFDckI7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjtBQUNBO0VBQ0U7SUFDRTs7aUJBRWE7RUFDZjtFQUNBO0lBQ0U7O21CQUVlO0VBQ2pCO0VBQ0E7SUFDRTs7aUJBRWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXJmaWwtaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9wZXJmaWwuanBnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMzU2cHg7XHJcbiAgd2lkdGg6IDM1NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uZmxpcC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcbi5mbGlwLWNhcmQtaW5uZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICB0b3A6IDM4MHB4O1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIGFuaW1hdGlvbjogZmxpcENhcmQgMnMgY3ViaWMtYmV6aWVyKDAuMywgMCwgMCwgMSk7XHJcbn1cclxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtYmFjayB7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogLjJzO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDRweCB2YXIoLS1jb2xvclByaW1hcnkpLCAwIDAgMTBweCA2cHggdmFyKC0tY29sb3JQcmltYXJ5KSwgMCAwIDEwcHggOHB4IHZhcigtLWNvbG9yUHJpbWFyeSk7XHJcbn1cclxuLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuLmZsaXAtY2FyZC1mcm9udCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uZmxpcC1jYXJkLWJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMzU2cHg7XHJcbiAgd2lkdGg6IDM1NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbi5mbGlwLWNhcmQtYXJlYSB7XHJcbiAgaGVpZ2h0OiAyOHJlbTtcclxufVxyXG4uY2FyZC1iYWNrLWluZm8ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jYXJkLWJhY2staW5mbyBhIHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yUHJpbWFyeSk7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbn1cclxuLmJ0bi1naXRodWI6aG92ZXIsXHJcbi5idG4tbGlua2VkaW46aG92ZXIsXHJcbi5idG4td2hhdHNhcHA6aG92ZXIsXHJcbi5idG4tZG93bmxvYWQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggd2hpdGU7XHJcbn1cclxuLmJ0bi1naXRodWI6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4uYnRuLWdpdGh1Yjpob3Zlcjo6YmVmb3JlLFxyXG4uYnRuLWxpbmtlZGluOmhvdmVyOjpiZWZvcmUsXHJcbi5idG4td2hhdHNhcHA6aG92ZXI6OmJlZm9yZSxcclxuLmJ0bi1kb3dubG9hZDpob3Zlcjo6YmVmb3JlIHtcclxuICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmaWx0ZXI6IGJsdXIoOHB4KSBicmlnaHRuZXNzKDQwJSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBhbmltYXRpb246IGZhZGVJbiAuNHM7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuLmJ0bi1naXRodWI6aG92ZXI6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2dpdGh1Yi1pY29uLmpwZyk7XHJcbn1cclxuLmJ0bi1saW5rZWRpbjpob3Zlcjo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvbGlua2VkaW4taWNvbi5wbmcpO1xyXG59XHJcbi5idG4td2hhdHNhcHA6aG92ZXI6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3doYXRzYXBwLWljb24ucG5nKTtcclxufVxyXG4uYnRuLWRvd25sb2FkOmhvdmVyOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9kb3dubG9hZC1pY29uLnBuZyk7XHJcbn1cclxuLmJvZHktY29sdW1uIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBtYXJnaW46IDAgMTIlO1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxufVxyXG4uYm9keS1jb250ZW50IHtcclxuICAvKiBwYWRkaW5nOiAwIDEyJTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcbi5ib2R5LWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzO1xyXG59XHJcbi5ib2R5LWNvbnRhaW5lciBoMiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMDtcclxuICAvKiBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3JTZWNvbmRhcnkpOyAqL1xyXG59XHJcbi5saW5lLWRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWNvbG9yU2Vjb25kYXJ5KSwgdmFyKC0tY29sb3JQcmltYXJ5KSk7XHJcbn1cclxuLnNlY3Rpb24tcm93IHtcclxuICBwYWRkaW5nOiAzNnB4IDEyJTtcclxuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzO1xyXG59XHJcbi5pbmZvLXNlY3Rpb24ge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBicmlnaHRuZXNzKDUwJSk7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDEycHggMzZweDtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLWNvbG9yU2Vjb25kYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLmluZm8tc2VjdGlvbiBoMiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvclNlY29uZGFyeSk7XHJcbn1cclxuLmluZm8tc2VjdGlvbiBsYWJlbCB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yUHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubW91c2UtbWVzc2FnZSB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yUHJpbWFyeSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTJweCAwO1xyXG59XHJcbi5tb3VzZS1tZXNzYWdlIGkge1xyXG4gIGFuaW1hdGlvbjogaG92ZXJpbmcgLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcbi5za2lsbC1jb2x1bW4gaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcclxuICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yU2Vjb25kYXJ5KTtcclxufVxyXG4uc2tpbGwtY29sdW1uIHVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuLnNraWxsLWNvbHVtbiBsaSB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yUHJpbWFyeSk7XHJcbn1cclxuLnNraWxsLWNvbHVtbiBsaTo6bWFya2VyIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3JTZWNvbmRhcnkpO1xyXG59XHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7IG9wYWNpdHk6IDA7IH1cclxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmxpcENhcmQge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBob3ZlcmluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOlxyXG4gICAgdHJhbnNsYXRlWCgwKVxyXG4gICAgdHJhbnNsYXRleSgwKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTpcclxuICAgIHRyYW5zbGF0ZVgoNHB4KVxyXG4gICAgdHJhbnNsYXRleSgycHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTpcclxuICAgIHRyYW5zbGF0ZVgoMClcclxuICAgIHRyYW5zbGF0ZXkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzI4cHgpIHtcclxuICAuYm9keS1jb2x1bW4ge1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAzNnB4IDhweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, { perfilImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['perfilImage', { static: false }]
        }], isScrolledIntoView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "3YvT":
/*!***********************************!*\
  !*** ./src/assets/data/data.json ***!
  \***********************************/
/*! exports provided: projects, skills, timeline, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"projects\":[{\"title\":\"Dazaria\",\"topics\":[\"css\",\"html\",\"javascript\"],\"dsTopics\":[\"CSS\",\"HTML\",\"Javascript\",\"JQuery\",\"Bootstrap\"],\"description\":\"Site de uma loja de roupas utilizando JQuery e Bootstrap para o layout. Iniciativa de gerar uma renda extra a partir de uma marca de roupa onde eu realizaria vendas online (sem sistema de compra, somente redirecionamento para o Whatsapp).\",\"urls\":[{\"name\":\"Site\",\"url\":\"https://gabrielcunha6403.github.io/Dazaria/\"},{\"name\":\"Github\",\"url\":\"https://github.com/GabrielCunha6403/Dazaria\"}],\"urlImage\":\"../../../assets/imgs/dazaria-logo.png\",\"idProject\":1},{\"title\":\"O Povo CBN\",\"topics\":[\"css\",\"html\",\"javascript\"],\"dsTopics\":[\"CSS\",\"HTML\",\"Javascript\",\"JQuery\",\"Bootstrap\",\"PHP\"],\"description\":\"Landing Page do O Povo CBN onde fui aprendiz. Esta tela foi implementada inicialmente com vários protótipos de componentes utilizando somente HTML, CSS, Bootstrap e JQuery.\",\"urls\":[{\"name\":\"Site\",\"url\":\"https://cbn.opovo.com.br/\"}],\"urlImage\":\"../../../assets/imgs/opovo-cbn-logo.png\",\"idProject\":2},{\"title\":\"Portfolio\",\"topics\":[\"angular\",\"css\",\"html\",\"javascript\"],\"dsTopics\":[\"Angular 10\",\"Typescript\",\"Bootstrap\",\"Fontawesome\"],\"description\":\"Projeto onde tento exibir todo meu aprendizado e competências como Front-end (até 2023) utilizando Angular 10 e alguns serviços web. No momento, sem Back-end.\",\"urls\":[{\"name\":\"Github\",\"url\":\"https://github.com/GabrielCunha6403/portfolio\"}],\"urlImage\":\"../../../assets/imgs/perfil.jpg\",\"idProject\":2},{\"title\":\"Angular Safe Login\",\"topics\":[\"angular\",\"css\",\"html\",\"javascript\"],\"dsTopics\":[\"Angular 10\",\"Typescript\"],\"description\":\"Serviço de autenticação no Angular utilizando conceitos de Interceptor e Guard. Infelizmente, não foi concluído pois a tecnologia usada foi o Spring 3 que havia sido atualizado recentemente e não consegui encontrar fontes de pesquisas esclarecedoras para o Spring Security 3.\",\"urls\":[{\"name\":\"Github\",\"url\":\"https://github.com/GabrielCunha6403/Angular_SafeLogin\"}],\"urlImage\":\"../../../assets/imgs/safe-login-logo.png\",\"idProject\":2},{\"title\":\"Memoteca Angular\",\"topics\":[\"angular\",\"css\",\"html\",\"javascript\"],\"dsTopics\":[\"Angular 10\",\"Typescript\"],\"description\":\"Treinamento de Angular 10 para aperfeiçoar minha competência nesta tecnologia, visto que utilizaria em um projeto que fui intimado a participar na época.\",\"urls\":[{\"name\":\"Github\",\"url\":\"https://github.com/GabrielCunha6403/Memoteca_Angular\"}],\"urlImage\":\"../../../assets/imgs/memoteca.png\",\"idProject\":2},{\"title\":\"Coffee Control Quarkus\",\"topics\":[\"java\",\"docker\"],\"dsTopics\":[\"Quarkus\",\"Docker\",\"MyBatis\"],\"description\":\"CRUD de um sistema de controle de café, mais um projeto de treinamento utilizando tecnologias de Back-end.\",\"urls\":[{\"name\":\"Github\",\"url\":\"https://github.com/GabrielCunha6403/CoffeeControl_Quarkus\"}],\"urlImage\":\"../../../assets/imgs/coffee-control.png\",\"idProject\":2},{\"title\":\"Coffee Control Spring-Boot\",\"topics\":[\"java\",\"docker\",\"spring\"],\"dsTopics\":[\"Spring-Boot\",\"Docker\",\"MyBatis\"],\"description\":\"CRUD de um sistema de controle de café, mais um projeto de treinamento utilizando tecnologias de Back-end.\",\"urls\":[{\"name\":\"Github\",\"url\":\"https://github.com/GabrielCunha6403/CoffeeControl_SpringBoot\"}],\"urlImage\":\"../../../assets/imgs/coffee-control.png\",\"idProject\":2},{\"title\":\"JPA Hibernate\",\"topics\":[\"java\",\"spring\",\"docker\"],\"dsTopics\":[\"Spring-Boot\",\"Docker\",\"JPA\",\"PostgreSQL\",\"Hibernate\"],\"description\":\"CRUD de produtos de uma loja afim de aperfeiçoar técnicas de persistências de dados utilizando as determinadas tecnologias.\",\"urls\":[{\"name\":\"Github\",\"url\":\"https://github.com/GabrielCunha6403/JPA_Hibernate_treinamento\"}],\"urlImage\":\"../../../assets/imgs/programming.jpg\",\"idProject\":2},{\"title\":\"Árvore de Huffman\",\"topics\":[\"java\"],\"dsTopics\":[\"Java\"],\"description\":\"Trabalho da faculdade da disciplina de Estrutura de Dados. O trabalho consiste em criptografar e decriptografar arquivos .txt utilizando a metodologia da árvore de Huffman, onde as informações do .txt serão transformadas em uma sequência binária baseada em uma árvore previamente gerada a partir do conteúdo. O sistema também faz o procedimento contrário (decriptografar).\",\"urls\":[{\"name\":\"Github\",\"url\":\"https://github.com/GabrielCunha6403/ArvoreDeHuffman\"}],\"urlImage\":\"../../../assets/imgs/huffman.png\",\"idProject\":2}],\"skills\":{\"programming\":[{\"name\":\"JavaScript\",\"urlImage\":\"\"},{\"name\":\"TypeScript\",\"urlImage\":\"\"},{\"name\":\"Java\",\"urlImage\":\"\"},{\"name\":\"SQL\",\"urlImage\":\"\"},{\"name\":\"Python\",\"urlImage\":\"\"}],\"development\":[{\"name\":\"Angular\",\"urlImage\":\"\"},{\"name\":\"Vue\",\"urlImage\":\"\"},{\"name\":\"React\",\"urlImage\":\"\"},{\"name\":\"Spring Boot\",\"urlImage\":\"\"},{\"name\":\"Quarkus\",\"urlImage\":\"\"},{\"name\":\"JQuery\",\"urlImage\":\"\"},{\"name\":\"NodeJS\",\"urlImage\":\"\"},{\"name\":\"Bootstrap\",\"urlImage\":\"\"},{\"name\":\"Docker\",\"urlImage\":\"\"}],\"others\":[{\"name\":\"SCRUM\",\"urlImage\":\"\"},{\"name\":\"Kanban\",\"urlImage\":\"\"},{\"name\":\"Inglês avançado\",\"urlImage\":\"\"},{\"name\":\"Lógica de programação\",\"urlImage\":\"\"}]},\"timeline\":[{\"date\":\"Jun/2020\",\"title\":\"Bolsa FEQ UX/UI\",\"description\":\"Recebi uma bolsa da Fundação Edson Queiroz após um teste aplicado pelo meu professor da disciplina de IHC (Interação Humano-Computador) onde tive meu primeiro contato com a metodologia ágil SCRUM. Durante o processo participei de reuniões diárias, realizava o preenchimento de atas onde elencava os tópicos importantes da reunião e em alguns momentos utilizei a ferramenta Figma para a prototipação do sistema requerido pelo cliente. No final do tempo de contrato da bolsa, tive meu primeiro contato com o Angular, porém, não me restou tempo para usá-lo no projeto.\",\"topics\":[\"SCRUM\",\"Angular\",\"Figma\"]},{\"date\":\"Fev/2021\",\"title\":\"Instrutor de informática\",\"description\":\"Estágio em uma escola técnica (Sigma Home School) onde atuei como intrutor de informática realizando o preenchimento de planilhas, manutenção de computadores (hardware e software) e dando o suporte para alunos da escola (auxílio no plataforma e apresentações online da apostila)\",\"topics\":[\"Manutenção de computadores\"]},{\"date\":\"Jun/2021\",\"title\":\"Aprendiz de Front-end\",\"description\":\"Programa de Jovem Aprendiz voltado para desenvolvimento na parte de Front-end onde desenvolvi minha forte competência com HTML, CSS, Bootstrap e um pouco de JQuery. Neste período de pandemia, trabalhei remotamente no desenvolvimento de telas e componentes prototipados e responsivos.\",\"topics\":[\"HTML\",\"CSS\",\"Bootstrap\",\"JQuery\",\"Front-end\"]},{\"date\":\"Out/2022\",\"title\":\"Estagiário Full-Stack\",\"description\":\"Início da minha carreira na UNIFOR (Universidade de Fortaleza) onde minha curva de aprendizado se desenvolveu bastante. No período de aprendizado, obtive treinamento nas tecnologias: Angular, Spring-boot, Quarkus, MyBatis, Panache, JPA, Hibernate e Docker. Com essas tecnologias, eu apliquei em alguns projetos afim de solidificar o aprendizado e ingressar em um projeto da casa. O projeto em que ingressei utiliza Angular 10 e Spring-boot e é utilizado o SCRUM.\",\"topics\":[\"Angular\",\"Springboot\",\"Quarkus\",\"MyBatis\",\"Docker\",\"Panache\",\"JPA\",\"Hibernate\"]},{\"date\":\"Mar/2023\",\"title\":\"Trainee Full-Stack\",\"description\":\"Após 5 meses de estagiário, fui promovido para Trainee. Assim que fui admitido, ingressei num segundo projeto utilizando Vue e Spring-boot. Em determinado tempo do projeto, surgiu-se a necessidade de criar outra versão do mesmo utilizando Quarkus, o que foi bastante desafiador pois nessa fase do projeto a demanda do cliente estava bem criteriosa e não podia haver erros. Durante esse período, solidifiquei meu conhecimento nessas tecnologias e me tornei um profissional mais capacitado recebendo demandas importantes, determinando prazos com mais precisão e orquestrando minhas atividades com mais responsabilidade.\",\"topics\":[\"Angular\",\"Springboot\",\"Quarkus\",\"MyBatis\",\"Docker\",\"Hibernate\"]},{\"date\":\"Jan/2024\",\"title\":\"Desenvolvedor Júnior\",\"description\":\"No meu atual cargo, sou Desenvolvedor Júnior onde já possuo maior domínio das minhas skills. Sigo ainda no meu primeiro projeto, porém, com atividades de maiores prioridades e complexidades. A tecnologia do projeto não mudou até então, porém, vem sendo notório que há sempre o que aprender dentro de uma mesma tecnologia, o que torna os desafios do projeto imprevisíveis mas interessantes. Todavia, tenho confiança de que tal requisito será cumprido pelo fato de prezarmos muito pela qualidade pois neste projeto utilizamos boas práticas em seu desenvolvimento.\",\"topics\":[\"Angular\",\"Springboot\",\"MyBatis\",\"Boas práticas\"]}]}");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");






class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "1LmZ");





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map