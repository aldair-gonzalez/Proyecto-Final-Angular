import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import * as SesionActions from './sesion.actions';
import { SesionService } from '../../services/sesion.service';


@Injectable()
export class SesionEffects {

  constructor(
    private actions$: Actions,
    private sesion: SesionService,
  ) {}

  cargarSesion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SesionActions.cargarSesion),
      concatMap(({usuario}) => this.sesion.login(usuario).pipe(
        map(data => SesionActions.sesionCargada({ usuario: data })),
      ))
    );
  });

}
