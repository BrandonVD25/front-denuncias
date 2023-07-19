import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Denuncia } from 'src/app/models/denuncia';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { MessagingService } from 'src/app/services/messaging.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-catalogo-denuncias',
  templateUrl: './catalogo-denuncias.page.html',
  styleUrls: ['./catalogo-denuncias.page.scss'],
})
export class CatalogoDenunciasPage implements OnInit {
denuncias:Denuncia[]=[];

  constructor(private denunciaService:DenunciaService,
    private formBuilder:FormBuilder,private router: Router,private usuarioService:UsuarioService,private messagingService: MessagingService) { }

  ngOnInit() {
    this.obtenerDenuncias();
  }
  obtenerDenuncias(){
    this.denunciaService.obtenerInformesDenuncia().subscribe(data=>{
      this.denuncias=data
      console.log(data);
    })
  }
  salir(){
    var usuario= new Usuario;
    usuario.correo= localStorage.getItem('correo')?.toString()!;
    this.usuarioService.salirUsuario(usuario).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/']);
    })
    this.messagingService.info('Sesion cerrada');
    localStorage.clear();    
  }
  redirectTo(folio:any){
    localStorage.setItem('folioA', folio.toString());
    this.router.navigate(['/modificar-denuncia']);
  }


}
