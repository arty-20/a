import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { LugarTutisticoComponent } from './lugar-tutistico/lugar-tutistico.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PaqueteTuristicoComponent } from './paquete-turistico/paquete-turistico.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path:'paquete',
    component: PaqueteTuristicoComponent
  },
  {
    path: 'cronograma',
    component: CronogramaComponent
  },
  {
    path: 'lugar',
    component: LugarTutisticoComponent
  },
  {
    path: 'categoria',
    component: CategoriaComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:  [ RouterModule]
})
export class AppRoutingModule { }
