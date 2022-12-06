import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
  ) { }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`)
  }

  obtenerUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.api}/usuarios/${id}`)
  }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.api}/usuarios`, usuario)
  }

  editarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${environment.api}/usuarios/${usuario.id}`, usuario)
  }

  eliminarUsuario(id: string): Observable<Usuario> {
    return this.http.delete<Usuario>(`${environment.api}/usuarios/${id}`)
  }

  modificarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${environment.api}/usuarios/${usuario.id}`, usuario)
  }

}
