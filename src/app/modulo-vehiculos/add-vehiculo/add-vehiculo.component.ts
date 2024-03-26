import { Component, OnInit } from '@angular/core';
import { VehiculosServiceService } from '../vehiculos-service.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  styleUrl: './add-vehiculo.component.css'
})
export class AddVehiculoComponent implements OnInit {
  miFormulario: FormGroup;

  constructor(public fb:FormBuilder, private varVehiculoService: VehiculosServiceService, public navRouter:Router, private _route: ActivatedRoute){
    
    
    this.miFormulario = fb.group({
      codigo: ['',[
        Validators.required,
        //Validators.pattern(/^([0-9])*$/) //valida solo numeros
      ]],

      marca: ['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      modelo: ['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      anio: ['',[
        Validators.required,
        Validators.pattern(/^([0-9])*$/) //valida solo numeros
      ]],
      /*
      color: ['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],*/
      kilometraje: ['',[
        Validators.required,
        Validators.pattern(/^([0-9])*$/) //valida solo numeros
      ]],
      precio: ['',[
        Validators.required,
        Validators.pattern(/^([0-9])*$/) //valida solo numeros
      ]],
      calificacion: ['',[
        Validators.required,
        Validators.pattern(/^([0-9])*$/) //valida solo numeros
      ]],
      foto: ['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500)
      ]]
    });

    


  }

  submit(){
    
    if(!this.miFormulario.valid){
      console.log('no es valido');
      console.log(this.miFormulario);
      alert("Faltan llenar datos del vehiculo");
      return;
    }

    console.log('es valido xs ',this.miFormulario.value);
    this.varVehiculoService.insertVehiculo({...this.miFormulario.value}).subscribe(resp=>{
      console.log(resp);
      if(resp.codigo=='1'){
        alert("vehiculo Insertado exitosamente");
        this.navRouter.navigate(['']);
      }
        
      else{
        alert("No se pudo insertar vehiculo por la Api");
      }
    });
  }


  ngOnInit(): void {
      
  }
}


