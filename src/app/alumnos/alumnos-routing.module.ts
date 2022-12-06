import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { DetailAlumnoComponent } from './components/detail-alumno/detail-alumno.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: '', component: TablaAlumnosComponent},
    {path: ':id', component: DetailAlumnoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
