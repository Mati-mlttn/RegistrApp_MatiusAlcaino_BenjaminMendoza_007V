import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { QRService } from '../../service/qr.service';
import { IDatoQr } from '../interfaces/dato-qr';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //code: any;

  newQr: IDatoQr = {
    seccion:"",

  }

  constructor(private menuController: MenuController,
              private qrService: QRService,
              private barcodeScanner: BarcodeScanner,
              private alertController: AlertController) { }

  ngOnInit() {}

 

  mostrarMenu(){
    this.menuController.open('first');
  }

  //crearQr(){
  //  this.qrService.crearDatosQr(this.newQr).subscribe()
  //}

  escanearQr(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.newQr.seccion=barcodeData.text;
      console.log('Barcode data', this.newQr.seccion);
      this.qrService.crearDatosQr(this.newQr).subscribe();
      this.mensajeQr();
     }).catch(err => {
         console.log('Error', err);
     });
  }

  async mensajeQr(){
    const alert = await this.alertController.create({
      header: 'Todo OK',
      message: 'La asistencia se ha guardado correctamente',
      buttons: ['Continuar']
    });
    await alert.present();
  }
}
