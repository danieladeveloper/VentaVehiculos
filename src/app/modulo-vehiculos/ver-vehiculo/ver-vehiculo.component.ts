import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo.interface';
import { VehiculosServiceService } from '../vehiculos-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-vehiculo',
  templateUrl: './ver-vehiculo.component.html',
  styleUrl: './ver-vehiculo.component.css'
})
export class VerVehiculoComponent implements OnInit{

 vehiculo: Vehiculo | undefined;

 /* vehiculo: Vehiculo={
    codigo: "SDF",
    marca:"Ford",
    //color?:string,
    modelo:"pickup",
    kilometraje:"10",
    precio:20000,
    foto:"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_0160876bba4842158ee83c656f3d390b.webp",
    anio:2020,
    calificacion:1
};*/

  constructor(public mirouter:ActivatedRoute, public varVehiculoService:VehiculosServiceService){

  }

  ngOnInit(): void {
    this.mirouter.params.subscribe(parametros=>{
      this.varVehiculoService.getVehiculoById(parametros["id"]).subscribe(resp=>{
        if(resp.codigo=="1"){
          this.vehiculo=resp.data;
          
        }
      });
    });
  }
}
