export interface Usuario {
  id: string;
  nombre: string;
  usuario: string;
  contrasena: string;
  admin: boolean;
  email: string;
  id_cursos: string[];
}
