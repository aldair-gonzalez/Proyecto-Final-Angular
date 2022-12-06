import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarAlumnos } from '../../../core/state/alumno/alumno.actions';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private store: Store<Usuario[]>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(cargarAlumnos())
  }

}
