import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subscription, throwError } from 'rxjs';

import { Curso } from 'src/app/models/curso.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Usuario } from '../../models/usuario.model';

@Injectable()
export class CursoService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.api}/cursos`)
  }

  obtenerInscripciones(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.api}/cursos`).pipe(
      map((cursos: Curso[]) => {
        return cursos.filter((curso: Curso) => curso.inscripcionAbierta == true)
      })
    )
  }

  agregarCurso(curso: Curso){
    return this.http.post(`${environment.api}/cursos/`, curso)
  }

  editarCurso(curso: Curso){
    return this.http.put<Curso>(`${environment.api}/cursos/${curso.id}`, curso)
  }

  eliminarAlumnoCurso(curso: Curso){
    return this.http.put<Curso>(`${environment.api}/cursos`, curso)
  }

  eliminarCurso(id: string){
    return this.http.delete<Curso>(`${environment.api}/cursos/${id}`)
  }
}
