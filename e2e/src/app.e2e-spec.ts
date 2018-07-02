import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display dashboard title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Going Gone');
  });
});
