import { createAction, props } from '@ngrx/store';
import { Curso } from '../../models/curso.model';

export const cargarCursos = createAction(
  '[Cursos] Cargar Cursos'
);

export const cursosCargados = createAction(
  '[Cursos] Cargando Cursos Success',
  props<{ cursos: Curso[] }>()
);

export const crearCurso = createAction(
  '[Cursos] Agregar curso',
  props<{ curso: Curso}>()
)

export const editarCurso = createAction(
  '[Cursos] Editar curso',
  props<{ curso: Curso }>()
)

export const eliminarCurso = createAction(
  '[Cursos] Eliminar curso',
  props<{ curso: Curso}>()
)

export const cargandoCursosFailure = createAction(
  '[Cursos] Cargando Cursos Failure',
  props<{ error: any }>()
);
