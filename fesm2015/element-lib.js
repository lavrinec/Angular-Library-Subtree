import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class ElementLibService {
    constructor() { }
}
ElementLibService.ɵfac = function ElementLibService_Factory(t) { return new (t || ElementLibService)(); };
ElementLibService.ɵprov = ɵɵdefineInjectable({ token: ElementLibService, factory: ElementLibService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ElementLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ElementLibComponent {
    constructor() {
        this.counter = 0;
    }
    ngOnInit() {
    }
}
ElementLibComponent.ɵfac = function ElementLibComponent_Factory(t) { return new (t || ElementLibComponent)(); };
ElementLibComponent.ɵcmp = ɵɵdefineComponent({ type: ElementLibComponent, selectors: [["lib-element-lib"]], decls: 5, vars: 1, consts: [[3, "click"]], template: function ElementLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "p");
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 0);
        ɵɵlistener("click", function ElementLibComponent_Template_button_click_3_listener() { return ctx.counter = ctx.counter + 1; });
        ɵɵtext(4, "Increase");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate1("element-lib works:: ", ctx.counter, "");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ElementLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-element-lib',
                template: `
    <div>
      <p>element-lib works:: {{ counter }}</p>
      <button (click)="counter=counter+1">Increase</button>
    </div>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class ElementLibModule {
}
ElementLibModule.ɵmod = ɵɵdefineNgModule({ type: ElementLibModule });
ElementLibModule.ɵinj = ɵɵdefineInjector({ factory: function ElementLibModule_Factory(t) { return new (t || ElementLibModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ElementLibModule, { declarations: [ElementLibComponent], exports: [ElementLibComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ElementLibModule, [{
        type: NgModule,
        args: [{
                declarations: [ElementLibComponent],
                imports: [],
                exports: [ElementLibComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of element-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ElementLibComponent, ElementLibModule, ElementLibService };
//# sourceMappingURL=element-lib.js.map