import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TablaInscripcionesComponent } from './components/tabla-inscripciones/tabla-inscripciones.component';
import { DetailInscripcionesComponent } from './components/detail-inscripciones/detail-inscripciones.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: '', component: TablaInscripcionesComponent},
    {path: ':id', component: DetailInscripcionesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
