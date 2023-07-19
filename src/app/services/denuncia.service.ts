import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Denuncia } from '../models/denuncia';
import { Comentario } from '../models/comentario';
@Injectable({
  providedIn: 'root'
})

export class DenunciaService{
    private url:string =environment.url;
    private apiurl:string= this.url+"Denuncia/"
    
    constructor(private http: HttpClient){

    }
    validarDenuncia(denuncia: Denuncia): Observable<any> {
        return this.http.post<any>(this.apiurl+'validarDenuncia', denuncia);
    }
    obtenerDenunciaByFolio(denuncia: Denuncia): Observable<Denuncia[]> {
        return this.http.post<Denuncia[]>(this.apiurl + 'obtenerDenunciaByFolio', denuncia);
    }
    obtenerInformesDenuncia(): Observable<Denuncia[]> {
        return this.http.get<Denuncia[]>(this.apiurl + 'listaDenuncias');
    }
    obtenerHistorialComentarios(comentario:Comentario):Observable<Comentario[]>{
        return this.http.post<Comentario[]>(this.apiurl+'HistorialComentarios',comentario);
    }
    agregarDenuncia(denuncia: Denuncia){
        return this.http.post<any>(this.apiurl+'agregarDenuncia',denuncia);
    }
    actualizarEstatusYAgregarComentario(denuncia:Denuncia){
        return this.http.post<any>(this.apiurl+'ActualizarEstatusYAgregarComentario', denuncia);
      }

}