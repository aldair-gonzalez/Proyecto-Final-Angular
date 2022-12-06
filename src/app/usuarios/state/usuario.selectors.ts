import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuario from './usuario.reducer';
import { UsuarioState } from '../../models/usuario.state.model';

export const selectUsuariosState = createFeatureSelector<UsuarioState>(
  fromUsuario.usuarioFeatureKey
);

export const selectUsuariosCargando = createSelector(
  selectUsuariosState,
  (state) => state.cargando
);
export const selectUsuarios = createSelector(
  selectUsuariosState,
  (state) => state.usuarios
);
