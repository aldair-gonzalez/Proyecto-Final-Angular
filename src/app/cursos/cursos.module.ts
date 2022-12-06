import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CursosRoutingModule } from './cursos-routing.module';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { IndexComponent } from './components/index/index.component';
import { cursosFeatureKey, reducer } from './state/cursos.reducer';
import { SharedModule } from '../shared/shared.module';
import { CursosEffects } from './state/cursos.effects';
import { DetailCursoComponent } from './components/detail-curso/detail-curso.component';
import { CursoService } from '../core/services/curso.service';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { AlumnoEffects } from '../core/state/alumno/alumno.effects';


@NgModule({
  declarations: [
    IndexComponent,
    TablaCursosComponent,
    DetailCursoComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    CursosRoutingModule,
    StoreModule.forFeature(cursosFeatureKey, reducer),
    EffectsModule.forFeature([CursosEffects, AlumnoEffects]),
  ],
  providers: [CursoService],
})
export class CursosModule { }
