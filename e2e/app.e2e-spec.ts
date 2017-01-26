import { AngularAppTrialPage } from './app.po';

describe('angular-app-trial App', function() {
  let page: AngularAppTrialPage;

  beforeEach(() => {
    page = new AngularAppTrialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
