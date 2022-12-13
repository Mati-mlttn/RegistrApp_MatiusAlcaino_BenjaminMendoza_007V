import { Component } from '@angular/core';
import { QRService } from '../../service/qr.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage {

  datosQr = []

  constructor(private qrService : QRService,
              private loadingController: LoadingController) { }

    ionViewWillEnter(){
      this.loadDatosQr()
    }

  async loadDatosQr(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingController.create({
      message: "Cargando...",
      spinner: "crescent"
    })
    await loading.present();

    this.qrService.listarDatosQr().subscribe(
      (resp)=>{
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.datosQr = JSON.parse(listString)
        event?.target.complete();
      },
      (error)=>{
        console.log(error.message)
        loading.dismiss();
      }
    )
  }




}
