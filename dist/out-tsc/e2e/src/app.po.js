/*
=======================================
  ; Title: app.po.ts
  ; Author: Faye Van Roekel
  ; Date: 10 March 2020
  ; Description: app.po.ts
========================================
*/
import { browser, by, element } from 'protractor';
export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl);
    }
    getTitleText() {
        return element(by.css('app-root h1')).getText();
    }
}
//# sourceMappingURL=app.po.js.map