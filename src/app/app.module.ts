import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


/* Modulos personalizados */
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Cambiar el locale de la app: funcion que sirve para cambiar el idioma para este caso español y frances*/
import localeEs from '@angular/common/locales/es-PE';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData}from '@angular/common'

registerLocaleData( localeEs );
registerLocaleData( localeFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,//modulo para animaciones PrimeNg
    SharedModule,
    AppRouterModule,
    VentasModule

  ],
  providers: [

    {provide: LOCALE_ID, useValue: 'es-PE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
