import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDenunciaPageRoutingModule } from './form-denuncia-routing.module';

import { FormDenunciaPage } from './form-denuncia.page';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormDenunciaPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[DenunciaService],
  declarations: [FormDenunciaPage]
})
export class FormDenunciaPageModule {}
