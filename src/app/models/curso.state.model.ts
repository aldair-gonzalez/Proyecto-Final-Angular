import { Curso } from "./curso.model";

export interface CursoState {
  cargando: boolean;
  cursos: Curso[];
}
