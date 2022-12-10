import { createAction, props } from '@ngrx/store';

import { Usuario } from '../../../models/usuario.model';
import { Curso } from '../../../models/curso.model';

export const cargarAlumnos = createAction(
  '[Alumno] Cargar Alumnos'
);

export const alumnosCargados = createAction(
  '[Alumno] Alumnos Cargados',
  props<{ alumnos: Usuario[] }>()
);

export const editarAlumno = createAction(
  '[Alumno] Editar Alumno',
  props<{ alumno: Usuario, curso?: Curso }>()
);

export const eliminarAlumno = createAction(
    '[Alumno] Eliminar Alumno',
    props<{ alumno: Usuario }>()
);

export const errorCargarAlumnos = createAction(
  '[Alumno] Error al cargar los alumnos',
  props<{ error: any }>()
);
