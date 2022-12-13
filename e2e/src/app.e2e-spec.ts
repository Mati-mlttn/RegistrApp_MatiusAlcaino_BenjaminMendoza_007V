import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Testeos', () => {
  let page: AppPage;

  
  beforeEach(() => {
    page = new AppPage();
    browser.get("/");

  });

  
  it('Test 1', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('BIENVENIDO');
  });

  it('Test 2',  () => {
    page.navigateTo();
    expect( page.getTitlePar()).toContain('Registra tu asistencia rapido y facil.');
  });


  it('Test 3', () => {
     page.navigateTo();
     expect( page.getTitlePar()).toContain('Iniciar Sesion');
   });

  it('Test 4', () => {
    page.navigateTo();
     expect(page.getParagraphText()).toContain('Registro');
   });

   it('Test 5', () => {
    page.navigateTo();
     expect(page.getParagraphText()).toContain('Si no tienes cuenta registrate! 👇');
   });


  });

