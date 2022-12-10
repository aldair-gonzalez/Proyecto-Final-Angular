import { Curso } from './curso.model';
export interface Usuario {
  id: string;
  nombre: string;
  usuario: string;
  contrasena: string;
  admin: boolean;
  email: string;
  cursos: Curso[];
}
