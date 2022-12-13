import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDatosQr } from '../pages/interfaces/datos-qr';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IDatoQr } from '../pages/interfaces/dato-qr';

@Injectable({
  providedIn: 'root'
})
export class QRService {

  constructor(private Http: HttpClient) { }

  listarDatosQr():Observable<IDatosQr>{
    return this.Http.get<IDatosQr>(`${environment.apiURL}/qr`)
  }

  crearDatosQr(newQr:IDatoQr):Observable<IDatoQr>{
    return this.Http.post<IDatoQr>(`${environment.apiURL}/qr`,newQr)
  }

  getDatosQrById(id:Number):Observable<IDatosQr>{
    return this.Http.get<IDatosQr>(`${environment.apiURL}/qr/?id=${id}`)
  }


}
