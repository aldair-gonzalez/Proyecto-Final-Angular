import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { SesionGuard } from './core/guards/sesion/sesion.guard';
import { AdminGuard } from './core/guards/admin/admin.guard';

const routes: Routes = [
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule),
    canActivate: [SesionGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [SesionGuard]
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
    canActivate: [SesionGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
    canActivate: [SesionGuard, AdminGuard]
  },
  {
    path: 'sesion',
    loadChildren: () => import('./sesion/sesion.module').then((m) => m.SesionModule)
  },
  {path: '', redirectTo: 'cursos', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
