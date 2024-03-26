import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from '../usuarios-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.interface';

@Component({
  selector: 'app-detail-usuario',
  templateUrl: './detail-usuario.component.html',
  styleUrl: './detail-usuario.component.css'
})
export class DetailUsuarioComponent implements OnInit{
  miFormulario: FormGroup;
  usuario: Usuario | undefined;

  constructor(private varUsuarioService:UsuariosServiceService, public fb:FormBuilder, private miRouter: ActivatedRoute, private navRouter: Router){
    this.miFormulario = fb.group({
      id: ['',[
        Validators.required,
        Validators.pattern(/^([0-9])*$/) //valida solo numeros
      ]],
      nombre: ['',[
        Validators.required,
        Validators.min(2),
        Validators.maxLength(50)
      ]],
      apellido: ['',[
        Validators.required,
        Validators.min(2),
        Validators.maxLength(50)
      ]],
      password: ['',[
        Validators.required,
        Validators.min(5),
        Validators.maxLength(30)
      ]],
      telefono:['',[
        
      ]],
      email:['',[
        Validators.email
      ]]
    });
  }


  submit(){
    
    if(!this.miFormulario.valid){
      console.log('no es valido');
      console.log(this.miFormulario);
      alert("Faltan llenar datos del usuario");
      return;
    }

    console.log('es valido xs ',this.miFormulario.value);
    this.varUsuarioService.actualizarUsuario({...this.miFormulario.value}, this.miFormulario.controls["id"].value).subscribe(resp=>{
      console.log(resp);
      if(resp.codigo=='1'){
        alert("usuario Actualizado exitosamente");
        this.navRouter.navigate(['/usuarios/']);
      }
      else{
        alert("No se pudo actualizar usuario por la Api");
      }
    });
  }


  ngOnInit(): void {
    this.miRouter.params.subscribe(params => {
      console.log(params);
      this.varUsuarioService.getUsuarioById(params["id"]).subscribe(resp=>{
        if(resp.codigo=='1'){
          this.usuario = resp.data;
          this.miFormulario.controls['id'].setValue(this.usuario?.id);
          this.miFormulario.controls['nombre'].setValue(this.usuario?.nombre);
          this.miFormulario.controls['apellido'].setValue(this.usuario?.apellido);
          this.miFormulario.controls['password'].setValue(this.usuario?.password);
          this.miFormulario.controls['telefono'].setValue(this.usuario?.telefono);
          this.miFormulario.controls['email'].setValue(this.usuario?.email);


        }
        else{
          alert("No se pudo cargar la información del usuario");
        }
      });
    })
  }


}
