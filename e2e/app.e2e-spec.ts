import { MyAppEieiPage } from './app.po';

describe('my-app-eiei App', () => {
  let page: MyAppEieiPage;

  beforeEach(() => {
    page = new MyAppEieiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
