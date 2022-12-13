import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {

  qrCodeString= '';

  constructor() { }

  clase={
    secc:'',
    fecha:''
  }

  ngOnInit() {
  }

  generarQR(){
      this.qrCodeString= this.clase.secc + ' ' + this.clase.fecha;
  }
  
  

}
