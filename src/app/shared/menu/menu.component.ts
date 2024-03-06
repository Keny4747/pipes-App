import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{

  /* Menu item primeNG */
  items: MenuItem[] =[];


  ngOnInit(): void {

    /* Items del menu item PrimeNg */
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items:[
           {
            label:'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink:'/'
           },
           {
            label:'Nùmeros',
            icon: 'pi pi-dollar',
            routerLink:'numeros'
           },
           {
            label:'No comunes',
            icon: 'pi pi-globe',
            routerLink:'no-comunes'
           }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog'
      }
    ];
}
}

