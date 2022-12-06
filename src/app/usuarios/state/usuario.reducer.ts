import { createReducer, on } from '@ngrx/store';
import * as UsuarioActions from './usuario.actions';
import { UsuarioState } from '../../models/usuario.state.model';

export const usuarioFeatureKey = 'usuario';

export const estadoInicial: UsuarioState = {
  cargando: false,
  usuarios: [],
};

export const reducer = createReducer(
  estadoInicial,

  on(UsuarioActions.cargarUsuarios, state => {
    return {...state, cargando: true}
  }),
  on(UsuarioActions.usuariosCargados, (state, { usuarios }) => {
    return {...state, cargando: false, usuarios}
  }),
  on(UsuarioActions.crearUsuario, (state, { usuario }) => state),
  on(UsuarioActions.editarUsuario, (state, { usuario }) => state),
  on(UsuarioActions.eliminarUsuario, (state, { usuario }) => state),
  on(UsuarioActions.cargarUsuariosFailure, (state, action) => state),

);
