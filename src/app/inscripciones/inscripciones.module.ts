import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { IndexComponent } from './components/index/index.component';
import { TablaInscripcionesComponent } from './components/tabla-inscripciones/tabla-inscripciones.component';
import { InscripcionesEffects } from './state/inscripciones.effects';
import { inscripcionesFeatureKey, reducer } from './state/inscripciones.reducer';
import { CursoService } from '../core/services/curso.service';
import { SharedModule } from '../shared/shared.module';
import { DetailInscripcionesComponent } from './components/detail-inscripciones/detail-inscripciones.component';
import { AlumnoEffects } from '../core/state/alumno/alumno.effects';


@NgModule({
  declarations: [
    IndexComponent,
    TablaInscripcionesComponent,
    DetailInscripcionesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    InscripcionesRoutingModule,
    StoreModule.forFeature(inscripcionesFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionesEffects, AlumnoEffects]),
  ],
  providers: [CursoService]
})
export class InscripcionesModule { }
