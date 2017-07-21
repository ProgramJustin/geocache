import { GeocachePage } from './app.po';

describe('geocache App', () => {
  let page: GeocachePage;

  beforeEach(() => {
    page = new GeocachePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
