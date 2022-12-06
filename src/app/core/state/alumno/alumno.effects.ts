import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import * as AlumnoActions from './alumno.actions';
import { AlumnoService } from '../../services/alumno.service';
// import { agregarAlumno } from './alumno.actions';
import { Usuario } from '../../../models/usuario.model';


@Injectable()
export class AlumnoEffects {

  constructor(
    private actions$: Actions,
    private alumno: AlumnoService,
  ) {}

  cargarAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnoActions.cargarAlumnos),
      concatMap(() => this.alumno.obtenerAlumnos().pipe(
        map((alumnos: Usuario[]) => AlumnoActions.alumnosCargados({ alumnos }))
      ))
    );
  });

  editarAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnoActions.editarAlumno),
      concatMap(({alumno, idCurso}) => this.alumno.editarAlumno(alumno, idCurso).pipe(
        map((a: Usuario) => AlumnoActions.cargarAlumnos())
      ))
    );
  });

  eliminarAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnoActions.eliminarAlumno),
      concatMap(({alumno}) => this.alumno.eliminarAlumno(alumno).pipe(
        map((a: Usuario) => AlumnoActions.cargarAlumnos())
      ))
    );
  });

}
