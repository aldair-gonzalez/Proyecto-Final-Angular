import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../../models/usuario.model';

export const cargarSesion = createAction(
  '[Sesion] Cargar Sesion',
  props<{ usuario: any }>()
);

export const sesionCargada = createAction(
  '[Sesion] Sesion Cargada',
  props<{ usuario: Usuario }>()
);

export const errorSesionCargada = createAction(
  '[Sesion] Error al cargar la Sesion',
  props<{ error: any }>()
);
