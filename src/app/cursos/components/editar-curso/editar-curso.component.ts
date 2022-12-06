import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Curso } from '../../../models/curso.model';
import { CursoState } from '../../../models/curso.state.model';
import { editarCurso } from '../../state/cursos.actions';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss']
})
export class EditarCursoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso,
    private storeCursos: Store<CursoState>,
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(this.curso.curso),
      comision: new FormControl(this.curso.comision),
      profesor: new FormControl(this.curso.profesor),
      f_inicio: new FormControl(this.curso.f_inicio),
      f_fin: new FormControl(this.curso.f_fin),
      inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),
    });
  }

  ngOnInit(): void {
  }

  editar() {
    const c: Curso = {
      id: this.curso.id,
      curso: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      f_inicio: this.formulario.value.f_inicio,
      f_fin: this.formulario.value.f_fin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      id_alumnos: this.curso.id_alumnos,
    }
    this.storeCursos.dispatch(editarCurso({curso: c}));
    this.dialogRef.close();
  }
  cerrar() {
    this.dialogRef.close();
  }

}
