import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './components/index/index.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { DetailAlumnoComponent } from './components/detail-alumno/detail-alumno.component';
import { StoreModule } from '@ngrx/store';
import { alumnoFeatureKey, reducer } from '../core/state/alumno/alumno.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlumnoEffects } from '../core/state/alumno/alumno.effects';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';


@NgModule({
  declarations: [
    IndexComponent,
    TablaAlumnosComponent,
    DetailAlumnoComponent,
    EditarAlumnoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    AlumnosRoutingModule,
    StoreModule.forFeature(alumnoFeatureKey, reducer),
    EffectsModule.forFeature([AlumnoEffects])
  ],
})
export class AlumnosModule { }
