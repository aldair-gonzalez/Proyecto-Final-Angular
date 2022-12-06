import { createAction, props } from '@ngrx/store';
import { Curso } from '../../models/curso.model';

export const cargarInscripciones = createAction(
  '[Inscripciones] Cargando Inscripcioness'
);

export const inscripcionesCargadas = createAction(
  '[Inscripciones] Inscripciones cargadas',
  props<{ cursos: Curso[] }>()
);

export const inscribirAlumno = createAction(
  '[Inscripciones] Inscribir alumno',
  props<{ curso: Curso }>()
);

export const cargandoInscripcionesFailure = createAction(
  '[Inscripciones] Cargando Inscripcioness Failure',
  props<{ error: any }>()
);
