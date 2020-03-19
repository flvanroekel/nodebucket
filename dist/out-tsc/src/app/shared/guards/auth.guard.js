/**
 * Title: auth.guard.ts
 * Author: Professor Krasso
 * Modified by: Faye Van Roekel
 * Date: 12 March 2020
 * Description: Route guard for authenticated users
 */
import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let AuthGuard = class AuthGuard {
    constructor(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    canActivate(route, state) {
        const sessionUser = this.cookieService.get('session_user');
        // If the cookie is present, allow the user to access the app
        if (sessionUser) {
            return true;
        }
        else {
            // Otherwise, the user is not signed into the system and should be redirected to the sign-in component.
            this.router.navigate(['/session/login']);
            return false;
        }
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map