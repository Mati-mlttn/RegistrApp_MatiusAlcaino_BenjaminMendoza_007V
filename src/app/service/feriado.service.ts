import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FeriadoService {

  constructor(private httpclient: HttpClient) { }

  getTodosFeriados(){
    return (this.httpclient.get<RespuestaTopHeadlines>('https://api.victorsanmartin.com/feriados/en.json'));
  }
}
