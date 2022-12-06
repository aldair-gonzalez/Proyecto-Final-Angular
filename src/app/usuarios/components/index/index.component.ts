import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuarioState } from '../../../models/usuario.state.model';
import { cargarUsuarios } from '../../state/usuario.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private store: Store<UsuarioState>
  ) {
    this.store.dispatch(cargarUsuarios())
  }

  ngOnInit(): void {
  }

}
