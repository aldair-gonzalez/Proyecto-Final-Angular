import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { IndexComponent } from './components/index/index.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { UsuarioService } from '../core/services/usuario.service';
import { EffectsModule } from '@ngrx/effects';
import { UsuarioEffects } from './state/usuario.effects';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { usuarioFeatureKey, reducer } from './state/usuario.reducer';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';


@NgModule({
  declarations: [
    IndexComponent,
    TablaUsuariosComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    UsuariosRoutingModule,
    StoreModule.forFeature(usuarioFeatureKey, reducer),
    EffectsModule.forFeature([UsuarioEffects])
  ],
  providers: [UsuarioService]
})
export class UsuariosModule { }
