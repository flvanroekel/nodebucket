/*
========================================
  ; Title: home.component.spec.ts
  ; Author: Faye Van Roekel
  ; Date: 10 March 2020
  ; Description: home.component.spec.ts
=========================================
*/
import { async, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
describe('LoginComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=home.component.spec.js.map