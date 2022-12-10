import { Usuario } from './usuario.model';
export interface Curso {
  id: string;
  curso: string;
  comision: string;
  profesor: string;
  f_inicio: Date;
  f_fin: Date;
  inscripcionAbierta: boolean;
  alumnos: Usuario[];
}
