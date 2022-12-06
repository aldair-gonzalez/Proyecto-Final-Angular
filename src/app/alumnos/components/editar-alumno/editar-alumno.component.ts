import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AlumnoState } from '../../../models/alumno.state';
import { editarAlumno } from '../../../core/state/alumno/alumno.actions';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})
export class EditarAlumnoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno: Usuario,
    private storeAlumnos: Store<AlumnoState>,
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(this.alumno.nombre),
      usuario: new FormControl(this.alumno.usuario),
    });
  }

  ngOnInit(): void {
  }

  editar() {
    const a: Usuario = {
      id: this.alumno.id,
      nombre: this.formulario.value.nombre,
      usuario: this.formulario.value.usuario,
      email: this.alumno.email,
      contrasena: this.alumno.contrasena,
      admin: this.alumno.admin,
      id_cursos: this.alumno.id_cursos,
    }
    this.storeAlumnos.dispatch(editarAlumno({alumno: a}));
    this.dialogRef.close();
  }
  cerrar() {
    this.dialogRef.close();
  }

}
