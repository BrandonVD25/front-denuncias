import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormDenunciaPage } from './form-denuncia.page';

const routes: Routes = [
  {
    path: '',
    component: FormDenunciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormDenunciaPageRoutingModule {}
