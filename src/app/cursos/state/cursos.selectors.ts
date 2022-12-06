import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursos from './cursos.reducer';
import { CursoState } from '../../models/curso.state.model';

export const selectCursosState = createFeatureSelector<CursoState>(
  fromCursos.cursosFeatureKey
);

export const selectCursosCargando = createSelector(
  selectCursosState,
  (state) => state.cargando
)

export const selectCursos = createSelector(
  selectCursosState,
  (state) => state.cursos
)
