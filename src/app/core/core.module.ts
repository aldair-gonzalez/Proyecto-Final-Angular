import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { reducer, sesionFeatureKey } from './state/sesion/sesion.reducer';
import { SesionEffects } from './state/sesion/sesion.effects';
import { AlumnoService } from './services/alumno.service';
import { CursoService } from './services/curso.service';

@NgModule({
  declarations: [
    PaginaNoEncontradaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    StoreModule.forFeature(sesionFeatureKey, reducer),
    EffectsModule.forFeature([SesionEffects]),
  ],
  providers: [AlumnoService, CursoService]
})
export class CoreModule { }
