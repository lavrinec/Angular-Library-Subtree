import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class ElementLibComponent {
    constructor() {
        this.counter = 0;
    }
    ngOnInit() {
    }
}
ElementLibComponent.ɵfac = function ElementLibComponent_Factory(t) { return new (t || ElementLibComponent)(); };
ElementLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ElementLibComponent, selectors: [["lib-element-lib"]], decls: 5, vars: 1, consts: [[3, "click"]], template: function ElementLibComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "p");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵlistener("click", function ElementLibComponent_Template_button_click_3_listener() { return ctx.counter = ctx.counter + 1; });
        i0.ɵɵtext(4, "Increase");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("element-lib works:: ", ctx.counter, "");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ElementLibComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2VsZW1lbnQtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbGVtZW50LWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFhbEQsTUFBTSxPQUFPLG1CQUFtQjtJQUk5QjtRQUZBLFlBQU8sR0FBRyxDQUFDLENBQUM7SUFFSSxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztzRkFQVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQVI1QiwyQkFDRTtRQUFBLHlCQUFHO1FBQUEsWUFBaUM7UUFBQSxpQkFBSTtRQUN4QyxpQ0FBb0M7UUFBNUIsNEhBQXlCLENBQUMsSUFBQztRQUFDLHdCQUFRO1FBQUEsaUJBQVM7UUFDdkQsaUJBQU07O1FBRkQsZUFBaUM7UUFBakMsOERBQWlDOztrREFPN0IsbUJBQW1CO2NBWC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7O0dBS1Q7Z0JBQ0QsTUFBTSxFQUFFLEVBQ1A7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1lbGVtZW50LWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgIDxwPmVsZW1lbnQtbGliIHdvcmtzOjoge3sgY291bnRlciB9fTwvcD5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImNvdW50ZXI9Y291bnRlcisxXCI+SW5jcmVhc2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRWxlbWVudExpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY291bnRlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=