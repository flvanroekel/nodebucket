/*===============================================
; Title:          app.routing.ts
; Author:         Professor R. Krasso
; Modified by:    Faye Van Roekel
; Date:           15 March 2020
; Description:    App.routing.ts
;==============================================*/
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
export const AppRoutes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            /*
              New components go here...
             */
            {
                path: "login",
                component: LoginComponent
            }
        ]
    }
];
//# sourceMappingURL=app.routing.js.map