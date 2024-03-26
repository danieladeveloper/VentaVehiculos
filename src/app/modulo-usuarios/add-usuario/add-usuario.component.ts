import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosServiceService } from '../usuarios-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrl: './add-usuario.component.css'
})
export class AddUsuarioComponent {

  miFormulario : FormGroup;

  constructor(private fb:FormBuilder, private varUsuarioService: UsuariosServiceService, public navRouter:Router, private _route:ActivatedRoute){

    this.miFormulario= fb.group({
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
      console.log('no es válido');
      console.log(this.miFormulario);
      alert("Faltan llenar datos del usuario");
      return;
    }

    console.log('es valido xs ',this.miFormulario.value);
    this.varUsuarioService.insertUsuario({...this.miFormulario.value}).subscribe(resp=>{
      console.log(resp);
      if(resp.codigo=='1'){
        alert("Usuario Insertado exitosamente");
        this.navRouter.navigate(['/usuarios/']);
      }
        
      else{
        alert("No se pudo insertar usuario por la Api");
      }
    });
  }

}
