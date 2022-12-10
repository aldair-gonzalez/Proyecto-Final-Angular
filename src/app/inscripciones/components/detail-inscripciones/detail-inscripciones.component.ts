import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';

import { Curso } from 'src/app/models/curso.model';
import { selectInscripciones } from '../../state/inscripciones.selectors';
import { Sesion } from '../../../models/sesion.model';
import { selectUsuarioActivo } from '../../../core/state/sesion/sesion.selectors';
import { UsuarioState } from '../../../models/usuario.state.model';
import { editarAlumno } from '../../../core/state/alumno/alumno.actions';
import { CursoState } from '../../../models/curso.state.model';
import { editarCurso } from '../../../cursos/state/cursos.actions';

@Component({
  selector: 'app-detail-inscripciones',
  templateUrl: './detail-inscripciones.component.html',
  styleUrls: ['./detail-inscripciones.component.scss']
})
export class DetailInscripcionesComponent implements OnInit, OnDestroy {
  curso!: Curso;
  curso$!: Observable<Curso[]>;
  suscripcionCurso!: Subscription;

  columnas: string[] = [
    'nombre',
    'email',
    'acciones',
  ];

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<Curso>,
    private storeSesion: Store<Sesion>,
    private alumnoStore: Store<UsuarioState>,
    private cursoStore: Store<CursoState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let id = params.get('id') || '0';

      this.curso$ = this.store.select(selectInscripciones).pipe(
        map((cursos: Curso[]) => {
          return cursos.filter((curso: Curso) => curso.id === id)
        })
      )
      this.suscripcionCurso = this.curso$.subscribe((curso: Curso[]) => this.curso = curso[0])
    })
  }

  ngOnDestroy(): void {
    if(this.suscripcionCurso) {
      this.suscripcionCurso.unsubscribe();
    }
  }

  inscribir() {
    this.storeSesion.select(selectUsuarioActivo).subscribe((u) => {
      if(u) {
        let newCurso: Curso = structuredClone(this.curso);
        newCurso.alumnos.push(u)
        this.alumnoStore.dispatch(editarAlumno({alumno: u, curso: this.curso}))
        this.cursoStore.dispatch(editarCurso({curso: newCurso}))
        alert('Se ha inscrito')
        this.router.navigate(['inscripciones'])
      }
    })
  }

}
