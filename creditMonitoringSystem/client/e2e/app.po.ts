import { browser, element, by } from 'protractor';

export class CreditMonitoringSystemPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('CMS-root h1')).getText();
  }
}
