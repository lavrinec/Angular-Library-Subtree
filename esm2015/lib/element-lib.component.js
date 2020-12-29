import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ElementLibComponent {
    constructor() {
        this.someString = '';
        this.counter = 0;
    }
    ngOnInit() {
    }
}
ElementLibComponent.ɵfac = function ElementLibComponent_Factory(t) { return new (t || ElementLibComponent)(); };
ElementLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ElementLibComponent, selectors: [["lib-element-lib"]], inputs: { someString: "someString" }, decls: 5, vars: 2, consts: [[3, "click"]], template: function ElementLibComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtextInterpolate2("element works:: ", ctx.someString, " ", ctx.counter, "");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ElementLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-element-lib',
                template: `
    <div>
      <p>element works:: {{ someString }} {{ counter }}</p>
      <button (click)="counter=counter+1">Increase</button>
    </div>
  `,
                styles: []
            }]
    }], function () { return []; }, { someString: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2VsZW1lbnQtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbGVtZW50LWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBYXpELE1BQU0sT0FBTyxtQkFBbUI7SUFLOUI7UUFIUyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBRyxDQUFDLENBQUM7SUFFSSxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztzRkFSVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQVI1QiwyQkFDRTtRQUFBLHlCQUFHO1FBQUEsWUFBOEM7UUFBQSxpQkFBSTtRQUNyRCxpQ0FBb0M7UUFBNUIsNEhBQXlCLENBQUMsSUFBQztRQUFDLHdCQUFRO1FBQUEsaUJBQVM7UUFDdkQsaUJBQU07O1FBRkQsZUFBOEM7UUFBOUMsK0VBQThDOztrREFPMUMsbUJBQW1CO2NBWC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7O0dBS1Q7Z0JBQ0QsTUFBTSxFQUFFLEVBQ1A7YUFDRjtzQ0FHVSxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1lbGVtZW50LWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgIDxwPmVsZW1lbnQgd29ya3M6OiB7eyBzb21lU3RyaW5nIH19IHt7IGNvdW50ZXIgfX08L3A+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJjb3VudGVyPWNvdW50ZXIrMVwiPkluY3JlYXNlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEVsZW1lbnRMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNvbWVTdHJpbmcgPSAnJztcbiAgY291bnRlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=