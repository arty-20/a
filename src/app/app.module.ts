import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { LugarTutisticoComponent } from './lugar-tutistico/lugar-tutistico.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { PaqueteTuristicoComponent } from './paquete-turistico/paquete-turistico.component';

import { TablaComponent } from './cronograma/tabla/tabla.component';
import { ContenidoComponent } from './cronograma/contenido/contenido.component';
import { AgregarCronogramaComponent } from './cronograma/agregar-cronograma/agregar-cronograma.component';

import { DatosComponent } from './lugar-tutistico/datos/datos.component';
import { TitulosComponent } from './lugar-tutistico/titulos/titulos.component';
import { AniadirLugarComponent } from './lugar-tutistico/aniadir-lugar/aniadir-lugar.component';

import { AniadirCategoriaComponent } from './categoria/aniadir-categoria/aniadir-categoria.component';
import { TablaCategoriaComponent } from './categoria/tabla-categoria/tabla-categoria.component';
import { ContenidoCategoriaComponent } from './categoria/contenido-categoria/contenido-categoria.component';
import { PaqueteComponent } from './paquete-turistico/paquete/paquete.component';
import { DatosPaqueteComponent } from './paquete-turistico/datos-paquete/datos-paquete.component';
import { AniadirPaqueteComponent } from './paquete-turistico/aniadir-paquete/aniadir-paquete.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioAgenciaComponent } from './inicio/inicio-agencia/inicio-agencia.component';

@NgModule({
  declarations: [
    AppComponent,
    LugarTutisticoComponent,
    CronogramaComponent,
    PaqueteTuristicoComponent,
    CategoriaComponent,

    TablaComponent,
    ContenidoComponent,
    AgregarCronogramaComponent,

    DatosComponent,
    TitulosComponent,
    AniadirLugarComponent,
    
    AniadirCategoriaComponent,
    TablaCategoriaComponent,
    ContenidoCategoriaComponent,
    PaqueteComponent,
    DatosPaqueteComponent,
    AniadirPaqueteComponent,
    InicioComponent,
    InicioAgenciaComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
