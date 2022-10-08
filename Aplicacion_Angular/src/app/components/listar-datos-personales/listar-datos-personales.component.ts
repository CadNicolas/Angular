import { Component, OnInit } from '@angular/core';
import {Datos} from 'src/app/interfaces/DatosPersonales';


@Component({
  selector: 'app-listar-datos-personales',
  templateUrl: './listar-datos-personales.component.html',
  styleUrls: ['./listar-datos-personales.component.css']
})
export class ListarDatosPersonalesComponent implements OnInit {

  listDatosPersonales: Datos [] =[
    {
      id:123366,
      nombre:'christian',
      apellido:'vidal',
      direccion:'kjdsajk',
      email:'kjsdh',
      telefono:222222
    },
    {
      id:123366,
      nombre:'camilo',
      apellido:'ortiz',
      direccion:'kjdsajk',
      email:'kjsdh',
      telefono:22222254
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
