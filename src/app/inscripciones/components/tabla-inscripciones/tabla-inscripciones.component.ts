import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Curso } from '../../../models/curso.model';
import { selectInscripciones } from '../../state/inscripciones.selectors';
import { selectCursosCargando } from '../../../cursos/state/cursos.selectors';

@Component({
  selector: 'app-tabla-inscripciones',
  templateUrl: './tabla-inscripciones.component.html',
  styleUrls: ['./tabla-inscripciones.component.scss']
})
export class TablaInscripcionesComponent implements OnInit, OnDestroy {
  cargando$!: Observable<boolean>;
  dataSource!: MatTableDataSource<Curso>;
  suscripcionCursos!: Subscription;

  columnas: string[] = [
    'nombre',
    'comienza',
    'termina',
    'profesor',
  ];

  constructor(
    private storeCursos: Store<Curso[]>,
  ) { }

  ngOnInit(): void {
    this.suscripcionCursos = this.storeCursos.select(selectInscripciones).subscribe((inscripciones: Curso[]) => {
      this.dataSource = new MatTableDataSource<Curso>(inscripciones);
    });
    this.cargando$ = this.storeCursos.select(selectCursosCargando)
  }

  ngOnDestroy(): void {
    if(this.suscripcionCursos) {
      this.suscripcionCursos.unsubscribe();
    }
  }
}
