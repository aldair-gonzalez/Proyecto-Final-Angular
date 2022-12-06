import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion.model';
import { selectUsuarioActivo, selectSesionActiva } from '../../state/sesion/sesion.selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  panelOpenState: boolean = false;
  sesion$!: Observable<boolean>;
  admin!: boolean | undefined;
  usuario!: string | undefined;

  constructor(
    private store: Store<Sesion>
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.store.select(selectSesionActiva);
    this.store.select(selectUsuarioActivo).subscribe(u => {
      this.admin = u?.admin
      this.usuario = u?.usuario
    });
  }
}
