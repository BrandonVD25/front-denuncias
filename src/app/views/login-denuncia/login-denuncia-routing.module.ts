import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDenunciaPage } from './login-denuncia.page';

const routes: Routes = [
  {
    path: '',
    component: LoginDenunciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginDenunciaPageRoutingModule {}
