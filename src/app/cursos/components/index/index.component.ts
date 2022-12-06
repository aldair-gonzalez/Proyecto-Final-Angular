import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CursoState } from '../../../models/curso.state.model';
import { cargarCursos } from '../../state/cursos.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private store: Store<CursoState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(cargarCursos());
  }

}
