import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlumnoState } from '../../../models/alumno.state';
import { selectAlumnos, selectAlumnosCargando } from '../../../core/state/alumno/alumno.selectors';
import { Observable, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.scss']
})
export class TablaAlumnosComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Usuario>;
  cargando$!: Observable<boolean>;
  suscripcionAlumnos!: Subscription;

  columnas: string[] = [
    'id',
    'nombre',
    'usuario',
    'email',
  ]

  constructor(
    private alumnoStore: Store<AlumnoState>
  ) { }

  ngOnInit(): void {
    this.suscripcionAlumnos = this.alumnoStore.select(selectAlumnos).subscribe((alumnos: Usuario[]) => {
      this.dataSource = new MatTableDataSource<Usuario>(alumnos)
    })
    this.cargando$ = this.alumnoStore.select(selectAlumnosCargando);
  }

  ngOnDestroy(): void {
    if(this.suscripcionAlumnos) {
      this.suscripcionAlumnos.unsubscribe();
    }
  }

}
