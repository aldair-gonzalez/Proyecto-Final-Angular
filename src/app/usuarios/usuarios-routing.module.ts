import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: '', component: TablaUsuariosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
