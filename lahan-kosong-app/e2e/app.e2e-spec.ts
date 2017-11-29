import { LahanKosongAppPage } from './app.po';

describe('lahan-kosong-app App', () => {
  let page: LahanKosongAppPage;

  beforeEach(() => {
    page = new LahanKosongAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
