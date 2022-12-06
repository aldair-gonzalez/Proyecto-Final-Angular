import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Curso } from 'src/app/models/curso.model';
import { selectCursos, selectCursosCargando } from '../../state/cursos.selectors';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.scss']
})
export class TablaCursosComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Curso>;
  cargando$!: Observable<boolean>;
  suscripcionCursos!: Subscription;

  columnas: string[] = [
    'nombre',
    'comienza',
    'termina',
    'profesor',
  ];

  constructor(
    private storeCursos: Store<Curso[]>,
  ) {}

  ngOnInit(): void {
    this.suscripcionCursos = this.storeCursos.select(selectCursos).subscribe((cursos: Curso[]) => {
      this.dataSource = new MatTableDataSource<Curso>(cursos);
    });
    this.cargando$ = this.storeCursos.select(selectCursosCargando);
  }

  ngOnDestroy(): void {
    if(this.suscripcionCursos){
      this.suscripcionCursos.unsubscribe();
    }
  }

}
