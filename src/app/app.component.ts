import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'person-outline',
      name: 'Perfil',
      redirecTo: '/perfil'
    }, 
    {
      icon: 'time-outline',
      name: 'Historial',
      redirecTo: '/historial'
    },
    {
      icon: 'calendar-number-outline',
      name: 'Calendario',
      redirecTo: '/calendario'
    },
    {
      icon: 'information-circle-outline',
      name: 'Informacion',
      redirecTo: '/about'
    },
  ];
  

}
