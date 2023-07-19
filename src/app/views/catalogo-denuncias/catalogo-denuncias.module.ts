import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoDenunciasPageRoutingModule } from './catalogo-denuncias-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogoDenunciasPage } from './catalogo-denuncias.page';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoDenunciasPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[DenunciaService,UsuarioService],
  declarations: [CatalogoDenunciasPage]
})
export class CatalogoDenunciasPageModule {}
