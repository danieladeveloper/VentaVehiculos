import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from '../vehiculo.interface';
import { VehiculosServiceService } from '../vehiculos-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-vehiculo',
  templateUrl: './detail-vehiculo.component.html',
  styleUrl: './detail-vehiculo.component.css'
})
export class DetailVehiculoComponent implements OnInit{

  miFormulario: FormGroup;
  vehiculo : Vehiculo | undefined;

  constructor(public fb:FormBuilder, private miRouter: ActivatedRoute, private varVehiculoService: VehiculosServiceService, public navRouter:Router){

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
        ]],
        */
        kilometraje: ['',[
          Validators.required,
          Validators.pattern(/^([0-9])*$/) //valida solo numeros
        ]],
        precio: ['',[
          Validators.required,
          //Validators.pattern(/^([0-9])*$/) //valida solo numeros
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


      //this.miFormulario.controls['codigo'].disable();

  }


  submit(){
    
    if(!this.miFormulario.valid){
      console.log('no es valido');
      console.log(this.miFormulario);
      alert("Faltan llenar datos del vehiculo");
      return;
    }

    console.log('es valido xs ',this.miFormulario.value);
    this.varVehiculoService.actualizarVehiculo({...this.miFormulario.value}, this.miFormulario.controls["codigo"].value).subscribe(resp=>{
      console.log(resp);
      if(resp.codigo=='1'){
        alert("vehiculo Actualizado exitosamente");
        this.navRouter.navigate(['']);
      }
      else{
        alert("No se pudo actualizar vehiculo por la Api");
      }
    });
  }

  ngOnInit(): void {
    this.miRouter.params.subscribe(params => {
      console.log(params);
      this.varVehiculoService.getVehiculoById(params["id"]).subscribe(resp=>{
        if(resp.codigo=='1'){
          this.vehiculo = resp.data;
          this.miFormulario.controls['codigo'].setValue(this.vehiculo?.codigo);
          this.miFormulario.controls['marca'].setValue(this.vehiculo?.marca);
          this.miFormulario.controls['modelo'].setValue(this.vehiculo?.modelo);
          this.miFormulario.controls['anio'].setValue(this.vehiculo?.anio);
          this.miFormulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
          this.miFormulario.controls['precio'].setValue(this.vehiculo?.precio);
          this.miFormulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
          this.miFormulario.controls['foto'].setValue(this.vehiculo?.foto);


        }
        else{
          alert("No se pudo cargar la información del vehiculo");
        }
      });
    })
  }



}
