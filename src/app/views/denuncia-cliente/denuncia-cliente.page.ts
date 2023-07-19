import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Denuncia } from 'src/app/models/denuncia';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { MessagingService } from 'src/app/services/messaging.service';
import { Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-denuncia-cliente',
  templateUrl: './denuncia-cliente.page.html',
  styleUrls: ['./denuncia-cliente.page.scss'],
})
export class DenunciaClientePage implements OnInit {
  denuncias:Denuncia[]=[];
  comentarios:Comentario[]=[];
  


  constructor(  private formBuilder: FormBuilder,
    private denunciaService: DenunciaService,
    private messagingService: MessagingService,
    private router:Router
    ) { 
   
    }

  ngOnInit() {
  this.obtenerDenunciaByFolio();
  
  }
  obtenerDenunciaByFolio(){
    var denuncia= new Denuncia;
    denuncia.folio=parseInt(localStorage.getItem('folio')!);
    this.denunciaService.obtenerDenunciaByFolio(denuncia).subscribe(data=>{
    console.log(data)
    this.denuncias=data;  
    })
    this.obtenerHistorialComentarios();
  }
  obtenerHistorialComentarios(){
    var comentario= new Comentario;
    comentario.folio=parseInt(localStorage.getItem('folio')!);
    this.denunciaService.obtenerHistorialComentarios(comentario).subscribe(data=>{
      console.log(data);
      this.comentarios=data;
    })
  }
  salir(){
    this.router.navigateByUrl('')
    localStorage.clear();
  }

}
