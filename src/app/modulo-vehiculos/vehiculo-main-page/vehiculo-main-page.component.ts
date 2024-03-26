import { Component, OnInit } from '@angular/core';
import { AddVehiculoComponent } from '../add-vehiculo/add-vehiculo.component';
import { VehiculosComponent } from '../vehiculos/vehiculos.component';

@Component({
  selector: 'app-vehiculo-main-page',
  templateUrl: './vehiculo-main-page.component.html',
  styleUrl: './vehiculo-main-page.component.css'
})
export class VehiculoMainPageComponent implements  OnInit{

  ngOnInit(): void {
      console.log("iniciando MAINPAGE");
  }
}
