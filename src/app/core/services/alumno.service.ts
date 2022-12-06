import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CursoState } from '../../models/curso.state.model';
import { Usuario } from '../../models/usuario.model';

@Injectable()
export class AlumnoService {

  constructor(
    private http: HttpClient,
    private cursoStore: Store<CursoState>
  ) { }

  obtenerAlumnos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`).pipe(
      map((alumnos: Usuario[]) => alumnos.filter((a: Usuario) => a.id_cursos.length > 0))
    )
  }

  editarAlumno(alumno: Usuario, idCurso?: string): Observable<Usuario> {
    if(idCurso) {
      let newCurso = structuredClone(alumno);
      newCurso.id_cursos.push(idCurso);
      return this.http.put<Usuario>(`${environment.api}/usuarios/${alumno.id}`, newCurso)
    }

    return this.http.put<Usuario>(`${environment.api}/usuarios/${alumno.id}`, alumno)
  }

  eliminarAlumno(alumno: Usuario): Observable<Usuario> {
    let newAlumno = structuredClone(alumno);
    newAlumno.id_cursos = [];
    return this.http.put<Usuario>(`${environment.api}/usuarios/${alumno.id}`, newAlumno)
  }
}
