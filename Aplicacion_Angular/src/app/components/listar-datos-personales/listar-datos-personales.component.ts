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
      id:123455,
      nombre:'Nicolas',
      apellido:'Cadena',
      direccion:'Ipiales',
      email:'nicolascad...',
      telefono:3171234
    },
    {
      id:123456,
      nombre:'Bramdo',
      apellido:'Vallejo',
      direccion:'',
      email:'nicolas...',
      telefono:31712345
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
