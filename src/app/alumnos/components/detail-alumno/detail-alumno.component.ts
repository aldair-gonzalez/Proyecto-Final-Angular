import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { Curso } from '../../../models/curso.model';
import { AlumnoState } from '../../../models/alumno.state';
import { MatDialog } from '@angular/material/dialog';
import { selectAlumnos } from '../../../core/state/alumno/alumno.selectors';
import { eliminarAlumno, editarAlumno } from '../../../core/state/alumno/alumno.actions';
import { EditarAlumnoComponent } from '../editar-alumno/editar-alumno.component';
import { Usuario } from '../../../models/usuario.model';
import { CursoState } from '../../../models/curso.state.model';
import { selectCursos } from '../../../cursos/state/cursos.selectors';
import { editarCurso } from '../../../cursos/state/cursos.actions';

@Component({
  selector: 'app-detail-alumno',
  templateUrl: './detail-alumno.component.html',
  styleUrls: ['./detail-alumno.component.scss']
})
export class DetailAlumnoComponent implements OnInit, OnDestroy {
  alumno!: Usuario;
  alumno$!: Observable<Usuario[]>;
  dataSource!: MatTableDataSource<Curso>;
  suscripcionAlumno!: Subscription;

  columnas: string[] = [
    'nombre',
    'comienza',
    'termina',
    'profesor',
    'acciones'
  ];

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<Usuario>,
    private storeAlumnos: Store<AlumnoState>,
    private cursoStore: Store<CursoState>,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parametros.get('id') || '0';

      this.alumno$ = this.store.select(selectAlumnos).pipe(
        map((alumnos: Usuario[]) => {
          return alumnos.filter((alumno: Usuario) => alumno.id === id)
        })
      )

      this.suscripcionAlumno = this.alumno$.subscribe((alumno: Usuario[]) => {
        this.alumno = alumno[0]
      })

      this.cursoStore.select(selectCursos).subscribe((curso) => {
        let cursosInscrito = curso.filter((c: Curso) => this.alumno.id_cursos.find((id) => id == c.id))
        this.dataSource = new MatTableDataSource<Curso>(cursosInscrito)
      })
    });
  }

  ngOnDestroy(): void {
    if(this.suscripcionAlumno){
      this.suscripcionAlumno.unsubscribe();
    }
  }

  updateAlumno() {
    this.dialog.open(EditarAlumnoComponent, {
      width: '100%',
      data: this.alumno
    })
  }

  desInscribir(curso: Curso) {
    let cursoClone: Curso = structuredClone(curso);
    let alumnoClone: Usuario = structuredClone(this.alumno);

    let idCursos: string[] = structuredClone(alumnoClone.id_cursos)
    let positionCurso = idCursos.indexOf(cursoClone.id)

    idCursos.splice(positionCurso, 1)
    alumnoClone.id_cursos = idCursos;
    this.storeAlumnos.dispatch(editarAlumno({alumno: alumnoClone}))

    let idAlumnos: string[] = structuredClone(cursoClone.id_alumnos)
    let positionAlumno = idAlumnos.indexOf(alumnoClone.id)

    idAlumnos.splice(positionAlumno, 1)
    cursoClone.id_alumnos = idAlumnos;
    this.cursoStore.dispatch(editarCurso({curso: cursoClone}))

    alert('Se des inscribio del curso')
    this.router.navigate(['/alumnos'])
  }

  deleteAlumno() {
    this.storeAlumnos.dispatch(eliminarAlumno({alumno: this.alumno}))
    alert('Alumno eliminado');
    this.router.navigate(['alumnos']);
  }

}
