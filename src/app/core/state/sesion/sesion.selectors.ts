import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSesion from './sesion.reducer';
import { Sesion } from 'src/app/models/sesion.model';

export const selectSesionState = createFeatureSelector<Sesion>(
  fromSesion.sesionFeatureKey
);

export const selectUsuarioActivo = createSelector(
  selectSesionState,
  (state) => state.usuarioActivo
)

export const selectSesionActiva = createSelector(
  selectSesionState,
  (state) => state.sesionActiva
)
