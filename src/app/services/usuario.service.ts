import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})

export class UsuarioService{
    private url:string =environment.url;
    private apiurl:string= this.url+"Usuario/"
    
    constructor(private http: HttpClient){

    }
    validarUsuario(usuario:Usuario) {
        return this.http.post<any>(this.apiurl+'validarLoginAdmin', usuario);
    }
    salirUsuario(usuario:Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.apiurl + 'salirAdmin', usuario);
    }
    obtenerUsuaio(usuario:Usuario): Observable<Usuario[]> {
        return this.http.post<Usuario[]>(this.apiurl +'getUsuario',usuario);
    }
}