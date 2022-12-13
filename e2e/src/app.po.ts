import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }

  async getTitleText():Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  async getTitleTextH2():Promise<string> {
    return element(by.css('app-root h2')).getText();
  }

  async getTitlePar():Promise<string> {
    return element(by.css('app-root .par')).getText();
  }
}




