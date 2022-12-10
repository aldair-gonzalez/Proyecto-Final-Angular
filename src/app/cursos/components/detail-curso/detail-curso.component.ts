import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { Curso } from 'src/app/models/curso.model';
import { eliminarCurso, editarCurso } from '../../state/cursos.actions';
import { selectCursos } from '../../state/cursos.selectors';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { CursoState } from '../../../models/curso.state.model';
import { Usuario } from '../../../models/usuario.model';
import { AlumnoState } from '../../../models/alumno.state';
import { selectAlumnos } from '../../../core/state/alumno/alumno.selectors';
import { editarAlumno } from '../../../core/state/alumno/alumno.actions';

@Component({
  selector: 'app-detail-curso',
  templateUrl: './detail-curso.component.html',
  styleUrls: ['./detail-curso.component.scss']
})
export class DetailCursoComponent implements OnInit, OnDestroy {
  curso!: Curso;
  curso$!: Observable<Curso[]>;
  dataSource!: MatTableDataSource<Usuario>;
  suscripcionCurso!: Subscription;

  columnas: string[] = [
    'nombre',
    'email',
    'acciones',
  ];

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<Curso>,
    private storeCursos: Store<CursoState>,
    private storeAlumnos: Store<AlumnoState>,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parametros.get('id') || '0';

      this.curso$ = this.store.select(selectCursos).pipe(
        map((cursos: Curso[]) => {
          return cursos.filter((curso: Curso) => curso.id === id)
        })
      )

      this.suscripcionCurso = this.curso$.subscribe((curso: Curso[]) => {
        this.curso = curso[0]
      })

      this.dataSource = new MatTableDataSource<Usuario>(this.curso.alumnos)
    });
  }

  ngOnDestroy(): void {
    if(this.suscripcionCurso) {
      this.suscripcionCurso.unsubscribe();
    }
  }

  updateCurso(curso: Curso) {
    this.dialog.open(EditarCursoComponent, {
      width: '100%',
      data: curso
    })
  }

  deleteCurso() {
    this.storeCursos.dispatch(eliminarCurso({curso: this.curso}));
    this.router.navigate(['/cursos']);
  }

  eliminarAlumno(alumno: Usuario) {
    let alumnoClone: Usuario = structuredClone(alumno);
    let cursoClone: Curso = structuredClone(this.curso);

    let alumnos: Usuario[] = structuredClone(cursoClone.alumnos)
    let positionAlumno = alumnos.indexOf(alumnoClone)

    alumnos.splice(positionAlumno, 1)
    cursoClone.alumnos = alumnos;
    this.storeAlumnos.dispatch(editarCurso({curso: cursoClone}))

    let cursos: Curso[] = structuredClone(alumnoClone.cursos)
    let positionCurso = cursos.indexOf(cursoClone)

    cursos.splice(positionAlumno, 1)
    alumnoClone.cursos = cursos;
    this.storeAlumnos.dispatch(editarAlumno({alumno: alumnoClone}))

    alert('Se des inscribio del curso')
    this.router.navigate(['/cursos'])
  }

}
