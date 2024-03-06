import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

/* Efecto burbuja al presionar botones */
  constructor(private primeNGConfig: PrimeNGConfig){}
  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }
  /*  Efecto burbuja al presionar botones  */
}
