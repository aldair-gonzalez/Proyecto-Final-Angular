import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumno from './alumno.reducer';
import { AlumnoState } from '../../../models/alumno.state';

export const selectAlumnoState = createFeatureSelector<AlumnoState>(
  fromAlumno.alumnoFeatureKey
);

export const selectAlumnos = createSelector(
  selectAlumnoState,
  (state) => state.alumnos
)

export const selectAlumnosCargando = createSelector(
  selectAlumnoState,
  (state) => state.cargando
)
