import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {


  //118nSelecto
  nombre: string = 'Keny';
  genero: string = 'masculino';


  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18Plural
  clientes : string [] = ['Maria','Pedro','Juan','Hernando'];

  clientesMapa ={
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando',
  }


  cambiarCliente(){
    this.nombre = 'Alexandra';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }
}
