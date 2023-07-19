import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAdminPageRoutingModule } from './login-admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginAdminPage } from './login-admin.page';
import { UsuarioService } from 'src/app/services/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAdminPageRoutingModule,ReactiveFormsModule
    ,HttpClientModule
  ],
  providers:[UsuarioService],
  declarations: [LoginAdminPage]
})
export class LoginAdminPageModule {}
