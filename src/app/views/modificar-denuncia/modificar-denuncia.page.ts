import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Denuncia } from 'src/app/models/denuncia';
import { Usuario } from 'src/app/models/usuario';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { MessagingService } from 'src/app/services/messaging.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modificar-denuncia',
  templateUrl: './modificar-denuncia.page.html',
  styleUrls: ['./modificar-denuncia.page.scss'],
})
export class ModificarDenunciaPage implements OnInit {
  denuncias:Denuncia[]=[];
  denuncia= new Denuncia;

  nuevoComentario: string = '';
  nuevoEstatus: string = '2';
  constructor(private denunciaService:DenunciaService, private usuarioService:UsuarioService,
    private router: Router, private messaginService: MessagingService) { }

  ngOnInit() {
    this.obtenerDenunciaByFolio();
  }
  obtenerDenunciaByFolio(){
    var denuncia= new Denuncia;
    denuncia.folio=parseInt(localStorage.getItem('folioA')!);
    this.denunciaService.obtenerDenunciaByFolio(denuncia).subscribe(data=>{
    console.log(data)
    this.denuncias=data;  
    })
    
  }
  salir(){
    var usuario= new Usuario;
    usuario.correo= localStorage.getItem('correo')?.toString()!;
    this.usuarioService.salirUsuario(usuario).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/']);
    })
    this.messaginService.info('Sesion cerrada');
    localStorage.clear();    
  }
  confirmar(): void {
    this.denuncia.folio=parseInt(localStorage.getItem('folioA')!);
    this.denuncia.estatusid=parseInt(this.nuevoEstatus);
    this.denuncia.comentario=this.nuevoComentario.toString();
    this.denunciaService.actualizarEstatusYAgregarComentario(this.denuncia).subscribe(
      (response) => {
        // Lógica para manejar la respuesta exitosa
        console.log('Respuesta exitosa:', response);
        this.messaginService.success('Se a actualizado la denuncia correctamente')
      }
     
    );
    this.messaginService.error('Algo salio mal');

  }

}
