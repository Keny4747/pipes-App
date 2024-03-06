import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* PrimeNg */
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';



@NgModule({
  declarations: [],
  imports: [
    CommonModule

  ],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
