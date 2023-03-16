import { Component, OnInit } from '@angular/core';
import listaAlarmas from '../../assets/json/alarmas.json';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  lstAlarmas: any=listaAlarmas;

  constructor() { }

  ngOnInit(): void {
  }

}
