import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripciones from './inscripciones.reducer';
import { CursoState } from '../../models/curso.state.model';

export const selectInscripcionesState = createFeatureSelector<CursoState>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selecInscripcionesCargando = createSelector(
  selectInscripcionesState,
  (state) => state.cargando
)

export const selectInscripciones = createSelector(
  selectInscripcionesState,
  (state) => state.cursos
)
