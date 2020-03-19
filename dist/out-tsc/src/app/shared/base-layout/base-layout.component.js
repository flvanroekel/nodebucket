import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BaseLayoutComponent = class BaseLayoutComponent {
    constructor() {
        this.year = Date.now();
    }
    ngOnInit() {
    }
};
BaseLayoutComponent = __decorate([
    Component({
        selector: 'app-base-layout',
        templateUrl: './base-layout.component.html',
        styleUrls: ['./base-layout.component.css']
    })
], BaseLayoutComponent);
export { BaseLayoutComponent };
//# sourceMappingURL=base-layout.component.js.map