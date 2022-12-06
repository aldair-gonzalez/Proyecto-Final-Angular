import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Sesion } from '../../../models/sesion.model';
import { cargarSesion } from '../../../core/state/sesion/sesion.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private store: Store<Sesion>,
  ) {
    this.formulario = new FormGroup({
      email: new FormControl('Rasheed39@yahoo.com', [Validators.required, Validators.pattern('^[A-z, 0-9]+@[a-z]+\\.[a-z]{2,3}$')]),
      contrasena: new FormControl('12345', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  login() {
    if (!this.formulario.invalid) {
      let user = {
        email: this.formulario.value.email,
        contrasena: this.formulario.value.contrasena
      }
      this.store.dispatch(cargarSesion({usuario: user}))
    }
  }
}
