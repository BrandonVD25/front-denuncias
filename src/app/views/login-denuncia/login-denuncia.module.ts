import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginDenunciaPageRoutingModule } from './login-denuncia-routing.module';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { LoginDenunciaPage } from './login-denuncia.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginDenunciaPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[DenunciaService],
  declarations: [LoginDenunciaPage]
})
export class LoginDenunciaPageModule {}
