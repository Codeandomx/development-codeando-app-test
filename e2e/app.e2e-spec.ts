import { DevelopmentCodeandoAppTestPage } from './app.po';

describe('development-codeando-app-test App', () => {
  let page: DevelopmentCodeandoAppTestPage;

  beforeEach(() => {
    page = new DevelopmentCodeandoAppTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
