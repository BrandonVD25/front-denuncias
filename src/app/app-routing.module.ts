import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path: ' ',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'catalogo-denuncias',
    loadChildren: () => import('./views/catalogo-denuncias/catalogo-denuncias.module').then( m => m.CatalogoDenunciasPageModule)
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./views/login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'login-denuncia',
    loadChildren: () => import('./views/login-denuncia/login-denuncia.module').then( m => m.LoginDenunciaPageModule)
  },
  {
    path: 'denuncia-cliente',
    loadChildren: () => import('./views/denuncia-cliente/denuncia-cliente.module').then( m => m.DenunciaClientePageModule)
  },
  {
    path: 'form-denuncia',
    loadChildren: () => import('./views/form-denuncia/form-denuncia.module').then( m => m.FormDenunciaPageModule)
  },
  {
    path: 'modificar-denuncia',
    loadChildren: () => import('./views/modificar-denuncia/modificar-denuncia.module').then( m => m.ModificarDenunciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
