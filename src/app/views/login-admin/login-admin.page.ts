import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MessagingService } from 'src/app/services/messaging.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {

  togglePassword: string = 'password';

  loginForm: FormGroup = this.formBuilder.group({
    correo: ['', [
      Validators.required,
      Validators.maxLength(200),
    ]],
    contrasenia: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]],
  });

 
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService:UsuarioService,
    private messagingService: MessagingService,
    private router:Router
  ) {}

  ngOnInit() {}

  iniciarSesion(credentials: any) {
    var usuario: Usuario= new Usuario();
     usuario.correo=credentials.correo;
     usuario.contrasenia=credentials.contrasenia;
     console.log(usuario)
      this.usuarioService.validarUsuario(usuario).subscribe(data=>{
        console.log(data);
        var respuesta=data.response;
        if(respuesta==="Inicio de sesión exitoso."){
          var algo =localStorage.setItem('correo',credentials.correo.toString())
          console.log(algo);
          this.messagingService.success(respuesta);  
          this.router.navigate(['/catalogo-denuncias']);
          this.messagingService.success(respuesta)
        }else{
          this.messagingService.error(respuesta);
        }
        
      });      
   
  }


}
