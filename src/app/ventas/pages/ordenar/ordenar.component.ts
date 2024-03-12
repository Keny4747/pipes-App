import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/venta.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {

  enMayuscula:boolean= false;
  heroes:Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },

    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Super Woman',
      vuela: true,
      color: Color.azul
    },

  ];

  ordenarValor:string='';

  cambiarEstadoMayuscula(){
      this.enMayuscula=true;
  }

  ordenarTabla(valor:string){
    this.ordenarValor = valor;
  }
}
