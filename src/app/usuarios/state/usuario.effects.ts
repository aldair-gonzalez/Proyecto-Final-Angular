import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import * as UsuarioActions from './usuario.actions';
import { UsuarioService } from '../../core/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';


@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuarios: UsuarioService,
  ) {}

  cargarUsuarios$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuarioActions.cargarUsuarios),
      concatMap(() => this.usuarios.obtenerUsuarios().pipe(
        map((usuarios: Usuario[]) => UsuarioActions.usuariosCargados({usuarios}))
      ))
    );
  });

  crearUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuarioActions.crearUsuario),
      concatMap(({usuario}) => this.usuarios.crearUsuario(usuario).pipe(
        map((u: Usuario) => UsuarioActions.cargarUsuarios())
      ))
    );
  });

  editarUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuarioActions.editarUsuario),
      concatMap(({usuario}) => this.usuarios.editarUsuario(usuario).pipe(
        map((u: Usuario) => UsuarioActions.cargarUsuarios())
      ))
    );
  });

  eliminarUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuarioActions.eliminarUsuario),
      concatMap(({usuario}) => this.usuarios.eliminarUsuario(usuario.id).pipe(
        map((u: Usuario) => UsuarioActions.cargarUsuarios())
      ))
    );
  });
}
