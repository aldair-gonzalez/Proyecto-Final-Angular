import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Usuario } from '../../../models/usuario.model';
import { selectUsuarios, selectUsuariosCargando } from '../../state/usuario.selectors';
import { eliminarUsuario } from '../../state/usuario.actions';
import { MatDialog } from '@angular/material/dialog';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Usuario>
  cargando$!: Observable<boolean>;
  suscripcionUsuarios!: Subscription;

  columnas: string[] = [
    'id',
    'nombre',
    'username',
    'email',
    'role',
    'acciones',
  ];

  constructor(
    private storeUsuarios: Store<Usuario[]>,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.suscripcionUsuarios = this.storeUsuarios.select(selectUsuarios).subscribe((usuarios: Usuario[]) => {
      this.dataSource = new MatTableDataSource<Usuario>(usuarios);
    })
    this.cargando$ = this.storeUsuarios.select(selectUsuariosCargando);
  }

  ngOnDestroy(): void {
    if(this.suscripcionUsuarios) {
      this.suscripcionUsuarios.unsubscribe();
    }
  }

  editar(usuario: Usuario) {
    this.dialog.open(EditarUsuarioComponent, {
      width: '100%',
      data: usuario
    })
  }

  eliminar(usuario: Usuario) {
    this.storeUsuarios.dispatch(eliminarUsuario({usuario}))
  }
}
