import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from '../usuarios-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  txtBusqueda: string = "";
  listaUsuarios: Array<Usuario> = [];

  public rows: number = 10;
  public page: number = 1;
  public pages:number = 0;
  public filtro: string = "";

  constructor(private varUsuarioService: UsuariosServiceService, public navRouter:Router, private _route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.consultarUsuarios();
  }


  consultarUsuarios(){
    console.log("ingresando a recibir");
    this.varUsuarioService.getUsuarios(this.filtro, this.rows, this.page).subscribe(respuesta =>{
      console.log("recibiendo");
      if(respuesta.codigo == '1'){

        console.log(respuesta);

        this.listaUsuarios = respuesta.data;
        this.pages = respuesta.pages;
        this.paginar(respuesta.pages)
      }
    });
  }



  cambiarPagina(pagina:number){
    this.page = pagina;
    this.consultarUsuarios();
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
      this.consultarUsuarios();
    }
  }
  atras(){
    if(this.page > 1){
      this.page-- ;
      this.consultarUsuarios();
    }
  }

  eliminar(codigo:any){
    this.varUsuarioService.eliminarUsuario(codigo).subscribe(data=>{
      if(data.codigo == '1'){
        this.consultarUsuarios();
        console.log("Usuario Eliminado");
        alert("Usuario Eliminado exitosamente");
        this.navRouter.navigate(['/usuarios/']);
      }
      else{
        console.log("no se pudo eliminar el usuario", data.mensaje);
      }
    });
  }


}
