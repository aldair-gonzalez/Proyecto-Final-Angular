import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesionRoutingModule } from './sesion-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { SiginComponent } from './components/sigin/sigin.component';


@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    SiginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    SesionRoutingModule,
  ]
})
export class SesionModule { }
