import { MultiSelctionPage } from './app.po';

describe('multi-selction App', function() {
  let page: MultiSelctionPage;

  beforeEach(() => {
    page = new MultiSelctionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
