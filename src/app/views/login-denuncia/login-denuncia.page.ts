import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Denuncia } from 'src/app/models/denuncia';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { MessagingService } from 'src/app/services/messaging.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-denuncia',
  templateUrl: './login-denuncia.page.html',
  styleUrls: ['./login-denuncia.page.scss'],
})
export class LoginDenunciaPage implements OnInit {
  togglePassword: string = 'password';

  loginForm: FormGroup = this.formBuilder.group({
    folio: ['', [
      Validators.required,
      Validators.pattern("^[0-9]+$"),
      Validators.minLength(5),
      Validators.maxLength(5),
    ]],
    contrasenia: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]],
  });

  validationMessages = {
    contrasenia: [
      { type: 'required', message: 'La contraseña es requerida' },
      { type: 'minlength', message: 'Mínimo 5 caracteres.' },
      { type: 'maxlength', message: 'Máximo 20 caracteres.' },
    ],
    correo: [
      { type: 'required', message: 'El folio es requerido' },
      { type: 'pattern', message: 'Folio inválido' },
      { type: 'minlength', message: 'Mínimo 5 caracteres.' },
      { type: 'maxlength', message: 'Máximo 5 caracteres.' },
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private denunciaService: DenunciaService,
    private messagingService: MessagingService,
    private router:Router
  ) {}

  ngOnInit() {}

  iniciarSesion(credentials: any) {
    var denuncia: Denuncia = new Denuncia();
    if (this.loginForm.valid) {
      denuncia.folio = credentials.folio;
      denuncia.contrasenia = credentials.contrasenia;
      this.denunciaService.validarDenuncia(denuncia).subscribe(data=>{
        console.log(data);
        var respuesta=data.response;
        if(respuesta==="Inicio de sesión exitoso. El folio y la contraseña son válidos."){
          localStorage.setItem('folio',credentials.folio.toString())
          this.messagingService.success(respuesta);  
          this.router.navigate(['/denuncia-cliente']);
        }else{
          this.messagingService.error(respuesta);
        }
        
      });      
    }else{
      this.messagingService.error('complete los campos');
    }
  }
}
