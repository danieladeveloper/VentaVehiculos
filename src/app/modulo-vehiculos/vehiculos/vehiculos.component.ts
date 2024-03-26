import { Component, OnInit} from '@angular/core';
import { RespuestaApi, Vehiculo, VehiculoX } from '../vehiculo.interface';
import { VehiculosServiceService } from '../vehiculos-service.service';
import { Route, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css'
})
export class VehiculosComponent implements OnInit{

  txtBusqueda: string = "";
  //vehiculoList:VehiculoX[]=[];

  listaVehiculos: Array<Vehiculo> = [];
  //listaVehiculos: Vehiculo[] = [];

  public rows: number = 10;
  public page: number = 1;
  public pages:number = 0;
  public filtro: string = "";

  constructor( private varVehiculoService: VehiculosServiceService , public navRouter:Router, private _route: ActivatedRoute){
    
  }

  ngOnInit(): void {
      this.consultarVehiculos();
  }

  consultarVehiculos(){
    this.varVehiculoService.getVehiculos(this.filtro, this.rows, this.page).subscribe(respuesta =>{
      if(respuesta.codigo == '1'){
        this.listaVehiculos = respuesta.data;
        this.pages = respuesta.pages;
        this.paginar(respuesta.pages)
      }
    });
  }

  cambiarPagina(pagina:number){
    this.page = pagina;
    this.consultarVehiculos();
  }

  listaPaginas:Array<number> = [];

  paginar(pages:number){
    this.listaPaginas = [];
    for(let i=1; i<=pages; i++){
      this.listaPaginas.push(i);
    }
  }

  siguiente(){
    if(this.page < this.pages){
      this.page ++;
      this.consultarVehiculos();
    }
  }
  atras(){
    if(this.page > 1){
      this.page-- ;
      this.consultarVehiculos();
    }
  }

  eliminar(codigo:any){
    this.varVehiculoService.eliminarVehiculo(codigo).subscribe(data=>{
      if(data.codigo == '1'){
        this.consultarVehiculos();
        console.log("vehiculo Eliminado");

        alert("vehiculo Eliminado exitosamente");
        this.navRouter.navigate(['']);
      }
      else{
        console.log("no se pudo eliminar el registro", data.mensaje);
      }
    });
  }


  /*
  ngOnInit(): void {
    //nos suscribimos al observable para escuchar los cambios de getVehiculos
    this.varVehiculoService.getVehiculos().subscribe(vehiculoObservable=> {
      this.vehiculoList = vehiculoObservable;
    });
  }


  deleteVehiculoById(id:number | undefined ){
    if(id)
    this.varVehiculoService.deleteById(id);
  }

  buscarVehiculo(){
    this.vehiculoList = this.varVehiculoService.getVehiculosByText(this.txtBusqueda);
  }

  doStars(calificacion:number){
    let estrellas = "";
    for(let i = 0; i< calificacion; i++){
      estrellas += "*";
    }

    return estrellas;

  }*/



}
