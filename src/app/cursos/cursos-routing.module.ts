import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { DetailCursoComponent } from './components/detail-curso/detail-curso.component';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: '', component: TablaCursosComponent},
    {path: 'create', component: AgregarCursoComponent},
    {path: ':id', component: DetailCursoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
