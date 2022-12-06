import { Usuario } from './usuario.model';

export interface AlumnoState {
  cargando: boolean;
  alumnos: Usuario[];
}
