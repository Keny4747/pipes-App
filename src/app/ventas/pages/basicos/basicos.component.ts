import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower : string = 'keny';
  nombreUpper : string = 'KENY';
  nombreCompleto : string = 'kEnY pAu vAs';


  fecha: Date = new Date();//el día de hoy


}
