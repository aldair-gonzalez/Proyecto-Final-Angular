import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion.model';
import { Store } from '@ngrx/store';
import { selectUsuarioActivo } from '../../state/sesion/sesion.selectors';



@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private sesion: Store<Sesion>
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesion.select(selectUsuarioActivo).pipe(
      map((sesion) => {
        if(sesion?.admin) {
          return true
        } else {
          alert('No tienes permiso para acceder a este sitio');
          this.router.navigate(['']);
          return false;
        }
      })
    );
  }

}
