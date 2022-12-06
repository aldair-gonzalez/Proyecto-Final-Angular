import { createReducer, on } from '@ngrx/store';
import * as InscripcionesActions from './inscripciones.actions';
import { CursoState } from '../../models/curso.state.model';

export const inscripcionesFeatureKey = 'inscripciones';

export const estadoInicial: CursoState = {
  cargando: false,
  cursos: [],
};

export const reducer = createReducer(
  estadoInicial,

  on(InscripcionesActions.cargarInscripciones, state => {
    return {...state, cargando: true}
  }),
  on(InscripcionesActions.inscripcionesCargadas, (state, { cursos }) => {
    return {...state, cargando: false, cursos}
  }),
  on(InscripcionesActions.inscribirAlumno, (state, { curso }) => state),
  on(InscripcionesActions.cargandoInscripcionesFailure, (state, action) => state),

);
