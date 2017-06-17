import { PhoneDaddiesPage } from './app.po';

describe('phone-daddies App', () => {
  let page: PhoneDaddiesPage;

  beforeEach(() => {
    page = new PhoneDaddiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
