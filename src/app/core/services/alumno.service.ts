import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CursoState } from '../../models/curso.state.model';
import { Usuario } from '../../models/usuario.model';
import { Curso } from '../../models/curso.model';

@Injectable()
export class AlumnoService {

  constructor(
    private http: HttpClient,
    private cursoStore: Store<CursoState>
  ) { }

  obtenerAlumnos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`).pipe(
      map((alumnos: Usuario[]) => alumnos.filter((a: Usuario) => a.cursos.length > 0))
    )
  }

  editarAlumno(alumno: Usuario, curso?: Curso): Observable<Usuario> {
    if(curso) {
      let newCurso = structuredClone(alumno);
      newCurso.cursos.push(curso);
      return this.http.put<Usuario>(`${environment.api}/usuarios/${alumno.id}`, newCurso)
    }

    return this.http.put<Usuario>(`${environment.api}/usuarios/${alumno.id}`, alumno)
  }

  eliminarAlumno(alumno: Usuario): Observable<Usuario> {
    let newAlumno = structuredClone(alumno);
    newAlumno.cursos = [];
    return this.http.put<Usuario>(`${environment.api}/usuarios/${alumno.id}`, newAlumno)
  }
}
