import { CreditTrackerPage } from './app.po';

describe('credit-tracker App', function() {
  let page: CreditTrackerPage;

  beforeEach(() => {
    page = new CreditTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
