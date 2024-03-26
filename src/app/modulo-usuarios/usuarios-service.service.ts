import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { RespuestaUsuarioApi, Usuario } from './usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {
  urlApi:string = "https://epico.gob.ec/vehiculo/public/api/";


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) {

  }

  getUsuarios(filtro?:string, rows?:number, page?:number):Observable<RespuestaUsuarioApi>{
    let body = new HttpParams();
    body = filtro ? body.set('filtro', filtro): body;
    body = rows ? body.set('rows',rows): body;
    body = page ? body.set('page', page) :body;

    return this.http.get<RespuestaUsuarioApi>(this.urlApi + "clientes/",{params:body});
  }


  insertUsuario(usuario: Usuario){
    return this.http.post<RespuestaUsuarioApi>(this.urlApi+"cliente/", usuario, this.httpOptions);
  }


  getUsuarioById(id: string){
    return this.http.get<RespuestaUsuarioApi>(this.urlApi+"cliente/"+id);
  }

  actualizarUsuario(usuario: Usuario, id: string){
    return this.http.put<RespuestaUsuarioApi>(this.urlApi+"cliente/"+id, usuario, this.httpOptions);
  }

  eliminarUsuario(id:string){
    return this.http.delete<RespuestaUsuarioApi>(this.urlApi+"cliente/"+id);
  }
  
}
