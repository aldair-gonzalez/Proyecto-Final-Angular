import { createReducer, on } from '@ngrx/store';
import { CursoState } from 'src/app/models/curso.state.model';
import * as CursosActions from './cursos.actions';

export const cursosFeatureKey = 'cursos';

export const estadoInicial: CursoState = {
  cargando: false,
  cursos: [],
};

export const reducer = createReducer(
  estadoInicial,

  on(CursosActions.cargarCursos, state => {
    return {...state, cargando: true};
  }),
  on(CursosActions.cursosCargados, (state, { cursos }) => {
    return {...state, cargando: false, cursos}
  }),
  on(CursosActions.crearCurso, (state, { curso }) => state),
  on(CursosActions.editarCurso, (state, { curso }) => state),
  on(CursosActions.eliminarCurso, (state, { curso }) => state),
  on(CursosActions.cargandoCursosFailure, (state, action) => state),
);
