import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarInscripciones } from '../../state/inscripciones.actions';
import { CursoState } from '../../../models/curso.state.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private storeCursos: Store<CursoState>,
  ) { }

  ngOnInit(): void {
    this.storeCursos.dispatch(cargarInscripciones())
  }

}
