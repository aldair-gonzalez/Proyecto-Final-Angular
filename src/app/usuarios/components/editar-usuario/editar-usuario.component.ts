import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioState } from '../../../models/usuario.state.model';
import { FormControl, FormGroup } from '@angular/forms';
import { editarUsuario } from '../../state/usuario.actions';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario,
    private storeUsuarios: Store<UsuarioState>,
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(this.usuario.nombre),
      usuario: new FormControl(this.usuario.usuario),
      contrasena: new FormControl(this.usuario.contrasena),
      permisos: new FormControl(this.usuario.admin),
    });
  }

  ngOnInit(): void {
  }

  editar() {
    const u: Usuario = {
      id: this.usuario.id,
      nombre: this.formulario.value.nombre,
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.permisos,
      email: this.usuario.email,
      id_cursos: this.usuario.id_cursos,
    }
    this.storeUsuarios.dispatch(editarUsuario({usuario: u}));
    this.dialogRef.close();
  }
  cerrar() {
    this.dialogRef.close();
  }

}
