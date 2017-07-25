import { AngularYarnPage } from './app.po';

describe('angular-yarn App', () => {
  let page: AngularYarnPage;

  beforeEach(() => {
    page = new AngularYarnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
