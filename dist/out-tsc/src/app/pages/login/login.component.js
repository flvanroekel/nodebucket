import { __decorate } from "tslib";
/*
========================================
  ; Title: login.component.ts
  ; Author: Faye4 Van Roekel
  ; Date: 10 March 2020
  ; Description: login.component.ts
=========================================
*/
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(private, router, cookieService, fb, http, snackBar) {
        this.cookieService = cookieService;
        this.fb = fb;
        this.http = http;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.form = this.fb.group({
            empId: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
        });
    }
    login() {
        const empId = this.form.controls['empId'].value;
        console.log(empId);
        this.http.get('/api/employees/' + empId).subscribe(res => {
            if (res) {
                this.cookieService.set('session_user', empId, 1);
                this.router.navigate(['/']);
            }
            else {
                this.snackBar.open('the employee ID you entered is invalid, please try again.', 'ERROR', {
                    duration: 3000,
                    verticalPosition: 'top'
                });
            }
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map