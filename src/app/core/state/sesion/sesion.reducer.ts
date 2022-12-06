import { createReducer, on } from '@ngrx/store';
import * as SesionActions from './sesion.actions';
import { Sesion } from 'src/app/models/sesion.model';

export const sesionFeatureKey = 'sesion';

export const estadoInicial: Sesion = {
  sesionActiva: false,
};

export const reducer = createReducer(
  estadoInicial,

  on(SesionActions.cargarSesion, state => {
    return {...state}
  }),
  on(SesionActions.sesionCargada, (state, { usuario }) => {
    if(usuario) {
      return {...state, sesionActiva: true, usuarioActivo: usuario}
    } else {
      return {...state}
    }
  }),
  on(SesionActions.errorSesionCargada, (state, action) => state),

);
