import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DenunciaClientePage } from './denuncia-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: DenunciaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DenunciaClientePageRoutingModule {}
