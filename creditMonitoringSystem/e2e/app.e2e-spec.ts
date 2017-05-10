import { CreditMonitoringSystemPage } from './app.po';

describe('credit-monitoring-system App', function() {
  let page: CreditMonitoringSystemPage;

  beforeEach(() => {
    page = new CreditMonitoringSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('CMS works!');
  });
});
