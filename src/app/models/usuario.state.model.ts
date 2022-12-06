import { Usuario } from './usuario.model';

export interface UsuarioState {
  cargando: boolean;
  usuarios: Usuario[];
}
