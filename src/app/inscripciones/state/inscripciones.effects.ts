import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import * as InscripcionesActions from './inscripciones.actions';
import { CursoService } from '../../core/services/curso.service';
import { Curso } from 'src/app/models/curso.model';


@Injectable()
export class InscripcionesEffects {

  constructor(
    private actions$: Actions,
    private cursos: CursoService,
  ) { }

  cargarInscripciones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.cargarInscripciones),
      concatMap(() => this.cursos.obtenerInscripciones().pipe(
        map((cursos: Curso[]) => InscripcionesActions.inscripcionesCargadas({ cursos }))
      ))
    )
  });

  inscribirAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.inscribirAlumno),
      concatMap(({curso}) => this.cursos.editarCurso(curso).pipe(
        map((curso: Curso) => InscripcionesActions.cargarInscripciones())
      ))
    )
  });
}
