import { Usuario } from "./usuario.model";

export interface Sesion {
  sesionActiva: boolean;
  usuarioActivo?: Usuario;
}
