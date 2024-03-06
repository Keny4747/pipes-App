import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {


  //Sección 118nSelecto
  nombre: string = 'Keny';
  genero: string = 'masculino';


  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  cambiarCliente(){
    this.nombre = 'Alexandra';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

    //Fin 118nSelecto

  //i18Plural
  clientes : string [] = ['Maria','Pedro','Juan','Hernando'];

  clientesMapa ={
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Keny',
    edad: '22',
    direccion: 'ottawa, Canada'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  //Async Pipe
  miObservable = interval(1000); //va emitir valores numericos desde: 0, 1, 2, 3...

  valorPromesa = new Promise((resolve, reject) =>{

      setTimeout(() => {
        resolve('Tenemos data de la promesa')
      }, 5000);
  });

}
