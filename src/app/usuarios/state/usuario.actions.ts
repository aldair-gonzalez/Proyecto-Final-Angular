import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuarios = createAction(
  '[Usuario] Cargar Usuarios'
);

export const usuariosCargados = createAction(
  '[Usuario] Usuarios cargados',
  props<{ usuarios: Usuario[] }>()
);

export const crearUsuario = createAction(
  '[Usuario] Crear Usuario',
  props<{ usuario: Usuario }>()
);

export const editarUsuario = createAction(
  '[Usuario] Editar Usuario',
  props<{ usuario: Usuario }>()
);

export const eliminarUsuario = createAction(
  '[Usuario] Eliminar Usuario',
  props<{ usuario: Usuario }>()
);

export const cargarUsuariosFailure = createAction(
  '[Usuario] Los usuarios no se cargaron',
  props<{ error: any }>()
);
