import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoDenunciasPage } from './catalogo-denuncias.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogoDenunciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoDenunciasPageRoutingModule {}
