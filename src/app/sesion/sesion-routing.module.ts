import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: 'login', component: LoginComponent},

    {path: '', redirectTo: 'login', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SesionRoutingModule { }
