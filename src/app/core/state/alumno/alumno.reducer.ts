import { createReducer, on } from '@ngrx/store';
import * as AlumnoActions from './alumno.actions';
import { AlumnoState } from '../../../models/alumno.state';

export const alumnoFeatureKey = 'alumno';

export interface State {

}

export const estadoInicial: AlumnoState = {
  cargando: false,
  alumnos: [],
};

export const reducer = createReducer(
  estadoInicial,

  on(AlumnoActions.cargarAlumnos, state => {
    return {...state, cargando: true}
  }),
  on(AlumnoActions.alumnosCargados, (state, { alumnos }) => {
    return {...state, cargando: false, alumnos}
  }),
  on(AlumnoActions.editarAlumno, (state, action) => state),
  on(AlumnoActions.eliminarAlumno, (state, action) => state),
  on(AlumnoActions.errorCargarAlumnos, (state, action) => state),

);
