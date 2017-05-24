import { NgMatchingGameCliPage } from './app.po';

describe('ng-matching-game-cli App', () => {
  let page: NgMatchingGameCliPage;

  beforeEach(() => {
    page = new NgMatchingGameCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
