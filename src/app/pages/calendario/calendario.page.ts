import { Component, OnInit } from '@angular/core';
import { FeriadoService } from '../../service/feriado.service';
import { DiasFeriados } from '../interfaces/interfaces';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  feriadosLegales: DiasFeriados[] = [];

  constructor(private feriadoService: FeriadoService) { }

  ngOnInit() {
    this.feriadoService.getTodosFeriados().subscribe(resp => {
      this.feriadosLegales.push(...resp.data);
    })
  }

}
