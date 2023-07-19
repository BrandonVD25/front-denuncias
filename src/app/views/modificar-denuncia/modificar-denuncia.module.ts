import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarDenunciaPageRoutingModule } from './modificar-denuncia-routing.module';

import { ModificarDenunciaPage } from './modificar-denuncia.page';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarDenunciaPageRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers:[DenunciaService,UsuarioService],
  declarations: [ModificarDenunciaPage]
})
export class ModificarDenunciaPageModule {}
