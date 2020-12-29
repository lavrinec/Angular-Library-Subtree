(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('element-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['element-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var ElementLibService = /** @class */ (function () {
        function ElementLibService() {
        }
        return ElementLibService;
    }());
    ElementLibService.ɵfac = function ElementLibService_Factory(t) { return new (t || ElementLibService)(); };
    ElementLibService.ɵprov = i0.ɵɵdefineInjectable({ token: ElementLibService, factory: ElementLibService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ElementLibService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var ElementLibComponent = /** @class */ (function () {
        function ElementLibComponent() {
            this.counter = 0;
        }
        ElementLibComponent.prototype.ngOnInit = function () {
        };
        return ElementLibComponent;
    }());
    ElementLibComponent.ɵfac = function ElementLibComponent_Factory(t) { return new (t || ElementLibComponent)(); };
    ElementLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ElementLibComponent, selectors: [["lib-element-lib"]], decls: 5, vars: 1, consts: [[3, "click"]], template: function ElementLibComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "p");
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "button", 0);
                i0.ɵɵlistener("click", function ElementLibComponent_Template_button_click_3_listener() { return ctx.counter = ctx.counter + 1; });
                i0.ɵɵtext(4, "Increase");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("element-lib works:: ", ctx.counter, "");
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ElementLibComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-element-lib',
                        template: "\n    <div>\n      <p>element-lib works:: {{ counter }}</p>\n      <button (click)=\"counter=counter+1\">Increase</button>\n    </div>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var ElementLibModule = /** @class */ (function () {
        function ElementLibModule() {
        }
        return ElementLibModule;
    }());
    ElementLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: ElementLibModule });
    ElementLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ElementLibModule_Factory(t) { return new (t || ElementLibModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ElementLibModule, { declarations: [ElementLibComponent], exports: [ElementLibComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ElementLibModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [ElementLibComponent],
                        imports: [],
                        exports: [ElementLibComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of element-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ElementLibComponent = ElementLibComponent;
    exports.ElementLibModule = ElementLibModule;
    exports.ElementLibService = ElementLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=element-lib.umd.js.map
