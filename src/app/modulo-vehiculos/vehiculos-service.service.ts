import { Injectable } from '@angular/core';
import { RespuestaApi, Vehiculo, VehiculoX } from './vehiculo.interface';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosServiceService {

  urlApi:string = "https://epico.gob.ec/vehiculo/public/api/";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  /*
  vehiculosServiceList:VehiculoX[] = [
    {
      vehiculo_id: 1,
      vehiculo_marca:"Toyota",
      vehiculo_modelo:"Hilux",
      vehiculo_anio:2019,
      vehiculo_color:"Rojo",
      vehiculo_kilometros:8000,
      vehiculo_precio:19000,
      vehiculo_calificacion:4,
      vehiculo_foto:"https://www.toyota.com.ec//admin/sites/default/files/2022-07/hilux-cd-4x2-potencia.png"
    },
    {
      vehiculo_id: 2,
      vehiculo_marca:"Nissan",
      vehiculo_modelo:"Frontier",
      vehiculo_anio:2021,
      vehiculo_color:"naranja",
      vehiculo_kilometros:12000,
      vehiculo_precio:22000,
      vehiculo_calificacion:5,
      vehiculo_foto:"https://cdn.pixabay.com/photo/2016/09/25/18/29/nissan-1694345_1280.jpg"
    },
    {
      vehiculo_id: 3,
      vehiculo_marca:"Renault",
      vehiculo_modelo:"Sandero",
      vehiculo_anio:2017,
      vehiculo_color:"plateado",
      vehiculo_kilometros:50000,
      vehiculo_precio:11000,
      vehiculo_calificacion:3,
      vehiculo_foto:"https://cdn.pixabay.com/photo/2015/06/04/20/10/renault-797808_1280.jpg"
    },
    {
      vehiculo_id: 4,
      vehiculo_marca:"Mazda",
      vehiculo_modelo:"Mazda 2",
      vehiculo_anio:2020,
      vehiculo_color:"negro",
      vehiculo_kilometros:65000,
      vehiculo_precio:14000,
      vehiculo_calificacion:4,
      vehiculo_foto:"https://cdn-3.expansion.mx/dims4/default/9a15101/2147483647/strip/true/crop/5000x2813+0+0/resize/1200x675!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F33%2F7f%2F0737cb904d26a0928c457fa09e3a%2Fmazda2-sedan-2023-galeria-001.jpeg"
    }
  ];
  */

  
  constructor(private http:HttpClient) { 

  }

  getVehiculos(filtro?:string, rows?:number, page?:number):Observable<RespuestaApi>{
    let body = new HttpParams();
    body = filtro ? body.set('filtro', filtro): body;
    body = rows ? body.set('rows',rows): body;
    body = page ? body.set('page', page) :body;

    return this.http.get<RespuestaApi>(this.urlApi + "vehiculos/",{params:body});
  }

  insertVehiculo(vehiculo: Vehiculo){
    return this.http.post<RespuestaApi>(this.urlApi+"vehiculo/", vehiculo, this.httpOptions);
  }

  getVehiculoById(id: string){
    return this.http.get<RespuestaApi>(this.urlApi+"vehiculo/"+id);
  }

  actualizarVehiculo(vehiculo: Vehiculo, id: string){
    return this.http.put<RespuestaApi>(this.urlApi+"vehiculo/"+id, vehiculo, this.httpOptions);
  }

  eliminarVehiculo(id:string){
    return this.http.delete<RespuestaApi>(this.urlApi+"vehiculo/"+id);
  }



  /*
  //observable
  vehiculosSubject = new BehaviorSubject(this.vehiculosServiceList);

  getVehiculos(){
    return this.vehiculosSubject.asObservable();
  }

  getVehiculoById( id: number ): VehiculoX | undefined{
    return this.vehiculosServiceList.find((vehiculo)=> vehiculo.vehiculo_id == id);
  }

  getTodoTexto(vehiculoItem: VehiculoX) {
    return `${vehiculoItem.vehiculo_marca} ${vehiculoItem.vehiculo_modelo} ${vehiculoItem.vehiculo_color} ${vehiculoItem.vehiculo_anio}`;
  }

  getVehiculosByText( texto_buscar: string ){
    const vehiculosEncontrados = this.vehiculosServiceList.filter (vehiculoItem => 
      this.getTodoTexto(vehiculoItem).toLocaleLowerCase().includes(texto_buscar.toLocaleLowerCase())
    );
    return vehiculosEncontrados;
  }

  addVehiculo(vehiculoItem: VehiculoX){
    this.vehiculosServiceList.push(vehiculoItem);
    this.vehiculosSubject.next(this.vehiculosServiceList);
  }

  deleteById(id: number){
    this.vehiculosServiceList = this.vehiculosServiceList.filter((vehiculoItem)=> vehiculoItem.vehiculo_id != id);
    this.vehiculosSubject.next(this.vehiculosServiceList);
  }*/
  
}
