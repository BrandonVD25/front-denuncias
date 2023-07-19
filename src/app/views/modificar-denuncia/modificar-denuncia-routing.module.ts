import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarDenunciaPage } from './modificar-denuncia.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarDenunciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarDenunciaPageRoutingModule {}
