import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DenunciaClientePageRoutingModule } from './denuncia-cliente-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DenunciaClientePage } from './denuncia-cliente.page';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DenunciaClientePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[DenunciaService],
  declarations: [DenunciaClientePage]
})
export class DenunciaClientePageModule {}
