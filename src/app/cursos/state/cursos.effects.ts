import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as CursosActions from './cursos.actions';
import { concatMap, map } from 'rxjs/operators';
import { Curso } from '../../models/curso.model';
import { CursoService } from 'src/app/core/services/curso.service';


@Injectable()
export class CursosEffects {
  constructor(
    private actions$: Actions,
    private cursos: CursoService,
  ) {}

  cargarCursos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.cargarCursos),
      concatMap(() => this.cursos.obtenerCursos().pipe(
        map((c: Curso[]) => CursosActions.cursosCargados({ cursos: c }))
      ))
    )
  });

  agregarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.crearCurso),
      concatMap(({curso}) => this.cursos.agregarCurso(curso).pipe(
        map((x) => CursosActions.cargarCursos()))
    ));
  });

  editarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.editarCurso),
      concatMap(({curso}) => this.cursos.editarCurso(curso).pipe(
        map((c: Curso) => CursosActions.cargarCursos()))
    ));
  });

  eliminarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.eliminarCurso),
      concatMap(({curso}) => this.cursos.eliminarCurso(curso.id).pipe(
        map((c: Curso) => CursosActions.cargarCursos()))
    ));
  });

}
