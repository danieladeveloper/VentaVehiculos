import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVehiculoComponent } from './add-vehiculo/add-vehiculo.component';
import { DetailVehiculoComponent } from './detail-vehiculo/detail-vehiculo.component';
import { VehiculoMainPageComponent } from './vehiculo-main-page/vehiculo-main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { VehiculoEstrellasPipe } from './vehiculo-estrellas.pipe';
import { VerVehiculoComponent } from './ver-vehiculo/ver-vehiculo.component';


@NgModule({
  declarations: [
    VehiculosComponent, 
    AddVehiculoComponent,
    DetailVehiculoComponent,
    VehiculoMainPageComponent,
    VehiculoEstrellasPipe,
    VerVehiculoComponent
  ],
  exports: [
    VehiculosComponent, 
    AddVehiculoComponent,
    DetailVehiculoComponent,
    VehiculoMainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModuloVehiculosModule { }
