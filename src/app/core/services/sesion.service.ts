import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Sesion } from 'src/app/models/sesion.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(
    private http: HttpClient,
    private sesion: Store<Sesion>,
    private router: Router
  ) { }

  login({ email, contrasena}: any): Observable<Usuario | any> {
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        this.router.navigate([''])
        return usuarios.find((u: Usuario) => email == u.email && contrasena == u.contrasena);
      })
    )
  }
}
