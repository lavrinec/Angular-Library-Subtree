import { NgModule } from '@angular/core';
import { ElementLibComponent } from './element-lib.component';
import { createCustomElement } from '@angular/elements';
import * as i0 from "@angular/core";
export class ElementLibModule {
    constructor(injector) {
        this.injector = injector;
        const customElement = createCustomElement(ElementLibComponent, { injector });
        customElements.define('element-component', customElement);
    }
}
ElementLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: ElementLibModule });
ElementLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ElementLibModule_Factory(t) { return new (t || ElementLibModule)(i0.ɵɵinject(i0.Injector)); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ElementLibModule, { declarations: [ElementLibComponent], exports: [ElementLibComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ElementLibModule, [{
        type: NgModule,
        args: [{
                declarations: [ElementLibComponent],
                imports: [],
                exports: [ElementLibComponent]
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2VsZW1lbnQtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbGVtZW50LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFVeEQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3BDLE1BQU0sYUFBYSxHQUFHLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3RSxjQUFjLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzVELENBQUM7O29EQUpVLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLDBDQUpsQixFQUNSO3dGQUdVLGdCQUFnQixtQkFMWixtQkFBbUIsYUFHeEIsbUJBQW1CO2tEQUVsQixnQkFBZ0I7Y0FONUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsRUFDUjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWxlbWVudExpYkNvbXBvbmVudCB9IGZyb20gJy4vZWxlbWVudC1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtFbGVtZW50TGliQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbRWxlbWVudExpYkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRWxlbWVudExpYk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgY3VzdG9tRWxlbWVudCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoRWxlbWVudExpYkNvbXBvbmVudCwgeyBpbmplY3RvciB9KTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2VsZW1lbnQtY29tcG9uZW50JywgY3VzdG9tRWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==