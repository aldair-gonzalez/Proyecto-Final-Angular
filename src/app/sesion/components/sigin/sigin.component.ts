import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { UsuarioState } from '../../../models/usuario.state.model';
import { crearUsuario } from '../../../usuarios/state/usuario.actions';
import { cargarSesion } from 'src/app/core/state/sesion/sesion.actions';
import { Sesion } from '../../../models/sesion.model';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private usuarioStore: Store<UsuarioState>,
    private sesionStore: Store<Sesion>,
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[A-z, 0-9]+@[a-z]+\\.[a-z]{2,3}$')]),
    })
  }

  ngOnInit(): void {
  }

  sigin() {
    let usuario: Usuario = {
      id:'',
      nombre: this.formulario.value.nombre,
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: false,
      email: this.formulario.value.email,
      id_cursos: [],
    }
    // this.sesionService.sigin(usuario);
    this.usuarioStore.dispatch(crearUsuario({usuario}))
    // alert('Cuenta creada');
    // this.sesionService.login(usuario);
    // this.sesionStore.dispatch(cargarSesion(usuario))
  }
}
