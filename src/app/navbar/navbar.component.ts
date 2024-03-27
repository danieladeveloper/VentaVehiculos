import { Component, OnInit} from '@angular/core';
import { VehiculosServiceService } from '../modulo-vehiculos/vehiculos-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  menu: string;

  constructor(public varVehiculoService: VehiculosServiceService){
    this.menu = "Venta de Vehículos";
  }

  ngOnInit(): void {
      
  }
}
